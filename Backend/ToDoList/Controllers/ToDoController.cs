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
    public class ToDoController : ControllerBase
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
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult GetToDoList([FromBody] ToDoDto toDo)
        {
            var result = toDoService.CreateToDo(toDo);
            return Ok(result);
        }

        [HttpGet(":id")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult GetToDoList(int id)
        {
            var result = toDoService.GetToDoById(id);
            return Ok(result);
        }

        [HttpPut(":id")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult UpdateToDo([FromBody] ToDoDto todo, int id)
        {
            var result = toDoService.UpdateToDo(id, todo);
            return Ok(result);
        }

        [HttpDelete(":id")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Unauthorized)]

        public IActionResult DeleteToDo(int id)
        {
            var result = toDoService.DeleteToDo(id);
            return Ok(result);
        }
    }
}
