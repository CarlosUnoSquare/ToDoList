using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using ToDoList.Services.Interfaces;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        readonly IToDoService toDoService;
        public ToDoController(IToDoService toDoService)
        {
            this.toDoService = toDoService;
        }

        [HttpGet]
        public IActionResult GetToDoList() { 
            var result = toDoService.GetAllToDoList();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult GetToDoList([FromBody] ToDoDto toDo)
        {
            var result = toDoService.CreateToDo(toDo);
            return Ok(result);
        }

        [HttpGet(":id")]
        public IActionResult GetToDoList(int id)
        {
            var result = toDoService.GetToDoById(id);
            return Ok(result);
        }

        [HttpPut(":id")]
        public IActionResult UpdateToDo([FromBody] ToDoDto todo, int id)
        {
            var result = toDoService.UpdateToDo(id, todo);
            return Ok(result);
        }

        [HttpDelete(":id")]
        public IActionResult DeleteToDo(int id)
        {
            var result = toDoService.DeleteToDo(id);
            return Ok(result);
        }
    }
}
