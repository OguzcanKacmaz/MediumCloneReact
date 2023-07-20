using CMasters.Entities.Base;

namespace CMasters.Entities.Concrete;

public class Category:BaseEntity
{    
    public string Name { get; set; }
    public ICollection<Post> Posts { get; set; }
}
