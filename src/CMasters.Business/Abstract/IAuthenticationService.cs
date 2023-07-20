using CMasters.Dtos.JwtToken;
using CMasters.Dtos.SignIn;
using CMasters.SharedLibrary.Dtos;

namespace CMasters.Business.Abstract;

public interface IAuthenticationService
{
    public Task<Response<TokenDto>> AuthUserCreateTokenAsync(LoginDto loginDto);
}
