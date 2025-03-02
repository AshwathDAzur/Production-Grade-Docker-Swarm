using Microsoft.EntityFrameworkCore;
using Polly;

namespace EmployeeManagementAPI.DataAccess;

public class EmployeeManagementDBContext : DbContext
{

    public EmployeeManagementDBContext(DbContextOptions<EmployeeManagementDBContext> options) : base(options)
    {

    }

    public DbSet<Employee> Employees { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Employee>().HasKey(m => m.EmployeeId);
        builder.Entity<Employee>().ToTable("Employee");
        base.OnModelCreating(builder);
    }

    public void MigrateDB()
    {
        Policy
            .Handle<Exception>()
            .WaitAndRetry(10, r => TimeSpan.FromSeconds(10))
            .Execute(() => Database.Migrate());
    }

}
