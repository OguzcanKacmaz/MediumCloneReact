namespace CMasters.DataAccess.Abstract;

public interface IUpdatableRepository<TEntity> where TEntity : class
{
    public Task UpdateAsync(TEntity entity);
}
