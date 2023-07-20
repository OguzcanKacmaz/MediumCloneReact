using Microsoft.AspNetCore.Identity;

namespace CMasters.Entities.Concrete;

public class AppUser : IdentityUser
{
    public override string UserName
    {
        get => base.UserName;
        set
        {
            var userName = value.Substring(0, value.IndexOf("@"));
            base.UserName = userName;
        }
    }
    public ICollection<Post> Posts { get; set; }
}
