using CMasters.DataAccess.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CMasters.DataAccess.Extensions;

public static class DataAccessDI
{
    public static IServiceCollection AddDataAccess(this IServiceCollection services,IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(
            opt => 
            opt.UseSqlServer(
                configuration.GetConnectionString(ApplicationDbContext._connectionName
                )));
        return services;
    }
}
