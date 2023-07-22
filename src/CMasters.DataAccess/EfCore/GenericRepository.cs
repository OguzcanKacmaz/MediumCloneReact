using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace CMasters.DataAccess.EfCore;

public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
{
    private readonly ApplicationDbContext _context;
    private readonly DbSet<TEntity> _dbSet;

    public GenericRepository(ApplicationDbContext context)
    {
        _context = context;
        _dbSet=_context.Set<TEntity>();
    }
    public async Task<TEntity> AddAsync(TEntity entity)
    {
        await _dbSet.AddAsync(entity);
        return entity;
    }

    public async Task DeleteAsync(string id)
    {
        var entity=await _dbSet.FindAsync(id);
        await Task.FromResult(_dbSet.Remove(entity));
    }

    public async Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> expression)
    {
        return await _dbSet.FirstOrDefaultAsync(expression);
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> expression, bool tracking)
    {
       return await GetAllActives(tracking).Where(expression).ToListAsync();
    }

    public async Task UpdateAsync(TEntity entity)
    {
        await Task.FromResult(_dbSet.Update(entity));
    }
    protected IQueryable<TEntity> GetAllActives(bool tracking = true)
    {
        var values = _dbSet;
        return tracking ? values : values.AsNoTracking();
    }
}
