using CMasters.Business.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CMasters.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : CustomBaseController
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpGet]
        public async Task<IActionResult> GetTrendSixPost()
        {
            var trendPost = await _categoryService.GetNineCategory();
            return ActionResultInstance(trendPost);
        }
    }
}
