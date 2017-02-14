// JavaScript Document
$(function () {
    //-----------------------------------侧边栏导航
    var timer = null;
    $(".nav ul").find("li").each(function (index) { //遍历每个li
        $(this).on("mouseover", function () { // 进入每个li绑定事件
            clearTimeout(timer); // 每次进入清除定时器
            $(this).addClass("ab").siblings().removeClass("ab");//当前加上类 兄弟元素删除类
            $(".popup").show();//显示
            $(".popup .p1").eq(index).show().siblings().hide();
        });
        var _this = this;
        $(this).on("mouseout", function () { //离开每个li绑定事件
            timer = setTimeout(function () { //开定时器
                $(_this).removeClass("ab"); //删除当前的类
                $(".popup").hide();     // 隐藏
            }, 200)
        });
        $(".popup").hover(function () {
            clearTimeout(timer);
            $(this).show()
        }, function () {
            $(this).hide();
            $(_this).removeClass("ab");
        });
    });
//-----------------------------------------------------------------------------------------
    $(window).on("scroll", function () {   // 判断楼层导航 距离顶部的高度 大于400显示 小雨 隐藏
        if ($(document).scrollTop() >= 400) {
            $(".LocationFloorList").css("display", "block");
        } else {
            $(".LocationFloorList").css("display", "none");
        }
        ;
        var LocationFloorList = document.getElementsByClassName('LocationFloorList')[0];
        var aLi = LocationFloorList.getElementsByTagName('li');
        var aFloor = document.getElementsByClassName('floor');
        var arr = [];
        for (var i = 0; i < aFloor.length; i++) {
            var json = {};
            json.name = i;
            json.offsetTop = aFloor[i].offsetTop;
            arr.push(json);
        }
        ;

        var last_arr = [];
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].offsetTop < $(document).scrollTop() + 400) {//400为接近屏幕的敏感区
                last_arr.push(arr[j].name);
            }
            ;
        }
        ;
        var li_index = last_arr[last_arr.length - 1];
        for (var l = 0; l < aFloor.length; l++) {
            aLi[l].className = '';
        }
        ;
        // 页面上部如果有内容没有楼层会放入新数组产生错误
        last_arr.length == 0 ? aLi[0].className = 'cc' : aLi[li_index].className = 'cc';
    });
    $('.LocationFloorList a').each(function () {
        $(this).on("click", function () {
            //$('.LocationFloorList a').eq(index).addClass("cc").siblings().removeClass("cc")
            var id = this.hash; //获取a的HASH值
            $("html,body").animate({
                    scrollTop: $(id).offset().top //返回元素阅览器顶部
                },
                400)
        });
    });
    //------------------------------------------------楼层中 选项卡事件.
    $("#f1 .title").find("ul").find("li").each(function (index) {
        $(this).on("mouseenter", function () {
            $(".allbox section").eq(index).show().siblings().hide()//对应的图片显示 兄弟隐藏
        });
    });
//----------------------------------------------------------------------------------------------------------------
    //轮播图
    var n = 0;
    var timer2
    $(".banner ol").find("li").each(function (index) { //遍历每个按钮
        $(this).on("click", function () {  //按钮点击事件
            n = index
            $(this).addClass("ac").siblings().removeClass("ac")//当前的加上类兄弟删除类
            $(".banner ul").find("li").eq(index).fadeIn().siblings().fadeOut()//对应的图片动画显示 兄弟动画隐藏
        });
    });
    //---------------------------------左右箭头事件
    $(".nextBtn").on("click", function () {  //右箭头事件 每点击一次++
        n++
        if (n >= $(".banner ul").find("li").length) {
            n = 0
        }
        ;
        $(".banner ol").find("li").eq(n).addClass("ac").siblings().removeClass("ac")
        $(".banner ul").find("li").eq(n).fadeIn().siblings().fadeOut()
    });
    $(".prevBtn").on("click", function () {//做箭头事件 每点击一次--
        n--
        if (n < 0) {
            n = $(".banner ul").find("li").length - 1
        }
        ;
        $(".banner ol").find("li").eq(n).addClass("ac").siblings().removeClass("ac")
        $(".banner ul").find("li").eq(n).fadeIn().siblings().fadeOut()
    });
    function _run() {   //封装函数
        n++;
        if (n == $(".banner ul").find("li").length) {
            n = 0
        }
        ;
        $(".banner ol").find("li").eq(n).addClass("ac").siblings().removeClass("ac")
        $(".banner ul").find("li").eq(n).fadeIn().siblings().fadeOut()
    };
    //开定时器
    timer2 = setInterval(_run, 2000)// 开定时器调用函数
    $(".banner").on("mouseover", function () { //当鼠标进入到图片时 清除定时器
        clearInterval(timer2)
    });
    $(".banner").on("mouseout", function () {//当鼠标离开图片时 开启定时器
        timer2 = setInterval(_run, 2000)
    });
    //---------------------------------------------------------------返回顶部
    $(".nav_dw ul:last").find("a:first").on("click", function () {
        var $id = this.hash; //获取a的HASH值
        $("html,body").animate({
                scrollTop: $($id).offset().top   //返回顶部
            },
            400)
    });
    //---------------------------------------------------------------天气
    function getIcom(weather){
        var weatherMap={
            "大雪":"day_daxue.png",
            "小雪":"day_xiaoxue.png",
            "多云":"day_duoyun.png",
            "晴":"day_qing.png",
            "阴":"day_yin.png",
            "小雨":"day_xiaoyu.png",
            "中雨":"day_zhongyu.png",
            "大雨":"day_dayu.png",
            "中雪":"day_zhongxue.png",
        }
        return weatherMap[weather]
    };
    //----------当前默认城市 天气
    $.getJSON({// 发起ajax请求
                url: 'http://wthrcdn.etouch.cn/weather_mini?city=上海', // 请求的url
                success: function (data) {
                    $(".inner span").eq(0).html('<img src="images/'+getIcom(data.data.forecast[0].type)+'">');
                    $(".inner span").eq(1).html(data.data.wendu + "℃")
                    $(".inner span").eq(2).html(data.data.forecast[0].type);
                    $(".inner span").eq(3).html(data.data.forecast[0].fengxiang);
                    $(".inner span").eq(4).html(data.data.forecast[0].date)
        }
    });
    $(".add select").on("change", function () {   // 改变城市是 显示的天气
        var _name = $(".add select").val(); //获取下拉列表里面的值
        $.getJSON({// 发起ajax请求
            url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + _name + '', // 请求的url, 获取的值传到请求路径
            success: function (data) {
                $(".inner span").eq(0).html('<img src="images/'+getIcom(data.data.forecast[0].type)+'">');
                $(".inner span").eq(1).html(data.data.wendu + "℃");
                $(".inner span").eq(2).html(data.data.forecast[0].type);
                $(".inner span").eq(3).html(data.data.forecast[0].fengxiang);
                $(".inner span").eq(4).html(data.data.forecast[0].date)
            }
        });
    });
});
