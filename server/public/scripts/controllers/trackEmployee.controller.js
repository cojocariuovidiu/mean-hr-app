myApp.controller('TrackEmployeeController', ['EmployeeService', function(EmployeeService) {

    const self = this;

    // created in the get request
    self.employee = EmployeeService.employee;
    

    // delete employee
    self.deleteEmployee = function(newEmployee) {
        console.log('deleting new employee: ', newEmployee);
        
        EmployeeService.deleteEmployee(newEmployee);
    } //end deleteEmployee

}]);