namespace CMasters.SharedLibrary.Dtos;

public class Response<TEntity> where TEntity : class
{
    public TEntity Data { get; set; }
    public ErrorDto Error { get; set; }
    public int StatusCode { get; set; }
    public bool IsSuccesfull {get;set;}

    public static Response<TEntity> Success(TEntity data, int statusCode, bool isSuccessfull)
    {
        return new Response<TEntity> { Data = data, StatusCode = statusCode, IsSuccesfull = isSuccessfull };
    }
    public static Response<TEntity> Fail(ErrorDto errorDto, int statusCode, bool isSuccessfull)
    {
        return new Response<TEntity> {Error=errorDto, StatusCode = statusCode, IsSuccesfull = isSuccessfull };
    }
}
