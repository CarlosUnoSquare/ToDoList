using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ToDoList.Models
{
    public class ToDoDto
    {
        public string Title { get; set; }
        public ToDoStatus Status { get; set; }
    }
}
