var builder = WebApplication.CreateBuilder(args);

// add DBContext
var sqlConnectionString = builder.Configuration.GetConnectionString("EmployeeManagementCN");
builder.Services.AddDbContext<EmployeeManagementDBContext>(options => options.UseSqlServer(sqlConnectionString));

// Add framework services
builder.Services
    .AddMvc(options => options.EnableEndpointRouting = false)
    .AddNewtonsoftJson();

// Register the Swagger generator, defining one or more Swagger documents
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "CustomerManagement API", Version = "v1" });
});

// Add health checks
builder.Services.AddHealthChecks()
    .AddDbContextCheck<EmployeeManagementDBContext>();

// setup MVC
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//using (var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
//{
//    scope.ServiceProvider.GetService<EmployeeManagementDBContext>().MigrateDB();
//}
 
app.UseHealthChecks("/healthCheck");

app.MapControllers();

app.Run();
