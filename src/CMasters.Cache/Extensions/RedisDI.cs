using CMasters.Cache.Concrete;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace CMasters.Cache.Extensions;

public static class RedisDI
{
    public static IServiceCollection AddRedisService(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<RedisService>(sp =>
        {
            return new RedisService(configuration["CacheOptions:Url"]);
        });
        services.AddScoped<IDatabase>(sp =>
        {
            var redisService = sp.GetRequiredService<RedisService>();
            return redisService.GetDb(0);
        });
        return services;
    }
}
