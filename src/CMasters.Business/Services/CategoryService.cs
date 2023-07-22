using CMasters.Business.Abstract;
using CMasters.DataAccess.Abstract;
using CMasters.Dtos.Category;
using CMasters.SharedLibrary.Dtos;
using Microsoft.AspNetCore.Http;

namespace CMasters.Business.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository;

    public CategoryService(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }
    public async Task<Response<IEnumerable<CategoryDto>>> GetNineCategory()
    {
        var category= await _categoryRepository.GetAllAsync();
        var nineCategory=category.Take(9).ToList();
        List<CategoryDto> categoryDtos = new();
        nineCategory.ForEach(x=>categoryDtos.Add(new CategoryDto() { Name=x.Name}));
        return Response<IEnumerable<CategoryDto>>.Success(categoryDtos, StatusCodes.Status200OK, true);
    }
}
