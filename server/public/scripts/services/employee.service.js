myApp.service('EmployeeService', ['$http', function($http){
    console.log('EmployeeService loaded');
    
    const self = this;

    
    // updating employee by Id
    self.updateEmployee = function (employee) {
        $http.put(`/employee/${employeeId}`, employee)
        .then(function (response) {
            console.log('successful updateEmployee: ', response);
            self.getEmployee();  
        })
        .catch(function (response) {
            console.log('error on updatedEmployee :', response);
        })
    }
    // Deleting employee by Id
    self.deleteEmployee = function (employeeId) {
        $http.put(`/employee/${employeeId}`)
        .then(function (response) {
            console.log('successful deleteEmployee: ', response);
            self.getEmployee();  
        })
        .catch(function (response) {
            console.log('error on deleteEmployee :', response);
        })
    }
}]);