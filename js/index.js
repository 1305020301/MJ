/**
 * Created by whistlel on 2017/6/29.
 */
window.onload=window.onresize=function(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth*20/320+'px';
	/*顶部banner*/
    var mySwiper1 = new Swiper ('.swiper-container1', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        speed: 1000,
        autoplay: 2000,//可选选项，自动滑动
        autoplayDisableOnInteraction : true,
        grabCursor : true,
        effect : 'slide'
    });

    //某东快报banner
    var mySwiper2 = new Swiper ('.swiper-container2', {
        direction: 'vertical',
        loop: true,

        speed: 1000,
        autoplay: 2000,//可选选项，自动滑动
        autoplayDisableOnInteraction : true,
        grabCursor : true,
        effect : 'slide'
    });

    //某东秒杀倒计时
    var oDate1=new Date();
    oDate1.setFullYear(2017,10,11);
    oDate1.setHours(0,0,0);
    function clock(){
        var oDate2=new Date();
        var a=oDate1-oDate2;
        var s=parseInt(a/1000);
        var d=parseInt(s/(60*60*24));
        s%=60*60*24;
        var h=parseInt(s/(60*60));
        s%=60*60;
        var m=parseInt(s/60);
        s%=60;
        $('.time #time_m').html(toDou(m));
        $('.time #time_s').html(toDou(s));
    }
    clock();
    setInterval(clock,1000);

    //某东秒杀轮播图
    var mySwiper3 = new Swiper ('.swiper-container3', {
        direction: 'horizontal',
        loop: true,

        speed: 1000,
        autoplay: false,//可选选项，自动滑动
        autoplayDisableOnInteraction : true,
        grabCursor : true,
        effect : 'slide'
    });
};