using InterviewSystem.API.ResultHandler;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using ToDoList.Models;
using ToDoList.Services.Interfaces;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ToDoController : ApiResultControllerBase
    {
        readonly IToDoService toDoService;
        public ToDoController(IToDoService toDoService)
        {
            this.toDoService = toDoService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]
        public IActionResult GetToDoList() { 
            var result = toDoService.GetAllToDoList();
            return ApiOk(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult GetToDoList([FromBody] ToDoDto toDo)
        {
            var result = toDoService.CreateToDo(toDo);
            return ApiOk(result);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult GetToDoList(int id)
        {
            var result = toDoService.GetToDoById(id);
            return ApiOk(result);
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult UpdateToDo([FromBody] ToDoDto todo, int id)
        {
            var result = toDoService.UpdateToDo(id, todo);
            return ApiOk(result);
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult DeleteToDo(int id)
        {
            var result = toDoService.DeleteToDo(id);
            return ApiOk(result);
        }
    }
}
