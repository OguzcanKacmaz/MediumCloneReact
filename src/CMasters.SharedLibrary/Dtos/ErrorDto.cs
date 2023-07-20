namespace CMasters.SharedLibrary.Dtos;

public class ErrorDto
{
    public List<string> Errors { get; set; } = new ();
    public bool IsShow { get; set; }
    public ErrorDto(string error,bool isShow)
    {
        Errors.Add (error);
        IsShow = isShow;    
    }
    public ErrorDto(List<string> errors,bool isShow)
    {
        Errors = errors;
        IsShow = isShow;
    }
}
