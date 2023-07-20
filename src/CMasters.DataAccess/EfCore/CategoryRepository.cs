using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using CMasters.Entities.Concrete;

namespace CMasters.DataAccess.EfCore;

public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
{
    public CategoryRepository(ApplicationDbContext context) : base(context)
    {
    }
}
