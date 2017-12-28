var app = angular.module('myApp', []);

app.run(function($rootScope, $http) {
    $rootScope.getItems = function(itemname, callback) {
        $http.get("/admin/schedules/" + itemname).then(function(result) {
            callback(result.data.data);
        });
    }
})

//PENDING CONTROLLER
app.controller("pending", function($rootScope, $scope, $http) {
    
    $rootScope.getItems("pending", (data) => {
        $rootScope.appointments = data;
        $rootScope.pendingLength = data.length;
    });

    $scope.quote = function(id, quotation) {
        $scope.quotation = "";
        if(quotation < 0) {
            alert("Value is below 0");
        } else {
            $http.post("/admin/quote", {
                id: id,
                quotation: quotation
            }).then(function(response) {
                //refresh appointments
                alert('Quotation success.');
                $rootScope.appointments = response.data.data;
                $rootScope.pendingLength = response.data.data.length;
                $rootScope.getItems("quoted", (data) => {
                    $rootScope.quoted = data;
                    $rootScope.quotedLength = data.length;
                });
            });
        }
    }
});

//APPROVED CONTROLLER
app.controller("approved", function($rootScope, $scope, $http) {
    $http.get("/admin/schedules/approved").then(function(response) {
        $rootScope.approved = response.data.data;
        $rootScope.approvedLength = response.data.data.length;
    });

    $scope.paidncompleted = function(id) {
        $http.get('/admin/paid/' + id).then(function(result) {
            $rootScope.approved = result.data.data;
            $rootScope.approvedLength = result.data.data.length;
            $rootScope.getItems("completed", (data) => {
                $rootScope.completed = data;
                $rootScope.completedLength = data.length;
            });
            $rootScope.getItems("quoted", (data) => {
                $rootScope.quoted = data;
                $rootScope.quotedLength = data.length;
            });
        });
    }
});

//CANCELLED CONTROLLER
app.controller("cancelled", function($rootScope, $scope, $http) {
    $http.get("/admin/schedules/cancelled").then(function(response) {
        $scope.cancelled = response.data.data;
        $rootScope.cancelledLength = response.data.data.length;
    });
});

app.controller("completed", function( $rootScope, $scope, $http) {
    $http.get("/admin/schedules/completed").then(function(response) {
        $rootScope.completed = response.data.data;
        $rootScope.completedLength = response.data.data.length;
    });
});

app.controller("quoted", function($rootScope, $scope, $http) {

    $rootScope.getItems("quoted", (data) => {
        $rootScope.quoted = data;
        $rootScope.quotedLength = data.length;
    });

    $scope.approve = function(id) {
        $http.post("/admin/approve", {
            id: id
        }).then(function(response) {
            alert("Job successfully approved");
            $rootScope.quoted = response.data.data;
            $rootScope.quotedLength = response.data.data.length;
            $rootScope.getItems("approved", (data) => {
                $rootScope.approved = data;
                $rootScope.approvedLength = data.length;
            });
        });
    }
});

app.controller("search", function($rootScope, $scope, $http) {
    $scope.search = "";
    
    $scope.searchParam = function(evt, search) {
        if(evt.keyCode == 13) {
            //search
            $http.get('/admin/search/' + search).then(function(response) {
                $rootScope.searchValues = response.data.data;
                $rootScope.searchLength = response.data.length;
                console.log($rootScope.searchLength);
            });
        } else {
            //keep filling up
        }
    }
});

app.controller("login", function($rootScope, $scope, $http) {
    $scope.submitForm = function(email, password) {
        $http.post("/admin/login", {
            email: email,
            password: password
        }).then(function(response) {
            if(response.data.ok == false) {
                alert(response.data.message);
            } else {
                $rootScope.username = response.username;
                console.log(response);
                window.location.assign('/admin');
            }
        });
    }
});

app.controller("signup", function($scope, $http) {
    $scope.createAccount = function(username, email, password) {
        $http.post("/admin/signup", {
            username: username,
            email: email,
            password: password
        }).then(function(data) {
            if(data.data.ok == true) {
                alert("Account successfully created");
                window.location.assign('/admin');
            } else {
                alert(data.data.message);
            }
        })
    }
})