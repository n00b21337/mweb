(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(28641)}])},72644:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(85893);a(67294),a(25675);var s=a(10458);function i(){return(0,n.jsx)("header",{className:"header",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"header__menu",children:[(0,n.jsxs)("nav",{className:"header__menu-wrapper",children:[(0,n.jsx)("a",{href:"/","aria-current":"page",className:"header__logo w-inline-block w--current",children:(0,n.jsx)("img",{src:"images/Logo.svg",loading:"lazy",alt:"",className:"header__logo-img"})}),(0,n.jsx)("div",{className:"header__navbar",children:(0,n.jsx)("div",{className:"connectButton",children:(0,n.jsx)(s.NL,{label:"Connect your wallet"})})})]}),(0,n.jsxs)("nav",{className:"header__menu-wrapper_mobile",children:[(0,n.jsx)("div",{className:"connectButton",children:(0,n.jsx)(s.NL,{label:"Connect your wallet"})}),(0,n.jsx)("div",{"data-w-id":"2cea168f-2552-2955-7601-126c7a5b4315",className:"menu__btn",children:(0,n.jsx)("div",{"data-w-id":"2cea168f-2552-2955-7601-126c7a5b4316","data-is-ix2-target":"1",className:"lottie-animation","data-animation-type":"lottie","data-src":"documents/9789-burger-menu.json","data-loop":"0","data-direction":"1","data-autoplay":"0","data-renderer":"svg","data-default-duration":"3","data-duration":"0","data-ix2-initial-state":"0"})}),(0,n.jsxs)("div",{className:"header__navbar-openstate",children:[(0,n.jsx)("a",{href:"/","aria-current":"page",className:"header__logo-opentstate w-inline-block w--current",children:(0,n.jsx)("img",{src:"images/Logo.svg",loading:"lazy",alt:"",className:"header__logo-img"})}),(0,n.jsx)("div",{className:"header__navbar_mob-img",children:(0,n.jsx)("img",{src:"images/manager.png",loading:"lazy",alt:"",className:"header__navbar_mob-img-item"})}),(0,n.jsx)("div",{className:"header__menu-btn-check-coll-container",children:(0,n.jsx)("a",{href:"#",className:"header__menu-btn-check-coll w-inline-block",children:(0,n.jsx)("div",{className:"header__menu-btn-check-coll-text",children:"Check collection on Opensea"})})}),(0,n.jsx)("div",{className:"header__menu-footer",children:(0,n.jsxs)("div",{className:"menu__footer-social",children:[(0,n.jsx)("a",{href:"#",className:"menu__footer-social-link w-inline-block",children:(0,n.jsx)("img",{src:"images/twitter.svg",loading:"lazy",alt:"twitter",className:"menu__footer-social-img"})}),(0,n.jsx)("a",{href:"#",className:"menu__footer-social-link w-inline-block",children:(0,n.jsx)("img",{src:"images/discord_1.svg",loading:"lazy",alt:"discord",className:"menu__footer-social-img"})})]})})]})]})]})})})}},95677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{noSSR:function(){return r},default:function(){return l}});let n=a(38754),s=(a(67294),n._(a(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let a=s.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let l=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a({...n,loader:()=>null!=l?l().then(i):Promise.resolve(i(()=>null))}):(delete n.webpack,delete n.modules,r(a,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let n=a(38754),s=n._(a(67294)),i=s.default.createContext(null)},8976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=a(38754),s=n._(a(67294)),i=a(92254),r=[],l=[],o=!1;function c(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function r(){if(!n){let t=new d(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!o){let e=a.webpack?a.webpack():a.modules;e&&l.push(t=>{for(let a of e)if(t.includes(a))return r()})}function c(e,t){!function(){r();let e=s.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let l=s.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),s.default.useMemo(()=>{var t;return l.loading||l.error?s.default.createElement(a.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?s.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return c.preload=()=>r(),c.displayName="LoadableComponent",s.default.forwardRef(c)}(c,e)}function u(e,t){let a=[];for(;e.length;){let n=e.pop();a.push(n(t))}return Promise.all(a).then(()=>{if(e.length)return u(e,t)})}m.preloadAll=()=>new Promise((e,t)=>{u(r).then(e,t)}),m.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(o=!0,t());u(l,e).then(a,a)})),window.__NEXT_PRELOADREADY=m.preloadReady;let h=m},28641:function(e,t,a){"use strict";a.r(t),a.d(t,{LiFiWidgetNext:function(){return w},LoadingIndicator:function(){return N},default:function(){return y}});var n=a(85893),s=a(9008),i=a.n(s),r=a(72078),l=a(72644),o=a(67294);a(25675);var c=a(40332),d=a(48210),m=a(61744),u=a(29251),h=a(19485),_=a(88793),g=a(67976);function f(e){let{change:t}=e,[a,s]=(0,o.useState)(!0),[i,r]=(0,o.useState)(0),[l,c]=(0,o.useState)(0),d={address:"0x8c34E6e60731D1Ff7E26c712EA1f798F90F29Ec6",abi:_.Mt},{data:m,refetch:u}=(0,g.do)({...d,functionName:"totalSupply",chainId:1}),{data:h}=(0,g.do)({...d,functionName:"MAX_SUPPLY",chainId:1});return(0,o.useEffect)(()=>{m&&(u(),r(m.toNumber()),s(!1))},[m,t]),(0,o.useEffect)(()=>{h&&(c(h.toNumber()),s(!1))},[h,t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("p",{children:["Minted tokens: ",a?"Loading...":"".concat(i)]})})}var p=a(34155);function x(){let[e,t]=(0,o.useState)(1),[a,s]=(0,o.useState)(5),[i,r]=(0,o.useState)(""),l=(0,o.useRef)(),c=(0,o.useRef)(),[d,x]=(0,o.useState)(""),[b,j]=(0,o.useState)(0),[v,N]=(0,o.useState)(!1),[w,y]=(0,o.useState)(""),[k,E]=(0,o.useState)(!1),{chain:T}=(0,g.LN)(),{chains:C,errorSwitch:S,isLoading:P,pendingChainId:L,switchNetwork:O}=(0,g.g0)(),{connector:F,address:M,isConnected:z}=(0,g.mA)(),{data:A}=(0,g.mx)({chainId:p.env.NEXT_PUBLIC_NID}),I={address:"0x8c34E6e60731D1Ff7E26c712EA1f798F90F29Ec6",abi:_.Mt},D=(0,g.cq)({...I,signerOrProvider:A});async function R(){let t=await D.estimateGas.mint(e,w,{value:m.parseEther(String(.015*e))}).catch(t=>(console.error(t),25e4*e));await D.mint(e,w,{gasLimit:t,value:m.parseEther(String(.015*e))}).then(t=>{t.wait().then(async t=>{0==t.status?(r("reverted"),x("Error:  Transaction reverted"),B(t)):(l.current.innerText=1,r(""),x("Congrats, you minted ".concat(e," token(s)!")),j(b+1))}).catch(e=>{console.error(e),r(e);let t=e.message.slice(0,e.message.indexOf("("));x("Error: ".concat(t)),N(!1)}),E(!1),W(!1),N(!1)}).catch(e=>{console.error(e),r("reverted"),x("Error:  Transaction rejected"),E(!1),N(!1)})}async function B(e){let t=await Z(e.transactionHash);x("Error: Transaction reverted. ".concat(t))}async function Z(e){var t;let a=await V.getTransaction(e),n=await V.call({to:a.to,from:a.from,nonce:a.nonce,gasLimit:a.gasLimit,gasPrice:a.gasPrice,data:a.data,value:a.value,chainId:a.chainId,type:null!==(t=a.type)&&void 0!==t?t:void 0,accessList:a.accessList},a.blockNumber);return u.ZN("0x"+n.substring(138))}let G=n=>{var s=e;"sub"==n&&s--,"add"==n&&s++,s<1&&(s=1),s>a&&(s=a),t(s)},V=(0,g.yL)({chainId:1}),X=(0,g.cq)({...I,signerOrProvider:V});(0,o.useEffect)(()=>{h.isAddress(M)&&W(!0).catch(console.error)},[z]),(0,o.useEffect)(()=>{(null==T?void 0:T.id)!==1&&(null==O||O(1))},[z]),(0,o.useEffect)(()=>{h.isAddress(M)&&y(M)},[M]);let W=async e=>{let t=await X.balanceOf(M);s(5),t>=a&&(l.current.innerText=1,N(!0),document.getElementById("mintButton").innerText="Can't mint more",e&&(r("Max"),x("You minted maximum allowed, ".concat(a," tokens!")))),t<a&&s(a-t)};return(0,n.jsx)("div",{id:"mint-block",className:"main-content__mini-form-wrapper",children:(0,n.jsxs)("div",{className:"main-content__mini-form w-form",children:[(0,n.jsxs)("div",{id:"wf-form-Form",name:"wf-form-Form","data-name":"Form",method:"get",className:"form",children:[(0,n.jsx)("div",{className:"mini-form__title",children:(0,n.jsx)(f,{})}),(0,n.jsx)("div",{className:"mini-form__desription",children:"How many NFTs would you like to mint?"}),(0,n.jsxs)("div",{className:"mini-form__counter",children:[(0,n.jsx)("button",{type:"button",className:"mini-form__btn-minus",onClick:e=>G(e.currentTarget.value),value:"sub",children:(0,n.jsx)("img",{alt:"minus",loading:"lazy",src:"images/minus.svg"})}),(0,n.jsx)("div",{className:"mini-form__count",children:(0,n.jsx)("div",{className:"text-block-2",ref:l,children:e})}),(0,n.jsx)("button",{type:"button",className:"mini-form__btn-plus",onClick:e=>G(e.currentTarget.value),value:"add",children:(0,n.jsx)("img",{alt:"plus",loading:"lazy",src:"images/plus.svg"})})]}),z&&(0,n.jsxs)("div",{className:"sendto-container",children:[(0,n.jsx)("span",{className:"sendto-prefix",children:"Mint to:"}),(0,n.jsx)("input",{className:"sendto-field",type:"text",placeholder:"Wallet address or ENS",value:w,onChange:e=>{h.isAddress(e.target.value)&&y(e.target.value)}})]}),(0,n.jsxs)("button",{id:"mintButton",ref:c,disabled:v,className:"mini-form__submit-btn w-button",onClick:()=>{z?(R(),N(!0),r(""),x("Preparing to mint ".concat(e," token(s)!")),E(!0)):document.getElementsByClassName("connectButton")[0].querySelector('button[type="button"]').click()},children:[!z&&"Connect Wallet",k&&z&&"Minting...",z&&!k&&"Mint"]})]}),(0,n.jsx)("div",{className:"mint-message",children:(0,n.jsx)("div",{className:i?"mint__reject":"mint__success",children:d})})]})})}function b(){return(0,n.jsxs)("div",{className:"main",children:[(0,n.jsxs)("div",{className:"main__section",children:[(0,n.jsx)("div",{className:"main__hero-bg",children:(0,n.jsx)("div",{className:"hero-bg__wrapper",children:(0,n.jsx)("div",{className:"decor__floor"})})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"main__content",children:[(0,n.jsx)("div",{className:"title-strokes w-embed"}),(0,n.jsx)("div",{className:"main__title_mini lower-fs",children:"The"}),(0,n.jsx)("h1",{className:"main__title",children:"Managers"}),(0,n.jsxs)("div",{className:"main__title-decor-wrapper",children:[(0,n.jsx)("img",{src:"images/green-pin-new.png",loading:"lazy",alt:"pin",className:"main__title-decor1"}),(0,n.jsx)("img",{src:"images/red-pin-new.png",loading:"lazy",alt:"pin",className:"main__title-decor2"}),(0,n.jsxs)("div",{className:"decor__mans-wrapper",children:[(0,n.jsx)("img",{src:"images/left-side-mans.png",loading:"lazy",alt:"managers",className:"left-side-mans"}),(0,n.jsx)("img",{src:"images/right-side-mans.png",loading:"lazy",sizes:"(max-width: 767px) 100vw, 527px",srcSet:"images/right-side-mans-p-500.png 500w, images/right-side-mans.png 527w",alt:"managers_r",className:"right-side-mans"}),(0,n.jsx)("img",{src:"images/mans_mob.png",loading:"lazy",sizes:"(max-width: 479px) 100vw, (max-width: 767px) 528px, 100vw",srcSet:"images/mans_mob-p-500.png 500w, images/mans_mob-p-800.png 800w, images/mans_mob.png 896w",alt:"managers_m",className:"decor-mans-mob"})]})]}),(0,n.jsx)("p",{className:"main__description",children:"Experience the new ERC6551 NFT standard, and join the new era in ownership and digital identity. The world needs bold decision-makers. Are you one of them?"}),(0,n.jsx)(x,{})]})})]}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(d.Z,{})]})}var j=a(5152),v=a.n(j);let N=()=>(0,n.jsx)("div",{style:{display:"grid",placeItems:"center"},children:(0,n.jsx)("p",{children:"Loading..."})}),w=v()(()=>Promise.all([a.e(900),a.e(300),a.e(755),a.e(102),a.e(196)]).then(a.bind(a,62887)).then(e=>e.Widget),{loadableGenerated:{webpack:()=>[62887]},ssr:!1,loading:()=>(0,n.jsx)(N,{})});function y(){return(0,n.jsxs)("div",{className:"body",children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:"The Managers"}),(0,n.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),(0,n.jsx)("link",{href:"images/favicon.ico",rel:"shortcut icon",type:"image/x-icon"}),(0,n.jsx)("link",{href:"images/webclip.png",rel:"apple-touch-icon"}),(0,n.jsx)("meta",{name:"description",content:"Experience the new ERC6551 NFT standard, and join the new era in ownership and digital identity. The world needs bold decision-makers. Are you one of them?"}),(0,n.jsx)("meta",{property:"og:image",content:"https://themanagers.wtf/images/cover.png"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://themanagers.wtf/images/cover.png"})]}),(0,n.jsxs)("div",{className:"page_wrapper",children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(b,{}),(0,n.jsx)(w,{variant:"drawer"}),(0,n.jsx)(r.Z,{})]})]})}},5152:function(e,t,a){e.exports=a(95677)}},function(e){e.O(0,[101,793,574,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);