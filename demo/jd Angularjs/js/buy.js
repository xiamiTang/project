// JavaScript Document
//------------------------------------------小图切换
$(function () {
    $(".cont_left").find("ol").find("li:first").addClass("ac")
    $(".cont_left").find("ol").find("li").each(function (index) { //遍历小图的每个LI
        $(this).on("mouseenter", function () { // 帮定事件
            $(this).addClass("ac").siblings().removeClass("ac"); //给当前的li加上类 其他兄弟删除类
            $(".cont_left ul").find("li").eq(index).show().siblings().hide();//给当前的li对应的li显示 其他兄弟隐藏
        });
    });
    //-----------------------------------选项卡
    $(".s2").find("ul").find("li").each(function (index) {
        $(this).on("mouseenter", function () {// 帮定事件
            $(this).addClass("ww").siblings().removeClass("ww");//给当前的li加上类 其他兄弟删除类
            $(".s2 ol").find("li").eq(index).show().siblings().hide();//给当前的li对应的li显示 其他兄弟隐藏
        });
    });
//--------------------------------------跳转请求加载内容
    var url = "data/txt.json"; //请求路径赋予一个变量
    $.getJSON(url, function (data) {   // 发起ajax请求
        for (var i = 0; i < data.length; i++) {
            var j = data[i];
            var $ul = $("<ul>"); //构建一个元素
            $("<li>").append('<a href="#"><img src="images/' + j.imgsrc + '"></a> ').appendTo($ul);
            $("<li>").append(j.title).appendTo($ul);
            $("<li>").append(j.desc).appendTo($ul);
            $("<li>").append("￥" + j.price).appendTo($ul);
            $(".s3").append($ul)
        }
    });

    var cont_mid_b=document.getElementsByClassName("cont_mid_b")[0]
    var oLi=cont_mid_b.getElementsByTagName("li")
    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i
        oLi[i].onclick=function(){
            for(var j=0;j<oLi.length;j++){
                oLi[j].className=""
            }
            this.className="aa"
        }
    }

    //
    //var cont=document.getElementsByClassName("cont")[0]
    //var btn=cont.getElementsByClassName("btn")[0]
    //var aBtn=cont.getElementsByTagName("button")
    //var input=btn.getElementsByTagName("input")[0]
    //aBtn[0].onclick=function(){
    //    if(input.value<=1){
    //        input.value=1
    //    }else{input.value--}
    //}
    //aBtn[1].onclick=function(){
    //    input.value++
    //}
});


//------------------------------------------------------------------------------放大镜
//	cont_left_pic.onmousemove=function(ev){
//		span.style.display=datu.style.display='block';
//		var scrollT=document.documentElement.scrollTop ||document.body.scrollTop;//滚动条高度
//		ev=ev||window.event;
//		var l=ev.clientX-cont_left_pic.offsetLeft-span.offsetWidth/2;
//		var t=ev.clientY+scrollT-cont_left_pic.offsetTop-span.offsetHeight/2;
//		if(l<0){l=0;};
//		if(t<0){t=0;};
//		if(l>cont_left_pic.offsetWidth-span.offsetWidth){l=cont_left_pic.offsetWidth-span.offsetWidth};
//		if(t>cont_left_pic.offsetHeight-span.offsetHeight){t=cont_left_pic.offsetHeight-span.offsetHeight;};
//		span.style.left=l+'px';
//		span.style.top=t+'px';
//		//计算比率
//		var rateX=l/(cont_left_pic.offsetWidth-span.offsetWidth);
//		var rateY=t/(cont_left_pic.offsetHeight-span.offsetHeight);
////-------------------------------------------------------------------------------中图大图事件。 中图显示让对应的大图显示
//		for(var k=0;k<aLi.length;k++){
//			aLi[k].index=k
//			aLi[k].onmouseover=function(){
//				for(var l=0;l<aLi.length;l++){
//					img[l].style.display="none"
//				}
//			img[this.index].style.display="block"
//			}
//		}
//		for(var m=0;m<img.length;m++){
//			img[m].style.left=-(img[m].offsetWidth-datu.offsetWidth)*rateX+'px';
//			img[m].style.top=-(img[m].offsetHeight-datu.offsetHeight)*rateY+'px';
//		}
//	};
//	cont_left_pic.onmouseout=function(){
//		span.style.display=datu.style.display='none';
//	};
////--------------------------------------------------------------------------选着版本那块事件
//	var cont_mid_b=document.getElementsByClassName("cont_mid_b")[0]
//	var oLi=cont_mid_b.getElementsByTagName("li")
//	for(var i=0;i<oLi.length;i++){
//		oLi[i].index=i
//		oLi[i].onclick=function(){
//			for(var j=0;j<oLi.length;j++){
//				oLi[j].className=""
//			}
//		this.className="aa"
//		}
//	}
////------------------------------------------------------- -------------增值保障那块事件
//	var cont_mid_f=document.getElementsByClassName("cont_mid_f")[0]
//	var ali=cont_mid_f.getElementsByTagName("li")
//	for(var a=0;a<ali.length;a++){
//		ali[a].index=a
//		ali[a].onclick=function(){
//			for(var b=0;b<ali.length;b++){
//				ali[b].className=""
//			}
//		this.className="ab"
//		}
//	}
////---------------------------------------------------------------------------购物加减事件
//	var cont=document.getElementsByClassName("cont")[0]
//	var btn=cont.getElementsByClassName("btn")[0]
//	var aBtn=cont.getElementsByTagName("button")
//	var input=btn.getElementsByTagName("input")[0]
//	aBtn[0].onclick=function(){
//		if(input.value==0){
//			input.value=0
//		}else{input.value--}
//	}
//	aBtn[1].onclick=function(){
//		input.value++
//	}
////------------------------------------------------------------------------推荐产品 选项卡事件


