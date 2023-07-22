using CMasters.Business.Abstract;
using CMasters.DataAccess.Abstract;
using CMasters.Dtos.Post;
using CMasters.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace CMasters.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PostController : CustomBaseController
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }
        [HttpGet]
        public async Task<IActionResult> GetTrendSixPost()
        {
            var trendPost=await _postService.GetTrendSixPost();
            return ActionResultInstance(trendPost);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPost()
        {
            var trendPost = await _postService.GetAllPost();
            return ActionResultInstance(trendPost);
        }
    }
}
