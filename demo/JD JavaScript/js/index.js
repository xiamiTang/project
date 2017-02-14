// JavaScript Document


documentReady(function(){
	var wrap=document.getElementsByClassName("wrap")[0]
	var nav=wrap.getElementsByClassName("nav")[0]
	var ul=nav.getElementsByTagName("ul")[0]
	var li=nav.getElementsByTagName("li")
	var popup=wrap.getElementsByClassName("popup")[0]
	var p1=popup.getElementsByClassName("p1")
	var timer=null
	var timerr=null
	for(var i=0;i<li.length;i++){
		li[i].index=i
		li[i].onmouseover=function(){
			clearTimeout(timer);
			for(var j=0;j<p1.length;j++){
				p1[j].style.display="none"
				li[j].className=""
			}
			this.className="ab"
			popup.style.display="block"
			p1[this.index].style.display="block"		
		}
		li[i].onmouseout=function(){
			timer=setTimeout(function(){
				popup.style.display="none"	
				for(var j=0;j<p1.length;j++){
					li[j].className=""
				}
			},200)
		}	
	}
	popup.onmouseenter=function(ev){
		clearTimeout(timer);
		this.style.display="block";
	};
	popup.onmouseleave=function(){
		this.style.display="none";
		for(var j=0;j<p1.length;j++){
				li[j].className=""
			}
	};
//---------------------------------------------------------	
	var banner=document.getElementsByClassName("banner")[0]
	var oUl=banner.children[0]
	var aLi=oUl.children
	var ol=banner.children[1]
	var aBtn=ol.children
	var n=0;
	var li_w=aLi[0].offsetWidth
	oUl.style.width=li_w*aLi.length+"px"
	function run(){
		for(var j=0;j<aBtn.length;j++){
			aBtn[j].className=" "
		}	
		aBtn[n].className="ac"
	}
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			n=this.index;
			run();
			hxsd_tools.move(oUl,{"left":-li_w*n});
			};
		};
		
	function $show(){
		n++
		if(n==aLi.length){ //判断
			n=0;
		};
		run();
		hxsd_tools.move(oUl,{"left":-li_w*n});
	}
	timerr=setInterval($show,2000); //定时器
	banner.onmouseover=function(){ //鼠标移入 停止
		clearInterval(timerr);
		};
	banner.onmouseout=function(){ // 移出
		timerr=setInterval($show,2000);
		};
	var prevBtn=document.getElementsByClassName("prevBtn")[0]
	var nextBtn=document.getElementsByClassName("nextBtn")[0]
	prevBtn.onclick=function(){
		n--
		if(n<0){n=0}
		run()
		hxsd_tools.move(oUl,{"left":-li_w*n})	
		
	}
	nextBtn.onclick=function(){
		n++
		if(n>=aLi.length-1){n=aLi.length-1};
		run();
		hxsd_tools.move(oUl,{"left":-li_w*n})
	}
//-----------------------------------------------------------------------------------------
	var allbox=document.getElementsByClassName("allbox")[0]
	var section=allbox.getElementsByTagName("section")
	var s5=document.getElementsByClassName("s5")[0]
	var title=s5.getElementsByClassName("title")[0]
	var ooul=title.getElementsByTagName("ul")[0]
	var ooli=ooul.getElementsByTagName("li")
	
	for( var i=0; i<ooli.length;i++){
		ooli[i].index=i
		ooli[i].onmouseover=function(){
			for(var j=0;j<ooli.length;j++){
				section[j].style.display="none"
			}
			section[this.index].style.display="block"
		}	
		
	}
})
//--------------------------------------------------------------------------------
documentReady(function(){
	var LocationFloorList=document.getElementsByClassName('LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=document.getElementsByClassName('floor');
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name=i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};

	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop>100){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var last_arr=[];
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){//400为接近屏幕的敏感区
				last_arr.push(arr[j].name);
			}
		};
		
		console.log(last_arr);
		var li_index=last_arr[last_arr.length-1];

		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		//页面上部如果有内容，没有楼层会放入新数组，产生错误
		last_arr.length==0 ?aLi[0].className='cc':aLi[li_index].className='cc';

	
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};

}
	
})	
	
