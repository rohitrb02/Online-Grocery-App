using DataAccessLayer;

namespace GroceryAppAPI.Models
{
    public interface IVendorBussiness
    {
        public Boolean LoginVendor(string username, string password);
        public string SignInVendor(Vendor vendor);
        public List<Category> GetAllCategories();
        public void AddProduct(Products product);
        public List<Products> PreviousProductHistory(int VendorId);
        public List<Products> ProductsYetToApprove(int VendorId);
        public List<Products> DiscardedProductApproval(int VendorId);
        public List<Queries> GetUsersQuery();
        public void AskQuery(Queries query);
        public void ReplyUserQuery(Queries query);
        public Vendor GetVendorById(int vendorId);
        public List<Queries> AllAskedQueries(int vendorId);
        public int GetVendorIdByEmail(string email);
    }
}
