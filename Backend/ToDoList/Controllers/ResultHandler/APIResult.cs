namespace ToDoList.Controllers.ResultHandler
{
    public class ApiResult
    {
        public string? ErrorMessage { get; set; }
        public bool Success { get; set; }
    }


    public class ApiResult<T> : ApiResult
    {
        public T? Data { get; set; }
    }

    public class ApiResult<T, U> : ApiResult
    {
        public T? Data { get; set; }
        public U? Metadata { get; set; }
    }
}
