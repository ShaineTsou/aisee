(this.webpackJsonpaisee=this.webpackJsonpaisee||[]).push([[0],{366:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(39),s=t.n(i),o=t(16),c=t(34),l=(t(90),t(19)),u={SET_CURRENT_USER:"SET_CURRENT_USER"},d={currentUser:{userId:0,displayName:"",email:"",joinedDate:""}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;return n.type===u.SET_CURRENT_USER?Object(l.a)(Object(l.a)({},e),{},{currentUser:n.payload}):e},m=Object(c.b)({user:p});var b,f,j,h,x,g=Object(c.c)(m,c.a.apply(void 0,[])),O=t(21),y=t(12),v=t(6),w={colors:{globalText:"snow",btnBg:"gold",resultsBg:"snow",resultsText:"black"}},k=t(71),E=t.n(k),S=t(72),C=t(2),N=function(){return Object(C.jsx)(E.a,{id:"tsparticles",options:S})},U=t(9),I=Object(v.b)(b||(b=Object(U.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    min-height: 100vh;\n    font-family: 'Kalam', cursive;\n    text-align: center;\n    background: linear-gradient(to right, rgb(119, 175, 253), rgb(255, 77, 148));\n    color: ",";\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    cursor: pointer;\n\n    &:hover {\n        color: gold;\n    }\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  p, button, input, span {\n    font-family: 'Montserrat', sans-serif;\n  }\n"])),(function(e){return e.theme.colors.globalText})),T=t(76),z=function(e){var n=e.title,t=e.description,a=e.image,r="aiSee",i="https://shainetsou.github.io",s="".concat(i,"/aisee-twitter-image.png"),o=Object(y.h)().pathname,c={title:n||r,description:t||"A full-stack color detection app that shows the hex code, density and the closest W3C color name for each identified color in an image",image:"".concat(i).concat(a||"/aisee.png"),url:"".concat(i).concat(o)};return Object(C.jsxs)(T.a,{title:n,titleTemplate:"%s | ".concat(r),defaultTitle:r,children:[Object(C.jsx)("html",{lang:"en"}),Object(C.jsx)("meta",{name:"description",content:c.description}),Object(C.jsx)("meta",{name:"image",content:c.image}),Object(C.jsx)("meta",{property:"og:title",content:c.title}),Object(C.jsx)("meta",{property:"og:description",content:c.description}),Object(C.jsx)("meta",{property:"og:image",content:c.image}),Object(C.jsx)("meta",{property:"og:image:width",content:"1280"}),Object(C.jsx)("meta",{property:"og:image:height",content:"640"}),Object(C.jsx)("meta",{property:"og:url",content:c.url}),Object(C.jsx)("meta",{property:"og:type",content:"website"}),Object(C.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(C.jsx)("meta",{property:"twitter:title",content:c.title}),Object(C.jsx)("meta",{property:"twitter:description",content:c.description}),Object(C.jsx)("meta",{property:"twitter:creator",content:"@ShaineTsou"}),Object(C.jsx)("meta",{property:"twitter:image",content:s})]})},R=v.d.header(f||(f=Object(U.a)(["\n  width: 100%;\n  position: relative;\n"]))),V=v.d.nav(j||(j=Object(U.a)(['\n  width: 100%;\n  height: 80px;\n  padding: 0 20px;\n  position: fixed;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  .logo-container {\n    text-align: start;\n    width: 30%;\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      color: inherit;\n      filter: drop-shadow(0px 0px 15px #ccc);\n    }\n\n    .logo {\n      width: 70px;\n      height: 70px;\n    }\n\n    .logo-text {\n      font-family: "Kalam", cursive;\n      font-size: 1.75em;\n      font-weight: 700;\n      letter-spacing: 3px;\n\n      @media screen and (max-width: 480px) {\n        display: none;\n      }\n    }\n  }\n\n  .options-container {\n    display: flex;\n    justify-content: end;\n    width: 70%;\n\n    .option {\n      display: flex;\n      align-items: center;\n      margin: 0 15px;\n      font-size: 1.2em;\n    }\n  }\n']))),_=function(e){return{type:u.SET_CURRENT_USER,payload:e}},P=["title","titleId"];function q(){return q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},q.apply(this,arguments)}function D(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function H(e,n){var t=e.title,r=e.titleId,i=D(e,P);return a.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",ref:n,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,h||(h=a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),x||(x=a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"})))}var F,M,B,J,A,L,Y,K,W,X,G,Q,Z,$,ee=a.forwardRef(H),ne=(t.p,t.p+"static/media/logo.a8624b64.png"),te=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(n){return e(_(n))}}}))((function(e){var n=e.currentUser,t=e.setCurrentUser,a=n.userId;return Object(C.jsx)(R,{children:Object(C.jsxs)(V,{children:[Object(C.jsxs)(O.b,{to:"/aisee/",className:"logo-container",children:[Object(C.jsx)("img",{src:ne,alt:"website logo",className:"logo"}),Object(C.jsx)("span",{className:"logo-text",children:"aiSee"})]}),Object(C.jsx)("div",{className:"options-container",children:a>0?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(O.b,{to:"/aisee/signin",className:"option",onClick:function(){t({userId:0,displayName:"",email:"",joinedDate:""})},children:"Sign Out"}),Object(C.jsx)(O.b,{to:"/aisee/profile",className:"option",children:Object(C.jsx)(ee,{})})]}):Object(C.jsx)(O.b,{to:"/aisee/signin",className:"option",children:"Sign In / Up"})})]})})})),ae=t(17),re=v.d.div(F||(F=Object(U.a)(["\n  width: 100%;\n  min-height: 100vh;\n  padding: 20px;\n  padding-top: 60px;\n"]))),ie=function(e){var n=e.children;return Object(C.jsx)(re,{children:n})},se=v.d.div(M||(M=Object(U.a)(["\n  display: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.2);\n  z-index: 2000;\n\n  .loader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),(function(e){return e.loaderHidden?"none":"block"})),oe=["title","titleId"];function ce(){return ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ce.apply(this,arguments)}function le(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function ue(e,n){var t=e.title,r=e.titleId,i=le(e,oe);return a.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:n,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,B||(B=a.createElement("g",{transform:"rotate(0 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#e40303"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})))),J||(J=a.createElement("g",{transform:"rotate(30 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#e40303"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})))),A||(A=a.createElement("g",{transform:"rotate(60 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#ff8c00"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})))),L||(L=a.createElement("g",{transform:"rotate(90 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#ff8c00"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})))),Y||(Y=a.createElement("g",{transform:"rotate(120 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#ffed00"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})))),K||(K=a.createElement("g",{transform:"rotate(150 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#ffed00"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})))),W||(W=a.createElement("g",{transform:"rotate(180 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#008026"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})))),X||(X=a.createElement("g",{transform:"rotate(210 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#008026"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})))),G||(G=a.createElement("g",{transform:"rotate(240 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#004dff"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})))),Q||(Q=a.createElement("g",{transform:"rotate(270 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#004dff"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})))),Z||(Z=a.createElement("g",{transform:"rotate(300 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#750787"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})))),$||($=a.createElement("g",{transform:"rotate(330 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#750787"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))))}var de,pe,me,be,fe,je,he,xe,ge,Oe,ye,ve,we,ke,Ee,Se,Ce,Ne,Ue=a.forwardRef(ue),Ie=(t.p,function(e){var n=e.loaderHidden;return Object(C.jsx)(se,{loaderHidden:n,children:Object(C.jsx)(Ue,{className:"loader"})})}),Te=v.d.p(de||(de=Object(U.a)(["\n  font-size: 1.25em;\n  margin: 0px 0 15px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 1em;\n  }\n"]))),ze=v.d.p(pe||(pe=Object(U.a)(["\n  color: blue;\n  font-weight: 700;\n"]))),Re=v.d.h1(me||(me=Object(U.a)(["\n  margin: 15px 0 0px;\n  font-size: 2.75em;\n  letter-spacing: 10px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 2em;\n    letter-spacing: 5px;\n  }\n"]))),Ve=function(e){var n=e.children;return Object(C.jsx)(Re,{children:n})},_e=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var n=e.currentUser;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Ve,{children:"aiSee"}),Object(C.jsx)(Te,{children:"shows you the hex code, the density and the closest color name in the image"}),Object(C.jsx)(ze,{children:Object(C.jsx)(O.b,{to:"/aisee/signin",children:n.userId>0?"":"Sign in/up to save results!"})})]})})),Pe=Object(v.c)(be||(be=Object(U.a)(["\n  border-radius: 10px;\n"]))),qe=Object(v.c)(fe||(fe=Object(U.a)(["\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n"]))),De=v.d.button(je||(je=Object(U.a)(["\n  margin: 10px;\n  padding: 10px 15px;\n  background-color: ",";\n  outline: none;\n  border: none;\n\n  font-size: 1em;\n  font-weight: 700;\n  letter-spacing: 1px;\n\n  &:hover {\n    filter: brightness(1.1);\n  }\n\n  ","\n"])),(function(e){return e.theme.colors.btnBg}),Pe),He=function(e){var n=e.children,t=e.className,a=e.onClick;return Object(C.jsx)(De,{className:t,onClick:a,children:n})},Fe=v.d.div(he||(he=Object(U.a)(["\n  padding: 0 10px;\n"]))),Me=v.d.input(xe||(xe=Object(U.a)(["\n  margin: 10px;\n  padding: 10px 15px;\n  width: 50%;\n  min-width: 325px;\n\n  outline: none;\n  border: none;\n  padding: 10px 15px;\n  cursor: pointer;\n  font-size: 1em;\n\n  ","\n\n  &:focus {\n    filter: drop-shadow(0px 0px 10px gold);\n  }\n\n  @media screen and (max-width: 480px) {\n    min-width: 200px;\n  }\n"])),Pe),Be=function(e){var n=e.inputText,t=e.handleInputChange,a=e.handleImageSubmit;return Object(C.jsxs)(Fe,{children:[Object(C.jsx)(Me,{type:"text",name:"image-link",id:"image-link",placeholder:"Put image link here to detect colors",value:n,onChange:t}),Object(C.jsx)(He,{onClick:a,children:"Detect"})]})},Je=v.d.div(ge||(ge=Object(U.a)(["\n  display: ",";\n  flex-wrap: wrap;\n  justify-content: center;\n"])),(function(e){return e.colorDetectionHidden?"none":"flex"})),Ae=v.d.div(Oe||(Oe=Object(U.a)(["\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex;\n  height: 425px;\n  overflow: hidden;\n\n  ","\n  ","\n\n  img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 450px;\n    height: auto;\n  }\n"])),Pe,qe),Le=v.d.div(ye||(ye=Object(U.a)(["\n  width: 300px;\n  margin: 10px;\n  padding: 5px 10px;\n  color: ",";\n  background-color: ",";\n\n  ","\n  ","\n\n  .instruction {\n    margin: 5px 0;\n  }\n"])),(function(e){return e.theme.colors.resultsText}),(function(e){return e.theme.colors.resultsBg}),Pe,qe),Ye=v.d.button(ve||(ve=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 100%;\n  margin: 5px 0;\n  padding: 10px;\n  font-size: 0.85em;\n  border: 1px solid silver;\n\n  background-color: ",";\n\n  ","\n\n  span {\n    color: ",";\n  }\n"])),(function(e){return e.bgColor}),Pe,(function(e){return e.textColor})),Ke=function(e){var n=e.bgHex,t=e.density,a=e.name,r=Math.round(100*t,0);return Object(C.jsxs)(Ye,{bgColor:n,textColor:function(e){return.299*parseInt(e.slice(1,3),16)+.587*parseInt(e.slice(3,5),16)+.114*parseInt(e.slice(5,7),16)>186?"black":"white"}(n),onClick:function(){window.navigator.clipboard.writeText(n)},children:[Object(C.jsx)("span",{className:"color-name",children:"".concat(a," ").concat(n)}),Object(C.jsxs)("span",{className:"color-density",children:[r,"%"]})]})},We=function(e){var n=e.imageUrl,t=e.colorDetectionHidden,a=e.colors;return Object(C.jsxs)(Je,{colorDetectionHidden:t,children:[Object(C.jsx)(Ae,{children:Object(C.jsx)("img",{src:n,alt:""})}),Object(C.jsxs)(Le,{children:[Object(C.jsx)("p",{className:"instruction",children:"\u2193 Click to copy hex code \u2193"}),a.map((function(e){var n=e.raw_hex,t=e.value,a=e.w3c;return Object(C.jsx)(Ke,{bgHex:n,density:t,name:a.name},n)}))]})]})},Xe=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var n=e.currentUser.userId,t=Object(a.useState)(""),r=Object(ae.a)(t,2),i=r[0],s=r[1],o=Object(a.useState)(""),c=Object(ae.a)(o,2),l=c[0],u=c[1],d=Object(a.useState)(!0),p=Object(ae.a)(d,2),m=p[0],b=p[1],f=Object(a.useState)([]),j=Object(ae.a)(f,2),h=j[0],x=j[1],g=Object(a.useState)(!0),O=Object(ae.a)(g,2),y=O[0],v=O[1];return Object(C.jsxs)(ie,{children:[Object(C.jsx)(Ie,{loaderHidden:y}),Object(C.jsx)(_e,{}),Object(C.jsx)(Be,{inputText:i,handleInputChange:function(e){s(e.target.value),b(!0),u("")},handleImageSubmit:function(){i.length&&(u(i),s(""),v(!1),fetch("https://aisee-server.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:i})}).then((function(e){return e.json()})).then((function(e){e&&(x(e.outputs[0].data.colors),v(!0),b(!1),0!==n&&fetch("https://aisee-server.herokuapp.com/image",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,imageUrl:i,colors:e.outputs[0].data.colors})}).then((function(e){return e.json()})).then((function(e){return"storing colors success"===e?"Result update success":"User not found"})).catch((function(e){return"Unable to submit result"})))})).catch((function(e){return"Error detecting image"})))}}),Object(C.jsx)(We,{imageUrl:l,colorDetectionHidden:m,colors:h})]})})),Ge=t(31),Qe=v.d.div(we||(we=Object(U.a)(["\n  margin: 50px auto 0;\n  padding: 20px 30px;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid silver;\n\n  ","\n  ","\n\n  a {\n    text-align: end;\n  }\n\n  .warning {\n    color: red;\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 80%;\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 100%;\n  }\n"])),qe,Pe),Ze=function(e){var n=e.children;return Object(C.jsx)(Qe,{children:n})},$e=t(80),en=Object(v.c)(ke||(ke=Object(U.a)(["\n  top: -1.3em;\n  font-size: 0.85em;\n"]))),nn=v.d.div(Ee||(Ee=Object(U.a)(["\n  position: relative;\n  margin: 35px 0;\n\n  .form-input {\n    width: 100%;\n    display: block;\n    background-color: transparent;\n    padding: 10px;\n\n    outline: none;\n    border: none;\n    border-bottom: 1px solid snow;\n\n    color: snow;\n    font-size: 1.2em;\n\n    &:focus ~ .form-input-label {\n      ",'\n    }\n  }\n\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n\n  .form-input-label {\n    position: absolute;\n    left: 5px;\n    top: 10px;\n\n    font-size: 1em;\n    font-weight: normal;\n\n    transition: 300ms ease all;\n\n    &.shrink {\n      ',"\n    }\n  }\n"])),en,en),tn=["handleChange","label"],an=function(e){var n=e.handleChange,t=e.label,a=Object($e.a)(e,tn);return Object(C.jsxs)(nn,{children:[Object(C.jsx)("input",Object(l.a)({className:"form-input",onChange:n},a)),t?Object(C.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:t}):null]})},rn=Object(o.b)(null,(function(e){return{setCurrentUser:function(n){return e(_(n))}}}))((function(e){var n=e.setCurrentUser,t=Object(a.useState)(""),r=Object(ae.a)(t,2),i=r[0],s=r[1],o=Object(a.useState)({email:"",password:""}),c=Object(ae.a)(o,2),u=c[0],d=c[1],p=u.email,m=u.password,b=Object(y.g)(),f=function(e){var n=e.target,t=n.name,a=n.value;d(Object(l.a)(Object(l.a)({},u),{},Object(Ge.a)({},t,a)))};return Object(C.jsxs)(ie,{children:[Object(C.jsx)(z,{title:"Sign In",description:"Sign in your aiSee account to save results"}),Object(C.jsxs)(Ze,{children:[Object(C.jsx)(Ve,{children:"Sign In"}),Object(C.jsxs)("form",{className:"sign-in-form",onSubmit:function(e){e.preventDefault();var t={email:p,password:m};fetch("https://aisee-server.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.user_id?(b.push("/aisee/profile"),n({userId:e.user_id,displayName:e.display_name,email:e.email,joinedDate:e.joined_date})):s(e)})).catch((function(e){return"Error signing in"}))},children:[Object(C.jsx)(an,{type:"email",name:"email",value:p,handleChange:f,label:"Email",required:!0}),Object(C.jsx)(an,{type:"password",name:"password",value:m,handleChange:f,label:"Password",required:!0}),Object(C.jsx)("p",{className:"warning",children:i}),Object(C.jsx)(He,{type:"submit",children:"Sign In"})]}),Object(C.jsx)(O.b,{to:"/aisee/signup",children:"Sign up?"})]})]})})),sn=Object(o.b)(null,(function(e){return{setCurrentUser:function(n){return e(_(n))}}}))((function(e){var n=e.setCurrentUser,t=Object(a.useState)(""),r=Object(ae.a)(t,2),i=r[0],s=r[1],o=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(ae.a)(o,2),u=c[0],d=c[1],p=u.displayName,m=u.email,b=u.password,f=u.confirmPassword,j=Object(y.g)(),h=function(e){var n=e.target,t=n.name,a=n.value;d(Object(l.a)(Object(l.a)({},u),{},Object(Ge.a)({},t,a)))};return Object(C.jsxs)(ie,{children:[Object(C.jsx)(z,{title:"Sign Up",description:"Sign up an aiSee account to save results"}),Object(C.jsxs)(Ze,{children:[Object(C.jsx)(Ve,{children:"Sign Up"}),Object(C.jsxs)("form",{className:"sign-up-form",onSubmit:function(e){if(e.preventDefault(),b===f){var t={displayName:p,email:m,password:b};fetch("https://aisee-server.herokuapp.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.user_id?(j.push("/aisee/profile"),n({userId:e.user_id,displayName:e.display_name,email:e.email,joinedDate:e.joined_date})):s("Unable to sign up")})).catch((function(e){return"Error signing up"}))}else s("Please type in the same password in confirm password")},children:[Object(C.jsx)(an,{type:"text",name:"displayName",value:p,handleChange:h,label:"Name",required:!0}),Object(C.jsx)(an,{type:"email",name:"email",value:m,handleChange:h,label:"Email",required:!0}),Object(C.jsx)(an,{type:"password",name:"password",value:b,handleChange:h,label:"Password",required:!0}),Object(C.jsx)(an,{type:"password",name:"confirmPassword",value:f,handleChange:h,label:"Confirm Password",required:!0}),Object(C.jsx)("p",{className:"warning",children:i}),Object(C.jsx)(He,{type:"submit",children:"Sign Up"})]}),Object(C.jsx)(O.b,{to:"/aisee/signin",children:"Sign In?"})]})]})})),on=v.d.div(Se||(Se=Object(U.a)(["\n  width: 85%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n\n  background-color: snow;\n  border-bottom: 1px solid silver;\n  padding: 15px;\n  ","\n\n  p {\n    margin: 15px;\n    font-weight: 700;\n    color: black;\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 100%;\n  }\n"])),qe),cn=v.d.div(Ce||(Ce=Object(U.a)(["\n  width: 250px;\n  margin: 0 15px;\n  display: flex;\n  align-items: center;\n  justify-content: flex;\n\n  overflow: hidden;\n  ","\n\n  img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 200px;\n  }\n"])),Pe),ln=v.d.div(Ne||(Ne=Object(U.a)(["\n  width: 100%;\n  margin: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),un=function(e){var n=e.result;return Object(C.jsxs)(on,{children:[Object(C.jsx)("p",{className:"submit-date",children:n.submitDate}),Object(C.jsxs)(ln,{children:[Object(C.jsx)("a",{href:n.imageUrl,target:"_blank",rel:"noreferrer noopener",children:Object(C.jsx)(cn,{children:Object(C.jsx)("img",{src:n.imageUrl,alt:"",className:"result-image"})})}),Object(C.jsx)("div",{className:"tags-container",children:n.colors.map((function(e){var n=e.colorId,t=e.density,a=e.hexColor,r=e.w3cName;return Object(C.jsx)(Ke,{bgHex:a,density:t,name:r},n)}))})]})]})},dn=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var n=e.currentUser,t=n.userId,r=n.displayName,i=Object(a.useState)(!1),s=Object(ae.a)(i,2),o=s[0],c=s[1],l=Object(a.useState)([]),u=Object(ae.a)(l,2),d=u[0],p=u[1];return Object(a.useEffect)((function(){var e=!0;return 0!==t&&fetch("https://aisee-server.herokuapp.com/profile/".concat(t)).then((function(e){return e.json()})).then((function(n){e&&(Array.isArray(n)&&n.length&&p(n),c(!0))})),function(){e=!1}}),[t]),Object(C.jsxs)(ie,{children:[Object(C.jsx)(z,{title:r}),Object(C.jsx)(Ie,{loaderHidden:o}),Object(C.jsxs)(Ve,{children:["Hello, ",r]}),d.length?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Your Results"}),Object(C.jsx)("p",{children:"\u2193 Click on color tag to copy hex code \u2193"}),d.map((function(e){return Object(C.jsx)(un,{result:e},e.resultId)}))]}):Object(C.jsx)("p",{children:"You haven't detected any pictures yet."})]})})),pn=function(){return Object(C.jsxs)(ie,{children:[Object(C.jsx)(Ve,{children:"404"}),Object(C.jsx)(Ve,{children:"Page Not Found"})]})};var mn=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var n=e.currentUser;return Object(C.jsxs)(O.a,{children:[Object(C.jsx)(z,{}),Object(C.jsxs)(v.a,{theme:w,children:[Object(C.jsx)(I,{}),Object(C.jsx)(N,{}),Object(C.jsx)(te,{}),Object(C.jsxs)(y.d,{children:[Object(C.jsx)(y.b,{exact:!0,path:"/aisee/",children:Object(C.jsx)(Xe,{})}),Object(C.jsx)(y.b,{exact:!0,path:"/aisee/signin",render:function(){return n.userId>0?Object(C.jsx)(y.a,{to:"/aisee/profile"}):Object(C.jsx)(rn,{})}}),Object(C.jsx)(y.b,{exact:!0,path:"/aisee/signup",render:function(){return n.userId>0?Object(C.jsx)(y.a,{to:"/aisee/profile"}):Object(C.jsx)(sn,{})}}),Object(C.jsx)(y.b,{exact:!0,path:"/aisee/profile",render:function(){return n.userId>0?Object(C.jsx)(dn,{}):Object(C.jsx)(y.a,{to:"/aisee/signin"})}}),Object(C.jsx)(y.b,{path:"/aisee/",component:pn})]})]})]})})),bn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,367)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(o.a,{store:g,children:Object(C.jsx)(mn,{})})}),document.getElementById("root")),bn()},72:function(e){e.exports=JSON.parse('{"autoPlay":true,"background":{"opacity":0},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"fullScreen":{"enable":true,"zIndex":-1},"detectRetina":true,"duration":0,"fpsLimit":60,"interactivity":{"detectsOn":"window","events":{"onClick":{"enable":true,"mode":"repulse"},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":true,"mode":"bubble","parallax":{"enable":false,"force":2,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"easing":"ease-out-quad","factor":1,"maxSpeed":50,"speed":1},"bounce":{"distance":200},"bubble":{"distance":250,"duration":2,"mix":false,"opacity":0,"size":0},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":400,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"default":true,"groups":[],"quantity":4},"remove":{"quantity":2},"repulse":{"distance":400,"duration":0.4,"factor":100,"speed":1,"maxSpeed":50,"easing":"ease-out-quad"},"slow":{"factor":3,"radius":200},"trail":{"delay":1,"pauseOnStop":false,"quantity":1}}},"manualParticles":[],"motion":{"disable":false,"reduce":{"factor":4,"value":true}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"collisions":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce","overlap":{"enable":true,"retries":0}},"color":{"value":"#ffffff","animation":{"h":{"count":0,"enable":false,"offset":0,"speed":1,"sync":true},"s":{"count":0,"enable":false,"offset":0,"speed":1,"sync":true},"l":{"count":0,"enable":false,"offset":0,"speed":1,"sync":true}}},"destroy":{"mode":"none","split":{"count":1,"factor":{"random":{"enable":false,"minimumValue":0},"value":3},"rate":{"random":{"enable":false,"minimumValue":0},"value":{"min":4,"max":9}},"sizeOffset":true}},"gradient":[],"groups":{},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"links":{"blink":false,"color":{"value":"#ffffff"},"consent":false,"distance":150,"enable":false,"frequency":1,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"#00ff00"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"move":{"angle":{"offset":0,"value":90},"attract":{"distance":200,"enable":false,"rotate":{"x":600,"y":600}},"decay":0,"distance":{},"direction":"none","drift":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"inverse":false,"maxSpeed":50},"path":{"clamp":true,"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false,"options":{}},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":true,"size":false,"speed":1,"spin":{"acceleration":0,"enable":false},"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#000000"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":160},"opacity":{"random":{"enable":true,"minimumValue":0.1},"value":{"min":0,"max":1},"animation":{"count":0,"enable":true,"speed":1,"sync":false,"destroy":"none","startValue":"random","minimumValue":0}},"orbit":{"animation":{"count":0,"enable":false,"speed":1,"sync":false},"enable":false,"opacity":1,"rotation":{"random":{"enable":false,"minimumValue":0},"value":45},"width":1},"reduceDuplicates":false,"repulse":{"random":{"enable":false,"minimumValue":0},"value":0,"enabled":false,"distance":1,"duration":1,"factor":1,"speed":1},"roll":{"darken":{"enable":false,"value":0},"enable":false,"enlighten":{"enable":false,"value":0},"mode":"vertical","speed":25},"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","path":false},"shadow":{"blur":0,"color":{"value":"#000000"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{},"type":"circle"},"size":{"random":{"enable":true,"minimumValue":1},"value":{"min":1,"max":4},"animation":{"count":0,"enable":false,"speed":4,"sync":false,"destroy":"none","startValue":"random","minimumValue":0.3}},"stroke":{"width":0},"tilt":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","enable":false},"twinkle":{"lines":{"enable":false,"frequency":0.05,"opacity":1},"particles":{"enable":false,"frequency":0.05,"opacity":1}},"wobble":{"distance":5,"enable":false,"speed":50},"zIndex":{"random":{"enable":false,"minimumValue":0},"value":0,"opacityRate":1,"sizeRate":1,"velocityRate":1}},"pauseOnBlur":true,"pauseOnOutsideViewport":true,"responsive":[],"themes":[],"zLayers":100}')}},[[366,1,2]]]);
//# sourceMappingURL=main.5a5db178.chunk.js.map