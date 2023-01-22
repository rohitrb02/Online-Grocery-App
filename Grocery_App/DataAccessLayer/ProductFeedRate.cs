using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class ProductFeedRate
    {
        [Key]
        public int FeedbackId { get; set; }
        
        public int UserId { get; set; }
        
        public int ProductId { get; set; }
        public int Rating { get; set; }
        public string Review { get; set; }
        public DateTime ReviewTime { get; set; }

        public Products? Products { get; }
        public User? User { get; }
    }
}
