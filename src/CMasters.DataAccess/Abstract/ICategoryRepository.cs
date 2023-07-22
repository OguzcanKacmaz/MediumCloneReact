using CMasters.Entities.Concrete;

namespace CMasters.DataAccess.Abstract;

public interface ICategoryRepository : IGenericRepository<Category>
{
    public Task<IEnumerable<Category>> GetAllAsync();
}
