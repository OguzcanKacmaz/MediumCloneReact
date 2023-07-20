using System.Linq.Expressions;

namespace CMasters.DataAccess.Abstract;

public interface IFindableRespository <TEntity> where TEntity : class
{
    public Task<TEntity> FindByIdAsync(Expression<Func<TEntity, bool>> expression);
    public Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity,bool>> expression,bool tracking=true);
}
