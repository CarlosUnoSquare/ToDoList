using InterviewSystem.API.ResultHandler;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using ToDoList.Models.DTOs;
using ToDoList.Services.Interfaces;
namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ApiResultControllerBase
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
                return APIBadRequest("UserName or Password are incorrect");
            }
            return ApiOk(tokenResult);
        }
    }
}
