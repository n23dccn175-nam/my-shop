using Microsoft.EntityFrameworkCore;
using MyShopApi.Models;

namespace MyShopApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Áo Thun Trắng", Price = 150000, Category = "Áo", Description = "Áo thun cotton cao cấp", ImageUrl = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 2, Name = "Quần Jeans Xanh", Price = 350000, Category = "Quần", Description = "Quần jeans thời trang", ImageUrl = "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 3, Name = "Giày Sneaker", Price = 500000, Category = "Giày", Description = "Giày sneaker năng động", ImageUrl = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 4, Name = "Túi Xách", Price = 200000, Category = "Phụ kiện", Description = "Túi xách thời trang", ImageUrl = "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 5, Name = "Áo Khoác Denim", Price = 450000, Category = "Áo", Description = "Áo khoác denim phong cách", ImageUrl = "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 6, Name = "Quần Shorts", Price = 180000, Category = "Quần", Description = "Quần shorts thoải mái", ImageUrl = "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 7, Name = "Mũ Lưỡi Trai", Price = 120000, Category = "Phụ kiện", Description = "Mũ lưỡi trai thời trang", ImageUrl = "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) },
            new Product { Id = 8, Name = "Giày Sandal", Price = 280000, Category = "Giày", Description = "Giày sandal mùa hè", ImageUrl = "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&q=80", CreatedAt = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc) }
        );
    }
}
