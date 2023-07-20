using CMasters.Business.Abstract;
using CMasters.Dtos.Register;
using Microsoft.AspNetCore.Mvc;

namespace CMasters.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : CustomBaseController
    {
        private readonly IUserService _userService;

        public RegisterController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost]
        public async Task<IActionResult> Register(RegisterDto createUserDto)
        {
            var result = await _userService.CreateUserAsync(createUserDto);
            return ActionResultInstance(result);
        }       
    }
}
