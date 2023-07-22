namespace CMasters.DataAccess.Abstract;

public interface IAddetableRepository<TEntity> where TEntity : class
{
    public Task<TEntity> AddAsync(TEntity entity);   
}
