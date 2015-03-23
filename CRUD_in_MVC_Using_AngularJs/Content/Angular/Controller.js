app.controller("MyCntrl", function ($scope, angularService) {
    //As an (optional) naming convention the name starts with capital letter and ends with "Controller".


                //The last entry in the array is the controller constructor function.
                //Angular uses this array syntax to define the dependencies so that the DI also works after minifying the code,
                //which will most probably rename the argument name of the controller constructor function to something shorter like a.
    $scope.divEmployee = false;
    GetAllEmployee();
    //To Get All Records  
    function GetAllEmployee() {
        var getData = angularService.getEmployees();
        getData.then(function (emp) {
            $scope.employees = emp.data;
        },function () {
            alert('Error in getting records');
        });
    }

    $scope.EditEmployee = function (employee) {
      
        var getData = angularService.getEmployee(employee.Id);
        getData.then(function (emp) {
            $scope.employee = emp.data;
            $scope.employeeId = employee.Id;
            $scope.employeeName = employee.Name;
            $scope.employeeEmail = employee.Email;
            $scope.employeeAge = employee.Age;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        var Employee = {
            Name: $scope.employeeName,
            Email: $scope.employeeEmail,
            Age: $scope.employeeAge
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.Id = $scope.employeeId;
            var getData = angularService.updateEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = angularService.AddEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.DeleteEmployee = function (employee) {
        var getData = angularService.DeleteEmp(employee.Id);
      
        getData.then(function (msg) {
            $scope.employeeId = employee.Id;
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }
    
    function ClearFields() {
        $scope.employeeId = "";
        $scope.employeeName = "";
        $scope.employeeEmail = "";
        $scope.employeeAge = "";
    }
}); 