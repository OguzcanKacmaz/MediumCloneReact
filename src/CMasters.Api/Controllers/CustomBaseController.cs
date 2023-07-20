using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace CMasters.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CustomBaseController : ControllerBase
{
    public IActionResult ActionResultInstance<T>(Response<T> response) where T : class
    {
        return new ObjectResult(response)
        {
            StatusCode = response.StatusCode,
        };
    }
}
