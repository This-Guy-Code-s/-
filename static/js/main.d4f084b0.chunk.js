(this["webpackJsonp-"]=this["webpackJsonp-"]||[]).push([[0],{132:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),l=n(8),c=n(14),s=n(15),u=n(17),m=n(16),d=(n(89),n(155)),p=n(20),f=n(139),b=n(161),g=n(140),h=n(141),w=n(142),k=n(162),v=n(163),x=n(143),y=n(144),E=n(145),O=n(19),j=n(9),z=n(35),N=n.n(z),C=n(10),W=n(37),S=n.n(W),M=n(38),T=n.n(M);function I(){var e=Object(j.a)(["\n\n\n\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-image:url(",");\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n \n  "]);return I=function(){return e},e}function F(){var e=Object(j.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-image:url('');\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n  "]);return F=function(){return e},e}function D(){var e=Object(j.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-image:url('');\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n \n  "]);return D=function(){return e},e}function L(){var e=Object(j.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-image:url(",");\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n  "]);return L=function(){return e},e}function A(){var e=Object(j.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-image:url(",");\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n  "]);return A=function(){return e},e}function B(){var e=Object(j.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-position:center;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n  "]);return B=function(){return e},e}var Y=C.a.div(B());Y=null===window.sessionStorage.getItem("toggleDarkMode")?C.a.div(A(),window.innerWidth<=500?S.a:T.a):null!==window.sessionStorage.getItem("toggleDarkMode")&&"true"!==window.sessionStorage.getItem("toggleDarkMode")?C.a.div(L(),window.innerWidth<=500?S.a:T.a):C.a.div(D());var R=function(){return function(e){e({type:"LOADING"}),N.a.get("https://tgcz.herokuapp.com/api/myWork").then((function(t){e({type:"SUCCESS",payload:t.data.work})})).catch((function(t){e({type:"ERR",payload:t})}))}},Z=function(e){return function(t){return t({type:"BTN",payload:e})}},H=function(e){return function(t){return e?(Y=C.a.div(F()),window.sessionStorage.setItem("toggleDarkMode",e),t({type:"MODE",payload:e})):(Y=C.a.div(I(),window.innerWidth<=500?S.a:T.a),window.sessionStorage.setItem("toggleDarkMode",e),t({type:"MODE",payload:e}))}},X={display:"flex",gridGap:"3px"},P={display:"flex",WebkitTextFillColor:"#4df7ff",color:"#4df7ff"},q={display:"flex",WebkitTextFillColor:"#fff",color:"#fff"},_={WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,.5)"},G={WebkitBorderRadius:"100%",borderRadius:"100%",border:"double 3px #240090",WebkitBoxShadow:"0 0 10px #4df7ff",boxShadow:"0 0 10px #4df7ff"},J={width:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder",display:"flex",gridGap:"3px"},U=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={tooltipOpen:!1,currLink:"Projects",isOpen:!1,xOutLight:{marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"yellow"},xOutDark:{marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"darkgray"}},a.toggle=a.toggle.bind(Object(p.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen,tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,{expand:"md",style:{WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,.5)"}},r.a.createElement("div",null,r.a.createElement("span",{className:"navbar-brand",id:"me"},r.a.createElement("span",{style:X},r.a.createElement("figure",null,r.a.createElement("img",{src:this.props.me,style:G,alt:"me",width:"50",height:"50"})),r.a.createElement("b",{style:P},"Guyton")," ","  "," ",r.a.createElement("b",{style:q},"Oriji"))),r.a.createElement(b.a,{style:J,placement:"bottom",isOpen:this.state.tooltipOpen,autohide:!1,target:"me"},r.a.createElement("i",{className:"fab fa-youtube",style:{cursor:"pointer",WebkitTextFillColor:"red"},onClick:function(){return alert("Youtube Channel comming soon...")}}),r.a.createElement("i",{className:"fab fa-github",style:{cursor:"pointer",WebkitTextFillColor:"#888"},onClick:function(){return window.location.href="https://www.github.com/guytonoriji"}}),r.a.createElement("i",{className:"fab fa-twitter",style:{cursor:"pointer",WebkitTextFillColor:"rgb(29, 161, 242)"},onClick:function(){return window.location.href="https://www.twitter.com/iSpam_The_Code"}}),this.props.mode?r.a.createElement("i",{className:"fas fa-sun",title:"Light Mode!",style:this.state.xOutLight,onClick:function(){return e.props.DarkMode(!1)}}):r.a.createElement("i",{className:"fas fa-moon",title:"Dark Mode!",style:this.state.xOutDark,onClick:function(){return e.props.DarkMode(!0)}}))),r.a.createElement(g.a,{onClick:this.toggle,style:{WebkitTextFillColor:"azure",color:"azure"}},r.a.createElement("i",{className:"fas fa-ellipsis-v"})),r.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(w.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,{nav:!0,inNavbar:!0},r.a.createElement(v.a,{nav:!0,caret:!0},r.a.createElement("b",{style:{fontSize:window.innerWidth<=700?"1rem":"1.1rem"}},"Games")),r.a.createElement(x.a,{style:_,left:"true"},this.props.work?this.props.work.map((function(e){return"PLAY"===e.action&&r.a.createElement(y.a,{style:_,href:e.link,key:e.id},e.title)})):r.a.createElement(E.a,{size:"sm",color:"info"})))),"Home"===this.props.compRendered?r.a.createElement("span",{onClick:function(){return e.props.navBar("Projects")},style:{cursor:"pointer",fontSize:window.innerWidth<=700?"1rem":"1.3rem"}},r.a.createElement("b",null,"Projects")):r.a.createElement("span",{onClick:function(){return e.props.navBar("Home")},style:{cursor:"pointer",fontSize:window.innerWidth<=700?"1rem":"1.3rem"}},r.a.createElement("b",null,"Home")))))}}]),n}(a.Component),V=Object(O.b)((function(e){return Object(l.a)({},e)}),{getMyWork:R,navBar:function(e){return function(t){switch(e){case"Home":case"Projects":return window.sessionStorage.setItem("nav",e),t({type:"NAVIGATION",payload:e});default:return!1}}},DarkMode:H})(U),K=n(146);function $(){var e=Object(j.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-grid-gap:10px;\ngrid-gap:10px;\n\n\n\n \n\n@media screen and (max-width:500px){\n-webkit-flex-direction:column;\nflex-direction:column;\n\n}\n\n\n\n\n\n@media screen and (max-width:900px){\n\t\n\tfigure{\n\t\tmargin-top:-50px;\n\t\t\n\t}\n\n}\n\n\n"]);return $=function(){return e},e}function Q(){var e=Object(j.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\n-webkit-align-items:flex-start;\njustify-content:flex-start;\nalign-items:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n"]);return Q=function(){return e},e}var ee=C.a.div(Q()),te=C.a.div($()),ne={backgroundColor:"rgba(0,0,0,.5)",WebkitTextFillColor:"azure",color:"azure",border:"double rgba(250,250,250,.5)",WebkitBoxShadow:"2px 0 10px #888",boxShadow:"2px 0 10px #888"},ae=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggle=function(){return a.setState({tooltipOpen:!a.state.tooltipOpen})},a.state={tooltipOpen:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(K.a,{style:ne},r.a.createElement("div",{className:"myRole"},r.a.createElement("p",{className:"error"},"Full",r.a.createElement("span",null,"-"),"Stack"),r.a.createElement("p",{className:"code"},"Web",r.a.createElement("span",null,"-"),r.a.createElement("span",null,"Dev"))),r.a.createElement("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.65rem"}},"I am here to help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technologies."))))}}]),n}(r.a.Component);function re(){var e=Object(j.a)(["\n\t-webkit-height:125px;\n\t-webkit-width:125px;\n\theight:125px;\n\twidth:125px;\n\tbackground-color:rgba(0,0,0,.5);\n\t-webkit-text-fill-color:azure;\n\tcolor:azure;\n\tborder:double rgba(250,250,250,.5);\n \t-webkit-box-shadow:0 0 10px #888;\n \tbox-shadow:0 0 10px #888;\n \t-webkit-border-radius:50%;\n \tborder-radius:50%;\n \tpadding:15px 10px;\n \tdisplay:flex;\n \t-webkit-justify-content:center;\n \t-webkit-align-items:center;\n \tjustify-content:center;\n \talign-items:center;\n\n@media(max-width:500px){\n-webkit-height:110px;\n-webkit-width:110px;\nheight:110px;\nwidth:110px;\n}\n\n"]);return re=function(){return e},e}function ie(){var e=Object(j.a)(["\npadding-top:25px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\nalign-items:center;\nfont-size:",";\nfont-weight:bolder;\n\n\nfigure i{\n\tfont-size:",";\n}\n\n\n\n\n\n\n@media(max-width:500px){\nflex-direction:column;\npadding:0;\n}\n"]);return ie=function(){return e},e}function oe(){var e=Object(j.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\n-webkit-flex-direction:row;\n-webkit-width:100%;\njustify-content:center;\nflex-direction:row;\nwidth:100%;\n}\n\n"]);return oe=function(){return e},e}function le(){var e=Object(j.a)(["\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-width:100%;\nwidth:100%;\n}\n"]);return le=function(){return e},e}var ce=C.a.div(le()),se=C.a.div(oe()),ue=C.a.div(ie(),window.innerWidth<=300?".6rem":"1rem",window.innerWidth<=300?"1.3rem":"2rem"),me=C.a.div(re()),de=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(se,null,r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-layer-group ",style:{fontSize:window.innerWidth<=700?"3rem":"4rem"}}),r.a.createElement("figcaption",{style:{fontSize:window.innerWidth<=700?"1.8rem":"2.7rem",fontFamily:"Permanent Marker, cursive"}},"My Stack"))),r.a.createElement(ce,null,r.a.createElement(ue,null,r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-html5"}),r.a.createElement("figcaption",null,"HTML5"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-css3-alt"}),r.a.createElement("figcaption",null,"CSS3"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-bootstrap"}),r.a.createElement("figcaption",null,"Bootstrap"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-less"}),r.a.createElement("figcaption",null,"CSS Compiler")))),r.a.createElement(ue,null,r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-js-square"}),r.a.createElement("figcaption",null,"Javascript"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("figcaption",null,"React.js"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-atom"}),r.a.createElement("figcaption",null,"React-Redux"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-node-js"}),r.a.createElement("figcaption",null,"Express.js")))),r.a.createElement(ue,null,r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-node"}),r.a.createElement("figcaption",null,"Node.js"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-table"}),r.a.createElement("figcaption",null,"DB Design"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-database"}),r.a.createElement("figcaption",null,"Knex(Sqlite3)"))),r.a.createElement(me,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-database"}),r.a.createElement("figcaption",null,"postgresql"))))))}}]),n}(r.a.Component),pe=n(47),fe=n.n(pe),be=n(77);function ge(){var e=Object(j.a)(["\ncolor:green;\n-webkit-text-fill-color:green;\n"]);return ge=function(){return e},e}function he(){var e=Object(j.a)(["\ncolor:red;\n-webkit-text-fill-color:red;\n"]);return he=function(){return e},e}var we=C.a.span(he()),ke=C.a.span(ge()),ve={WebkitTextFillColor:"#000",fontWeight:"bolder",fontSize:"1.4rem"},xe={backgroundColor:"rgba(0,0,0,0)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ye={margin:"0",padding:"0",backgroundColor:"rgba(0,0,0,0)",WebkitTextFillColor:"#fff",color:"#fff",border:"double #333 ",borderTop:"none",borderRight:"none",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},Ee={backgroundColor:"rgba(0,0,0,0.4)",WebkitTextFillColor:"#fff",color:"#fff",padding:"0px 10px",width:"320px"},Oe={backgroundColor:"rgba(0,0,0,0)"},je={backgroundColor:"rgba(250,250,250,.5)",fontSize:"1rem",fontWeight:"bolder",borderLeft:"double #000",borderTopLeftRadius:"0%"},ze={backgroundColor:"rgba(0,0,0,.2)",border:"double azure",fontSize:"1.3rem",cursor:"pointer",marginBottom:"15px"},Ne={backgroundColor:"rgba(0,0,0,.5)",border:"double azure",fontSize:window.innerWidth<=500?"1.5rem":"1.8rem",cursor:"pointer",marginBottom:"20px"},Ce={WebkitTextFillColor:"#fff",color:"#fff",textShadow:"0 0 3px #333 "},We=n(76),Se=n(152),Me=n(153),Te=n(154),Ie=n(147),Fe=n(148),De=n(149),Le=n(150),Ae=n(151),Be=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={valOrNah1:"",valOrNah2:"",valOrNah3:"",msg:{name:"",email:"",message:""},errMsg:"",passMsg:""},a.send=a.send.bind(Object(p.a)(a)),a}return Object(s.a)(n,[{key:"send",value:function(e){var t=this;e.preventDefault(),this.state.msg.name.match(/[A-z]/i)?this.setState({valOrNah1:"is-valid"}):this.setState({errMsg:"We Cant Send This, please check for errors",valOrNah1:"is-invalid",passMsg:""}),this.state.msg.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?this.setState({valOrNah2:"is-valid"}):this.setState({errMsg:"We Cant Send This, please check for errors",valOrNah2:"is-invalid",passMsg:""}),!function(e){var t=parseInt(e)+3;return e.match(/[A-z]/i)?(console.log("msg ",e),console.log("check ",t),!0):!!/[0-9]/.test(t)&&(console.log("msg in if",e),console.log("check in if",t),!1)}(this.state.msg.message)?this.setState({errMsg:"We Cant Send This, please check for errors",valOrNah3:"is-invalid",passMsg:""}):this.setState({valOrNah3:"is-valid"}),setTimeout((function(){"is-valid"===t.state.valOrNah1&&"is-valid"===t.state.valOrNah2&&"is-valid"===t.state.valOrNah3?N.a.post("https://tgcz.herokuapp.com/api/admin/inbox",t.state.msg).then((function(e){t.setState({passMsg:"Thank You ".concat(t.state.name," Your Message Was Sent."),valOrNah1:"is-valid",valOrNah2:"is-valid",valOrNah3:"is-valid",errMsg:""}),setTimeout((function(){t.props.toggle(),t.setState({passMsg:"",errMsg:"",msg:{name:"",email:"",message:""},valOrNah1:"",valOrNah2:"",valOrNah3:""})}),2e3)})).catch((function(e){t.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})})):t.setState({errMsg:"We Cant Send This, please check for errors",passMsg:""})}),500),e.target.reset()}},{key:"render",value:function(){var e=this;return r.a.createElement(Ie.a,{style:Ee,onSubmit:this.send,"data-testid":"theForm"},r.a.createElement(Fe.a,null,r.a.createElement(De.a,{htmlFor:"name",style:{WebkitTextFillColor:"#fff",fontWeight:"bolderd"}},"Name:"),r.a.createElement(Le.a,{className:this.state.valOrNah1,type:"text",name:"name",id:"name",value:this.state.msg.name,onChange:function(t){e.setState({msg:Object(l.a)(Object(l.a)({},e.state.msg),{},{name:t.target.value})})},placeholder:"Name...",style:{WebkitTextFillColor:"#000"},required:!0}),r.a.createElement(Ae.a,null,"What name can I refer to you as?")),r.a.createElement(Fe.a,null,r.a.createElement(De.a,{htmlFor:"email",style:{WebkitTextFillColor:"#fff",fontWeight:"bolderd"}},"Email:"),r.a.createElement(Le.a,{className:this.state.valOrNah2,type:"email",name:"email",id:"email",value:this.state.msg.email,onChange:function(t){e.setState({msg:Object(l.a)(Object(l.a)({},e.state.msg),{},{email:t.target.value})})},placeholder:"Email...",style:{WebkitTextFillColor:"#000"},required:!0}),r.a.createElement(Ae.a,null,"You will not recieve any spam or emails period.")),r.a.createElement(Fe.a,null,r.a.createElement(De.a,{htmlFor:"message",style:{WebkitTextFillColor:"#fff",fontWeight:"bolderd"}},"Message:"),r.a.createElement(Le.a,{className:this.state.valOrNah3,type:"textarea",name:"message",id:"message",value:this.state.msg.message,onChange:function(t){e.setState({msg:Object(l.a)(Object(l.a)({},e.state.msg),{},{message:t.target.value})})},placeholder:"Message...",style:{WebkitTextFillColor:"#000"},required:!0}),r.a.createElement(Ae.a,null,r.a.createElement(we,null,this.state.errMsg),r.a.createElement(ke,null,this.state.passMsg))),r.a.createElement(We.a,{style:ze},"Send"))}}]),n}(r.a.Component),Ye=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={calling:""},a.toggle=a.toggle.bind(Object(p.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"componentDidUpdate",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"toggle",value:function(){var e=Object(be.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.props.showOrNot(this.props.show),e.next=7;break;case 4:throw e.prev=4,e.t0=e.catch(0),new Error(e.t0);case 7:return e.prev=7,this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me"),e.finish(7);case 10:case"end":return e.stop()}}),e,this,[[0,4,7,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{style:xe},r.a.createElement("br",null),r.a.createElement(We.a,{style:Ne,onClick:this.toggle},r.a.createElement("span",{style:Ce},r.a.createElement("i",{className:"fas fa-envelope"})," ",this.props.buttonLabel," ",r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("br",null),r.a.createElement(Se.a,{isOpen:this.props.show,style:Oe},r.a.createElement(Me.a,{style:je},r.a.createElement("span",{style:ve},r.a.createElement(E.a,{type:"grow",color:"primary"}),r.a.createElement("small",null,r.a.createElement("a",{href:"tel:2402737952"},r.a.createElement("i",{className:"fas fa-phone phone_"})," Call Instead? "),"2402737952"))),r.a.createElement(Te.a,{style:ye},r.a.createElement(Be,{toggle:this.toggle}))))}}]),n}(r.a.Component),Re=Object(O.b)((function(e){return Object(l.a)({},e)}),{changeBtnLabel:Z,showOrNot:function(e){return function(t){return t({type:"SHOW",payload:!e})}}})(Ye),Ze={paddingTop:"100px",WebkitHeight:"100%",height:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder"},He=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={pitch:"With your own website you can build your brand's credibility,\n\t\t\t \tshowcase your work at all times,\n\t\t\t \tincrease your audience, \n\t\t\t \tand always have your self open for opportunities.\n\t\t\t \t You never know who's admiring your content ,\n\t\t\t \t  bring your audience into the world they want to be in.\n\t\t\t \t   Creating content and good vibes can never get old to me.\n\t\t\t \t     From custom websites to updates to your websites,\n\t\t\t \t I can help. Contact Me."},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(de,null),r.a.createElement("div",{style:Ze},r.a.createElement("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.6rem"}},this.state.pitch),r.a.createElement(Re,{buttonLabel:this.props.btnL})))}}]),n}(r.a.Component),Xe=Object(O.b)((function(e){return Object(l.a)({},e)}),{changeBtnLabel:Z})(He),Pe=n(156),qe=n(157),_e=n(158),Ge=n(159),Je=n(160);function Ue(){var e=Object(j.a)(["\ndisplay:flex;\nflex-direction:column;\ngrid-gap:50px;\n"]);return Ue=function(){return e},e}var Ve=C.a.div(Ue()),Ke={backgroundColor:"rgba(0,0,0,.5)",WebkitTextFillColor:"azure",fontSize:window.innerWidth<=700?"1.15rem":"1.4rem",fontWeight:"bolder",border:"double #4df7ff",boxShadow:"0 0 20px #5539f3"},$e=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).actionStyle=e.actionStyle.bind(Object(p.a)(e)),e}return Object(s.a)(n,[{key:"componentWillMount",value:function(e){this.props.getMyWork()}},{key:"actionStyle",value:function(e){return"PLAY"===e?{WebkitTextFillColor:"#fc0303"}:{WebkitTextFillColor:"#03fc13"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("figure",{style:{WebkitTextFillColor:"azure",marginTop:"30px"}},r.a.createElement("i",{className:"fas fa-project-diagram"}),r.a.createElement("figcaption",{style:{fontSize:"1.3rem"}},r.a.createElement("h1",null,"Projects"))),r.a.createElement(d.a,null,r.a.createElement(Ve,null,this.props.work?this.props.work.map((function(t){return r.a.createElement(K.a,{key:t.id,style:Ke},r.a.createElement(Pe.a,null,r.a.createElement(qe.a,null,t.title),r.a.createElement(qe.a,{style:{WebkitTextFillColor:"#fc5203"}},r.a.createElement("a",{href:t.github},r.a.createElement("i",{className:"fas fa-laptop-code"})," see the code ",r.a.createElement("i",{className:"fas fa-laptop-code"})))),r.a.createElement(_e.a,{width:"100%",src:t.image,alt:t.alt}),r.a.createElement(Pe.a,null,r.a.createElement(Ge.a,null,t.description),r.a.createElement(Je.a,{href:t.link},"PLAY"===t.action?r.a.createElement("i",{className:"fas fa-gamepad"}):r.a.createElement("i",{className:"fas fa-eye"}),r.a.createElement("br",null),r.a.createElement("span",{style:e.actionStyle(t.action)},t.action))))})):r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("b",{style:{WebkitTextFillColor:"azure"}},"Loading Projects...")),r.a.createElement(E.a,{style:{width:"3rem",height:"3rem"},color:"danger"})))))}}]),n}(r.a.Component),Qe=Object(O.b)((function(e){return Object(l.a)({},e)}),{getMyWork:R})($e);function et(){var e=Object(j.a)(["\n flex:1;\n    -webkit-width:100%;\n    -webkit-height:30%;\n     width:100%;\n    height:30%;\n    opacity:70%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    z-index:0;\n\n.waveWrapperInner {\n    position: absolute;\n    -webkit-width: 100%;\n    -webkit-height: 10%;\n     width: 100%;\n    height: 15%;\n    bottom: -1px;\n    z-index:0;\n}\n.wave {\n  flex:1;\n    -webkit-width: 200%;\n    -webkit-height: 100%;\n     width: 200%;\n    height: 100%;\n    background-repeat: repeat no-repeat;\n    -webkit-background-position: 0 bottom;\n    background-position: 0 bottom;\n    transform-origin: center bottom;\n    z-index:-1;\n}\n\n.waveTop {\n    -webkit-background-size: 25% 100px;\n    background-size: 25% 100px;\n  animation: move-wave 3s;\n   -webkit-animation: move-wave 3s;\n   -webkit-animation-delay: 1s;\n   animation-delay: 1s;\n}\n\n.waveMiddle {\n    -webkit-background-size: 25% 120px;\n    background-size: 25% 120px;\n    -webkit-animation: move_wave 10s linear infinite;\n    animation: move_wave 10s linear infinite;\n}\n\n.waveBottom {\n      -webkit-background-size: 25% 100px;\n    background-size: 25% 100px;\n    -webkit-animation: move_wave 15s linear infinite;\n    animation: move_wave 15s linear infinite;\n\n}\n\n\n\n\n@-webkit-keyframes move_wave {\n    0% {\n        transform: translateX(0) translateZ(0) scaleY(1);\n        -webkit-transform: translateX(0) translateZ(0) scaleY(1)\n    }\n    50% {\n        transform: translateX(-25%) translateZ(0) scaleY(0.55);\n        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)\n    }\n    100% {\n        transform: translateX(-50%) translateZ(0) scaleY(1);\n        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1)\n    }\n}\n\n@keyframes move_wave {\n    0% {\n        transform: translateX(0) translateZ(0) scaleY(1);\n        -webkit-transform: translateX(0) translateZ(0) scaleY(1)\n    }\n    50% {\n        transform: translateX(-25%) translateZ(0) scaleY(0.55);\n        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)\n    }\n    100% {\n        transform: translateX(-50%) translateZ(0) scaleY(1);\n        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1)\n    }\n}\n\n\n\n\n/*mobile standing up*/\n@media (max-width:500px){\n.waveWrapperInner {-webkit-width: 150%;-webkit-height: 20%;width: 150%;height: 25%;}\n \n \n.waveWrapper {-webkit-height:40%;height:40%;}\n}\n\n\n\n/*mobile tilting to the side*/\n@media (max-width:900px) and (max-height:500px) and (min-width:500px){\n.waveWrapperInner {-webkit-height: 40%;height: 40%;}\n.waveWrapper {-webkit-height:70%;height:70%;}\n}\n\n\n/*pad standing up*/\n@media screen and (max-width:1380px) and (max-height:1380px)\n and (min-width:700px) and (min-height:1000px){\n.waveWrapperInner {-webkit-height: 20%;height: 20%;}\n}\n\n/*pad tilting to the side*/\n@media screen and (max-width:1380px) and (max-height:1200px)\n and (min-width:1000px) and (min-height:700px){\n        .waveWrapperInner {height: 15%;}\n }\n\n\n@media(max-width:500px) and (max-height:450px) and (min-height:100px){\ndisplay:none;\n}\n\n@media(min-width:1000px) and (max-height:700px) and (min-height:100px){\ndisplay:none;\n}\n\n\n"]);return et=function(){return e},e}var tt=C.a.div(et()),nt=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getMyWork()}},{key:"render",value:function(){return r.a.createElement(Y,{className:"App"},r.a.createElement(V,{compRendered:this.props.compRendered}),r.a.createElement(d.a,null,"Home"===this.props.compRendered?r.a.createElement(Xe,null):r.a.createElement(Qe,null)),r.a.createElement(tt,{className:"waveWrapper waveAnimation"},r.a.createElement("div",{className:"waveWrapperInner bgTop"},r.a.createElement("div",{className:"wave waveTop",style:{backgroundImage:"url(".concat(this.props.wavio,")")}})),r.a.createElement("div",{className:"waveWrapperInner bgMiddle"},r.a.createElement("div",{className:"wave waveMiddle",style:{backgroundImage:"url(".concat(this.props.wavio,")")}})),r.a.createElement("div",{className:"waveWrapperInner bgBottom"},r.a.createElement("div",{className:"wave waveBottom",style:{backgroundImage:"url(".concat(this.props.wavio,")")}}))))}}]),n}(r.a.Component),at=Object(O.b)((function(e){return Object(l.a)({},e)}),{getMyWork:R,DarkMode:H})(nt),rt=(n(132),n(83)),it=(n(133),n(32)),ot=n(78),lt=n(79),ct=n.n(lt),st=n(80),ut=n.n(st),mt=n(81),dt=n.n(mt),pt={compRendered:sessionStorage.getItem("nav")||"Home",work:"",error:"",mode:!(!sessionStorage.getItem("toggleDarkMode")||"true"!==sessionStorage.getItem("toggleDarkMode")),show:!1,me:ut.a,logo:ct.a,wavio:dt.a,btnL:"Contact Me"},ft=n(82);n.n(ft).a.config();var bt=Object(it.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(l.a)({},e);case"SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{work:t.payload});case"BTN":return Object(l.a)(Object(l.a)({},e),{},{btnL:t.payload});case"NAVIGATION":return Object(l.a)(Object(l.a)({},e),{},{compRendered:t.payload});case"MODE":return Object(l.a)(Object(l.a)({},e),{},{mode:t.payload});case"SHOW":return Object(l.a)(Object(l.a)({},e),{},{show:t.payload});case"ERR":return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}}),Object(it.a)(ot.a));o.a.render(r.a.createElement(E.a,{style:{width:"3rem",height:"3rem"},size:"lg",color:"info"}),document.querySelector(".preloader")),o.a.render(r.a.createElement(O.a,{store:bt},r.a.createElement(rt.a,null,r.a.createElement(at,null))),document.getElementById("root"));var gt=document&&document.querySelector(".preloader"),ht=setInterval((function(){gt.style.opacity||(gt.style.opacity=1),gt.style.opacity>0?(gt.style.opacity-=.1,console.log("done",gt.style.opacity,gt.style.zIndex),gt.style.opacity<=0&&(gt.style.zIndex="-221",gt.remove())):clearInterval(ht)}),100)},37:function(e,t,n){e.exports=n.p+"static/media/bg6.a76ea6f8.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/bg6mobile.00b7ec7b.jpg"},79:function(e,t,n){e.exports=n.p+"static/media/tgc1.6101cd94.png"},80:function(e,t,n){e.exports=n.p+"static/media/me.b816945a.png"},81:function(e,t,n){e.exports=n.p+"static/media/wave.05d52988.png"},84:function(e,t,n){e.exports=n(137)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.d4f084b0.chunk.js.map