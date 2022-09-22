using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class CartDetail
    {
        public int CartId { get; set; }
        public int? UserId { get; set; }
        public int? OrderedItemId { get; set; }
        public int? OrderedItemQuantity { get; set; }
        public string? OrderedItemName { get; set; }
        public double? OrderedItemPrice { get; set; }
        public int? OrderId { get; set; }

        public virtual ItemDetail? OrderedItem { get; set; }
        public virtual LoginDetail? User { get; set; }
    }
}
