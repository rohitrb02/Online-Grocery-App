using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Queries
    {
        [Key]
        public int QueryId { get; set; }
        public string QueryByUserOrVed { get; set; }
        public int QueryUserOrVedId { get; set; }
        public string QueryTo { get; set; }
        public string QueryDiscription { get; set; }
        public string ReplyStatus { get; set; }
        public string Reply { get; set; }

    }
}
