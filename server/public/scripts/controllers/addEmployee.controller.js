myApp.controller('AddEmployeeController', ['EmployeeService', function(EmployeeService) {

    const self = this;
    

    // Add a new employee
    self.addEmployee = function(newEmployee) {
        console.log('adding new employee: ', newEmployee);
        
        EmployeeService.addEmployee(newEmployee);
    } //end addEmployee

}]);