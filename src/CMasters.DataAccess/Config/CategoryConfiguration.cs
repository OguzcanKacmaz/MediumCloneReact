using CMasters.Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CMasters.DataAccess.Config;

public class CategoryConfiguration : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
       builder.HasKey(x => x.Id);
        builder.Property(x=>x.Name).IsRequired().HasMaxLength(70);
    }
}
