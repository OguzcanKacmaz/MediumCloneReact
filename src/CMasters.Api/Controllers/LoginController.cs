using CMasters.Business.Abstract;
using CMasters.Dtos.SignIn;
using Microsoft.AspNetCore.Mvc;

namespace CMasters.Api.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController : CustomBaseController
{
    private readonly IAuthenticationService _authenticationService;

    public AuthController(IAuthenticationService authenticationService)
    {
        _authenticationService = authenticationService;
    }
    [HttpPost]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        var result = await _authenticationService.AuthUserCreateTokenAsync(loginDto);
        return ActionResultInstance(result);
    }
}
