!function(){$.validator.setDefaults({invalidHandler:function(e,n){var t=$(this);t.find(".form-message").removeClass(t.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var n=$(e).serialize(),t=$(e).find("select, input, textarea, button").not("[disabled]"),s=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),i=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var n=e?a:i;t.removeAttr("disabled"),s.removeClass(e?"error":"success"),s.addClass(e?"success":"error"),s.html(n)};t.attr("disabled","disabled"),s.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:n}).done(function(n){r(1===parseInt(n)),e.reset()}).fail(function(){r(!1)}).always(function(){t.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();const $evaButton=document.getElementById("eva-button"),$hiddenDescription=document.getElementById("hidden-description");$evaButton.addEventListener("click",function(){$hiddenDescription.classList.toggle("active"),$evaButton.classList.toggle("active")}),particlesJS.load("particles-container","js/higia-particles_config.json",function(){console.log("callback - particles.js config loaded")}),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function n(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var t=window.matchMedia("(max-width: 876px)");t.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),t.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n))})}();const sOneTitle=document.getElementById("section_one-title"),span=document.getElementById("topink");sOneTitle.addEventListener("mouseover",function(){span.classList.add("lifePink")}),$(".section_four-slider-container").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:' <button class="arrow-slider arrow-right"><img src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img src="img/slider-arrow/right.svg" alt=""></button>'});