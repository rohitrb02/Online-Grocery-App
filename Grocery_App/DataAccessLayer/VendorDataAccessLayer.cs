using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class VendorDataAccessLayer : IDatabaseVendor
    {
        private GroceryDBContext _dbContxVendor;

        public VendorDataAccessLayer(GroceryDBContext dbContxVendor)
        {
            _dbContxVendor = dbContxVendor;
        }
        public void AddProduct(Products product)
        {
            _dbContxVendor.Products.Add(product);
            _dbContxVendor.SaveChanges();
        }

        public void AskQuery(Queries query)
        {
            _dbContxVendor.Queries.Add(query);
            _dbContxVendor.SaveChanges();
        }

        public List<Products> DiscardedProductApproval(int VendorId)
        {
            var DiscardProdLst = _dbContxVendor.Products.Where(p => p.VendorId == VendorId && p.ApprovalStatus=="Discarded").ToList();
            return DiscardProdLst;
        }

        public List<Category> GetAllCategories()
        {
            return _dbContxVendor.Category.ToList();
        }

        public List<Queries> GetUsersQuery()
        {
            var QueryLst = _dbContxVendor.Queries.Where(q => q.QueryTo == "Vendor").ToList();
            return QueryLst;
        }

        public bool LoginVendor(string username, string password)
        {
            foreach (var item in _dbContxVendor.Vendor)
            {
                if(item.Email==username && item.Verification == "Approved")
                {
                    System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
                    System.Text.Decoder utf8Decode = encoder.GetDecoder();
                    byte[] todecode_byte = Convert.FromBase64String(item.Password);
                    int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                    char[] decoded_char = new char[charCount];
                    utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                    string result = new String(decoded_char);
                    if (result == password)
                    {

                        return true;
                    }
                }
            }
            return false;
        }

        public List<Products> PreviousProductHistory(int VendorId)
        {
            var PreviousProdLst = _dbContxVendor.Products.Where(p => p.VendorId == VendorId && p.ApprovalStatus == "Approved").ToList();
            return PreviousProdLst;
        }

        public List<Products> ProductsYetToApprove(int VendorId)
        {
            var PendingProdLst = _dbContxVendor.Products.Where(p => p.VendorId == VendorId && p.ApprovalStatus == "Pending").ToList();
            return PendingProdLst;
        }

        public string SignInVendor(Vendor vendor)
        {
            var data = _dbContxVendor.Vendor.Where(v=>v.Email==vendor.Email).SingleOrDefault();
            if (data == null)
            {
                try
                {
                    byte[] encData_byte = new byte[vendor.Password.Length];
                    encData_byte = System.Text.Encoding.UTF8.GetBytes(vendor.Password);
                    string encodedData = Convert.ToBase64String(encData_byte);
                    vendor.Password = encodedData;
                }
                catch (Exception ex)
                {
                    throw new Exception("Error in base64Encode" + ex.Message);
                }
                _dbContxVendor.Vendor.Add(vendor);
                _dbContxVendor.SaveChanges();
                return "Done";
            }
            else
            {
                return "Already exist!";
            }
        }
        public void ReplyUserQuery(Queries query)
        {
            var qry = _dbContxVendor.Queries.Where(q=>q.QueryId==query.QueryId).SingleOrDefault();
            if (qry != null)
            {
                qry.ReplyStatus = query.ReplyStatus;
                qry.Reply = query.Reply;
                _dbContxVendor.SaveChanges();

            }
        }

        public Vendor GetVendorById(int vendorId)
        {
            var data = _dbContxVendor.Vendor.Where(v=>v.VendorId==vendorId).SingleOrDefault();
            if(data != null)
            {
                return data;
            }
            else
            {
                return null;
            }
        }
        public List<Queries> AllAskedQueries(int VendorId)
        {
            var data = _dbContxVendor.Queries.Where(v => v.QueryUserOrVedId == VendorId).ToList();
            if(data.Count>0)
            {
                return data;
            }
            else
            {
                return null;
            }
        }
        public int GetVendorIdByEmail(string email)
        {
            var data = _dbContxVendor.Vendor.Where(v => v.Email == email).SingleOrDefault();
            return data != null ? data.VendorId : 0;
        }
    }
}
