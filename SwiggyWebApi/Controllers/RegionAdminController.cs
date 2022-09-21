using Microsoft.AspNetCore.Mvc;
using SwiggyWebApi.Models;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic; 
using Newtonsoft.Json; 
using System.Text.Json;

namespace SwiggyWebApi.Controllers;

[ApiController]
[Route("[controller]")]

// [EnableCors("_myAllowSpecificOrigins")]
public class RegionAdminController : ControllerBase
{
    SwiggyTeamAContext context=new SwiggyTeamAContext();
   
    private readonly ILogger<RegionAdminController> _logger;

    public RegionAdminController(ILogger<RegionAdminController> logger)
    {
        _logger = logger;
    }

    [HttpPost("GetCategory")]
    public List<string> GetCategory()
    {
        var v= context.FoodCategories.ToList();
        List<string> s=new List<string>();
        foreach(var i in v)
        {
            s.Add(i.FoodCategory1);
        }
        return s;
    }
    [HttpPost("GetCategoryIdByName/{name}")]
     public int GetCategoryIdByName( string name)
     {
        var v = context.FoodCategories.First<FoodCategory>(s => s.FoodCategory1 ==name ); 
        return v.FoodCategoryId;
     }

      [HttpPost("GetRestuarantIdByName/{name}")]
     public int GetRestuarantIdByName( string name)
     {
        var v = context.RestuarantDetails.First<RestuarantDetail>(s => s.RestuarantName ==name ); 
        return v.RestuarantId;
     }
      [HttpPost("PostItemDetails")]
     public IActionResult PostItemDetail([FromBody] List<ItemDetail> inp)
     {
       foreach(var i in inp)
       {
        ItemDetail item=new ItemDetail()
        {
            ItemName=i.ItemName,
            ItemPrice=i.ItemPrice,
            ItemStock=i.ItemStock,
            CategoryId=i.CategoryId,
            RestuarantId=i.RestuarantId
        };

         Console.WriteLine(i.ItemName+" "+i.RestuarantId);
         context.ItemDetails.Add(item);
         context.SaveChanges();
       }
        return Ok(inp);
     }
}
