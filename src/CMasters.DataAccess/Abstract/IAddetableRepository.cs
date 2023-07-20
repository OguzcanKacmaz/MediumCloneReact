namespace CMasters.DataAccess.Abstract;

public interface IAddetableRepository<TEntity> where TEntity : class
{
    public Task AddAsync(TEntity entity);   
}
