 window.onload = function () {

            var objDemo = document.getElementById("demo");
            var objSmallBox = document.getElementById("small-box");
            var objMark = document.getElementById("mark");
            var objFloatBox = document.getElementById("float-box");
            var objBigBox = document.getElementById("big-box");
            var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

            objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                objBigBox.style.display = "block"
            }

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            }

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  //兼容多个浏览器的event参数模式

                var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
                var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight;

                }

                objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                objFloatBox.style.top = top + "px";

                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }
        }
 //gouwuche
var table=document.getElementById("buy_car");
var btns=table.getElementsByTagName("button");
//绑定事件
for(var i=0,len=btns.length;i<len;i++){
	btns[i].onclick=calc;//函数不用立刻执行 calc不加（）
}
function calc(){
	//查找
	var span=this.parentNode.getElementsByTagName("span")[0];
		//修改
	var n=parseInt(span.innerHTML);
	n+=this.innerHTML=="+"?1:n>0?-1:0;
	span.innerHTML=n;
	this.parentNode.parentElement.nextElementSibling.firstElementChild.innerHTML=(5.50*n).toFixed(2);
	}
//评分

	  $(".star>li").each(function(item){
        $(this).hover(function(){
	        $(".star>li:lt("+(item+1)+")").toggleClass("hover");
        })
	    });
        $(".star li").each(function(item){
        $(this).click(function(){
	        $(".star>li:lt("+(item+1)+")").addClass("light");
        })
	    });
		//引入html片段顶部 悬浮
      $(".btro_nav").on("mouseover","li",function(){
				var i=$(this).index();
				$(".right").children().eq(i).addClass("active").siblings(".active").removeClass("active");
			});
//angular html片段跳转
 var app = angular.module('myApp',['ng','ngRoute']);
 app.config(function($routeProvider){
   $routeProvider
     .when("/mySpxq",{templateUrl:'html/spxq.html'})
     .when("/mySppj",{templateUrl:'html/sppj.html'})
     .when("/myGmzx",{templateUrl:'html/gmzx.html'})
     .when("/myJqxl",{templateUrl:'html/jqxl.html'})
     .otherwise({redirectTo:'/mySpxq'})
 });