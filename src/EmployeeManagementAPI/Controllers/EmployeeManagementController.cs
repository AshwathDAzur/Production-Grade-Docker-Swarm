namespace EmployeeManagementAPI.Controllers;

[Route("/api/[controller]")]
public class EmployeeManagementController : Controller
{
    EmployeeManagementDBContext _dbContext;

    public EmployeeManagementController(EmployeeManagementDBContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllAsync()
    {
        return Ok(await _dbContext.Employees.ToListAsync());
    }

    [HttpGet]
    [Route("{employeeId}", Name = "GetByEmployeeId")]
    public async Task<IActionResult> GetByEmployeeId(string employeeId)
    {
        var employee = await _dbContext.Employees.FirstOrDefaultAsync(c => c.EmployeeId == employeeId);
        if (employee == null)
        {
            return NotFound();
        }
        return Ok(employee);
    }

    [HttpPost]
    public async Task<IActionResult> RegisterAsync([FromBody] Employee newEmployee)
    {
        try
        {
            if (ModelState.IsValid)
            {
                newEmployee.EmployeeId = Guid.NewGuid().ToString();
                // insert new Employee
                _dbContext.Employees.Add(newEmployee);
                await _dbContext.SaveChangesAsync();

                // return result
                return CreatedAtRoute("GetByEmployeeId", new { EmployeeId = newEmployee.EmployeeId }, newEmployee);
            }
            return BadRequest();
        }
        catch (DbUpdateException)
        {
            ModelState.AddModelError("", "Unable to save changes. " +
                "Try again, and if the problem persists " +
                "see your system administrator.");
            return StatusCode(StatusCodes.Status500InternalServerError);
            throw;
        }
    }
}
