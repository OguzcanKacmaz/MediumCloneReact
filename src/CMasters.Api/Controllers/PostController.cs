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
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetTrendSixPost()
        {
            var posts = await _postRepository.GetPostAndWriterIncluedAsync();
            var trendPosts = posts.OrderByDescending(x => x.ViewCount).Take(6);
            List<PostDto> postList = new();
            trendPosts.ToList().ForEach(x =>
            {
                var newPost=new PostDto()
                {
                    AppUserName = x.AppUser.UserName,                   
                    Description = x.Description,
                    LikeCount = x.LikeCount,
                    PostCreatedTime = x.PostCreatedTime,
                    Title = x.Title,
                    ViewCount = x.ViewCount
                };
                newPost.Categories.AddRange(x.Categories.Select(a=>a.Name));
                postList.Add(newPost);
            });
            return Ok(postList);
        }
    }
}
