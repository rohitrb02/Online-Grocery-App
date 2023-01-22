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
    public class VendorController : ControllerBase
    {
        private readonly IVendorBussiness _bll;
        public VendorController(IVendorBussiness bll)
        {
            _bll = bll;
        }

        // GET: api/<VendorController>
        [HttpGet]
        [Route("GetAllCategories")]
        [Authorize]
        public List<Category> GetAllCategories()
        {
            return _bll.GetAllCategories();
        }
        [HttpPost]
        [Route("LogIn")]
        public IActionResult LoginVendor([FromBody] Credentials data)
        {
            if(_bll.LoginVendor(data.username, data.password))
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
        [Route("GetVendorIdByUserName/{email}")]
        [Authorize]
        public int GetVendorIdByEmail( string email)
        {
            return _bll.GetVendorIdByEmail(email);
        }
        [HttpGet]
        [Route("GetQueries")]
        [Authorize]
        public List<Queries> GetUsersQuery()
        {
            return _bll.GetUsersQuery();
        }
        // GET api/<VendorController>/5
        [HttpGet]
        [Authorize]
        [Route("DiscardedProdList/{VendorId}")]
        public List<Products> DiscardedProductApproval(int VendorId)
        {
            return _bll.DiscardedProductApproval(VendorId);
        }
        [HttpGet]
        [Authorize]
        [Route("ProductHistory/{VendorId}")]
        public List<Products> PreviousProductHistory(int VendorId)
        {
            return _bll.PreviousProductHistory(VendorId);
        }
        [HttpGet]
        [Authorize]
        [Route("ProdYetToApprove/{VendorId}")]
        public List<Products> ProductsYetToApprove(int VendorId)
        { 
            return _bll.ProductsYetToApprove(VendorId); 
        }
        [HttpGet]
        [Authorize]
        [Route("GetVendorById/{vendorId}")]
        public Vendor GetVendorById(int vendorId)
        {
            return _bll.GetVendorById(vendorId);
        }
        [HttpGet]
        [Authorize]
        [Route("AllAskedQueries/{vendorId}")]
        public List<Queries> AllAskedQueries(int vendorId)
        {
            return _bll.AllAskedQueries(vendorId);
        }
        // POST api/<VendorController>
        [HttpPost]
        [Authorize]
        [Route("AddProduct")]
        public void AddProduct([FromBody] Products product)
        {
            _bll.AddProduct(product);
        }
        [HttpPost]
        [Route("SignIn")]
        public string SignInVendor([FromBody] Vendor vendor)
        {
            return _bll.SignInVendor(vendor);
        }
        [HttpPost]
        [Authorize]
        [Route("AskQuery")]
        public void AskQuery(Queries query)
        {
            _bll.AskQuery(query);
        }
        // PUT api/<VendorController>/5
        [HttpPut]
        [Authorize]
        [Route("ReplyQuery")]
        public void ReplyUserQuery( [FromBody] Queries query)
        {
            _bll.ReplyUserQuery(query);
        }

    }
}
