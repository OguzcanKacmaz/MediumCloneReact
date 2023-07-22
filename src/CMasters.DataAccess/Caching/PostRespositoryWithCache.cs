using CMasters.DataAccess.Abstract;
using CMasters.Dtos.Post;
using CMasters.Entities.Concrete;
using Microsoft.AspNetCore.Identity;
using StackExchange.Redis;
using System.Linq.Expressions;
using System.Text.Json;

namespace CMasters.DataAccess.Caching;

public class PostRespositoryWithCache : IPostRepository
{
    private const string _postKey = "postCaches";
    private const string _postExpressionKey = "postExpressionCaches";
    private readonly IPostRepository _postRepository;
    private readonly IDatabase _database;
    private readonly UserManager<AppUser> _userManager;
    private readonly ICategoryRepository _categoryRepository;

    public PostRespositoryWithCache(IPostRepository postRepository, IDatabase database, UserManager<AppUser> userManager, ICategoryRepository categoryRepository)
    {
        _postRepository = postRepository;
        _database = database;
        _userManager = userManager;
        _categoryRepository = categoryRepository;
    }
    public async Task<Post> AddAsync(Post entity)
    {
        var post = await _postRepository.AddAsync(entity);
        if (await _database.KeyExistsAsync(_postKey))
            await _database.HashSetAsync(_postKey, post.Id, JsonSerializer.Serialize(post));
        return post;
    }

    public async Task DeleteAsync(string id)
    {
        await _postRepository.DeleteAsync(id);
        if (await _database.KeyExistsAsync(_postKey))
            await _database.HashDeleteAsync(_postKey, id);
    }

    public async Task<Post> FindAsync(Expression<Func<Post, bool>> expression)
    {
        var post = await _postRepository.FindAsync(expression);
        return post;
    }

    public async Task<IEnumerable<Post>> GetAllAsync(Expression<Func<Post, bool>> expression, bool tracking = true)
    {
        if (!await _database.KeyExistsAsync(_postKey))
            return await LoadToCacheFromDbAsync();
        var posts = new List<Post>();
        var cachePost = await _database.HashGetAllAsync(_postKey);
        foreach (var item in cachePost.ToList())
        {
            var post = JsonSerializer.Deserialize<PostDto>(item.Value!); ;
            posts.Add(await MappingPostDtoToPost(post!));
        }
        return posts;
    }

    public async Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(Expression<Func<Post, bool>> expression, bool traching = true)
    {
        if (!await _database.KeyExistsAsync(_postKey))
            return await LoadToCacheFromDbAsync(expression);
        var posts = new List<Post>();
        var cachePost = await _database.HashGetAllAsync(_postKey);
        foreach (var item in cachePost.ToList())
        {
            var post = JsonSerializer.Deserialize<PostDto>(item.Value!);
            posts.Add(await MappingPostDtoToPost(post!));
        }
        return posts;
    }

    public async Task<IEnumerable<Post>> GetPostAndWriterIncluedAsync(bool traching = true)
    {
        if (!await _database.KeyExistsAsync(_postKey))
            return await LoadToCacheFromDbAsync();
        var posts = new List<Post>();
        var cachePost = await _database.HashGetAllAsync(_postKey);
        foreach (var item in cachePost.ToList())
        {
            var post = JsonSerializer.Deserialize<PostDto>(item.Value!); ;
            posts.Add(await MappingPostDtoToPost(post!));
        }
        return posts;
    }

    public async Task UpdateAsync(Post entity)
    {
        await _postRepository.UpdateAsync(entity);
        if (await _database.KeyExistsAsync(_postKey))
            await _database.HashDeleteAsync(_postKey, entity.Id);
    }

    private async Task<List<Post>> LoadToCacheFromDbAsync(Expression<Func<Post, bool>> expression = null!)
    {
        var posts = expression == null ? await _postRepository.GetPostAndWriterIncluedAsync() : await _postRepository.GetPostAndWriterIncluedAsync(expression!);
        List<Post> postList = new();
        posts.ToList().ForEach(async post =>
        {
            var newPost = MappingPostToPostDto(post!);
            postList.Add(post);
            await _database.HashSetAsync(expression == null ? _postKey : _postExpressionKey, post.Id, JsonSerializer.Serialize(newPost));
        });
        return postList;
    }
    private PostDto MappingPostToPostDto(Post post)
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
        return newPost;
    }
    private async Task<Post> MappingPostDtoToPost(PostDto post)
    {
        var user = await _userManager.FindByNameAsync(post.AppUserName);
        var newPost = new Post()
        {
            Id = post.Id,
            AppUserId = user.Id,
            Description = post.Description,
            LikeCount = post.LikeCount,
            PostCreatedTime = post.PostCreatedTime,
            Title = post.Title,
            ViewCount = post.ViewCount,
            AppUser = user,
            
        };
        foreach (var item in post.Categories)
        {
            var category = await _categoryRepository.FindAsync(cat => cat.Name == item);
            newPost.Categories.Add(category);
            
        }
        return newPost;
    }
}
