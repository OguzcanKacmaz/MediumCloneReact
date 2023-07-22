using CMasters.Dtos.Post;
using CMasters.SharedLibrary.Dtos;

namespace CMasters.Business.Abstract;

public interface IPostService
{
    public Task<Response<List<PostDto>>> GetTrendSixPost();
    public Task<Response<List<PostDto>>> GetAllPost();
}
