using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Text;
using ToDoList.Models.DTOs;
using ToDoList.Services.Interfaces;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        readonly ILoginServices loginServices;
        public LoginController(ILoginServices loginServices)
        {
            this.loginServices = loginServices;
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.BadRequest)]

        public IActionResult Post([FromBody] LoginDto loginUser)
        {
            var tokenResult = loginServices.Login(loginUser);
            if (tokenResult == string.Empty) { 
                return BadRequest("UserName or Password are not correct");
            }
            return Ok(tokenResult);
        }
    }
}
