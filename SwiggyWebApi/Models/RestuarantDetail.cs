using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class RestuarantDetail
    {
        public RestuarantDetail()
        {
            ItemDetails = new HashSet<ItemDetail>();
        }

        public int RestuarantId { get; set; }
        public string? RestuarantName { get; set; }
        public int? RegionAdminId { get; set; }

        public virtual RegionDetail? RegionAdmin { get; set; }
        public virtual ICollection<ItemDetail> ItemDetails { get; set; }
    }
}
