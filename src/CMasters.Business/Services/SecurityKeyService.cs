using CMasters.Business.Abstract;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace CMasters.Business.Services;

public class SecurityKeyService : ISecurityKeyService
{
    public SecurityKey GetSymmectricSecurityKey(string securityKey)
    {
        return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));
    } 
}
