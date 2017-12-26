$(function(){
	var flag = true;
	$(".right1").hover(function(){
					$(".reight1-1").show().stop().animate({left:-288},500)
				},function(){
					$(".reight1-1").hide().stop().animate({left:-320},500)
				});
				$(".reight1-1").hover(function(){
					$(".reight1-1").show().stop().animate({left:-288},500)
				},function(){
					$(".reight1-1").hide().stop().animate({left:-320},500)
				});
				$(".reight1-1 span").click(function(){
					$(".reight1-1").hide()
				})
				
				$(".right4").hover(function(){
					$(".reight4-1").show().stop().animate({left:-288},500)
				},function(){
					$(".reight4-1").hide().stop().animate({left:-320},500)
				});
				$(".reight4-1").hover(function(){
					$(".reight4-1").show().stop().animate({left:-288},500)
				},function(){
					$(".reight4-1").hide().stop().animate({left:-320},500)
				});
				$(".reight4-1 span").click(function(){
					$(".reight4-1").hide()
				});
				
				$(".right6").click(function(){
					$("html,body").animate({"scrollTop":0},500)
				});
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
				
				$(".buy").click(function(){
					window.location.href="cart.html"
				})
				$(".buy1").click(function(){
					window.location.href="cart.html"
				})
				
				$(".right2").click(function(){
					window.location.href="cart.html"
				})
				
})
