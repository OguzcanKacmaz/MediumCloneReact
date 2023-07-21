using CMasters.Entities.Concrete;
using System.Linq.Expressions;

namespace CMasters.DataAccess.Abstract;

public interface IPostRepository : IGenericRepository<Post>
{
    public Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(Expression<Func<Post,bool>> expression,bool traching=true);
    public Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(bool traching=true);
}
