function resizeContainer(){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+"px";var e=document.getElementById("absolute-container-b").clientHeight;partContainerB.style.height=e+"px"}function evaFeatures(){strokes.forEach(function(e){e.classList.add("stroke-anim")}),bubbles.forEach(function(e){e.classList.add("bubble-anim")}),features.forEach(function(e){e.classList.add("feature-anim")})}function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg")))}function changeLineColor(){var e=window.scrollY;e<.6*sectionOne.clientHeight?lines[0].classList.add("active"):lines[0].classList.remove("active"),e>=sectionTwo.offsetTop-.4*sectionOne.clientHeight&&e<.6*sectionTwo.clientHeight+sectionTwo.offsetTop?(lines[1].classList.add("active"),evaFeatures()):lines[1].classList.remove("active"),e>=sectionThree.offsetTop-.4*sectionTwo.clientHeight&&e<.6*sectionThree.clientHeight+sectionThree.offsetTop?lines[2].classList.add("active"):lines[2].classList.remove("active"),e>=sectionFour.offsetTop-.4*sectionThree.clientHeight&&e<.5*sectionFour.clientHeight+sectionFour.offsetTop?lines[3].classList.add("active"):lines[3].classList.remove("active"),e>=sectionFive.offsetTop-.5*sectionFour.clientHeight&&e<.6*sectionFive.clientHeight+sectionFive.offsetTop?(lines[4].classList.add("active"),circuitMask.classList.add("circuit-anim")):lines[4].classList.remove("active"),e>=sectionSix.offsetTop-.4*sectionFive.clientHeight&&e<.6*sectionSix.clientHeight+sectionSix.offsetTop?lines[5].classList.add("active"):lines[5].classList.remove("active"),e>=sectionSeven.offsetTop-.4*sectionSix.clientHeight&&e<sectionSeven.clientHeight+sectionSeven.offsetTop?lines[6].classList.add("active"):lines[6].classList.remove("active"),e>=sectionSeven.offsetTop+.4*sectionSeven.clientHeight?(lines[6].classList.remove("active"),linesContainer.classList.add("hidden")):linesContainer.classList.remove("hidden")}!function(){$.validator.setDefaults({invalidHandler:function(e,t){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var t=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),i=$(e).find(".form-message"),s=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),a=function(e){var t=e?s:o;n.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(t)};n.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:t}).done(function(t){a(1===parseInt(t)),e.reset()}).fail(function(){a(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var partContainerA=document.getElementById("home-a-particles-container"),partContainerB=document.getElementById("home-b-particles-container");window.addEventListener("scroll",resizeContainer),resizeContainer();var strokes=document.querySelectorAll(".stroke"),bubbles=document.querySelectorAll(".bubble"),features=document.querySelectorAll(".eva-feature-name"),$evaButton=document.getElementById("eva-button"),$hiddenDescription=document.getElementById("hidden-description");$evaButton.addEventListener("click",function(){$hiddenDescription.classList.toggle("active"),$evaButton.classList.toggle("active")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");doSomething(window.scrollY),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0});var partConfig;partConfig=(window.navigator.vendor,"js/higia-particles_config.json"),particlesJS.load("home-a-particles-container",partConfig),particlesJS.load("home-b-particles-container",partConfig);var lYear=(new Date).getFullYear();document.querySelector("#license-year").innerHTML=lYear,function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function t(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var n=window.matchMedia("(max-width: 876px)");n.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),n.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t))})}();var sOneTitle=document.getElementById("section_one-title"),span=document.getElementById("topink");sOneTitle.addEventListener("mouseover",function(){span.classList.add("lifePink")}),$(".section_four-slider-container").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'});var scroll=new SmoothScroll('a[href*="#section_"]'),sectionOne=document.getElementById("section_one"),sectionTwo=document.getElementById("section_two"),sectionThree=document.getElementById("section_three"),sectionFour=document.getElementById("section_four"),sectionFive=document.getElementById("section_five"),sectionSix=document.getElementById("section_six"),sectionSeven=document.getElementById("home-b-particles-container"),linesContainer=document.querySelector(".lines-container"),lines=document.querySelectorAll(".line"),circuitMask=document.querySelector(".circuit-mask");window.addEventListener("scroll",changeLineColor),changeLineColor();