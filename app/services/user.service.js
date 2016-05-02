angular.module("app").factory("userService", function ($http, globalConfig, $q) {
    var url = "";
    return {
        getUsers: function () {
            url = globalConfig.apiAddress + "/users";
            
            return $http.get(url).then(
                function (response) {
                    return response.data;
                },
                function (err) {
                    console.log(err)
                }
            )
        },
        getUser: function (id) {
            url = globalConfig.apiAddress + "/user/" + id;
            
            var promise = $http.get(url);
            var deffered = $q.defer();
            promise.then(function (response) {
                deffered.resolve(response);
            }).catch(function (err) {
                deffered.reject(err);
            });
            return deffered.promise;
        },
        createUser: function (user) {
            url = globalConfig.apiAddress + "/create";
            return $http.post(url, user);
        },
        updateUser: function (user) {
            url = globalConfig.apiAddress + "/update/" + user._id;
            return $http.put(url, user);
        },
        deleteUser: function (id) {
            url = globalConfig.apiAddress + "/delete/" + id;
            return $http.delete(url);
        }
    }
});
