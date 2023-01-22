using DataAccessLayer;

namespace GroceryAppAPI.Models
{
    public class UserBusinessLayer : IUserBusiness
    {
        private IDataBaseUser _dal;
        public UserBusinessLayer(IDataBaseUser dal)
        {
            _dal = dal;
        }

        public void AddQuery(Queries query)
        {
            _dal.AddQuery(query);
        }

        public List<Queries> CheckReply(int QuerierId)
        {
            return _dal.CheckReply(QuerierId);
        }

        public void EditAddress(int userId, User user)
        {
            _dal.EditAddress(userId, user);
        }

        public void FeedbackApp(AppFeedRate data)
        {
            _dal.FeedbackApp(data);
        }

        public void FeedbackProduct(ProductFeedRate data)
        {
            _dal.FeedbackProduct(data);
        }

        public List<AppFeedRate> GetAllAppFeedRates()
        {
            return _dal.GetAllAppFeedRates();
        }

        public List<Category> GetAllCategories()
        {
            return _dal.GetAllCategories();
        }

        public List<Products> GetAllProducts()
        {
            return _dal.GetAllProducts();
        }

        public Bills GetBillByOrderId(int orderId)
        {
            return _dal.GetBillByOrderId(orderId);
        }

        public Orders GetOrderByOrderId(int orderId)
        {
            return _dal.GetOrderByOrderId(orderId);
        }

        public List<ProductFeedRate> GetProdFeedRateByProdId(int prodId)
        {
            return _dal.GetProdFeedRateByProdId((int)prodId);
        }

        public List<Products> GetProductByCategory(int categoryId)
        {
            return _dal.GetProductByCategory((int)categoryId);
        }

        public User GetProfileDetails(int userId)
        {
            return _dal.GetProfileDetails(userId);
        }

        public bool LoginUser(string username, string password)
        {
            return _dal.LoginUser(username, password);
        }

        public void PlaceOrder(Orders order)
        {
            _dal.PlaceOrder(order);
        }

        public string SignInUser(User user)
        {
            return _dal.SignInUser(user);
        }

        public void UpdateWalletPoint(int UserId, int ChangeOfPoints)
        {
            _dal.UpdateWalletPoint(UserId, ChangeOfPoints);
        }

        public List<Orders> ViewPreviousOrders(int userId)
        {
            return _dal.ViewPreviousOrders(userId);
        }
        public int GetUserIdByEmail(string email)
        {
            return _dal.GetUserIdByEmail(email);
        }
        public void ChangePassword(int userId, User user)
        {
            _dal.ChangePassword(userId, user);
        }
        public Products GetProductById(int productId)
        {
            return _dal.GetProductById(productId);
        }
        public void GenerateBill(Bills bills)
        {
            _dal.GenerateBill(bills);
        }
        public void UpdateBillId(int orderId, int billId)
        {
            _dal.UpdateBillId(orderId, billId);
        }
    }
}
