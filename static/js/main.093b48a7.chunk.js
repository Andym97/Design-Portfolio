(this["webpackJsonpui-portfolio"]=this["webpackJsonpui-portfolio"]||[]).push([[0],{114:function(e,a,s){},137:function(e,a,s){},138:function(e,a,s){},144:function(e,a,s){},145:function(e,a,s){},147:function(e,a,s){},148:function(e,a,s){},154:function(e,a,s){},38:function(e,a,s){},414:function(e,a,s){},415:function(e,a,s){},416:function(e,a,s){},426:function(e,a,s){},427:function(e,a,s){},429:function(e,a,s){"use strict";s.r(a);var c=s(1),t=s.n(c),i=s(124),n=s.n(i),r=(s(137),s.p,s(6)),l=(s(138),s(14)),d=s(0);s(144);var j=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),s=a[0],t=a[1],i=Object(c.useState)(!0),n=Object(r.a)(i,2),j=(n[0],n[1],function(){return t(!1)});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:j,children:[Object(d.jsx)("div",{className:"site-title",children:"Andy Mui"}),Object(d.jsx)("i",{class:"fab fa-typo3"}),Object(d.jsx)("div",{className:"side-tag-container",children:Object(d.jsx)("side-tag",{children:" UI Designer | Web Developer "})})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return t(!s)},children:Object(d.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:s?"nav-menu active":"nav-menu",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/About",className:"nav-links",onClick:j,children:"About"})})})]})})})},o=(s(145),s(13)),h=s(18),b=(s(147),s(38),s(148),s(78));var m=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footer-section",children:[Object(d.jsx)(b.SocialIcon,{url:"https://www.linkedin.com/in/andy-mui-2386941a9/",network:"linkedin",fgColor:"#000000",bgColor:"transparent"}),Object(d.jsx)(b.SocialIcon,{network:"dribbble",url:"https://dribbble.com/Andyym",fgColor:"#000000",bgColor:"transparent"}),Object(d.jsx)("p",{children:"Copyright \xa9 2022 Andy Mui"})]})})},O=s(25),x=s.n(O);s(33),s(82);var g=function(){var e="507032a18ab471bb36278e9e6efd6100",a=Object(c.useState)({}),s=Object(r.a)(a,2),t=s[0],i=s[1],n=Object(c.useState)({}),l=Object(r.a)(n,2),j=(l[0],l[1],Object(c.useState)({})),o=Object(r.a)(j,2),h=o[0],b=o[1],m=["Denver","New York","Los Angeles","Chicago","Singapore"],O=m[Math.floor(Math.random()*m.length)],x=0;void 0===t.name&&0===x&&(x=1,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(O,"&units=imperial&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){i(e),b("")})));var g="http://openweathermap.org/img/wn/"+(t.main&&t.weather[0].icon)+"@2x.png",p=Math.round(parseFloat(t.main&&t.main.temp));return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"weather-card",children:Object(d.jsxs)("div",{className:"weather-body",children:[Object(d.jsx)("h4",{className:"current-weather",children:" Current Weather "}),Object(d.jsx)("div",{className:"input-box",children:Object(d.jsx)("input",{class:"weather-input",value:h,placeholder:"Enter Location . . . ",onChange:function(e){return b(e.target.value)},onKeyPress:function(a){"Enter"===a.key&&void 0!=t.name&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(h,"&units=imperial&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){i(e),b("")}))}})}),Object(d.jsx)("img",{src:g,class:"w-icon"}),Object(d.jsxs)("div",{className:"weather-data",children:[Object(d.jsxs)("h4",{className:"city",children:[t.name,"  "]}),Object(d.jsxs)("h3",{className:"temp",children:["    ",p,"\xb0F  "]}),Object(d.jsxs)("div",{className:"weather-condition",children:[" ",t.main&&t.weather[0].main,"  "]}),Object(d.jsx)("div",{className:"weather-detail-container",children:Object(d.jsxs)("div",{className:"weather-detail",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"feels",children:"Feels like "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[t.main&&t.main.feels_like,"\xb0F  "]})]}),Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"humidity",children:"Humidity:  "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[t.main&&t.main.humidity," % "]})]}),Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"wind",children:" Wind: "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[" ",t.main&&t.wind.speed," MPH  "]})]})]})})]})]})})})},p={duration:2,ease:[.43,.13,.23,.96]};var u=function(){var e=t.a.useState(!1),a=Object(r.a)(e,2);return a[0],a[1],Object(c.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"home-tag blue","data-aos":"fade-right",children:"Work "}),Object(d.jsxs)(h.b.div,{whileHover:{scale:1.04},fade:!0,exit:{opacity:50},transition:p,leave:{opacity:0},className:"card",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-chargergogo",children:Object(d.jsx)("img",{src:"./images/chargergogo/logo.png",className:"thumbnail-logo"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" ChargerGoGo  "}),Object(d.jsx)("h1",{className:"card-subtitle",children:"Contact for more information"}),Object(d.jsx)("div",{className:"card-tag-layout",children:Object(d.jsx)("div",{className:"card-tag",children:" UI/UX"})})]})})})]}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.04},fade:!0,exit:{opacity:50},transition:p,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/getcoins",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-getcoins",children:Object(d.jsx)("img",{src:"./images/getcoins/card/logo.png",className:"thumbnail-logo"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" GetCoins  "}),Object(d.jsx)("h1",{className:"card-subtitle",children:"Mobile App Redesign"}),Object(d.jsx)("div",{className:"card-tag-layout",children:Object(d.jsx)("div",{className:"card-tag",children:" UI/UX"})})]})})})]})})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"home-tag blue","data-aos":"fade-right",children:"Case Studies "}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.04},fade:!0,exit:{opacity:50},transition:p,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/okayamadenim",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-OD",children:Object(d.jsx)("img",{src:"./images/od/OD1.png",className:"thumbnail-image"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Okayama Denim  "}),Object(d.jsx)("h1",{className:"card-subtitle",children:"Ecommerce App"}),Object(d.jsxs)("div",{className:"card-tag-layout",children:[Object(d.jsx)("div",{className:"card-tag",children:" UI"}),Object(d.jsx)("div",{className:"card-tag",children:" Concept"})]})]})})})]})}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.04},fade:!0,exit:{opacity:50},transition:p,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/Backpack",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-backpack",children:Object(d.jsx)("img",{src:"./images/backpack/designv1/Laptops (2).png",className:"thumbnail-image"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Backpack Finder   "}),Object(d.jsx)("h1",{className:"card-subtitle",children:" Ecommerce Website"}),Object(d.jsxs)("div",{className:"card-tag-layout",children:[Object(d.jsx)("div",{className:"card-tag",children:" UI/UX"}),Object(d.jsx)("div",{className:"card-tag",children:" Concept"})]})]})})})]})})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"home-tag blue","data-aos":"fade-right",children:"Resources"}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:"image-container-api",children:Object(d.jsx)(g,{className:"thumbnail"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{transition:p,className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Weather"}),Object(d.jsx)("h1",{className:"card-subtitle",children:" API Call"}),Object(d.jsx)("div",{className:"card-tag-layout",children:Object(d.jsx)("div",{className:"card-tag",children:" Dev"})})]})})})]})]}),Object(d.jsx)(m,{})]})})},v=(s(154),s(127)),f=s.n(v);var N=function(){var e=t.a.useState(!1),a=Object(r.a)(e,2);return a[0],a[1],Object(c.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"intro-container",children:Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("h1",{"data-aos":"fade-down",children:"Hello,"}),Object(d.jsx)("p",{"data-aos":"fade-right",children:"I am a Computer Science graduate who is fascinated with design. I consider myself as an artist who materializes ideas by utilizing different skillsets, whether it be designing or developing."}),Object(d.jsx)("p",{"data-aos":"fade-right",children:"You can reach me at andymui97@gmail.com"}),Object(d.jsx)("p",{"data-aos":"fade-right",children:"-Andy"})]})}),Object(d.jsx)(f.a,{params:{particles:{line_linked:{shadow:{enable:!0,color:"#000000",blur:.5}}}},style:{width:"100%"}})]})})};var w=function(){return Object(d.jsx)("div",{})},y=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"404 Page Not found!"})})};var k=function(){return Object(d.jsx)("div",{})};s(49),s(114),s(35),s(414);var S=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsx)(g,{})]}),Object(d.jsx)(m,{})]})},I=(s(71),s(415),s(72),s(416),s(128)),C=s.n(I);var D=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),s=(a[0],a[1]);return Object(d.jsx)(l.b,{to:"/",onClick:function(){return s(!1)},children:Object(d.jsx)(h.b.div,{className:"side-bar",initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:"0"},out:{opacity:0,x:"-10vw"}},transition:{type:"tween",ease:[.43,.13,.23,.96]},children:Object(d.jsx)(C.a,{})})})};s(73);var T=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),s=(a[0],a[1],Object(c.useState)(!0)),i=Object(r.a)(s,2),n=(i[0],i[1]),l=function(){window.innerWidth<=960?n(!1):n(!0)};Object(c.useEffect)((function(){l()}),[]),window.addEventListener("resize",l);var o=t.a.useState(!1),b=Object(r.a)(o,2);b[0],b[1],Object(c.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]);var O=Object(c.useState)("false"),g=Object(r.a)(O,2);return g[0],g[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"OD",children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"page-container",children:Object(d.jsx)("div",{className:"layout",children:Object(d.jsxs)("div",{className:"page-contents",children:[Object(d.jsx)(j,{}),Object(d.jsx)("img",{src:"./images/od/mockup.png","data-aos":"flip-up",className:"banner"}),Object(d.jsxs)(h.b.div,{"data-aos":"fadeup",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("div",{className:"grid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Problem"}),Object(d.jsx)("li",{children:"Okayama Denim mobile webstore does not allow users to easily navigate and purchase items.   "}),Object(d.jsxs)("li",{children:["People are likely to be on their mobile devices as opposed to a computer.","\n"]})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Solution "}),Object(d.jsx)("li",{children:"Design a mobile app to allow users to easily place orders online."})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"My Role"}),Object(d.jsx)("li",{children:" UI Design"}),Object(d.jsx)("div",{class:"heading-title",children:"Timeline"}),Object(d.jsx)("li",{children:"1 week"}),Object(d.jsx)("div",{class:"heading-title",children:"Tools"}),Object(d.jsx)("li",{children:"Figma"})]})})]})})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Target Audience"}),Object(d.jsx)("li",{children:" International Raw Denim Enthusiasts"})]}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Why"}),Object(d.jsx)("li",{children:"In 2007, Levi Stratus has tradedmarked the red tab on the rear pocket, and similar arcuates on the rear pockets."}),Object(d.jsx)("li",{children:"Since Japanese denim brands try to reproduce the exact details of the original Levi Stratus 501 Jean, these details must be removed by USA retailers."}),Object(d.jsx)("li",{children:"US Raw Denim consumers are more likely to buy from Okayama Denim due to cheaper price & recieve exact details of product."})]})}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:" Design Process"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"process",children:[Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Splash.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Home.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Category.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Product.png",className:"process-pic"})})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Deliverables and Outcome"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"video",children:Object(d.jsx)("video",{src:"./videos/OD_Prototype.mp4",autoPlay:!0,loop:!0,muted:!0})})})]}),Object(d.jsx)(m,{})]})})})]})})};s(426);var A=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),s=(a[0],a[1],Object(c.useState)(!0)),i=Object(r.a)(s,2),n=(i[0],i[1]),l=function(){window.innerWidth<=960?n(!1):n(!0)};Object(c.useEffect)((function(){l()}),[]),window.addEventListener("resize",l);var o=t.a.useState(!1),b=Object(r.a)(o,2);b[0],b[1],Object(c.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]);var O=Object(c.useState)("false"),g=Object(r.a)(O,2);return g[0],g[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"backpack1",children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"page-container",children:Object(d.jsx)("div",{className:"layout",children:Object(d.jsxs)("div",{className:"page-contents",children:[Object(d.jsx)(j,{}),Object(d.jsx)("img",{src:"./images/backpack/designv1/Laptops (7).png","data-aos":"fade-down"}),Object(d.jsxs)(h.b.div,{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("div",{className:"grid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Problem"}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{className:" highlight-text shown",children:" Travelers having a hard time deciding which backpack fits their needs."})}),Object(d.jsx)("li",{children:"Depending on the type of traveling, they need certain features with the right capacity."}),Object(d.jsx)("li",{children:"Having the right features and capacity in a backpack is essential."})]})})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Solution "}),Object(d.jsxs)("li",{children:["A concept website that provides ",Object(d.jsx)("span",{className:" highlight-text shown",children:"guidance to find a backpack with the right features, capacity and size. "})]})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"My Role"}),Object(d.jsx)("li",{children:"UX Research, UI Design"}),Object(d.jsx)("div",{class:"heading-title",children:"Timeline"}),Object(d.jsx)("li",{children:"Feb 17- Mar 1(2021)"}),Object(d.jsx)("div",{class:"heading-title",children:"Tools"}),Object(d.jsx)("li",{children:"Figma"}),Object(d.jsx)("li",{children:"Adobe Illustrator"})]})})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Approach"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"table-container",children:[Object(d.jsxs)("div",{className:"group-left",children:[Object(d.jsx)("h4",{className:"process",children:"Research"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Types of Backpacks"}),Object(d.jsx)("li",{children:"Types of Travelers"}),Object(d.jsx)("li",{children:"Traveling Necessities"}),Object(d.jsx)("li",{children:"User Personas"})]})]}),Object(d.jsxs)("div",{className:"group-right",children:[Object(d.jsx)("h4",{className:"process",children:"Design"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Brainstorming"}),Object(d.jsx)("li",{children:"Wireframes"}),Object(d.jsx)("li",{children:"Design Alternatives"}),Object(d.jsx)("li",{children:"Prototypes"})]})]})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Research"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{children:"As this is targeted towards travelers, I began researching by gathering user comments from Reddit forums, r/solotravel, r/onebag, and r/travel. Oftentimes, questions are asked related to \u201cwhat bag did you take for your x long trip\u201d, users also give a general description of what they choose to pack in their bags. This provided some information distinguish the types of travelers."})})]}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Types of Travelers"}),Object(d.jsxs)("p",{children:[" There are many types of travelers out there. Some travel for a weekend, a week, a couple months, or up to a couple years. ",Object(d.jsx)("span",{className:"highlight-text shown",children:"Some major differences between travelers:"}),Object(d.jsx)("li",{children:"One bag vs Multiple bags "}),Object(d.jsx)("li",{children:"Checked luggage vs Carry-on luggage "}),Object(d.jsx)("li",{children:"Duration of trip "}),Object(d.jsxs)("li",{children:["Packing necessities ",Object(d.jsx)("span",{className:"highlight-text shown",children:"greatly vary"})]})]}),Object(d.jsx)("span",{className:"tag blue",children:"Types of Backpacks"}),Object(d.jsxs)("p",{children:[" While going through some backpacks that users use, ",Object(d.jsx)("span",{className:"highlight-text shown",children:"one major difference"})," between backpacks is the addtion of a ",Object(d.jsx)("span",{className:"highlight-text shown",children:"dedicated camera compartment"})," to safely store camera equipment. Additonal features include:",Object(d.jsx)("li",{children:" Top Loading vs Front Loading Backpack "}),Object(d.jsx)("li",{children:" Water Resistance "}),Object(d.jsx)("li",{children:" Hip/Chest Straps "})]})]})}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"User Personas"}),Object(d.jsxs)("p",{children:["I have created the following ",Object(d.jsx)("span",{className:"highlight-text shown",children:"user personas based on a traveler's backpack usage."})," "]}),Object(d.jsx)("img",{src:"./images/backpack/John.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/Mary.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/Kate.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/George.png",className:"user-persona"})]})}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsx)("h3",{children:"Design Process"})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Flow Chart "}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./images//backpack/flow.png",className:"flow-img"})}),Object(d.jsxs)("p",{children:[" In this case, ",Object(d.jsx)("span",{className:" highlight-text shown",children:"deciding if the user needed a bag with camera compartments"})," was the ",Object(d.jsx)("span",{className:" highlight-text shown",children:"most important factor"})," to determine the right bag. Since this is a technical feature of the bag, it is the ",Object(d.jsx)("span",{className:" highlight-text shown",children:"main difference between a regular backpack and a camera backpack. "}),"The second most important factor is the size of the bag. Rather than giving the options of \u201cSmall, Medium or Large\u201d, we ask if the user will \u201cneed to fit everything in this one bag\u201d, ",Object(d.jsx)("span",{className:" highlight-text shown",children:"eliminating certain bag sizes depending on the answer"}),", followed by \u201chow long is your trip\u201d to get a better estimate the size of the bag."]}),Object(d.jsx)("p",{children:" Ex: If a user only had one bag to bring, this would automatically require a medium or large bag."})]}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Initial Wireframes"}),Object(d.jsx)("img",{src:"./images//backpack/designv1/bwireframe.png",className:"wireframe"})]})}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Protoype "}),Object(d.jsxs)("p",{children:[" While the intial wireframes only consisted of 4 questions, ",Object(d.jsx)("span",{class:" highlight-text shown",children:"I had decided to add another question to the process"}),". By having the user ",Object(d.jsx)("span",{className:" highlight-text shown",children:"estimate the number of items they are bringing, this will further enhance the size of the bag needed "})," for the trip. A ",Object(d.jsx)("span",{className:" highlight-text shown",children:"progress bar"})," was also added so user can  ",Object(d.jsx)("span",{className:" highlight-text shown",children:"keep track of their questions and return if needed.  "})]}),Object(d.jsxs)("p",{children:["In addtion to the extra question, I have also changed the functionality of the recommended page. Initially, each product listing had a horizontal scrolling under each price option. In the  ",Object(d.jsx)("span",{className:" highlight-text shown",children:" final version, I had removed the horizontal scrolling and limited it only to veritcal scrolling for better viewing purposes"}),". However, the user will have to manually select their price filter."]}),Object(d.jsx)("img",{src:"./images//backpack/designv1/bprototype.png",className:"wireframe"})]})}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"What I Learned"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Functional Limitations "}),Object(d.jsx)("p",{children:"While I gave the option for the user to the number of items they are bringing on their trip, there is a possibility of bringing other items that are not listed on that page. I had only made options for common items that would mainly occupy their bag storage. The size of each item can also vary greatly, affecting the size of the bag needed."}),Object(d.jsx)("span",{class:"tag blue",children:"Design  "}),Object(d.jsx)("p",{children:"While this is my first design for a concept website, I knew I wanted to maintain a minimalistic layout throughout all pages. Originally, I had the idea of a green primary color to represent nature while traveling however, the color green I had in mind did not fit in with the secondary colors."})]})]}),Object(d.jsx)(m,{})]})})})]})})};s(427);var E=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),s=(a[0],a[1],Object(c.useState)(!0)),i=Object(r.a)(s,2),n=(i[0],i[1]),l=function(){window.innerWidth<=960?n(!1):n(!0)};Object(c.useEffect)((function(){l()}),[]),window.addEventListener("resize",l);var o=t.a.useState(!1),b=Object(r.a)(o,2);b[0],b[1],Object(c.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]);var O=Object(c.useState)("false"),g=Object(r.a)(O,2);return g[0],g[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"getcoins",children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"page-container",children:Object(d.jsx)("div",{className:"layout",children:Object(d.jsxs)("div",{className:"page-contents",children:[Object(d.jsx)(j,{}),Object(d.jsx)("img",{src:"./images/getcoins/card/hero1.png","data-aos":"fade-down"}),Object(d.jsxs)(h.b.div,{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsxs)("div",{className:"grid",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Client"}),Object(d.jsxs)("li",{children:["GetCoins is a company that allows users to ",Object(d.jsx)("span",{className:" highlight-text shown",children:" buy/sell crytocurrency via their ATM machine & mobile app platform."})]})]})})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"Client's Request "}),Object(d.jsx)("li",{children:"The client wanted to rebrand their mobile app which serves as a wallet for trading cryptocurrency. I was task"})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"heading-title",children:"My Role"}),Object(d.jsx)("li",{children:" UI Design"}),Object(d.jsx)("div",{class:"heading-title",children:"Timeline"}),Object(d.jsx)("li",{children:"February 16 - April 9(2022)"}),Object(d.jsx)("div",{class:"heading-title",children:"Tools"}),Object(d.jsx)("li",{children:"Figma"})]})})]}),Object(d.jsx)("h1",{className:"getcoins",children:" Contact for more information. "})]})]}),Object(d.jsx)(m,{})]})})})]})})};var P=function(){var e=Object(o.g)();return Object(d.jsx)(l.a,{basename:"",children:Object(d.jsx)(h.a,{exitBeforeEnter:!0,children:Object(d.jsxs)(o.d,{location:e,children:[Object(d.jsx)(o.b,{path:"/",exact:!0,component:u}),Object(d.jsx)(o.b,{path:"/work",exact:!0,component:u}),Object(d.jsx)(o.b,{path:"/projects",exact:!0,component:w}),Object(d.jsx)(o.b,{path:"/projects/okayamadenim",exact:!0,component:T}),Object(d.jsx)(o.b,{path:"/projects/backpack",exact:!0,component:A}),Object(d.jsx)(o.b,{path:"/projects/getcoins",exact:!0,component:E}),Object(d.jsx)(o.b,{path:"/projects/apis",exact:!0,component:S}),Object(d.jsx)(o.b,{path:"/Apis",exact:!0,component:S}),Object(d.jsx)(o.b,{path:"/About",exact:!0,component:N}),Object(d.jsx)(o.b,{path:"/resume",exact:!0,component:k}),Object(d.jsx)(o.b,{path:"/contact",exact:!0,component:N}),Object(d.jsx)(o.b,{path:"/404",component:y}),Object(d.jsx)(o.a,{to:"/404"})]},Location.pathname)})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,436)).then((function(a){var s=a.getCLS,c=a.getFID,t=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),c(e),t(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(l.a,{basename:"",children:Object(d.jsx)(P,{})}),document.getElementById("root")),F()},49:function(e,a,s){},71:function(e,a,s){},72:function(e,a,s){},82:function(e,a,s){}},[[429,1,2]]]);
//# sourceMappingURL=main.093b48a7.chunk.js.map