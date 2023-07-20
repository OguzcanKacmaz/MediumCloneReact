using CMasters.Dtos.JwtToken;
using CMasters.Entities.Concrete;

namespace CMasters.Business.Abstract;

public interface ITokenService
{
    public Task<TokenDto> CreateTokenAsync(AppUser appUser);
}
