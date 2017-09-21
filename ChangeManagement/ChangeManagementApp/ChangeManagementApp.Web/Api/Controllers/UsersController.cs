using ChangeManagementApp.Services.Helper;
using ChangeManagementApp.Services.Interfaces;
using ChangeManagementApp.Services.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChangeManagementApp.Web.Api.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost("login")]
        public async Task<UserModel> Login([FromBody]UserModel userViewModel)
        {
            return await _userService.ValidateLogin(userViewModel);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<UserModel> Get(int id)
        {
            var user = await _userService.FindUserById(id);
            var model = Mapper.Map<UserModel>(user);

            return model;
        }

        // GET api/values/username
        [HttpGet("{username}")]
        public async Task<UserModel> GetUserByUsername(string username)
        {
            var user = await _userService.FindUserByUsername(username);
            var model = Mapper.Map<UserModel>(user);

            return model;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UserModel user)
        {
            try
            {
                _userService.Create(user);
                return Created("/", user);
            }
            catch(Exception e)
            {
                return BadRequest();
            }
            }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("roles")]
        public IEnumerable<UserTypeModel> RoleTypes()
        {
            return _userService.getRoleTypes();
        }
    }
}