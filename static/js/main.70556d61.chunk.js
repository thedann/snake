(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={gameover:"gameover_gameover__22WGM",textinput:"gameover_textinput__CuDdl",submitbutton:"gameover_submitbutton__2WKOS"}},function(e,t,n){e.exports={scoreboard:"scoreBoard_scoreboard__1rB5T",header:"scoreBoard_header__2Tmdp",counter:"scoreBoard_counter__1yVmT"}},,function(e,t,n){e.exports={startmenu:"startmenu_startmenu__2BudL",startbutton:"startmenu_startbutton___EH_r"}},,,,function(e,t,n){e.exports={map:"map_map__1cjP6",dot:"map_dot__1hBTO"}},function(e,t,n){e.exports={player:"player_player__i5ArV"}},function(e,t,n){e.exports={snack:"snack_snack__120vH"}},,function(e,t,n){e.exports={tail:"tail_tail__1dVdw"}},,function(e,t,n){},function(e,t,n){e.exports=n(41)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a,o=n(1),r=n.n(o),i=n(16),c=n.n(i),s=(n(29),n(3)),u=(n(30),n(17)),l=n.n(u),f=n(18),m=n.n(f),b=function(e){var t=Object(o.useState)(e.left),n=Object(s.a)(t,2),a=(n[0],n[1],Object(o.useState)(e.top)),i=Object(s.a)(a,2);i[0],i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{left:e.left,top:e.top},className:m.a.player}))},p=n(19),d=n.n(p),v=function(e){return r.a.createElement("div",{style:{left:e.left,top:e.top},className:d.a.snack})};!function(e){e.Up="UP",e.Down="DOWN",e.Left="LEFT",e.Right="RIGHT",e.None="NONE"}(a||(a={}));var h=a,O=n(9),j=function e(){Object(O.a)(this,e),this.convertKeyCodeToDirection=function(e){var t=h.None;switch(e){case 37:t=h.Left;break;case 38:t=h.Up;break;case 39:t=h.Right;break;case 40:t=h.Down}return t},this.checkIfDirectionIsValid=function(e,t){return(e!==h.Left||t!==h.Right)&&((e!==h.Right||t!==h.Left)&&((e!==h.Up||t!==h.Down)&&(e!==h.Down||t!==h.Up)))}},E=n(20),P=function(){function e(){Object(O.a)(this,e)}return Object(E.a)(e,[{key:"getLastPositionOfTail",value:function(e){var t=null;return e&&e.parts&&(t=e.parts[e.parts.length-1]),t}},{key:"whereToRenderTail",value:function(e,t){var n=this.getLastPositionOfTail(e),a=n||t,o={xPosition:a.xPosition,yPosition:a.yPosition,direction:a.direction};switch(a.direction){case h.Left:o.xPosition=o.xPosition+16;break;case h.Up:o.yPosition=o.yPosition+16;break;case h.Right:o.xPosition=o.xPosition-16;break;case h.Down:o.yPosition=o.yPosition-16}return o}},{key:"addToTail",value:function(e,t){var n=this.whereToRenderTail(e,t);return e&&e.parts?e.parts.push(n):e={parts:[n]},e}}]),e}(),y=n(21),_=n.n(y),k=function(e){return r.a.createElement(r.a.Fragment,null,e.parts&&e.parts.map((function(e,t){return r.a.createElement("div",{key:t,style:{left:e.xPosition,top:e.yPosition},className:_.a.tail})})))},g=n(10),x=n.n(g),S=n(22),w=n.n(S).a.initializeApp({apiKey:"AIzaSyBlE_HAJ32yjCB7tipbq7BdImmopR5kQwA",authDomain:"snake-d390c.firebaseapp.com",databaseURL:"https://snake-d390c.firebaseio.com",storageBucket:"snake-d390c.appspot.com",messagingSenderId:"153498567525"}),N=r.a.createContext({score:0,setScore:function(){},scoreList:[""],setScoreList:function(){}}),L=function(e){var t=e.children,n=Object(o.useState)(0),a=Object(s.a)(n,2),i=a[0],c=a[1],u=Object(o.useState)([]),l=Object(s.a)(u,2),f=l[0],m=l[1];return r.a.createElement(N.Provider,{value:{score:i,setScore:c,scoreList:f,setScoreList:m}},t)},T=function(){var e=Object(o.useContext)(N);if(!e)throw new Error("Wrap component in ScoreProvider ");return e},D=function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],c=T().score,u=Date.now();return r.a.createElement("div",{className:x.a.gameover},r.a.createElement("h1",null,"Game over!"),r.a.createElement("h3",null,1===c?"You got "+c+" point":"You got "+c+" points"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},className:x.a.textinput,placeholder:"enter your nick",maxLength:3,minLength:1}),r.a.createElement("button",{disabled:0==a.length,className:x.a.submitbutton,onClick:function(){w.database().ref("highscore/"+u).set({score:c,nickname:a.toUpperCase()},(function(){window.location.reload()}))}},"Submit your score"))},C=function(){var e=new j,t=new P,n={},a=T(),i=a.score,c=a.setScore,u=Object(o.useState)(80),f=Object(s.a)(u,2),m=f[0],p=f[1],d=Object(o.useState)(80),O=Object(s.a)(d,2),E=O[0],y=O[1],_=Object(o.useState)(h.None),g=Object(s.a)(_,2),x=g[0],S=g[1],w=Object(o.useState)(n),N=Object(s.a)(w,2),L=N[0],C=N[1],B=Object(o.useState)(320),R=Object(s.a)(B,2),I=R[0],U=R[1],F=Object(o.useState)(70),G=Object(s.a)(F,1)[0],W=Object(o.useState)(0),A=Object(s.a)(W,2),K=A[0],V=A[1],H=Object(o.useState)(!1),J=Object(s.a)(H,2),M=J[0],z=J[1],Y=Object(o.useState)(!1),q=Object(s.a)(Y,2),Q=q[0],$=q[1],X=Object(o.useState)(96),Z=Object(s.a)(X,2),ee=Z[0],te=Z[1],ne=Object(o.useState)(96),ae=Object(s.a)(ne,2),oe=ae[0],re=ae[1],ie=Object(o.useState)(!1),ce=Object(s.a)(ie,2),se=ce[0],ue=ce[1];function le(){return 16*(Math.floor(19*Math.random())+1)}function fe(e){switch(e.direction){case h.Left:e.xPosition-16>-16&&(e.xPosition=e.xPosition-16);break;case h.Up:e.yPosition-16>-16&&(e.yPosition=e.yPosition-16);break;case h.Right:e.xPosition+16<320&&(e.xPosition=e.xPosition+16);break;case h.Down:e.yPosition+16<320&&(e.yPosition=e.yPosition+16)}return e}function me(e){if(M||z(!0),e!==h.None){var t={xPosition:m,yPosition:E,direction:e};t=fe(t),e===h.Down||e===h.Up?y(t.yPosition):p(t.xPosition),function(e,t){var n=!1;return t.parts&&t.parts.forEach((function(t){t.yPosition===e.yPosition&&t.xPosition===e.xPosition&&(n=!0)})),n}(t,L)?$(!0):L.parts&&function(e){if(null!=e&&e.parts){var t=x;e.parts.forEach((function(e){var n=e.direction;e.direction=t;var a={xPosition:e.xPosition,yPosition:e.yPosition,direction:e.direction};t=n,a=fe(a),e.xPosition=a.xPosition,e.yPosition=a.yPosition})),C(e)}}(L)}}return r.a.useEffect((function(){V(K+1)}),[M]),function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n&&null!=n.current&&n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){me(x),V(K+1)}),I),r.a.useEffect((function(){var e=setTimeout((function(){ue(!0)}),1e3);return function(){return clearTimeout(e)}}),[se]),r.a.useEffect((function(){m===ee&&E===oe&&function(){c(i+1),ue(!1),te(le()),re(le()),I>=G&&U(.8*I);var e={xPosition:m,yPosition:E,direction:x},n=t.addToTail(L,e);C(n)}()}),[m,E]),r.a.useEffect((function(){Q&&(V(0),S(h.None),p(80),y(80),C(n))}),[Q]),r.a.createElement("div",{className:l.a.map,tabIndex:-1,onKeyDown:function(t){var n=t.keyCode,a=e.convertKeyCodeToDirection(n);a!==x&&e.checkIfDirectionIsValid(x,a)&&(S(a),a!==h.None&&me(a))}},Q?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{points:i})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{currentDirection:x,left:m,top:E}),L.parts&&r.a.createElement(k,{parts:L.parts}),se&&r.a.createElement(v,{left:ee,top:oe})))},B=n(11),R=n.n(B),I=n(23),U=n.n(I),F=function(e){return r.a.createElement("span",{className:U.a.counter},e.number)},G=function(e){var t=T().score;return r.a.createElement("div",{className:R.a.scoreboard},r.a.createElement("div",{className:R.a.header},"React Snake Game"),r.a.createElement("div",{className:R.a.counter},r.a.createElement(F,{number:t})),r.a.createElement("div",null,r.a.createElement("ul",null,e&&e.scoreList&&e.scoreList.map((function(e,t){return r.a.createElement("li",{key:t},function(e){var t="";switch(e){case 0:t="\ud83d\udc51";break;case 1:t="\ud83e\udd48";break;case 2:t="\ud83e\udd49"}return t}(t),e.nickname," : ",e.score)})))))},W=n(13),A=n.n(W),K=function(e){return r.a.createElement("div",{className:A.a.startmenu},r.a.createElement("button",{className:A.a.startbutton,onClick:function(){return e.startGameCallback(!0)},type:"button"},"Start game"))},V=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)([""]),c=Object(s.a)(i,2),u=c[0],l=c[1],f=Object(o.useState)(!1),m=Object(s.a)(f,2),b=m[0],p=m[1];return Object(o.useEffect)((function(){var e=[];w.database().ref("highscore/").orderByChild("score").limitToLast(3).on("child_added",(function(t){e.unshift(t.val())})),l(e)}),[n]),Object(o.useEffect)((function(){u.length>0&&p(!0)}),[u]),r.a.createElement(L,null,r.a.createElement("div",{className:"main-container"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),b&&r.a.createElement(G,{scoreList:u})):r.a.createElement(K,{startGameCallback:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.70556d61.chunk.js.map