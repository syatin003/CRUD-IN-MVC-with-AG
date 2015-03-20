using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUD_in_MVC_Using_AngularJs.Models;

namespace CRUD_in_MVC_Using_AngularJs.Controllers
{
    public class HomeController : Controller
    {        
        public ActionResult Index()
        {
           return View();
        }

        public JsonResult GetAll()
        {
            EmployeeContext db = new EmployeeContext();
            var employeeList = db.employee.ToList();
            return Json(employeeList,JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetEmployeeById(String id)
        {
            EmployeeContext db = new EmployeeContext();
            int Id = Convert.ToInt32(id);
            var EmployeeId = db.employee.Find(Id);
            return Json(EmployeeId,JsonRequestBehavior.AllowGet);
        }


        public string UpdateEmployee(Employee emp)
        {
            EmployeeContext db = new EmployeeContext();
            if (emp != null)
            {
                int EmpId = Convert.ToInt32(emp.Id);
                Employee employee = db.employee.Where(a => a.Id == emp.Id).FirstOrDefault();
                employee.Name = emp.Name;
                employee.Email = emp.Email;
                employee.Age = emp.Age;
                db.SaveChanges();
                return "Employee Updated";
            }
            else
            {
                return "Invalid Record or Employee";
            }
        }

        public string AddEmployee(Employee emp)
        {
            EmployeeContext db = new EmployeeContext();
            if (emp != null)
            {
                db.employee.Add(emp);
                db.SaveChanges();
                return "Employee Added";
            }
            else
            {
                return "Invalid Record";
            }
        }

        public string DeleteEmployee(int employeeId)
        {
          //  if (!Convert.ToInt32(String.IsNullOrEmpty(employeeId)))
          //  {
                try
                {
                    int Id = Convert.ToInt32(employeeId);
                    using (EmployeeContext db = new EmployeeContext())
                    {
                        var getEmployee = db.employee.Find(employeeId);
                        db.employee.Remove(getEmployee);
                        db.SaveChanges();
                        return "Employee Deleted";
                    }
                }
                catch (Exception ex)
                {
                    return "Employee Not Found";
                }
          //  }
            //else
          //  {
            //    return "Invalid Request";        
           // }

            
        
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

       
        public JsonResult GetCountry()
        {
            EmployeeContext db=new EmployeeContext();
            var getAllCountry = db.country.ToList();
            return Json(getAllCountry,JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetStateByCountryId(int CountryId)
        {
            EmployeeContext db = new EmployeeContext();
            var getStateList = db.state.Where(p => p.CountryId == CountryId).Select(x => new {x.StateId,x.StateName }).ToList();
            return Json(getStateList);
        }
        public JsonResult GetCityByStateId(int StateId)
        {
            EmployeeContext db = new EmployeeContext();
            var getCityList = db.city.Where(p => p.StateId == StateId).Select(x => new { x.CityId, x.CityName }).ToList();
            return Json(getCityList);
        }

    }
}
