function parallax(){var a=$(window).scrollTop();$("#moto").css("background-position","center "+.15*a+"px"),$("#moto-hand").css("-webkit-transform","translate3d(0,-"+.096*a+"px,0)")}function presentation(){function a(a){var t=s.find(".bg");setTimeout(function(){t.remove()},4100);var o=document.createElement("div");o.className+="bg bg"+a,s.append(o),setTimeout(function(){o.className+=" show"},20)}function t(t){var s=1;setInterval(function(){a(s%3+1),s++},t)}var s=$(".pres-bgs");t(4e3)}function menuGroup(){$("html").click(function(){$(".menu-trigger").hasClass("active")&&$(".menu-trigger").removeClass("active"),$(".menu-dropdown").hasClass("open")&&$(".menu-dropdown").removeClass("open").addClass("closed")}),$(".menu-trigger").click(function(a){a.preventDefault(),a.stopPropagation(),$(this).toggleClass("active"),$(this).next(".menu-dropdown").hasClass("closed")&&$(this).next(".menu-dropdown").removeClass("closed").addClass("open"),$("input[name*=radio-set").change(function(){var a=$(this).parent(".radio-colors"),t=$(" input[type=radio]:checked",a);$(".radio-display",a).attr("data-color",t.attr("class"))})})}function radioSizes(){$('[data-set*="radio-carrier-set"]').click(function(){var a=$(this).closest(".set-parent"),t=$(this);$(".radio-display",a).attr("data-carrier",t.attr("class")),$(".radio-display .carrier-label",a).html(t.attr("data-carrier-name")),$(".radio-display .carrier-img",a).attr("src",t.attr("data-carrier-img")),$(".radio-display .carrier-img").addClass("show"),$(".radio-display .icon-mobile").addClass("hidden")})}function radioLoc(){$('[data-set*="radio-loc-set"]').click(function(){var a=$(this).closest(".set-parent"),t=$(this);$(".radio-display",a).attr("data-loc",t.attr("class")),$(".radio-display .loc-label",a).html(t.attr("data-loc-name")),$(".radio-display .loc-img",a).attr("src",t.attr("data-loc-img"))})}function radioAmount(){$('[data-set*="radio-amount-set"]').click(function(){var a=$(this).closest(".set-parent"),t=$(this);$(".radio-display",a).attr("data-amount",t.attr("class")),$(".radio-display .amount-label",a).html(t.attr("data-amount-name"))})}function progressShizzle(){$("#formloc-tel").keyup(function(){function a(){$(document).on("change",'input:radio[name="radio-carrier"]',function(){function a(){function a(){$("button").click(function(){})}$('input:radio[name="radio-amount"]').change(function(){$(".progress").addClass("part4"),$(".progress-points li:nth-child(3) .label-last").addClass("on"),$(".msg3").removeClass("show"),$(".msg4").addClass("show"),$(".btn-wrap .menu-group-disabled").remove(),$(".topup-button").removeClass("tu-inactive"),$("#svg-container").removeClass("tu-inactive")}),a()}$(".progress").addClass("part3"),$(".progress-points li:nth-child(3) .label").addClass("on"),$(".msg2").removeClass("show"),$(".msg3").addClass("show"),$(".menu-group3 .menu-group-disabled").remove(),$(".menu-group3").removeClass("tu-inactive"),a()})}var t=this.value.match(/\d/g).length;t>=4&&($(".progress").addClass("part2"),$(".progress-points li:nth-child(2) .label").addClass("on"),$(".msg1").removeClass("show"),$(".msg2").addClass("show"),$(".menu-group2 .menu-group-disabled").remove(),$(".menu-group2").removeClass("tu-inactive"),a())})}$("#offer-one").waypoint(function(a){"down"===a&&($(this).hasClass("inview")||$(this).addClass("inview")),"up"===a&&$(this).hasClass("inview")&&$(this).removeClass("inview")},{offset:"50%"}),$("#offer-two").waypoint(function(a){"down"===a&&($(this).hasClass("inview")||$(this).addClass("inview")),"up"===a&&$(this).hasClass("inview")&&$(this).removeClass("inview")},{offset:"50%"}),$("#offer-three").waypoint(function(a){"down"===a&&($(this).hasClass("inview")||$(this).addClass("inview")),"up"===a&&$(this).hasClass("inview")&&$(this).removeClass("inview")},{offset:"50%"}),$("#moto").waypoint(function(a){"down"===a&&($(this).hasClass("doParallax")||$(window).scroll(function(){parallax()}))},{offset:"100%"}),presentation(),menuGroup(),radioSizes(),radioLoc(),radioAmount(),progressShizzle(),jQuery(document).ready(function(){function a(){var a=e.g(n);movePoint=i.getPointAtLength(length),a.transform("t"+parseInt(movePoint.x-15)+","+parseInt(movePoint.y-15)+"r"+(movePoint.alpha-90))}function t(){i.attr({stroke:"#fff",strokeWidth:4,fill:"none","stroke-dasharray":"12 6","stroke-dashoffset":"180"}).animate({"stroke-dashoffset":10},1500,mina.easein);var a=e.g(n);setTimeout(function(){Snap.animate(0,r,function(t){movePoint=i.getPointAtLength(t),a.transform("t"+parseInt(movePoint.x-15)+","+parseInt(movePoint.y-15)+"r"+(movePoint.alpha-90))},1500,mina.easein,function(){s()})})}function s(){$("#mobile").addClass("powpow"),$("#notification").addClass("sayhi"),$("#screen .dollar").addClass("bling"),$("#topupnow").removeAttr("disabled")}function o(){$("#topupnow").click(function(a){a.preventDefault(),$(this).attr("disabled","disabled"),$("#mobile").hasClass("powpow")&&$("#mobile").removeClass("powpow"),$("#notification").hasClass("sayhi")&&$("#notification").removeClass("sayhi"),$("#screen").hasClass("bling")&&$("#screen").removeClass("bling"),t()})}var e=Snap("#svgC"),i=e.path("M0.187,212.029c0,0,171.558,14.581,210.322-86.775S330.927-7.397,439.467,18.564").attr({id:"squiggle",fill:"none",strokeWidth:"4",stroke:"#ffffff",strokeMiterLimit:"10",strokeDasharray:"12 6",strokeDashOffset:"180"}),n=e.polyline("0, 30, 15, 0, 30, 30");n.attr({id:"plane",fill:"#fff"}),a();var r=i.getTotalLength();o()});