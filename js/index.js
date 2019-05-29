// 导航栏bottom边框
$(".header_menu li").mousemove(function(){
    $(".header_menu li").removeClass("active");
    $(this).addClass("active");
})

//轮播图
change_num=0;
setInterval(function(){
	change_num-=100;
	if (change_num <= -400) {
		change_num = -0;
	};
	$(".change_img").css("left",change_num+"%");
},2000);