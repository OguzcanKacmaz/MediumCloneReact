namespace CMasters.Entities.Base;

public class BaseEntity
{
    public string Id { get; set; }=Guid.NewGuid().ToString();
}
