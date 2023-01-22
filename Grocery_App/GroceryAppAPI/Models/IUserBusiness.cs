using DataAccessLayer;

namespace GroceryAppAPI.Models
{
    public interface IUserBusiness
    {
        public bool LoginUser(string username, string password);
        public string SignInUser(User user);
        public void EditAddress(int userId, User user);
        public List<Orders> ViewPreviousOrders(int userId);
        public void FeedbackProduct(ProductFeedRate data);
        public void FeedbackApp(AppFeedRate data);
        public List<Products> GetAllProducts();
        public List<Products> GetProductByCategory(int categoryId);
        public List<Category> GetAllCategories();
        public List<AppFeedRate> GetAllAppFeedRates();
        public List<ProductFeedRate> GetProdFeedRateByProdId(int prodId);
        public User GetProfileDetails(int userId);
        public void AddQuery(Queries query);
        public List<Queries> CheckReply(int QuerierId);
        public void PlaceOrder(Orders order);
        public Orders GetOrderByOrderId(int orderId);
        public Bills GetBillByOrderId(int orderId);
        public void UpdateWalletPoint(int UserId, int ChangeOfPoints);
        public int GetUserIdByEmail(string email);
        public void ChangePassword(int userId, User user);
        public Products GetProductById(int productId);
        public void GenerateBill(Bills bills);
        public void UpdateBillId(int orderId, int billId);
    }
}
