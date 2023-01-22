using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class UserDataAccessLayer : IDataBaseUser
    {
        private GroceryDBContext _dbContxUser;

        public UserDataAccessLayer(GroceryDBContext dbContxUser)
        {
            _dbContxUser = dbContxUser;
        }
        public void AddQuery(Queries query)
        {
            _dbContxUser.Queries.Add(query);
            _dbContxUser.SaveChanges();
        }

        public List<Queries> CheckReply(int QuerierId)
        {
            var qry = _dbContxUser.Queries.Where(q => q.QueryUserOrVedId == QuerierId).ToList();
            if(qry.Count>0)
            {
                return qry;
            }
            else
            {
                return null;
            }
        }

        public void EditAddress(int userId, User user)
        {
            var data = _dbContxUser.User.Where(u => u.UserId == user.UserId).SingleOrDefault();
            if(data != null)
            {
                data.PhoneNo = user.PhoneNo;
                data.Address = user.Address;
                _dbContxUser.SaveChanges();
            }
        }
        public void ChangePassword(int userId, User user)
        {
            var data = _dbContxUser.User.Where(u => u.UserId == user.UserId).SingleOrDefault();
            if (data != null)
            {
                byte[] encData_byte = new byte[user.Password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(user.Password);
                string encodedData = Convert.ToBase64String(encData_byte);
                user.Password = encodedData;
                data.Password = user.Password;
                _dbContxUser.SaveChanges();
            }
        }
        public void FeedbackApp(AppFeedRate data)
        {
            _dbContxUser.AppFeedRate.Add(data);
            _dbContxUser.SaveChanges();
        }

        public void FeedbackProduct(ProductFeedRate data)
        {
            _dbContxUser.ProductFeedRate.Add(data);
            _dbContxUser.SaveChanges();
        }

        public List<AppFeedRate> GetAllAppFeedRates()
        {
            return _dbContxUser.AppFeedRate.ToList();
        }

        public List<Category> GetAllCategories()
        {
            return _dbContxUser.Category.ToList();
        }

        public List<Products> GetAllProducts()
        {
            return _dbContxUser.Products.Where(p=>p.ApprovalStatus=="Approved").ToList();
        }

        public Bills GetBillByOrderId(int orderId)
        {
            var bill = _dbContxUser.Bills.Where(u => u.OrderId == orderId).SingleOrDefault();
            return bill;
        }

        public Orders GetOrderByOrderId(int orderId)
        {
            var order = _dbContxUser.Orders.Where(u => u.OrderId == orderId).SingleOrDefault();
            return order;
        }

        public List<ProductFeedRate> GetProdFeedRateByProdId(int prodId)
        {
            var FeedBackList = _dbContxUser.ProductFeedRate.Where(p => p.ProductId == prodId).ToList();
            return FeedBackList;
        }

        public List<Products> GetProductByCategory(int categoryId)
        {
            var ProdList = _dbContxUser.Products.Where(p => p.CategoryId == categoryId && p.ApprovalStatus=="Approved").ToList();
            return ProdList;
        }

        public User GetProfileDetails(int userId)
        {
            var data = _dbContxUser.User.Where(u => u.UserId == userId).SingleOrDefault();
            return data;
        }

        public bool LoginUser(string username, string password)
        {
            foreach(var item in _dbContxUser.User)
            {
                if (item.Email == username )
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

        public void PlaceOrder(Orders order)
        {
            _dbContxUser.Orders.Add(order);
            _dbContxUser.SaveChanges();
        }

        public string SignInUser(User user)
        {
            var data = _dbContxUser.User.Where(u=>u.Email==user.Email).SingleOrDefault();
            if (data == null)
            {
                try
                {
                    byte[] encData_byte = new byte[user.Password.Length];
                    encData_byte = System.Text.Encoding.UTF8.GetBytes(user.Password);
                    string encodedData = Convert.ToBase64String(encData_byte);
                    user.Password = encodedData;
                }
                catch (Exception ex)
                {
                    throw new Exception("Error in base64Encode" + ex.Message);
                }
                _dbContxUser.User.Add(user);
                _dbContxUser.SaveChanges();
                return "Done";
            }
            else
            {
                return "Error";
            }
        }
        public void UpdateWalletPoint(int UserId, int ChangeOfPoints)
        {
            var user = _dbContxUser.User.Where(u => u.UserId == UserId).SingleOrDefault();
            if (user != null)
            {
                user.WalletPoints += ChangeOfPoints;
                _dbContxUser.SaveChanges();
            }
        }
        public List<Orders> ViewPreviousOrders(int userId)
        {
            var PreviousOrders = _dbContxUser.Orders.Where(o=>o.UserId == userId).ToList();
            return PreviousOrders;
        }
        public int GetUserIdByEmail(string email)
        {
            var data = _dbContxUser.User.Where(u => u.Email == email).SingleOrDefault();
            return data != null ? data.UserId : 0;
        }
        public Products GetProductById(int productId)
        {
            var data = _dbContxUser.Products.Where(u=>u.ProductId==productId).SingleOrDefault();
            return data != null ? data : null;
        }
        public void GenerateBill(Bills bills)
        {
            _dbContxUser.Bills.Add(bills);
            _dbContxUser.SaveChanges();
        }
        public void UpdateBillId(int orderId, int billId)
        {
            var data = _dbContxUser.Orders.Where(o=>o.OrderId==orderId).SingleOrDefault();
            if (data != null)
            {
                data.BillId = billId;
                _dbContxUser.SaveChanges();
            }
        }
    }
}
