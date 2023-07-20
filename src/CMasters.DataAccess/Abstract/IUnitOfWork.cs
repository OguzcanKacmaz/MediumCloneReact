namespace CMasters.DataAccess.Abstract;

public interface IUnitOfWork
{
	public Task SaveChangesAsync();
}
