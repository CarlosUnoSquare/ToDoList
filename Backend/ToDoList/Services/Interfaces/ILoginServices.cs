using System.Security.Claims;
using ToDoList.Models.DTOs;

namespace ToDoList.Services.Interfaces
{
    public interface ILoginServices
    {
        string Login(LoginDto user);
    }
}
