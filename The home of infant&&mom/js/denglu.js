$(function(){
	$("#txt").focus(function(){
		$("#txt").css("border","1px solid #FF5C00")
	})
	$("#txt").focusout(function(){
		$("#txt").css("border","1px solid #cecece")
	})
	$("#psw").focus(function(){
		$("#psw").css("border","1px solid #FF5C00")
	})
	$("#psw").focusout(function(){
		$("#psw").css("border","1px solid #cecece")
	})
	$("#btn1").click(function(){
		$(".yanzheng").slideToggle()
	})
	
})

var reg = /^1[34578]\d{9}$/;
var reg1=/^\w{6,16}/;


var otxt=document.getElementById("txt");
var obtn2=document.getElementById("btn2");
console.log(obtn2)
var opsw=document.getElementById("psw"); 
var ocuo = document.getElementsByClassName("cuo")[0];
var oI = ocuo.children[0];
var ocuo1 = document.getElementsByClassName("cuo1")[0];
var oI1 = ocuo1.children[0];
var ocek = document.getElementById("cek");
if(getCookie("txt")){
	txt = getCookie("txt");
	psw = getCookie("psw")
}
obtn2.onmousedown=function(){
	$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:otxt.value,password:opsw.value},function(data){
		console.log(data)
		if(data==0){
			alert("用户名不存在")
		}else if(data==2){
			alert("用户名密码不符")
		}else{
			window.location.href="index.html"
		}
		
	})
	
}
$(".zhuce").click(function(){
	window.location.href="zhuce.html"
})


