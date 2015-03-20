using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CRUD_in_MVC_Using_AngularJs.Models
{
    public class EmployeeContext:DbContext
    {
        //: base("name=EmployeeContext")
        public DbSet<Employee> employee { get; set; }
        public DbSet<Country> country { get; set; }
        public DbSet<State> state { get; set; }
        public DbSet<City> city { get; set; }

    }
}