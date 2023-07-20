namespace CMasters.DataAccess.Abstract;

public interface IGenericRepository<TEntity>:IAddetableRepository<TEntity>,IFindableRespository<TEntity>,IDeletableRepository<TEntity>,IUpdatableRepository<TEntity> where TEntity : class
{
}
