angular.module("app").controller("userCtrl", function ($scope, userService, $state, $stateParams) {
    $scope.users = [];
    $scope.IsSubmit = false;

    if ($state.current.name == "users") {
        
        userService.getUsers().then(function (response) {
                $scope.users=response;
            },
            function (err) {
                console.log(err);
            }
        );
    }

    $scope.saveData = function (user) {
        $scope.IsSubmit = true;
        if ($scope.userForm.$valid) {
            if (user._id > 0) {
                userService.updateUser(user).success(function (data) {
                    console.log(data);
                    if (data == "updated") {
                        $state.go("users");
                    }
                }).error(function (err) {
                    console.log(err);
                });
            } else {
                userService.createUser(user).success(function (data) {
                    if (data == "added") {
                        $state.go("users");
                    }
                });
            }
        }
    };

    $scope.deleteUser = function (id) {
        if (confirm('Are you sure to delete?')) {
            userService.deleteUser(id).success(function (data) {
                if (data == "deleted") {
                    $state.go("users", {}, {reload: true});
                }
            });
        }
    };

    if ($state.current.name == "edit") {
        var id = $stateParams.id;        
        userService.getUser(id).then(function (response) {
            $scope.user = response.data;
        });
    }
});
