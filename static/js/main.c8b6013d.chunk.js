(this["webpackJsonpui-portfolio"]=this["webpackJsonpui-portfolio"]||[]).push([[0],{112:function(e,s,t){},121:function(e,s,t){},122:function(e,s,t){},138:function(e,s,t){},139:function(e,s,t){},145:function(e,s,t){},146:function(e,s,t){},148:function(e,s,t){},149:function(e,s,t){},155:function(e,s,t){},415:function(e,s,t){},416:function(e,s,t){},421:function(e,s,t){},427:function(e,s,t){},429:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),i=t(125),n=t.n(i),r=(t(138),t.p,t(6)),l=(t(139),t(14)),d=t(0);t(145);var j=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=s[0],c=s[1],i=Object(a.useState)(!0),n=Object(r.a)(i,2),j=(n[0],n[1],function(){return c(!1)});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:j,children:[Object(d.jsx)("div",{className:"site-title",children:"Andy Mui"}),Object(d.jsx)("i",{class:"fab fa-typo3"}),Object(d.jsx)("div",{className:"side-tag-container",children:Object(d.jsx)("side-tag",{children:" UI Designer | Web Developer "})})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return c(!t)},children:Object(d.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:t?"nav-menu active":"nav-menu",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/About",className:"nav-links",onClick:j,children:"About"})})})]})})})},o=(t(146),t(13)),h=t(22),b=(t(148),t(57),t(149),t(75));var m=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footer-section",children:[Object(d.jsx)(b.SocialIcon,{url:"https://www.linkedin.com/in/andy-mui-2386941a9/",network:"linkedin",fgColor:"#000000",bgColor:"transparent"}),Object(d.jsx)(b.SocialIcon,{network:"dribbble",url:"https://dribbble.com/Andyym",fgColor:"#000000",bgColor:"transparent"}),Object(d.jsx)("p",{children:"Copyright \xa9 2021 Andy Mui"})]})})},O=t(27),x=t.n(O);t(38),t(80);var p=function(){var e="507032a18ab471bb36278e9e6efd6100",s=Object(a.useState)({}),t=Object(r.a)(s,2),c=t[0],i=t[1],n=Object(a.useState)({}),l=Object(r.a)(n,2),j=(l[0],l[1],Object(a.useState)({})),o=Object(r.a)(j,2),h=o[0],b=o[1],m=["Denver","New York","Los Angeles","Chicago","Singapore"],O=m[Math.floor(Math.random()*m.length)],x=0;void 0===c.name&&0===x&&(x=1,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(O,"&units=imperial&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){i(e),b("")})));var p="http://openweathermap.org/img/wn/"+(c.main&&c.weather[0].icon)+"@2x.png";404===fetch&&alert("The page you are trying to reach is not available.");var u=Math.round(parseFloat(c.main&&c.main.temp));return c.name,Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"weather-card",children:Object(d.jsxs)("div",{className:"weather-body",children:[Object(d.jsx)("h4",{className:"current-weather",children:" Current Weather "}),Object(d.jsx)("div",{className:"input-box",children:Object(d.jsx)("input",{class:"weather-input",value:h,placeholder:"Enter Location. .",onChange:function(e){return b(e.target.value)},onKeyPress:function(s){"Enter"===s.key&&void 0!=c.name&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(h,"&units=imperial&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){i(e),b("")}))}})}),Object(d.jsx)("img",{src:p,class:"w-icon"}),Object(d.jsxs)("div",{className:"weather-data",children:[Object(d.jsxs)("h4",{className:"city",children:[c.name,"  "]}),Object(d.jsxs)("h3",{className:"temp",children:["    ",u,"\xb0F  "]}),Object(d.jsxs)("div",{className:"weather-condition",children:[" ",c.main&&c.weather[0].main,"  "]}),Object(d.jsx)("div",{className:"weather-detail-container",children:Object(d.jsxs)("div",{className:"weather-detail",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"feels",children:"Feels like "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[c.main&&c.main.feels_like,"\xb0F  "]})]}),Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"humidity",children:"Humidity:  "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[c.main&&c.main.humidity," % "]})]}),Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"item-info",children:Object(d.jsx)("div",{className:"wind",children:" Wind: "})}),Object(d.jsxs)("div",{className:"item-weather-info",children:[" ",c.main&&c.wind.speed," MPH  "]})]})]})})]})]})})})},u={duration:2,ease:[.43,.13,.23,.96]};var g=function(){var e=c.a.useState(!1),s=Object(r.a)(e,2);return s[0],s[1],Object(a.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"home-tag blue","data-aos":"fade-right",children:"Resources"}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.05},fade:!0,exit:{opacity:50},transition:u,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/apis",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:"  card-container-api",children:Object(d.jsx)(p,{})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{transition:u,className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Useful Resources   "}),Object(d.jsx)("h1",{className:"card-subtitle",children:" Api"}),Object(d.jsx)("div",{className:"card-description",children:" Everyday Uses"})]})})})]})})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"home-tag blue","data-aos":"fade-right",children:"Case Studies "}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.05},fade:!0,exit:{opacity:50},transition:u,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/Backpack",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-backpack",children:Object(d.jsx)("img",{src:"./images/backpack/designv1/Laptops (2).png",className:"thumbnail"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Backpack Finder   "}),Object(d.jsx)("h1",{className:"card-subtitle",children:" UX/UI Design"}),Object(d.jsx)("div",{className:"card-description",children:" Assists Travelers to Find the Perfect Backpack"})]})})})]})}),Object(d.jsx)(h.b.div,{whileHover:{scale:1.05},fade:!0,exit:{opacity:50},transition:u,leave:{opacity:0},className:"card",children:Object(d.jsxs)(l.b,{to:"/projects/okayamadenim",children:[Object(d.jsx)("div",{className:"card-left",children:Object(d.jsx)("div",{className:" image-container-OD",children:Object(d.jsx)("img",{src:"./images/od/OD1.png",className:"thumbnail"})})}),Object(d.jsx)("div",{className:"card-right",children:Object(d.jsx)("div",{className:"image-detail-container",children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"card-title",children:" Okayama Denim  "}),Object(d.jsx)("h1",{className:"card-subtitle",children:"UI Design"}),Object(d.jsx)("div",{className:"card-description",children:" Concept Ecommerce App"})]})})})]})})]}),Object(d.jsx)(m,{})]})})},v=(t(155),t(128)),f=t.n(v);var N=function(){var e=c.a.useState(!1),s=Object(r.a)(e,2);return s[0],s[1],Object(a.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"intro-container",children:Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("h1",{"data-aos":"fade-down",children:"Hello There,"}),Object(d.jsx)("p",{"data-aos":"fade-right",children:"I am originally a Computer Science graduate who is fascinated with design. I consider myself as an artist who materializes ideas by utilizing different skillsets, whether it be designing or developing."}),Object(d.jsx)("p",{"data-aos":"fade-right",children:"-Andy"})]})}),Object(d.jsx)(f.a,{params:{particles:{line_linked:{shadow:{enable:!0,color:"#000000",blur:.5}}}},style:{width:"100%"}})]})})};var w=function(){return Object(d.jsx)("div",{})},y=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"404 Page Not found!"})})};var k=function(){return Object(d.jsx)("div",{})};t(48),t(112),t(34),t(415);var S=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(j,{}),Object(d.jsx)(p,{})]}),Object(d.jsx)(m,{})]})};t(121),t(416),t(122),t(123);var I=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=(s[0],s[1],Object(a.useState)(!0)),i=Object(r.a)(t,2),n=(i[0],i[1]),l=function(){window.innerWidth<=960?n(!1):n(!0)};Object(a.useEffect)((function(){l()}),[]),window.addEventListener("resize",l);var o=c.a.useState(!1),b=Object(r.a)(o,2);b[0],b[1],Object(a.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]);var O=Object(a.useState)("false"),p=Object(r.a)(O,2);return p[0],p[1],Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"OD",children:Object(d.jsx)("div",{className:"page-container",children:Object(d.jsx)("div",{className:"layout",children:Object(d.jsxs)("div",{className:"page-contents",children:[Object(d.jsx)(j,{}),Object(d.jsx)("img",{src:"./images/od/mockup.png","data-aos":"flip-up",className:"banner"}),Object(d.jsxs)(h.b.div,{"data-aos":"fadeup",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("div",{className:"grid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"title",children:"Problem"}),Object(d.jsx)("li",{children:"Okayama Denim mobile webstore does not allow users to easily navigate and purchase items.   "}),Object(d.jsxs)("li",{children:["People are likely to be on their mobile devices as opposed to a computer.","\n"]})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"title",children:"Solution "}),Object(d.jsx)("li",{children:"Design a mobile app to allow users to easily place orders online."})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"title",children:"My Role"}),Object(d.jsx)("li",{children:" UI Design"}),Object(d.jsx)("div",{class:"title",children:"Timeline"}),Object(d.jsx)("li",{children:"1 week"}),Object(d.jsx)("div",{class:"title",children:"Tools"}),Object(d.jsx)("li",{children:"Figma"})]})})]})})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Target Audience"}),Object(d.jsx)("li",{children:" International Raw Denim Enthusiasts"})]}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Why"}),Object(d.jsx)("li",{children:"In 2007, Levi Stratus has tradedmarked the red tab on the rear pocket, and similar arcuates on the rear pockets."}),Object(d.jsx)("li",{children:"Since Japanese denim brands try to reproduce the exact details of the original Levi Stratus 501 Jean, these details must be removed by USA retailers."}),Object(d.jsx)("li",{children:"US Raw Denim consumers are more likely to buy from Okayama Denim due to cheaper price & recieve exact details of product."})]})}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:" Design Process"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"process",children:[Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Splash.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Home.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Category.png",className:"process-pic"})}),Object(d.jsx)("div",{className:"sub-container",children:Object(d.jsx)("img",{src:"./images/od/Product.png",className:"process-pic"})})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Deliverables and Outcome"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"video",children:Object(d.jsx)("video",{src:"./videos/OD_Prototype.mp4",autoPlay:!0,loop:!0,muted:!0})})})]}),Object(d.jsx)(m,{})]})})})})})},D=(t(421),t(129)),C=t.n(D);var T=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=(s[0],s[1]);return Object(d.jsx)(l.b,{to:"/",onClick:function(){return t(!1)},children:Object(d.jsx)(h.b.div,{className:"side-bar",initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:"0"},out:{opacity:0,x:"-10vw"}},transition:{type:"tween",ease:[.43,.13,.23,.96]},children:Object(d.jsx)(C.a,{})})})};t(427);var A=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=(s[0],s[1],Object(a.useState)(!0)),i=Object(r.a)(t,2),n=(i[0],i[1]),l=function(){window.innerWidth<=960?n(!1):n(!0)};Object(a.useEffect)((function(){l()}),[]),window.addEventListener("resize",l);var o=c.a.useState(!1),b=Object(r.a)(o,2);b[0],b[1],Object(a.useEffect)((function(){x.a.init({duration:600,easing:"ease"})}),[]);var O=Object(a.useState)("false"),p=Object(r.a)(O,2);return p[0],p[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"backpack1",children:[Object(d.jsx)(T,{}),Object(d.jsx)("div",{className:"page-container",children:Object(d.jsx)("div",{className:"layout",children:Object(d.jsxs)("div",{className:"page-contents",children:[Object(d.jsx)(j,{}),Object(d.jsx)("img",{src:"./images/backpack/designv1/Laptops (7).png","data-aos":"fade-down"}),Object(d.jsxs)(h.b.div,{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("div",{className:"grid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsx)("div",{class:"title",children:"Problem"}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{className:" highlight-text shown",children:" Travelers having a hard time deciding which backpack fits their needs."})}),Object(d.jsx)("li",{children:"Depending on the type of traveling, they need certain features with the right capacity."}),Object(d.jsx)("li",{children:"Having the right features and capacity in a backpack is essential."})]})})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"title",children:"Solution "}),Object(d.jsxs)("li",{children:["A concept website that provides ",Object(d.jsx)("span",{className:" highlight-text shown",children:"guidance to find a backpack with the right features, capacity and size. "})]})]})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"title",children:"My Role"}),Object(d.jsx)("li",{children:"UX Research, UI Design"}),Object(d.jsx)("div",{class:"title",children:"Timeline"}),Object(d.jsx)("li",{children:"Feb 17- Mar 1(2021)"}),Object(d.jsx)("div",{class:"title",children:"Tools"}),Object(d.jsx)("li",{children:"Figma"}),Object(d.jsx)("li",{children:"Adobe Illustrator"})]})})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Approach"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"table-container",children:[Object(d.jsxs)("div",{className:"group-left",children:[Object(d.jsx)("h4",{className:"process",children:"Research"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Types of Backpacks"}),Object(d.jsx)("li",{children:"Types of Travelers"}),Object(d.jsx)("li",{children:"Traveling Necessities"}),Object(d.jsx)("li",{children:"User Personas"})]})]}),Object(d.jsxs)("div",{className:"group-right",children:[Object(d.jsx)("h4",{className:"process",children:"Design"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Brainstorming"}),Object(d.jsx)("li",{children:"Wireframes"}),Object(d.jsx)("li",{children:"Design Alternatives"}),Object(d.jsx)("li",{children:"Prototypes"})]})]})]})})]}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"Research"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{children:"As this is targeted towards travelers, I began researching by gathering user comments from Reddit forums, r/solotravel, r/onebag, and r/travel. Oftentimes, questions are asked related to \u201cwhat bag did you take for your x long trip\u201d, users also give a general description of what they choose to pack in their bags. This provided some information distinguish the types of travelers."})})]}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{className:"tag blue",children:"Types of Travelers"}),Object(d.jsxs)("p",{children:[" There are many types of travelers out there. Some travel for a weekend, a week, a couple months, or up to a couple years. ",Object(d.jsx)("span",{className:"highlight-text shown",children:"Some major differences between travelers:"}),Object(d.jsx)("li",{children:"One bag vs Multiple bags "}),Object(d.jsx)("li",{children:"Checked luggage vs Carry-on luggage "}),Object(d.jsx)("li",{children:"Duration of trip "}),Object(d.jsxs)("li",{children:["Packing necessities ",Object(d.jsx)("span",{className:"highlight-text shown",children:"greatly vary"})]})]}),Object(d.jsx)("span",{className:"tag blue",children:"Types of Backpacks"}),Object(d.jsxs)("p",{children:[" While going through some backpacks that users use, ",Object(d.jsx)("span",{className:"highlight-text shown",children:"one major difference"})," between backpacks is the addtion of a ",Object(d.jsx)("span",{className:"highlight-text shown",children:"dedicated camera compartment"})," to safely store camera equipment. Additonal features include:",Object(d.jsx)("li",{children:" Top Loading vs Front Loading Backpack "}),Object(d.jsx)("li",{children:" Water Resistance "}),Object(d.jsx)("li",{children:" Hip/Chest Straps "})]})]})}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"User Personas"}),Object(d.jsxs)("p",{children:["I have created the following ",Object(d.jsx)("span",{className:"highlight-text shown",children:"user personas based on a traveler's backpack usage."})," "]}),Object(d.jsx)("img",{src:"./images/backpack/John.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/Mary.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/Kate.png",className:"user-persona"}),Object(d.jsx)("img",{src:"./images//backpack/George.png",className:"user-persona"})]})}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsx)("h3",{children:"Design Process"})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Flow Chart "}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./images//backpack/flow.png",className:"flow-img"})}),Object(d.jsxs)("p",{children:[" In this case, ",Object(d.jsx)("span",{className:" highlight-text shown",children:"deciding if the user needed a bag with camera compartments"})," was the ",Object(d.jsx)("span",{className:" highlight-text shown",children:"most important factor"})," to determine the right bag. Since this is a technical feature of the bag, it is the ",Object(d.jsx)("span",{className:" highlight-text shown",children:"main difference between a regular backpack and a camera backpack. "}),"The second most important factor is the size of the bag. Rather than giving the options of \u201cSmall, Medium or Large\u201d, we ask if the user will \u201cneed to fit everything in this one bag\u201d, ",Object(d.jsx)("span",{className:" highlight-text shown",children:"eliminating certain bag sizes depending on the answer"}),", followed by \u201chow long is your trip\u201d to get a better estimate the size of the bag."]}),Object(d.jsx)("p",{children:" Ex: If a user only had one bag to bring, this would automatically require a medium or large bag."})]}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Initial Wireframes"}),Object(d.jsx)("img",{src:"./images//backpack/designv1/bwireframe.png",className:"wireframe"})]})}),Object(d.jsx)("div",{"data-aos":"fadeup",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Protoype "}),Object(d.jsxs)("p",{children:[" While the intial wireframes only consisted of 4 questions, ",Object(d.jsx)("span",{class:" highlight-text shown",children:"I had decided to add another question to the process"}),". By having the user ",Object(d.jsx)("span",{className:" highlight-text shown",children:"estimate the number of items they are bringing, this will further enhance the size of the bag needed "})," for the trip. A ",Object(d.jsx)("span",{className:" highlight-text shown",children:"progress bar"})," was also added so user can  ",Object(d.jsx)("span",{className:" highlight-text shown",children:"keep track of their questions and return if needed.  "})]}),Object(d.jsxs)("p",{children:["In addtion to the extra question, I have also changed the functionality of the recommended page. Initially, each product listing had a horizontal scrolling under each price option. In the  ",Object(d.jsx)("span",{className:" highlight-text shown",children:" final version, I had removed the horizontal scrolling and limited it only to veritcal scrolling for better viewing purposes"}),". However, the user will have to manually select their price filter."]}),Object(d.jsx)("img",{src:"./images//backpack/designv1/bprototype.png",className:"wireframe"})]})}),Object(d.jsxs)("div",{"data-aos":"fadeup",children:[Object(d.jsx)("h3",{children:"What I Learned"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("span",{class:"tag blue",children:"Functional Limitations "}),Object(d.jsx)("p",{children:"While I gave the option for the user to the number of items they are bringing on their trip, there is a possibility of bringing other items that are not listed on that page. I had only made options for common items that would mainly occupy their bag storage. The size of each item can also vary greatly, affecting the size of the bag needed."}),Object(d.jsx)("span",{class:"tag blue",children:"Design  "}),Object(d.jsx)("p",{children:"While this is my first design for a concept website, I knew I wanted to maintain a minimalistic layout throughout all pages. Originally, I had the idea of a green primary color to represent nature while traveling however, the color green I had in mind did not fit in with the secondary colors."})]})]}),Object(d.jsx)(m,{})]})})})]})})};var P=function(){var e=Object(o.g)();return Object(d.jsx)(l.a,{basename:"",children:Object(d.jsx)(h.a,{exitBeforeEnter:!0,children:Object(d.jsxs)(o.d,{location:e,children:[Object(d.jsx)(o.b,{path:"/",exact:!0,component:g}),Object(d.jsx)(o.b,{path:"/work",exact:!0,component:g}),Object(d.jsx)(o.b,{path:"/projects",exact:!0,component:w}),Object(d.jsx)(o.b,{path:"/projects/okayamadenim",exact:!0,component:I}),Object(d.jsx)(o.b,{path:"/projects/backpack",exact:!0,component:A}),Object(d.jsx)(o.b,{path:"/projects/apis",exact:!0,component:S}),Object(d.jsx)(o.b,{path:"/Apis",exact:!0,component:S}),Object(d.jsx)(o.b,{path:"/About",exact:!0,component:N}),Object(d.jsx)(o.b,{path:"/resume",exact:!0,component:k}),Object(d.jsx)(o.b,{path:"/contact",exact:!0,component:N}),Object(d.jsx)(o.b,{path:"/404",component:y}),Object(d.jsx)(o.a,{to:"/404"})]},Location.pathname)})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,435)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(l.a,{basename:"",children:Object(d.jsx)(P,{})}),document.getElementById("root")),F()},48:function(e,s,t){},57:function(e,s,t){},80:function(e,s,t){}},[[429,1,2]]]);
//# sourceMappingURL=main.c8b6013d.chunk.js.map