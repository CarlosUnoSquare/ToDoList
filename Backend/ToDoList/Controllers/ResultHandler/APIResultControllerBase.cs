using Microsoft.AspNetCore.Mvc;
using System.Net;
using ToDoList.Controllers.ResultHandler;

namespace InterviewSystem.API.ResultHandler
{
    public class ApiResultControllerBase : ControllerBase
    {
        protected IActionResult ApiOk()
        {
            return StatusCode(StatusCodes.Status200OK,
                new ApiResult
                {
                    Success = true,
                });
        }
     

        protected IActionResult ApiOk<T>(T data)
        {
            return StatusCode(StatusCodes.Status200OK,
                new ApiResult<T>
                {
                    Data = data,
                    Success = true,
                });
        }

      
        protected IActionResult ApiOk<T, TU>(T data, TU metadata)
        {
            return StatusCode(StatusCodes.Status200OK,
                   new ApiResult<T, TU>
                   {
                       Data = data,
                       Metadata = metadata,
                       Success = true,
                   });
        }

        protected IActionResult ApiResult(int statusCode)
        {
            return StatusCode(statusCode,
                new ApiResult
                {
                    Success = true,
                });
        }

        protected IActionResult ApiResult<T>(T data, int statusCode)
        {
            return StatusCode(statusCode,
                    new ApiResult<T>
                    {
                        Data = data,
                        Success = true,
                    });
        }
        protected IActionResult ApiResult<T, TU>(T data, TU metadata, int statusCode)
        {
            return StatusCode(statusCode,
                   new ApiResult<T, TU>
                   {
                       Data = data,
                       Metadata = metadata,
                       Success = true,
                   });
        }

        /// <summary>
        /// This will return a bad request by defaul status code with the error message provided
        /// </summary>
        /// <param name="errorMessage"></param>
        /// <returns></returns>
        protected IActionResult APINotFound(string? errorMessage = null)
        {

            return StatusCode(
                    StatusCodes.Status404NotFound,
                    new ApiResult
                    {
                        Success = false,
                        ErrorMessage = errorMessage
                    }
                );
        }

        /// <summary>
        /// This will return a bad request by defaul status code with the error message provided
        /// </summary>
        /// <param name="errorMessage"></param>
        /// <returns></returns>
        protected IActionResult APIBadRequest(string? errorMessage = null)
        {

            return StatusCode(
                    StatusCodes.Status400BadRequest,
                    new ApiResult
                    {
                        Success = false,
                        ErrorMessage = errorMessage
                    }
                );
        }

        /// <summary>
        /// This will return a bad request by defaul status code with the error message provided
        /// </summary>
        /// <param name="errorMessage"></param>
        /// <returns></returns>
        protected IActionResult APIInternalServerError(string? errorMessage = null)
        {

            return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new ApiResult
                    {
                        Success = false,
                        ErrorMessage = errorMessage
                    }
                );
        }
    }
}
