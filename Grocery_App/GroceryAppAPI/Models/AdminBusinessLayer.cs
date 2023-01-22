using DataAccessLayer;

namespace GroceryAppAPI.Models
{
    public class AdminBusinessLayer : IAdminBusiness
    {
        private IDatabaseAdmin _dal;
        public AdminBusinessLayer(IDatabaseAdmin dal)
        {
            _dal = dal;
        }

        public void AddCategory(Category category)
        {
            _dal.AddCategory(category);
        }

        public void ApproveProduct(Products product)
        {
            _dal.ApproveProduct(product);
        }

        public void DeleteUser(User user)
        {
            _dal.DeleteUser(user);
        }

        public void DeleteVendor(Vendor vendor)
        {
            _dal.DeleteVendor(vendor);
        }

        public List<User> GetAllUsers()
        {
            return _dal.GetAllUsers();
        }

        public List<Vendor> GetAllVendors()
        {
            return _dal.GetAllVendors();
        }

        public List<Category> GetCategories()
        {
            return _dal.GetCategories();
        }

        public List<Products> GetProductByCategory(int categoryId)
        {
            return _dal.GetProductByCategory(categoryId);
        }

        public Products GetProductById(int productId)
        {
            return _dal.GetProductById(productId);
        }

        public List<Products> GetProductsToApprove(string approvalStatus)
        {
            return _dal.GetProductsToApprove(approvalStatus);
        }

        public User GetUserById(int userId)
        {
            return _dal.GetUserById(userId);
        }

        public List<Queries> GetUsersQueries()
        {
            return _dal.GetUsersQueries();
        }

        public Vendor GetVendorById(int vendorId)
        {
            return _dal.GetVendorById(vendorId);
        }

        public List<Queries> GetVendorsQueries()
        {
            return _dal.GetVendorsQueries();
        }

        public bool LoginAdmin(string username, string password)
        {
            return _dal.LoginAdmin(username, password);
        }

        public void ReplyQuery(Queries query)
        {
            _dal.ReplyQuery(query);
        }

        public void UpdateCategory(Category category)
        {
            _dal.UpdateCategory(category);
        }

        public void UpdateDiscount(Products product)
        {
            _dal.UpdateDiscount(product);
        }

        public List<Vendor> VentersToVerify(string verification)
        {
            return _dal.VentersToVerify(verification);
        }

        public void VerifyVendor(Vendor vendor)
        {
            _dal.VerifyVendor(vendor);
        }
    }
}
