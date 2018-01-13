var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "templates/adminhome.html"
    }).when("/users", {
        templateUrl: "templates/users.html"
    }).when("/clients", {
        templateUrl: "templates/clients.html"
    }).when("/order_info", {
        templateUrl: "templates/order_info.html"
    });
})

app.run(function($rootScope, $http) {

    //the function getItems is set to rootScope to be accessible by all controllers
    $rootScope.getItems = function(itemname, callback) {
        $http.get("/admin/schedules/" + itemname).then(function(result) {
            callback(result.data.data);
        });
    }
});

//PENDING CONTROLLER
app.controller("pending", function($rootScope, $scope, $http) {

    $rootScope.username = window.localStorage.getItem("username");
    
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

app.controller("login", function($scope, $http) {
    $scope.login = function(email, password) {
        $http.post('/admin/adminlogin', {
            email: email,
            password: password
        }).then(function(response) {
            switch(response.status) {
                case 200:
                    if(response.data.ok == false) {
                        //display error message
                        alert(response.data.message);
                    } else {
                        //save username and permission levels to localStorage
                        window.localStorage.setItem("username", response.data.username);
                        //token!
                        window.localStorage.setItem("add_technician", response.data.add_technician);
                        window.localStorage.setItem("remove_technician", response.data.remove_technician);
                        window.localStorage.setItem("approve_order", response.data.approve_order);
                        window.localStorage.setItem("cancel_order", response.data.cancel_order);
                        window.localStorage.setItem("complete_order", response.data.complete_order);
                        window.localStorage.setItem("delete_order", response.data.delete_order);
                        window.localStorage.setItem("edit_technician", response.data.edit_technician);
                        window.localStorage.setItem("email_client", response.data.email_client);
                        window.localStorage.setItem("generate_client_info", response.data.generate_client_info);
                        window.localStorage.setItem("quote_order", response.data.quote_order);
                        window.localStorage.setItem("generate_report", response.data.generate_report);

                        window.location.assign('/admin');
                    }
                break;

                case 400:
                    alert("Please enter valid data");
                break;
            }
        })
    }
    /*$scope.submitForm = function(email, password) {
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
    }*/
});