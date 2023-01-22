using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class AppFeedRate
    {
        [Key]
        public int AppFeedbackId { get; set; }
        public int UserId { get; set; }
        public string DisplayStatus { get; set; }
        public int Rating { get; set; }
        public string Review { get; set; }
        public DateTime ReviewTime { get; set; }

        
        public User? User { get; }
    }
}
