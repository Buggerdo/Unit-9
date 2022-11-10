using Microsoft.EntityFrameworkCore;

namespace RestaurantFaves.DbModels
{
    public class RestaurantFavesDbContext : DbContext
    {
        public RestaurantFavesDbContext(DbContextOptions<RestaurantFavesDbContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
    }
}