using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebNotes.Domain.Controllers
{

    public class DomainController : Controller
    {
        // GET api/values
        [HttpGet]
        public string Get()
        {
            return "Domain Api Works!";
        }

    }
}
