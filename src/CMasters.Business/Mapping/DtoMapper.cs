using AutoMapper;
using CMasters.Entities.Concrete;

namespace CMasters.Business.Mapping;

public class DtoMapper : Profile
{
    public DtoMapper()
    {
        CreateMap<AppUser, AppUserDto>().ReverseMap();
    }
}
