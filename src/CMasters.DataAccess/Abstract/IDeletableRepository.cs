namespace CMasters.DataAccess.Abstract;

public interface IDeletableRepository<TEntity> where TEntity : class
{
    public Task DeleteAsync(string id);
}
