"use strict";(()=>{function r(t){let e=new MessageChannel;e.port1.onmessage=n=>{t(n.data.value)},self.postMessage({type:"InitOnSearchChange"},[e.port2])}function s(t){postMessage({type:"Render",component:t.toJSON()})}var o=class{constructor(t=[]){this.items=t,this.isShowingDetail=!1,this.isLoading=!1,this.filtering=!0,this.titleLayout="row",this.setItems=e=>(this.items=e,this),this.addItem=e=>(this.items.push(e),this),this.setLoading=e=>(this.isLoading=e,this),this.setShowingDetail=e=>(this.isShowingDetail=e,this)}setTitleLayout(t){return this.titleLayout=t,this}setFiltering(t){return this.filtering=t,this}toJSON(){return{type:"list",isLoading:this.isLoading,isShowingDetail:this.isShowingDetail,filtering:this.filtering,titleLayout:this.titleLayout,items:this.items.map(t=>t.detail?{...t,detail:t.detail.toJSON()}:t)}}};function a(t){try{let e=new TextEncoder().encode(t);return btoa(String.fromCharCode.apply(null,e))}catch{return""}}function c(t){try{let e=atob(t).split("").map(i=>i.charCodeAt(0));return new TextDecoder().decode(new Uint8Array(e))}catch{return""}}async function h(){let t=await d(),e=new o(t).setFiltering(!1);r(async n=>{let i=await d(n);e.setItems(i),s(e)}),s(e)}async function d(t=""){let e=a(t),n=c(t);return[{title:"Encode",icon:"code.svg",subtitle:e,actions:[{type:"CopyToClipboard",content:e}]},{title:"Decode",icon:"code.svg",subtitle:n,actions:[{type:"CopyToClipboard",content:n}]}]}h();})();