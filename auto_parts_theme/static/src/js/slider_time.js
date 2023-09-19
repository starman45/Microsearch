odoo.define('auto_parts_theme.scroll', function (require) {
'use strict';

var publicWidget = require('web.public.widget');
var animations = require('website.content.snippets.animation');


publicWidget.registry.StandardAffixedHeader.include({
    _updateHeaderOnScroll: function (scroll) {
        this._super(...arguments);
        if (scroll == 0 ) {
            $(this.target).find('.navbar').removeClass('shrink');
        }else{
            $(this.target).find('.navbar').addClass('shrink');
        }
    }
})
$(document).ready(function() {
    setTimeout(function(){
        if ($('.best_selling_tbs_slider_11').length > 0 ) {
            var html_1 = `<div id="menu1" class="tab-pane fade"><br/>
                              <div class="row">
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_1.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_2.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_3.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_4.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_5.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_6.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="menu2" class="tab-pane fade"><br/>
                              <div class="row">
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_1.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_2.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_3.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_4.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_5.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-md-4">
                                  <div class="right_side_detalis_comn">
                                    <a href="#">
                                      <div class="img_holder_bst_selling_tbs_s">
                                        <img src="/auto_parts_theme/static/src/img/other_snippet/best_selling_tbs/left_side_6.jpg" class="img-fluid"/>
                                      </div>
                                      <div class="content_bst_selling_tabs" style="text-align:center;">
                                        <h4>Lorem ipsum</h4>
                                        <div class="rating_bst_selling_tbs">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                        </div>
                                        <p>$89.00</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>`
            var appendslider = $('.best_selling_tbs_slider_11').find('.best_selling_slider_00');
            appendslider.append(html_1)
        }
        if ($('.popular_categories_slider_1').length > 0) {
            var html2 = `<div id="menu1_pro" class="container tab-pane fade"><br/>
                            <div class="row">
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/1.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/2.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/3.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/4.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/5.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/6.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/7.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/8.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="menu2_pro" class="container tab-pane fade"><br/>
                            <div class="row">
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/1.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/2.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/3.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/4.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/5.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/6.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/7.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/8.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="menu3_pro" class="container tab-pane fade"><br/>
                            <div class="row">
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/1.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/2.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/3.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/4.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/5.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/6.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/7.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/8.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="menu4_pro" class="container tab-pane fade"><br/>
                            <div class="row">
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/1.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/2.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/3.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/4.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/5.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/6.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/7.png" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-3 col-sm-4 col-md-3 col-4">
                                <div class="tabs_image_holder_pop_24_comn" style="position:relative;">
                                  <a href="#">
                                    <img src="/auto_parts_theme/static/src/img/other_snippet/pop_2/8.jpg" class="img-fluid"/>
                                    <div class="content_pop_2_cat">
                                      <h4>Lorem ipsum</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>` 
            var appendslider_1 = $('.popular_categories_slider_1').find('.add_popular_categoris_slider');
            appendslider_1.append(html2)
        }
    }, 500);
});

})

