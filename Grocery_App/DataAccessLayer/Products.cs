using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.SymbolStore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Products
    {
        [Key]
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string UnitQuantity { get; set; }
        public int Quantity { get; set; }
        public string Image { get; set; }
        public string CountryOfOrigin { get; set; }
        public string Discription { get; set; }
        public string Ingredients { get; set; }
        public string ApprovalStatus { get; set; }
        public int Discount { get; set; }
        public string Approval_remark { get; set; }

        public int VendorId { get; set; }

        public ICollection<Category>? Category { get; set; }
        public Vendor? Vendor { get; } 
        public ICollection<ProductFeedRate>? ProductFeedRates { get; }
    }
}
