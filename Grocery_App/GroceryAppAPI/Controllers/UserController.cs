using DataAccessLayer;
using GroceryAppAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GroceryAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness _bll;
        public UserController(IUserBusiness bll)
        {
            _bll = bll;
        }

        [HttpGet]
        [Route("GetAllProducts")]
        [Authorize]
        public List<Products> GetAllProducts()
        {
            return _bll.GetAllProducts();
        }
        [HttpGet]
        [Route("GetAllCategories")]
        [Authorize]
        public List<Category> GetAllCategories()
        {
            return _bll.GetAllCategories();
        }
        [HttpGet]
        [Route("GetAllAppFeetback")]
        [Authorize]
        public List<AppFeedRate> GetAllAppFeedRate()
        {
            return _bll.GetAllAppFeedRates();
        }
        [HttpPost]
        [Route("UserLogin")]
        public IActionResult LoginUser([FromBody] Credentials data)
        {
            if(_bll.LoginUser(data.username, data.password)){
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("BYYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"));

                var token = new JwtSecurityToken(
                    issuer: "groceryApp",
                    audience: "groceryApp",
                    expires: DateTime.Now.AddHours(3),
                    //claims: new List<Claim> { new Claim("t1", "v1"), new Claim("t2", "v2") },
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    result = true

                });
            }
            else
            {
                return Ok(new {result = false});
            }
        }
        [HttpGet]
        [Route("GetUserId/{email}")]
        public int GetUserIdByEmail(string email)
        {
            return _bll.GetUserIdByEmail(email);
        }
        // GET api/<UserController>/5
        [HttpGet]
        [Route("GetProductByCategory/{categoryId}")]
        [Authorize]
        public List<Products> GetProductByCategory(int categoryId)
        {
            return _bll.GetProductByCategory(categoryId);
        }
        [HttpGet]
        [Route("GetBillByOrderId/{orderId}")]
        [Authorize]
        public Bills GetBillByOrderId(int orderId)
        {
            return _bll.GetBillByOrderId(orderId);
        }
        [HttpGet]
        [Route("GetorderByOrderId/{orderId}")]
        [Authorize]
        public Orders GetOrderByOrderId(int orderId)
        {
            return _bll.GetOrderByOrderId(orderId);
        }
        [HttpGet]
        [Route("GetReply/{QuerierId}")]
        [Authorize]
        public List<Queries> CheckReply(int QuerierId)
        {
            return _bll.CheckReply(QuerierId);
        }
        [HttpGet]
        [Route("GetUserbyId/{userId}")]
        [Authorize]
        public User GetProfileDetails(int userId)
        {
            return _bll.GetProfileDetails(userId);
        }
        [HttpGet]
        [Route("ProductHistory/{userId}")]
        [Authorize]
        public List<Orders> ViewPreviousOrders(int userId)
        {
            return _bll.ViewPreviousOrders(userId);
        }
        [HttpGet]
        [Route("GetProductFeedback/{prodId}")]
        [Authorize]
        public List<ProductFeedRate> GetProdFeedRateByProdId(int prodId)
        {
            return _bll.GetProdFeedRateByProdId(prodId);
        }
        [HttpGet]
        [Route("GetProductById/{productId}")]
        [Authorize]
        public Products GetProductById(int productId)
        {
            return _bll.GetProductById(productId);
        }
        // POST api/<UserController>
        [HttpPost]
        [Route("SignUp")]
        public string SignInUser([FromBody] User user)
        {
            return _bll.SignInUser(user);
        }
        [HttpPost]
        [Route("ProductFeedback")]
        [Authorize]
        public void FeedbackProduct([FromBody] ProductFeedRate prodFeedback)
        {
            _bll.FeedbackProduct(prodFeedback);
        }
        [HttpPost]
        [Route("AppFeedback")]
        [Authorize]
        public void AppFeedRate([FromBody] AppFeedRate feedback)
        {
            _bll.FeedbackApp(feedback);
        }
        [HttpPost]
        [Route("PlaceOrder")]
        [Authorize]
        public void PlaceOrder([FromBody] Orders order)
        {
            _bll.PlaceOrder(order);
        }
        [HttpPost]
        [Route("GenerateBill")]
        [Authorize]
        public void GenerateBill([FromBody] Bills bills)
        {
            _bll.GenerateBill(bills);
        }
        [HttpPost]
        [Route("AddQuery")]
        [Authorize]
        public void AddQuery(Queries query)
        {
            _bll.AddQuery(query);
        }


        // PUT api/<UserController>/5
        [HttpPut]
        [Route("EditProfile/{userId}")]
        [Authorize]
        public void EditAddress(int userId, [FromBody] User user)
        {
            _bll.EditAddress(userId, user);
        }
        [HttpPut]
        [Route("ChangePassword/{userId}")]
        [Authorize]
        public void ChangePassword(int userId, User user)
        {
            _bll.ChangePassword(userId,user);
        }
        [HttpPut]
        [Route("UpdateWallet/{userId}")]
        [Authorize]
        public void UpdateWalletPoint(int userId,[FromBody] int ChangeOfPoints)
        {
            _bll.UpdateWalletPoint(userId, ChangeOfPoints);
        }
        [HttpPut]
        [Route("UpdateBillId/{orderId}")]
        [Authorize]
        public void UpdateBillId(int orderId,[FromBody] int billId)
        {
            _bll.UpdateBillId(orderId, billId);
        }
        // DELETE api/<UserController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

    }
}
