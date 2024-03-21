$(function(){

    $('.lang-area .btn-go').click(function(){
        url = $('#lang').val();
        window.open(url);
    })

    //메인 비주얼 슬라이드
    const mainSlide = new Swiper('.main-slide',{
        autoplay:{
            delay:5000,
            disableOnInteraction:false
        },
        loop:true,
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:".btn-next",
            prevEl:".btn-prev"
        }
    })

    $('.tab-nav .tab').on('click',function(){    
        idx = $(this).data('idx');
    
        $(this).addClass('active').siblings().removeClass('active');
        //슬라이드 특정번째로 이동
        // mainSlide.slideTo(idx) 루프가 아닐때
        mainSlide.slideToLoop(idx) /* 루프가 있을때 */
    })

    mainSlide.on("slideChange",function(){
        // console.log(this.realIndex);
        idx = $('.tab.citizen').data('idx')

        if (this.realIndex >= idx) {
            $('.tab.citizen').addClass('active').siblings().removeClass('active');
        } else {
            $('.tab.news').addClass('active').siblings().removeClass('active');
        }
    })

    //배너슬라이드
    const bannerSlide = new Swiper('.banner-slide',{
        slidesPerView:3,
        spaceBetween:43,
        autoplay:{
            delay:1000,
            disableOnInteraction:false//
        },
        loop:true,
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:".btn-next",
            prevEl:'.btn-prev',
        }

    })

    slideArr=[mainSlide,bannerSlide];
    $('.btn-autoplay').click(function(){

        idx=$(this).data('slide');

        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            slideArr[idx].autoplay.start()
        } else {
            $(this).addClass('on')
            slideArr[idx].autoplay.stop()
        }
    })


    //관련사이트 이동
    $('.sc-relate .btn').click(function(){
        if ($(this).hasClass('on')) {
            $('.sc-relate .btn').removeClass('on').siblings().stop().slideUp()
        } else {
            $('.sc-relate .btn').removeClass('on').siblings().stop().slideUp()
            $(this).addClass('on').siblings().stop().slideDown()
        }
    })

    $('.sc-relate .sub li:first-child').keydown(function(e){
        // shift - 16 / tab - 9
        if (e.keyCode === 9 && e.shiftKey) {//shift키 유무 눌렀냐 안눌렀냐
            $('.sc-relate .btn').removeClass('on').siblings().stop().slideUp()
        }
    })
    $('.sc-relate .sub li:last-child').keydown(function(e){
        if (e.keyCode === 9 && !e.shiftKey) {
            $('.sc-relate .btn').removeClass('on').siblings().slideUp()
        }
    })

    //gotop 버튼
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr>=20) {
            $('.btn-gotop').addClass('show');
        } else {
            $('.btn-gotop').removeClass('show');
        }
    })

    $('.btn-gotop').click(function(){
        window.scrollTo({top:0,behavior:"smooth"});
    })
    
})