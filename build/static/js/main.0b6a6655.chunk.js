(this["webpackJsonpknight-net"]=this["webpackJsonpknight-net"]||[]).push([[0],{33:function(t,e,n){var r={"./RustWebServer.png":[74,4],"./SiconEPOS.png":[75,5],"./bevyroguelike.png":[76,6],"./logue.png":[77,7]};function a(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],a=e[0];return n.e(e[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=33,t.exports=a},46:function(t,e,n){},47:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(34),o=n.n(c),i=(n(46),n(47),n(12)),s=n(9),u=n.n(s),p=n(15),l=n(17),h=n(10),f=n(21),d=n(20),b=n(24),g=n.n(b),j=function(t){return"https://api.github.com/repos/bolto720/".concat(t)},O=n(94),v=n(95),m=n(96),x=n(92),S=n(93),k=n(22),y=n(6),_=n(3),w=function(t){Object(f.a)(r,t);var e=Object(d.a)(r);function r(t){var n;return Object(l.a)(this,r),(n=e.call(this,t)).state={url:""},n}return Object(h.a)(r,[{key:"componentWillMount",value:function(){var t=this;n(33)("./".concat(this.props.repo.name.replace("-",""),".png")).then((function(e){t.setState({url:e.default}),console.log(e)}))}},{key:"render",value:function(){n(33)("./".concat(this.props.repo.name.replace("-",""),".png"));var t=this.props.classes;return Object(_.jsxs)(m.a,{className:t.card,children:[Object(_.jsx)(x.a,{title:this.props.repo.name,className:t.card_title}),Object(_.jsxs)(S.a,{children:[Object(_.jsx)(k.a,{className:t.card_content,children:this.props.repo.description}),Object(_.jsx)("a",{href:this.props.repo.html_url,className:t.links,children:this.props.repo.html_url}),Object(_.jsx)("br",{}),Object(_.jsx)("img",{src:this.state.url,height:"70%",width:"70%"})]})]})}}]),r}(r.Component),E=Object(y.a)((function(t){return{card:{display:"flex",flexDirection:"column",marginTop:"20px",marginLeft:"40px",marginRight:"40px",fontFamily:"verdana",backgroundColor:"#44475a",boxShadow:"2px 2px 4px #000000"},card_title:{fontFamily:"verdana",color:"#bd93f9",textShadow:"2px 2px 4px #000000"},card_content:{fontFamily:"verdana",color:"#ffb86c",fontSize:"20px"},links:{color:"#50fa7b"}}}))(w),T=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={repo:[],language:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(u.a.mark((function t(){var e,n=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,e=[j("SiconEPOS"),j("bevy-roguelike"),j("logue"),j("RustWebServer")],t.next=4,g.a.get("https://github-lang-deploy.herokuapp.com/").then(function(){var t=Object(p.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setState({language:e.data});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:e.map(function(){var t=Object(p.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(e).then(function(){var t=Object(p.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setState({repo:[].concat(Object(i.a)(n.state.repo),[e.data])});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.repo,n=t.language;return console.log(e),Object(_.jsx)("div",{children:Object(_.jsx)(O.a,{className:"grid",children:e.map((function(t,e){return Object(_.jsx)(E,{repo:t,language:n},e)}))})})}}]),n}(r.Component);Object(v.a)((function(t){return{grid:{padding:t.spacing(8),margin:t.spacing(8)}}}));var C=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{className:"Title",children:"Welcome to Knight-Net"}),Object(_.jsx)(T,{})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root")),N()}},[[72,1,2]]]);
//# sourceMappingURL=main.0b6a6655.chunk.js.map