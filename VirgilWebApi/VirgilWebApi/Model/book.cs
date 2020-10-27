using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VirgilWebApi.Model
{
    public class book
    {
        public int Id { get; set; }
        public string BookName { get; set; }

        public int UserId { get; set; }

        public string BookLink { get; set; }

        public string Details { get; set; }

        public int CategoryId { get; set; }


    }
}
