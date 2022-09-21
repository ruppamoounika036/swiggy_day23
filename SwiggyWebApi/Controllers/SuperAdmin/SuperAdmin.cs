using Microsoft.AspNetCore.Mvc;
using SwiggyWebApi.Models;
namespace SwiggyWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SuperAdminController : ControllerBase
{
     SwiggyteamAContext Context;
    public SuperAdminController()
    {
       Context=new  SwiggyteamAContext();
    }


    [HttpPost("add-region")]
    public IActionResult AddRegion([FromBody] LoginDetail Userdetails)
    {
        Context.LoginDetails.Add(Userdetails);
        Context.SaveChanges();
     return Ok();
    }


    [HttpPost("add-restaurant")]
    public IActionResult AddRestaurant([FromBody] UpComingRestaurant Restaurants)
    {
        Console.WriteLine(Restaurants.Restaurantname);
        Context.UpComingRestaurants.Add(Restaurants);
        Context.SaveChanges();
        return Ok();
    }


    [HttpGet("get-restaurants")]
    public IActionResult GetRestaurants()
    {
        var Futurerestaurants=new List<UpComingRestaurant>();
        var data=Context.UpComingRestaurants.Where(result=>result.Dateoflaunch>DateTime.Now);
        Futurerestaurants.AddRange(data);
        Console.WriteLine("rest");
        return Ok(data);
    }

    [HttpPost("post-test")]
    public IActionResult PostTest()
    {
        return Ok();
    }
}
