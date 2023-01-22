using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class AdminDataAccessLayer : IDatabaseAdmin
    {
        private GroceryDBContext _dbContxAdmin;

        public AdminDataAccessLayer(GroceryDBContext dbContxAdmin)
        {
            _dbContxAdmin = dbContxAdmin;
        }
        public void AddCategory(Category category)
        {
            _dbContxAdmin.Category.Add(category);
            _dbContxAdmin.SaveChanges();
        }

        public void ApproveProduct(Products product)
        {
            var prod = _dbContxAdmin.Products.Where(p => p.ProductId == product.ProductId).SingleOrDefault();
            if (prod != null)
            {
                prod.ApprovalStatus = product.ApprovalStatus;
                prod.Approval_remark = product.Approval_remark;
                _dbContxAdmin.SaveChanges();

            }
        }

        public void DeleteUser(User user)
        {
            var userdata = _dbContxAdmin.User.Where(u => u.UserId == user.UserId).SingleOrDefault();
            if(userdata != null)
            {
                _dbContxAdmin.User.Remove(userdata);
                _dbContxAdmin.SaveChanges();
            }
        }

        public void DeleteVendor(Vendor vendor)
        {
            var vendorData = _dbContxAdmin.Vendor.Where(v => v.VendorId == vendor.VendorId).SingleOrDefault();
            if (vendorData != null)
            {
                _dbContxAdmin.Vendor.Remove(vendorData);
                _dbContxAdmin.SaveChanges();
            }
        }

        public List<User> GetAllUsers()
        {
            return _dbContxAdmin.User.ToList();
        }

        public List<Vendor> GetAllVendors()
        {
            return _dbContxAdmin.Vendor.Where(v=>v.Verification=="Approved").ToList();
        }

        public List<Category> GetCategories()
        {
            return _dbContxAdmin.Category.ToList();
        }

        public List<Products> GetProductByCategory(int categoryId)
        {
            var ProdLst = _dbContxAdmin.Products.Where(p => p.CategoryId == categoryId && p.ApprovalStatus != "Pending").ToList();
            return ProdLst;
        }

        public Products GetProductById(int productId)
        {
            var prod = _dbContxAdmin.Products.Where(p => p.ProductId == productId).SingleOrDefault();
            return prod;
        }

        public List<Products> GetProductsToApprove(string approvalStatus)
        {
            var ProdToApprove = _dbContxAdmin.Products.Where(p=>p.ApprovalStatus == "Pending").ToList();
            return ProdToApprove;
        }

        public User GetUserById(int userId)
        {
            var data = _dbContxAdmin.User.Where(u=>u.UserId == userId).SingleOrDefault();
            return data;
        }

        public List<Queries> GetUsersQueries()
        {
            var UserQuery = _dbContxAdmin.Queries.Where(q=>q.QueryByUserOrVed=="User" && q.QueryTo=="Admin" && q.ReplyStatus=="Pending").ToList();
            return UserQuery;
        }

        public Vendor GetVendorById(int vendorId)
        {
            var data = _dbContxAdmin.Vendor.Where(v => v.VendorId==vendorId ).SingleOrDefault();
            return data;
        }

        public List<Queries> GetVendorsQueries()
        {
            var vendorQuery = _dbContxAdmin.Queries.Where(q => q.QueryByUserOrVed == "Vendor" && q.QueryTo == "Admin" && q.ReplyStatus=="Pending").ToList();
            return vendorQuery;
        }

        public bool LoginAdmin(string username, string password)
        {
            if (username=="Admin" && password == "a1b2c3")
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void ReplyQuery(Queries query)
        {
            var qry = _dbContxAdmin.Queries.Where(q => q.QueryId==query.QueryId).SingleOrDefault();
            if (qry != null)
            {
                qry.ReplyStatus = query.ReplyStatus;
                qry.Reply = query.Reply;
                _dbContxAdmin.SaveChanges();

            }
        }

        public void UpdateCategory(Category category)
        {
            var catry = _dbContxAdmin.Category.Where(c => c.CategoryId==category.CategoryId).SingleOrDefault();
            if(catry != null)
            {
                catry.CategoryName = category.CategoryName;
                catry.CategoryImage = category.CategoryImage;
                _dbContxAdmin.SaveChanges();
            }
        }

        public void UpdateDiscount(Products product)
        {
            var prd = _dbContxAdmin.Products.Where(p=>p.ProductId==product.ProductId).SingleOrDefault();
            if(prd != null)
            {
                prd.Discount = product.Discount;
                _dbContxAdmin.SaveChanges();
            }
        }

        public List<Vendor> VentersToVerify(string verification)
        {
            var toVerify = _dbContxAdmin.Vendor.Where(v=>v.Verification=="Pending").ToList();
            return toVerify;
        }

        public void VerifyVendor(Vendor vendor)
        {
            var data = _dbContxAdmin.Vendor.Where(v => v.VendorId == vendor.VendorId).SingleOrDefault();
            if(data != null)
            {
                data.Verification = vendor.Verification;
                _dbContxAdmin.SaveChanges();
            }
        }
    }
}
