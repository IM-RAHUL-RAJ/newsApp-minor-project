(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{42:function(e,t,n){},63:function(e,t,n){},66:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),a=n(43),i=n.n(a),o=(n(63),n(16)),r=n(0),l=n.n(r),b=n(1),j=n(7),d=n(8),u=n(13),h=n(14),p=n(4),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),c=t.call(this,e),console.log("i am constructor"),c.state={name1:"loading...",count:0},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("i am coponentdidmount"),e.next=3,fetch("https://newsapi.org/v2/everything?q=".concat(this.props.newsName,"&apiKey=39c3025e706146f99c1db7b6e2295f6e"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n,typeof n.articles,n.articles,typeof ar),c=n.articles.map((function(e){return Object(p.jsx)("div",{class:"p-8",children:Object(p.jsxs)("div",{class:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(p.jsx)("img",{class:"w-full",src:e.urlToImage,alt:"news"}),Object(p.jsxs)("div",{class:"px-6 py-4",children:[Object(p.jsx)("div",{class:"font-bold text-xl mb-2",children:e.title}),Object(p.jsx)("p",{class:"text-gray-700 text-base",children:e.description}),Object(p.jsxs)("button",{class:"font-bold text-xl mb-2",children:[" ",Object(p.jsx)("a",{href:e.url,children:"Read more"})]})]}),Object(p.jsxs)("div",{class:"px-6 pt-4 pb-2",children:[Object(p.jsx)("span",{class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#coding"}),Object(p.jsx)("span",{class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#rahulraj"}),Object(p.jsx)("span",{class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#live"})]})]})})})),console.log(c),this.setState({name1:c});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(" i am render",this.state.count),Object(p.jsxs)("div",{class:"p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1",children:[this.state.name1," "]})}}]),n}(s.a.Component),O=n(29);n(42);var m=function(){return Object(p.jsxs)("div",{className:"parent",children:[Object(p.jsxs)("div",{className:"logout-div",children:[Object(p.jsxs)("a",{href:"./Home",id:"logo",children:[" ","Home"]}),Object(p.jsx)("button",{className:"logout",class:"btn btn-outline-secondary",children:Object(p.jsx)("a",{href:"./",children:" Logout"})})]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./Apple",children:"APPLE"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-success",children:Object(p.jsx)("a",{href:"./Tesla",children:"TESLA"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-warning",children:Object(p.jsx)("a",{href:"./Bitcoin",children:"BITCOIN"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-info",children:Object(p.jsx)("a",{href:"./nasa",children:"NASA"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-success",children:Object(p.jsx)("a",{href:"./upsc",children:"UPSC"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./technology",children:"TECHNOLOGY"})})]})]})},f=n(111),g=n(32),y=Object(c.createContext)(),v=n(18),N=n(36),w=n(109),S={apiKey:"AIzaSyBmWe7O0135pyHYt98I5m1zzCrj8uOgYnU",authDomain:"minor-project-newsapp.firebaseapp.com",projectId:"minor-project-newsapp",storageBucket:"minor-project-newsapp.appspot.com",messagingSenderId:"989542311231",appId:"1:989542311231:web:6fef2459f1e8d9c8e91f8a"},A=n(112),k=n(49),I=n.n(k),C=(n(66),function(){var e,t=Object(c.useContext)(y),n=Object(c.useState)(""),s=Object(o.a)(n,2),a=(s[0],s[1],Object(c.useState)("")),i=Object(o.a)(a,2);i[0],i[1],Object(c.useRef)(null),Object(c.useRef)(null);return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(p.jsx)(v.a,{to:"/main"}):Object(p.jsx)("div",{className:"signin min-vh-100 position-relative",children:Object(p.jsx)("div",{className:"img-overlay position-absolute w-100 h-100",children:Object(p.jsx)(f.a,{component:"main",maxWidth:"xs",children:Object(p.jsxs)(A.a,{sx:{paddingTop:40,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)("br",{}),Object(p.jsx)(I.a,{className:"mx-auto",id:"google-button",label:"Sign in with Google",onClick:function(){var e=new g.a.auth.GoogleAuthProvider;g.a.auth().signInWithPopup(e).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid}),Object(N.a)("Here you go\u270c\ud83c\udffb",{type:"success"})})).catch((function(e){console.log(e),Object(N.a)("Oops.. Email already exists",{type:"error"})}))}}),Object(p.jsx)("br",{}),Object(p.jsx)(w.a,{href:"/signup",style:{color:"black"},variant:"body2",children:"Don't have an account? Sign Up"})]})})})})}),D=(n(67),function(){var e,t=Object(c.useContext)(y),n=Object(c.useState)(""),s=Object(o.a)(n,2),a=(s[0],s[1],Object(c.useState)("")),i=Object(o.a)(a,2);i[0],i[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(p.jsx)(v.a,{to:"/main"}):Object(p.jsx)("div",{className:"signin min-vh-100 position-relative",children:Object(p.jsx)("div",{className:"img-overlay position-absolute w-100 h-100",children:Object(p.jsx)(f.a,{component:"main",maxWidth:"xs",children:Object(p.jsxs)(A.a,{sx:{paddingTop:40,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)("br",{}),Object(p.jsx)(I.a,{className:"mx-auto",id:"google-button",label:"Sign up with Google",onClick:function(){var e=new g.a.auth.GoogleAuthProvider;g.a.auth().signInWithPopup(e).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid}),Object(N.a)("Here you go\u270c\ud83c\udffb",{type:"success"})})).catch((function(e){console.log(e),Object(N.a)("Oops.. Email already exists",{type:"error"})}))}}),Object(p.jsx)("br",{}),Object(p.jsx)(w.a,{href:"/",style:{color:"black"},variant:"body2",children:"Already have an account? Sign in"})]})})})})}),P=(n(94),function(){return Object(p.jsxs)("div",{className:"notFoundDiv",children:[Object(p.jsx)("header",{children:"ERROR 404: PAGE NOT FOUND"}),Object(p.jsx)("br",{}),Object(p.jsx)(w.a,{class:"notFound",href:"./main",variant:"body2"})]})}),T=function(){return Object(p.jsxs)("div",{className:"parent",children:[Object(p.jsxs)("div",{className:"logout-div",children:[Object(p.jsxs)("a",{href:"./",id:"logo",children:[" ","Utility App"]}),Object(p.jsx)("button",{className:"logout",class:"btn btn-outline-secondary",children:Object(p.jsx)("a",{href:"./",children:" Logout"})})]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./Home",children:"News"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./Weather",children:"Weather"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./College",children:"College"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./Jobs",children:"Jobs"})}),Object(p.jsx)("button",{type:"button",class:"btn btn-outline-primary",children:Object(p.jsx)("a",{href:"./Live",children:"Live Score"})})]})]})},E=(n(95),"9157fa472ab54f0fd991ab493855aecf"),W="https://api.openweathermap.org/data/2.5/";var U=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({}),i=Object(o.a)(a,2),r=i[0],l=i[1];return Object(p.jsx)("div",{id:"main-top",className:"undefined"!=typeof r.main&&r.main.temp>16?"app warm":"app",children:Object(p.jsxs)("main",{children:[Object(p.jsx)("div",{className:"search-box",children:Object(p.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return s(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(W,"weather?q=").concat(n,"&units=metric&APPID=").concat(E)).then((function(e){return e.json()})).then((function(e){l(e),s(""),console.log(e)}))}})}),"undefined"!=typeof r.main?Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"location-box",children:[Object(p.jsxs)("div",{className:"location",children:[r.name,", ",r.sys.country]}),Object(p.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],s=e.getFullYear();return"".concat(t," ").concat(n," ").concat(c," ").concat(s)}(new Date)})]}),Object(p.jsxs)("div",{className:"weather-box",children:[Object(p.jsxs)("div",{className:"temp",children:[Math.round(r.main.temp),"\xb0c"]}),Object(p.jsx)("div",{className:"weather",children:r.weather[0].main})]})]}):""]})})};g.a.initializeApp(S);var H=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(p.jsx)(O.a,{children:Object(p.jsx)(y.Provider,{value:{user:n,setUser:s},children:Object(p.jsxs)(v.d,{children:[Object(p.jsx)(v.b,{exact:!0,path:"/main",component:T}),Object(p.jsx)(v.b,{path:"/Weather",component:U}),Object(p.jsx)(v.b,{exact:!0,path:"/",component:C}),Object(p.jsx)(v.b,{path:"/home",component:m}),Object(p.jsx)(v.b,{path:"/signup",component:D}),Object(p.jsx)(v.b,{path:"/Apple",children:Object(p.jsx)(x,{newsName:"iphone"})}),Object(p.jsx)(v.b,{path:"/Tesla",children:Object(p.jsx)(x,{newsName:"tesla"})}),Object(p.jsx)(v.b,{path:"/Bitcoin",children:Object(p.jsx)(x,{newsName:"bitcoin"})}),Object(p.jsx)(v.b,{path:"/nasa",children:Object(p.jsx)(x,{newsName:"nasa"})}),Object(p.jsx)(v.b,{path:"/upsc",children:Object(p.jsx)(x,{newsName:"upsc"})}),Object(p.jsx)(v.b,{path:"/technology",children:Object(p.jsx)(x,{newsName:"technology"})}),Object(p.jsx)(v.b,{path:"*",component:P})]})})})};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.0bb3d7be.chunk.js.map