(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),l=t(3),c=t(4);function d(){var n=Object(l.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');\n\n    *{\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root{\n        height: 100%;\n    }\n\n    body {\n        font: 14px 'Roboto', sans-serif;\n        background: #ecf1f8;\n        color: #333;\n        -webkit-font-smoothing: antialiased !important;\n    }\n\n    ul {\n        list-style: none;\n        \n    }\n"]);return d=function(){return n},n}var s=Object(c.a)(d());function p(){var n=Object(l.a)(["\n    height: 80px;\n    padding: 0 30px;\n    background: #1A1B25;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n"]);return p=function(){return n},n}var u=c.c.div(p());function b(){return r.a.createElement(u,null,r.a.createElement("h1",null,"Projects manager"))}var g=t(7);function f(){var n=Object(l.a)(["\n  display: flex;\n  padding: 30px;\n  height: calc(100% - 80px);\n"]);return f=function(){return n},n}var x=c.c.div(f());function h(){var n=Object(l.a)(["\n  padding: 0 15px;\n  height: 100%;\n  flex-grow: 0;\n  flex-shink: 0;\n  flex-basis: 320px;\n  opacity: ",";\n  \n  & + div{\n      border-left: solid 0.5px rgba(0,0,0,0.5);\n  }\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n\n    h2 {\n      font-weight: 500;\n      font-size: 16px;\n      padding: 0 10px;\n    }\n\n    button {\n      width: 30px;\n      height: 30px;\n      border-radius: 12px;\n      background: #3b5bfb;\n      border-style: none;\n      cursor: pointer;\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  ul{\n    margin-top: 30px;\n    height: 100%;\n  }\n"]);return h=function(){return n},n}var m=c.c.div(h(),function(n){return n.done?.6:1}),v=t(24);function E(){var n=Object(l.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: ","\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n    border: 2px dashed rgba(0, 0, 0, 0.2);\n    padding-top: 31px;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n    cursor: grabbing;\n\n    p, img, header{\n      opacity: 0;\n    }\n  "]);return y=function(){return n},n}function j(){var n=Object(l.a)(["\n  position: relative;\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208,  230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4); \n  cursor: grab;\n\n  header{\n    position: absolute;\n    top: -22px;\n    left: 15px;\n  }\n\n  p{\n    font-weight: 500;\n    line-height: 20px;\n  }\n\n  img{\n      height: 24px;\n      width: 24px;\n      border-radius: 2px;\n      margin-top: 5px;\n  }\n\n  ","\n"]);return j=function(){return n},n}var O=c.c.div(j(),function(n){return n.isDragging&&Object(c.b)(y())}),k=c.c.span(E(),function(n){return n.color}),w=t(6),D=Object(a.createContext)({});function R(n){var e=n.data,t=n.index,o=n.listIndex,i=Object(a.useRef)(),l=Object(a.useContext)(D).move,c=Object(w.c)({item:{type:"CARD",index:t,listIndex:o},collect:function(n){return{isDragging:n.isDragging()}}}),d=Object(g.a)(c,2),s=d[0].isDragging,p=d[1],u=Object(w.d)({accept:"CARD",hover:function(n,e){var a=n.listIndex,r=o,c=n.index,d=t;if(c!==d||a!==r){var s=i.current.getBoundingClientRect(),p=(s.bottom-s.top)/2,u=e.getClientOffset().y-s.top;c<d&&u<p||c>d&&u>p||(l(a,r,c,d),n.index=d,n.listIndex=r)}}});return p((0,Object(g.a)(u,2)[1])(i)),r.a.createElement(O,{ref:i,isDragging:s},r.a.createElement("header",null,e.labels.map(function(n){return r.a.createElement(k,{key:n,color:n})})),r.a.createElement("p",null,e.content),e.user&&r.a.createElement("img",{src:e.user,alt:"avatar"}))}function I(n){var e=n.data,t=n.index;return r.a.createElement(m,{done:e.done},r.a.createElement("header",null,r.a.createElement("h2",null,e.title),e.creatable&&r.a.createElement("button",{type:"button"},r.a.createElement(v.a,{size:20,color:"#fff"}))),r.a.createElement("ul",null,e.cards.map(function(n,e){return r.a.createElement(R,{key:n.id,listIndex:t,data:n,index:e})})))}var A=t(22),C=[{title:"Taks",creatable:!0,cards:[{id:1,content:"Ask for search term",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:2,content:"Ask for the prefix",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:3,content:"Start text robot",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:4,content:"Start video robot",labels:["#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"}]},{title:"In progress",creatable:!1,cards:[{id:6,content:"Get text from Wikipedia",labels:[],user:"https://api.adorable.io/avatars/285/abott@adorable.png"}]},{title:"Stoped",creatable:!1,cards:[{id:7,content:"Split into sentences",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:8,content:"Download images from Google images",labels:["#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:9,content:"Resize the images",labels:[]}]},{title:"Done",creatable:!1,done:!0,cards:[{id:10,content:"Render the video using After Effects",labels:[]},{id:12,content:"Deploy the app",labels:["#54e1f7"]},{id:13,content:"Build the app",labels:["#7159c1"]}]}];function z(){var n=Object(a.useState)(C),e=Object(g.a)(n,2),t=e[0],o=e[1];return r.a.createElement(D.Provider,{value:{lists:t,move:function(n,e,a,r){o(Object(A.a)(t,function(t){var o=t[n].cards[a];t[n].cards.splice(a,1),t[e].cards.splice(r,0,o)}))}}},r.a.createElement(x,null,t.map(function(n,e){return r.a.createElement(I,{key:n.title,index:e,data:n})})))}var S=t(23);var B=function(){return r.a.createElement(w.b,{backend:S.a},r.a.createElement(b,null),r.a.createElement(z,null),r.a.createElement(s,null))};i.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2bb22f65.chunk.js.map