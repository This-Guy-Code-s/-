(this["webpackJsonp-"]=this["webpackJsonp-"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(21),c=n.n(s),r=n(8),o=n(12),l=n(13),d=n(15),j=n(14),b=n(18),h=n(157),p=(n(87),n(20)),u=n(146),m=n(158),f=n(147),g=n(75),x=n(148),O=n(159),w=n(160),y=n(149),A=n(150),k=n(151),v=n(16),N=n(34),C=n.n(N),M="LOADING",T="SUCCESS",B="BTN",W="NAVIGATION",z="MODE",I="SHOW",S="ERR",q=function(){return function(e){e({type:M}),C.a.get("https://tgczz.herokuapp.com/api/mywork/").then((function(t){return e({type:T,payload:t.data})})).catch((function(t){return e({type:S,payload:t})}))}},E=function(e){return function(t){return t({type:B,payload:e})}},R=function(e){return function(t){return t({type:I,payload:!e})}};window.onload=function(){document.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),document.addEventListener("keydown",(function(t){t.ctrlKey&&t.shiftKey&&73===t.keyCode&&e(t),t.ctrlKey&&t.shiftKey&&74===t.keyCode&&e(t),83===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&e(t),t.ctrlKey&&85===t.keyCode&&e(t),123===t.keyCode&&e(t)}),!1);var e=function(e){return e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0),e.preventDefault(),!1}};var F,L,P,H,K,V,G,U,D,Y={display:"flex",gridGap:"3px"},X={WebkitTextFillColor:"#4df7ff",color:"#4df7ff",fontSize:window.innerWidth<=700?"1rem":"1.2rem"},J=(window.innerWidth,{WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,.5)"}),Q={WebkitBorderRadius:"100%",borderRadius:"100%",border:"double 3px #240090",WebkitBoxShadow:"0 0 10px #4df7ff",boxShadow:"0 0 10px #4df7ff"},Z={width:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder",display:"flex",gridGap:"3px",fontSize:window.innerWidth<=700?"1.2rem":"1.4rem"},_={WebkitTextFillColor:"#fff",color:"#fff",backgroundColor:"rgba(0,0,0,0)"},$={cursor:"pointer",WebkitTextFillColor:"red"},ee={cursor:"pointer",WebkitTextFillColor:"#888"},te={cursor:"pointer",WebkitTextFillColor:"rgb(29, 161, 242)"},ne={WebkitTextFillColor:"azure",color:"azure"},ie={cursor:"pointer",fontSize:window.innerWidth<=700?"1rem":"1.2rem"},ae={marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"yellow"},se={marginLeft:"10px",cursor:"pointer",WebkitTextFillColor:"darkgray"},ce=n(1),re=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={tooltipOpen:!1,isOpen:!1},i.toggle=i.toggle.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen,tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){var e=this;return Object(ce.jsx)("div",{style:{flex:1},children:Object(ce.jsxs)(u.a,{expand:"md",style:_,children:[Object(ce.jsxs)("div",{children:[Object(ce.jsx)("span",{className:"navbar-brand",id:"me",children:Object(ce.jsxs)("span",{style:Y,children:[Object(ce.jsx)("figure",{children:Object(ce.jsx)("img",{src:this.props.me,style:Q,alt:"me",width:"50",height:"50"})}),Object(ce.jsx)("h2",{style:X,children:"Guy"})," "," .M O"]})}),Object(ce.jsxs)(m.a,{style:Z,placement:"bottom",isOpen:this.state.tooltipOpen,autohide:!1,target:"me",children:[Object(ce.jsx)("i",{className:"fab fa-youtube",style:$,onClick:function(){return window.location.href="https://www.youtube.com/channel/UC0vDKn1yF10wwQ13i6EV-rg"}}),Object(ce.jsx)("i",{className:"fab fa-github",style:ee,onClick:function(){return window.location.href="https://www.github.com/thisguycodez"}}),Object(ce.jsx)("i",{className:"fab fa-linkedin",style:te,onClick:function(){return window.location.href="https://www.linkedin.com/in/guytonoriji/"}}),this.props.mode?Object(ce.jsx)("i",{className:"fas fa-sun",title:"Light Mode!",style:ae,onClick:function(){return e.props.DarkMode(!1)}}):Object(ce.jsx)("i",{className:"fas fa-moon",title:"Dark Mode!",style:se,onClick:function(){return e.props.DarkMode(!0)}})]})]}),Object(ce.jsx)(f.a,{onClick:this.toggle,style:ne,children:Object(ce.jsx)("i",{className:"fas fa-bars"})}),Object(ce.jsxs)(g.a,{isOpen:this.state.isOpen,navbar:!0,children:[Object(ce.jsx)(x.a,{className:"mr-auto",navbar:!0,children:Object(ce.jsxs)(O.a,{nav:!0,inNavbar:!0,children:[Object(ce.jsx)(w.a,{nav:!0,caret:!0,children:Object(ce.jsx)("h2",{style:ie,children:"Games"})}),Object(ce.jsxs)(y.a,{style:J,left:"true",children:[this.props.work&&this.props.work.length>1?this.props.work.map((function(e){return"PLAY"===e.action&&Object(ce.jsx)(A.a,{style:J,href:e.link,children:e.title},e.id)})):Object(ce.jsx)(k.a,{size:"sm",color:"info"},Math.floor(1e3*Math.random())),this.props.promoGameCodes.map((function(e,t){return Object(ce.jsx)(A.a,{style:J,href:e.link,children:e.name},t)}))]})]})}),"Home"===this.props.compRendered?Object(ce.jsx)("span",{onClick:function(){return e.props.navBar("Projects")},style:ie,children:Object(ce.jsx)("h3",{children:"Projects"})}):Object(ce.jsx)("span",{onClick:function(){return e.props.navBar("Home")},style:ie,children:Object(ce.jsx)("h3",{children:"Home"})})]})]})})}}]),n}(i.Component),oe=Object(v.b)((function(e){return Object(r.a)({},e)}),{navBar:function(e){return function(t){switch(e){case"Home":return window.sessionStorage.setItem("nav",e),setTimeout((function(){document.querySelector("#intro").scrollIntoView()}),500),t({type:W,payload:e});case"Projects":return window.sessionStorage.setItem("nav",e),setTimeout((function(){document.querySelector("#intro-proj").scrollIntoView()}),500),t({type:W,payload:e});default:return!1}}},DarkMode:function(e){return function(t){return window.sessionStorage.setItem("toggleDarkMode",e),t({type:z,payload:e})}}})(re),le=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(ce.jsx)("div",{className:"Header",id:"top-spot",children:Object(ce.jsxs)("section",{className:"hero",children:[Object(ce.jsx)("div",{id:"header",children:Object(ce.jsx)(oe,{})}),Object(ce.jsx)("div",{className:"hero-header",children:Object(ce.jsx)("h1",{className:"hero-title",children:"Need A Web App?"})}),Object(ce.jsxs)("footer",{className:"hero-footer",children:[Object(ce.jsx)("a",{className:"button button-primary",href:"tel:+12402737952",children:"Call"}),Object(ce.jsx)("a",{className:"button ",href:"mailto:thisguycodez@gmail.com",children:"Email"})]})]})})}}]),n}(a.a.Component),de=n(152),je=n(19),be=je.a.div(F||(F=Object(b.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\n-webkit-align-items:flex-start;\njustify-content:flex-start;\nalign-items:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n"]))),he=je.a.div(L||(L=Object(b.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-grid-gap:10px;\ngrid-gap:10px;\n\n\n\n\n\n@media screen and (max-width:500px){\n-webkit-flex-direction:column;\nflex-direction:column;\n}\n\n\n\n\n\n@media screen and (max-width:900px){\n\nfigure{\nmargin-top:-50px;\n}\n\n}\n\n\n"]))),pe={backgroundColor:"rgba(0,0,0,0)",WebkitTextFillColor:"azure",color:"azure",border:"none",padding:".5%"},ue=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).toggle=function(){return i.setState({tooltipOpen:!i.state.tooltipOpen})},i.state={tooltipOpen:!1},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(ce.jsx)(be,{children:Object(ce.jsx)(he,{children:Object(ce.jsxs)(de.a,{style:pe,children:[Object(ce.jsxs)("div",{className:"myRole",children:[Object(ce.jsxs)("h1",{className:"error",id:"intro",children:["Full",Object(ce.jsx)("span",{children:"-"}),"Stack"]}),Object(ce.jsxs)("h1",{className:"code",children:["Web",Object(ce.jsx)("span",{children:"-"}),Object(ce.jsx)("span",{children:"Dev"})]})]}),Object(ce.jsx)("span",{className:"navbar-brand",id:"me",children:Object(ce.jsxs)("span",{style:Y,children:[Object(ce.jsx)("figure",{children:Object(ce.jsx)("img",{src:this.props.me,style:Q,alt:"me",width:"50",height:"50"})}),Object(ce.jsx)("h2",{style:X,children:"Guy"})," "," .M O"]})}),Object(ce.jsx)("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.65rem",padding:"0px 1px"},children:'" I am here to help start-ups, small businesses, entrepreneur\'s, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technology. "'})]})})})}}]),n}(a.a.Component),me=Object(v.b)((function(e){return{me:e.me}}),{})(ue),fe=je.a.div(P||(P=Object(b.a)(["\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-width:100%;\nwidth:100%;\n}\n"]))),ge=je.a.div(H||(H=Object(b.a)(["\npadding-top:50px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:flex-start;\njustify-content:flex-start;\n-webkit-text-fill-color:azure;\ncolor:azure;\n\n\n\n@media(max-width:500px){\n-webkit-justify-content:center;\n-webkit-flex-direction:row;\n-webkit-width:100%;\njustify-content:center;\nflex-direction:row;\nwidth:100%;\n}\n\n"]))),xe=je.a.div(K||(K=Object(b.a)(["\npadding-top:25px;\nflex:1;\ndisplay:flex;\n-webkit-flex-direction:row;\nflex-direction:row;\n-webkit-text-fill-color:azure;\ncolor:azure;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\nalign-items:center;\nfont-size:",";\nfont-weight:bolder;\n\n\nfigure i{\nfont-size:",";\n}\n\n\n\n\n\n\n@media(max-width:500px){\nflex-direction:column;\npadding:0;\n}\n"])),window.innerWidth<=300?".6rem":"1rem",window.innerWidth<=300?"1.3rem":"2rem"),Oe=je.a.div(V||(V=Object(b.a)(["\n-webkit-height:125px;\n-webkit-width:125px;\nheight:125px;\nwidth:125px;\nbackground-color:rgba(0,0,0,.5);\n-webkit-text-fill-color:azure;\ncolor:azure;\nborder:double rgba(250,250,250,.5);\n-webkit-box-shadow:0 0 10px #888;\nbox-shadow:0 0 10px #888;\n-webkit-border-radius:50%;\nborder-radius:50%;\npadding:15px 10px;\ndisplay:flex;\n-webkit-justify-content:center;\n-webkit-align-items:center;\njustify-content:center;\nalign-items:center;\n\n@media(max-width:500px){\n-webkit-height:110px;\n-webkit-width:110px;\nheight:110px;\nwidth:110px;\n}\n\n"]))),we=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(ce.jsxs)("div",{children:[Object(ce.jsx)(ge,{children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fas fa-layer-group ",style:{fontSize:window.innerWidth<=700?"3rem":"4rem"}}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h2",{style:{fontSize:window.innerWidth<=700?"1.8rem":"3rem",textShadow:"0 0 10px #000",fontFamily:"Permanent Marker, cursive"},children:"My Stack"})})]})}),Object(ce.jsxs)(fe,{children:[Object(ce.jsxs)(xe,{children:[Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-html5"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"HTML5"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-css3-alt"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"CSS3"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-bootstrap"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Bootstrap"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-python"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Python"})})]})})]}),Object(ce.jsxs)(xe,{children:[Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-js-square"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Javascript"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-react"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"React.js"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fas fa-atom"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"React-Redux"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-node-js"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Express.js"})})]})})]}),Object(ce.jsxs)(xe,{children:[Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fab fa-node"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Node.js"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fas fa-table"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"DB Design"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fas fa-database"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"Knex(JS-SQL)"})})]})}),Object(ce.jsx)(Oe,{className:"skillzAnime",children:Object(ce.jsxs)("figure",{children:[Object(ce.jsx)("i",{className:"fas fa-database"}),Object(ce.jsx)("figcaption",{children:Object(ce.jsx)("h6",{children:"postgresql"})})]})})]})]})]})}}]),n}(a.a.Component),ye=je.a.span(G||(G=Object(b.a)(["\ncolor:red;\n-webkit-text-fill-color:red;\n"]))),Ae=je.a.span(U||(U=Object(b.a)(["\ncolor:green;\n-webkit-text-fill-color:green;\n"]))),ke={WebkitTextFillColor:"#5791ff",color:"#5791ff"},ve=(window.innerWidth,{backgroundColor:"rgba(0,0,0,.5)",cursor:"pointer",marginBottom:"20px"}),Ne={WebkitTextFillColor:"#fff",color:"#fff",textShadow:"0 0 3px #333 ",display:"flex",alignItems:"center",justifyContent:"center",gridGap:"3px",fontSize:window.innerWidth<=500?"1.5rem":"1.8rem",margin:"0"},Ce=n(76),Me=n(155),Te=n(156),Be=n(153),We=n(154),ze=(n(70),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={valOrNah1:"",valOrNah2:"",valOrNah3:"",msg:{name:"",email:"",message:""},errMsg:"",passMsg:""},i.toInbox=i.toInbox.bind(Object(p.a)(i)),i.toggle=i.toggle.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"toInbox",value:function(){var e=this;return C.a.post("https://tgczz.herokuapp.com/api/admin/inbox",this.state.msg).then((function(t){e.setState({passMsg:t.data}),setTimeout((function(){return e.toggle()}),3e3)})).catch((function(t){e.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})}))}},{key:"toggle",value:function(e){this._isMounted&&(this.setState({valOrNah1:"",valOrNah2:"",valOrNah3:"",msg:{name:"",email:"",message:""},errMsg:"",passMsg:""}),this.props.showOrNot(this.props.show),this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me"),document.querySelector("#toggler")&&document.querySelector("#toggler").click())}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return Object(ce.jsxs)("div",{className:"registration-form",children:[Object(ce.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),e.toInbox(),t.target.reset()},"data-testid":"theForm",children:[Object(ce.jsx)("div",{className:"me-icon",children:Object(ce.jsx)("span",{children:Object(ce.jsx)("img",{src:this.props.me,width:"100%",height:"100%",alt:"small me"})})}),Object(ce.jsxs)(Be.a,{children:[Object(ce.jsxs)("div",{className:"form-input-group form-group",children:[Object(ce.jsx)("div",{className:"form-input-group-prepend",children:Object(ce.jsx)("span",{className:"input-group-text",children:Object(ce.jsx)("i",{className:"fas fa-pen-square"})})}),Object(ce.jsx)("input",{className:"form-control ".concat(this.state.valOrNah1),type:"text",name:"name",id:"name",onChange:function(t){e.setState({msg:Object(r.a)(Object(r.a)({},e.state.msg),{},{name:t.target.value})})},placeholder:"Name...",minLength:3,required:!0})]}),Object(ce.jsxs)("div",{className:"form-input-group form-group",children:[Object(ce.jsx)("div",{className:"form-input-group-prepend",children:Object(ce.jsx)("span",{className:"input-group-text",children:Object(ce.jsx)("i",{className:"fas fa-pen-square"})})}),Object(ce.jsx)("input",{className:"form-control ".concat(this.state.valOrNah2),type:"email",name:"email",id:"email",onChange:function(t){e.setState({msg:Object(r.a)(Object(r.a)({},e.state.msg),{},{email:t.target.value})})},placeholder:"Email...",minLength:8,required:!0})]}),Object(ce.jsxs)("div",{className:"form-input-group form-group",children:[Object(ce.jsx)("div",{className:"form-input-group-prepend",children:Object(ce.jsx)("span",{className:"input-group-text",children:Object(ce.jsx)("i",{className:"fas fa-comment-dots"})})}),Object(ce.jsx)("textarea",{className:"form-control ".concat(this.state.valOrNah3),type:"textarea",name:"message",id:"message",onChange:function(t){e.setState({msg:Object(r.a)(Object(r.a)({},e.state.msg),{},{message:t.target.value})})},placeholder:"Message...",minLength:10,required:!0})]}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"submit",value:"Send",className:"btn btn-block send2me"})}),Object(ce.jsx)("div",{className:"card-footer",children:Object(ce.jsx)("div",{className:"d-flex justify-content-center form-links",children:Object(ce.jsxs)(We.a,{children:[Object(ce.jsx)(ye,{children:this.state.errMsg}),Object(ce.jsx)(Ae,{children:this.state.passMsg})]})})})]})]}),Object(ce.jsxs)("div",{className:"social-media",children:[Object(ce.jsx)("h5",{children:"Other Options"}),Object(ce.jsxs)("div",{className:"d-flex justify-content-end social-icons social_icon",children:[Object(ce.jsx)("a",{href:"tel:+12402737952",children:Object(ce.jsx)("i",{className:"fas fa-mobile-alt xxx",style:ke})}),Object(ce.jsx)("a",{href:"mailto:thisguycodez@gmail.com",children:Object(ce.jsx)("i",{className:"fab fa-google-plus-square xxx",style:ke})}),Object(ce.jsx)("a",{href:"https://www.linkedin.com/in/guytonoriji",children:Object(ce.jsx)("i",{className:"fab fa-linkedin xxx",style:ke})})]})]})]})}}]),n}(a.a.Component)),Ie=Object(v.b)((function(e){return Object(r.a)({},e)}),{changeBtnLabel:E,showOrNot:R})(ze),Se=(n(134),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={calling:"",modal:!!i.props.show},i.toggle=i.toggle.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"componentDidUpdate",value:function(){this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me")}},{key:"toggle",value:function(){this.props.showOrNot(this.props.show),this.props.show?this.props.changeBtnLabel("Hide.."):this.props.changeBtnLabel("Contact Me"),setTimeout((function(){document.querySelector(".App").scrollBy(0,3e3)}),500)}},{key:"render",value:function(){return Object(ce.jsx)(ce.Fragment,{children:window.innerWidth<700?Object(ce.jsx)(Ie,{}):Object(ce.jsxs)("div",{children:[Object(ce.jsx)("div",{className:"container container-slick-btn primary",children:Object(ce.jsx)(Ce.a,{style:ve,id:"toggler",onClick:this.toggle,className:"primary-neumorph",children:Object(ce.jsx)("span",{children:Object(ce.jsxs)("h1",{style:Object(r.a)(Object(r.a)({},Ne),{},{marginBottom:"1rem"}),children:[Object(ce.jsx)("i",{className:"fas fa-envelope"})," ",this.props.btnL," ",Object(ce.jsx)("i",{className:"fas fa-envelope"})]})})})}),Object(ce.jsx)(Me.a,{toggler:"#toggler",className:this.props.className,children:Object(ce.jsxs)(de.a,{className:"cdh",children:[Object(ce.jsxs)("small",{children:[Object(ce.jsx)("span",{children:"Contact Me Via Email"}),Object(ce.jsxs)("sup",{children:[Object(ce.jsx)("code",{children:"-ThisGuyCodez"}),"\xa9"]})]}),Object(ce.jsx)("br",{}),Object(ce.jsx)(Te.a,{children:Object(ce.jsx)(Ie,{})})]})})]})})}}]),n}(a.a.Component)),qe=Object(v.b)((function(e){return Object(r.a)({},e)}),{changeBtnLabel:E,showOrNot:R})(Se),Ee={paddingTop:"100px",WebkitHeight:"100%",height:"100%",WebkitTextFillColor:"azure",color:"azure",fontWeight:"bolder"},Re=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(ce.jsxs)("div",{children:[Object(ce.jsx)(me,{}),Object(ce.jsx)(we,{}),Object(ce.jsxs)("div",{style:Ee,children:[Object(ce.jsx)("span",{className:"navbar-brand",id:"me",children:Object(ce.jsxs)("span",{style:Y,children:[Object(ce.jsx)("figure",{children:Object(ce.jsx)("img",{src:this.props.me,style:Q,alt:"me",width:"50",height:"50"})}),Object(ce.jsx)("h2",{style:X,children:"Guy"})," "," .M O"]})}),Object(ce.jsx)("p",{style:{fontSize:window.innerWidth<=700?"1.2rem":"1.6rem"},children:this.props.pitch}),Object(ce.jsx)(qe,{buttonLabel:this.props.btnL,className:"registration-holder"})]})]})}}]),n}(a.a.Component),Fe=Object(v.b)((function(e){return Object(r.a)({},e)}),{changeBtnLabel:E})(Re),Le=["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"],Pe=(n(135),n.p+"static/media/js.afcba61e.png"),He=n.p+"static/media/react.bd8a9381.png",Ke=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).actionStyle=e.actionStyle.bind(Object(p.a)(e)),e.$etId=e.$etId.bind(Object(p.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(e){this.props.getMyWork()}},{key:"actionStyle",value:function(e){return"PLAY"===e?{WebkitTextFillColor:"#fc0303"}:{WebkitTextFillColor:"#03fc13"}}},{key:"$etId",value:function(){var e=[];return Le.forEach((function(t,n){Math.floor(Math.random()*n)%2===Math.floor(2*Math.random()+1)&&e.push(t+Le[Math.floor(52*Math.random())])})),e.join("")}},{key:"render",value:function(){var e=this;return Object(ce.jsxs)("div",{children:[Object(ce.jsx)("figure",{id:"intro-proj",style:{WebkitTextFillColor:"azure",marginTop:"30px"},children:Object(ce.jsxs)("figcaption",{className:" myRole myProjectRole",children:[Object(ce.jsx)("i",{className:"fas fa-project-diagram"}),Object(ce.jsxs)("h1",{className:"error",children:["P r",Object(ce.jsx)("span",{children:" o "}),"j e"]}),Object(ce.jsxs)("h1",{className:"code",children:[" c",Object(ce.jsx)("span",{children:" t"}),Object(ce.jsx)("span",{children:" s"})]}),Object(ce.jsx)("i",{className:"fas fa-project-diagram",style:{transform:"rotate(180deg) rotateX(180deg)"}})]})}),Object(ce.jsx)(h.a,{children:Object(ce.jsx)("div",{id:"movie-card-list",className:"movie-card-holder",children:this.props.work?this.props.work.map((function(t){return Object(ce.jsxs)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(t.image,")")},children:[Object(ce.jsx)("div",{className:"movie-card__overlay",style:{background:e.props.mode?"linear-gradient(to ".concat(window.innerWidth<=700?"bottom":"right",", rgba(42,159,255,.2) 0%,rgba(33,33,32,1) ").concat(window.innerWidth<=700?"80%":"60%",",rgba(33,33,32,1) 100%)"):"linear-gradient(to ".concat(window.innerWidth<=700?"bottom":"right",", rgba(245,245,245,.4) 4%,#999 ").concat(window.innerWidth<=700?"96%":"60%",",rgba(245,245,245,1) 100%)")}}),Object(ce.jsxs)("div",{className:"movie-card__content",children:[Object(ce.jsxs)("div",{className:"movie-card__header",children:[Object(ce.jsx)("h3",{className:"movie-card__title",style:{WebkitTextFillColor:e.props.mode?"azure":"#000"},children:t.title}),Object(ce.jsx)("h4",{className:"movie-card__info",style:{WebkitTextFillColor:e.props.mode?"#2a9fff":"#000"},children:t.description})]}),Object(ce.jsx)("div",{className:"movie-card__desc",children:Object(ce.jsxs)("div",{className:"card-custom-avatar",children:[!/pure/gi.test(t.description)&&!/plain/gi.test(t.description)||Object(ce.jsx)("img",{className:"img-fluid",src:Pe,alt:"project code language used",width:"30",height:"30"}),!/react/gi.test(t.description)||Object(ce.jsx)("img",{className:"img-fluid",src:He,alt:"project code language used",width:"30",height:"30"}),!/node/gi.test(t.description)||Object(ce.jsx)("img",{className:"img-fluid",src:"data:image/png;base64,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",alt:"project code language used",width:"30",height:"30"}),!/firebase/gi.test(t.description)||Object(ce.jsx)("img",{className:"img-fluid",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABZFJREFUeJztms1vFHUYx7/PM7PT7luhW0Ag2xZL6BtoFGhrxcSrJiYmHoxvF6MCCV4MB0EPHIwH40GMJ4yk4MFE4h/gwYR4UCwV5WB4aTTCRUKptNBS6O7M83igW3a7u32bZ0sT53Pb+c18n+f5zjO/mdn5AREREREREREREXbIAF6Xk3jxYeexGLgWoqrYqwG+1GNI1ELfkpoYAEYXMzZoPfbXRN8QshaUk2gixSgACHCdp9FG+zBlHccK8w4goKtI/BH1sNc6hiXmBqg8MAAAlPC+fIu4dRwr7A1AqQEMbMQU3i7bT0E6gE49UqN5aJHYB6dSAwBACYd0APUl205gHwgX5VEcMc9hCdTC/TIDGNiswFuF33oarhIOAQAEB+U41tcgj0VhaoB8jSQDrZXGFDgkn6MOAPQqXirsx4wkMQ4upK2D3Rvlp7YNlvkC1h3go6NqIEIWDXhTFaRSWrAo3p2vC2SofY+QDGssdtoyXcDagArXfzGqOIwTeJYZvSVJzNMFMtS+RwXfM5BmULf83J2xTNnUAF3AAGa0BHn3vUpjlbpgtnji1AMR3W6SbEHOUgwVJsBiROnC1LXMzkDIL0tkThdULB4AKNhhli2sDZD5DciNpKYdoaw/Hv+l4uEzXVC1eACqtDoN0GOIgbCt2njg83m5m3gSAPK3U1sCH0FZMoykNqY+q1b8TMaPWeV8X84KD1uZ4FYbnh5Je9CZoEpZfzJR3gWJOLBx82tViwcA6A5Vu5c4uw6YZwIMfD6L6fru4m35sWRLSRck4kBzM9jleYtjcKP+1rEpdMKzenZUNEAEOn19TVN5YG72J2a6IBGHZJsVziLTydvNA3YdoJUNUJ/PIOdtrTSWv5VsDpJxkWyzLnTmSyCsPgO4wiUgCv/uSENLtWPcRq+FmrOypOIBKFaZAXoELILOsu3TsTOcr8tWDJxx4e1OCbNTdeKsHnCVGYA2ZJmRLN4kwL3cjYaK7waccRHbnRKO0TLjy3ZVm9xtOqDCBChT3ln13bK3N8648HpTgbPs4gFmTmBo25blHl+iZSEy9wlQFJP50YbHy4JlXMR6UwE75IQNqWCTy8CmAwgl93id9M5p4KwtCZRx4fUmfceg+PtBbJ4IbTqg6BYoiptTN9M9JUEyLryeZJ4dXvqEVzWkzURob8BE/A9H3NkvQpxxEetJ5tnlmEms2ZhqYkDoZ2o5jvXkYAQARHBt6u91TcyOBxTOfCLH7v3flgjE54SbpB0XcmF0wneA8+Ds58cTfxWK14wrXl9quhbFAwCDXb2jVd8+F68Tni4ACJSu5sbSTwOAruV8/KlUjpnqDPSrY/BIHNqAwjuA/2/iH4fBaHTuxvsbAiaqX+jY0LERfh4I3wGKLlG6HEyk+qnJuV3fnwZz7YufCb4KDGB05UaTE7wudqOuLx1jopX7DmhwJwhlgJ5CCgGNwUtv8noSyRUtHgCUt+qvu0ItwghnwCS68kHjuNebbmTmFV8NwgyCf2feP2IXItSTWZDYsCbWunYXOytfPABAcEtZQp3EUAfHXhn5gWN4TqDnw+gsB1EMaJBr597hoTA6Jv+u6ik42trxjpJ+zGDTT1dzEdHfiegA9106Y6FnukZIBjublPARBPuYjb88i44T04d05dIxern8m8JyMV8kBQA62P2EQL5gwjMWegI9Tm5wmHf+ecNCr5iaGADMLIE52/Gqgj5lwuZlypxTogPcc3HQNLkiarY+hwjKfZe/obx2AvqJiOQXe6xAxpR0P65c6qtl8UANO2AuMtjZroqjzHi+6j4CBetXzPoB7R4eXYm8VswAYOayGOp4QYWOMqOteEwEQ8RyIOxtbamsqAEF9HRrvSbibyjQD9V7RPoj9Q5/RwR5GPlERERERERERPwv+Q9st9My1+8L5wAAAABJRU5ErkJggg==",alt:"project code language used",width:"30",height:"30"}),!/python/gi.test(t.description)||Object(ce.jsx)("img",{className:"img-fluid",src:"data:image/png;base64,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",alt:"project code language used",width:"30",height:"30"})]})}),Object(ce.jsxs)("a",{href:t.link,className:"see-link",style:{borderRadius:"100%",WebkitTextFillColor:e.props.mode?"azure":"#000"},children:["PLAY"===t.action?Object(ce.jsx)("i",{className:"fas fa-gamepad"}):Object(ce.jsx)("i",{className:"fas fa-eye"})," ",Object(ce.jsx)("small",{children:Object(ce.jsx)("code",{children:"PLAY"===t.action?"play":"view"})})]}),Object(ce.jsxs)("a",{href:t.github,className:"btn btn-outline-primary",style:{WebkitTextFillColor:e.props.mode?"azure":"#000"},children:[Object(ce.jsx)("i",{className:"fas fa-laptop-code"})," see the code ",Object(ce.jsx)("i",{className:"fas fa-laptop-code"})]})]})]},t.id)})):Object(ce.jsxs)("div",{children:[Object(ce.jsx)("h4",{children:Object(ce.jsx)("b",{style:{WebkitTextFillColor:"azure"},children:"Loading Projects..."})}),Object(ce.jsx)(k.a,{style:{width:"3rem",height:"3rem"},color:"danger"})]})})})]})}}]),n}(a.a.Component),Ve=Object(v.b)((function(e){return Object(r.a)({},e)}),{getMyWork:q,tog_description:function(e){return function(t){var n=document.querySelector("#".concat(e));/off/i.test(n.getAttribute("class"))?n.setAttribute("class","fas fa-toggle-on"):n.setAttribute("class","fas fa-toggle-off")}}})(Ke),Ge=je.a.div(D||(D=Object(b.a)(["\nflex:1;\n-webkit-text-align: center;\ntext-align: center;\nbackground-color:#0C0032;\noverflow-x:hidden;\noverflow-y:auto;\nbackground-repeat:no-repeat;\nbackground-position:top;\n-moz-background-size:cover;\n-webkit-background-size:cover;\nbackground-size:cover;\n\n"]))),Ue=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={bgs:"cover",bgp:"center"},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getMyWork()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(ce.jsxs)(Ge,{className:"App",style:{backgroundImage:"url(".concat(this.props.mode?this.props.bgdm:this.props.bg,")"),backgroundSize:this.state.bgs,backgroundPosition:this.state.bgp},children:[Object(ce.jsx)(le,{}),Object(ce.jsx)(h.a,{children:"Home"===this.props.compRendered?Object(ce.jsx)(Fe,{}):Object(ce.jsx)(Ve,{})}),Object(ce.jsx)("span",{style:{display:"none"},children:window.token})]})}}]),n}(a.a.Component),De=Object(v.b)((function(e){return Object(r.a)({},e)}),{getMyWork:q})(Ue),Ye=(n(136),n(137),n(138),n(82)),Xe=n(32),Je=n(80),Qe=n.p+"static/media/tgc1.aa9fe92d.png",Ze=n.p+"static/media/me.ad80dcf7.png",_e=n.p+"static/media/wave.5fe38509.png",$e=n.p+"static/media/bg6.a129eb84.jpg",et=n.p+"static/media/bg6dm.567ade97.jpg",tt={compRendered:sessionStorage.getItem("nav")||"Home",work:[],error:"",mode:!window.sessionStorage.getItem("toggleDarkMode")||JSON.parse(window.sessionStorage.getItem("toggleDarkMode")),show:!1,me:Ze,logo:Qe,wavio:_e,btnL:"Contact Me",bg:$e,bgdm:et,pitch:"\" With your own website you can build your brand's credibility,\nshowcase your work at all times,\nincrease your audience, \nand always have your self open for opportunities.\nYou never know who's admiring your content ,\nbring your audience into the world they want to be in.\nCreating content and good vibes can never get old to me.\nFrom custom websites to updates to your websites,\nI can help. Contact Me. \"",promoGameCodes:[{link:"https://www.amazon.com/promocode/A1WBUC4TOJAT89?ref_=assoc_tag_ph_1524218815239&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=810a31eb01ed5ff79246fab0bcec4670",name:"Save 60% at AreSpark"},{link:"https://www.amazon.com/promocode/AH58KFKPSGK6Y?ref_=assoc_tag_ph_1524218824726&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=9b1ba2118bd76a361053eeb9e25b5cf4",name:"Save 50% at RegeMoudal"},{link:"https://www.amazon.com/promocode/A1UFIWC52N42Z2?ref_=assoc_tag_ph_1524218830414&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=9ddd2064254c1eca9e726d86ac0a3c56",name:"Save 50% at STOGA"},{link:"https://www.amazon.com/promocode/A2QWJ5WMOQ2ETL?ref_=assoc_tag_ph_1524218740154&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=640950a59019657e3e095fc788491979",name:"Save 50% at N-brand"},{link:"https://www.amazon.com/promocode/A2LQ9AH18RF13?ref_=assoc_tag_ph_1524218724173&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=d04fddd1d627ad8aaea77967bf29d8b4",name:"Save 15% at PICTEK"}]},nt=n(81);n.n(nt).a.config();var it=Object(Xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(r.a)({},e);case T:return Object(r.a)(Object(r.a)({},e),{},{work:t.payload});case B:return Object(r.a)(Object(r.a)({},e),{},{btnL:t.payload});case W:return Object(r.a)(Object(r.a)({},e),{},{compRendered:t.payload});case z:return Object(r.a)(Object(r.a)({},e),{},{mode:t.payload});case I:return Object(r.a)(Object(r.a)({},e),{},{show:t.payload});case S:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload});default:return e}}),Object(Xe.a)(Je.a));c.a.render(Object(ce.jsx)(v.a,{store:it,children:Object(ce.jsx)(Ye.a,{children:Object(ce.jsx)(De,{})})}),document.getElementById("root"))},70:function(e,t,n){},87:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.fa3e24af.chunk.js.map