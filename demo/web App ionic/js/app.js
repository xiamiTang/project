/**
 * Created by hxsd on 2017/1/18.
 */
var app = angular.module("myApp", ["ionic"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state("view1", {url: "/view1", templateUrl: "templates/view1/page1.html", controller: "page1Ctrl"})
        .state("view2", {url: "/view2", templateUrl: "templates/view2/page2.html", controller: "page2Ctrl"})
        .state("view3", {url: "/view3", templateUrl: "templates/view3/page3.html", controller: "page3Ctrl"})
        .state("view4", {url: "/view4", templateUrl: "templates/view4/page4.html", controller: "page4Ctrl"})
        .state("view5", {url: "/view5", templateUrl: "templates/view5/page5.html", controller: "page5Ctrl"})
        .state("login", {url: "/login", templateUrl: "templates/login/login.html"})
        .state("tour", {url: "/tour", templateUrl: "templates/tour/tour.html"});
    $urlRouterProvider.otherwise("/tour")
});
app.controller("myCtrl", function ($scope, $state) {
    $scope.showtab = false;
    $scope.$on("$ionicView.beforeEnter", function () {
        console.log("aaa:"+$state.current.name )
        if ($state.current.name=="view1") {
            $scope.showtab = true
        }
    })
});