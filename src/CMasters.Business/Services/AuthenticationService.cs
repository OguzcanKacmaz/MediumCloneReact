using CMasters.Business.Abstract;
using CMasters.DataAccess.Abstract;
using CMasters.Dtos.JwtToken;
using CMasters.Dtos.SignIn;
using CMasters.Entities.Concrete;
using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace CMasters.Business.Services;

public class AuthenticationService : IAuthenticationService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserRefreshTokenRepository _userRefreshTokenRepository;
    private readonly IUnitOfWork _unitOfWork;

    public AuthenticationService(UserManager<AppUser> userManager,ITokenService tokenService,IUserRefreshTokenRepository userRefreshTokenRepository,IUnitOfWork unitOfWork)
    {
        _userManager = userManager;
        _tokenService = tokenService;
        _userRefreshTokenRepository = userRefreshTokenRepository;
        _unitOfWork = unitOfWork;
    }
    public async Task<Response<TokenDto>> AuthUserCreateTokenAsync(LoginDto loginDto)
    {
        var user=await _userManager.FindByEmailAsync(loginDto.Email);
        if (user is null)
            return Response<TokenDto>.Fail(new ErrorDto("Email veya Şifre Yanlış",true), StatusCodes.Status400BadRequest, true);
        var result=await _userManager.CheckPasswordAsync(user, loginDto.Password);
        if(!result)
            return Response<TokenDto>.Fail(new ErrorDto("Email veya Şifre Yanlış", true), StatusCodes.Status400BadRequest, true);
        var token = await _tokenService.CreateTokenAsync(user);
        var userRefreshToken = await _userRefreshTokenRepository.FindAsync(x => x.UserId == user.Id);
        if (userRefreshToken is null)
            await _userRefreshTokenRepository.AddAsync(new UserRefreshToken() { UserId = user.Id,Code=token.RefreshToken,Expiration=token.RefreshTokenExpiration });
        else
        {
            userRefreshToken.Expiration = token.RefreshTokenExpiration;
            userRefreshToken.Code = token.RefreshToken;
        }
        await _unitOfWork.SaveChangesAsync();
        return Response<TokenDto>.Success(token,StatusCodes.Status200OK,true);
    }
}
