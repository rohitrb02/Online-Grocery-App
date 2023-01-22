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
    public class AdminController : ControllerBase
    {
        private readonly IAdminBusiness _bll;
        public AdminController(IAdminBusiness bll)
        {
            _bll = bll;
        }

        // GET: api/<AdminController>
        [HttpPost]
        [Route("Login")]
        public IActionResult LoginAdmin([FromBody] Credentials data)
        {
            if (_bll.LoginAdmin(data.username, data.password))
            {
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
                return Unauthorized();
            }
        }
        [HttpGet]
        [Route("GetUsersQuery")]
        [Authorize]
        public List<Queries> GetUsersQueries()
        {
            return _bll.GetUsersQueries();
        }
        [HttpGet]
        [Route("GetVendorsQuery")]
        [Authorize]
        public List<Queries> GetVendorsQueries()
        {
            return _bll.GetVendorsQueries();
        }
        [HttpGet]
        [Route("GetAllusers")]
        [Authorize]
        public List<User> GetAllUsers()
        {
            return _bll.GetAllUsers();
        }
        [HttpGet]
        [Route("GetAllVendors")]
        [Authorize]
        public List<Vendor> GetAllVendors()
        {
            return _bll.GetAllVendors();
        }
        [HttpGet]
        [Route("GetAllCategories")]
        [Authorize]
        public List<Category> GetCategories()
        {
            return _bll.GetCategories();
        }
        [HttpGet]
        [Route("ToApprove")]
        [Authorize]
        public List<Products> GetProductsToApprove(string approvalStatus)
        {
            return _bll.GetProductsToApprove(approvalStatus);
        }
        [HttpGet]
        [Route("VendorsToVerify")]
        [Authorize]
        public List<Vendor> VentersToVerify(string verification)
        {
            return _bll.VentersToVerify(verification);
        }
        // GET api/<AdminController>/5
        [HttpGet]
        [Route("GetUserById/{userId}")]
        [Authorize]
        public User GetUserById(int userId)
        {
            return _bll.GetUserById(userId);
        }
        [HttpGet]
        [Route("GetVendorById/{vendorId}")]
        [Authorize]
        public Vendor GetVendorById(int vendorId)
        {
            return _bll.GetVendorById(vendorId);
        }
        [HttpGet]
        [Route("GetProductByCategory/{categoryId}")]
        [Authorize]
        public List<Products> GetProductByCategory(int categoryId)
        {
            return _bll.GetProductByCategory(categoryId);
        }
        [HttpGet]
        [Route("GetProductById/{productId}")]
        [Authorize]
        public Products GetProductById(int productId)
        {
            return _bll.GetProductById(productId);
        }
        // POST api/<AdminController>
        [HttpPost]
        [Route("AddCategory")]
        [Authorize]
        public void AddCategory([FromBody] Category category)
        {
            _bll.AddCategory(category);
        }
        
        // PUT api/<AdminController>/5
        [HttpPut]
        [Route("ReplyQuery")]
        [Authorize]
        public void ReplyQuery([FromBody] Queries query)
        {
            _bll.ReplyQuery(query);
        }
        [HttpPut]
        [Route("UpdateCategory")]
        [Authorize]
        public void UpdateCategory([FromBody] Category category)
        {
            _bll.UpdateCategory(category);
        }
        [HttpPut]
        [Route("APproveProd")]
        [Authorize]
        public void ApproveProduct([FromBody] Products product)
        {
            _bll.ApproveProduct(product);
        }
        [HttpPut]
        [Route("UpdateDiscount")]
        [Authorize]
        public void UpdateDiscount([FromBody] Products product)
        {
            _bll.UpdateDiscount(product);
        }
        [HttpPut]
        [Route("VerifyVendor")]
        [Authorize]
        public void VerifyVendor([FromBody] Vendor vendor)
        {
            _bll.VerifyVendor(vendor);
        }
        // DELETE api/<AdminController>/5
        [HttpDelete]
        [Route("DeleteUser")]
        [Authorize]
        public void DeleteUser([FromBody] User user)
        {
            _bll.DeleteUser(user);
        }
        [HttpDelete]
        [Route("Deletevendor")]
        [Authorize]
        public void DeleteVendor([FromBody] Vendor vendor)
        {
            _bll.DeleteVendor(vendor); 
        }
      
    }
}
