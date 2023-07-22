using CMasters.Cache.Concrete;
using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.Caching;
using CMasters.DataAccess.Concrete;
using CMasters.DataAccess.EfCore;
using CMasters.Entities.Concrete;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace CMasters.DataAccess.Extensions;

public static class ServiceDI
{
    public static IServiceCollection AddRepositoryDI(this IServiceCollection services)
    {
        services.AddScoped<ICategoryRepository,CategoryRepository>();
        services.AddScoped<IUserRefreshTokenRepository,UserRefreshTokenRepository>();
        services.AddScoped<IPostRepository>(sp =>
        {
            var appDbContext = sp.GetRequiredService<ApplicationDbContext>();
            var unitOfWork = new UnitOfWork.UnitOfWork(appDbContext);
            var postRepository = new PostRepository(appDbContext);
            var categoryRepository = new CategoryRepository(appDbContext);
            var redisService = sp.GetRequiredService<RedisService>();
            var userManager = sp.GetRequiredService<UserManager<AppUser>>();
            return new PostRespositoryWithCache(postRepository, redisService.GetDb(0), userManager, categoryRepository);
        });
        return services;
    }
}
