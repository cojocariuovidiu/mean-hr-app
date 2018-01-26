myApp.service('ReportsService', ['$http', function($http){
    console.log('ReportsService loaded');

    const self = this;

    self.minSalary = {list: []}
    self.maxSalary = {list: []}
    self.avgSalary = {list: []}
    self.employeeCount = {list: []}
    self.jobTitles = {list: []}



    self.getMinSalary = function() {
        $http.get('/reports/min')
            .then(function (response) {
                console.log('successful getMinSalary request: ', response);
                self.minSalary.list = response.data;
            })
            .catch(function (response) {
                console.log('error on getMinSalary request :', response);
            })
    }

    self.getMaxSalary = function() {
        $http.get('/reports/max')
            .then(function (response) {
                console.log('successful getMaxSalary request: ', response);
                self.maxSalary.list = response.data; 
            })
            .catch(function (response) {
                console.log('error on getMaxSalary request :', response);
            })
    }

    self.getAvgSalary = function() {
        $http.get('/reports/avg')
            .then(function (response) {
                console.log('successful getAvgSalary request: ', response);
                self.avgSalary.list = response.data;
            })
            .catch(function (response) {
                console.log('error on getAvgSalary request :', response);
            })
    }

    self.getEmployeeCount = function() {
        $http.get('/reports/employeeCount')
            .then(function (response) {
                console.log('successful getEmployeeCount request: ', response);
                self.employeeCount.list = response.data;
            })
            .catch(function (response) {
                console.log('error on getEmployeeCount request :', response);
            })
    }

    self.getJobTitles = function() {
        $http.get('/reports/titles')
            .then(function (response) {
                console.log('successful getJobTitles request: ', response);
                self.jobTitles.list = response.data;  
            })
            .catch(function (response) {
                console.log('error on getJobTitles request :', response);
            })
    }


}]);