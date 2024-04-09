using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ToDoList.Models.DTOs;
using ToDoList.Services.Interfaces;

namespace ToDoList.Services
{
    public class LoginService : ILoginServices
    {
        private IConfiguration _config;
        private const string LOGIN_USER = "todo";
        private const string LOGIN_PASSWORD = "todo123";

        public LoginService(IConfiguration config)
        {
            this._config = config;
        }

        private IEnumerable<Claim> GetTokenClaims(LoginDto user)
        {
            return new List<Claim>
            {
                new Claim("UserName", user.UserName),
            };
        }

        public string Login(LoginDto user)
        {
            if (user.UserName == LOGIN_USER && user.Password == LOGIN_PASSWORD)
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var Sectoken = new JwtSecurityToken(_config["Jwt:Issuer"],
                  _config["Jwt:Issuer"],
                  claims: GetTokenClaims(user),
                  expires: DateTime.Now.AddMinutes(120),
                  signingCredentials: credentials);

                var token = new JwtSecurityTokenHandler().WriteToken(Sectoken);

                return token;
            }
            return string.Empty;
        }
    }
}
