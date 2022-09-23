using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SwiggyWebApi.Models;
namespace SwiggyWebApi.Controllers;

using System.Net;
using System.Net.Mail;
using EncryptionDecryptionUsingSymmetricKey;
[ApiController]
[Route("Welcome")]
public class WelcomeController : ControllerBase
{
    [HttpPost("signup")]
    public IActionResult SignUp([FromBody] LoginDetail l)
    {
        using(var context = new SwiggyteamAContext()){
            var count=context.LoginDetails.Where(y=>y.Email==l.Email).Count();
            if(count==0){
            var key = "b14ca5898a4e4133bbce2ea2315a1916";
            var res = AesOperation.EncryptString(key, l.Password);
            context.LoginDetails.Add(new LoginDetail()
            {     
                FirstName = l.FirstName,
                LastName = l.LastName,
                Email=l.Email,
                Password = res,
                Role="user"
            });
            context.SaveChanges();
            Console.WriteLine("done");
        }
    }
    Console.WriteLine("post");
    return Ok();
    }

    [HttpPost("signin")]
    public string SignIn([FromBody] LoginDetail l)
    {
        var key = "b14ca5898a4e4133bbce2ea2315a1916";
        var res = AesOperation.EncryptString(key, l.Password);
        using(var context = new SwiggyteamAContext()){
            Console.WriteLine(l.Password);
             Console.WriteLine(l.Email);
            var c1=context.LoginDetails.Where(y=>y.Password==res && y.Email==l.Email).Count();
            if(c1>0){
              return "1";
            }
            else{
                return "0";
            }
        }    
    }
    [HttpPost("emailcheck")]
      public int EmailCheck([FromBody] LoginDetail l)
    {
        Console.WriteLine("bchjdcbhj");
          using(var context = new SwiggyteamAContext()){
            var count=context.LoginDetails.Where(y=>y.Email==l.Email).Count();
            Console.WriteLine(count);
            if(count>0){
                Random rnd = new Random();
                int otp = rnd.Next(1000, 9999);
                string msg="Your OTP : "+otp;
                var subject = "Password Reset Request";
                NetworkCredential smtpCreds = new NetworkCredential("ruppa866@gmail.com","jcucctpxxhzrspud");
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.EnableSsl = true;
                smtp.Credentials = smtpCreds;
                MailAddress to = new MailAddress(l.Email);
                MailAddress from = new MailAddress("ruppa866@gmail.com");
                MailMessage mail = new MailMessage(from, to);
                mail.Subject =subject;
                mail.Body =msg;
                smtp.Send(mail);
                return otp;
            }
            else{
                return 0;
            }
        }    
    }
     [HttpPost("passwordset")]
    public string PasswordSet([FromBody] LoginDetail l)
    {
        var key = "b14ca5898a4e4133bbce2ea2315a1916";
        var res = AesOperation.EncryptString(key, l.Password);
        using(var context = new SwiggyteamAContext()){
            context.LoginDetails.Add(new LoginDetail()
            {     
                Password = res
            });
            var c1=context.LoginDetails.Where(y=>y.Password==res && y.Email==l.Email).Count();
            if(c1>0){
              return "1";
            }
            else{
                return "0";
            }
        }    
    }
}