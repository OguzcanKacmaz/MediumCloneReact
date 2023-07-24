using CMasters.Business.Abstract;
using CMasters.Dtos.JwtToken;
using CMasters.Entities.Concrete;
using CMasters.SharedLibrary.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace CMasters.Business.Services;

public class TokenService : ITokenService
{
    private readonly CustomTokenOption _options;
    private readonly UserManager<AppUser> _userManager;
    private readonly ISecurityKeyService _securityKeyService;

    public TokenService(IOptions<CustomTokenOption> options,UserManager<AppUser> userManager, ISecurityKeyService securityKeyService)
    {
        _options = options.Value;
        _userManager = userManager;
        _securityKeyService = securityKeyService;
    }
    public async Task<TokenDto> CreateTokenAsync(AppUser appUser)
    {
        var accessTokenExpiration=DateTime.Now.AddDays(_options.AccessTokenExpiration);
        var eefreshTokenExpiration = DateTime.Now.AddDays(_options.RefreshTokenExpiration);
        var securityKey=_options.SecurityKey;
        SigningCredentials signingCredentials=new(_securityKeyService.GetSymmectricSecurityKey(securityKey),SecurityAlgorithms.HmacSha256Signature);
        JwtSecurityToken jwtSecurityToken = new(
            issuer: _options.Issuer,
            claims: await CreateClaim(appUser, _options.Audience),
            notBefore: DateTime.Now,
            signingCredentials: signingCredentials,
            expires: accessTokenExpiration
            );
        JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
        var token=handler.WriteToken(jwtSecurityToken);
        TokenDto tokenDto = new()
        {
            AccessToken = token,
            AccessTokenExpiration = accessTokenExpiration,
            RefreshToken = CreateRefreshToken(),
            RefreshTokenExpiration = eefreshTokenExpiration
        };
        return tokenDto;
    }
    private string CreateRefreshToken()
    {
        var numberByte = new Byte[32];
        var number=RandomNumberGenerator.Create();
        number.GetBytes(numberByte);
        return Convert.ToBase64String(numberByte);
    }
    private async Task<List<Claim>> CreateClaim(AppUser appUser,List<string> audience)
    {
        var roles = await _userManager.GetRolesAsync(appUser);
        var claims = new List<Claim>() { 
            new Claim(ClaimTypes.NameIdentifier,appUser.Id),
            new Claim(ClaimTypes.Name,appUser.FullName),
            new Claim(ClaimTypes.Email,appUser.Email),
            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
        };
        claims.AddRange(roles.Select(x=>new Claim(ClaimTypes.Role,x)));
        claims.AddRange(audience.Select(x=>new Claim(JwtRegisteredClaimNames.Aud,x)));
        return claims;
    }
}
