(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{110:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),a=(i(175),i(274)),n=i(163),r=i(1);t.default=function(){var e=c.a.memo((function(){return Object(r.jsx)(a.a,{loop:1/0,wrapper:"b",steps:["a Software Developer",1500,"a Web Developer",1500,"an Engineer",1500]})}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"sectionContainer",children:[Object(r.jsx)("img",{src:n.default,className:"sectionBG"}),Object(r.jsxs)("div",{className:"textDiv",children:[Object(r.jsx)("h1",{children:" Hi, I am Haritha, "}),Object(r.jsxs)("p",{className:"specialText",children:["I'm"," ",Object(r.jsx)("div",{className:"animatedText",children:Object(r.jsx)(e,{})})]})]}),Object(r.jsxs)("ul",{className:"socialLinksUL",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/harithaseddik/",target:"_blank",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in icon"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/HarithaSeddik",target:"_blank",children:Object(r.jsx)("i",{class:"fab fa-github icon"})})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://www.instagram.com/harithaakkad/",target:"_blank",children:[Object(r.jsx)("i",{class:"fab fa-instagram icon"}),"    "]})})]})]})})}},111:function(e,t,i){"use strict";i.r(t);var s=i(0),c=(i(177),i(48)),a=(i(294),i(1));t.default=function(e){document.querySelectorAll("section"),document.querySelectorAll(".navbarContainer .textContainer ul li"),document.querySelectorAll(".navbarContainer"),Object(s.useRef)();var t=document.getElementsByTagName("BODY")[0],i=document.getElementsByTagName("HTML")[0],n=function(){t.style.scrollSnapType="none",i.style.scrollSnapType="none"};return Object(a.jsxs)("div",{className:e.showBackground?"navbarContainer--active":"navbarContainer",children:[console.log(e.showBackground),Object(a.jsx)("div",{className:e.showBackground?"textContainer--active":"textContainer",children:Object(a.jsxs)("ul",{className:"textList",children:[Object(a.jsx)(c.Link,{onClick:n,smooth:!0,to:"home",children:Object(a.jsx)("li",{className:"home",children:"  Home "})}),Object(a.jsx)(c.Link,{onClick:n,smooth:!0,to:"aboutMe",children:Object(a.jsx)("li",{className:"aboutMe",children:"  About Me "})}),Object(a.jsx)(c.Link,{onClick:n,smooth:!0,to:"experiences",children:Object(a.jsx)("li",{className:"experiences",children:"  Experience "})}),Object(a.jsx)(c.Link,{onClick:n,smooth:!0,to:"skills",children:Object(a.jsx)("li",{className:"skills",children:"  Skills "})}),Object(a.jsx)(c.Link,{onClick:n,smooth:!0,to:"contact",children:Object(a.jsx)("li",{className:"contact",children:"  Contact "})})]})})]})}},112:function(e,t,i){"use strict";i.r(t);var s=i(15),c=i(0),a=i.n(c),n=(i(181),i(1));t.default=function(e){var t=a.a.useRef(),i=a.a.useRef(),c=a.a.useRef(),r=a.a.useRef(),o=a.a.useState({x:0,y:0}),l=Object(s.a)(o,2),d=l[0],u=l[1],m=a.a.useState(window.innerWidth),j=Object(s.a)(m,2),b=j[0],p=j[1],f=a.a.useState(window.innerHeight),h=Object(s.a)(f,2),g=h[0],x=h[1],O=a.a.useState(!1),v=a.a.useState(!1),y=document.getElementsByTagName("BODY")[0],w=document.getElementsByTagName("HTML")[0],A=function(e){var t,s=e=e||window.event,c=s.pageX,a=s.pageY;u({x:c,y:a}),t=e,O.current=!0,I(),L=t.pageX,T=t.pageY,i.current.style.top=T+"px",i.current.style.left=L+"px";var n=e.clientY,r=e.clientX,o=window.screen.width,l=window.screen.height,d=Math.round(n/l*100);Math.round(r/o*100);d>10&&(y.style.scrollSnapType="y mandatory",w.style.scrollSnapType="y mandatory")},k=function(){O.current=!0,I()},N=function(){O.current=!1,I()},S=function(){v.current=!0,W()},P=function(){v.current=!1,W()},C=function(e){p(window.innerWidth),x(window.innerHeight)};a.a.useEffect((function(){return document.addEventListener("mousemove",A),document.addEventListener("mouseenter",k),document.addEventListener("mouseleave",N),document.addEventListener("mousedown",S),document.addEventListener("mouseup",P),window.addEventListener("resize",C),c.current=requestAnimationFrame(D),document.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseover",(function(){W()})),e.addEventListener("mouseout",(function(){v.current=!1,W()}))})),function(){document.removeEventListener("mousemove",A),document.removeEventListener("mouseenter",k),document.removeEventListener("mouseleave",N),document.removeEventListener("mousedown",S),document.removeEventListener("mouseup",P),window.removeEventListener("resize",C),cancelAnimationFrame(c.current)}}),[]);var B=d.x,H=d.y,L=b/2,T=g/2;function I(){O.current?(i.current.style.opacity=1,t.current.style.opacity=1):(i.current.style.opacity=0,t.current.style.opacity=0)}function W(){v.current?(i.current.style.transform="translate(-50%, -50%) scale(0.7)",t.current.style.transform="translate(-50%, -50%) scale(5)"):(i.current.style.transform="translate(-50%, -50%) scale(1)",t.current.style.transform="translate(-50%, -50%) scale(1)")}var D=function e(i){void 0!==r.current&&(B+=(L-B)/8,H+=(T-H)/8,t.current.style.top=H+"px",t.current.style.left=B+"px"),r.current=i,c.current=requestAnimationFrame(e)};return Object(n.jsx)(n.Fragment,{children:e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{ref:t,id:"cursor-dot-outline"}),Object(n.jsx)("div",{ref:i,id:"cursor-dot"})]}):Object(n.jsx)(n.Fragment,{})})}},113:function(e,t,i){"use strict";i.r(t);i(182);var s=i(164),c=i(48),a=i(121),n=i(81),r=i(1);t.default=function(){var e=document.getElementsByTagName("BODY")[0],t=document.getElementsByTagName("HTML")[0];return Object(r.jsxs)("div",{className:"aboutSectionContainer",children:[Object(r.jsx)("div",{className:"leftSection",children:Object(r.jsx)("img",{className:"aboutPic",src:s.default})}),Object(r.jsx)("div",{className:"rightSection",children:Object(r.jsxs)("div",{className:"aboutTextDiv",children:[Object(r.jsx)("h1",{children:" Haritha Akkad"}),Object(r.jsxs)("h5",{children:[" ","A ",Object(r.jsx)("span",{children:" software engineer"})," based in ",Object(r.jsx)("span",{children:" Turkey "})]}),Object(r.jsxs)("p",{className:"aboutParagraph",children:[" ","I am a fullstack web developer that has worked extensively with "," ",Object(r.jsx)("span",{children:"React.Js"})," and skilled at multiple backend frameworks including ",Object(r.jsx)("span",{children:"Python"})," and ",Object(r.jsx)("span",{children:"NodeJs"}),".",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"I am fluent in ",Object(r.jsx)("span",{children:"English, Turkish,"})," and"," ",Object(r.jsx)("span",{children:" Arabic"})," spoken languages.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"In my free time I like to take on side projects that challenge my skills.",Object(r.jsx)("br",{}),"You can find the source code for  ",Object(r.jsxs)("span",{children:[" ",Object(r.jsx)(n.a,{href:"https://github.com/HarithaSeddik/Portfolio-ReactJS/",target:"_blank",children:Object(r.jsx)("a",{className:"gitHubLink",children:"this ReactJS website"})})]})," and other cool projects on my",Object(r.jsxs)("span",{children:[" ",Object(r.jsx)(n.a,{href:"https://github.com/HarithaSeddik",target:"_blank",children:Object(r.jsx)("a",{className:"gitHubLink",children:"Github"})})]})," ","page.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," Check out the rest of my"," ",Object(r.jsxs)(c.Link,{onClick:function(){e.style.scrollSnapType="none",t.style.scrollSnapType="none"},smooth:!0,to:"skills",children:[Object(r.jsx)("span",{className:"skillsLink",children:"skills"}),"!"]})]}),Object(r.jsxs)("ul",{className:"aboutList",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("h4",{children:"Email"})," ",Object(r.jsxs)("h5",{children:[" |\b\b","akkad.haritha@gmail.com"]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h4",{children:" Phone"})," ",Object(r.jsxs)("h5",{children:[" |\b\b","+905538033898"]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h4",{children:"Address"})," ",Object(r.jsxs)("h5",{children:[" |\b\b","Ankara, Turkey"]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h4",{children:" Freelance"})," ",Object(r.jsxs)("h5",{children:[" |\b\b","Available"]})]})]}),Object(r.jsx)("div",{className:"downloadResumeButton",children:Object(r.jsx)("a",{href:a.default,download:a.default,target:"_blank",rel:"noopener noreferrer",children:"Download CV"})})]})})]})}},114:function(e,t,i){"use strict";i.r(t);i(0),i(183);var s=i(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"backToTopButton",children:Object(s.jsx)("i",{class:"fas fa-angle-double-up"})})})}},115:function(e,t,i){"use strict";i.r(t);i(0),i(184);var s=i(165),c=i(49),a=(i(295),i(1));t.default=function(){var e;return Object(a.jsxs)("div",{className:"skillsContainer",children:[Object(a.jsx)("div",{className:"skillsTitleDiv",children:Object(a.jsx)("h1",{children:" Fullstack developer aiming to explore every tech stack! "})}),Object(a.jsxs)("div",{className:"mediaContainer",children:[Object(a.jsxs)("div",{className:"animationContainer",children:[Object(a.jsx)("section",{className:"iconContainer--react",children:Object(a.jsx)("i",{class:"devicon-react-original colored"})}),Object(a.jsx)("section",{className:"iconContainer--html",children:Object(a.jsx)("i",{class:"devicon-html5-plain colored"})}),Object(a.jsx)("section",{className:"iconContainer--css",children:Object(a.jsx)("i",{class:"devicon-css3-plain colored"})}),Object(a.jsx)("section",{className:"iconContainer--python",children:Object(a.jsx)("i",{class:"devicon-python-plain colored"})}),Object(a.jsx)("section",{className:"iconContainer--github",children:Object(a.jsx)("i",{style:{color:"white"},class:"devicon-github-original"})}),Object(a.jsx)("section",{className:"iconContainer--raspberrypi",children:Object(a.jsx)("i",{class:"devicon-raspberrypi-line colored"})}),Object(a.jsx)("section",{className:"iconContainer--materialui"})]}),Object(a.jsx)("img",{className:"skillsDivGif",src:s.default})]}),Object(a.jsxs)("div",{className:"skillsTextDiv",children:[(e=[{iconName:"devicon-react-original colored",hover:"ReactJS"},{iconName:"devicon-javascript-plain colored",hover:"JavaScript"},{iconName:"devicon-nodejs-plain colored",hover:"NodeJs"},{iconName:"devicon-python-plain colored",hover:"Python"},{iconName:"devicon-linux-plain",hover:"Linux"},{iconName:"devicon-mysql-plain colored",hover:"MySQL"},{iconName:"devicon-materialui-plain colored",hover:"MaterialUI"},{iconName:"devicon-git-plain",hover:"Git"},{iconName:"devicon-html5-plain colored",hover:"Html5"},{iconName:"devicon-css3-plain colored",hover:"CSS"},{iconName:"devicon-tensorflow-original",hover:"TensorFlow"},{iconName:"devicon-firebase-plain colored",hover:"FireBase"}],Object(a.jsx)("div",{className:"iconArrayContainer",children:Object(a.jsx)(c.a,{container:!0,justify:"center",spacing:4,children:e.map((function(e){return Object(a.jsx)(c.a,{rowSpacing:1,item:!0,xs:12,sm:6,md:3,lg:3,children:Object(a.jsx)("div",{className:"iconWrapper","data-hover":e.hover,children:Object(a.jsx)("i",{class:e.iconName})})})}))})})),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("h3",{children:"Develop highly interactive Front end / User Interfaces for your web applications"})}),Object(a.jsx)("li",{children:Object(a.jsx)("h3",{children:" Integration of third party services such as Firebase/ CommerceJS/ Stripe "})})]})]})]})}},116:function(e,t,i){"use strict";i.r(t);var s=i(125),c=i(13),a=i.n(c),n=i(47),r=i(15),o=i(0),l=(i(185),i(49)),d=i(785),u=i(276),m=i(168),j=i(787),b=i(270),p=i.n(b),f=i(786),h=i(273),g=i(1),x=Object(f.a)((function(){return{TextField:{backgroundColor:"rgba(80,80,80,0.2)",color:"#fff"},Button:{backgroundColor:"#ce8c36e3"}}}));t.default=function(){var e=x(),t="https://submit-form.com/".concat("DVPPT8SR"),i={name:"",email:"",message:""},c=Object(o.useState)(i),b=Object(r.a)(c,2),f=b[0],O=b[1],v=Object(o.useState)(!1),y=Object(r.a)(v,2),w=y[0],A=y[1],k=Object(o.useState)(),N=Object(r.a)(k,2),S=N[0],P=N[1],C=Object(o.useState)(),B=Object(r.a)(C,2),H=B[0],L=B[1],T=Object(o.useRef)(),I=function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),A(!0),e.next=4,W();case 4:A(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(n.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(s.a)(Object(s.a)({},f),{},{"g-recaptcha-response":H}),e.prev=1,e.next=4,p.a.post(t,c);case 4:e.sent,P({class:"messageSuccess",text:"Thank you! , I will be in touch with you shortly"}),O(i),T.current.reset(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),P({class:"messageFail",text:"Sorry, there was a problem, Please try again!"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.target,i=t.id,c=t.value,a=i,n=Object(s.a)({},f);n[a]=c,O(n)};return Object(g.jsxs)("div",{className:"contactDiv",children:[Object(g.jsxs)("div",{className:"contactTextDiv",children:[Object(g.jsx)("h1",{children:" Reach Out to me!"}),Object(g.jsx)("h3",{children:" Want to discuss a project or just chat? Just leave me a message!"}),Object(g.jsxs)("button",{className:"locationButton",children:[Object(g.jsx)("p",{children:" Ankara, Turkey "}),Object(g.jsx)("i",{className:"fas fa-map-marker-alt"})]}),Object(g.jsxs)("ul",{className:"socialLinksUL",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.linkedin.com/in/harithaseddik/",target:"_blank",children:Object(g.jsx)("i",{className:"fab fa-linkedin-in icon"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://github.com/HarithaSeddik",target:"_blank",children:Object(g.jsx)("i",{className:"fab fa-github icon"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"https://www.instagram.com/harithaakkad/",target:"_blank",children:[Object(g.jsx)("i",{className:"fab fa-instagram icon"}),"    "]})})]})]}),Object(g.jsx)(l.a,{children:Object(g.jsx)("div",{className:"customCard",style:{maxWidth:350,padding:"10px 5px",margin:"0 auto"},children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{style:{color:"#ce8c36e3"},gutterBottom:!0,variant:"h5",children:"Leave a message!"}),S&&Object(g.jsx)("div",{className:S.class,children:Object(g.jsx)(u.a,{variant:"body2",style:{color:"#fff"},component:"p",gutterBottom:!0,children:S.text})}),Object(g.jsx)("form",{onSubmit:I,children:Object(g.jsxs)(l.a,{container:!0,spacing:2,children:[Object(g.jsx)(l.a,{className:"textField",xs:12,item:!0,children:Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{onChange:D,className:e.TextField,placeholder:"Enter your name",label:"Name",variant:"outlined",fullWidth:!0,required:!0,id:"name",value:f.name})})}),Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(m.a,{id:"email",onChange:D,className:e.TextField,type:"email",placeholder:"Enter email",label:"Email",variant:"outlined",fullWidth:!0,required:!0,value:f.email})}),Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(m.a,{id:"message",onChange:D,className:e.TextField,label:"Message",multiline:!0,rows:4,placeholder:"Type your message here",variant:"outlined",fullWidth:!0,required:!0,value:f.message})}),Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(h.a,{ref:T,sitekey:"6Ld4W8gcAAAAACBKlXft6c1Z764vq16iE8uGgbcc",onChange:function(e){L(e)}})}),Object(g.jsx)(j.a,{disabled:w,className:e.Button,type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:w?"Submitting":"Submit"})]})})]})})})]})}},117:function(e,t,i){"use strict";i.r(t);t.default=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,788)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),s(e),c(e),a(e),n(e)}))}},121:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/myResume_v2.d25c027b.pdf"},130:function(e,t,i){var s={".":68,"./":68,"./App":64,"./App.css":174,"./App.js":64,"./App.test":194,"./App.test.js":194,"./component/AboutSection":113,"./component/AboutSection.css":182,"./component/AboutSection.js":113,"./component/BackToTop":114,"./component/BackToTop.css":183,"./component/BackToTop.js":114,"./component/Contact":116,"./component/Contact.css":185,"./component/Contact.tsx":116,"./component/Cursor":112,"./component/Cursor.css":181,"./component/Cursor.js":112,"./component/DisabledSection":242,"./component/DisabledSection.css":243,"./component/DisabledSection.js":242,"./component/HomeSection":110,"./component/HomeSection.css":175,"./component/HomeSection.js":110,"./component/Navbar":111,"./component/Navbar.css":177,"./component/Navbar.js":111,"./component/Skills":115,"./component/Skills.css":184,"./component/Skills.js":115,"./data/data":19,"./data/data.json":19,"./docs/myResume.pdf":604,"./docs/myResume_v2.pdf":121,"./images/aboutPic.jpg":605,"./images/aboutPic.jpg.jpg":606,"./images/aboutPic2.jpeg":607,"./images/aboutPic2.jpg":164,"./images/aboutPic3.jpeg":608,"./images/aboutPic4.jpeg":609,"./images/aboutPic5.jpeg":610,"./images/aboutPic6.jpg":611,"./images/bluecollar_dancing.gif":612,"./images/bookstore.jpg":613,"./images/bookstore2.jpg":614,"./images/bookstore_gif.gif":615,"./images/bookstore_gif2.gif":616,"./images/bostondynamics.jpg":617,"./images/droneBackground.png":618,"./images/droneCamera.jpg":619,"./images/droneCamera2.jpg":620,"./images/droneCamera3.jpg":621,"./images/homeImage.jpeg":163,"./images/mechatronicsRobot.gif":622,"./images/mechatronicsRobot.mp4":623,"./images/mechatronicsRobot2.gif":624,"./images/objRecVid.gif":625,"./images/objRecVid.mp4":626,"./images/objRecVid2.gif":627,"./images/pp1.png":628,"./images/profilePicture2.jpg":629,"./images/programmer.gif":630,"./images/programmergif1.gif":631,"./images/programmergif2.gif":632,"./images/programmergif3.gif":165,"./images/programmergif3.jpg":633,"./images/robotpic2.jpg":634,"./images/software-developer1.jpg":635,"./images/software-developer2.jpg":636,"./images/software-developer3.jpg":637,"./images/websiteIcon copy.png":638,"./images/websiteIcon.png":639,"./index":68,"./index.css":173,"./index.js":68,"./logo.svg":640,"./react-app-env.d":244,"./react-app-env.d.ts":244,"./reportWebVitals":117,"./reportWebVitals.js":117,"./setupTests":245,"./setupTests.js":245};function c(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=a,e.exports=c,c.id=130},163:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/homeImage.c47cbaee.jpeg"},164:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic2.072bc7e6.jpg"},165:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/programmergif3.b165f4f1.gif"},173:function(e,t,i){},174:function(e,t,i){},175:function(e,t,i){},177:function(e,t,i){},181:function(e,t,i){},182:function(e,t,i){},183:function(e,t,i){},184:function(e,t,i){},185:function(e,t,i){},19:function(e){e.exports=JSON.parse('{"experiences":[{"id":0,"title-text1":"Software Developer - Enekom Energy","title-text2":"09/2020 - PRESENT ","title-text3":"Ankara, Turkey","title-imageSrc":"./images/software-developer2.jpg","details-text1":"Developed multiple desktop test tools, collecting sensor values from microcontroller based devices set on high-speed railway systems","details-text2":"Built a remote testing platform through Ubuntu Server on RaspberryPi ","details-text3":"Using C, built multiple Arduino/ RaspberryPi based testing apparatuses for product shelf testing","details-text4":"Wrote database management, and communication protocol classes using Python\'s Sqlite3 and Socket libraries","details-text5":"Python | Sqlite3 | MSSQL | JScript | PyQt5 | Git | Linux","details-imageSrc":"./images/pp1.png","details-href":""},{"id":1,"title-text1":"E-commerce Bookstore Website - ReactJS","title-text2":"","title-text3":"","title-imageSrc":"./images/bookstore2.jpg","details-text1":"Built a complete online bookstore website using ReactJS framework","details-text3":"Functioning store backend handled by headless eCommerce API (commerceJS)","details-text2":"Utilized Material-UI Frontend framework ","details-text4":"Implemented functional payment form backend handled by Stripe\'s headless API ","details-text5":"ReactJS | Javascript | MaterialUi | API-Querying | React-Hook-Forms","details-imageSrc":"./images/bookstore_gif2.gif","details-href":"https://examplebookstore.netlify.app/"},{"id":2,"title-text1":"Development of a Hunter Drone Platform- Meteksan Savunma","title-text2":"09/2019 - 06/2020 ","title-text3":"Ankara, Turkey","title-imageSrc":"./images/droneCamera3.jpg","details-text1":"Project lead (Senior Year Graduation Project) for a team of engineers to develop a hunter-drone platform to neutralize malicious drones","details-text3":"Developed Object-recognition and tracking code using Python\'s OpenCV fed by a video stream powered by a Jetson NANO","details-text2":"Sponsored by Meteksan SAVUNMA","details-text4":"Used feedback from the video-stream to control servo-motors for stabilizing the camera\'s gimbal","details-text5":"Python | OpenCV | Object-Tracking | Gimbal-Control | Arduino","details-imageSrc":"./images/objRecVid2.gif","details-href":"https://www.youtube.com/watch?v=UcJCYKdf6GM"},{"id":3,"title-text1":"Gap Closing Mechatronic Robot","title-text2":"Bilkent University - 2019","title-text3":"","title-imageSrc":"./images/robotpic2.jpg","details-text1":"Project lead for developing a gap-crossing robot","details-text2":"Placed 2nd in Competition - Mechatronic Systems (2019)","details-text3":"Programmed PIC microcontroller in C","details-text4":"PWM control of DC motors with feedback from UV sensors","details-text5":"PIC | C | Arduino | PWM Control","details-imageSrc":"./images/mechatronicsRobot2.gif","details-href":"https://www.youtube.com/watch?v=HMMgDVDKDpc"}]}')},194:function(e,t,i){"use strict";i.r(t);var s=i(166),c=i(64),a=i(1);test("renders learn react link",(function(){Object(s.a)(Object(a.jsx)(c.default,{}));var e=s.b.getByText(/learn react/i);expect(e).toBeInTheDocument()}))},242:function(e,t,i){"use strict";i.r(t);i(0),i(243);var s=i(1);t.default=function(){return Object(s.jsx)("div",{className:"disabledSectionContainer",children:Object(s.jsx)("div",{className:"messageContainer",children:Object(s.jsx)("p",{children:" Sorry :( Currently only available on bigger screens!"})})})}},243:function(e,t,i){},244:function(e,t){},245:function(e,t,i){"use strict";i.r(t);i(641)},604:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/myResume.12449313.pdf"},605:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic.c81760b0.jpg"},606:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic.jpg.ec0026f2.jpg"},607:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic2.00133dd4.jpeg"},608:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic3.2947a6bf.jpeg"},609:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic4.a7545529.jpeg"},610:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic5.118ecdc9.jpeg"},611:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/aboutPic6.6ce069a0.jpg"},612:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bluecollar_dancing.7a1f294c.gif"},613:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bookstore.35540df4.jpg"},614:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bookstore2.9a4f5b4f.jpg"},615:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bookstore_gif.d5c1da0d.gif"},616:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bookstore_gif2.fa7958d6.gif"},617:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bostondynamics.d26eff70.jpg"},618:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/droneBackground.8ebde7d0.png"},619:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/droneCamera.85cea72c.jpg"},620:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/droneCamera2.8791ac06.jpg"},621:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/droneCamera3.0f117fe9.jpg"},622:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/mechatronicsRobot.1d037bcc.gif"},623:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/mechatronicsRobot.967aeab0.mp4"},624:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/mechatronicsRobot2.7e414b7d.gif"},625:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/objRecVid.e66f9686.gif"},626:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/objRecVid.dd9e3168.mp4"},627:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/objRecVid2.9e08c3a2.gif"},628:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/pp1.d6f7acd0.png"},629:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/profilePicture2.0333fc2a.jpg"},630:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/programmer.7c4ef097.gif"},631:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/programmergif1.26f3988f.gif"},632:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/programmergif2.eece8932.gif"},633:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/programmergif3.82740594.jpg"},634:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/robotpic2.b246df4d.jpg"},635:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/software-developer1.b45b7d68.jpg"},636:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/software-developer2.fbb0f2af.jpg"},637:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/software-developer3.fffb09e2.jpg"},638:function(e,t,i){"use strict";i.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAApYSURBVGhD7Zp5bBTXHcd/b2Z29vCubWyzGJuCKYT7CEdSiHJAgAQFkrZqREJS0hx/IEVtaZumLa1aYynN2SaiVG0paaBUochtSVEjRKIQlAANUMBAaNwQYszhE7PYu95rrtffWz/vwezN2hDJH+lp5/fmzez7vuP3fm9mYIghhhhiiBsYwn8HhM2ba23DAUpLwV8p6j2jQQtXU2K4QLS5iUBESqlGtVCHQKBLsLsvtHTDBb+htq9as8HLb1FwCi5416711vKetjHFoTO3WC1kgaEE5lAKIwH0YgJExmORF42DGkBIGM97qCA2S7bif1+mo9751KeefHT1q128UEEomOCtW58pmmWhM+3hpkew/ndTQxkDlNgJquBFsgYbhYJAgjgIPgFJeqtFuuXvdzy89jNCCOVF8uaaBa9f/x3rPWNc02XPx09RQ19GwajCiiXpxfxg4nH4nwVi2XLsUvWmFT/6XTs/lRfXJHj/ttqqSvX4U8SAxww9PLaQQq8GdRtElI8GRPcLHwWEt1ev/qPKT+VEXoLr6+vFCdqhucVGy0/0UPe9eBtbPkM3P6iPyM6Njb45zy9/eu0Vnpk1OVdy48aNlgXWvctFrecX2OrTB7JXU4HeXScWx+5A+eLvzlj+dBPPzoqcBDOxdzn3f00KX36RGhSH8GD1qhk2twVBOthpn/zU/JUvN/LsjGRd4b21tdLISRe/Ifnbfon/9eXrKbafiEMTxcOdjjnfvO2hujM8Oy0C/00LDiFSPan1bjHYXnejiGWwelBdv3VEsOEP72ytdfPstGQ1/x6YaZ9s8ze+AlS7GedsVo00WEREU72mXPCUzvrqQ+/t3PmBxk8lJWPl6zf+uKSk+8D3iaHNx3vfUGL7YfUy1NCqJaPgERzmaUdf2pO1tbXCwzWNKyXDtwELDuPZfc0qWbnBwIGuhvlxHKZyWDJSLj5gYmUs+JNFW1IdB1ma5ZeQposwdemCJ1/5jOeYSCv4o7/W1lQEjm7FP7o9ft4K9lIomnYnCBa5L8PQwN+4D7Sey302R7AVY7m7QJC5aAyZA6c/AvVyW58tymAdeRPIlWOxjK0vLw1UV0HtbILguU/wP3WeGyPiua2uDUetD/5gxYoV5gJIymZlwcVIufUBbNK58WIjYG+IjlKQXOWRJDqHxcTHgxeKjpJYOVdZTDwiFbvBPn4uyOXV0TLpkqW0EsvfCtbhVfwOibB60rDv0Yni8Vt4lomUgquFc6O0nvaH8TaZmz5PBJsTGypxyGeCxTmis5RbZnCylDn9nz6O01HiWQkkFcyWobLAkYWUqjNNvVto4u5O1RConlYc8i2x5GnDGXP1vE1dpUgv68qyO8f6x/CsBJIK/suvfuiwGMp9bHvHswYFI+yD3lN7wHtsdzT5TuwBvbeHl8gOnOsjJ5Tpy7iZQFLBY0t6akBXZg947yaDOSN0gv2J6pjQG+UCi+/DnubF6IdMjiWpYLfNP4dSo5qbX0ioHp5Z0n3IpMEkmK29EtGm4mFu3uRGg4L7S8OUm7gVxSR4nLPXTvXQ5OsxnImAjtUUgODiqoTAUIJ9CR0bGAY/lwZiyEUkPI1bUUyCVUVxEAqjuDmgsPnJooV+iK0EHOPmAhHjVhRdgcD/9oH3P29HU6j1c34yDZQQ1dc+mVtRTII1kdgNapRxc0DRvJ2gB/3cYp0rgFw9CYqm3I7hZszfGCEfempPNBnhID+TGjZCkeHcjGISLIlFTgK0iJvZwSIvZxlIJe6EJGJ0ZB6iMWjIC4FPD4IeJ4BtxuSRE8A5FUUni95yQbSYtozm2giGhWL8w62sYHPPPn4euOYsS0jO+Dg6BeqlJug9uRf0UFxPY/fIlePBNWMhCNb8QwEiiKaLTYJFUcjr2S+bdyyevjqxYZoJzXMBfA17QEsIMAhYKmrAdfMijMddPO/aMdVGN2gvOpIke72BRfe2Qe+J93Bee3hOH1JpNThnLk4bP6eCako3P4xiEkxVHf0+BPqs7MAgBbeGnYkxMEs9l3BHmHSXlhS9twt8J9/H6xLfrrBdlWvGItwx5eZLcUFL3K8i5iEtOwKCKCU2cyYwBAx+fjghBmap99QHuHbmNlgM/2Wc0++D4ungOX2Irgrs6UW4RTQ53qRE9sYg8o13DJPg5m7oxTXhPDezB3s5PgaOpKvW2WwxAldQ9HsQ7ryYcLlYVAZF0xaAYHfynNSg39MlZ/lpbkYxCV63bp1ODa2RtRDPGjiwVpFlqz/FQcO94P94DygdZ1F0rCqCoxTk8hHcSg0F4veE7JkF45JAFSodwbooPGvAkMpGoxdeEk1Fk+bh4IpFWVQLgb/xQML2kEW8gtXBrdSgjos9ujOzYEaHNu4wrq0t3BwwBNkOluFjQHbXRJKlvAqXt8Qnx+w5ltkPpA/zI6NTlBuadCnzHI7QYm8XZOe+QRnWAwGBoArWvU88UcdWnASSCl5YV6dpknMHHg76elwQCGm6JNfs51YCyXsYORWo+hCjpAZufpHQpCL3jkbv2LPcTiCl4K8/Uddtd0/9Ex4OWi+zmFywFyck0Y5hZRbhaQzS3HIl9K/Vq1cnfWKf9k4nPg/+jYjygcGay8Regt56KRTfen80ueYsBYsr9tIjA2G5ZPSfW9smnuS2ibSC71uzwWuUTngOD3N7bJgtLFiJg20N2ZIj2pwJKX6pYisspcnfOlBBOuyxTHlzRV1dyiU141hpUJo/FCTbJjzEsKmwaN4u3Nxn3sz3wwIQI+zHuD0x8mVi0d+06FT+9VvHLp/j2UnJ6rnV7k21ZeMtx7fj7mNx5EmCxQH2cbNw+xd7ZxQ6f9K00yGSDcvNjntvRCHc8l9QPZ3cxnCxxA1W3Ptm827JUIO4lWwBpesiGvGjg/RaiqteOHje9dpDz7yWtgWzflB3aNv3plYoZ+uprkzhWUj85emm+dV/k6xstlVJvBZ7NyRYHNsbfSPWLv925k+ashbMOPGPn84r8n28BTcFE3nW9YVSBUfbjk55+tr5K+uaeW5achLMOL5tzVdcSvMbhqZcl0e5/UR61ura3mOf8PzsB59L+T74avKq8MldL89wdB38DVUDd6DmXBbJa4Y5KKx1Ny6X21qMqpfuevL3F/iprMi7h/ZufrlytHhwHTqSVXiTzNuXAoBeWgdROuOomPjbBm/Fm8sfHYQP0+Kpr6+VJ6sd99vV1p+jM5s+UL0d6VVB8BLJ+q4iu1891TjiWLq1Nh0FmYPvvv5s1cQy/2OK5+yTQOi4QgmPCgWhIUysb7QK43ct+daLpudUuVAQwf3s2vKzcTPcyr2hztMrqaFNx7WyOFfHFhGJISJedkmQHfuDmrHzLJn+wbLH13WwhxN9pfKnoIL7+efrL7nKxLYZo4tDt2ve9tuA6GNRfCU1DCc2gIV9YcDKMQF4qBFiYKAvduPAuIjh5WlVdO3rhtIjPTDmzD2rng3gNdcstJ8BERwP+z6zwt46zN7rqaaaOowK1IVzsYwYKBNUlWhGl0FokAi2DsWwd16SPd58Pw0eYgiA/wPv8yI8SGeyOQAAAABJRU5ErkJggg=="},639:function(e,t,i){"use strict";i.r(t),t.default="data:image/png;base64,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"},64:function(e,t,i){"use strict";i.r(t);var s=i(15),c=(i(174),i(110)),a=i(111),n=i(112),r=i(19),o=i(269),l=i(81),d=i(113),u=i(0),m=i(114),j=i(115),b=i(116),p=i(1),f={background:"transparent",color:"white",left:"50%",top:"65%",position:"absolute",padding:"20px",transform:"translate(-50%, -50%)",alignContent:"center",textAlign:"center",textTransform:"uppercase",verticalAlign:"middle",lineHeight:"20px",fontWeight:"100",letterSpacing:".15em",whiteSpace:"nowrap"},h=function(e,t,s,c,a){var n="".concat(i(130)("".concat(a)).default);return Object(p.jsx)("div",{className:"titleDiv",children:Object(p.jsx)(o.Parallax,{bgImage:n,bgImageStyle:{height:"1000px",width:"100%",opacity:"1"},strength:400,children:Object(p.jsx)("div",{style:{height:"50vh"},children:Object(p.jsxs)("div",{style:f,children:[Object(p.jsxs)("h1",{className:"roleTitle",children:[" ",t," "]}),Object(p.jsxs)("h2",{children:[" ",s]}),Object(p.jsxs)("h3",{children:[" ",c]})]})})})})},g=function(e,t,s,c,a,n,r,o){return Object(p.jsxs)("div",{className:"detailsDiv",children:[Object(p.jsxs)("ul",{className:"detailsList",children:[Object(p.jsx)("li",{className:"listItem1",children:Object(p.jsxs)("h3",{children:[" ",t]})}),Object(p.jsx)("li",{className:"listItem2",children:Object(p.jsxs)("h3",{children:[" ",s]})}),Object(p.jsx)("li",{className:"listItem3",children:Object(p.jsxs)("h3",{children:[" ",c]})}),Object(p.jsx)("li",{className:"listItem4",children:Object(p.jsxs)("h3",{children:[" ",a," "]})}),Object(p.jsxs)("li",{style:{wordSpacing:"0.8em"},className:"listItem5",children:[" ",Object(p.jsxs)("h3",{children:[" ",n," "]})]})]}),Object(p.jsxs)("div",{className:"detailsRightSection",children:[0==e&&Object(p.jsx)("img",{src:i(130)("".concat(r)).default,className:"detailsPic"}),0!=e&&Object(p.jsx)("div",{className:"mediaContainer",children:Object(p.jsx)("div",{className:"videoWrapper",children:Object(p.jsx)("div",{className:"videoContainer",style:{backgroundImage:"url(".concat(i(130)("".concat(r)).default,")")},children:(2==e||3==e||1==e)&&Object(p.jsx)(l.a,{className:"linkContainer",href:o,children:Object(p.jsxs)("button",{className:"youtubeButton",children:[Object(p.jsxs)("p",{children:[" ",1==e?"Visit Website!":"Watch Me!"," "]}),1!=e&&Object(p.jsx)("i",{className:"fa fa-youtube-play",children:" "})]})})})})})]})]})};t.default=function(){var e=Object(u.useState)(!1),t=Object(s.a)(e,2),i=t[0],o=t[1],l=Object(u.useState)(null),f=Object(s.a)(l,2),x=f[0],O=f[1],v=document.getElementsByTagName("BODY")[0],y=document.getElementsByTagName("HTML")[0];return Object(u.useEffect)((function(){function e(){window.scrollY<100?(o(!1),O(!1),console.log("DONT SHOW BG")):window.scrollY<window.innerHeight/2?(O(!1),console.log(" SHOW BG")):(o(!0),O(!0),console.log(" SHOW BG"))}return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[i,x]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.default,{}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{id:"navbar",style:{top:"0%",position:"fixed",zIndex:"999",width:"100%",height:"8vh"},children:Object(p.jsx)(a.default,{showBackground:x})}),i&&Object(p.jsx)("div",{onClick:function(){v.style.scrollSnapType="none",y.style.scrollSnapType="none",setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),300)},children:Object(p.jsx)(m.default,{})}),Object(p.jsx)("section",{id:"home",style:{scrollSnapAlign:"start"},children:Object(p.jsx)(c.default,{})}),Object(p.jsx)("section",{id:"aboutMe",style:{scrollSnapAlign:"start"},children:Object(p.jsx)(d.default,{})}),Object(p.jsx)("section",{id:"experiences",className:"experiencesContainer",children:r.experiences.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:(i=e.id,Object(p.jsxs)("div",{style:{scrollSnapAlign:"start"},children:[h(r.experiences[i].id,r.experiences[i]["title-text1"],r.experiences[i]["title-text2"],r.experiences[i]["title-text3"],r.experiences[i]["title-imageSrc"]),g(r.experiences[i].id,r.experiences[i]["details-text1"],r.experiences[i]["details-text2"],r.experiences[i]["details-text3"],r.experiences[i]["details-text4"],r.experiences[i]["details-text5"],r.experiences[i]["details-imageSrc"],r.experiences[i]["details-href"])]}))});var i}))}),Object(p.jsx)("section",{id:"skills",style:{scrollSnapAlign:"start"},children:Object(p.jsx)(j.default,{})}),Object(p.jsx)("section",{id:"contact",style:{scrollSnapAlign:"start"},children:Object(p.jsx)(b.default,{})})]})]})}},640:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/logo.6ce24c58.svg"},68:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),a=i(8),n=i.n(a),r=(i(173),i(64)),o=i(117),l=i(1);n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(r.default,{})}),document.getElementById("root")),Object(o.default)()}},[[68,1,2]]]);
//# sourceMappingURL=main.64e2f9be.chunk.js.map