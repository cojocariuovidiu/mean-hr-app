myApp.service('ReportsService', ['$http', function($http){
    console.log('ReportsService loaded');

    const self = this;

    self.employeeInfo = {
        minSalary: {},
        maxSalary: {},
        avgSalary: {},
        employeeCount: {},
        jobTitles: {list: []}
    }

    self.getMinSalary = function() {
        $http.get('/reports/min')
            .then(function (response) {
                console.log('successful getMinSalary request: ', response);
                self.employeeInfo.minSalary = response.data[0].minSalary;
            })
            .catch(function (response) {
                console.log('error on getMinSalary request :', response);
            })
    }

    self.getMaxSalary = function() {
        $http.get('/reports/max')
            .then(function (response) {
                console.log('successful getMaxSalary request: ', response);
                self.employeeInfo.maxSalary = response.data[0].maxSalary; 
            })
            .catch(function (response) {
                console.log('error on getMaxSalary request :', response);
            })
    }

    self.getAvgSalary = function() {
        $http.get('/reports/avg')
            .then(function (response) {
                console.log('successful getAvgSalary request: ', response);
                self.employeeInfo.avgSalary = response.data[0].avgSalary;
            })
            .catch(function (response) {
                console.log('error on getAvgSalary request :', response);
            })
    }

    self.getEmployeeCount = function() {
        $http.get('/reports/employeeCount')
            .then(function (response) {
                console.log('successful getEmployeeCount request: ', response);
                self.employeeInfo.employeeCount = response.data.count;
            })
            .catch(function (response) {
                console.log('error on getEmployeeCount request :', response);
            })
    }

    self.getJobTitles = function() {
        $http.get('/reports/titles')
            .then(function (response) {
                console.log('successful getJobTitles request: ', response);
                self.employeeInfo.jobTitles.list = response.data;  
            })
            .catch(function (response) {
                console.log('error on getJobTitles request :', response);
            })
    }


}]);