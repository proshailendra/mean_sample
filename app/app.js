angular.module("app", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("users", {
            url: "/",
            templateUrl: "/views/user/users.html",
            controller: "userCtrl"
        }).state("create", {
            url: "/create",
            templateUrl: "/views/user/create.html",
            controller: "userCtrl"
        }).state("edit", {
            url: "/edit/:id",
            templateUrl: "/views/user/create.html",
            controller: "userCtrl"
        }).state("details", {
            url: "/details/:id",
            templateUrl: "/views/user/details.html",
            controller: "userCtrl"
        });
    })
    .constant("globalConfig", {
        apiAddress: 'http://localhost:3000/api/userservice'
    });