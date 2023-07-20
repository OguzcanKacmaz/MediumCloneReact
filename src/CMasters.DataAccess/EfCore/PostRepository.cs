using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using CMasters.Entities.Concrete;

namespace CMasters.DataAccess.EfCore;

public class PostRepository : GenericRepository<Post>, IPostRepository
{
    public PostRepository(ApplicationDbContext context) : base(context)
    {
    }
}
