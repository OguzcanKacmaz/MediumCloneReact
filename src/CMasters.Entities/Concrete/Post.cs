using CMasters.Entities.Base;

namespace CMasters.Entities.Concrete;

public class Post:BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PostCreatedTime { get; set; }
    public int LikeCount { get; set; }
    public int ViewCount { get; set; }
    public string AppUserId { get; set; }
    public ICollection<Category> Categories { get; set; }
    public AppUser AppUser { get; set; }
}
