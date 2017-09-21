using ChangeManagementApp.BusinessEntities.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ChangeManagementApp.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult IndexComponent() => PartialView(new List<Ticket>());

        public IActionResult AboutComponent() => PartialView();

        public IActionResult ContactComponent() => PartialView();

        public IActionResult AppComponent() => PartialView();

        public IActionResult Error() => PartialView();
    }
}