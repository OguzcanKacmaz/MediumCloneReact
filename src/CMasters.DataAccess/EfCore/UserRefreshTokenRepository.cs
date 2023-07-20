using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Concrete;
using CMasters.Entities.Concrete;

namespace CMasters.DataAccess.EfCore;

public class UserRefreshTokenRepository : GenericRepository<UserRefreshToken>, IUserRefreshTokenRepository
{
    public UserRefreshTokenRepository(ApplicationDbContext context) : base(context)
    {
    }
}
