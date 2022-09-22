using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class RegionDetail
    {
        public RegionDetail()
        {
            RestuarantDetails = new HashSet<RestuarantDetail>();
        }

        public int RegionId { get; set; }
        public int? Userid { get; set; }
        public string? RegionName { get; set; }

        public virtual LoginDetail? User { get; set; }
        public virtual ICollection<RestuarantDetail> RestuarantDetails { get; set; }
    }
}
