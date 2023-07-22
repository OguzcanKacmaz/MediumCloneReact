using CMasters.Dtos.Category;
using CMasters.SharedLibrary.Dtos;

namespace CMasters.Business.Abstract;

public interface ICategoryService
{
    public Task<Response<IEnumerable<CategoryDto>>> GetNineCategory(); 
}
