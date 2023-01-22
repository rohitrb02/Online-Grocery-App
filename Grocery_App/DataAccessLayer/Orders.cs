using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Orders
    {
        [Key]
        public int OrderId { get; set; }
 
        public int UserId { get; set; }
        public string ProductList { get; set; }
        public int Quantity { get; set; }
        
        public int BillId { get; set; }
        public DateTime ScheduleDelivery { get; set; }
        public string PaymentMethod { get; set; }

        public User? User { get; }
        
    }
}
