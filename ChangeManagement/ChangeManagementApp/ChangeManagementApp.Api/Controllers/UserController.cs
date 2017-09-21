using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ChangeManagementApp.Api.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await Task.FromResult(id * id);

            return new ObjectResult(result);
        }
    }
}