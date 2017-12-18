var app = angular.module(['myApp'], []);

app.controller("mycontroller", function($scope, $http) {
    $scope.username = "Tonnie";

    $http.get("/admin/schedules").then(function(response) {
        $scope.appointments = response.data.data;
        console.log(response.data.data);
    });

    $scope.markQuoted = function(id) {
        console.log(id);
        $http.get("/admin/quoted/"+id).then(function(response) {
            console.log(response.data.result);
            $scope.appointments = response.data.result;
        })
    }
})