using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class ItemDetail
    {
        public ItemDetail()
        {
            CartDetails = new HashSet<CartDetail>();
        }

        public int ItemId { get; set; }
        public string? ItemName { get; set; }
        public int? ItemStock { get; set; }
        public double? ItemPrice { get; set; }
        public int? CategoryId { get; set; }
        public int? RestuarantId { get; set; }

        public virtual FoodCategory? Category { get; set; }
        public virtual RestuarantDetail? Restuarant { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
