/**
 * Created by hxsd on 2017/1/18.
 */
app.controller("page3Ctrl", function ($scope,$state,$ionicListDelegate,$http,$ionicScrollDelegate) {
    $scope.products=[
        {"title":"眼神太犀利","name":"土豆","imgsrc":"images/555.jpeg"},
        {"title":"毛毛卷...怎么我家的表情不对","name":"地瓜","imgsrc":"images/666.jpg"},
        {"title":"剃了的毛终于长回来了","name":"青椒","imgsrc":"images/555.jpeg"},
        {"title":"嗯？一起来胸毛互抵长起来，我无法呼吸","name":"南瓜","imgsrc":"images/777.jpg"},
        {"title":"眼神太犀利","name":"苦瓜","imgsrc":"images/888.jpg"},
        {"title":"毛毛卷...怎么我家的表情不对","name":"西瓜","imgsrc":"images/999.jpg"},
        {"title":"剃了的毛终于长回来了","name":"冬瓜","imgsrc":"images/1111.jpg"},
        {"title":"嗯？一起来胸毛互抵长起来，我无法呼吸","name":"甜瓜","imgsrc":"images/3333.jpg"}
    ]
    $scope.ionRefresher=function(){
        $http.get("data/page3.json").success(function(data){
            $scope.products=data
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete")
        })
    };
    $scope.loadMore=function(){
        $http.get("data/page3.json").success(function(data){
            Array.prototype.push.apply( $scope.products,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    }
    $scope.top=function(){
        $ionicScrollDelegate.scrollTop(true)
    }
});