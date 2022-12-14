$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Ghofams Official™"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Welcome to the official gho family website, for those of you who want to try apikey or buy scripts such as bots (Telegram, Line, Whatsapp, or Discord) you can chat the contacts on each profile of the gho family team. And for those of you who want the scampage script, you can directly chat the founder to see the scampage demo. @Regards_Ghofams™"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

let subject = document.querySelector('.subject');
let body = document.querySelector('.message');
    let searchBtn = document.querySelector('.searchBtn');
    
    searchBtn.onclick = function(){
        let url = 'mailto:tricksterteamm11@gmail.com?subject='+subject.value;
        let url2 = '&body='+message.value;
        window.open(url+url2,'_self');
    }

 $(window).on("load",function(){
            $(".loader-container").fadeOut(1000);
        });