myApp.service('EmployeeService', ['$http', function($http){
    console.log('EmployeeService loaded');
    
    const self = this;

    // create an array inside an object
    self.employee = {list: []};

    self.getEmployee = function() {
        $http.get('/employee')
            .then(function(response){
                self.employee.list = response.data;
            })
            .catch(function(response){
                console.log('error on GET request');
            })
    }

    self.addEmployee = function(employee) {
        $http.post('/employee', employee)
            .then(function(response){
                // update employee by calling the self.getEmployee() function
                self.getEmployee();
            })
            .catch(function(response){
                console.log('error on POST request');
                
            });
    }
    
    self.getEmployee();
}]);