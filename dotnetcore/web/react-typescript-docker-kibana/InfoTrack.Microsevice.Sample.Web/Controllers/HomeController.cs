using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace ConsumerMapIT.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
