function resizeContainer(){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+"px";var e=document.getElementById("absolute-container-b").clientHeight;partContainerB.style.height=e+"px"}function evaFeatures(){strokes.forEach(function(e){e.classList.toggle("stroke-anim")}),bubbles.forEach(function(e){e.classList.toggle("bubble-anim")}),features.forEach(function(e){e.classList.toggle("feature-anim")})}function stopVideo(){gtkubBg.classList.add("video-hidden"),gtkubVideo.pause()}function doSomething(e){e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg"))}function changeLineColor(){var e=window.scrollY;e<.6*sectionOne.clientHeight?lines[0].classList.add("active"):lines[0].classList.remove("active"),e>=sectionTwo.offsetTop-.4*sectionOne.clientHeight&&e<.6*sectionTwo.clientHeight+sectionTwo.offsetTop?lines[1].classList.add("active"):lines[1].classList.remove("active"),e>=sectionThree.offsetTop-.4*sectionTwo.clientHeight&&e<.6*sectionThree.clientHeight+sectionThree.offsetTop?lines[2].classList.add("active"):lines[2].classList.remove("active"),e>=sectionFour.offsetTop-.4*sectionThree.clientHeight&&e<.5*sectionFour.clientHeight+sectionFour.offsetTop?lines[3].classList.add("active"):lines[3].classList.remove("active"),e>=sectionFive.offsetTop-.5*sectionFour.clientHeight&&e<.6*sectionFive.clientHeight+sectionFive.offsetTop?(lines[4].classList.add("active"),circuitMask.classList.add("circuit-anim")):lines[4].classList.remove("active"),e>=sectionSix.offsetTop-.4*sectionFive.clientHeight&&e<.6*sectionSix.clientHeight+sectionSix.offsetTop?lines[5].classList.add("active"):lines[5].classList.remove("active"),e>=sectionSeven.offsetTop-.4*sectionSix.clientHeight&&e<sectionSeven.clientHeight+sectionSeven.offsetTop?lines[6].classList.add("active"):lines[6].classList.remove("active"),e>=sectionSeven.offsetTop+.4*sectionSeven.clientHeight?(lines[6].classList.remove("active"),linesContainer.classList.add("hidden")):linesContainer.classList.remove("hidden")}!function(){$.validator.setDefaults({invalidHandler:function(e,t){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var t=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),i=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var t=e?a:o;n.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(t)};n.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:t}).done(function(t){s(1===parseInt(t)),e.reset()}).fail(function(){s(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var partContainerA=document.getElementById("home-a-particles-container"),partContainerB=document.getElementById("home-b-particles-container");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname||(window.addEventListener("scroll",resizeContainer),resizeContainer());var strokes=document.querySelectorAll(".stroke"),bubbles=document.querySelectorAll(".bubble"),features=document.querySelectorAll(".eva-feature-name");if("/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var $evaButton=document.getElementById("eva-button"),$hiddenDescription=document.getElementById("hidden-description");$evaButton.addEventListener("click",function(){if($hiddenDescription.classList.toggle("active"),$evaButton.classList.toggle("active"),evaFeatures(),$hiddenDescription.classList.contains("active")){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+500+"px"}else{var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e-500+"px"}partContainerA.style.transition="height .8s ease"})}if("/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var gtkubBg=document.getElementById("gtkub-bg"),gtkubVideo=document.getElementById("gtkub-video"),gtkubButton=document.getElementById("gtkub-button"),gtkubClose=document.getElementById("gtkub-close");gtkubButton.addEventListener("click",function(){gtkubBg.classList.remove("video-hidden"),gtkubVideo.currentTime=0,gtkubVideo.play()}),gtkubClose.addEventListener("click",function(){stopVideo()}),gtkubBg.addEventListener("click",function(e){e.target===gtkubBg&&stopVideo()})}var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");if(doSomething(window.scrollY),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),"/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname)var partConfig="js/higia-particles_config.json";var lYear=(new Date).getFullYear();if(document.querySelector("#license-year").innerHTML=lYear,function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function t(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var n=window.matchMedia("(max-width: 876px)");n.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),n.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t))}),$("#navbar-close").on("click touchstart",function(e){e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")})}(),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(e,n)}):"object"==typeof exports?t(e,require("jquery")):t(e,e.jQuery||e.Zepto)}(this,function(e,t){"use strict";function n(e){if($&&"none"===e.css("animation-name")&&"none"===e.css("-webkit-animation-name")&&"none"===e.css("-moz-animation-name")&&"none"===e.css("-o-animation-name")&&"none"===e.css("-ms-animation-name"))return 0;var t,n,i,a,o=e.css("animation-duration")||e.css("-webkit-animation-duration")||e.css("-moz-animation-duration")||e.css("-o-animation-duration")||e.css("-ms-animation-duration")||"0s",s=e.css("animation-delay")||e.css("-webkit-animation-delay")||e.css("-moz-animation-delay")||e.css("-o-animation-delay")||e.css("-ms-animation-delay")||"0s",r=e.css("animation-iteration-count")||e.css("-webkit-animation-iteration-count")||e.css("-moz-animation-iteration-count")||e.css("-o-animation-iteration-count")||e.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),a=0,n=o.length,t=Number.NEGATIVE_INFINITY;a<n;a++)(i=parseFloat(o[a])*parseInt(r[a],10)+parseFloat(s[a]))>t&&(t=i);return t}function i(){if(t(document).height()<=t(window).height())return 0;var e,n,i=document.createElement("div"),a=document.createElement("div");return i.style.visibility="hidden",i.style.width="100px",document.body.appendChild(i),e=i.offsetWidth,i.style.overflow="scroll",a.style.width="100%",i.appendChild(a),n=a.offsetWidth,i.parentNode.removeChild(i),e-n}function a(){if(!k){var e,n,a=t("html"),o=d("is-locked");a.hasClass(o)||(n=t(document.body),e=parseInt(n.css("padding-right"),10)+i(),n.css("padding-right",e+"px"),a.addClass(o))}}function o(){if(!k){var e,n,a=t("html"),o=d("is-locked");a.hasClass(o)&&(n=t(document.body),e=parseInt(n.css("padding-right"),10)-i(),n.css("padding-right",e+"px"),a.removeClass(o))}}function s(e,t,n,i){var a=d("is",t),o=[d("is",y.CLOSING),d("is",y.OPENING),d("is",y.CLOSED),d("is",y.OPENED)].join(" ");e.$bg.removeClass(o).addClass(a),e.$overlay.removeClass(o).addClass(a),e.$wrapper.removeClass(o).addClass(a),e.$modal.removeClass(o).addClass(a),e.state=t,!n&&e.$modal.trigger({type:t,reason:i},[{reason:i}])}function r(e,i,a){var o=0,s=function(e){e.target===this&&o++},r=function(e){e.target===this&&0==--o&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){a[t].off(f+" "+w)}),i())};t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){a[t].on(f,s).on(w,r)}),e(),0===n(a.$bg)&&0===n(a.$overlay)&&0===n(a.$wrapper)&&0===n(a.$modal)&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){a[t].off(f+" "+w)}),i())}function c(e){e.state!==y.CLOSED&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(f+" "+w)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),s(e,y.CLOSED,!0))}function l(e){var t,n,i,a,o={};for(e=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),t=e.split(","),a=0,n=t.length;a<n;a++)t[a]=t[a].split(":"),i=t[a][1],("string"==typeof i||i instanceof String)&&(i="true"===i||"false"!==i&&i),("string"==typeof i||i instanceof String)&&(i=isNaN(i)?i:+i),o[t[a][0]]=i;return o}function d(){for(var e=v,t=0;t<arguments.length;++t)e+="-"+arguments[t];return e}function m(){var e,n,i=location.hash.replace("#","");if(i){try{n=t("[data-"+h+'-id="'+i+'"]')}catch(e){}n&&n.length&&(e=t[h].lookup[n.data(h)])&&e.settings.hashTracking&&e.open()}else p&&p.state===y.OPENED&&p.settings.hashTracking&&p.close()}function u(e,n){var i=t(document.body),a=i,o=this;o.settings=t.extend({},b,n),o.index=t[h].lookup.push(o)-1,o.state=y.CLOSED,o.$overlay=t("."+d("overlay")),null!==o.settings.appendTo&&o.settings.appendTo.length&&(a=t(o.settings.appendTo)),o.$overlay.length||(o.$overlay=t("<div>").addClass(d("overlay")+" "+d("is",y.CLOSED)).hide(),a.append(o.$overlay)),o.$bg=t("."+d("bg")).addClass(d("is",y.CLOSED)),o.$modal=e.addClass(v+" "+d("is-initialized")+" "+o.settings.modifier+" "+d("is",y.CLOSED)).attr("tabindex","-1"),o.$wrapper=t("<div>").addClass(d("wrapper")+" "+o.settings.modifier+" "+d("is",y.CLOSED)).hide().append(o.$modal),a.append(o.$wrapper),o.$wrapper.on("click."+v,"[data-"+h+'-action="close"]',function(e){e.preventDefault(),o.close()}),o.$wrapper.on("click."+v,"[data-"+h+'-action="cancel"]',function(e){e.preventDefault(),o.$modal.trigger(C.CANCELLATION),o.settings.closeOnCancel&&o.close(C.CANCELLATION)}),o.$wrapper.on("click."+v,"[data-"+h+'-action="confirm"]',function(e){e.preventDefault(),o.$modal.trigger(C.CONFIRMATION),o.settings.closeOnConfirm&&o.close(C.CONFIRMATION)}),o.$wrapper.on("click."+v,function(e){t(e.target).hasClass(d("wrapper"))&&o.settings.closeOnOutsideClick&&o.close()})}var p,g,h="remodal",v=e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.NAMESPACE||h,f=t.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(e){return e+"."+v}).join(" "),w=t.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(e){return e+"."+v}).join(" "),b=t.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.DEFAULTS),y={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},C={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},$=function(){var e=document.createElement("div").style;return void 0!==e.animationName||void 0!==e.WebkitAnimationName||void 0!==e.MozAnimationName||void 0!==e.msAnimationName||void 0!==e.OAnimationName}(),k=/iPad|iPhone|iPod/.test(navigator.platform);u.prototype.open=function(){var e,n=this;n.state!==y.OPENING&&n.state!==y.CLOSING&&(e=n.$modal.attr("data-"+h+"-id"),e&&n.settings.hashTracking&&(g=t(window).scrollTop(),location.hash=e),p&&p!==n&&c(p),p=n,a(),n.$bg.addClass(n.settings.modifier),n.$overlay.addClass(n.settings.modifier).show(),n.$wrapper.show().scrollTop(0),n.$modal.focus(),r(function(){s(n,y.OPENING)},function(){s(n,y.OPENED)},n))},u.prototype.close=function(e){var n=this;n.state!==y.OPENING&&n.state!==y.CLOSING&&n.state!==y.CLOSED&&(n.settings.hashTracking&&n.$modal.attr("data-"+h+"-id")===location.hash.substr(1)&&(location.hash="",t(window).scrollTop(g)),r(function(){s(n,y.CLOSING,!1,e)},function(){n.$bg.removeClass(n.settings.modifier),n.$overlay.removeClass(n.settings.modifier).hide(),n.$wrapper.hide(),o(),s(n,y.CLOSED,!1,e)},n))},u.prototype.getState=function(){return this.state},u.prototype.destroy=function(){var e,n=t[h].lookup;c(this),this.$wrapper.remove(),delete n[this.index],0===(e=t.grep(n,function(e){return!!e}).length)&&(this.$overlay.remove(),this.$bg.removeClass(d("is",y.CLOSING)+" "+d("is",y.OPENING)+" "+d("is",y.CLOSED)+" "+d("is",y.OPENED)))},t[h]={lookup:[]},t.fn[h]=function(e){var n,i;return this.each(function(a,o){i=t(o),null==i.data(h)?(n=new u(i,e),i.data(h,n.index),n.settings.hashTracking&&i.attr("data-"+h+"-id")===location.hash.substr(1)&&n.open()):n=t[h].lookup[i.data(h)]}),n},t(document).ready(function(){t(document).on("click","[data-"+h+"-target]",function(e){e.preventDefault();var n=e.currentTarget,i=n.getAttribute("data-"+h+"-target"),a=t("[data-"+h+'-id="'+i+'"]');t[h].lookup[a.data(h)].open()}),t(document).find("."+v).each(function(e,n){var i=t(n),a=i.data(h+"-options");a?("string"==typeof a||a instanceof String)&&(a=l(a)):a={},i[h](a)}),t(document).on("keydown."+v,function(e){p&&p.settings.closeOnEscape&&p.state===y.OPENED&&27===e.keyCode&&p.close()}),t(window).on("hashchange."+v,m)})}),"/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var sOneTitle=document.getElementById("section_one-title"),span=document.getElementById("topink");sOneTitle.addEventListener("mouseover",function(){span.classList.add("lifePink")})}$(".section_four-slider-container").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'}),$(".section-press-carousel").slick({slidesToShow:2,slidesToScroll:1,centerPadding:"5px",centerMode:!0,prevArrow:'<img class="slick-prev" src="img/slider-arrow/left.svg">',nextArrow:'<img class="slick-next" src="img/slider-arrow/right.svg">',responsive:[{breakpoint:414,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]});var scroll=new SmoothScroll('a[href*="#section_"]'),sectionOne=document.getElementById("section_one"),sectionTwo=document.getElementById("section_two"),sectionThree=document.getElementById("section_three"),sectionFour=document.getElementById("section_four"),sectionFive=document.getElementById("section_five"),sectionSix=document.getElementById("section_six"),sectionSeven=document.getElementById("home-b-particles-container"),linesContainer=document.querySelector(".lines-container"),lines=document.querySelectorAll(".line"),circuitMask=document.querySelector(".circuit-mask");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname||(window.addEventListener("scroll",changeLineColor),changeLineColor()),function(){function e(e){var t=["julian","alejandro","raymundo","fernando","antonio","jose"];e.matches?n.each(function(e,n){n.setAttribute("data-remodal-target",t[e])}):n.each(function(e,t){t.removeAttribute("data-remodal-target")})}var t=window.matchMedia("(max-width: 414px)"),n=$(".team-photo-img");t.matches||n.each(function(e,t){t.removeAttribute("data-remodal-target")}),t.addListener(e)}(),function(){var e=[{name:"Julián Ríos",area:"CEO",description:"Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>",social:{linkedin:"https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106"}},{name:"Alejandro Casar",area:"Co-AIO",description:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>",social:{linkedin:"https://www.linkedin.com/in/alexcasar/"}},{name:"Raymundo González",area:"Co-AIO",description:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>",social:{linkedin:"https://www.linkedin.com/in/raymundo-gzz/"}},{name:"Fernando López",area:"DSF",description:"En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>",social:{linkedin:"https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/"}},{name:"Antonio Torres",area:"CTO",description:"Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>",social:{linkedin:"https://www.linkedin.com/in/jantoniotorres/"}},{name:"José Ángel Lavariega",area:"CINO",description:"Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>",social:{linkedin:"https://www.linkedin.com/in/jose-angellavariegagomez/"}}];$("#js-hover-description").html(e[0].description),$(".team-photo-img").on("click touchstart",function(){var t=$(this).attr("data-hover-id");$("#js-hover-name").text(e[t].name),$("#js-hover-area").text(e[t].area),$("#js-hover-description").html(e[t].description),$("#js-hover-linkedin").attr("href",e[t].social.linkedin)})}(),function(){$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0,minlength:1,maxlength:500}}})}();