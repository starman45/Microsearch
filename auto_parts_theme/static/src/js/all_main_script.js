var swiper_1 = new Swiper(".swiper_gem_drk_top_picks", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
});

var swiper_2 = new Swiper(".daily_deals_auto_parts", {
    autoplay:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup:2,
        },
    },
});
var swiper_4 = new Swiper(".swiper_auto_parts_special_offer", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
    },

});

var swiper_5 = new Swiper(".banner_silder_auto_parts", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },	
});
var swiper_72 = new Swiper(".multi_tabs_two_auto_parts", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

var swiper_8 = new Swiper(".multi_tabs_one_auto_parts", {
        autoplay:true,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });


$($('.nav_tabs_custom_multi_tabs_snippet_11').find('.nav-item')).click(function(){

setTimeout(function(){
    var length11 = $('.nav_tabs_custom_multi_tabs_snippet_11').find('.nav-item').find('.nav-link')

    for (let i = 0; i < length11.length; i++) {
        var slider1_1 = $($('.nav_tabs_custom_multi_tabs_snippet_11').find('.nav-item').find('.nav-link')[i]).attr('href');
        var slider2_2 = $($('.nav_tabs_custom_multi_tabs_snippet_11').find('.nav-item').find('.nav-link')[i]).hasClass('active');
        if (slider2_2) {
            if (slider1_1 == '#one') {
                
                    var swiper_77 = new Swiper(".multi_tabs_one_auto_parts_on1", {
                        autoplay:true,
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        },
                    });
                
            }
            if (slider1_1 == '#two') {
                   var swiper_88 = new Swiper(".multi_tabs_two_slider_2", {
                    autoplay:true,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    },
                   });
                
            }
            if (slider1_1 == '#three') {
                   var swiper_99 = new Swiper(".multi_tabs_three_slider_3", {
                    autoplay:true,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    },
                   });
                
            }
        }
    }
},800);

})




$($('.nav_tabs_custom_multi_tabs_11_homapage').find('.nav-item')).click(function(){

setTimeout(function(){
var slider1 = $('.nav_tabs_custom_multi_tabs_11_homapage').find('.nav-item').find('.nav-link')[0].classList[1];
var slider2 = $('.nav_tabs_custom_multi_tabs_11_homapage').find('.nav-item').find('.nav-link')[1].classList[1];
var slider3 = $('.nav_tabs_custom_multi_tabs_11_homapage').find('.nav-item').find('.nav-link')[2].classList[1];



if (slider1== 'active' ) {
    var swiper_7 = new Swiper(".multi_tabs_one_auto_parts", {
        autoplay:true,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}
  
if (slider2=='active' ) {
    var swiper_8 = new Swiper(".multi_tabs_two_auto_parts11", {
        autoplay:true,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

if (slider3 =='active' ) {
    var swiper_9 = new Swiper(".multi_tabs_three_auto_parts22", {
        autoplay:true,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

},1000);

});



var swiper10 = new Swiper(".count_down_swiper_auto_parts", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

var swiper11 = new Swiper(".box_multi_3_sidler", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1,
            spaceBetween: 20,
        },
    },
});

var swiper12 = new Swiper(".box_multi_3_sidler_2", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1,
            spaceBetween: 20,
        },
    },
});

var swiper13 = new Swiper(".weekly_deals_sillder_gem_s", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:3,
            spaceBetween: 20,
        },
    },
});

var swiper14 = new Swiper(".fea_pro_S_auto_parts", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView:2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:3,
            spaceBetween: 20,
        },
    },
});

var swiper15 = new Swiper(".img_des_S_silder_gem", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var swiper16 = new Swiper(".best_selling_sidler", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1,
            spaceBetween: 20,
        },
    },
});

var swiper17 = new Swiper(".video_dection_silder", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
});

var swiper18 = new Swiper(".best_seller_products", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1,
            spaceBetween: 20,
        },
    },
});

var swiper19 = new Swiper(".box_multi_3_sidler", {
    autoplay:false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1,
            spaceBetween: 20,
        },
    },
});

var swiper19 = new Swiper(".main_slider_2", {
    /*autoplay:true,*/
    effect: 'fade',
    /*autoplay: {
    delay: 2000,
    },*/
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

var swiper20 = new Swiper(".main_slider_3", 
{
    autoplay:false,
    loop:true,
    /*autoplay: {
    delay: 2000,
    },*/
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper21 = new Swiper(".flash_sale_2_2", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

var swiper22 = new Swiper(".hot_deals_pro_s", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:2,
            spaceBetween: 20,
        },
    },
});

var swiper22 = new Swiper(".latest_Offer_s", {
    autoplay:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        567: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var swiper23 = new Swiper(".our_services_s", {
    slidesPerView:3,
    autoplay:false,
    spaceBetween: 40,      
    loop:true,
    breakpoints: {
        640: {
            slidesPerView:1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiper24 = new Swiper(".spe_deal_2_s", {
    autoplay:true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:2,
            spaceBetween: 20,
        },
    },
});

var swiper25 = new Swiper(".main_sildr_4", {
    slidesPerView:1,
    autoplay:true,
    spaceBetween: 40,      
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".main_sildr_5", {
    slidesPerView:1,
    autoplay:true,
    spaceBetween: 40,      
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".main_sildr_6", {
    slidesPerView:1,
    autoplay:true,
    spaceBetween: 40,      
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".main_sildr_7", {
        autoplay:true,
        spaceBetween: 40,      
        loop:true,
        breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:1.2,
            spaceBetween: 20,
        },
    },
    });


/*AOS.init({disable: 'mobile'});*/

/*$(function(){
var shrinkHeader = 350;
$(window).scroll(function() {
var scroll = getCurrentScroll();
if ( scroll >= shrinkHeader ) {
$('.header_auto_parts').addClass('shrink');
}
else {
$('.header_auto_parts').removeClass('shrink');
}
});
function getCurrentScroll() {
return window.pageYOffset;
}
});
*/

