using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ToDoList.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ToDoStatus Status { get; set; } = 0;
        public bool IsDeleted { get; set; } = false;
    }
}
