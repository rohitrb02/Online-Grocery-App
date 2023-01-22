using System.ComponentModel.DataAnnotations;

namespace DataAccessLayer
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryImage { get; set; }
        
        public ICollection<Products>? Products { get; }
    }
}