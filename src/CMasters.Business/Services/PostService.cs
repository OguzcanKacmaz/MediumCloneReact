using CMasters.Business.Abstract;
using CMasters.DataAccess.Abstract;
using CMasters.Dtos.Post;
using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Http;

namespace CMasters.Business.Services;

public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;

    public PostService(IPostRepository postRepository)
    {
        _postRepository = postRepository;
    }

    public async Task<Response<List<PostDto>>> GetAllPost()
    {
        var posts = await _postRepository.GetPostAndWriterIncluedAsync();
        List<PostDto> postList = new();
        foreach (var post in posts)
        {
            var newPost = new PostDto()
            {
                Id = post.Id,
                AppUserName = post.AppUser.UserName,
                Description = post.Description,
                LikeCount = post.LikeCount,
                PostCreatedTime = post.PostCreatedTime,
                Title = post.Title,
                ViewCount = post.ViewCount
            };
            newPost.Categories.AddRange(post.Categories.Select(x => x.Name));
            postList.Add(newPost);
        }

        return Response<List<PostDto>>.Success(postList, 200, true);
    }

    public async Task<Response<List<PostDto>>> GetTrendSixPost()
    {
        var posts = await _postRepository.GetPostAndWriterIncluedAsync();
        var trendPosts = posts.OrderByDescending(x => x.ViewCount).Take(6);
        List<PostDto> postList = new();
        foreach (var post in trendPosts)
        {
            var newPost = new PostDto()
            {
                Id = post.Id,
                AppUserName = post.AppUser.UserName,
                Description = post.Description,
                LikeCount = post.LikeCount,
                PostCreatedTime = post.PostCreatedTime,
                Title = post.Title,
                ViewCount = post.ViewCount
            };
            newPost.Categories.AddRange(post.Categories.Select(x=>x.Name));
            postList.Add(newPost);
        }          
        
        return Response<List<PostDto>>.Success(postList,200,true);
        //return Response<List<PostDto>>.Fail(new ErrorDto("Hatalı İstek",true), StatusCodes.Status400BadRequest, true);
    }
}
