/**
 * Created by hxsd on 2017/1/18.
 */
app.controller("page1Ctrl", function ($scope, $state,$ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

});