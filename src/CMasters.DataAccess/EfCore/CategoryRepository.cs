using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using CMasters.Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace CMasters.DataAccess.EfCore;

public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
{
    private readonly ApplicationDbContext _db;

    public CategoryRepository(ApplicationDbContext db) : base(db)
    {
        _db = db;
    }

    public async Task<IEnumerable<Category>> GetAllAsync()
    {
        return await _db.Categories.ToListAsync();
    }
}
