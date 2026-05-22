using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyShopApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "CreatedAt", "Description", "ImageUrl", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Áo", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Áo thun cotton cao cấp", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80", "Áo Thun Trắng", 150000m },
                    { 2, "Quần", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Quần jeans thời trang", "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80", "Quần Jeans Xanh", 350000m },
                    { 3, "Giày", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Giày sneaker năng động", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80", "Giày Sneaker", 500000m },
                    { 4, "Phụ kiện", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Túi xách thời trang", "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&q=80", "Túi Xách", 200000m },
                    { 5, "Áo", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Áo khoác denim phong cách", "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&q=80", "Áo Khoác Denim", 450000m },
                    { 6, "Quần", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Quần shorts thoải mái", "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=300&q=80", "Quần Shorts", 180000m },
                    { 7, "Phụ kiện", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Mũ lưỡi trai thời trang", "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&q=80", "Mũ Lưỡi Trai", 120000m },
                    { 8, "Giày", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "Giày sandal mùa hè", "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&q=80", "Giày Sandal", 280000m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
