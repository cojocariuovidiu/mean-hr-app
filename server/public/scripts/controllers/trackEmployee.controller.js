myApp.controller('TrackEmployeeController', ['EmployeeService', function(EmployeeService) {

    const self = this;

    // created in the get request
    self.employee = EmployeeService.employee;

    self.employeeInfo = {};
    
    // openFormUpdate employee
    self.openFormUpdateEmployee = function(employee) {
        console.log('employee', employee);
        self.employeeInfo = employee;
        console.log('self.employeeInfo', self.employeeInfo);
    }
    
    // update employee on the database
    self.updateEmployee = function(employee) {
        EmployeeService.updateEmployee(employee);
    }

    // delete employee
    self.deleteEmployee = function(newEmployee) {
        console.log('deleting new employee: ', newEmployee);
        
        EmployeeService.deleteEmployee(newEmployee);
    } //end deleteEmployee

}]);