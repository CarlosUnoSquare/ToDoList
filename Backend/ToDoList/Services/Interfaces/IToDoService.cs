using ToDoList.Models;

namespace ToDoList.Services.Interfaces
{
    public interface IToDoService
    {
        List<ToDo> GetAllToDoList();
        ToDo CreateToDo(ToDoDto toDo);
        ToDo GetToDoById(int id);
        bool DeleteToDo(int id);
        ToDo UpdateToDo(int id, ToDoDto toDo);
    }
}
