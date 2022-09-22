using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SwiggyWebApi.Models;
namespace SwiggyWebApi.Controllers;
using EncryptionDecryptionUsingSymmetricKey;
[ApiController]
[Route("Welcome")]
public class WelcomeController : ControllerBase
{
    [HttpPost("signup")]
    public IActionResult SignUp([FromBody] LoginDetail l)
    {
        Console.WriteLine(l);
        var key = "b14ca5898a4e4133bbce2ea2315a1916";
        var res = AesOperation.EncryptString(key, l.Password);
        using(var context = new SwiggyTeamAContext()){
            context.LoginDetails.Add(new LoginDetail()
            {     
                FirstName = l.FirstName,
                LastName = l.LastName,
                Email=l.Email,
                Password = res,
                Role="user"
            });
            context.SaveChanges();
        }    
    Console.WriteLine("post");
    return Ok();
    }
    [HttpPost("signin")]
    public string SignIn([FromBody] LoginDetail l)
    {
    //     Console.WriteLine(l);
    //     Console.WriteLine(l.Email);
    //     Console.WriteLine(l.Password);
    //     Console.WriteLine(l.FirstName);
        var key = "b14ca5898a4e4133bbce2ea2315a1916";
        var res = AesOperation.EncryptString(key, l.Password);
        using(var context = new SwiggyTeamAContext()){
            // var c1=context.LoginDetails.Where(y=>y.Password==res).Where(x=>x.Email==l.Email).ToList();
            Console.WriteLine(l.Password);
             Console.WriteLine(l.Email);
            var c1=context.LoginDetails.Where(y=>y.Password==res && y.Email==l.Email).Count();
            Console.WriteLine(c1);
              context.SaveChanges();
            if(c1>0){
              return "1";
            }
            else{
                return "0";
            }
      
            // Console.WriteLine(c1);
            // context.SaveChanges();
        }    
    // Console.WriteLine("login check");
    // return Ok();
    }
}