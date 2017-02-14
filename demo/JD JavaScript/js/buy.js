// JavaScript Document

documentReady(function(){
	var cont_left=document.getElementsByClassName("cont_left")[0] //父级
	var cont_left_pic=cont_left.getElementsByClassName("cont_left_pic")[0] // 中图盒子
	//var datu=cont_left.getElementsByClassName("datu")[0]
	var ol=cont_left.children[1]
	var li=ol.children //小图的LI
	var ul=cont_left.getElementsByTagName("ul")[0]
	var aLi=ul.getElementsByTagName("li") //中图 aLi
	var span=cont_left.getElementsByTagName("span")[0]
	var datu=cont_left.getElementsByClassName("datu")[0]
	var img=datu.getElementsByTagName("img") // 大图 img
//----------------------------------------------------------小图事件。 进入小图让对应的中图显示		 
	for(var i=0;i<li.length;i++){
		li[i].index=i
		li[i].onmouseover=function(){
			for(var j=0;j<li.length;j++){
				li[j].className=""
				aLi[j].style.display="none"
			}
			this.className="ac"
			aLi[this.index].style.display="block"
		}
	}
//------------------------------------------------------------------------------放大镜 
	cont_left_pic.onmousemove=function(ev){
		span.style.display=datu.style.display='block';
		var scrollT=document.documentElement.scrollTop ||document.body.scrollTop;//滚动条高度
		ev=ev||window.event;
		var l=ev.clientX-cont_left_pic.offsetLeft-span.offsetWidth/2;
		var t=ev.clientY+scrollT-cont_left_pic.offsetTop-span.offsetHeight/2;
		if(l<0){l=0;};
		if(t<0){t=0;};
		if(l>cont_left_pic.offsetWidth-span.offsetWidth){l=cont_left_pic.offsetWidth-span.offsetWidth};		
		if(t>cont_left_pic.offsetHeight-span.offsetHeight){t=cont_left_pic.offsetHeight-span.offsetHeight;};
		span.style.left=l+'px';
		span.style.top=t+'px';
		//计算比率
		var rateX=l/(cont_left_pic.offsetWidth-span.offsetWidth);
		var rateY=t/(cont_left_pic.offsetHeight-span.offsetHeight);
//-------------------------------------------------------------------------------中图大图事件。 中图显示让对应的大图显示		
		for(var k=0;k<aLi.length;k++){
			aLi[k].index=k
			aLi[k].onmouseover=function(){
				for(var l=0;l<aLi.length;l++){
					img[l].style.display="none"	
				}
			img[this.index].style.display="block"
			}
		}
		for(var m=0;m<img.length;m++){
			img[m].style.left=-(img[m].offsetWidth-datu.offsetWidth)*rateX+'px';
			img[m].style.top=-(img[m].offsetHeight-datu.offsetHeight)*rateY+'px';		
		}	
	};	
	cont_left_pic.onmouseout=function(){
		span.style.display=datu.style.display='none';
	};
//--------------------------------------------------------------------------选着版本那块事件
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
//------------------------------------------------------- -------------增值保障那块事件
	var cont_mid_f=document.getElementsByClassName("cont_mid_f")[0]
	var ali=cont_mid_f.getElementsByTagName("li")
	for(var a=0;a<ali.length;a++){
		ali[a].index=a
		ali[a].onclick=function(){
			for(var b=0;b<ali.length;b++){
				ali[b].className=""
			}	
		this.className="ab"
		}	
	}
//---------------------------------------------------------------------------购物加减事件
	var cont=document.getElementsByClassName("cont")[0]
	var btn=cont.getElementsByClassName("btn")[0]
	var aBtn=cont.getElementsByTagName("button")
	var input=btn.getElementsByTagName("input")[0]
	aBtn[0].onclick=function(){
		if(input.value==0){
			input.value=0	
		}else{input.value--}
	}
	aBtn[1].onclick=function(){
		input.value++
	}
//------------------------------------------------------------------------推荐产品 选项卡事件
	var s2=document.getElementsByClassName("s2")[0]
	var ooul=s2.getElementsByTagName("ul")[0]
	var ool=s2.getElementsByTagName("ol")[0]
	var ooli=ooul.getElementsByTagName("li")
	var aali=ool.getElementsByTagName("li")
	for(var n=0;n<ooli.length;n++){
		ooli[n].index=n
		ooli[n].onclick=function(){
			for(var g=0;g<ooli.length;g++){
				ooli[g].className=""
				aali[g].style.display="none"	
			}
			this.className="ww"
			aali[this.index].style.display="block"	
		}	
	}

})