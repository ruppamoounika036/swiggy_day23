using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class LoginDetail
    {
        public LoginDetail()
        {
            CartDetails = new HashSet<CartDetail>();
        }

        public int UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? FullName { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }

        public virtual RegionDetail? RegionDetail { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
