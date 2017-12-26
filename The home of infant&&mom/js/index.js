var oTxt = document.getElementsByClassName("txt")[0];
var aUl = document.getElementsByClassName("ul")[0];

oTxt.oninput=function(){
	var oScript = document.createElement("script");
	oScript.src  ="https://search.haohaizi.com/?c=keyword&m=store&keyword="+oTxt.value+"&callback=foo&_=1513857008161";
	document.body.appendChild(oScript)
}
function foo(data){
	//data = data.name;
	
	//console.log(data)
	var str = "";
	for(var i = 0 ;i<data.length;i++){
		str += "<li>"+data[i].name+"</li>"
	}
	aUl.innerHTML=str;

}

var oBanner=document.getElementById("banner");
var oUl=document.getElementById("lunbo");
var aLi=oUl.children;
var navList=document.getElementById("navList");
			for(var i =0;i<aLi.length;i++){
				var oLi=document.createElement("li");
				
				navList.appendChild(oLi);
			}
			var navLi=navList.children;
			navLi[0].className="cur";
		
			
			var cloneNode=aLi[0].cloneNode(true);//注意脚标元素什么的都放在克隆的上面 不然需要-1
			oUl.appendChild(cloneNode);
			
			
			var perWidth=aLi[0].offsetWidth;
			oUl.style.width=perWidth*aLi.length+"px";
			var i =0;
			var timer=setInterval(function(){
				move();
			},3000)
			
			
			var oBtn=document.getElementById("btn");
			var aSpan=oBtn.children;
			aSpan[0].onclick=function(){
				clearInterval(timer);
				move();
			}
			aSpan[1].onclick=function(){
				clearInterval(timer);
				move();
			}
			
			for(var j =0;j<navLi.length;j++){
				navLi[j].index=j;
				navLi[j].onmouseover=function(){
					clearInterval(timer);
					i=this.index-1;
					move();
				}
			}
			
			function move(){
				i++;
				if(i==aLi.length){
					i=1;
					oUl.style.left=0;
				}
				
				if(i==-1){
					i=aLi.length-2;
					oUl.style.left=-(aLi.length-1)*perWidth+"px";
				}
				for(var k = 0;k<navLi.length;k++){
					navLi[k].className="";
				}
				if(i==aLi.length-1){
					navLi[0].className="cur";
				}else{
					navLi[i].className="cur";
				}
				
				startMove(oUl,{left:-1090*i})
			}


			$(function(){
				var flag = true;
				$li = $(".neirong");				
				$(".ulist li").mouseenter(function(){
					$li.show();
				});
				$(".ulist li").mouseleave(function(){
					$li.hide();
				});
				$li.hover(function(){
					$li.show();
				},function(){
					$li.hide()
				});
				
				$(".right1").hover(function(){
					$(".right1-1").show().stop().animate({left:-288},500)
				},function(){
					$(".right1-1").hide().stop().animate({left:-320},500)
				});
				$(".right1-1").hover(function(){
					$(".right1-1").show().stop().animate({left:-288},500)
				},function(){
					$(".right1-1").hide().stop().animate({left:-320},500)
				});
				$(".right1-1 span").click(function(){
					$(".right1-1").hide()
				})
								
				$(".right2").hover(function(){
					$(".right2-1").show().stop().animate({left:-278},500)
				},function(){
					$(".right2-1").hide().stop().animate({left:-308},500)
				});
				$(".right2-1").hover(function(){
					$(".right2-1").show().stop().animate({left:-278},500)
				},function(){
					$(".right2-1").hide().stop().animate({left:-308},500)
				});
				$(".right2-1 p em").click(function(){
					$(".right2-1").hide()
				})
				
				$(".right4").hover(function(){
					$(".right4-1").show().stop().animate({left:-288},500)
				},function(){
					$(".right4-1").hide().stop().animate({left:-320},500)
				});
				$(".right4-1").hover(function(){
					$(".right4-1").show().stop().animate({left:-288},500)
				},function(){
					$(".right4-1").hide().stop().animate({left:-320},500)
				});
				$(".right4-1 span").click(function(){
					$(".right4-1").hide()
				})
				
				
				$(".right5").hover(function(){
					$(".right5-1").show().stop().animate({left:-79},500)
				},function(){
					$(".right5-1").hide().stop().animate({left:-109},500)
				});
				$(".right5-1").hover(function(){
					$(".right5-1").show().stop().animate({left:-79},500)
				},function(){
					$(".right5-1").hide().stop().animate({left:-109},500)
				});

				
				
				$(".right6").hover(function(){
					$(".right6-1").show().stop().animate({left:-79},500)
				},function(){
					$(".right6-1").hide().stop().animate({left:-109},500)
				});
				$(".right6-1").hover(function(){
					$(".right6-1").show().stop().animate({left:-79},500)
				},function(){
					$(".right6-1").hide().stop().animate({left:-109},500)
				});
				
				
				$(".txt").on("input",function(){
					$(".ul").show()
				});
				$(window).scroll(function(){
						if(flag){
							var scrollTop = $(this).scrollTop();
							
							if($(document).scrollTop() >= 400){
								$("#left").show()
								$("#WeChat").show()
							}else{
								$("#left").hide()
								$("#WeChat").hide()
							}
						}
				});
				
				$(".right6").click(function(){
					$("html,body").animate({"scrollTop":0},500)
				})				
				
				$.ajax({
					type:"get",
					url:"json/index.json",
					async:true,
					success:function(data){
						//console.log(data);
					    mom(data);
						
					}
				});
				function mom(data){
					var html = template("test",data);
					//console.log(html);
					$(".neirong")[0].innerHTML = html;
				};
				$(".ulist li").mouseover(function(){
					var index = $(this).index();
					//console.log(index)
					$(".bigbox .abc").eq(index).show().siblings().hide()
				});
				
				
				$.ajax({
					type:"get",
					url:"json/goods.json",
					async:true,
					success:function(data1){
						//console.log(data1)
						mess(data1);
					}
				});
				
				function mess(data1){
					var html1 = template("test1",data1);
					//console.log(html1)
					$(".main-bottom")[0].innerHTML = html1;
				};
				
				
				$.ajax({
					type:"get",
					url:"json/pic.json",
					async:true,
					success:function(data2){
						pic(data2);
						console.log(data2)
					}
				});
				function pic(data2){
					var html2 = template("test2",data2);
					console.log(html2)
					$("#menu")[0].innerHTML += html2;
				}
				
			})


