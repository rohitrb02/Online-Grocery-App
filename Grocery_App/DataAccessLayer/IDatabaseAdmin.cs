using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IDatabaseAdmin
    {
        public bool LoginAdmin(string username, string password);
        public List<Queries> GetUsersQueries();
        public List<Queries> GetVendorsQueries();
        public void ReplyQuery(Queries query);
        public List<User> GetAllUsers();
        public User GetUserById(int userId);
        public void DeleteUser(User user);
        public List<Vendor> GetAllVendors();
        public Vendor GetVendorById(int vendorId);
        public void DeleteVendor(Vendor vendor);
        public List<Category> GetCategories();
        public void AddCategory(Category category);
        public void UpdateCategory(Category category);
        public List<Products> GetProductByCategory(int categoryId);
        public List<Products> GetProductsToApprove(string approvalStatus);
        public void ApproveProduct(Products product);
        public Products GetProductById(int productId);
        public void UpdateDiscount(Products product);
        public List<Vendor> VentersToVerify(string verification);
        public void VerifyVendor(Vendor vendor);
        
    }
}
