using CMasters.Dtos.Register;
using CMasters.SharedLibrary.Dtos;

namespace CMasters.Business.Abstract;

public interface IUserService
{
    public Task<Response<AppUserDto>> CreateUserAsync(RegisterDto registerDto);
    public Task<Response<AppUserDto>> GetUserByNameAsync(string userName);
}
