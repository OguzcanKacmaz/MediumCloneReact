using CMasters.Business.Abstract;
using CMasters.Business.Mapping;
using CMasters.Business.Services;
using CMasters.Business.Validations;
using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.UnitOfWork;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

namespace CMasters.Business.Extensions;

public static class ServiceDI
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddScoped<ISecurityKeyService, SecurityKeyService>();
        services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IAuthenticationService, AuthenticationService>();
        services.AddScoped<IPostService, PostService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddAutoMapper(typeof(DtoMapper));

        services.AddFluentValidationAutoValidation();
        services.AddFluentValidationClientsideAdapters();
        services.AddValidatorsFromAssemblyContaining(typeof(RegisterDtoValidation));

        return services;
    }
}