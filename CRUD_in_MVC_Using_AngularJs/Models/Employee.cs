using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUD_in_MVC_Using_AngularJs.Models
{
    public class Employee
    {[Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public int Age { get; set; }
    }
}