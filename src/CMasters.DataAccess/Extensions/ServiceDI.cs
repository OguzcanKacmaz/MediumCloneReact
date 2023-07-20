using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.EfCore;
using Microsoft.Extensions.DependencyInjection;

namespace CMasters.DataAccess.Extensions;

public static class ServiceDI
{
    public static IServiceCollection AddRepositoryDI(this IServiceCollection services)
    {
        services.AddScoped<IPostRepository,PostRepository>();
        services.AddScoped<ICategoryRepository,CategoryRepository>();
        services.AddScoped<IUserRefreshTokenRepository,UserRefreshTokenRepository>();
        return services;
    }
}
