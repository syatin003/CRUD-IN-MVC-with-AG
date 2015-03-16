using System.Web;
using System.Web.Mvc;

namespace CRUD_in_MVC_Using_AngularJs
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}