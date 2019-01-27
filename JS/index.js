   $(".ban_top_mid_btn").on("mouseover","li",function(){ 
		    $(".ban_top_mid_btn>li").addClass("op");
			$(this).removeClass("op");

		});
	$(".ban_top_mid_btn").on("mouseout","li",function(){
			$(".ban_top_mid_btn>li").removeClass("op");
		});

		//================
	
	var img1=document.getElementsByClassName("img1")[0];
		var img11=document.getElementsByClassName("img11")[0];
			img1.onmouseover=function(){
			img11.style.display="block";
		}
		img1.onmouseout=function(){
			img11.style.display="none";
		}

	//bannerbttomlunbo
		var loge={
		LIHEIGHT:126,
    DURATION:2000,
		$loge:null,
    WAIT:2000,
    moved:0,
		init(){
		var me=this;
		me.$loge=$(".run");
		me.autoMove();
		
		},
		autoMove(){
		var me=this;
		me.moved++;
		
		me.$loge.stop(true).animate({
			top:-me.moved*me.LIHEIGHT,
		},me.DURATION,function(){
			if(me.moved>=5){
				me.moved=0;
				me.$loge.css("top",0)
			}
				me.autoMove();
			})
		},
		
};
loge.init();

//*******************ban_top_mid

	$(".ban_top_mid_left").on("mouseover","li",function(){
					var i=$(this).index();
					$(this).parent().siblings().children().eq(i).addClass("play").siblings(".play").removeClass("play")
});
					$(".ban_top_mid_left").on("mouseout","li",function(){
					var i=$(this).index();
					$(this).parent().siblings().children().eq(i).removeClass("play")
});

					/*广告图片数组*/
var imgs=[
  {"img":"Imgs/header/web-101-101-1.jpg"},
  {"img":"Imgs/header/web-101-101-5.jpg"},
  {"img":"Imgs/header/web-101-101-3.jpg"},
  {"img":"Imgs/header/web-101-101-4.jpg"},
  {"img":"Imgs/header/web-101-101-2.jpg"},
   //{"img":"Imgs/header/web-101-101-1.jpg"},
  ];
var slider={
  LIWIDTH:1920,//保存每个li的宽度
  $ulImgs:null,//保存id为imgs的ul
  $ulIdxs:null,//保存id为indexs的ul
  DURATION:2000,//保存单次移动的时间
  WAIT:1500,//保存轮播的等待时间
  moved:0,//保存已经左移的li个数
  init(){
    var me=this;//留住this
    me.$ulImgs=$("#imgs"); //选择id为imgs的ul保存到$ulImgs中    
    me.$ulIdxs=$("#indexs");//选择id为indexs的ul保存到$ulIdxs中
    me.initView();//初始化界面
    me.autoMove();//启动自动轮播
    //当鼠标进入slider,停止轮播,当鼠标移出，再次启动
    $("#slider").hover(function(){
      me.$ulImgs.stop(true);
    },function(){
      me.autoMove();
    });
    //为ulImgs添加鼠标进入事件监听,只允许li>img响应事件
    me.$ulImgs.on("mouseover","li>img",function(e){
      var $tar=$(e.target);
      //获得当前img的下标
      var i=$tar.index("#imgs img");
      me.moved=i;//修改moved等于i      
      me.$ulImgs.css("left",-me.moved*me.LIWIDTH);//修改ulImgs的left为-moved*LIWIDTH
      me.changeHover();//根据moved修改hover
    });
    //为ulIdxs添加鼠标进入事件，只允许li响应
    me.$ulIdxs.on("mouseover","li",function(e){
      var $tar=$(e.target);
      if(!$tar.is(".hover")){
        var endi=$tar.index("#indexs>li");
        var starti=$(".hover").index("#indexs>li");
        //修改moved为endi-starti
        me.moved+=(endi-starti);
        me.changeHover();//立刻修改hover
        //让$ulImgs移动到moved*LIWIDTH的位置
        me.$ulImgs.stop(true).animate({
          left:-me.moved*me.LIWIDTH
        },me.DURATION);
      }
    });
  },
  autoMove(){//自动轮播
    var me=this;
    me.moved++;
    //先等待WAIT,再移动到moved*LIWIDTH
    me.$ulImgs.delay(me.WAIT).animate({
      left:-me.moved*me.LIWIDTH
    },me.DURATION,function(){//本地移动后
      //如果moved等于imgs的个数
      if(me.moved==imgs.length){
        //将ulImgs的left归0
        me.$ulImgs.css("left",0);
        me.moved=0;//将moved归0
      }
      me.changeHover();//调整圆点
      me.autoMove();//再启动自动轮播
    });
  },
  changeHover(){//根据moved调整圆点的hover
    //将ulIdxs中moved位置的圆点添加hover,去掉兄弟的hover
    this.$ulIdxs.children()
        .eq(this.moved).addClass("hover")
        .siblings().removeClass("hover");
  },
  initView(){//将imgs数组的内容生成页面元素
    //遍历imgs中每个img,同时声明空字符串htmlImgs和htmlIdxs
    for(var i=0,htmlImgs="",htmlIdxs="";
        i<imgs.length;
        i++){
      htmlImgs+=//向htmlImgs中拼接: 
        `<li><img src='${imgs[i].img}'></li>`
      htmlIdxs+=//向htmlIdxs中拼接:
        `<li>${i+1}</li>`
    }//(遍历结束)
    //设置$ulImgs的html内容为htmlImgs
    this.$ulImgs.html(htmlImgs)
    //设置$ulImgs的宽为imgs的元素个数*LIWIDTH
        .css("width",(imgs.length+1)*this.LIWIDTH);
    //在$ulImgs中追加一个第一个元素的clone
    this.$ulImgs.append(
      this.$ulImgs.children(":first").clone());
    //设置$ulIdxs的html内容为htmlIdxs
    this.$ulIdxs.html(htmlIdxs);
    //设置$ulIdxs中第1个li添加hover class
    this.$ulIdxs.children(":first")
                .addClass("hover");
  },
  
}
slider.init();

//覆盖层
$(".reg").click(function(){
	$(this).parent().parent().addClass("moed");
})



































$(window).scroll(function(){	
	if(parseInt($(this).scrollTop())> 500){
		$("#floor_list").stop().fadeIn(200);
		}else{
		$("#floor_list").stop().fadeOut(100);
		}

		$("#floor_list>ul>li").each(function(){
		var scrollHeight=$(window).scrollTop();
		var num=$(this).index();
		if(scrollHeight>$(this).offset().top-250){
			$("#floor_list>ul>li").eq($(this).index()).addClass("current").siblings().removeClass("current");
		}
	});
});