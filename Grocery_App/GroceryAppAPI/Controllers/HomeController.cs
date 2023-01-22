using DataAccessLayer;
using GroceryAppAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GroceryAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IUserBusiness _bll;
        public HomeController(IUserBusiness bll)
        {
            _bll = bll;
        }
        // GET: api/<HomeController>
        [HttpGet]
        [Route("GetAllCategories")]
        public List<Category> GetAllCategories()
        {
            return _bll.GetAllCategories();
        }

        
    }
}
