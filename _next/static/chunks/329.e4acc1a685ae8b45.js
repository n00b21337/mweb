(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329,563,196],{62887:function(e,t,s){"use strict";s.r(t),s.d(t,{Widget:function(){return x}});var a=s(85893),r=s(60288),n=s(87122),i=s(50966),l=s(87536),c=s(90834),o=s(60298),u=s(61744),d=s(19485),m=s(67294),f=s(88793),g=s(67976);let h=e=>{let{variation:t}=e,[s,r]=(0,m.useState)(),[n,h]=(0,m.useState)(""),[x,b]=(0,m.useState)(""),[p,v]=(0,m.useState)(1),[S,E]=(0,m.useState)(5),j=(0,m.useRef)(),{account:N,switchChain:_}=(0,i.Os)(),[k,C]=(0,m.useState)(String(u.parseUnits(String(.015),"ether"))),y=(0,l.qo)({name:c.W.ToAddress}),T={address:"0x8c34E6e60731D1Ff7E26c712EA1f798F90F29Ec6",abi:f.Mt},A=(0,g.cq)({...T,signerOrProvider:N.signer});(0,m.useEffect)(()=>{F()},[N,y]);let F=async()=>{if(N.address&&d.isAddress(N.address)){let e=N.address.startsWith("0x")?N.address.substring(2):N.address;h(e)}if(d.isAddress(y)){let e=y.startsWith("0x")?y.substring(2):y;h(e)}};async function I(){let e=await A.estimateGas.mint(p,"0x"+n,{value:u.parseEther(String(.015*p))}).catch(e=>(console.error(e),25e4*p));b(String(e))}(0,m.useEffect)(()=>{d.isAddress("0x"+n)&&I()},[n,p]),(0,m.useEffect)(()=>{if(n&&x){let e="1000000000000000000000000";e=p+e.substring(1);let t="0x94bf804d000000000000000000000000000000000000000000000000000000000000000"+e+n;r({address:"0x8c34E6e60731D1Ff7E26c712EA1f798F90F29Ec6",callData:t,gasLimit:String(Number(x)+Math.ceil(.3*Number(x)))})}let e=String(u.parseUnits(String(.015*p),"ether"));C(e)},[n,x]);let M=e=>{var t=p;"sub"==e&&t--,"add"==e&&t++,t<1&&(t=1),t>S&&(t=S),v(t)};return(0,a.jsxs)(a.Fragment,{children:["full"==t?(0,a.jsx)(o.S,{isLoading:!1,imageUrl:"/images/reveal.png",collectionName:"Managers",assetName:"Managers Mint",contract:s,token:{address:"0x0000000000000000000000000000000000000000",amount:k,chainId:1,symbol:"ETH",decimals:18,name:"Ethereum",priceUSD:""}}):null,"full"==t?(0,a.jsxs)("div",{className:"lifi-form__counter",children:[(0,a.jsx)("button",{type:"button",className:"lifi-form__btn-minus",onClick:e=>M(e.currentTarget.value),value:"sub",children:(0,a.jsx)("img",{alt:"minus",loading:"lazy",src:"images/minus.svg"})}),(0,a.jsx)("div",{className:"lifi-form__count",children:(0,a.jsx)("div",{className:"text-block-3",ref:j,children:p})}),(0,a.jsx)("button",{type:"button",className:"lifi-form__btn-plus",onClick:e=>M(e.currentTarget.value),value:"add",children:(0,a.jsx)("img",{alt:"plus",loading:"lazy",src:"images/plus.svg"})})]}):null]})},x=e=>{let{variant:t}=e;return(0,a.jsx)(r.Tx,{contractComponent:(0,a.jsx)(h,{variation:"full"}),contractSecondaryComponent:(0,a.jsx)(h,{variation:"small"}),contractCompactComponent:(0,a.jsx)(h,{variation:"small"}),config:{variant:t,subvariant:"nft",fromChain:1,toChain:1,fromToken:"0x0000000000000000000000000000000000000000",containerStyle:{border:"0px solid rgb(234, 234, 234)",borderRadius:"16px"},hiddenUI:["history"],appearance:"dark",hiddenUI:[n.v3.Appearance],languageResources:{en:{button:{lifiCheckout:"MINT via LI.FI"}}}},contractTool:{logoURI:"https://themanagers.wtf/favicon.ico",name:"ManagersTBA"},integrator:"managers"})}},36563:function(){}}]);