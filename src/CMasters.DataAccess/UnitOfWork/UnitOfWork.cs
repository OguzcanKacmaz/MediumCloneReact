using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;

namespace CMasters.DataAccess.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;

    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
    }
    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
