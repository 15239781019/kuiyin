
$.ajax({
	type: "get",
	url: "json/color.json",
	async: true,
	success: function(data6) {
		color(data6)
		//console.log(data6)
		$(".c2 ul li").on("click", function() {
			$(".c2 ul li").css("border", "2px solid #999")
			$(this).css("border", "2px solid #FF5482");	
			console.log($(this).index());
				//obj.c= $(this).index();
		});

		$(".c3 ul li").on("click", function() {
			$(".c3 ul li").css("border", "2px solid #999")
			$(this).css("border", "2px solid #FF5482")
			console.log($(this).index());
			//console.log($(".c3 ul li"))
			//obj.s= $(this).index();
		});
	}
});

function color(data6) {
	var html6 = template("test6", data6);
	//console.log(html6)
	$('.cc2')[0].innerHTML = html6
	
}

$(function() {
	$(".buy i").click(function(){
		window.location.href = "cart.html"
	})
	$(".buy1").click(function(){
		window.location.href = "cart.html"
	})
	$(".right2").click(function(){
		window.location.href = "cart.html"
	})
	var flag = true;
	$(".right1").hover(function() {
		$(".reight1-1").show().stop().animate({
			left: -288
		}, 500)
	}, function() {
		$(".reight1-1").hide().stop().animate({
			left: -320
		}, 500)
	});
	$(".reight1-1").hover(function() {
		$(".reight1-1").show().stop().animate({
			left: -288
		}, 500)
	}, function() {
		$(".reight1-1").hide().stop().animate({
			left: -320
		}, 500)
	});
	$(".reight1-1 span").click(function() {
		$(".reight1-1").hide()
	})

	$(".right4").hover(function() {
		$(".reight4-1").show().stop().animate({
			left: -288
		}, 500)
	}, function() {
		$(".reight4-1").hide().stop().animate({
			left: -320
		}, 500)
	});
	$(".reight4-1").hover(function() {
		$(".reight4-1").show().stop().animate({
			left: -288
		}, 500)
	}, function() {
		$(".reight4-1").hide().stop().animate({
			left: -320
		}, 500)
	});
	$(".reight4-1 span").click(function() {
		$(".reight4-1").hide()
	});

	$(".right6").click(function() {
		$("html,body").animate({
			"scrollTop": 0
		}, 500)
	});
	
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
	
	

	$(".s1").click(function() {
		$("#nav").animate({
			"left": 150
		}, 500)
	})
	$(".right2").hover(function() {
		$(".right2-1").show().stop().animate({
			left: -278
		}, 500)
	}, function() {
		$(".right2-1").hide().stop().animate({
			left: -308
		}, 500)
	});
	$(".right2-1").hover(function() {
		$(".right2-1").show().stop().animate({
			left: -278
		}, 500)
	}, function() {
		$(".right2-1").hide().stop().animate({
			left: -308
		}, 500)
	});
	$(".right2-1 p em").click(function() {
		$(".right2-1").hide()
	})
	$.ajax({
		type: "get",
		url: "json/xiangqing.json",
		async: true,
		success: function(data4) {
			xiangqing(data4)
			//console.log(data4)
			var $main = $("main-left1");
			var $Ul = $('#anav');
			var $aLi = $("#anav li");
			var $s1 = $(".s1");
			var $s2 = $(".s2");
			$s2.click(function() {
				$Ul.animate({
					"left": -($aLi.eq(0).width() * 4 + 120)
				}, 500)
			})
			$s1.click(function() {
				$Ul.animate({
					"left": 0
				}, 500)
			})
		}
	});

	function xiangqing(data4) {
		var html4 = template("test4", data4);
		//console.log(html4)
		$("#main-left1")[0].innerHTML = html4;

	}

	$.ajax({
		type: "get",
		url: "json/xqimg.json",
		async: true,
		success: function(data5) {
			xqimg(data5)
			//console.log(data5)
		}
	});

	function xqimg(data5) {
		var html5 = template("test5", data5);
		//console.log(html5)
		$(".xiangqing")[0].innerHTML += html5;
	}
	var str = location.search;
					var id = str.split("=")[1];
					$.ajax({						
						type:"get",
						url:"json/xinxi.json",
						async:true,
						success:function(data8){								
							 zoom(data8)							 
						}						
					});					
					function zoom(data8){			
						console.log(data8)
						var html8 = template("test8", data8[id]);
						console.log(html8)
						$("#zoomBox")[0].innerHTML = html8;
						
						$zoomBox = $("#zoomBox");
					$Mid = $("#mid");
					$Midimg = $Mid.children().first();
					$Zoom = $("#zoom");
					$Big = $("#big");
					$Bigimg = $Big.children().first();
					$aList = $("#small li")
					$Mid.mousemove(function(e){
						$Zoom.show()
						$Big.show();
						var evt = e || event;
						var x = evt.pageX -     $zoomBox.offset().left-$Zoom.width()/2;
						var y = evt.pageY - $zoomBox.offset().top-$Zoom.height()/2;
						if(x<=0){
							x=0;
						}
						if(y<=0){
							y=0;
						}
						if(x >= $Mid.width()-$Zoom.width()){
							x = $Mid.width()-$Zoom.width();
						}
						if(y >= $Mid.height()-$Zoom.height()){
							y = $Mid.height()-$Zoom.height();
						}						
						$Zoom.css({"left":x,"top":y});
						$Bigimg.css("left",-2*x)
						$Bigimg.css("top",-2*y)
					})
					$Mid.mouseleave(function(){
						$Big.hide();
						$Zoom.hide();
					})
						for(let i = 0; i < $aList.length; i++) {							
							for(var j = 0; j < $aList.length; j++) {
								$aList[j].className = "hover";
							}							
						}
					}
					
						var str = location.search;
						var id = str.split("=")[1];
						$.ajax({
							type:"get",
							url:"json/xinxi.json",
							async:true,
							success:function(data7){
								xinxi(data7)
							}
						});										
						function xinxi(data7){
							var html7 = template("test7",data7[id]);
							$(".left")[0].innerHTML = html7;
							$("#btn3").click(function(){
								$(".right2-1 img").attr("src","img/0_l.jpg")
								$(".right2-1 strong").css("display","none")
							})		
								if(getCookie("cart")){
									var obj = JSON.parse(getCookie("cart"));
								}else{
									var obj = {};
								}
								var num = obj[id];
								var oSnum = document.getElementById("snum")
								var oNb = document.getElementsByClassName("nb")[0];
								oNb.innerHTML = num;
								console.log(oNb)
								oSnum.value = num;
								var oMinus = document.getElementsByClassName("minus")[0];
								var oAdd= document.getElementsByClassName("add")[0];
								var oBtn3 =document.getElementById("btn3");
								oMinus.onclick = function(){
									oSnum.value--;
								}
								oAdd.onclick = function(){
									oSnum.value++;
								}
			
								oBtn3.onclick = function(){
									obj[id] = parseInt(oSnum.value);
									var str = JSON.stringify(obj);
									setCookie("cart",str,7);
								}
						}				

});

