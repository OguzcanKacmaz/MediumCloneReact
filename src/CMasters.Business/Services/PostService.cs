using CMasters.Business.Abstract;
using CMasters.DataAccess.Abstract;
using CMasters.DataAccess.UnitOfWork;
using CMasters.Dtos.Post;
using CMasters.Entities.Concrete;
using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace CMasters.Business.Services;

public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AppUser> _userManager;

    public PostService(IPostRepository postRepository,IUnitOfWork unitOfWork,IHttpContextAccessor httpContextAccessor,UserManager<AppUser> userManager)
    {
        _postRepository = postRepository;
        _unitOfWork = unitOfWork;
        _httpContextAccessor = httpContextAccessor;
        _userManager = userManager;
    }

    public async Task<Response<NoDataDto>> CreatePostAsync(CreatePostDto createPostDto)
    {
        var userId = _httpContextAccessor.HttpContext!.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value!;
        var user=await _userManager.FindByIdAsync(userId);
        var post = new Post()
        {
            Title = createPostDto.Title,
            Description = createPostDto.Description,
            LikeCount = 0,
            PostCreatedTime = DateTime.Now,
            ViewCount = 0,
            AppUserId = userId,
            AppUser = user,
            Categories = new List<Category>()
        };
        try
        {
            await _postRepository.AddAsync(post);
        }
        catch (Exception)
        {

            throw;
        }
        await _unitOfWork.SaveChangesAsync();
        return Response<NoDataDto>.Success(null, StatusCodes.Status201Created, true);

    }

    public async Task<Response<List<PostDto>>> GetAllPost()
    {
        var posts = await _postRepository.GetPostAndWriterIncluedAsync();
        List<PostDto> postList = new();
        foreach (var post in posts.OrderByDescending(x=>x.PostCreatedTime))
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
