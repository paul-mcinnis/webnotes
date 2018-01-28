using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebNotes.Domain.Controllers
{
    [Produces("application/json")]
    public class DomainController : Controller
    {
        [HttpGet]
        public string GetData(string docUrl)
        {
            return "Domain Api Works!";
        }

    }
}
