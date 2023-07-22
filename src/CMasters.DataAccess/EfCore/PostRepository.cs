using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using CMasters.Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System.Linq.Expressions;

namespace CMasters.DataAccess.EfCore;

public class PostRepository : GenericRepository<Post>, IPostRepository
{
    private readonly ApplicationDbContext _db;

    public PostRepository(ApplicationDbContext db) : base(db)
    {
        _db = db;
    }


    public async Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(Expression<Func<Post, bool>> expression, bool traching = true)
    {
        var posts=await _db.Posts.Include(x=>x.AppUser).Include(x=>x.Categories).Where(expression).ToListAsync();
        return posts;
    }

    public async Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(bool traching = true)
    {
        var posts = await _db.Posts.Include(x => x.AppUser).Include(x => x.Categories).ToListAsync();
        return posts;
    }
}
