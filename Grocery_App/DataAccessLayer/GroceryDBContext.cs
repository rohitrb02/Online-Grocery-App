using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class GroceryDBContext : DbContext
    {
        public GroceryDBContext(DbContextOptions<GroceryDBContext> options): base(options)
        {

        }

        public DbSet<Category> Category { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Vendor> Vendor { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ProductFeedRate> ProductFeedRate { get; set; }
        public DbSet<AppFeedRate> AppFeedRate { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<Bills> Bills { get; set; }
        public DbSet<Queries> Queries { get; set; }
    }
}
