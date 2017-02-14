/**
 * Created by hxsd on 2017/1/18.
 */
app.controller("page2Ctrl", function ($scope, $state,$ionicListDelegate,$http,$ionicScrollDelegate) {
    $scope.products=[
        {title:"大家都给猫咪买猫爬架吗?",icon:"主子已经基本适应环境 饮食趋于正常 下面该买猫爬架......",name:"糖包糖",numa:8,numb:5,imgsrc:"images/111.jpg"},
        {title:"猫藓治疗贴（附上使用药品和成分）",icon:"为了庆祝这个伟大的时刻 治疗猫廯4个月了 长......",name:"MDR977BN",numa:1,numb:0,imgsrc:"images/222.jpeg"},
        {title:"关于利尿通 vetplus cystaid 的英国直购......",icon:"我家墩儿大病初愈，尿闭两天，尿结晶外加尿中毒，......",name:"虾米",numa:5,numb:2,imgsrc:"images/333.jpg"},
        {title:"血的教训！！猫爸猫妈一定......",icon:"家猫今年三岁，已绝育，上周三开始出现呕吐，周四呕吐严重......",name:"土豆",numa:3,numb:5,imgsrc:"images/444.jpeg"},
        {title:"大家都给猫咪买猫爬架吗?",icon:"主子已经基本适应环境 饮食趋于正常 下面该买猫爬架......",name:"糖包糖",numa:8,numb:5,imgsrc:"images/111.jpg"}

    ]
    $scope.date=new Date();
    $scope.ionRefresher=function(){
        $http.get("data/page2.json").success(function(data){
            $scope.products=data
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete")
        })
    };
    $scope.loadMore=function(){
        $http.get("data/page2.json").success(function(data){
            Array.prototype.push.apply( $scope.products,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    }
    $scope.top=function(){
        $ionicScrollDelegate.scrollTop(true)
    }
});