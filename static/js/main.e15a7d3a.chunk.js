(this["webpackJsonp-"]=this["webpackJsonp-"]||[]).push([[0],{138:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),o=a(6),c=a(11),s=a(12),m=a(14),u=a(13),d=a(19),p=a(159),f=(a(96),a(18)),g=a(147),b=a(160),h=a(148),E=a(149),w=a(150),y=a(161),x=a(162),A=a(151),v=a(152),k=a(153),j=a(16),O=a(35),C=a.n(O),N=function(){return function(e){e({type:"LOADING"}),C.a.get("https://tgcz.herokuapp.com/api/myWork").then((function(t){return e({type:"SUCCESS",payload:t.data.work})})).catch((function(t){return e({type:"ERR",payload:t})}))}},T=function(e){return function(t){return t({type:"BTN",payload:e})}},M=function(e){return function(t){return t({type:"SHOW",payload:!e})}},W={display:"flex",gridGap:"3px"},B={WebkitTextFillColor:"#4df7ff",color:"#4df7ff",fontSize:window.innerWidth<=700?"1rem":"1.2rem"},z=(window.innerWidth,{WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,.5)"}),I={WebkitBorderRadius:"100%",borderRadius:"100%",border:"double 3px #240090",WebkitBoxShadow:"0 0 10px #4df7ff",boxShadow:"0 0 10px #4df7ff"},S={width:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder",display:"flex",gridGap:"3px",fontSize:window.innerWidth<=700?"1.2rem":"1.4rem"},q={WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,0)"},R={cursor:"pointer",WebkitTextFillColor:"red"},F={cursor:"pointer",WebkitTextFillColor:"#888"},H={cursor:"pointer",WebkitTextFillColor:"rgb(29, 161, 242)"},P={WebkitTextFillColor:"azure",color:"azure"},L={cursor:"pointer",fontSize:window.innerWidth<=700?"1rem":"1.2rem"},V={marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"yellow"},D={marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"darkgray"},K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={tooltipOpen:!1,isOpen:!1},n.toggle=n.toggle.bind(Object(f.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen,tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{flex:1}},r.a.createElement(g.a,{expand:"md",style:q},r.a.createElement("div",null,r.a.createElement("span",{className:"navbar-brand",id:"me"},r.a.createElement("span",{style:W},r.a.createElement("figure",null,r.a.createElement("img",{src:this.props.me,style:I,alt:"me",width:"50",height:"50"})),r.a.createElement("h2",{style:B},"Guy")," "," .M O")),r.a.createElement(b.a,{style:S,placement:"bottom",isOpen:this.state.tooltipOpen,autohide:!1,target:"me"},r.a.createElement("i",{className:"fab fa-youtube",style:R,onClick:function(){return alert("Youtube Channel comming soon...")}}),r.a.createElement("i",{className:"fab fa-github",style:F,onClick:function(){return window.location.href="https://www.github.com/guytonoriji"}}),r.a.createElement("i",{className:"fab fa-twitter",style:H,onClick:function(){return window.location.href="https://www.twitter.com/iSpam_The_Code"}}),this.props.mode?r.a.createElement("i",{className:"fas fa-sun",title:"Light Mode!",style:V,onClick:function(){return e.props.DarkMode(!1)}}):r.a.createElement("i",{className:"fas fa-moon",title:"Dark Mode!",style:D,onClick:function(){return e.props.DarkMode(!0)}}))),r.a.createElement(h.a,{onClick:this.toggle,style:P},r.a.createElement("i",{className:"fas fa-ellipsis-v"})),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(w.a,{className:"mr-auto",navbar:!0},r.a.createElement(y.a,{nav:!0,inNavbar:!0},r.a.createElement(x.a,{nav:!0,caret:!0},r.a.createElement("h2",{style:L},"Games")),r.a.createElement(A.a,{style:z,left:"true"},this.props.work?this.props.work.map((function(e){return"PLAY"===e.action&&r.a.createElement(v.a,{style:z,href:e.link,key:e.id},e.title)})):r.a.createElement(k.a,{size:"sm",color:"info"})))),"Home"===this.props.compRendered?r.a.createElement("span",{onClick:function(){return e.props.navBar("Projects")},style:L},r.a.createElement("h3",null,"Projects")):r.a.createElement("span",{onClick:function(){return e.props.navBar("Home")},style:L},r.a.createElement("h3",null,"Home")))))}}]),a}(n.Component),Y=Object(j.b)((function(e){return Object(o.a)({},e)}),{navBar:function(e){return function(t){switch(e){case"Home":case"Projects":return window.sessionStorage.setItem("nav",e),t({type:"NAVIGATION",payload:e});default:return!1}}},DarkMode:function(e){return function(t){return window.sessionStorage.setItem("toggleDarkMode",e),t({type:"MODE",payload:e})}}})(K),G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("section",{class:"hero"},r.a.createElement("header",{id:"header"},r.a.createElement(Y,null)),r.a.createElement("header",{class:"hero-header"},r.a.createElement("h1",{class:"hero-title"},"Need A Web App?")),r.a.createElement("footer",{class:"hero-footer"},r.a.createElement("a",{class:"button button-primary",href:"tel:+12402737952"},"Call"),r.a.createElement("a",{class:"button ",href:"mailto:thisguycodez@gmail.com"},"Email"))))}}]),a}(r.a.Component),U=a(154),X=a(20);function J(){var e=Object(d.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-grid-gap:10px;\ngrid-gap:10px;\n\n\n\n\n\n@media screen and (max-width:500px){\n-webkit-flex-direction:column;\nflex-direction:column;\n}\n\n\n\n\n\n@media screen and (max-width:900px){\n\nfigure{\nmargin-top:-50px;\n}\n\n}\n\n\n"]);return J=function(){return e},e}function Z(){var e=Object(d.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\n-webkit-align-items:flex-start;\njustify-content:flex-start;\nalign-items:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n"]);return Z=function(){return e},e}var Q=X.a.div(Z()),_=X.a.div(J()),$={backgroundColor:"rgba(0,0,0,0)",WebkitTextFillColor:"azure",color:"azure",border:"none",padding:".5%"},ee=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggle=function(){return n.setState({tooltipOpen:!n.state.tooltipOpen})},n.state={tooltipOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(_,null,r.a.createElement(U.a,{style:$},r.a.createElement("div",{className:"myRole"},r.a.createElement("h1",{className:"error"},"Full",r.a.createElement("span",null,"-"),"Stack"),r.a.createElement("h1",{className:"code"},"Web",r.a.createElement("span",null,"-"),r.a.createElement("span",null,"Dev"))),r.a.createElement("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.65rem",padding:"0px 1px"}},"I am here to help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technology."))))}}]),a}(r.a.Component);function te(){var e=Object(d.a)(["\n-webkit-height:125px;\n-webkit-width:125px;\nheight:125px;\nwidth:125px;\nbackground-color:rgba(0,0,0,.5);\n-webkit-text-fill-color:azure;\ncolor:azure;\nborder:double rgba(250,250,250,.5);\n-webkit-box-shadow:0 0 10px #888;\nbox-shadow:0 0 10px #888;\n-webkit-border-radius:50%;\nborder-radius:50%;\npadding:15px 10px;\ndisplay:flex;\n-webkit-justify-content:center;\n-webkit-align-items:center;\njustify-content:center;\nalign-items:center;\n\n@media(max-width:500px){\n-webkit-height:110px;\n-webkit-width:110px;\nheight:110px;\nwidth:110px;\n}\n\n"]);return te=function(){return e},e}function ae(){var e=Object(d.a)(["\npadding-top:25px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\nalign-items:center;\nfont-size:",";\nfont-weight:bolder;\n\n\nfigure i{\nfont-size:",";\n}\n\n\n\n\n\n\n@media(max-width:500px){\nflex-direction:column;\npadding:0;\n}\n"]);return ae=function(){return e},e}function ne(){var e=Object(d.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\n-webkit-flex-direction:row;\n-webkit-width:100%;\njustify-content:center;\nflex-direction:row;\nwidth:100%;\n}\n\n"]);return ne=function(){return e},e}function re(){var e=Object(d.a)(["\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-width:100%;\nwidth:100%;\n}\n"]);return re=function(){return e},e}var le=X.a.div(re()),ie=X.a.div(ne()),oe=X.a.div(ae(),window.innerWidth<=300?".6rem":"1rem",window.innerWidth<=300?"1.3rem":"2rem"),ce=X.a.div(te()),se=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ie,null,r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-layer-group ",style:{fontSize:window.innerWidth<=700?"3rem":"4rem"}}),r.a.createElement("figcaption",null,r.a.createElement("h2",{style:{fontSize:window.innerWidth<=700?"1.8rem":"3rem",textShadow:"0 0 10px #000",fontFamily:"Permanent Marker, cursive"}},"My Stack")))),r.a.createElement(le,null,r.a.createElement(oe,null,r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-html5"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"HTML5")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-css3-alt"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"CSS3")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-bootstrap"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Bootstrap")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-python"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Python"))))),r.a.createElement(oe,null,r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-js-square"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Javascript")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"React.js")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-atom"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"React-Redux")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-node-js"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Express.js"))))),r.a.createElement(oe,null,r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fab fa-node"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Node.js")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-table"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"DB Design")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-database"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"Knex(Sqlite3)")))),r.a.createElement(ce,{className:"skillzAnime"},r.a.createElement("figure",null,r.a.createElement("i",{className:"fas fa-database"}),r.a.createElement("figcaption",null,r.a.createElement("h6",null,"postgresql")))))))}}]),a}(r.a.Component);function me(){var e=Object(d.a)(["\ncolor:green;\n-webkit-text-fill-color:green;\n"]);return me=function(){return e},e}function ue(){var e=Object(d.a)(["\ncolor:red;\n-webkit-text-fill-color:red;\n"]);return ue=function(){return e},e}var de=X.a.span(ue()),pe=X.a.span(me()),fe=(window.innerWidth,{backgroundColor:"rgba(0,0,0,0)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"50px 0px"}),ge={margin:"0",padding:"0",backgroundColor:"rgba(0,0,0,0)",WebkitTextFillColor:"#fff",color:"#fff",display:"flex",flexDirection:"column",border:"none",justifyContent:"center",alignItems:"flex-start",boxShadow:"0 0 10px rgba(0,0,0,0)",borderLeft:"double rgba(0,78,204,.7)"},be={backgroundColor:"rgba(0,0,0,0)",marginTop:"50px"},he={backgroundColor:"rgba(0,0,0,.5)",border:"double azure",cursor:"pointer",marginBottom:"20px"},Ee={WebkitTextFillColor:"#fff",color:"#fff",textShadow:"0 0 3px #333 ",display:"flex",alignItems:"center",justifyContent:"center",gridGap:"3px",fontSize:window.innerWidth<=500?"1.5rem":"1.8rem",margin:"0"},we={padding:"10px",backgroundColor:"rgba(0,0,0,0)",border:"none",borderLeft:"solid rgba(0, 78, 204,.7)",borderTop:"solid .5px rgba(0,78,204,.7)",borderBottom:"solid rgba(0, 78, 204,.7)",fontWeight:"bolder",boxShadow:"0 0 10px rgba(0,0,0,0)"},ye=a(73),xe=a(157),Ae=a(158),ve=a(43),ke=a.n(ve),je=a(77),Oe=a(155),Ce=a(156),Ne=function(e){return/[A-z]/i.test(e)},Te=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},Me=function(e){return/[A-z]/i.test(e)},We=(a(69),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={valOrNah1:"",valOrNah2:"",valOrNah3:"",msg:{name:"",email:"",message:""},errMsg:"",passMsg:""},n.send=n.send.bind(Object(f.a)(n)),n.toInbox=n.toInbox.bind(Object(f.a)(n)),n.toggle=n.toggle.bind(Object(f.a)(n)),n}return Object(s.a)(a,[{key:"send",value:function(){var e=this;return new Promise((function(t,a){return Ne(e.state.msg.name)&&Te(e.state.msg.email)&&Me(e.state.msg.message)?(e.setState({passMsg:"Thank You ".concat(e.state.name," Your Message Was Sent."),errMsg:"",valOrNah1:"is-valid",valOrNah2:"is-valid",valOrNah3:"is-valid"}),t(!0)):(e.setState({valOrNah1:"is-invalid",valOrNah2:"is-invalid",valOrNah3:"is-invalid",errMsg:"We Cant Send This, please check for errors",passMsg:""}),a(!1))}))}},{key:"toInbox",value:function(){var e=Object(je.a)(ke.a.mark((function e(){var t=this;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.send().then((function(e){return C.a.post("https://tgcz.herokuapp.com/api/admin/inbox",t.state.msg).then((function(e){})).catch((function(e){t.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})}))})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){this.props.showOrNot(this.props.show),this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement(U.a,{className:"form-card",style:{background:this.props.mode?" rgba(0,0,0,.8)":"rgba(250,250,250,.8)"}},r.a.createElement("div",{className:"card-header form-card-header"},r.a.createElement("div",{className:"d-flex justify-content-end social_icon"},r.a.createElement("span",null,r.a.createElement("a",{href:"tel:+12402737952"},r.a.createElement("i",{className:"fas fa-mobile-alt xxx"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:thisguycodez@gmail.com"},r.a.createElement("i",{className:"fab fa-google-plus-square xxx"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/guytonoriji"},r.a.createElement("i",{className:"fab fa-linkedin xxx"}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.toInbox(),Ne(e.state.msg.name)&&Te(e.state.msg.email)&&Me(e.state.msg.message)&&e.toggle()},"data-testid":"theForm"},r.a.createElement(Oe.a,null,r.a.createElement("div",{className:"form-input-group form-group"},r.a.createElement("div",{className:"form-input-group-prepend"},r.a.createElement("span",{className:"input-group-text",style:{WebkitTextFillColor:this.props.mode?"azure":"#000",background:this.props.mode?" rgba(0,0,0,.8)":"rgba(250,250,250,0)"}},r.a.createElement("i",{className:"fas fa-pen-square"}))),r.a.createElement("input",{className:"form-control ".concat(this.state.valOrNah1),type:"text",name:"name",id:"name",value:this.state.msg.name,onChange:function(t){e.setState({msg:Object(o.a)(Object(o.a)({},e.state.msg),{},{name:t.target.value})})},placeholder:"Name...",style:Object(o.a)(Object(o.a)({},we),{},{WebkitTextFillColor:this.props.mode?"azure":"#000"}),required:!0})),r.a.createElement("div",{className:"form-input-group form-group"},r.a.createElement("div",{className:"form-input-group-prepend"},r.a.createElement("span",{className:"input-group-text",style:{WebkitTextFillColor:this.props.mode?"azure":"#000",background:this.props.mode?" rgba(0,0,0,.8)":"rgba(250,250,250,0)"}},r.a.createElement("i",{className:"fas fa-pen-square"}))),r.a.createElement("input",{className:"form-control ".concat(this.state.valOrNah2),type:"email",name:"email",id:"email",value:this.state.msg.email,onChange:function(t){e.setState({msg:Object(o.a)(Object(o.a)({},e.state.msg),{},{email:t.target.value})})},placeholder:"Email...",style:Object(o.a)(Object(o.a)({},we),{},{WebkitTextFillColor:this.props.mode?"azure":"#000"}),required:!0})),r.a.createElement("div",{className:"form-input-group form-group"},r.a.createElement("div",{className:"form-input-group-prepend"},r.a.createElement("span",{className:"input-group-text",style:{WebkitTextFillColor:this.props.mode?"azure":"#000",background:this.props.mode?" rgba(0,0,0,.8)":"rgba(250,250,250,0)"}},r.a.createElement("i",{className:"fas fa-comment-dots"}))),r.a.createElement("textarea",{className:"form-control ".concat(this.state.valOrNah3),type:"textarea",name:"message",id:"message",value:this.state.msg.message,onChange:function(t){e.setState({msg:Object(o.a)(Object(o.a)({},e.state.msg),{},{message:t.target.value})})},placeholder:"Message...",style:Object(o.a)(Object(o.a)({},we),{},{WebkitTextFillColor:this.props.mode?"azure":"#000"}),required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Send",className:"btn float-right login_btn form-login_btn",style:{WebkitTextFillColor:this.props.mode?"azure":"#000",background:this.props.mode?" rgba(0,0,0,.8)":"rgba(250,250,250,0)"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("span",{onClick:this.toggle},r.a.createElement("i",{className:"fas fa-eye-slash",title:"hide this",style:{WebkitTextFillColor:this.props.mode?"azure":"#000",cursor:"pointer"}})))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"d-flex justify-content-center form-links"},r.a.createElement(Ce.a,null,r.a.createElement(de,null,this.state.errMsg),r.a.createElement(pe,null,this.state.passMsg))))))}}]),a}(r.a.Component)),Be=Object(j.b)((function(e){return Object(o.a)({},e)}),{changeBtnLabel:T,showOrNot:M})(We),ze=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={calling:"",modal:!!n.props.show},n.toggle=n.toggle.bind(Object(f.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"componentDidUpdate",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"toggle",value:function(){this.props.showOrNot(this.props.show),this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"render",value:function(){return r.a.createElement("div",{style:fe},r.a.createElement("br",null),r.a.createElement(ye.a,{style:he,onClick:this.toggle},r.a.createElement("span",null,r.a.createElement("h1",{style:Ee},r.a.createElement("i",{className:"fas fa-envelope"})," ",this.props.buttonLabel," ",r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("br",null),r.a.createElement(xe.a,{isOpen:!!this.props.show,style:be},r.a.createElement(Ae.a,{style:ge},r.a.createElement(Be,null))))}}]),a}(r.a.Component),Ie=Object(j.b)((function(e){return Object(o.a)({},e)}),{changeBtnLabel:T,showOrNot:M})(ze),Se={paddingTop:"100px",WebkitHeight:"100%",height:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder"},qe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={pitch:"With your own website you can build your brand's credibility,\nshowcase your work at all times,\nincrease your audience, \nand always have your self open for opportunities.\nYou never know who's admiring your content ,\nbring your audience into the world they want to be in.\nCreating content and good vibes can never get old to me.\nFrom custom websites to updates to your websites,\nI can help. Contact Me."},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement(se,null),r.a.createElement("div",{style:Se},r.a.createElement("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.6rem"}},this.state.pitch),r.a.createElement(Ie,{buttonLabel:this.props.btnL})))}}]),a}(r.a.Component),Re=Object(j.b)((function(e){return Object(o.a)({},e)}),{changeBtnLabel:T})(qe),Fe=["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"],He=(a(138),a(78)),Pe=a.n(He),Le=a(79),Ve=a.n(Le),De=a(80),Ke=a.n(De),Ye=a(81),Ge=a.n(Ye),Ue=a(82),Xe=a.n(Ue),Je=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).actionStyle=e.actionStyle.bind(Object(f.a)(e)),e.$etId=e.$etId.bind(Object(f.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(e){this.props.getMyWork()}},{key:"actionStyle",value:function(e){return"PLAY"===e?{WebkitTextFillColor:"#fc0303"}:{WebkitTextFillColor:"#03fc13"}}},{key:"$etId",value:function(){var e=[];return Fe.forEach((function(t,a){Math.floor(Math.random()*a)%2===Math.floor(2*Math.random()+1)&&e.push(t+Fe[Math.floor(52*Math.random())])})),e.join("")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("figure",{style:{WebkitTextFillColor:"azure",marginTop:"30px"}},r.a.createElement("figcaption",{className:"myProjectRole"},r.a.createElement("i",{className:"fas fa-project-diagram"}),r.a.createElement("h3",{className:"error"},"P r",r.a.createElement("span",null," o "),"j e"),r.a.createElement("h3",{className:"code"}," c",r.a.createElement("span",null," t"),r.a.createElement("span",null," s")),r.a.createElement("i",{className:"fas fa-project-diagram",style:{transform:"rotate(180deg) rotateX(180deg)"}}))),r.a.createElement(p.a,null,r.a.createElement("div",{id:"movie-card-list",className:"movie-card-holder"},this.props.work?this.props.work.map((function(t){return r.a.createElement("div",{class:"movie-card",style:{backgroundImage:"url(".concat(t.image,")")},key:t.id},r.a.createElement("div",{class:"movie-card__overlay",style:{background:e.props.mode?"linear-gradient(to ".concat(window.innerWidth<=700?"bottom":"right",", rgba(42,159,255,.2) 0%,rgba(33,33,32,1) ").concat(window.innerWidth<=700?"80%":"60%",",rgba(33,33,32,1) 100%)"):"linear-gradient(to ".concat(window.innerWidth<=700?"bottom":"right",", rgba(245,245,245,.01) 0%,rgba(245,245,245,1) ").concat(window.innerWidth<=700?"80%":"60%",",rgba(245,245,245,1) 100%)")}}),r.a.createElement("div",{class:"movie-card__content"},r.a.createElement("div",{class:"movie-card__header"},r.a.createElement("h3",{class:"movie-card__title",style:{WebkitTextFillColor:e.props.mode?"azure":"#000"}},t.title),r.a.createElement("h4",{class:"movie-card__info",style:{WebkitTextFillColor:e.props.mode?"#2a9fff":"#000"}},t.description)),r.a.createElement("p",{class:"movie-card__desc"},r.a.createElement("div",{className:"card-custom-avatar"},!/pure/gi.test(t.description)&&!/plain/gi.test(t.description)||r.a.createElement("img",{className:"img-fluid",src:Pe.a,alt:"project code language used",width:"30",height:"30"}),!/react/gi.test(t.description)||r.a.createElement("img",{className:"img-fluid",src:Ve.a,alt:"project code language used",width:"30",height:"30"}),!/node/gi.test(t.description)||r.a.createElement("img",{className:"img-fluid",src:Ke.a,alt:"project code language used",width:"30",height:"30"}),!/firebase/gi.test(t.description)||r.a.createElement("img",{className:"img-fluid",src:Ge.a,alt:"project code language used",width:"30",height:"30"}),!/python/gi.test(t.description)||r.a.createElement("img",{className:"img-fluid",src:Xe.a,alt:"project code language used",width:"30",height:"30"}))),r.a.createElement("a",{href:t.link,className:"btn btn-primary"},"PLAY"===t.action?r.a.createElement("i",{className:"fas fa-gamepad"}):r.a.createElement("i",{className:"fas fa-eye"})),r.a.createElement("a",{href:t.github,className:"btn btn-outline-primary"},r.a.createElement("i",{className:"fas fa-laptop-code"})," see the code ",r.a.createElement("i",{className:"fas fa-laptop-code"}))))})):r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("b",{style:{WebkitTextFillColor:"azure"}},"Loading Projects...")),r.a.createElement(k.a,{style:{width:"3rem",height:"3rem"},color:"danger"})))))}}]),a}(r.a.Component),Ze=Object(j.b)((function(e){return Object(o.a)({},e)}),{getMyWork:N,tog_description:function(e){return function(t){var a=document.querySelector("#".concat(e));/off/i.test(a.getAttribute("class"))?a.setAttribute("class","fas fa-toggle-on"):a.setAttribute("class","fas fa-toggle-off")}}})(Je),Qe=a(83),_e=a.n(Qe),$e=a(84),et=a.n($e);function tt(){var e=Object(d.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-repeat:no-repeat;\nbackground-position:top;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n"]);return tt=function(){return e},e}var at=X.a.div(tt()),nt=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={bgs:"cover",bgp:"center"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getMyWork()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement(at,{className:"App",style:{backgroundImage:"url(".concat(this.props.mode?et.a:_e.a,")"),backgroundSize:this.state.bgs,backgroundPosition:this.state.bgp}},r.a.createElement(G,null),r.a.createElement(p.a,null,"Home"===this.props.compRendered?r.a.createElement(Re,null):r.a.createElement(Ze,null)))}}]),a}(r.a.Component),rt=Object(j.b)((function(e){return Object(o.a)({},e)}),{getMyWork:N})(nt),lt=(a(139),a(140),a(141),a(90)),it=a(33),ot=a(85),ct=a(86),st=a.n(ct),mt=a(87),ut=a.n(mt),dt=a(88),pt=a.n(dt),ft={compRendered:sessionStorage.getItem("nav")||"Home",work:"",error:"",mode:!window.sessionStorage.getItem("toggleDarkMode")||JSON.parse(window.sessionStorage.getItem("toggleDarkMode")),show:!1,me:ut.a,logo:st.a,wavio:pt.a,btnL:"Contact Me"},gt=a(89);a.n(gt).a.config();var bt=Object(it.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(o.a)({},e);case"SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{work:t.payload});case"BTN":return Object(o.a)(Object(o.a)({},e),{},{btnL:t.payload});case"NAVIGATION":return Object(o.a)(Object(o.a)({},e),{},{compRendered:t.payload});case"MODE":return Object(o.a)(Object(o.a)({},e),{},{mode:t.payload});case"SHOW":return Object(o.a)(Object(o.a)({},e),{},{show:t.payload});case"ERR":return Object(o.a)(Object(o.a)({},e),{},{error:t.payload});default:return e}}),Object(it.a)(ot.a));i.a.render(r.a.createElement(j.a,{store:bt},r.a.createElement(lt.a,null,r.a.createElement(rt,null))),document.getElementById("root"));var ht=document.querySelector(".preloader"),Et=setInterval((function(){if(ht.style.opacity||(ht.style.opacity=1),!(ht.style.opacity>0))return clearInterval(Et);ht.style.opacity-=.15,ht.style.opacity<=0&&(ht.style.zIndex="-221",ht.remove())}),150)},69:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/js.07ea744d.png"},79:function(e,t,a){e.exports=a.p+"static/media/react.82a318cc.png"},80:function(e,t){e.exports="data:image/png;base64,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"},81:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABZFJREFUeJztms1vFHUYx7/PM7PT7luhW0Ag2xZL6BtoFGhrxcSrJiYmHoxvF6MCCV4MB0EPHIwH40GMJ4yk4MFE4h/gwYR4UCwV5WB4aTTCRUKptNBS6O7M83igW3a7u32bZ0sT53Pb+c18n+f5zjO/mdn5AREREREREREREXbIAF6Xk3jxYeexGLgWoqrYqwG+1GNI1ELfkpoYAEYXMzZoPfbXRN8QshaUk2gixSgACHCdp9FG+zBlHccK8w4goKtI/BH1sNc6hiXmBqg8MAAAlPC+fIu4dRwr7A1AqQEMbMQU3i7bT0E6gE49UqN5aJHYB6dSAwBACYd0APUl205gHwgX5VEcMc9hCdTC/TIDGNiswFuF33oarhIOAQAEB+U41tcgj0VhaoB8jSQDrZXGFDgkn6MOAPQqXirsx4wkMQ4upK2D3Rvlp7YNlvkC1h3go6NqIEIWDXhTFaRSWrAo3p2vC2SofY+QDGssdtoyXcDagArXfzGqOIwTeJYZvSVJzNMFMtS+RwXfM5BmULf83J2xTNnUAF3AAGa0BHn3vUpjlbpgtnji1AMR3W6SbEHOUgwVJsBiROnC1LXMzkDIL0tkThdULB4AKNhhli2sDZD5DciNpKYdoaw/Hv+l4uEzXVC1eACqtDoN0GOIgbCt2njg83m5m3gSAPK3U1sCH0FZMoykNqY+q1b8TMaPWeV8X84KD1uZ4FYbnh5Je9CZoEpZfzJR3gWJOLBx82tViwcA6A5Vu5c4uw6YZwIMfD6L6fru4m35sWRLSRck4kBzM9jleYtjcKP+1rEpdMKzenZUNEAEOn19TVN5YG72J2a6IBGHZJsVziLTydvNA3YdoJUNUJ/PIOdtrTSWv5VsDpJxkWyzLnTmSyCsPgO4wiUgCv/uSENLtWPcRq+FmrOypOIBKFaZAXoELILOsu3TsTOcr8tWDJxx4e1OCbNTdeKsHnCVGYA2ZJmRLN4kwL3cjYaK7waccRHbnRKO0TLjy3ZVm9xtOqDCBChT3ln13bK3N8648HpTgbPs4gFmTmBo25blHl+iZSEy9wlQFJP50YbHy4JlXMR6UwE75IQNqWCTy8CmAwgl93id9M5p4KwtCZRx4fUmfceg+PtBbJ4IbTqg6BYoiptTN9M9JUEyLryeZJ4dXvqEVzWkzURob8BE/A9H3NkvQpxxEetJ5tnlmEms2ZhqYkDoZ2o5jvXkYAQARHBt6u91TcyOBxTOfCLH7v3flgjE54SbpB0XcmF0wneA8+Ds58cTfxWK14wrXl9quhbFAwCDXb2jVd8+F68Tni4ACJSu5sbSTwOAruV8/KlUjpnqDPSrY/BIHNqAwjuA/2/iH4fBaHTuxvsbAiaqX+jY0LERfh4I3wGKLlG6HEyk+qnJuV3fnwZz7YufCb4KDGB05UaTE7wudqOuLx1jopX7DmhwJwhlgJ5CCgGNwUtv8noSyRUtHgCUt+qvu0ItwghnwCS68kHjuNebbmTmFV8NwgyCf2feP2IXItSTWZDYsCbWunYXOytfPABAcEtZQp3EUAfHXhn5gWN4TqDnw+gsB1EMaJBr597hoTA6Jv+u6ik42trxjpJ+zGDTT1dzEdHfiegA9106Y6FnukZIBjublPARBPuYjb88i44T04d05dIxern8m8JyMV8kBQA62P2EQL5gwjMWegI9Tm5wmHf+ecNCr5iaGADMLIE52/Gqgj5lwuZlypxTogPcc3HQNLkiarY+hwjKfZe/obx2AvqJiOQXe6xAxpR0P65c6qtl8UANO2AuMtjZroqjzHi+6j4CBetXzPoB7R4eXYm8VswAYOayGOp4QYWOMqOteEwEQ8RyIOxtbamsqAEF9HRrvSbibyjQD9V7RPoj9Q5/RwR5GPlERERERERERPwv+Q9st9My1+8L5wAAAABJRU5ErkJggg=="},82:function(e,t){e.exports="data:image/png;base64,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"},83:function(e,t,a){e.exports=a.p+"static/media/bg6.82b127cf.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/bg6dm.14376d9e.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/tgc1.6101cd94.png"},87:function(e,t,a){e.exports=a.p+"static/media/me.b816945a.png"},88:function(e,t,a){e.exports=a.p+"static/media/wave.05d52988.png"},91:function(e,t,a){e.exports=a(145)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.e15a7d3a.chunk.js.map