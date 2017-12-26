$(function(){
	
	$("#txt").focus(function(){
		$("#txt").css("border","1px solid #FF5C00")
	})
	$("#txt").focusout(function(){
		$("#txt").css("border","1px solid #cecece")
	})
	$("#txt1").focus(function(){
		$("#txt1").css("border","1px solid #FF5C00")
	})
	$("#txt1").focusout(function(){
		$("#txt1").css("border","1px solid #cecece")
	})
	$("#psw").focus(function(){
		$("#psw").css("border","1px solid #FF5C00")
	})
	$("#psw").focusout(function(){
		$("#psw").css("border","1px solid #cecece")
	})
	$("#psw1").focus(function(){
		$("#psw1").css("border","1px solid #FF5C00")
	})
	$("#psw1").focusout(function(){
		$("#psw1").css("border","1px solid #cecece")
	})
	$("#btn3").click(function(){
		$('#btn3').css("background","url(img/register.png) -160px -151px")
	})	
	
	
})


var reg = /^1[34578]\d{9}$/;
var reg1=/^\w{6,16}/;

var otxt=document.getElementById("txt");
var opsw=document.getElementById("psw");
var opsw1=document.getElementById("psw1");
var ocuo = document.getElementsByClassName("cuo")[0];
var oI = ocuo.children[0];
var ocuo1 = document.getElementsByClassName("cuo1")[0];
var oI1 = ocuo1.children[0];
var ocuo2 = document.getElementsByClassName("cuo2")[0];
var oI2 = ocuo2.children[0];
var obtn2=document.getElementById("btn2"); 
obtn2.onmousedown=function(){
	var val = otxt.value;
	if(reg.test(val)){
		oI.style.display = "none"
	}else{
		oI.style.display = "block"
	}
	var val1 = val2= opsw.value;
	if(reg1.test(val1)){
		oI1.style.display = "none"
	}else{
		oI1.style.display = "block"
	}
	if(!val1==val2){
		oI2.style.display = "block"
	}
	
		$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:otxt.value,password:opsw.value},function(data){
		if(data==1){
			window.location.href="denglu.html"
		}
		if(data==0){
			alert("用户名已被注册")
		}
		if(data==2){
			alert("注册失败，请重新注册")
		}
	})
}
$(".denglu").click(function(){
	window.location.href="denglu.html"
})
