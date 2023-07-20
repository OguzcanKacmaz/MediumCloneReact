using CMasters.Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CMasters.DataAccess.Config;

public class PostConfiguration : IEntityTypeConfiguration<Post>
{
    public void Configure(EntityTypeBuilder<Post> builder)
    {
        builder.HasKey(x => x.Id);
        builder.HasMany(x => x.Categories).WithMany(x => x.Posts);
        builder.HasOne(x => x.AppUser).WithMany(x => x.Posts);
    }
}
