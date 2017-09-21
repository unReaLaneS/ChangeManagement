using Microsoft.AspNetCore.Mvc;

namespace ChangeManagementApp.Web.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult AppComponent() => PartialView();
    }
}