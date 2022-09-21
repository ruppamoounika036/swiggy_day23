using System;
using System.Collections.Generic;

namespace SwiggyWebApi.Models
{
    public partial class UpComingRestaurant
    {
        public int UrestId { get; set; }
        public string? Restaurantname { get; set; }
        public string? Region { get; set; }
        public DateTime? Dateoflaunch { get; set; }
    }
}
