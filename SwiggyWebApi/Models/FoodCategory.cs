using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class FoodCategory
    {
        public FoodCategory()
        {
            ItemDetails = new HashSet<ItemDetail>();
        }

        public int FoodCategoryId { get; set; }
        public string? FoodCategory1 { get; set; }

        public virtual ICollection<ItemDetail> ItemDetails { get; set; }
    }
}
