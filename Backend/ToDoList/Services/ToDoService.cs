using ToDoList.Models;
using ToDoList.Services.Interfaces;

namespace ToDoList.Services
{
    public class ToDoService : IToDoService
    {
        List<ToDo> _toDoList = new List<ToDo>(); 
        public ToDoService()
        {
            _toDoList.Add(new ToDo()
            {
                Id = 1,
                Status = ToDoStatus.ToDo,
                Title = "Clean the house",
                IsDeleted = false
            });

            _toDoList.Add(new ToDo()
            {
                Id = 2,
                Status = ToDoStatus.OnGoing,
                Title = "Prepare the dinner",
                IsDeleted = false
            });


            _toDoList.Add(new ToDo()
            {
                Id = 3,
                Status = ToDoStatus.Completed,
                Title = "Do the homework",
                IsDeleted = false
            });
        }
        public ToDo CreateToDo(ToDoDto toDo)
        {
            ToDo newToDo = new ToDo();
            newToDo.Id = _toDoList.Count() + 1;
            newToDo.Title = toDo.Title;
            _toDoList.Add(newToDo);
            return newToDo;
        }

        public bool DeleteToDo(int id)
        {
            var toDo= _toDoList.FirstOrDefault(x => x.Id == id);
            if (toDo is not null) { 
                toDo.IsDeleted = true;
                return true;
            }
            return false;
        }

        public List<ToDo> GetAllToDoList()
        {
            return _toDoList.Where(t => !t.IsDeleted).ToList();
        }

        public ToDo GetToDoById(int id)
        {
            ToDo toDoFind = _toDoList.FirstOrDefault(x => x.Id == id);
            return toDoFind;
        }

        public ToDo UpdateToDo(int id, ToDoDto toDo)
        {
            var toDoFind = _toDoList.FirstOrDefault(x => x.Id == id);
            toDoFind.Title = toDo.Title;
            toDoFind.Status = toDo.Status;
            return toDoFind;
        }
    }
}
