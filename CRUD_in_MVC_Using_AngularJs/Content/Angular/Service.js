app.service("angularService", function ($http) {
    //get all employee
    this.getEmployees = function () {
        return $http.get("Home/GetAll");
    };
    //getEmployeeById
    this.getEmployee = function (employeeId) {
        var response = $http({
            method: "post",
            url: "Home/GetEmployeeById",
            params: {
                id: JSON.stringify(employeeId)
            }
        });
        return response;
    }
    // Update Employee 
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/UpdateEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/AddEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (employeeId) {
        var response = $http({
            method: "post",
            url: "Home/DeleteEmployee",
            params: {
                employeeId: JSON.stringify(employeeId)
            }
        });
        return response;
    }
});