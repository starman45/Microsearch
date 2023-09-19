$(document).ready(function() {
var swiper_3 = new Swiper(".rcm_pro_swiper_auto_parts", {
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
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
        },
    },
});

if ($('.recommended_products_slider_1').length > 0) {
   for (let i = 0; i < swiper_3.length ; i++) {
      swiper_3[i].appendSlide(`<div class="swiper-slide">
                                 <div class="swiper_image_holder_special_offer_autoparts_24">
                                    <a href="#">
                                       <div class="rcm_box_design_swiper_silder_auto_parts">
                                          <img src="/auto_parts_theme/static/src/img/rcm_pro/rcm_5.png" class="img-fluid" style="width:220px; height:220px;"/>
                                          <h4>Lorem ipsum dolor</h4>
                                          <div class="rating_star_features_pro_auto_pts" style="display:block; margin-bottom: 10px; color: #c30c0c;">
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                          </div>
                                          <div class="price_feature_auto_parts_24">
                                             <span style="color: #000; font-weight: bold; text-decoration: line-through; margin-right:5px;">
                                                $100
                                             </span>
                                             <span style="text-decoration:none; font-weight: bold; color:#c30c0c;">
                                                $150
                                             </span>
                                          </div>
                                          <div class="qucick_view_btn_auto_parts">
                                             <a href="#" class="a_quick_view">
                                                <i class="fa fa-eye"></i>
                                             </a>
                                          </div>
                                          <div class="Add_to_cart_btn" style="margin-top:15px;">
                                             <a href="#" class="btn_acele btn_black" style="padding:8px 50px;">
                                                <i class="fa fa-shopping-bag" style="margin-right:7px;"></i>Add TO Cart
                                             </a>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>`);
      swiper_3[i].appendSlide(`<div class="swiper-slide">
                                 <div class="swiper_image_holder_special_offer_autoparts_24">
                                    <a href="#">
                                       <div class="rcm_box_design_swiper_silder_auto_parts">
                                          <img src="/auto_parts_theme/static/src/img/rcm_pro/rcm_6.png" class="img-fluid" style="width:220px; height:220px;"/>
                                          <h4>Lorem ipsum dolor</h4>
                                          <div class="rating_star_features_pro_auto_pts" style="display:block; margin-bottom: 10px; color: #c30c0c;">
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                          </div>
                                          <div class="price_feature_auto_parts_24">
                                             <span style="color: #000; font-weight: bold; text-decoration: line-through; margin-right:5px;">
                                                $100
                                             </span>
                                             <span style="text-decoration:none; font-weight: bold; color:#c30c0c;">
                                                $150
                                             </span>
                                          </div>
                                          <div class="qucick_view_btn_auto_parts">
                                             <a href="#" class="a_quick_view">
                                                <i class="fa fa-eye"></i>
                                             </a>
                                          </div>
                                          <div class="Add_to_cart_btn" style="margin-top:15px;">
                                             <a href="#" class="btn_acele btn_black" style="padding:8px 50px;">
                                                <i class="fa fa-shopping-bag" style="margin-right:7px;"></i>Add TO Cart
                                             </a>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>`); 
      swiper_3[i].appendSlide(`<div class="swiper-slide">
                                 <div class="swiper_image_holder_special_offer_autoparts_24">
                                    <a href="#">
                                       <div class="rcm_box_design_swiper_silder_auto_parts">
                                          <img src="/auto_parts_theme/static/src/img/rcm_pro/rcm_7.png" class="img-fluid" style="width:220px; height:220px;"/>
                                          <h4>Lorem ipsum dolor</h4>
                                          <div class="rating_star_features_pro_auto_pts" style="display:block; margin-bottom: 10px; color: #c30c0c;">
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                          </div>
                                          <div class="price_feature_auto_parts_24">
                                             <span style="color: #000; font-weight: bold; text-decoration: line-through; margin-right:5px;">
                                                $100
                                             </span>
                                             <span style="text-decoration:none; font-weight: bold; color:#c30c0c;">
                                                $150
                                             </span>
                                          </div>
                                          <div class="qucick_view_btn_auto_parts">
                                             <a href="#" class="a_quick_view">
                                                <i class="fa fa-eye"></i>
                                             </a>
                                          </div>
                                          <div class="Add_to_cart_btn" style="margin-top:15px;">
                                             <a href="#" class="btn_acele btn_black" style="padding:8px 50px;">
                                                <i class="fa fa-shopping-bag" style="margin-right:7px;"></i>Add TO Cart
                                             </a>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>`);
      swiper_3[i].appendSlide(`<div class="swiper-slide">
                                 <div class="swiper_image_holder_special_offer_autoparts_24">
                                    <a href="#">
                                       <div class="rcm_box_design_swiper_silder_auto_parts">
                                          <img src="/auto_parts_theme/static/src/img/rcm_pro/rcm_8.png" class="img-fluid" style="width:220px; height:220px;"/>
                                          <h4>Lorem ipsum dolor</h4>
                                          <div class="rating_star_features_pro_auto_pts" style="display:block; margin-bottom: 10px; color: #c30c0c;">
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                          </div>
                                          <div class="price_feature_auto_parts_24">
                                             <span style="color: #000; font-weight: bold; text-decoration: line-through; margin-right:5px;">
                                                $100
                                             </span>
                                             <span style="text-decoration:none; font-weight: bold; color:#c30c0c;">
                                                $150
                                             </span>
                                          </div>
                                          <div class="qucick_view_btn_auto_parts">
                                             <a href="#" class="a_quick_view">
                                                <i class="fa fa-eye"></i>
                                             </a>
                                          </div>
                                          <div class="Add_to_cart_btn" style="margin-top:15px;">
                                             <a href="#" class="btn_acele btn_black" style="padding:8px 50px;">
                                                <i class="fa fa-shopping-bag" style="margin-right:7px;"></i>Add TO Cart
                                             </a>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>`);
   }
}
});