using DataAccessLayer;

namespace GroceryAppAPI.Models
{
    public class VendorBusinessLayer : IVendorBussiness
    {
        private IDatabaseVendor _dal;
        public VendorBusinessLayer(IDatabaseVendor dal)
        {
            _dal = dal;
        }

        public void AddProduct(Products product)
        {
            _dal.AddProduct(product);
        }
        public void AskQuery(Queries query)
        {
            _dal.AskQuery(query);
        }
        public List<Products> DiscardedProductApproval(int VendorId)
        {
            return _dal.DiscardedProductApproval(VendorId);
        }

        public List<Category> GetAllCategories()
        {
            return _dal.GetAllCategories();
        }

        public List<Queries> GetUsersQuery()
        {
            return _dal.GetUsersQuery();
        }

        public bool LoginVendor(string username, string password)
        {
            return _dal.LoginVendor(username, password);
        }

        public List<Products> PreviousProductHistory(int VendorId)
        {
            return _dal.PreviousProductHistory(VendorId);
        }

        public List<Products> ProductsYetToApprove(int VendorId)
        {
            return _dal.ProductsYetToApprove(VendorId);
        }

        public string SignInVendor(Vendor vendor)
        {
            return _dal.SignInVendor(vendor);
        }
        public void ReplyUserQuery(Queries query)
        {
            _dal.ReplyUserQuery(query);
        }

        public Vendor GetVendorById(int vendorId)
        {
            return _dal.GetVendorById(vendorId);
        }
        public List<Queries> AllAskedQueries(int vendorId)
        {
            return _dal.AllAskedQueries(vendorId);
        }
        public int GetVendorIdByEmail(string email)
        {
            return _dal.GetVendorIdByEmail(email);
        }
    }
}
