# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (C) 2016-Today Geminate Consultancy Services (<http://geminatecs.com>).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################
{
    'name': 'Geminate Auto Parts Theme',
    'description': 'Theme Auto Parts is featured with fully resposive. it looks equally stunning on all kinds of screens and devices. Theme Auto Parts is perefect for any industry like beauty & cosmetics, electronics, furniture & decor, grocery, kids, kitchen, accessories it will work for any industry.The code is very well organized and modular so you can build any layout with your imagination. Contains shop page, contact us page, about us page, offerlabel, attractive offer banners, attractive silder,offer timer banner & silder,dynamic headers & footers, 22 Color Variation theme..etc',
    'category': 'Theme/eCommerce',
    'version': '16.0.0.1',
    'license': 'Other proprietary',
    'author': 'Geminate Consultancy Services',
    'company': 'Geminate Consultancy Services',
    'maintainer': 'Geminate Consultancy Services',
    'website': "http://www.geminatecs.com",
    'depends': ['website_sale_wishlist', 'website_sale',
                'website_sale_comparison'],
    'data': [

        'views/homepage.xml',
        'views/contactus.xml',
        'views/footer.xml',
        'views/header.xml',
        'views/aboutus.xml',

        # footer
        'views/website_template.xml',
        'views/footer/footer_1.xml',
        'views/footer/footer_2.xml',
        'views/footer/footer_3.xml',
        'views/footer/footer_4.xml',
        'views/footer/footer_5.xml',
        'views/footer/footer_6.xml',
        'views/footer/footer_7.xml',
        'views/footer/footer_8.xml',
        
        'views/header/header_1.xml',
        'views/header/header_2.xml',
        'views/header/header_3.xml',
        'views/header/header_4.xml',
        'views/header/header_5.xml',


        # homepage_snippet
        'views/homepage_snippet/why_choose_us.xml',
        'views/homepage_snippet/control_vehicle.xml',
        'views/homepage_snippet/daily_deals.xml',
        'views/homepage_snippet/multi_tabs_slider.xml',
        'views/homepage_snippet/top_picks.xml',
        'views/homepage_snippet/special_offer.xml',
        'views/homepage_snippet/feature_products.xml',
        'views/homepage_snippet/silder_with_banner.xml',
        'views/homepage_snippet/two_offer _box.xml',
        'views/homepage_snippet/recommended_products.xml',
        'views/homepage_snippet/main_silder.xml',
        
        # main_silder
        'views/main_silder/silder_1.xml',
        'views/main_silder/silder_2.xml',
        'views/main_silder/silder_3.xml',
        'views/main_silder/silder_4.xml',
        'views/main_silder/silder_5.xml',
        'views/main_silder/slider_6.xml',
        'views/main_silder/slider_7.xml',

        # 3box 
        'views/box_3_animation/box_1.xml',
        'views/box_3_animation/box_2.xml',
        'views/box_3_animation/box_3.xml',
        'views/box_3_animation/box_4.xml',
        'views/box_3_animation/box_5.xml',
        'views/box_3_animation/box_6.xml',
        'views/box_3_animation/box_7.xml',
        'views/box_3_animation/box_8.xml',

        # other snippets 
        'views/other_snippet/img_hover_effect.xml',
        'views/other_snippet/our_good_categories.xml',
        'views/other_snippet/countdown_product_with_daildeals_silder.xml',
        'views/other_snippet/latest_deals_for_this_week.xml',
        'views/other_snippet/new_arrivals_box.xml',
        'views/other_snippet/special_deal_boxes.xml',
        'views/other_snippet/sliders_2_with_one_sale_banner.xml',
        'views/other_snippet/weekly_deals_sillder.xml',
        'views/other_snippet/featured_products_with_deals.xml',
        'views/other_snippet/image_and_description_with_slider.xml',
        'views/other_snippet/best-selling_brands.xml',
        'views/other_snippet/Slider_with_Video_Section.xml',
        'views/other_snippet/bestseller_products_slider_with_multiple_products.xml',
        'views/other_snippet/3_Box_With slider multiple_Products.xml',
        'views/other_snippet/best_selling_products_with_tabs.xml',
        'views/other_snippet/flash_banner_with_count.xml',
        'views/other_snippet/flash_sales_3.xml',
        'views/other_snippet/hot_deal_products.xml',
        'views/other_snippet/latest_offer_slider.xml',
        'views/other_snippet/our_services.xml',
        'views/other_snippet/popular_categories.xml',
        'views/other_snippet/special_deals_with_banner.xml',

    ],
    'assets': {
        'web.assets_frontend': [
            "/auto_parts_theme/static/src/css/home_page.css",
            "/auto_parts_theme/static/src/css/contactus_page.css",
            "/auto_parts_theme/static/src/css/aboutuspage.css",
            "/auto_parts_theme/static/src/css/all_media_query.css",

            "/auto_parts_theme/static/src/css/font.css",
            "/auto_parts_theme/static/src/css/swiper-bundle.min.css",
            "/auto_parts_theme/static/src/css/style.scss",

            # footer
            "/auto_parts_theme/static/src/css/footer/footer_1.css",
            "/auto_parts_theme/static/src/css/footer/footer_2.css",
            "/auto_parts_theme/static/src/css/footer/footer_3.css",
            "/auto_parts_theme/static/src/css/footer/footer_4.css",
            "/auto_parts_theme/static/src/css/footer/footer_5.css",
            "/auto_parts_theme/static/src/css/footer/footer_6.css",
            "/auto_parts_theme/static/src/css/footer/footer_7.css",
            "/auto_parts_theme/static/src/css/footer/footer_8.css",

            "/auto_parts_theme/static/src/css/header/header_1.css",
            "/auto_parts_theme/static/src/css/header/header_2.css",
            "/auto_parts_theme/static/src/css/header/header_3.css",
            "/auto_parts_theme/static/src/css/header/header_4.css",
            "/auto_parts_theme/static/src/css/header/header_5.css",
            

            # main_slider
            "/auto_parts_theme/static/src/css/main_slider/main_silder_1.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_2.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_3.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_4.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_5.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_6.css",
            "/auto_parts_theme/static/src/css/main_slider/main_silder_7.css",

            # box_3
            "/auto_parts_theme/static/src/css/box_3/box_1.css",
            "/auto_parts_theme/static/src/css/box_3/box_2.css",
            "/auto_parts_theme/static/src/css/box_3/box_3.css",
            "/auto_parts_theme/static/src/css/box_3/box_4.css",
            "/auto_parts_theme/static/src/css/box_3/box_5.css",
            "/auto_parts_theme/static/src/css/box_3/box_6.css",
            "/auto_parts_theme/static/src/css/box_3/box_7.css",
            "/auto_parts_theme/static/src/css/box_3/box_8.css",
            
            # other snippet
            "/auto_parts_theme/static/src/css/other_snippet/img_hvr_effect.css",
            "/auto_parts_theme/static/src/css/other_snippet/our_good_categories.css",
            "/auto_parts_theme/static/src/css/other_snippet/countdown_product_with_daildeals_silder.css",
            "/auto_parts_theme/static/src/css/other_snippet/latest_deals_for_this_week.css",
            "/auto_parts_theme/static/src/css/other_snippet/new_arrivals_box.css",
            "/auto_parts_theme/static/src/css/other_snippet/special-deals-boxes-gem.css",
            "/auto_parts_theme/static/src/css/other_snippet/sliders_2_with_one_sale_banner.css",
            "/auto_parts_theme/static/src/css/other_snippet/weekly_deals_sillder.css",
            "/auto_parts_theme/static/src/css/other_snippet/featured_products_with_deals.css",
            "/auto_parts_theme/static/src/css/other_snippet/image_and_description_with_slider.css",
            "/auto_parts_theme/static/src/css/other_snippet/best-selling-brands.css",
            "/auto_parts_theme/static/src/css/other_snippet/Slider_with_Video_Section.css",
            "/auto_parts_theme/static/src/css/other_snippet/Bestseller products slider with multiple products.css",
            "/auto_parts_theme/static/src/css/other_snippet/Box_With slider multiple_Products.css",
            "/auto_parts_theme/static/src/css/other_snippet/best_selling_products_with_tabs.css",
            "/auto_parts_theme/static/src/css/other_snippet/flash_banner_with_count.css",
            "/auto_parts_theme/static/src/css/other_snippet/flash_sales_2.css",
            "/auto_parts_theme/static/src/css/other_snippet/hot_deal_products.css",
            "/auto_parts_theme/static/src/css/other_snippet/latest_offer_slider.css",
            "/auto_parts_theme/static/src/css/other_snippet/our_services.css",
            "/auto_parts_theme/static/src/css/other_snippet/popular_categories.css",
            "/auto_parts_theme/static/src/css/other_snippet/special_deals_with_banner.css",
           
            "/auto_parts_theme/static/src/js/slider_time.js",
            "/auto_parts_theme/static/src/js/swiper-bundle.min.js",
            "/auto_parts_theme/static/src/js/all_main_script.js",
            "/auto_parts_theme/static/src/js/slider1.js",
            "/auto_parts_theme/static/src/js/slider4.js",
        ],
    },
    'images': [
        'static/description/theme_screenshot.png',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
    'price': 99.99,
    'currency': 'EUR'
}
