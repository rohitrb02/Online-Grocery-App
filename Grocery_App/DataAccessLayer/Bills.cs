using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Bills
    {
        [Key]
        public int BillId { get; set; }
        public int OrderId { get; set; }
        public float SubTotal { get; set; }
        public int DeliveryCharge { get; set; }
        public int PromoApplied { get; set; }
        public float GrandTotal { get; set; }
        public string PaymentMethod { get; set; }
        public string PaymentStatus { get; set; }

        public Orders? Orders { get; }

    }
}
