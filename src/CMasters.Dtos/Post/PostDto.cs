using CMasters.Entities.Concrete;

namespace CMasters.Dtos.Post;

public class PostDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PostCreatedTime { get; set; }
    public int LikeCount { get; set; }
    public int ViewCount { get; set; }
    public List<string> Categories { get; set; }=new List<string>();
    public string AppUserName { get; set; }
}
