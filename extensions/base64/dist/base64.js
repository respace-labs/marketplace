'use strict';

function n(e){postMessage({type:"RenderList",items:e});}function r(e){try{let t=new TextEncoder().encode(e);return btoa(String.fromCharCode.apply(null,t))}catch{return "Invalid String"}}function o(e){try{let t=atob(e).split("").map(i=>i.charCodeAt(0));return new TextDecoder().decode(new Uint8Array(t))}catch{return "Invalid base64 string"}}n([{title:"Encode",icon:"base64.svg",subtitle:r("Hello World!!!!"),actions:[{type:"CopyToClipboard",content:r("Hello World!")}]},{title:"Decode",icon:"base64.svg",subtitle:o("Hello World!"),actions:[{type:"CopyToClipboard",content:o("Hello World!")}]}]);