using AutoMapper;
using CMasters.Business.Abstract;
using CMasters.Dtos.Register;
using CMasters.Entities.Concrete;
using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace CMasters.Business.Services;

public class UserService : IUserService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public UserService(UserManager<AppUser> userManager,IMapper mapper)
    {
        _userManager = userManager;
        _mapper = mapper;
    }
    public async Task<Response<AppUserDto>> CreateUserAsync(RegisterDto registerDto)
    {
        var user =await _userManager.FindByEmailAsync(registerDto.Email);
        if (user is not null)
            return Response<AppUserDto>.Fail(new ErrorDto("Email address is exist", false), StatusCodes.Status400BadRequest, true);
        var newUser=new AppUser() { Email = registerDto.Email,UserName=registerDto.Email,FullName=registerDto.FullName };
       var result= await _userManager.CreateAsync(newUser,registerDto.Password);
        if (!result.Succeeded)
        {
            var errors = result.Errors.Select(x => x.Description).ToList();
            return Response<AppUserDto>.Fail(new ErrorDto(errors, true), StatusCodes.Status400BadRequest,true);
        }
        var createdUser=await _userManager.FindByEmailAsync(registerDto?.Email);
        await _userManager.AddToRoleAsync(createdUser, "writer");
        return Response<AppUserDto>.Success(_mapper.Map<AppUserDto>(user), StatusCodes.Status201Created,true);
    }
    public async Task<Response<AppUserDto>> GetUserByNameAsync(string userName)
    {
        if (userName is null)
            return Response<AppUserDto>.Fail(new ErrorDto("Kullanıcı Adı Bulunamadı", true), StatusCodes.Status404NotFound, true);
        var user = await _userManager.FindByNameAsync(userName);
        if (user is null)
            return Response<AppUserDto>.Fail(new ErrorDto("Kullanıcı Adı Bulunamadı", true), StatusCodes.Status404NotFound, true);
        return Response<AppUserDto>.Success(_mapper.Map<AppUserDto>(user), StatusCodes.Status200OK,true);
    }
}
