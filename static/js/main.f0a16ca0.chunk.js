(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=(n(24),n(25),n(9),n(5)),u=(Object(a.memo)((function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)("user"),r=Object(i.a)(n,2),o=r[0],u=r[1];Object(a.useEffect)((function(){return function(){t.current.getTracks()[0].stop(),e.current.pause()}}),[]);var l={audio:!1,video:{facingMode:o}};return c.a.createElement("div",{className:"video1"},c.a.createElement("video",{ref:function(n){null!==n&&navigator.mediaDevices.getUserMedia(l).then((function(a){e.current=n,t.current=a,n.srcObject=a,n.play()}),console.error)},muted:!0,playsInline:!0}),c.a.createElement("button",{onClick:function(){t.current.getTracks().forEach((function(e){e.stop()})),u("user"===o?"environment":"user")}},"Switch)"))})),n(8)),l=n(1);Object(a.memo)((function(e){e.postMethod,Object(a.useRef)(null);var t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1],s=Object(a.useState)(0),d=Object(i.a)(s,2),m=d[0],v=d[1],f=[],E=0;Object(a.useEffect)((function(){return function(){n.current.getTracks()[0].stop(),t.current.pause()}}),[]);var g={audio:!1,video:{deviceId:{exact:u}}},b=null;function h(e){e.forEach((function(e){"videoinput"===e.kind&&(f.push(e.deviceId),E++)})),console.log("videoDevices-",f),g.video.deviceId.exact=f[m],navigator.mediaDevices.getUserMedia(g).then((function(e){return t.current=b,n.current=e,b.srcObject=e,b,navigator.mediaDevices.enumerateDevices()})).catch((function(e){console.error(e)}))}return c.a.createElement("div",{className:"video1"},c.a.createElement("video",{ref:function(e){null!==e&&(b=e,navigator.mediaDevices.enumerateDevices().then(h))},autoPlay:!0,muted:!0,playsInline:!0}),c.a.createElement("button",{onClick:function(){n.current.getTracks().forEach((function(e){e.stop()}));var e=m+1===E?0:m+1;l(f[e]),v(e)}},"Switch))"))})),n(17),Object(a.memo)((function(){var e=Object(a.useRef)(null),t={audio:!1,video:!0},n=Object(a.useState)(!0),r=Object(i.a)(n,2),o=r[0],u=r[1];navigator.mediaDevices.getSupportedConstraints().facingMode;var l=null;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,t.video={facingMode:o?"user":"environment"},"function"===typeof navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then((function(t){l=t,e.current.srcObject=l,e.current.play()})).catch((function(e){console.log(e)})):(alert("1"),navigator.getUserMedia(t,(function(t){l=t,e.current.srcObject=l,e.current.play()}),(function(e){console.log("The following error occurred: "+e.name)})));return c.a.createElement("div",{className:"video1"},c.a.createElement("video",{ref:e,muted:!0,playsInline:!0}),c.a.createElement("button",{onClick:function(){null!=l&&(l.getTracks().forEach((function(e){e.stop()})),u(!o))}},"Switch))))"))}));function s(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)(0),o=Object(i.a)(r,2),s=o[0],d=o[1];function m(e){var t=[];e.forEach((function(e){"videoinput"===e.kind&&t.push(e)})),d(1),n(t)}Object(a.useEffect)((function(){0===s&&navigator.mediaDevices.enumerateDevices().then(m)}),[s]);return c.a.createElement(u.a,null,c.a.createElement("div",{className:"router"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.b,{to:"/videoTest"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/video1"},"Variant 1")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/video2"},"Variant 2")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/video3"},"Variant 3")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/video4"},"Variant 4")))),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/videoTest"},c.a.createElement("h1",null,"\u041a\u0432\u0435\u0441\u0442, \u043d\u0430\u0439\u0434\u0438 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u0433\u0434\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043c\u0435\u043d\u0430 \u043a\u0430\u043c\u0435\u0440\u044b)"),c.a.createElement("br",null),c.a.createElement("ul",null),c.a.createElement("h5",null,"version-1.5")))))}var d=function(){return Object(a.useEffect)((function(){document.getElementsByClassName("App")[0].style.height=window.innerHeight+"px"})),c.a.createElement("div",{className:"App"},c.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.f0a16ca0.chunk.js.map