import{ab as Q,a8 as U,j as S,B as V,T as Y}from"./index-CX73dulP.js";var g={},B;function F(){if(B)return g;B=1;function $(r){if(typeof window>"u")return;const u=document.createElement("style");return u.setAttribute("type","text/css"),u.innerHTML=r,document.head.appendChild(u),r}Object.defineProperty(g,"__esModule",{value:!0});var e=Q();function A(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var a=A(e);$(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const D=e.forwardRef(function({style:u={},className:T="",autoFill:l=!1,play:f=!0,pauseOnHover:w=!1,pauseOnClick:x=!1,direction:t="left",speed:m=50,delay:j=0,loop:b=0,gradient:I=!1,gradientColor:_="white",gradientWidth:h=200,onFinish:L,onCycleComplete:O,onMount:N,children:v},X){const[q,P]=e.useState(0),[p,Z]=e.useState(0),[y,C]=e.useState(1),[E,G]=e.useState(!1),H=e.useRef(null),i=X||H,c=e.useRef(null),d=e.useCallback(()=>{if(c.current&&i.current){const n=i.current.getBoundingClientRect(),M=c.current.getBoundingClientRect();let o=n.width,s=M.width;(t==="up"||t==="down")&&(o=n.height,s=M.height),C(l&&o&&s&&s<o?Math.ceil(o/s):1),P(o),Z(s)}},[l,i,t]);e.useEffect(()=>{if(E&&(d(),c.current&&i.current)){const n=new ResizeObserver(()=>d());return n.observe(i.current),n.observe(c.current),()=>{n&&n.disconnect()}}},[d,i,E]),e.useEffect(()=>{d()},[d,v]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof N=="function"&&N()},[]);const k=e.useMemo(()=>l?p*y/m:p<q?q/m:p/m,[l,q,p,y,m]),J=e.useMemo(()=>Object.assign(Object.assign({},u),{"--pause-on-hover":!f||w?"paused":"running","--pause-on-click":!f||w&&!x||x?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[u,f,w,x,t]),K=e.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof h=="number"?`${h}px`:h}),[_,h]),W=e.useMemo(()=>({"--play":f?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${k}s`,"--delay":`${j}s`,"--iteration-count":b?`${b}`:"infinite","--min-width":l?"auto":"100%"}),[f,t,k,j,b,l]),R=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),z=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((M,o)=>a.default.createElement(e.Fragment,{key:o},e.Children.map(v,s=>a.default.createElement("div",{style:R,className:"rfm-child"},s)))),[R,v]);return E?a.default.createElement("div",{ref:i,style:J,className:"rfm-marquee-container "+T},I&&a.default.createElement("div",{style:K,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:O,onAnimationEnd:L},a.default.createElement("div",{className:"rfm-initial-child-container",ref:c},e.Children.map(v,n=>a.default.createElement("div",{style:R,className:"rfm-child"},n))),z(y-1)),a.default.createElement("div",{className:"rfm-marquee",style:W},z(y))):null});return g.default=D,g}var ee=F();const te=U(ee),re=()=>S.jsx(V,{sx:{width:"100%",gradient:"linear-gradient(to right, #195046ff, #2c355bff)",py:{xs:1,sm:1.5},px:{xs:1,sm:2}},children:S.jsx(te,{speed:40,gradient:!1,pauseOnHover:!0,style:{width:"100%"},children:S.jsx(Y,{variant:"h6",sx:{fontSize:{xs:"1rem",sm:"1.2rem",md:"1.5rem"},fontWeight:"bold",color:"black",letterSpacing:1,whiteSpace:"nowrap"},children:"🎉 Welcome to our shopping cart! Enjoy exclusive deals and offers 🛒"})})});export{re as default};
