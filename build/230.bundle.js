(self.webpackChunkboilerplate=self.webpackChunkboilerplate||[]).push([[230],{5945:(e,t,r)=>{"use strict";r.d(t,{P:()=>l});var n=r(5466),o=r(2708);class a extends n.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){this.setState({hasError:!0})}render(){return this.state.hasError?n.createElement("div",{className:"errorBoundary"},n.createElement(ReactComponent,{className:"logoError"}),n.createElement("h1",null,"Something went wrong."),n.createElement("img",{src:o})):this.props.children}}const s=a,l=e=>({props:t})=>n.createElement(s,null,n.createElement(e,t))},9230:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var n=r(5466),o=r(5386),a=r(5764),s=r(5462),l=r(2087),i=r(9386),c=r(7634),d=r(3207),m=r(5371),p=r(2020),u=r(9463),h=r(880),f=r(7210);function g({isShowConfirm:e=!1,setIsShowConfirm:t,onDeleteProcessor:r,isDeleteAllProcessors:o,onClearAllProcessor:a,text:s}){const[l,g]=n.useState(e),E=(0,f.Z)(),x=(0,h.Z)(E.breakpoints.down("sm")),y=()=>{g(!1),t(!1)};return n.createElement("div",null,n.createElement(c.Z,{fullScreen:x,open:l,onClose:y,"aria-labelledby":"responsive-dialog-title"},n.createElement(u.Z,{style:{textAlign:"center"},id:"responsive-dialog-title"},s),n.createElement(m.Z,{dividers:!0,style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement(p.Z,null,"You will can`t come back")),n.createElement(d.Z,{style:{display:"flex",justifyContent:"center"}},n.createElement(i.Z,{autoFocus:!0,onClick:y,color:"primary"},"Disagree"),n.createElement(i.Z,{onClick:()=>{o?a():r(),g(!1)},color:"primary",autoFocus:!0},"Agree"))))}var E=r(3074),x=r.n(E),y=r(7860);const C=y.ZP.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 950px) {
        /* min-width: 70px; */
    }
    @media (max-width: 760px) {
        flex-wrap: wrap;
    }
`,v=y.ZP.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 345px) {
        margin-top: 25px;
    }
`,w=y.ZP.p`
    @media (max-width: 920px) {
        font-size: 12px;
    }
    @media (max-width: 760px) {
        padding: 10px;
    }
    @media (max-width: 345px) {
        padding: 0px 10px 0px 10px;
    }
`,b=({sumOfPrice:e,average:t,amountItems:r,isAdmin:o,onClearAllProcessor:i,isShowConfirm:c,setIsShowConfirm:d})=>n.createElement(n.Fragment,null,c&&n.createElement(g,{setIsShowConfirm:d,isShowConfirm:c,onClearAllProcessor:i,isDeleteAllProcessors:!0,text:"Do you want delete all processors?"}),n.createElement(l.Z,{boxShadow:1,m:1,p:1,style:{top:80}},n.createElement(v,null,n.createElement(C,null,n.createElement(w,null,`Общее кол-во товаров ${r}`),n.createElement(w,null,`Общая сумма ${e} грн`),n.createElement(w,null,`Средняя цена ${t} грн`),n.createElement(a.u,{variant:"contained",color:"secondary",startIcon:n.createElement(s.Z,null),onClick:()=>d(!0),disabled:!o},"Очистить каталог")))));b.propTypes={sumOfPrice:x().number,average:x().oneOfType([x().string,x().number]),amountItems:x().number,isAdmin:x().bool,onClearAllProcessor:x().func};const Z=b;var S=r(1708);const P=()=>{const{processorsList:e}=(0,o.v9)((e=>e.processorsList)),[t,r]=(0,n.useState)(!1),a=(0,o.I0)(),{isAdmin:s}=(0,o.v9)((e=>e.authorization)),[l,i]=(0,n.useState)(null),[c,d]=(0,n.useState)(null),[m,p]=(0,n.useState)(e.length);(0,n.useEffect)((()=>{p(e.length),u()}),[e]);const u=()=>{f(h())},h=()=>{let t=e.reduce(((e,t)=>e+ +t.price2),0);return i(t),t},f=t=>{d(0==t?"0":(t/e.length).toFixed(2))};return n.createElement(Z,{sumOfPrice:l,average:c,amountItems:m,isAdmin:s,onClearAllProcessor:()=>{a((0,S.VT)())},isShowConfirm:t,setIsShowConfirm:r})};var j=r(3986),k=r(3610),A=r(365),D=r(8118),I=r(4207),O=r(4064),T=r(6652),L=r(1594),F=r(948);const M=(0,L.Z)((e=>({media:{height:0,paddingTop:"56.25%",margin:5},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:F.Z[500]},header:{textAlign:"center"}}))),N=(0,y.ZP)(j.Z)((()=>({width:320,margin:10,border:"solid 2px gainsboro","&:hover":{backgroundColor:"rgb(238, 236, 236)",cursor:"pointer"}}))),z=({processor:e,id:t,src:r,description:o,price2:l,isAdmin:i,classs:c,onDeleteProcessor:d,onOpenModal:m,setIsShowConfirm:p,isShowConfirm:u})=>{const h=M();return n.createElement(n.Fragment,null,u&&n.createElement(g,{setIsShowConfirm:p,isShowConfirm:u,onDeleteProcessor:()=>d(t),isDeleteAllProcessors:!1,text:"Do you want delete this processor?"}),n.createElement(N,null,n.createElement(k.Z,{className:h.header,title:c}),n.createElement(A.Z,{className:h.media,image:r||"https://cs.pikabu.ru/post_img/big/2013/08/24/1/1377296637_1500370441.png",title:c}),n.createElement(D.Z,null,n.createElement(I.Z,{align:"center",variant:"h6",color:"textSecondary",component:"p"},o),n.createElement(I.Z,{align:"center",variant:"h6",color:"textSecondary",component:"p"},`Цена ${l} грн`)),n.createElement(O.Z,{style:{justifyContent:"center"},disableSpacing:!0},n.createElement(a.u,{variant:"contained",color:"secondary",startIcon:n.createElement(s.Z,null),onClick:()=>p(!0),disabled:!i},"Delete"),n.createElement(a.u,{variant:"contained",color:"primary",startIcon:n.createElement(T.Z,null),onClick:()=>m(e),disabled:!i},"Edit"))))};z.propTypes={id:x().string,key:x().number,name:x().string,processor:x().object,isAdmin:x().bool,description:x().string,price2:x().string,classs:x().string,src:x().string,processorArr:x().array,onDeleteProcessor:x().func,onOpenModal:x().func,setIsShowConfirm:x().func,isShowConfirm:x().bool,deleteSelectedProcessor:x().func};const $=z;var q=r(2148);const R=y.ZP.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  @media (max-width: 430px) {
    /* min-width: 70px; */
  }
`,V=y.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,_=(0,y.ZP)(l.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,B=y.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 300px;
  z-index: 9999;
  background-color: white;
  border: solid 1px gray;
  border-radius: 10px;
  input {
    width: 290px;
    margin-top: 11px;
  }
  button {
    margin-top: 20px;
  }
`,U=y.ZP.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`,Y=({selectedCard:e,changeCardData:t,onCloseModal:r,classs:o,description:a,price2:s})=>{const[l,c]=(0,n.useState)(o),[d,m]=(0,n.useState)(a),[p,u]=(0,n.useState)(s);return n.createElement(R,null,n.createElement(V,null,n.createElement(B,null,n.createElement(_,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},n.createElement(q.Z,{value:l,onChange:e=>c(e.target.value),id:"standard-basic",label:"Name",variant:"standard",placeholder:"Name of the edit product"}),n.createElement(q.Z,{value:d,onChange:e=>m(e.target.value),id:"standard-basic",label:"Description",variant:"standard",placeholder:"Description of the edit product"}),n.createElement(q.Z,{value:p,onChange:e=>u(e.target.value),id:"standard-basic",label:"Price",variant:"standard",placeholder:"The cost of the edit product"})),n.createElement(U,null,n.createElement(i.Z,{variant:"contained",color:"primary",onClick:()=>t({...e,classs:l,description:d,price2:p})},"Edit"),n.createElement(i.Z,{variant:"contained",color:"primary",onClick:()=>r()},"Close")))))};(e=>{e.propTypes={selectedCard:x().object,changeCardData:x().func,onCloseModal:x().func,classs:x().string,description:x().string,price2:x().string}})(Y);const G=Y;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var J=r(2505);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const Q=({processor:e,...t})=>{const{isAdmin:r}=(0,o.v9)((e=>e.authorization)),[a,s]=(0,n.useState)(!1),l=(0,o.I0)();return n.createElement($,K({},t,e,{isShowConfirm:a,setIsShowConfirm:s,processor:e,isAdmin:r,deleteSelectedProcessor:e=>{l(deleteProcessor(e))}}))};Q.propTypes={processor:x().object};const W=(0,J.qC)((e=>({...t})=>{const r=(0,o.I0)(),[a,s]=(0,n.useState)(!1),[l,i]=(0,n.useState)();return!0===a?n.createElement(G,H({selectedCard:l},l,{changeCardData:e=>{r((0,S.yS)(e.id,e)),s(!1)},onCloseModal:()=>{s(!1)}})):n.createElement(e,H({},t,{onOpenModal:e=>{s(!0),i(e)},onDeleteProcessor:e=>{r((0,S.pU)(e))}}))}))(Q),X=({processorsList:e})=>n.createElement(n.Fragment,null,e.map((e=>n.createElement(W,{key:e.id,processor:e}))));X.propTypes={processorsList:x().array.isRequired};const ee=X,te=y.ZP.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`,re=()=>{const{processorsList:e}=(0,o.v9)((e=>e.processorsList));return n.createElement(te,null,n.createElement(ee,{processorsList:e}))},ne=y.ZP.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`;var oe=r(5945);const ae=(0,J.qC)(oe.P)((()=>n.createElement(ne,null,n.createElement(P,null),n.createElement(re,null))))},2708:(e,t,r)=>{"use strict";e.exports=r.p+"afa867a6f188ef86a9e5.jpg"}}]);