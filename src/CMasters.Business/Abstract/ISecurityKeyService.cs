using Microsoft.IdentityModel.Tokens;

namespace CMasters.Business.Abstract;

public interface ISecurityKeyService
{
    SecurityKey GetSymmectricSecurityKey(string securityKey);
}
