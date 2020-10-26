using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VirgilWebApi.Model
{
    public class UserProfile
    {
        [Required]
        [MaxLength(20)]
        public string UserName { get; set; }
        public int Id { get; set; }

    }
}
