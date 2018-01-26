myApp.controller('ReportsController', ['ReportsService', function(ReportsService) {

    const self = this;

    self.employeeInfo = ReportsService.employeeInfo;

    console.log('hey', self.employeeInfo);
    
    
    self.getMinSalary = function() {
        ReportsService.getMinSalary();
    }

    self.getMaxSalary = function() {
        ReportsService.getMaxSalary();
    }

    self.getAvgSalary = function() {
        ReportsService.getAvgSalary();
    }

    self.getEmployeeCount = function() {
        ReportsService.getEmployeeCount();
    }

    self.getJobTitles = function() {
        ReportsService.getJobTitles();
    }

    self.getMinSalary();
    self.getMaxSalary();
    self.getAvgSalary();
    self.getEmployeeCount();
    self.getJobTitles();
}]);