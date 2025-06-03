(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="160",Hi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,Ul=1,Df=2,Ih=1,Nh=2,zn=3,ui=0,Ve=1,kn=2,Vn=0,Ri=1,Yr=2,Il=3,Nl=4,Uf=5,wi=100,If=101,Nf=102,Ol=103,Fl=104,Of=200,Ff=201,zf=202,Bf=203,xa=204,Ma=205,Gf=206,kf=207,Hf=208,Vf=209,Wf=210,Xf=211,Yf=212,qf=213,jf=214,Kf=0,Zf=1,Jf=2,qr=3,$f=4,Qf=5,td=6,ed=7,Oh=0,nd=1,id=2,oi=0,sd=1,rd=2,od=3,Fh=4,ad=5,ld=6,zh=300,_s=301,gs=302,ya=303,Sa=304,uo=306,Ea=1e3,yn=1001,Ta=1002,ke=1003,zl=1004,Ao=1005,dn=1006,cd=1007,Ks=1008,ai=1009,hd=1010,ud=1011,ja=1012,Bh=1013,ei=1014,ni=1015,Wn=1016,Gh=1017,kh=1018,Pi=1020,fd=1021,Sn=1023,dd=1024,pd=1025,Li=1026,vs=1027,md=1028,Hh=1029,_d=1030,Vh=1031,Wh=1033,Co=33776,Ro=33777,Po=33778,Lo=33779,Bl=35840,Gl=35841,kl=35842,Hl=35843,Xh=36196,Vl=37492,Wl=37496,Xl=37808,Yl=37809,ql=37810,jl=37811,Kl=37812,Zl=37813,Jl=37814,$l=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,Do=36492,rc=36494,oc=36495,gd=36283,ac=36284,lc=36285,cc=36286,Yh=3e3,Di=3001,vd=3200,xd=3201,qh=0,Md=1,pn="",Ce="srgb",Xn="srgb-linear",Ka="display-p3",fo="display-p3-linear",jr="linear",ie="srgb",Kr="rec709",Zr="p3",Wi=7680,hc=519,yd=512,Sd=513,Ed=514,jh=515,Td=516,wd=517,bd=518,Ad=519,uc=35044,fc="300 es",wa=1035,Hn=2e3,Jr=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,$r=180/Math.PI;function As(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Cd(s,t){return(s%t+t)%t}function Uo(s,t,e){return(1-e)*s+e*t}function dc(s){return(s&s-1)===0&&s!==0}function ba(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rd={DEG2RAD:kr};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],M=i[7],b=i[2],w=i[5],S=i[8];return r[0]=o*_+a*x+l*b,r[3]=o*m+a*v+l*w,r[6]=o*p+a*M+l*S,r[1]=c*_+h*x+u*b,r[4]=c*m+h*v+u*w,r[7]=c*p+h*M+u*S,r[2]=f*_+d*x+g*b,r[5]=f*m+d*v+g*w,r[8]=f*p+d*M+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new qt;function Kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){const s=Qr("canvas");return s.style.display="block",s}const pc={};function Hs(s){s in pc||(pc[s]=!0,console.warn(s))}const mc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_c=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[Xn]:{transfer:jr,primaries:Kr,toReference:s=>s,fromReference:s=>s},[Ce]:{transfer:ie,primaries:Kr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fo]:{transfer:jr,primaries:Zr,toReference:s=>s.applyMatrix3(_c),fromReference:s=>s.applyMatrix3(mc)},[Ka]:{transfer:ie,primaries:Zr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_c),fromReference:s=>s.applyMatrix3(mc).convertLinearToSRGB()}},Ld=new Set([Xn,fo]),ee={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ld.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=fr[t].toReference,i=fr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return fr[s].primaries},getTransfer:function(s){return s===pn?jr:fr[s].transfer}};function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function No(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class Zh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Qr("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=As(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oo(i[o].image)):r.push(Oo(i[o]))}else r=Oo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Oo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class je extends Gi{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=yn,i=yn,r=dn,o=Ks,a=Sn,l=ai,c=je.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=As(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Di?Ce:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?Di:Yh}set encoding(t){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Ce:pn}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=zh;je.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,b=(p+1)/2,w=(h+f)/4,S=(u+_)/4,D=(g+m)/4;return v>M&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=S/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=D/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=D/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Id extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Ce:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $h extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*x);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const M=a*x;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new L,gc=new Fi;class or{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),pr.subVectors(this.max,Ds),Yi.subVectors(t.a,Ds),qi.subVectors(t.b,Ds),ji.subVectors(t.c,Ds),jn.subVectors(qi,Yi),Kn.subVectors(ji,qi),gi.subVectors(Yi,ji);let e=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!zo(e,Yi,qi,ji,pr)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Yi,qi,ji,pr))?!1:(mr.crossVectors(jn,Kn),e=[mr.x,mr.y,mr.z],zo(e,Yi,qi,ji,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,dr=new or,Yi=new L,qi=new L,ji=new L,jn=new L,Kn=new L,gi=new L,Ds=new L,pr=new L,mr=new L,vi=new L;function zo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vi.fromArray(s,r);const a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Od=new or,Us=new L,Bo=new L;class po{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Bo)),this.expandByPoint(Us.copy(t.center).sub(Bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,Go=new L,_r=new L,Zn=new L,ko=new L,gr=new L,Ho=new L;class mo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=Zn.dot(this.direction),l=-Zn.dot(_r),c=Zn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Go).addScaledVector(_r,f),d}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,r){ko.subVectors(e,t),gr.subVectors(n,t),Ho.crossVectors(ko,gr);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(gr.crossVectors(Zn,gr));if(l<0)return null;const c=a*this.direction.dot(ko.cross(Zn));if(c<0||l+c>o)return null;const h=-a*Zn.dot(Ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,zd)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),vr.crossVectors(en,Jn),i[0]=Jn.x,i[4]=vr.x,i[8]=en.x,i[1]=Jn.y,i[5]=vr.y,i[9]=en.y,i[2]=Jn.z,i[6]=vr.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],M=n[11],b=n[15],w=i[0],S=i[4],D=i[8],y=i[12],T=i[1],N=i[5],z=i[9],W=i[13],R=i[2],O=i[6],F=i[10],k=i[14],X=i[3],K=i[7],J=i[11],et=i[15];return r[0]=o*w+a*T+l*R+c*X,r[4]=o*S+a*N+l*O+c*K,r[8]=o*D+a*z+l*F+c*J,r[12]=o*y+a*W+l*k+c*et,r[1]=h*w+u*T+f*R+d*X,r[5]=h*S+u*N+f*O+d*K,r[9]=h*D+u*z+f*F+d*J,r[13]=h*y+u*W+f*k+d*et,r[2]=g*w+_*T+m*R+p*X,r[6]=g*S+_*N+m*O+p*K,r[10]=g*D+_*z+m*F+p*J,r[14]=g*y+_*W+m*k+p*et,r[3]=x*w+v*T+M*R+b*X,r[7]=x*S+v*N+M*O+b*K,r[11]=x*D+v*z+M*F+b*J,r[15]=x*y+v*W+M*k+b*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,v=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,b=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,w=e*x+n*v+i*M+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=x*S,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*S,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*S,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=v*S,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*S,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*S,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=M*S,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*S,t[12]=b*S,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*S,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,v=l*h,M=l*u,b=n.x,w=n.y,S=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+M)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+v)*S,i[9]=(m-x)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Hn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h;let g,_;if(a===Hn)g=(o+r)*u,_=-2*u;else if(a===Jr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new L,vn=new de,Fd=new L(0,0,0),zd=new L(1,1,1),Jn=new L,vr=new L,en=new L,vc=new de,xc=new Fi;class _o{constructor(t=0,e=0,n=0,i=_o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_o.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const Mc=new L,Zi=new Fi,Nn=new de,xr=new L,Is=new L,Gd=new L,kd=new Fi,yc=new L(1,0,0),Sc=new L(0,1,0),Ec=new L(0,0,1),Hd={type:"added"},Vd={type:"removed"};class ye extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new L,e=new _o,n=new Fi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Is,xr,this.up):Nn.lookAt(xr,Is,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new L,On=new L,Vo=new L,Fn=new L,Ji=new L,$i=new L,Tc=new L,Wo=new L,Xo=new L,Yo=new L;let Mr=!1;class Mn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),On.subVectors(n,e),Vo.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(On),l=xn.dot(Vo),c=On.dot(On),h=On.dot(Vo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ji.subVectors(i,n),$i.subVectors(r,n),Wo.subVectors(t,n);const l=Ji.dot(Wo),c=$i.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,i);const h=Ji.dot(Xo),u=$i.dot(Xo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ji,o);Yo.subVectors(t,r);const d=Ji.dot(Yo),g=$i.dot(Yo);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Tc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Tc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ji,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},yr={h:0,s:0,l:0};function qo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Cd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qo(o,r,t+1/3),this.g=qo(o,r,t),this.b=qo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Re(Ne.r*255,0,255))*65536+Math.round(Re(Ne.g*255,0,255))*256+Math.round(Re(Ne.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,r=Ne.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ce){ee.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(yr);const n=Uo($n.h,yr.h,e),i=Uo($n.s,yr.s,e),r=Uo($n.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Bt;Bt.NAMES=Qh;let Wd=0;class Cs extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Ri,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=Ma,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class go extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new L,Sr=new $;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class tu extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xd=0;const un=new de,jo=new ye,Qi=new L,nn=new or,Ns=new or,be=new L;class Se extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?eu:tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(nn.min,Ns.min),nn.expandByPoint(be),be.addVectors(nn.max,Ns.max),nn.expandByPoint(be)):(nn.expandByPoint(Ns.min),nn.expandByPoint(Ns.max))}nn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),be.add(Qi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new L,h[T]=new L;const u=new L,f=new L,d=new L,g=new $,_=new $,m=new $,p=new L,x=new L;function v(T,N,z){u.fromArray(i,T*3),f.fromArray(i,N*3),d.fromArray(i,z*3),g.fromArray(o,T*2),_.fromArray(o,N*2),m.fromArray(o,z*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);const W=1/(_.x*m.y-m.x*_.y);isFinite(W)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(W),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(W),c[T].add(p),c[N].add(p),c[z].add(p),h[T].add(x),h[N].add(x),h[z].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,N=M.length;T<N;++T){const z=M[T],W=z.start,R=z.count;for(let O=W,F=W+R;O<F;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new L,w=new L,S=new L,D=new L;function y(T){S.fromArray(r,T*3),D.copy(S);const N=c[T];b.copy(N),b.sub(S.multiplyScalar(S.dot(N))).normalize(),w.crossVectors(D,N);const W=w.dot(h[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=W}for(let T=0,N=M.length;T<N;++T){const z=M[T],W=z.start,R=z.count;for(let O=W,F=W+R;O<F;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new de,xi=new mo,Er=new po,bc=new L,ts=new L,es=new L,ns=new L,Ko=new L,Tr=new L,wr=new $,br=new $,Ar=new $,Ac=new L,Cc=new L,Rc=new L,Cr=new L,Rr=new L;class ct extends ye{constructor(t=new Se,e=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ko.fromBufferAttribute(u,t),o?Tr.addScaledVector(Ko,h):Tr.addScaledVector(Ko.sub(e),h))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Er.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Er,bc)===null||xi.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=v;M<b;M+=3){const w=a.getX(M),S=a.getX(M+1),D=a.getX(M+2);i=Pr(this,p,t,n,c,h,u,w,S,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=Pr(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=v;M<b;M+=3){const w=M,S=M+1,D=M+2;i=Pr(this,p,t,n,c,h,u,w,S,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,M=m+2;i=Pr(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Yd(s,t,e,n,i,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ui,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:s}}function Pr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ts),s.getVertexPosition(l,es),s.getVertexPosition(c,ns);const h=Yd(s,t,e,n,ts,es,ns,Cr);if(h){i&&(wr.fromBufferAttribute(i,a),br.fromBufferAttribute(i,l),Ar.fromBufferAttribute(i,c),h.uv=Mn.getInterpolation(Cr,ts,es,ns,wr,br,Ar,new $)),r&&(wr.fromBufferAttribute(r,a),br.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,c),h.uv1=Mn.getInterpolation(Cr,ts,es,ns,wr,br,Ar,new $),h.uv2=h.uv1),o&&(Ac.fromBufferAttribute(o,a),Cc.fromBufferAttribute(o,l),Rc.fromBufferAttribute(o,c),h.normal=Mn.getInterpolation(Cr,ts,es,ns,Ac,Cc,Rc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Mn.getNormal(ts,es,ns,u.normal),h.face=u}return h}class Ae extends Se{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,p,x,v,M,b,w,S,D,y){const T=M/S,N=b/D,z=M/2,W=b/2,R=w/2,O=S+1,F=D+1;let k=0,X=0;const K=new L;for(let J=0;J<F;J++){const et=J*N-W;for(let ot=0;ot<O;ot++){const q=ot*T-z;K[_]=q*x,K[m]=et*v,K[p]=R,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(ot/S),u.push(1-J/D),k+=1}}for(let J=0;J<D;J++)for(let et=0;et<S;et++){const ot=f+et+O*J,q=f+et+O*(J+1),Q=f+(et+1)+O*(J+1),ft=f+(et+1)+O*J;l.push(ot,q,ft),l.push(q,Q,ft),X+=6}a.addGroup(d,X,y),d+=X,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=xs(s[e]);for(const i in n)t[i]=n[i]}return t}function qd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nu(s){return s.getRenderTarget()===null?s.outputColorSpace:ee.workingColorSpace}const to={clone:xs,merge:Ge};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fe extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends iu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Zd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(is,ss,t,e);i.layers=this.layers,this.add(i);const r=new Ye(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new Ye(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new Ye(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new Ye(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new Ye(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends je{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jd extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Ce:pn),this.texture=new su(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ae(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Vn});r.uniforms.tEquirect.value=e;const o=new ct(i,r),a=e.minFilter;return e.minFilter===Ks&&(e.minFilter=dn),new Zd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Zo=new L,$d=new L,Qd=new qt;class Qn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zo.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qd.getNormalMatrix(t),i=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new po,Lr=new L;class Ja{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+h,m+g,M+x).normalize(),n[3].setComponents(l-o,f-h,m-g,M-x).normalize(),n[4].setComponents(l-a,f-u,m-_,M-v).normalize(),e===Hn)n[5].setComponents(l+a,f+u,m+_,M+v).normalize();else if(e===Jr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tp(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){const f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class ti extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let v=0;v<c;v++){const M=v*u-r;g.push(M,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,M=x+c*(p+1),b=x+1+c*(p+1),w=x+1+c*p;d.push(v,M,w),d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_m=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,l_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:fp,bsdfs:dp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:xp,color_fragment:Mp,color_pars_fragment:yp,color_pars_vertex:Sp,color_vertex:Ep,common:Tp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Cp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:jp,envmap_vertex:Fp,fog_vertex:zp,fog_pars_vertex:Bp,fog_fragment:Gp,fog_pars_fragment:kp,gradientmap_pars_fragment:Hp,lightmap_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:Yp,lights_pars_begin:qp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Jp,lights_phong_pars_fragment:$p,lights_physical_fragment:Qp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:_m,morphtarget_vertex:gm,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:Mm,normal_pars_vertex:ym,normal_vertex:Sm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Am,opaque_fragment:Cm,packing:Rm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:zm,shadowmask_pars_fragment:Bm,skinbase_vertex:Gm,skinning_pars_vertex:km,skinning_vertex:Hm,skinnormal_vertex:Vm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:Ym,tonemapping_pars_fragment:qm,transmission_fragment:jm,transmission_pars_fragment:Km,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:$m,worldpos_vertex:Qm,background_vert:t_,background_frag:e_,backgroundCube_vert:n_,backgroundCube_frag:i_,cube_vert:s_,cube_frag:r_,depth_vert:o_,depth_frag:a_,distanceRGBA_vert:l_,distanceRGBA_frag:c_,equirect_vert:h_,equirect_frag:u_,linedashed_vert:f_,linedashed_frag:d_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:__,meshlambert_frag:g_,meshmatcap_vert:v_,meshmatcap_frag:x_,meshnormal_vert:M_,meshnormal_frag:y_,meshphong_vert:S_,meshphong_frag:E_,meshphysical_vert:T_,meshphysical_frag:w_,meshtoon_vert:b_,meshtoon_frag:A_,points_vert:C_,points_frag:R_,shadow_vert:P_,shadow_frag:L_,sprite_vert:D_,sprite_frag:U_},dt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},bn={basic:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ge([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ge([dt.lights,dt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};bn.physical={uniforms:Ge([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Dr={r:0,b:0,g:0};function I_(s,t,e,n,i,r,o){const a=new Bt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===uo)?(h===void 0&&(h=new ct(new Ae(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:xs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ct(new ti(2,2),new Fe({name:"BackgroundMaterial",uniforms:xs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Dr,nu(s)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function N_(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(R,O,F,k,X){let K=!1;if(o){const J=_(k,F,O);c!==J&&(c=J,d(c.object)),K=p(R,k,F,X),K&&x(R,k,F,X)}else{const J=O.wireframe===!0;(c.geometry!==k.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=k.id,c.program=F.id,c.wireframe=J,K=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,D(R,O,F,k),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,O,F){const k=F.wireframe===!0;let X=a[R.id];X===void 0&&(X={},a[R.id]=X);let K=X[O.id];K===void 0&&(K={},X[O.id]=K);let J=K[k];return J===void 0&&(J=m(f()),K[k]=J),J}function m(R){const O=[],F=[],k=[];for(let X=0;X<i;X++)O[X]=0,F[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:k,object:R,attributes:{},index:null}}function p(R,O,F,k){const X=c.attributes,K=O.attributes;let J=0;const et=F.getAttributes();for(const ot in et)if(et[ot].location>=0){const Q=X[ot];let ft=K[ot];if(ft===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),Q===void 0||Q.attribute!==ft||ft&&Q.data!==ft.data)return!0;J++}return c.attributesNum!==J||c.index!==k}function x(R,O,F,k){const X={},K=O.attributes;let J=0;const et=F.getAttributes();for(const ot in et)if(et[ot].location>=0){let Q=K[ot];Q===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ft={};ft.attribute=Q,Q&&Q.data&&(ft.data=Q.data),X[ot]=ft,J++}c.attributes=X,c.attributesNum=J,c.index=k}function v(){const R=c.newAttributes;for(let O=0,F=R.length;O<F;O++)R[O]=0}function M(R){b(R,0)}function b(R,O){const F=c.newAttributes,k=c.enabledAttributes,X=c.attributeDivisors;F[R]=1,k[R]===0&&(s.enableVertexAttribArray(R),k[R]=1),X[R]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),X[R]=O)}function w(){const R=c.newAttributes,O=c.enabledAttributes;for(let F=0,k=O.length;F<k;F++)O[F]!==R[F]&&(s.disableVertexAttribArray(F),O[F]=0)}function S(R,O,F,k,X,K,J){J===!0?s.vertexAttribIPointer(R,O,F,X,K):s.vertexAttribPointer(R,O,F,k,X,K)}function D(R,O,F,k){if(n.isWebGL2===!1&&(R.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const X=k.attributes,K=F.getAttributes(),J=O.defaultAttributeValues;for(const et in K){const ot=K[et];if(ot.location>=0){let q=X[et];if(q===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){const Q=q.normalized,ft=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;const Mt=Tt.buffer,Lt=Tt.type,Nt=Tt.bytesPerElement,Et=n.isWebGL2===!0&&(Lt===s.INT||Lt===s.UNSIGNED_INT||q.gpuType===Bh);if(q.isInterleavedBufferAttribute){const It=q.data,U=It.stride,ut=q.offset;if(It.isInstancedInterleavedBuffer){for(let Z=0;Z<ot.locationSize;Z++)b(ot.location+Z,It.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Z=0;Z<ot.locationSize;Z++)M(ot.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Z=0;Z<ot.locationSize;Z++)S(ot.location+Z,ft/ot.locationSize,Lt,Q,U*Nt,(ut+ft/ot.locationSize*Z)*Nt,Et)}else{if(q.isInstancedBufferAttribute){for(let It=0;It<ot.locationSize;It++)b(ot.location+It,q.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let It=0;It<ot.locationSize;It++)M(ot.location+It);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let It=0;It<ot.locationSize;It++)S(ot.location+It,ft/ot.locationSize,Lt,Q,ft*Nt,ft/ot.locationSize*It*Nt,Et)}}else if(J!==void 0){const Q=J[et];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(ot.location,Q);break;case 3:s.vertexAttrib3fv(ot.location,Q);break;case 4:s.vertexAttrib4fv(ot.location,Q);break;default:s.vertexAttrib1fv(ot.location,Q)}}}}w()}function y(){z();for(const R in a){const O=a[R];for(const F in O){const k=O[F];for(const X in k)g(k[X].object),delete k[X];delete O[F]}delete a[R]}}function T(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const F in O){const k=O[F];for(const X in k)g(k[X].object),delete k[X];delete O[F]}delete a[R.id]}function N(R){for(const O in a){const F=a[O];if(F[R.id]===void 0)continue;const k=F[R.id];for(const X in k)g(k[X].object),delete k[X];delete F[R.id]}}function z(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:W,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function O_(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F_(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||t.has("OES_texture_float"),b=v&&M,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:w}}function z_(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Qn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;l.value=M,M=h(g,f,v,d);for(let b=0;b!==v;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function B_(s){let t=new WeakMap;function e(o,a){return a===ya?o.mapping=_s:a===Sa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ya||a===Sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $a extends iu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,Pc=[.125,.215,.35,.446,.526,.582],bi=20,Jo=new $a,Lc=new Bt;let $o=null,Qo=0,ta=0;const Ei=(1+Math.sqrt(5))/2,rs=1/Ei,Dc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ei,rs),new L(0,Ei,-rs),new L(rs,0,Ei),new L(-rs,0,Ei),new L(Ei,rs,0),new L(-Ei,rs,0)];class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$o=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Qo,ta),t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Wn,format:Sn,colorSpace:Xn,depthBuffer:!1},i=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=k_(r,t,e)}return i}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,n,i){const a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lc),h.toneMapping=oi,h.autoClear=!1;const d=new go({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new ct(new Ae,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Lc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ur(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_s||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Dc[(i-1)%Dc.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let x=0;for(let S=0;S<bi;++S){const D=S/_,y=Math.exp(-D*D/2);p.push(y),S===0?x+=y:S<m&&(x+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],b=3*M*(i>v-as?i-v+as:0),w=4*(this._cubeSize-M);Ur(e,b,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Jo)}}function G_(s){const t=[],e=[],n=[];let i=s;const r=s-as+1+Pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-as?l=Pc[o-s+as-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,D=w>2?0:-1,y=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];x.set(y,_*g*w),v.set(f,m*g*w);const T=[w,w,w,w,w,w];M.set(T,p*g*w)}const b=new Se;b.setAttribute("position",new qe(x,_)),b.setAttribute("uv",new qe(v,m)),b.setAttribute("faceIndex",new qe(M,p)),t.push(b),i>as&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(s,t,e){const n=new En(s,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function k_(s,t,e){const n=new Float32Array(bi),i=new L(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nc(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Oc(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ya||l===Sa,h=l===_s||l===gs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Uc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Uc(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function V_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function W_(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,M=x.length;v<M;v+=3){const b=x[v+0],w=x[v+1],S=x[v+2];f.push(b,w,w,S,S,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const b=v+0,w=v+1,S=v+2;f.push(b,w,w,S,S,b)}}else return;const m=new(Kh(f)?eu:tu)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function X_(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Y_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function q_(s,t){return s[0]-t[0]}function j_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function K_(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let O=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),b===!0&&(y=3);let T=h.attributes.position.count*y,N=1;T>t.maxTextureSize&&(N=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const z=new Float32Array(T*N*4*_),W=new $h(z,T,N,_);W.type=ni,W.needsUpdate=!0;const R=y*4;for(let F=0;F<_;F++){const k=w[F],X=S[F],K=D[F],J=T*N*4*F;for(let et=0;et<k.count;et++){const ot=et*R;v===!0&&(o.fromBufferAttribute(k,et),z[J+ot+0]=o.x,z[J+ot+1]=o.y,z[J+ot+2]=o.z,z[J+ot+3]=0),M===!0&&(o.fromBufferAttribute(X,et),z[J+ot+4]=o.x,z[J+ot+5]=o.y,z[J+ot+6]=o.z,z[J+ot+7]=0),b===!0&&(o.fromBufferAttribute(K,et),z[J+ot+8]=o.x,z[J+ot+9]=o.y,z[J+ot+10]=o.z,z[J+ot+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:W,size:new $(T,N)},r.set(h,m),h.addEventListener("dispose",O)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const b=_[M];b[0]=M,b[1]=f[M]}_.sort(j_);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(q_);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const b=a[M],w=b[0],S=b[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+M)!==m[w]&&h.setAttribute("morphTarget"+M,m[w]),p&&h.getAttribute("morphNormal"+M)!==p[w]&&h.setAttribute("morphNormal"+M,p[w]),i[M]=S,x+=S):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Z_(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ou extends je{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Li,h!==Li&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ei),n===void 0&&h===vs&&(n=Pi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const au=new je,lu=new ou(1,1);lu.compareFunction=jh;const cu=new $h,hu=new Nd,uu=new su,Fc=[],zc=[],Bc=new Float32Array(16),Gc=new Float32Array(9),kc=new Float32Array(4);function Rs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fc[i];if(r===void 0&&(r=new Float32Array(i),Fc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vo(s,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function J_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Te(e,n)}}function ng(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),Te(e,n)}}function ig(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),Te(e,n)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?lu:au;e.setTexture2D(t||r,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hu,i)}function pg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||uu,i)}function mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cu,i)}function _g(s){switch(s){case 5126:return J_;case 35664:return $_;case 35665:return Q_;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function gg(s,t){s.uniform1fv(this.addr,t)}function vg(s,t){const e=Rs(t,this.size,2);s.uniform2fv(this.addr,e)}function xg(s,t){const e=Rs(t,this.size,3);s.uniform3fv(this.addr,e)}function Mg(s,t){const e=Rs(t,this.size,4);s.uniform4fv(this.addr,e)}function yg(s,t){const e=Rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sg(s,t){const e=Rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Eg(s,t){const e=Rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tg(s,t){s.uniform1iv(this.addr,t)}function wg(s,t){s.uniform2iv(this.addr,t)}function bg(s,t){s.uniform3iv(this.addr,t)}function Ag(s,t){s.uniform4iv(this.addr,t)}function Cg(s,t){s.uniform1uiv(this.addr,t)}function Rg(s,t){s.uniform2uiv(this.addr,t)}function Pg(s,t){s.uniform3uiv(this.addr,t)}function Lg(s,t){s.uniform4uiv(this.addr,t)}function Dg(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||au,r[o])}function Ug(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hu,r[o])}function Ig(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||uu,r[o])}function Ng(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||cu,r[o])}function Og(s){switch(s){case 5126:return gg;case 35664:return vg;case 35665:return xg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return bg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Hc(s,t){s.seq.push(t),s.map[t.id]=t}function Gg(s,t,e){const n=s.name,i=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),o=ea.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hc(e,c===void 0?new Fg(a,s,t):new zg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Bg(a),Hc(e,u)),e=u}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Gg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Vc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const kg=37297;let Hg=0;function Vg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Wg(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===Zr&&e===Kr?n="LinearDisplayP3ToLinearSRGB":t===Kr&&e===Zr&&(n="LinearSRGBToLinearDisplayP3"),s){case Xn:case fo:return[n,"LinearTransferOETF"];case Ce:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Wc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vg(s.getShaderSource(t),o)}else return i}function Xg(s,t){const e=Wg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yg(s,t){let e;switch(t){case sd:e="Linear";break;case rd:e="Reinhard";break;case od:e="OptimizedCineon";break;case Fh:e="ACESFilmic";break;case ld:e="AgX";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function jg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function Kg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ls(s){return s!==""}function Xc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(s){return s.replace(Jg,Qg)}const $g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qg(s,t){let e=Vt[t];if(e===void 0){const n=$g.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(t0,e0)}function e0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function n0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function i0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case gs:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function r0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function o0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function a0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=n0(e),c=i0(e),h=s0(e),u=r0(e),f=o0(e),d=e.isWebGL2?"":qg(e),g=jg(e),_=Kg(r),m=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),x.length>0&&(x+=`
`)):(p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),x=[d,jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=Aa(o),o=Xc(o,e),o=Yc(o,e),a=Aa(a),a=Xc(a,e),a=Yc(a,e),o=qc(o),a=qc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+p+o,b=v+x+a,w=Vc(i,i.VERTEX_SHADER,M),S=Vc(i,i.FRAGMENT_SHADER,b);i.attachShader(m,w),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(z){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(S).trim();let F=!0,k=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,S);else{const X=Wc(i,w,"vertex"),K=Wc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+X+`
`+K)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(R===""||O==="")&&(k=!1);k&&(z.diagnostics={runnable:F,programLog:W,vertexShader:{log:R,prefix:p},fragmentShader:{log:O,prefix:x}})}i.deleteShader(w),i.deleteShader(S),y=new Hr(i,m),T=Zg(i,m)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,kg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h0(t),e.set(t,n)),n}}class h0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function u0(s,t,e,n,i,r,o){const a=new Za,l=new c0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,T,N,z,W){const R=z.fog,O=W.geometry,F=y.isMeshStandardMaterial?z.environment:null,k=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),X=k&&k.mapping===uo?k.image.height:null,K=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=J!==void 0?J.length:0;let ot=0;O.morphAttributes.position!==void 0&&(ot=1),O.morphAttributes.normal!==void 0&&(ot=2),O.morphAttributes.color!==void 0&&(ot=3);let q,Q,ft,Tt;if(K){const pe=bn[K];q=pe.vertexShader,Q=pe.fragmentShader}else q=y.vertexShader,Q=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);const Mt=s.getRenderTarget(),Lt=W.isInstancedMesh===!0,Nt=W.isBatchedMesh===!0,Et=!!y.map,It=!!y.matcap,U=!!k,ut=!!y.aoMap,Z=!!y.lightMap,at=!!y.bumpMap,j=!!y.normalMap,wt=!!y.displacementMap,_t=!!y.emissiveMap,A=!!y.metalnessMap,E=!!y.roughnessMap,B=y.anisotropy>0,st=y.clearcoat>0,nt=y.iridescence>0,tt=y.sheen>0,St=y.transmission>0,pt=B&&!!y.anisotropyMap,vt=st&&!!y.clearcoatMap,Rt=st&&!!y.clearcoatNormalMap,Gt=st&&!!y.clearcoatRoughnessMap,it=nt&&!!y.iridescenceMap,$t=nt&&!!y.iridescenceThicknessMap,Wt=tt&&!!y.sheenColorMap,Ot=tt&&!!y.sheenRoughnessMap,Ct=!!y.specularMap,gt=!!y.specularColorMap,P=!!y.specularIntensityMap,lt=St&&!!y.transmissionMap,bt=St&&!!y.thicknessMap,yt=!!y.gradientMap,rt=!!y.alphaMap,I=y.alphaTest>0,ht=!!y.alphaHash,mt=!!y.extensions,Dt=!!O.attributes.uv1,Pt=!!O.attributes.uv2,jt=!!O.attributes.uv3;let Kt=oi;return y.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:Q,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Nt,instancing:Lt,instancingColor:Lt&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Xn,map:Et,matcap:It,envMap:U,envMapMode:U&&k.mapping,envMapCubeUVHeight:X,aoMap:ut,lightMap:Z,bumpMap:at,normalMap:j,displacementMap:f&&wt,emissiveMap:_t,normalMapObjectSpace:j&&y.normalMapType===Md,normalMapTangentSpace:j&&y.normalMapType===qh,metalnessMap:A,roughnessMap:E,anisotropy:B,anisotropyMap:pt,clearcoat:st,clearcoatMap:vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Gt,iridescence:nt,iridescenceMap:it,iridescenceThicknessMap:$t,sheen:tt,sheenColorMap:Wt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:gt,specularIntensityMap:P,transmission:St,transmissionMap:lt,thicknessMap:bt,gradientMap:yt,opaque:y.transparent===!1&&y.blending===Ri,alphaMap:rt,alphaTest:I,alphaHash:ht,combine:y.combine,mapUv:Et&&_(y.map.channel),aoMapUv:ut&&_(y.aoMap.channel),lightMapUv:Z&&_(y.lightMap.channel),bumpMapUv:at&&_(y.bumpMap.channel),normalMapUv:j&&_(y.normalMap.channel),displacementMapUv:wt&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:A&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:pt&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(y.sheenRoughnessMap.channel),specularMapUv:Ct&&_(y.specularMap.channel),specularColorMapUv:gt&&_(y.specularColorMap.channel),specularIntensityMapUv:P&&_(y.specularIntensityMap.channel),transmissionMapUv:lt&&_(y.transmissionMap.channel),thicknessMapUv:bt&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(j||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:jt,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(Et||rt),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kn,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(T,y),v(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const T=g[y.type];let N;if(T){const z=bn[T];N=to.clone(z.uniforms)}else N=y.uniforms;return N}function b(y,T){let N;for(let z=0,W=c.length;z<W;z++){const R=c[z];if(R.cacheKey===T){N=R,++N.usedTimes;break}}return N===void 0&&(N=new a0(s,T,y,r),c.push(N)),N}function w(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function S(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:D}}function f0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function d0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||d0),n.length>1&&n.sort(f||Kc),i.length>1&&i.sort(f||Kc)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function p0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Zc,s.set(n,[o])):i>=r.length?(o=new Zc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function m0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function _0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let g0=0;function v0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function x0(s,t){const e=new m0,n=_0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new de,a=new de;function l(h,u){let f=0,d=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,M=0,b=0,w=0,S=0,D=0,y=0;h.sort(v0);const T=u===!0?Math.PI:1;for(let z=0,W=h.length;z<W;z++){const R=h[z],O=R.color,F=R.intensity,k=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=O.r*F*T,d+=O.g*F*T,g+=O.b*F*T;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],F);y++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const J=R.shadow,et=n.get(R);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,i.directionalShadow[_]=et,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=K,_++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(O).multiplyScalar(F*T),K.distance=k,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[p]=K;const J=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,J.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[p]=J.matrix,R.castShadow){const et=n.get(R);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,i.spotShadow[p]=et,i.spotShadowMap[p]=X,w++}p++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(O).multiplyScalar(F),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=K,x++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*T),K.distance=R.distance,K.decay=R.decay,R.castShadow){const J=R.shadow,et=n.get(R);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=R.shadow.matrix,b++}i.point[m]=K,m++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(F*T),K.groundColor.copy(R.groundColor).multiplyScalar(F*T),i.hemi[v]=K,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==b||N.numSpotShadows!==w||N.numSpotMaps!==S||N.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=y,N.directionalLength=_,N.pointLength=m,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=b,N.numSpotShadows=w,N.numSpotMaps=S,N.numLightProbes=y,i.version=g0++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Jc(s,t){const e=new x0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function M0(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Jc(s,t),e.set(r,[l])):o>=a.length?(l=new Jc(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class y0 extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S0 extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w0(s,t,e){let n=new Ja;const i=new $,r=new $,o=new se,a=new y0({depthPacking:xd}),l=new S0,c={},h=e.maxTextureSize,u={[ui]:Ve,[Ve]:ui,[kn]:kn},f=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:E0,fragmentShader:T0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let p=this.type;this.render=function(w,S,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=p!==zn&&this.type===zn,R=p===zn&&this.type!==zn;for(let O=0,F=w.length;O<F;O++){const k=w[O],X=k.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const K=X.getFrameExtents();if(i.multiply(K),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,X.mapSize.y=r.y)),X.map===null||W===!0||R===!0){const et=this.type!==zn?{minFilter:ke,magFilter:ke}:{};X.map!==null&&X.map.dispose(),X.map=new En(i.x,i.y,et),X.map.texture.name=k.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const J=X.getViewportCount();for(let et=0;et<J;et++){const ot=X.getViewport(et);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),z.viewport(o),X.updateMatrices(k,et),n=X.getFrustum(),M(S,D,X.camera,k,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&x(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,T,N)};function x(w,S){const D=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(S,null,D,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(S,null,D,d,_,null)}function v(w,S,D,y){let T=null;const N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=D.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=T.uuid,W=S.uuid;let R=c[z];R===void 0&&(R={},c[z]=R);let O=R[W];O===void 0&&(O=T.clone(),R[W]=O,S.addEventListener("dispose",b)),T=O}if(T.visible=S.visible,T.wireframe=S.wireframe,y===zn?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:u[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=s.properties.get(T);z.light=D}return T}function M(w,S,D,y,T){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const W=t.update(w),R=w.material;if(Array.isArray(R)){const O=W.groups;for(let F=0,k=O.length;F<k;F++){const X=O[F],K=R[X.materialIndex];if(K&&K.visible){const J=v(w,K,y,T);w.onBeforeShadow(s,w,S,D,W,J,X),s.renderBufferDirect(D,null,W,J,w,X),w.onAfterShadow(s,w,S,D,W,J,X)}}}else if(R.visible){const O=v(w,R,y,T);w.onBeforeShadow(s,w,S,D,W,O,null),s.renderBufferDirect(D,null,W,O,w,null),w.onAfterShadow(s,w,S,D,W,O,null)}}const z=w.children;for(let W=0,R=z.length;W<R;W++)M(z[W],S,D,y,T)}function b(w){w.target.removeEventListener("dispose",b);for(const D in c){const y=c[D],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function b0(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ht=new se;let mt=null;const Dt=new se(0,0,0,0);return{setMask:function(Pt){mt!==Pt&&!I&&(s.colorMask(Pt,Pt,Pt,Pt),mt=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,jt,Kt,he,pe){pe===!0&&(Pt*=he,jt*=he,Kt*=he),ht.set(Pt,jt,Kt,he),Dt.equals(ht)===!1&&(s.clearColor(Pt,jt,Kt,he),Dt.copy(ht))},reset:function(){I=!1,mt=null,Dt.set(-1,0,0,0)}}}function r(){let I=!1,ht=null,mt=null,Dt=null;return{setTest:function(Pt){Pt?Nt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Pt){ht!==Pt&&!I&&(s.depthMask(Pt),ht=Pt)},setFunc:function(Pt){if(mt!==Pt){switch(Pt){case Kf:s.depthFunc(s.NEVER);break;case Zf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case qr:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case Qf:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Dt!==Pt&&(s.clearDepth(Pt),Dt=Pt)},reset:function(){I=!1,ht=null,mt=null,Dt=null}}}function o(){let I=!1,ht=null,mt=null,Dt=null,Pt=null,jt=null,Kt=null,he=null,pe=null;return{setTest:function(Qt){I||(Qt?Nt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!I&&(s.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,ge,Tn){(mt!==Qt||Dt!==ge||Pt!==Tn)&&(s.stencilFunc(Qt,ge,Tn),mt=Qt,Dt=ge,Pt=Tn)},setOp:function(Qt,ge,Tn){(jt!==Qt||Kt!==ge||he!==Tn)&&(s.stencilOp(Qt,ge,Tn),jt=Qt,Kt=ge,he=Tn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){pe!==Qt&&(s.clearStencil(Qt),pe=Qt)},reset:function(){I=!1,ht=null,mt=null,Dt=null,Pt=null,jt=null,Kt=null,he=null,pe=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,M=null,b=null,w=null,S=null,D=null,y=new Bt(0,0,0),T=0,N=!1,z=null,W=null,R=null,O=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=K>=2);let et=null,ot={};const q=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),ft=new se().fromArray(q),Tt=new se().fromArray(Q);function Mt(I,ht,mt,Dt){const Pt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(I,jt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<mt;Kt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(ht+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return jt}const Lt={};Lt[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(s.DEPTH_TEST),l.setFunc(qr),_t(!1),A(Ul),Nt(s.CULL_FACE),j(Vn);function Nt(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Et(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function It(I,ht){return d[I]!==ht?(s.bindFramebuffer(I,ht),d[I]=ht,n&&(I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function U(I,ht){let mt=_,Dt=!1;if(I)if(mt=g.get(ht),mt===void 0&&(mt=[],g.set(ht,mt)),I.isWebGLMultipleRenderTargets){const Pt=I.texture;if(mt.length!==Pt.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Kt=Pt.length;jt<Kt;jt++)mt[jt]=s.COLOR_ATTACHMENT0+jt;mt.length=Pt.length,Dt=!0}}else mt[0]!==s.COLOR_ATTACHMENT0&&(mt[0]=s.COLOR_ATTACHMENT0,Dt=!0);else mt[0]!==s.BACK&&(mt[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ut(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Z={[wi]:s.FUNC_ADD,[If]:s.FUNC_SUBTRACT,[Nf]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Ol]=s.MIN,Z[Fl]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Z[Ol]=I.MIN_EXT,Z[Fl]=I.MAX_EXT)}const at={[Of]:s.ZERO,[Ff]:s.ONE,[zf]:s.SRC_COLOR,[xa]:s.SRC_ALPHA,[Wf]:s.SRC_ALPHA_SATURATE,[Hf]:s.DST_COLOR,[Gf]:s.DST_ALPHA,[Bf]:s.ONE_MINUS_SRC_COLOR,[Ma]:s.ONE_MINUS_SRC_ALPHA,[Vf]:s.ONE_MINUS_DST_COLOR,[kf]:s.ONE_MINUS_DST_ALPHA,[Xf]:s.CONSTANT_COLOR,[Yf]:s.ONE_MINUS_CONSTANT_COLOR,[qf]:s.CONSTANT_ALPHA,[jf]:s.ONE_MINUS_CONSTANT_ALPHA};function j(I,ht,mt,Dt,Pt,jt,Kt,he,pe,Qt){if(I===Vn){p===!0&&(Et(s.BLEND),p=!1);return}if(p===!1&&(Nt(s.BLEND),p=!0),I!==Uf){if(I!==x||Qt!==N){if((v!==wi||w!==wi)&&(s.blendEquation(s.FUNC_ADD),v=wi,w=wi),Qt)switch(I){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yr:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,S=null,D=null,y.set(0,0,0),T=0,x=I,N=Qt}return}Pt=Pt||ht,jt=jt||mt,Kt=Kt||Dt,(ht!==v||Pt!==w)&&(s.blendEquationSeparate(Z[ht],Z[Pt]),v=ht,w=Pt),(mt!==M||Dt!==b||jt!==S||Kt!==D)&&(s.blendFuncSeparate(at[mt],at[Dt],at[jt],at[Kt]),M=mt,b=Dt,S=jt,D=Kt),(he.equals(y)===!1||pe!==T)&&(s.blendColor(he.r,he.g,he.b,pe),y.copy(he),T=pe),x=I,N=!1}function wt(I,ht){I.side===kn?Et(s.CULL_FACE):Nt(s.CULL_FACE);let mt=I.side===Ve;ht&&(mt=!mt),_t(mt),I.blending===Ri&&I.transparent===!1?j(Vn):j(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Dt=I.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Nt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){z!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),z=I)}function A(I){I!==Lf?(Nt(s.CULL_FACE),I!==W&&(I===Ul?s.cullFace(s.BACK):I===Df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),W=I}function E(I){I!==R&&(X&&s.lineWidth(I),R=I)}function B(I,ht,mt){I?(Nt(s.POLYGON_OFFSET_FILL),(O!==ht||F!==mt)&&(s.polygonOffset(ht,mt),O=ht,F=mt)):Et(s.POLYGON_OFFSET_FILL)}function st(I){I?Nt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function nt(I){I===void 0&&(I=s.TEXTURE0+k-1),et!==I&&(s.activeTexture(I),et=I)}function tt(I,ht,mt){mt===void 0&&(et===null?mt=s.TEXTURE0+k-1:mt=et);let Dt=ot[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ot[mt]=Dt),(Dt.type!==I||Dt.texture!==ht)&&(et!==mt&&(s.activeTexture(mt),et=mt),s.bindTexture(I,ht||Lt[I]),Dt.type=I,Dt.texture=ht)}function St(){const I=ot[et];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){ft.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function lt(I){Tt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Tt.copy(I))}function bt(I,ht){let mt=u.get(ht);mt===void 0&&(mt=new WeakMap,u.set(ht,mt));let Dt=mt.get(I);Dt===void 0&&(Dt=s.getUniformBlockIndex(ht,I.name),mt.set(I,Dt))}function yt(I,ht){const Dt=u.get(ht).get(I);h.get(ht)!==Dt&&(s.uniformBlockBinding(ht,Dt,I.__bindingPointIndex),h.set(ht,Dt))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},et=null,ot={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,M=null,b=null,w=null,S=null,D=null,y=new Bt(0,0,0),T=0,N=!1,z=null,W=null,R=null,O=null,F=null,ft.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:Et,bindFramebuffer:It,drawBuffers:U,useProgram:ut,setBlending:j,setMaterial:wt,setFlipSided:_t,setCullFace:A,setLineWidth:E,setPolygonOffset:B,setScissorTest:st,activeTexture:nt,bindTexture:tt,unbindTexture:St,compressedTexImage2D:pt,compressedTexImage3D:vt,texImage2D:Ct,texImage3D:gt,updateUBOMapping:bt,uniformBlockBinding:yt,texStorage2D:Wt,texStorage3D:Ot,texSubImage2D:Rt,texSubImage3D:Gt,compressedTexSubImage2D:it,compressedTexSubImage3D:$t,scissor:P,viewport:lt,reset:rt}}function A0(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return d?new OffscreenCanvas(A,E):Qr("canvas")}function _(A,E,B,st){let nt=1;if((A.width>st||A.height>st)&&(nt=st/Math.max(A.width,A.height)),nt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const tt=E?ba:Math.floor,St=tt(nt*A.width),pt=tt(nt*A.height);u===void 0&&(u=g(St,pt));const vt=B?g(St,pt):u;return vt.width=St,vt.height=pt,vt.getContext("2d").drawImage(A,0,0,St,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+St+"x"+pt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return dc(A.width)&&dc(A.height)}function p(A){return a?!1:A.wrapS!==yn||A.wrapT!==yn||A.minFilter!==ke&&A.minFilter!==dn}function x(A,E){return A.generateMipmaps&&E&&A.minFilter!==ke&&A.minFilter!==dn}function v(A){s.generateMipmap(A)}function M(A,E,B,st,nt=!1){if(a===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=E;if(E===s.RED&&(B===s.FLOAT&&(tt=s.R32F),B===s.HALF_FLOAT&&(tt=s.R16F),B===s.UNSIGNED_BYTE&&(tt=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(tt=s.R8UI),B===s.UNSIGNED_SHORT&&(tt=s.R16UI),B===s.UNSIGNED_INT&&(tt=s.R32UI),B===s.BYTE&&(tt=s.R8I),B===s.SHORT&&(tt=s.R16I),B===s.INT&&(tt=s.R32I)),E===s.RG&&(B===s.FLOAT&&(tt=s.RG32F),B===s.HALF_FLOAT&&(tt=s.RG16F),B===s.UNSIGNED_BYTE&&(tt=s.RG8)),E===s.RGBA){const St=nt?jr:ee.getTransfer(st);B===s.FLOAT&&(tt=s.RGBA32F),B===s.HALF_FLOAT&&(tt=s.RGBA16F),B===s.UNSIGNED_BYTE&&(tt=St===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(A,E,B){return x(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===ke||A===zl||A===Ao?s.NEAREST:s.LINEAR}function S(A){const E=A.target;E.removeEventListener("dispose",S),y(E),E.isVideoTexture&&h.delete(E)}function D(A){const E=A.target;E.removeEventListener("dispose",D),N(E)}function y(A){const E=n.get(A);if(E.__webglInit===void 0)return;const B=A.source,st=f.get(B);if(st){const nt=st[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(A),Object.keys(st).length===0&&f.delete(B)}n.remove(A)}function T(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const B=A.source,st=f.get(B);delete st[E.__cacheKey],o.memory.textures--}function N(A){const E=A.texture,B=n.get(A),st=n.get(E);if(st.__webglTexture!==void 0&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(B.__webglFramebuffer[nt]))for(let tt=0;tt<B.__webglFramebuffer[nt].length;tt++)s.deleteFramebuffer(B.__webglFramebuffer[nt][tt]);else s.deleteFramebuffer(B.__webglFramebuffer[nt]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[nt])}else{if(Array.isArray(B.__webglFramebuffer))for(let nt=0;nt<B.__webglFramebuffer.length;nt++)s.deleteFramebuffer(B.__webglFramebuffer[nt]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let nt=0;nt<B.__webglColorRenderbuffer.length;nt++)B.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[nt]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,tt=E.length;nt<tt;nt++){const St=n.get(E[nt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(E[nt])}n.remove(E),n.remove(A)}let z=0;function W(){z=0}function R(){const A=z;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),z+=1,A}function O(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function F(A,E){const B=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,A,E);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}function k(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ft(B,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)}function X(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ft(B,A,E);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)}function K(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Tt(B,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)}const J={[Ea]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Ta]:s.MIRRORED_REPEAT},et={[ke]:s.NEAREST,[zl]:s.NEAREST_MIPMAP_NEAREST,[Ao]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[cd]:s.LINEAR_MIPMAP_NEAREST,[Ks]:s.LINEAR_MIPMAP_LINEAR},ot={[yd]:s.NEVER,[Ad]:s.ALWAYS,[Sd]:s.LESS,[jh]:s.LEQUAL,[Ed]:s.EQUAL,[bd]:s.GEQUAL,[Td]:s.GREATER,[wd]:s.NOTEQUAL};function q(A,E,B){if(B?(s.texParameteri(A,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,J[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,et[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,et[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==yn||E.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,w(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==ke&&E.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ot[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ke||E.minFilter!==Ao&&E.minFilter!==Ks||E.type===ni&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Wn&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Q(A,E){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",S));const st=E.source;let nt=f.get(st);nt===void 0&&(nt={},f.set(st,nt));const tt=O(E);if(tt!==A.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[tt].usedTimes++;const St=nt[A.__cacheKey];St!==void 0&&(nt[A.__cacheKey].usedTimes--,St.usedTimes===0&&T(E)),A.__cacheKey=tt,A.__webglTexture=nt[tt].texture}return B}function ft(A,E,B){let st=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=s.TEXTURE_3D);const nt=Q(A,E),tt=E.source;e.bindTexture(st,A.__webglTexture,s.TEXTURE0+B);const St=n.get(tt);if(tt.version!==St.__version||nt===!0){e.activeTexture(s.TEXTURE0+B);const pt=ee.getPrimaries(ee.workingColorSpace),vt=E.colorSpace===pn?null:ee.getPrimaries(E.colorSpace),Rt=E.colorSpace===pn||pt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Gt=p(E)&&m(E.image)===!1;let it=_(E.image,Gt,!1,i.maxTextureSize);it=_t(E,it);const $t=m(it)||a,Wt=r.convert(E.format,E.colorSpace);let Ot=r.convert(E.type),Ct=M(E.internalFormat,Wt,Ot,E.colorSpace,E.isVideoTexture);q(st,E,$t);let gt;const P=E.mipmaps,lt=a&&E.isVideoTexture!==!0&&Ct!==Xh,bt=St.__version===void 0||nt===!0,yt=b(E,it,$t);if(E.isDepthTexture)Ct=s.DEPTH_COMPONENT,a?E.type===ni?Ct=s.DEPTH_COMPONENT32F:E.type===ei?Ct=s.DEPTH_COMPONENT24:E.type===Pi?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:E.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Li&&Ct===s.DEPTH_COMPONENT&&E.type!==ja&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,Ot=r.convert(E.type)),E.format===vs&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,E.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Pi,Ot=r.convert(E.type))),bt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ct,it.width,it.height,0,Wt,Ot,null));else if(E.isDataTexture)if(P.length>0&&$t){lt&&bt&&e.texStorage2D(s.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let rt=0,I=P.length;rt<I;rt++)gt=P[rt],lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,Wt,Ot,gt.data):e.texImage2D(s.TEXTURE_2D,rt,Ct,gt.width,gt.height,0,Wt,Ot,gt.data);E.generateMipmaps=!1}else lt?(bt&&e.texStorage2D(s.TEXTURE_2D,yt,Ct,it.width,it.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,Wt,Ot,it.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,it.width,it.height,0,Wt,Ot,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Ct,P[0].width,P[0].height,it.depth);for(let rt=0,I=P.length;rt<I;rt++)gt=P[rt],E.format!==Sn?Wt!==null?lt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,it.depth,Wt,gt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Ct,gt.width,gt.height,it.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,it.depth,Wt,Ot,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Ct,gt.width,gt.height,it.depth,0,Wt,Ot,gt.data)}else{lt&&bt&&e.texStorage2D(s.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let rt=0,I=P.length;rt<I;rt++)gt=P[rt],E.format!==Sn?Wt!==null?lt?e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,Wt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,Wt,Ot,gt.data):e.texImage2D(s.TEXTURE_2D,rt,Ct,gt.width,gt.height,0,Wt,Ot,gt.data)}else if(E.isDataArrayTexture)lt?(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Ct,it.width,it.height,it.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Wt,Ot,it.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,Wt,Ot,it.data);else if(E.isData3DTexture)lt?(bt&&e.texStorage3D(s.TEXTURE_3D,yt,Ct,it.width,it.height,it.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Wt,Ot,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,Wt,Ot,it.data);else if(E.isFramebufferTexture){if(bt)if(lt)e.texStorage2D(s.TEXTURE_2D,yt,Ct,it.width,it.height);else{let rt=it.width,I=it.height;for(let ht=0;ht<yt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Ct,rt,I,0,Wt,Ot,null),rt>>=1,I>>=1}}else if(P.length>0&&$t){lt&&bt&&e.texStorage2D(s.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let rt=0,I=P.length;rt<I;rt++)gt=P[rt],lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Wt,Ot,gt):e.texImage2D(s.TEXTURE_2D,rt,Ct,Wt,Ot,gt);E.generateMipmaps=!1}else lt?(bt&&e.texStorage2D(s.TEXTURE_2D,yt,Ct,it.width,it.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Ot,it)):e.texImage2D(s.TEXTURE_2D,0,Ct,Wt,Ot,it);x(E,$t)&&v(st),St.__version=tt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Tt(A,E,B){if(E.image.length!==6)return;const st=Q(A,E),nt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const tt=n.get(nt);if(nt.version!==tt.__version||st===!0){e.activeTexture(s.TEXTURE0+B);const St=ee.getPrimaries(ee.workingColorSpace),pt=E.colorSpace===pn?null:ee.getPrimaries(E.colorSpace),vt=E.colorSpace===pn||St===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Gt=E.image[0]&&E.image[0].isDataTexture,it=[];for(let rt=0;rt<6;rt++)!Rt&&!Gt?it[rt]=_(E.image[rt],!1,!0,i.maxCubemapSize):it[rt]=Gt?E.image[rt].image:E.image[rt],it[rt]=_t(E,it[rt]);const $t=it[0],Wt=m($t)||a,Ot=r.convert(E.format,E.colorSpace),Ct=r.convert(E.type),gt=M(E.internalFormat,Ot,Ct,E.colorSpace),P=a&&E.isVideoTexture!==!0,lt=tt.__version===void 0||st===!0;let bt=b(E,$t,Wt);q(s.TEXTURE_CUBE_MAP,E,Wt);let yt;if(Rt){P&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,gt,$t.width,$t.height);for(let rt=0;rt<6;rt++){yt=it[rt].mipmaps;for(let I=0;I<yt.length;I++){const ht=yt[I];E.format!==Sn?Ot!==null?P?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ht.width,ht.height,Ot,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ht.width,ht.height,Ot,Ct,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,gt,ht.width,ht.height,0,Ot,Ct,ht.data)}}}else{yt=E.mipmaps,P&&lt&&(yt.length>0&&bt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,gt,it[0].width,it[0].height));for(let rt=0;rt<6;rt++)if(Gt){P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,it[rt].width,it[rt].height,Ot,Ct,it[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,gt,it[rt].width,it[rt].height,0,Ot,Ct,it[rt].data);for(let I=0;I<yt.length;I++){const mt=yt[I].image[rt].image;P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,mt.width,mt.height,Ot,Ct,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,gt,mt.width,mt.height,0,Ot,Ct,mt.data)}}else{P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Ct,it[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,gt,Ot,Ct,it[rt]);for(let I=0;I<yt.length;I++){const ht=yt[I];P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,Ot,Ct,ht.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,gt,Ot,Ct,ht.image[rt])}}}x(E,Wt)&&v(s.TEXTURE_CUBE_MAP),tt.__version=nt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Mt(A,E,B,st,nt,tt){const St=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),vt=M(B.internalFormat,St,pt,B.colorSpace);if(!n.get(E).__hasExternalTextures){const Gt=Math.max(1,E.width>>tt),it=Math.max(1,E.height>>tt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,vt,Gt,it,E.depth,0,St,pt,null):e.texImage2D(nt,tt,vt,Gt,it,0,St,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),j(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,nt,n.get(B).__webglTexture,0,at(E)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,nt,n.get(B).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(A,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let st=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||j(E)){const nt=E.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ni?st=s.DEPTH_COMPONENT32F:nt.type===ei&&(st=s.DEPTH_COMPONENT24));const tt=at(E);j(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,st,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,st,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,st,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const st=at(E);B&&j(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,E.width,E.height):j(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const st=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let nt=0;nt<st.length;nt++){const tt=st[nt],St=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),vt=M(tt.internalFormat,St,pt,tt.colorSpace),Rt=at(E);B&&j(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,vt,E.width,E.height):j(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,vt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,vt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const st=n.get(E.depthTexture).__webglTexture,nt=at(E);if(E.depthTexture.format===Li)j(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(E.depthTexture.format===vs)j(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Et(A){const E=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(E.__webglFramebuffer,A)}else if(B){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]=s.createRenderbuffer(),Lt(E.__webglDepthbuffer[st],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Lt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(A,E,B){const st=n.get(A);E!==void 0&&Mt(st.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Et(A)}function U(A){const E=A.texture,B=n.get(A),st=n.get(E);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=E.version,o.memory.textures++);const nt=A.isWebGLCubeRenderTarget===!0,tt=A.isWebGLMultipleRenderTargets===!0,St=m(A)||a;if(nt){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let vt=0;vt<E.mipmaps.length;vt++)B.__webglFramebuffer[pt][vt]=s.createFramebuffer()}else B.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<E.mipmaps.length;pt++)B.__webglFramebuffer[pt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){const pt=A.texture;for(let vt=0,Rt=pt.length;vt<Rt;vt++){const Gt=n.get(pt[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&j(A)===!1){const pt=tt?E:[E];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let vt=0;vt<pt.length;vt++){const Rt=pt[vt];B.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[vt]);const Gt=r.convert(Rt.format,Rt.colorSpace),it=r.convert(Rt.type),$t=M(Rt.internalFormat,Gt,it,Rt.colorSpace,A.isXRRenderTarget===!0),Wt=at(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,$t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,B.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),q(s.TEXTURE_CUBE_MAP,E,St);for(let pt=0;pt<6;pt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Mt(B.__webglFramebuffer[pt][vt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else Mt(B.__webglFramebuffer[pt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(E,St)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const pt=A.texture;for(let vt=0,Rt=pt.length;vt<Rt;vt++){const Gt=pt[vt],it=n.get(Gt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),q(s.TEXTURE_2D,Gt,St),Mt(B.__webglFramebuffer,A,Gt,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),x(Gt,St)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,st.__webglTexture),q(pt,E,St),a&&E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Mt(B.__webglFramebuffer[vt],A,E,s.COLOR_ATTACHMENT0,pt,vt);else Mt(B.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,pt,0);x(E,St)&&v(pt),e.unbindTexture()}A.depthBuffer&&Et(A)}function ut(A){const E=m(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0,nt=B.length;st<nt;st++){const tt=B[st];if(x(tt,E)){const St=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pt=n.get(tt).__webglTexture;e.bindTexture(St,pt),v(St),e.unbindTexture()}}}function Z(A){if(a&&A.samples>0&&j(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,st=A.height;let nt=s.COLOR_BUFFER_BIT;const tt=[],St=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(A),vt=A.isWebGLMultipleRenderTargets===!0;if(vt)for(let Rt=0;Rt<E.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){tt.push(s.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&tt.push(St);const Gt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),vt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Rt]),Gt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),vt){const it=n.get(E[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,B,st,0,0,B,st,nt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<E.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Rt]);const Gt=n.get(E[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function at(A){return Math.min(i.maxSamples,A.samples)}function j(A){const E=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function _t(A,E){const B=A.colorSpace,st=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===wa||B!==Xn&&B!==pn&&(ee.getTransfer(B)===ie?a===!1?t.has("EXT_sRGB")===!0&&st===Sn?(A.format=wa,A.minFilter=dn,A.generateMipmaps=!1):E=Zh.sRGBToLinear(E):(st!==Sn||nt!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=R,this.resetTextureUnits=W,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=j}function C0(s,t,e){const n=e.isWebGL2;function i(r,o=pn){let a;const l=ee.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hd)return s.BYTE;if(r===ud)return s.SHORT;if(r===ja)return s.UNSIGNED_SHORT;if(r===Bh)return s.INT;if(r===ei)return s.UNSIGNED_INT;if(r===ni)return s.FLOAT;if(r===Wn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fd)return s.ALPHA;if(r===Sn)return s.RGBA;if(r===dd)return s.LUMINANCE;if(r===pd)return s.LUMINANCE_ALPHA;if(r===Li)return s.DEPTH_COMPONENT;if(r===vs)return s.DEPTH_STENCIL;if(r===wa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===md)return s.RED;if(r===Hh)return s.RED_INTEGER;if(r===_d)return s.RG;if(r===Vh)return s.RG_INTEGER;if(r===Wh)return s.RGBA_INTEGER;if(r===Co||r===Ro||r===Po||r===Lo)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Po)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bl||r===Gl||r===kl||r===Hl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vl||r===Wl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vl)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===Yl||r===ql||r===jl||r===Kl||r===Zl||r===Jl||r===$l||r===Ql||r===tc||r===ec||r===nc||r===ic||r===sc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ql)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$l)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ql)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tc)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ec)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sc)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Do||r===rc||r===oc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Do)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gd||r===ac||r===lc||r===cc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Do)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ac)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class R0 extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class L0 extends Gi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const x=[],v=[],M=new $;let b=null;const w=new Ye;w.layers.enable(1),w.viewport=new se;const S=new Ye;S.layers.enable(2),S.viewport=new se;const D=[w,S],y=new R0;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new na,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new na,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new na,x[q]=Q),Q.getHandSpace()};function z(q){const Q=v.indexOf(q.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||o),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",R);for(let q=0;q<x.length;q++){const Q=v[q];Q!==null&&(v[q]=null,x[q].disconnect(Q))}T=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new En(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ft=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?vs:Li,ft=_.stencil?Pi:ei);const Mt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new En(f.textureWidth,f.textureHeight,{format:Sn,type:ai,depthTexture:new ou(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Lt=t.properties.get(p);Lt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(q){for(let Q=0;Q<q.removed.length;Q++){const ft=q.removed[Q],Tt=v.indexOf(ft);Tt>=0&&(v[Tt]=null,x[Tt].disconnect(ft))}for(let Q=0;Q<q.added.length;Q++){const ft=q.added[Q];let Tt=v.indexOf(ft);if(Tt===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(ft),Tt=Lt;break}else if(v[Lt]===null){v[Lt]=ft,Tt=Lt;break}if(Tt===-1)break}const Mt=x[Tt];Mt&&Mt.connect(ft)}}const O=new L,F=new L;function k(q,Q,ft){O.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(ft.matrixWorld);const Tt=O.distanceTo(F),Mt=Q.projectionMatrix.elements,Lt=ft.projectionMatrix.elements,Nt=Mt[14]/(Mt[10]-1),Et=Mt[14]/(Mt[10]+1),It=(Mt[9]+1)/Mt[5],U=(Mt[9]-1)/Mt[5],ut=(Mt[8]-1)/Mt[0],Z=(Lt[8]+1)/Lt[0],at=Nt*ut,j=Nt*Z,wt=Tt/(-ut+Z),_t=wt*-ut;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_t),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Nt+wt,E=Et+wt,B=at-_t,st=j+(Tt-_t),nt=It*Et/E*A,tt=U*Et/E*A;q.projectionMatrix.makePerspective(B,st,nt,tt,A,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function X(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;y.near=S.near=w.near=q.near,y.far=S.far=w.far=q.far,(T!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);const Q=q.parent,ft=y.cameras;X(y,Q);for(let Tt=0;Tt<ft.length;Tt++)X(ft[Tt],Q);ft.length===2?k(y,w,S):y.projectionMatrix.copy(w.projectionMatrix),K(q,y,Q)};function K(q,Q,ft){ft===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$r*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let J=null;function et(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const ft=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Tt=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,Tt=!0);for(let Mt=0;Mt<ft.length;Mt++){const Lt=ft[Mt];let Nt=null;if(d!==null)Nt=d.getViewport(Lt);else{const It=u.getViewSubImage(f,Lt);Nt=It.viewport,Mt===0&&(t.setRenderTargetTextures(p,It.colorTexture,f.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let Et=D[Mt];Et===void 0&&(Et=new Ye,Et.layers.enable(Mt),Et.viewport=new se,D[Mt]=Et),Et.matrix.fromArray(Lt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Lt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Mt===0&&(y.matrix.copy(Et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Tt===!0&&y.cameras.push(Et)}}for(let ft=0;ft<x.length;ft++){const Tt=v[ft],Mt=x[ft];Tt!==null&&Mt!==void 0&&Mt.update(Tt,Q,c||o)}J&&J(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ot=new ru;ot.setAnimationLoop(et),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}}function D0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U0(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(x,b);const w=t.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const M=s.createBuffer(),b=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,S=M.length;w<S;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,T=D.length;y<T;y++){const N=D[y];if(d(N,w,y,b)===!0){const z=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let R=0;for(let O=0;O<W.length;O++){const F=W[O],k=_(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,z+R,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,R),R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,M,b){const w=x.value,S=v+"_"+M;if(b[S]===void 0)return typeof w=="number"||typeof w=="boolean"?b[S]=w:b[S]=w.clone(),!0;{const D=b[S];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return b[S]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){const v=x.uniforms;let M=0;const b=16;for(let S=0,D=v.length;S<D;S++){const y=Array.isArray(v[S])?v[S]:[v[S]];for(let T=0,N=y.length;T<N;T++){const z=y[T],W=Array.isArray(z.value)?z.value:[z.value];for(let R=0,O=W.length;R<O;R++){const F=W[R],k=_(F),X=M%b;X!==0&&b-X<k.boundary&&(M+=b-X),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=k.storage}}}const w=M%b;return w>0&&(M+=b-w),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class fu{constructor(t={}){const{canvas:e=Pd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let M=!1,b=0,w=0,S=null,D=-1,y=null;const T=new se,N=new se;let z=null;const W=new Bt(0);let R=0,O=e.width,F=e.height,k=1,X=null,K=null;const J=new se(0,0,O,F),et=new se(0,0,O,F);let ot=!1;const q=new Ja;let Q=!1,ft=!1,Tt=null;const Mt=new de,Lt=new $,Nt=new L,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return S===null?k:1}let U=n;function ut(C,G){for(let V=0;V<C.length;V++){const Y=C[V],H=e.getContext(Y,G);if(H!==null)return H}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),U=ut(G,C),U===null)throw ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,at,j,wt,_t,A,E,B,st,nt,tt,St,pt,vt,Rt,Gt,it,$t,Wt,Ot,Ct,gt,P,lt;function bt(){Z=new V_(U),at=new F_(U,Z,t),Z.init(at),gt=new C0(U,Z,at),j=new b0(U,Z,at),wt=new Y_(U),_t=new f0,A=new A0(U,Z,j,_t,at,gt,wt),E=new B_(v),B=new H_(v),st=new tp(U,at),P=new N_(U,Z,st,at),nt=new W_(U,st,wt,P),tt=new Z_(U,nt,st,wt),Wt=new K_(U,at,A),Gt=new z_(_t),St=new u0(v,E,B,Z,at,P,Gt),pt=new D0(v,_t),vt=new p0,Rt=new M0(Z,at),$t=new I_(v,E,B,j,tt,f,l),it=new w0(v,tt,at),lt=new U0(U,wt,at,j),Ot=new O_(U,Z,wt,at),Ct=new X_(U,Z,wt,at),wt.programs=St.programs,v.capabilities=at,v.extensions=Z,v.properties=_t,v.renderLists=vt,v.shadowMap=it,v.state=j,v.info=wt}bt();const yt=new L0(v,U);this.xr=yt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(O,F,!1))},this.getSize=function(C){return C.set(O,F)},this.setSize=function(C,G,V=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,F=G,e.width=Math.floor(C*k),e.height=Math.floor(G*k),V===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(O*k,F*k).floor()},this.setDrawingBufferSize=function(C,G,V){O=C,F=G,k=V,e.width=Math.floor(C*V),e.height=Math.floor(G*V),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,G,V,Y){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,G,V,Y),j.viewport(T.copy(J).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,G,V,Y){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,G,V,Y),j.scissor(N.copy(et).multiplyScalar(k).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){j.setScissorTest(ot=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,G=!0,V=!0){let Y=0;if(C){let H=!1;if(S!==null){const xt=S.texture.format;H=xt===Wh||xt===Vh||xt===Hh}if(H){const xt=S.texture.type,At=xt===ai||xt===ei||xt===ja||xt===Pi||xt===Gh||xt===kh,Ut=$t.getClearColor(),Ft=$t.getClearAlpha(),Xt=Ut.r,kt=Ut.g,Ht=Ut.b;At?(d[0]=Xt,d[1]=kt,d[2]=Ht,d[3]=Ft,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=Xt,g[1]=kt,g[2]=Ht,g[3]=Ft,U.clearBufferiv(U.COLOR,0,g))}else Y|=U.COLOR_BUFFER_BIT}G&&(Y|=U.DEPTH_BUFFER_BIT),V&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Rt.dispose(),_t.dispose(),E.dispose(),B.dispose(),tt.dispose(),P.dispose(),lt.dispose(),St.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",pe),yt.removeEventListener("sessionend",Qt),Tt&&(Tt.dispose(),Tt=null),ge.stop()};function rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=wt.autoReset,G=it.enabled,V=it.autoUpdate,Y=it.needsUpdate,H=it.type;bt(),wt.autoReset=C,it.enabled=G,it.autoUpdate=V,it.needsUpdate=Y,it.type=H}function ht(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){const G=C.target;G.removeEventListener("dispose",mt),Dt(G)}function Dt(C){Pt(C),_t.remove(C)}function Pt(C){const G=_t.get(C).programs;G!==void 0&&(G.forEach(function(V){St.releaseProgram(V)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,V,Y,H,xt){G===null&&(G=Et);const At=H.isMesh&&H.matrixWorld.determinant()<0,Ut=Af(C,G,V,Y,H);j.setMaterial(Y,At);let Ft=V.index,Xt=1;if(Y.wireframe===!0){if(Ft=nt.getWireframeAttribute(V),Ft===void 0)return;Xt=2}const kt=V.drawRange,Ht=V.attributes.position;let me=kt.start*Xt,tn=(kt.start+kt.count)*Xt;xt!==null&&(me=Math.max(me,xt.start*Xt),tn=Math.min(tn,(xt.start+xt.count)*Xt)),Ft!==null?(me=Math.max(me,0),tn=Math.min(tn,Ft.count)):Ht!=null&&(me=Math.max(me,0),tn=Math.min(tn,Ht.count));const we=tn-me;if(we<0||we===1/0)return;P.setup(H,Y,Ut,V,Ft);let Dn,oe=Ot;if(Ft!==null&&(Dn=st.get(Ft),oe=Ct,oe.setIndex(Dn)),H.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*It()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(H.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),j.setLineWidth(Yt*It()),H.isLineSegments?oe.setMode(U.LINES):H.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else H.isPoints?oe.setMode(U.POINTS):H.isSprite&&oe.setMode(U.TRIANGLES);if(H.isBatchedMesh)oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)oe.renderInstances(me,we,H.count);else if(V.isInstancedBufferGeometry){const Yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Eo=Math.min(V.instanceCount,Yt);oe.renderInstances(me,we,Eo)}else oe.render(me,we)};function jt(C,G,V){C.transparent===!0&&C.side===kn&&C.forceSinglePass===!1?(C.side=Ve,C.needsUpdate=!0,ur(C,G,V),C.side=ui,C.needsUpdate=!0,ur(C,G,V),C.side=kn):ur(C,G,V)}this.compile=function(C,G,V=null){V===null&&(V=C),m=Rt.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),C!==V&&C.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);const Y=new Set;return C.traverse(function(H){const xt=H.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const Ut=xt[At];jt(Ut,V,H),Y.add(Ut)}else jt(xt,V,H),Y.add(xt)}),x.pop(),m=null,Y},this.compileAsync=function(C,G,V=null){const Y=this.compile(C,G,V);return new Promise(H=>{function xt(){if(Y.forEach(function(At){_t.get(At).currentProgram.isReady()&&Y.delete(At)}),Y.size===0){H(C);return}setTimeout(xt,10)}Z.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Kt=null;function he(C){Kt&&Kt(C)}function pe(){ge.stop()}function Qt(){ge.start()}const ge=new ru;ge.setAnimationLoop(he),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(C){Kt=C,yt.setAnimationLoop(C),C===null?ge.stop():ge.start()},yt.addEventListener("sessionstart",pe),yt.addEventListener("sessionend",Qt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(G),G=yt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,S),m=Rt.get(C,x.length),m.init(),x.push(m),Mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(Mt),ft=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,ft),_=vt.get(C,p.length),_.init(),p.push(_),Tn(C,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,K),this.info.render.frame++,Q===!0&&Gt.beginShadows();const V=m.state.shadowsArray;if(it.render(V,C,G),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(_,C),m.setupLights(v._useLegacyLights),G.isArrayCamera){const Y=G.cameras;for(let H=0,xt=Y.length;H<xt;H++){const At=Y[H];Al(_,C,At,At.viewport)}}else Al(_,C,G);S!==null&&(A.updateMultisampleRenderTarget(S),A.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(v,C,G),P.resetDefaultState(),D=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Tn(C,G,V,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){Y&&Nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const At=tt.update(C),Ut=C.material;Ut.visible&&_.push(C,At,Ut,V,Nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const At=tt.update(C),Ut=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Nt.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Nt.copy(At.boundingSphere.center)),Nt.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ut)){const Ft=At.groups;for(let Xt=0,kt=Ft.length;Xt<kt;Xt++){const Ht=Ft[Xt],me=Ut[Ht.materialIndex];me&&me.visible&&_.push(C,At,me,V,Nt.z,Ht)}}else Ut.visible&&_.push(C,At,Ut,V,Nt.z,null)}}const xt=C.children;for(let At=0,Ut=xt.length;At<Ut;At++)Tn(xt[At],G,V,Y)}function Al(C,G,V,Y){const H=C.opaque,xt=C.transmissive,At=C.transparent;m.setupLightsView(V),Q===!0&&Gt.setGlobalState(v.clippingPlanes,V),xt.length>0&&bf(H,xt,G,V),Y&&j.viewport(T.copy(Y)),H.length>0&&hr(H,G,V),xt.length>0&&hr(xt,G,V),At.length>0&&hr(At,G,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function bf(C,G,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const xt=at.isWebGL2;Tt===null&&(Tt=new En(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Wn:ai,minFilter:Ks,samples:xt?4:0})),v.getDrawingBufferSize(Lt),xt?Tt.setSize(Lt.x,Lt.y):Tt.setSize(ba(Lt.x),ba(Lt.y));const At=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(W),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=oi,hr(C,V,Y),A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt);let Ft=!1;for(let Xt=0,kt=G.length;Xt<kt;Xt++){const Ht=G[Xt],me=Ht.object,tn=Ht.geometry,we=Ht.material,Dn=Ht.group;if(we.side===kn&&me.layers.test(Y.layers)){const oe=we.side;we.side=Ve,we.needsUpdate=!0,Cl(me,V,Y,tn,we,Dn),we.side=oe,we.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt)),v.setRenderTarget(At),v.setClearColor(W,R),v.toneMapping=Ut}function hr(C,G,V){const Y=G.isScene===!0?G.overrideMaterial:null;for(let H=0,xt=C.length;H<xt;H++){const At=C[H],Ut=At.object,Ft=At.geometry,Xt=Y===null?At.material:Y,kt=At.group;Ut.layers.test(V.layers)&&Cl(Ut,G,V,Ft,Xt,kt)}}function Cl(C,G,V,Y,H,xt){C.onBeforeRender(v,G,V,Y,H,xt),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,G,V,Y,C,xt),H.transparent===!0&&H.side===kn&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,v.renderBufferDirect(V,G,Y,H,C,xt),H.side=ui,H.needsUpdate=!0,v.renderBufferDirect(V,G,Y,H,C,xt),H.side=kn):v.renderBufferDirect(V,G,Y,H,C,xt),C.onAfterRender(v,G,V,Y,H,xt)}function ur(C,G,V){G.isScene!==!0&&(G=Et);const Y=_t.get(C),H=m.state.lights,xt=m.state.shadowsArray,At=H.state.version,Ut=St.getParameters(C,H.state,xt,G,V),Ft=St.getProgramCacheKey(Ut);let Xt=Y.programs;Y.environment=C.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(C.isMeshStandardMaterial?B:E).get(C.envMap||Y.environment),Xt===void 0&&(C.addEventListener("dispose",mt),Xt=new Map,Y.programs=Xt);let kt=Xt.get(Ft);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===At)return Pl(C,Ut),kt}else Ut.uniforms=St.getUniforms(C),C.onBuild(V,Ut,v),C.onBeforeCompile(Ut,v),kt=St.acquireProgram(Ut,Ft),Xt.set(Ft,kt),Y.uniforms=Ut.uniforms;const Ht=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=Gt.uniform),Pl(C,Ut),Y.needsLights=Rf(C),Y.lightsStateVersion=At,Y.needsLights&&(Ht.ambientLightColor.value=H.state.ambient,Ht.lightProbe.value=H.state.probe,Ht.directionalLights.value=H.state.directional,Ht.directionalLightShadows.value=H.state.directionalShadow,Ht.spotLights.value=H.state.spot,Ht.spotLightShadows.value=H.state.spotShadow,Ht.rectAreaLights.value=H.state.rectArea,Ht.ltc_1.value=H.state.rectAreaLTC1,Ht.ltc_2.value=H.state.rectAreaLTC2,Ht.pointLights.value=H.state.point,Ht.pointLightShadows.value=H.state.pointShadow,Ht.hemisphereLights.value=H.state.hemi,Ht.directionalShadowMap.value=H.state.directionalShadowMap,Ht.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ht.spotShadowMap.value=H.state.spotShadowMap,Ht.spotLightMatrix.value=H.state.spotLightMatrix,Ht.spotLightMap.value=H.state.spotLightMap,Ht.pointShadowMap.value=H.state.pointShadowMap,Ht.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function Rl(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Hr.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Pl(C,G){const V=_t.get(C);V.outputColorSpace=G.outputColorSpace,V.batching=G.batching,V.instancing=G.instancing,V.instancingColor=G.instancingColor,V.skinning=G.skinning,V.morphTargets=G.morphTargets,V.morphNormals=G.morphNormals,V.morphColors=G.morphColors,V.morphTargetsCount=G.morphTargetsCount,V.numClippingPlanes=G.numClippingPlanes,V.numIntersection=G.numClipIntersection,V.vertexAlphas=G.vertexAlphas,V.vertexTangents=G.vertexTangents,V.toneMapping=G.toneMapping}function Af(C,G,V,Y,H){G.isScene!==!0&&(G=Et),A.resetTextureUnits();const xt=G.fog,At=Y.isMeshStandardMaterial?G.environment:null,Ut=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Xn,Ft=(Y.isMeshStandardMaterial?B:E).get(Y.envMap||At),Xt=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,tn=!!V.morphAttributes.color;let we=oi;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(we=v.toneMapping);const Dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=Dn!==void 0?Dn.length:0,Yt=_t.get(Y),Eo=m.state.lights;if(Q===!0&&(ft===!0||C!==y)){const hn=C===y&&Y.id===D;Gt.setState(Y,C,hn)}let ue=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Eo.state.version||Yt.outputColorSpace!==Ut||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||Yt.envMap!==Ft||Y.fog===!0&&Yt.fog!==xt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Gt.numPlanes||Yt.numIntersection!==Gt.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==kt||Yt.morphTargets!==Ht||Yt.morphNormals!==me||Yt.morphColors!==tn||Yt.toneMapping!==we||at.isWebGL2===!0&&Yt.morphTargetsCount!==oe)&&(ue=!0):(ue=!0,Yt.__version=Y.version);let mi=Yt.currentProgram;ue===!0&&(mi=ur(Y,G,H));let Ll=!1,Ps=!1,To=!1;const Ue=mi.getUniforms(),_i=Yt.uniforms;if(j.useProgram(mi.program)&&(Ll=!0,Ps=!0,To=!0),Y.id!==D&&(D=Y.id,Ps=!0),Ll||y!==C){Ue.setValue(U,"projectionMatrix",C.projectionMatrix),Ue.setValue(U,"viewMatrix",C.matrixWorldInverse);const hn=Ue.map.cameraPosition;hn!==void 0&&hn.setValue(U,Nt.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Ue.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ue.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Ps=!0,To=!0)}if(H.isSkinnedMesh){Ue.setOptional(U,H,"bindMatrix"),Ue.setOptional(U,H,"bindMatrixInverse");const hn=H.skeleton;hn&&(at.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Ue.setValue(U,"boneTexture",hn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ue.setOptional(U,H,"batchingTexture"),Ue.setValue(U,"batchingTexture",H._matricesTexture,A));const wo=V.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&at.isWebGL2===!0)&&Wt.update(H,V,mi),(Ps||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,Ue.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_i.envMap.value=Ft,_i.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Ps&&(Ue.setValue(U,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&Cf(_i,To),xt&&Y.fog===!0&&pt.refreshFogUniforms(_i,xt),pt.refreshMaterialUniforms(_i,Y,k,F,Tt),Hr.upload(U,Rl(Yt),_i,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hr.upload(U,Rl(Yt),_i,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ue.setValue(U,"center",H.center),Ue.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ue.setValue(U,"normalMatrix",H.normalMatrix),Ue.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const hn=Y.uniformsGroups;for(let bo=0,Pf=hn.length;bo<Pf;bo++)if(at.isWebGL2){const Dl=hn[bo];lt.update(Dl,mi),lt.bind(Dl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function Cf(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Rf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,G,V){_t.get(C.texture).__webglTexture=G,_t.get(C.depthTexture).__webglTexture=V;const Y=_t.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const V=_t.get(C);V.__webglFramebuffer=G,V.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,V=0){S=C,b=G,w=V;let Y=!0,H=null,xt=!1,At=!1;if(C){const Ft=_t.get(C);Ft.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Ft.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ft.__hasExternalTextures&&A.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const kt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?H=kt[G][V]:H=kt[G],xt=!0):at.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?H=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[V]:H=kt,T.copy(C.viewport),N.copy(C.scissor),z=C.scissorTest}else T.copy(J).multiplyScalar(k).floor(),N.copy(et).multiplyScalar(k).floor(),z=ot;if(j.bindFramebuffer(U.FRAMEBUFFER,H)&&at.drawBuffers&&Y&&j.drawBuffers(C,H),j.viewport(T),j.scissor(N),j.setScissorTest(z),xt){const Ft=_t.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ft.__webglTexture,V)}else if(At){const Ft=_t.get(C.texture),Xt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ft.__webglTexture,V||0,Xt)}D=-1},this.readRenderTargetPixels=function(C,G,V,Y,H,xt,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Ut=Ut[At]),Ut){j.bindFramebuffer(U.FRAMEBUFFER,Ut);try{const Ft=C.texture,Xt=Ft.format,kt=Ft.type;if(Xt!==Sn&&gt.convert(Xt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=kt===Wn&&(Z.has("EXT_color_buffer_half_float")||at.isWebGL2&&Z.has("EXT_color_buffer_float"));if(kt!==ai&&gt.convert(kt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===ni&&(at.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&V>=0&&V<=C.height-H&&U.readPixels(G,V,Y,H,gt.convert(Xt),gt.convert(kt),xt)}finally{const Ft=S!==null?_t.get(S).__webglFramebuffer:null;j.bindFramebuffer(U.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(C,G,V=0){const Y=Math.pow(2,-V),H=Math.floor(G.image.width*Y),xt=Math.floor(G.image.height*Y);A.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,C.x,C.y,H,xt),j.unbindTexture()},this.copyTextureToTexture=function(C,G,V,Y=0){const H=G.image.width,xt=G.image.height,At=gt.convert(V.format),Ut=gt.convert(V.type);A.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,H,xt,At,Ut,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,At,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,At,Ut,G.image),Y===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(C,G,V,Y,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=C.max.x-C.min.x+1,At=C.max.y-C.min.y+1,Ut=C.max.z-C.min.z+1,Ft=gt.convert(Y.format),Xt=gt.convert(Y.type);let kt;if(Y.isData3DTexture)A.setTexture3D(Y,0),kt=U.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),kt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ht=U.getParameter(U.UNPACK_ROW_LENGTH),me=U.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),Dn=U.getParameter(U.UNPACK_SKIP_IMAGES),oe=V.isCompressedTexture?V.mipmaps[H]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(kt,H,G.x,G.y,G.z,xt,At,Ut,Ft,Xt,oe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(kt,H,G.x,G.y,G.z,xt,At,Ut,Ft,oe.data)):U.texSubImage3D(kt,H,G.x,G.y,G.z,xt,At,Ut,Ft,Xt,oe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me),U.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),H===0&&Y.generateMipmaps&&U.generateMipmap(kt),j.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){b=0,w=0,S=null,j.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ka?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?Di:Yh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Ce:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class I0 extends fu{}I0.prototype.isWebGL1Renderer=!0;class tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class N0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class O0 extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $c=new de,Ca=new mo,Ir=new po,Nr=new L;class Qc extends ye{constructor(t=new Se,e=new O0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;$c.copy(i).invert(),Ca.copy(t.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Nr.fromBufferAttribute(u,m),th(Nr,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Nr.fromBufferAttribute(u,g),th(Nr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(s,t,e,n,i,r,o){const a=Ca.distanceSqToPoint(s);if(a<e){const l=new L;Ca.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class F0 extends je{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new $:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new de;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Re(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class el extends Ln{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new $,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class z0 extends el{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Or=new L,ia=new nl,sa=new nl,ra=new nl;class Bs extends Ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Or.subVectors(i[0],i[1]).add(i[0]),c=Or);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Or.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),sa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ra.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ra.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function B0(s,t){const e=1-s;return e*e*t}function G0(s,t){return 2*(1-s)*s*t}function k0(s,t){return s*s*t}function Vs(s,t,e,n){return B0(s,t)+G0(s,e)+k0(s,n)}function H0(s,t){const e=1-s;return e*e*e*t}function V0(s,t){const e=1-s;return 3*e*e*s*t}function W0(s,t){return 3*(1-s)*s*s*t}function X0(s,t){return s*s*s*t}function Ws(s,t,e,n,i){return H0(s,t)+V0(s,e)+W0(s,n)+X0(s,i)}class du extends Ln{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,i.x,r.x,o.x,a.x),Ws(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y0 extends Ln{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,i.x,r.x,o.x,a.x),Ws(t,i.y,r.y,o.y,a.y),Ws(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pu extends Ln{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q0 extends Ln{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends Ln{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,i.x,r.x,o.x),Vs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Ln{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,i.x,r.x,o.x),Vs(t,i.y,r.y,o.y),Vs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(eh(a,l.x,c.x,h.x,u.x),eh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:z0,CatmullRomCurve3:Bs,CubicBezierCurve:du,CubicBezierCurve3:Y0,EllipseCurve:el,LineCurve:pu,LineCurve3:q0,QuadraticBezierCurve:mu,QuadraticBezierCurve3:_u,SplineCurve:gu});class j0 extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new eo[i.type]().fromJSON(i))}return this}}class nh extends j0{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pu(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new mu(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new du(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new el(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class il extends Se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends Se{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function x(){const M=new L,b=new L;let w=0;const S=(e-t)/n;for(let D=0;D<=r;D++){const y=[],T=D/r,N=T*(e-t)+t;for(let z=0;z<=i;z++){const W=z/i,R=W*l+a,O=Math.sin(R),F=Math.cos(R);b.x=N*O,b.y=-T*n+m,b.z=N*F,u.push(b.x,b.y,b.z),M.set(O,S,F).normalize(),f.push(M.x,M.y,M.z),d.push(W,1-T),y.push(g++)}_.push(y)}for(let D=0;D<i;D++)for(let y=0;y<r;y++){const T=_[y][D],N=_[y+1][D],z=_[y+1][D+1],W=_[y][D+1];h.push(T,N,W),h.push(N,z,W),w+=6}c.addGroup(p,w,0),p+=w}function v(M){const b=g,w=new $,S=new L;let D=0;const y=M===!0?t:e,T=M===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;const N=g;for(let z=0;z<=i;z++){const R=z/i*l+a,O=Math.cos(R),F=Math.sin(R);S.x=y*F,S.y=m*T,S.z=y*O,u.push(S.x,S.y,S.z),f.push(0,T,0),w.x=O*.5+.5,w.y=F*.5*T+.5,d.push(w.x,w.y),g++}for(let z=0;z<i;z++){const W=b+z,R=N+z;M===!0?h.push(R,R+1,W):h.push(R+1,R,W),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sl extends Zt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rl extends Se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new L,M=new L,b=new L;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],M),d(e[w+2],b),l(v,M,b,x)}function l(x,v,M,b){const w=b+1,S=[];for(let D=0;D<=w;D++){S[D]=[];const y=x.clone().lerp(M,D/w),T=v.clone().lerp(M,D/w),N=w-D;for(let z=0;z<=N;z++)z===0&&D===w?S[D][z]=y:S[D][z]=y.clone().lerp(T,z/N)}for(let D=0;D<w;D++)for(let y=0;y<2*(w-D)-1;y++){const T=Math.floor(y/2);y%2===0?(f(S[D][T+1]),f(S[D+1][T]),f(S[D][T])):(f(S[D][T+1]),f(S[D+1][T+1]),f(S[D+1][T]))}}function c(x){const v=new L;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const x=new L;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const M=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(M,1-b)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],b=o[x+4],w=Math.max(v,M,b),S=Math.min(v,M,b);w>.9&&S<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new L,v=new L,M=new L,b=new L,w=new $,S=new $,D=new $;for(let y=0,T=0;y<r.length;y+=9,T+=6){x.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),w.set(o[T+0],o[T+1]),S.set(o[T+2],o[T+3]),D.set(o[T+4],o[T+5]),b.copy(x).add(v).add(M).divideScalar(3);const N=m(b);_(w,T+0,x,N),_(S,T+2,v,N),_(D,T+4,M,N)}}function _(x,v,M,b){b<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.vertices,t.indices,t.radius,t.details)}}class Xs extends nh{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new nh().fromJSON(i))}return this}}const K0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=tv(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Zs(r,o,e,a,l,d,0),o}};function vu(s,t,e,n,i){let r,o;if(i===uv(s,t,e,n)>0)for(r=t;r<e;r+=n)o=ih(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=ih(r,s[r],s[r+1],o);return o&&xo(o,o.next)&&($s(o),o=o.next),o}function zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||le(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(s,t,e,n,i,r,o){if(!s)return;!o&&r&&rv(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?J0(s,n,i,r):Z0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),$s(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$0(zi(s),t,e),Zs(s,t,e,n,i,r,2)):o===2&&Q0(s,t,e,n,i,r):Zs(zi(s),t,e,n,i,r,1);break}}}function Z0(s){const t=s.prev,e=s,n=s.next;if(le(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&cs(i,a,r,l,o,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(le(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ra(d,g,t,e,n),x=Ra(_,m,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=p&&M&&M.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&cs(a,h,l,u,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&cs(a,h,l,u,c,f,M.x,M.y)&&le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&cs(a,h,l,u,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&cs(a,h,l,u,c,f,M.x,M.y)&&le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!xo(i,r)&&xu(i,n,n.next,r)&&Js(i,r)&&Js(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$s(n),$s(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function Q0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lv(o,a)){let l=Mu(o,a);o=zi(o,o.next),l=zi(l,l.next),Zs(o,t,e,n,i,r,0),Zs(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tv(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=vu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(av(c));for(i.sort(ev),r=0;r<i.length;r++)e=nv(i[r],e);return e}function ev(s,t){return s.x-t.x}function nv(s,t){const e=iv(s,t);if(!e)return t;const n=Mu(e,s);return zi(n,n.next),zi(e,e.next)}function iv(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&cs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Js(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&sv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function sv(s,t){return le(s.prev,s,t.prev)<0&&le(t.next,s,s.next)<0}function rv(s,t,e,n){let i=s;do i.z===0&&(i.z=Ra(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ov(i)}function ov(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ra(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function av(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function cs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function lv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cv(s,t)&&(Js(s,t)&&Js(t,s)&&hv(s,t)&&(le(s.prev,s,t.prev)||le(s,t.prev,t))||xo(s,t)&&le(s.prev,s,s.next)>0&&le(t.prev,t,t.next)>0)}function le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xo(s,t){return s.x===t.x&&s.y===t.y}function xu(s,t,e,n){const i=zr(le(s,t,e)),r=zr(le(s,t,n)),o=zr(le(e,n,s)),a=zr(le(e,n,t));return!!(i!==r&&o!==a||i===0&&Fr(s,e,t)||r===0&&Fr(s,n,t)||o===0&&Fr(e,s,n)||a===0&&Fr(e,t,n))}function Fr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function zr(s){return s>0?1:s<0?-1:0}function cv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Js(s,t){return le(s.prev,s,s.next)<0?le(s,t,s.next)>=0&&le(s,s.prev,t)>=0:le(s,t,s.prev)<0||le(s,s.next,t)<0}function hv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Mu(s,t){const e=new Pa(s.i,s.x,s.y),n=new Pa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ih(s,t,e,n){const i=new Pa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class li{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return li.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];sh(t),rh(n,t);let o=t.length;e.forEach(sh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,rh(n,e[l]);const a=K0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function sh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function rh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ol extends Se{constructor(t=new Xs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:fv;let v,M=!1,b,w,S,D;p&&(v=p.getSpacedPoints(h),M=!0,f=!1,b=p.computeFrenetFrames(h,!1),w=new L,S=new L,D=new L),f||(m=0,d=0,g=0,_=0);const y=a.extractPoints(c);let T=y.shape;const N=y.holes;if(!li.isClockWise(T)){T=T.reverse();for(let U=0,ut=N.length;U<ut;U++){const Z=N[U];li.isClockWise(Z)&&(N[U]=Z.reverse())}}const W=li.triangulateShape(T,N),R=T;for(let U=0,ut=N.length;U<ut;U++){const Z=N[U];T=T.concat(Z)}function O(U,ut,Z){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ut,Z)}const F=T.length,k=W.length;function X(U,ut,Z){let at,j,wt;const _t=U.x-ut.x,A=U.y-ut.y,E=Z.x-U.x,B=Z.y-U.y,st=_t*_t+A*A,nt=_t*B-A*E;if(Math.abs(nt)>Number.EPSILON){const tt=Math.sqrt(st),St=Math.sqrt(E*E+B*B),pt=ut.x-A/tt,vt=ut.y+_t/tt,Rt=Z.x-B/St,Gt=Z.y+E/St,it=((Rt-pt)*B-(Gt-vt)*E)/(_t*B-A*E);at=pt+_t*it-U.x,j=vt+A*it-U.y;const $t=at*at+j*j;if($t<=2)return new $(at,j);wt=Math.sqrt($t/2)}else{let tt=!1;_t>Number.EPSILON?E>Number.EPSILON&&(tt=!0):_t<-Number.EPSILON?E<-Number.EPSILON&&(tt=!0):Math.sign(A)===Math.sign(B)&&(tt=!0),tt?(at=-A,j=_t,wt=Math.sqrt(st)):(at=_t,j=A,wt=Math.sqrt(st/2))}return new $(at/wt,j/wt)}const K=[];for(let U=0,ut=R.length,Z=ut-1,at=U+1;U<ut;U++,Z++,at++)Z===ut&&(Z=0),at===ut&&(at=0),K[U]=X(R[U],R[Z],R[at]);const J=[];let et,ot=K.concat();for(let U=0,ut=N.length;U<ut;U++){const Z=N[U];et=[];for(let at=0,j=Z.length,wt=j-1,_t=at+1;at<j;at++,wt++,_t++)wt===j&&(wt=0),_t===j&&(_t=0),et[at]=X(Z[at],Z[wt],Z[_t]);J.push(et),ot=ot.concat(et)}for(let U=0;U<m;U++){const ut=U/m,Z=d*Math.cos(ut*Math.PI/2),at=g*Math.sin(ut*Math.PI/2)+_;for(let j=0,wt=R.length;j<wt;j++){const _t=O(R[j],K[j],at);Mt(_t.x,_t.y,-Z)}for(let j=0,wt=N.length;j<wt;j++){const _t=N[j];et=J[j];for(let A=0,E=_t.length;A<E;A++){const B=O(_t[A],et[A],at);Mt(B.x,B.y,-Z)}}}const q=g+_;for(let U=0;U<F;U++){const ut=f?O(T[U],ot[U],q):T[U];M?(S.copy(b.normals[0]).multiplyScalar(ut.x),w.copy(b.binormals[0]).multiplyScalar(ut.y),D.copy(v[0]).add(S).add(w),Mt(D.x,D.y,D.z)):Mt(ut.x,ut.y,0)}for(let U=1;U<=h;U++)for(let ut=0;ut<F;ut++){const Z=f?O(T[ut],ot[ut],q):T[ut];M?(S.copy(b.normals[U]).multiplyScalar(Z.x),w.copy(b.binormals[U]).multiplyScalar(Z.y),D.copy(v[U]).add(S).add(w),Mt(D.x,D.y,D.z)):Mt(Z.x,Z.y,u/h*U)}for(let U=m-1;U>=0;U--){const ut=U/m,Z=d*Math.cos(ut*Math.PI/2),at=g*Math.sin(ut*Math.PI/2)+_;for(let j=0,wt=R.length;j<wt;j++){const _t=O(R[j],K[j],at);Mt(_t.x,_t.y,u+Z)}for(let j=0,wt=N.length;j<wt;j++){const _t=N[j];et=J[j];for(let A=0,E=_t.length;A<E;A++){const B=O(_t[A],et[A],at);M?Mt(B.x,B.y+v[h-1].y,v[h-1].x+Z):Mt(B.x,B.y,u+Z)}}}Q(),ft();function Q(){const U=i.length/3;if(f){let ut=0,Z=F*ut;for(let at=0;at<k;at++){const j=W[at];Lt(j[2]+Z,j[1]+Z,j[0]+Z)}ut=h+m*2,Z=F*ut;for(let at=0;at<k;at++){const j=W[at];Lt(j[0]+Z,j[1]+Z,j[2]+Z)}}else{for(let ut=0;ut<k;ut++){const Z=W[ut];Lt(Z[2],Z[1],Z[0])}for(let ut=0;ut<k;ut++){const Z=W[ut];Lt(Z[0]+F*h,Z[1]+F*h,Z[2]+F*h)}}n.addGroup(U,i.length/3-U,0)}function ft(){const U=i.length/3;let ut=0;Tt(R,ut),ut+=R.length;for(let Z=0,at=N.length;Z<at;Z++){const j=N[Z];Tt(j,ut),ut+=j.length}n.addGroup(U,i.length/3-U,1)}function Tt(U,ut){let Z=U.length;for(;--Z>=0;){const at=Z;let j=Z-1;j<0&&(j=U.length-1);for(let wt=0,_t=h+m*2;wt<_t;wt++){const A=F*wt,E=F*(wt+1),B=ut+at+A,st=ut+j+A,nt=ut+j+E,tt=ut+at+E;Nt(B,st,nt,tt)}}}function Mt(U,ut,Z){l.push(U),l.push(ut),l.push(Z)}function Lt(U,ut,Z){Et(U),Et(ut),Et(Z);const at=i.length/3,j=x.generateTopUV(n,i,at-3,at-2,at-1);It(j[0]),It(j[1]),It(j[2])}function Nt(U,ut,Z,at){Et(U),Et(ut),Et(at),Et(ut),Et(Z),Et(at);const j=i.length/3,wt=x.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);It(wt[0]),It(wt[1]),It(wt[3]),It(wt[1]),It(wt[2]),It(wt[3])}function Et(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function It(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new eo[i.type]().fromJSON(i)),new ol(n,t.options)}}const fv={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-u),new $(f,1-g),new $(_,1-p)]:[new $(a,1-l),new $(h,1-u),new $(d,1-g),new $(m,1-p)]}};function dv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class al extends rl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new al(t.radius,t.detail)}}class no extends Se{constructor(t=new Xs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;li.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];li.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=li.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],v=x[0]+u,M=x[1]+u,b=x[2]+u;n.push(v,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return pv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new no(n,t.curveSegments)}}function pv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Xe extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const w=b/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+M,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],M=h[p][x],b=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&d.push(v,M,w),(p!==n-1||l<Math.PI)&&d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ai extends Se{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class io extends Se{constructor(t=new _u(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new $;let h=new L;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),x(),p()}function m(v){h=t.getPointAt(v/e,h);const M=o.normals[v],b=o.binormals[v];for(let w=0;w<=i;w++){const S=w/i*Math.PI*2,D=Math.sin(S),y=-Math.cos(S);l.x=y*M.x+D*b.x,l.y=y*M.y+D*b.y,l.z=y*M.z+D*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const b=(i+1)*(v-1)+(M-1),w=(i+1)*v+(M-1),S=(i+1)*v+M,D=(i+1)*(v-1)+M;g.push(b,w,D),g.push(w,S,D)}}function x(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new io(new eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class zt extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oa extends zt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ar extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class mv extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new de,oh=new L,ah=new L;class ll{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _v extends ll{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$r*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class la extends ar{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _v}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const lh=new de,Os=new L,ca=new L;class gv extends ll{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Fs extends ar{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vv extends ll{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ch extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xv extends ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hh(){return(typeof performance>"u"?Date:performance).now()}class Mv{constructor(t,e,n=0,i=1/0){this.ray=new mo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return La(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)La(t[i],this,n,e);return n.sort(uh),n}}function uh(s,t){return s.distance-t.distance}function La(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)La(i[r],t,e,!0)}}class fh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);const dh={type:"change"},ha={type:"start"},ph={type:"end"},Br=new mo,mh=new Qn,yv=Math.cos(70*Rd.DEG2RAD);class Sv extends Gi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Rt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dh),n.update(),r=i.NONE},this.update=function(){const P=new L,lt=new Fi().setFromUnitVectors(t.up,new L(0,1,0)),bt=lt.clone().invert(),yt=new L,rt=new Fi,I=new L,ht=2*Math.PI;return function(Dt=null){const Pt=n.object.position;P.copy(Pt).sub(n.target),P.applyQuaternion(lt),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&z(T(Dt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,Kt=n.maxAzimuthAngle;isFinite(jt)&&isFinite(Kt)&&(jt<-Math.PI?jt+=ht:jt>Math.PI&&(jt-=ht),Kt<-Math.PI?Kt+=ht:Kt>Math.PI&&(Kt-=ht),jt<=Kt?a.theta=Math.max(jt,Math.min(Kt,a.theta)):a.theta=a.theta>(jt+Kt)/2?Math.max(jt,a.theta):Math.min(Kt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(bt),Pt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let he=!1;if(n.zoomToCursor&&w){let pe=null;if(n.object.isPerspectiveCamera){const Qt=P.length();pe=J(Qt*c);const ge=Qt-pe;n.object.position.addScaledVector(M,ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new L(b.x,b.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),he=!0;const ge=new L(b.x,b.y,0);ge.unproject(n.object),n.object.position.sub(ge).add(Qt),n.object.updateMatrixWorld(),pe=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pe).add(n.object.position):(Br.origin.copy(n.object.position),Br.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Br.direction))<yv?t.lookAt(n.target):(mh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Br.intersectPlane(mh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),he=!0);return c=1,w=!1,he||yt.distanceToSquared(n.object.position)>o||8*(1-rt.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(dh),yt.copy(n.object.position),rt.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$t),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new fh,l=new fh;let c=1;const h=new L,u=new $,f=new $,d=new $,g=new $,_=new $,m=new $,p=new $,x=new $,v=new $,M=new L,b=new $;let w=!1;const S=[],D={};let y=!1;function T(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function N(P){const lt=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*lt)}function z(P){l.theta-=P}function W(P){l.phi-=P}const R=function(){const P=new L;return function(bt,yt){P.setFromMatrixColumn(yt,0),P.multiplyScalar(-bt),h.add(P)}}(),O=function(){const P=new L;return function(bt,yt){n.screenSpacePanning===!0?P.setFromMatrixColumn(yt,1):(P.setFromMatrixColumn(yt,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(bt),h.add(P)}}(),F=function(){const P=new L;return function(bt,yt){const rt=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;P.copy(I).sub(n.target);let ht=P.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),R(2*bt*ht/rt.clientHeight,n.object.matrix),O(2*yt*ht/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(bt*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),O(yt*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P,lt){if(!n.zoomToCursor)return;w=!0;const bt=n.domElement.getBoundingClientRect(),yt=P-bt.left,rt=lt-bt.top,I=bt.width,ht=bt.height;b.x=yt/I*2-1,b.y=-(rt/ht)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function et(P){u.set(P.clientX,P.clientY)}function ot(P){K(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function q(P){g.set(P.clientX,P.clientY)}function Q(P){f.set(P.clientX,P.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const lt=n.domElement;z(2*Math.PI*d.x/lt.clientHeight),W(2*Math.PI*d.y/lt.clientHeight),u.copy(f),n.update()}function ft(P){x.set(P.clientX,P.clientY),v.subVectors(x,p),v.y>0?k(N(v.y)):v.y<0&&X(N(v.y)),p.copy(x),n.update()}function Tt(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_),n.update()}function Mt(P){K(P.clientX,P.clientY),P.deltaY<0?X(N(P.deltaY)):P.deltaY>0&&k(N(P.deltaY)),n.update()}function Lt(P){let lt=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),lt=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),lt=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),lt=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),lt=!0;break}lt&&(P.preventDefault(),n.update())}function Nt(P){if(S.length===1)u.set(P.pageX,P.pageY);else{const lt=gt(P),bt=.5*(P.pageX+lt.x),yt=.5*(P.pageY+lt.y);u.set(bt,yt)}}function Et(P){if(S.length===1)g.set(P.pageX,P.pageY);else{const lt=gt(P),bt=.5*(P.pageX+lt.x),yt=.5*(P.pageY+lt.y);g.set(bt,yt)}}function It(P){const lt=gt(P),bt=P.pageX-lt.x,yt=P.pageY-lt.y,rt=Math.sqrt(bt*bt+yt*yt);p.set(0,rt)}function U(P){n.enableZoom&&It(P),n.enablePan&&Et(P)}function ut(P){n.enableZoom&&It(P),n.enableRotate&&Nt(P)}function Z(P){if(S.length==1)f.set(P.pageX,P.pageY);else{const bt=gt(P),yt=.5*(P.pageX+bt.x),rt=.5*(P.pageY+bt.y);f.set(yt,rt)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const lt=n.domElement;z(2*Math.PI*d.x/lt.clientHeight),W(2*Math.PI*d.y/lt.clientHeight),u.copy(f)}function at(P){if(S.length===1)_.set(P.pageX,P.pageY);else{const lt=gt(P),bt=.5*(P.pageX+lt.x),yt=.5*(P.pageY+lt.y);_.set(bt,yt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_)}function j(P){const lt=gt(P),bt=P.pageX-lt.x,yt=P.pageY-lt.y,rt=Math.sqrt(bt*bt+yt*yt);x.set(0,rt),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),k(v.y),p.copy(x);const I=(P.pageX+lt.x)*.5,ht=(P.pageY+lt.y)*.5;K(I,ht)}function wt(P){n.enableZoom&&j(P),n.enablePan&&at(P)}function _t(P){n.enableZoom&&j(P),n.enableRotate&&Z(P)}function A(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",B)),Wt(P),P.pointerType==="touch"?Gt(P):st(P))}function E(P){n.enabled!==!1&&(P.pointerType==="touch"?it(P):nt(P))}function B(P){Ot(P),S.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(ph),r=i.NONE}function st(P){let lt;switch(P.button){case 0:lt=n.mouseButtons.LEFT;break;case 1:lt=n.mouseButtons.MIDDLE;break;case 2:lt=n.mouseButtons.RIGHT;break;default:lt=-1}switch(lt){case Hi.DOLLY:if(n.enableZoom===!1)return;ot(P),r=i.DOLLY;break;case Hi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;q(P),r=i.PAN}else{if(n.enableRotate===!1)return;et(P),r=i.ROTATE}break;case Hi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;et(P),r=i.ROTATE}else{if(n.enablePan===!1)return;q(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ha)}function nt(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ft(P);break;case i.PAN:if(n.enablePan===!1)return;Tt(P);break}}function tt(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(ha),Mt(St(P)),n.dispatchEvent(ph))}function St(P){const lt=P.deltaMode,bt={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(lt){case 1:bt.deltaY*=16;break;case 2:bt.deltaY*=100;break}return P.ctrlKey&&!y&&(bt.deltaY*=10),bt}function pt(P){P.key==="Control"&&(y=!0,document.addEventListener("keyup",vt,{passive:!0,capture:!0}))}function vt(P){P.key==="Control"&&(y=!1,document.removeEventListener("keyup",vt,{passive:!0,capture:!0}))}function Rt(P){n.enabled===!1||n.enablePan===!1||Lt(P)}function Gt(P){switch(Ct(P),S.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;Nt(P),r=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;Et(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),r=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ut(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ha)}function it(P){switch(Ct(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Z(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(P),n.update();break;default:r=i.NONE}}function $t(P){n.enabled!==!1&&P.preventDefault()}function Wt(P){S.push(P.pointerId)}function Ot(P){delete D[P.pointerId];for(let lt=0;lt<S.length;lt++)if(S[lt]==P.pointerId){S.splice(lt,1);return}}function Ct(P){let lt=D[P.pointerId];lt===void 0&&(lt=new $,D[P.pointerId]=lt),lt.set(P.pageX,P.pageY)}function gt(P){const lt=P.pointerId===S[0]?S[1]:S[0];return D[lt]}n.domElement.addEventListener("contextmenu",$t),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",tt,{passive:!1}),document.addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}const Su={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ev=new $a(-1,1,1,-1,0,1);class Tv extends Se{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const wv=new Tv;class Eu{constructor(t){this._mesh=new ct(wv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ev)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tu extends lr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=to.clone(t.uniforms),this.material=new Fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Eu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _h extends lr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class bv extends lr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Av{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tu(Su),this.copyPass.material.blending=Vn,this.clock=new yu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(o instanceof _h?n=!0:o instanceof bv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cv extends lr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Rv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ms extends lr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new En(r,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new En(r,o,{type:Wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new En(r,o,{type:Wn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Rv;this.highPassUniforms=to.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Su;this.copyUniforms=to.clone(h.uniforms),this.blendMaterial=new Fe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new go,this.fsQuad=new Eu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ms.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ms.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Fe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ms.BlurDirectionX=new $(1,0);Ms.BlurDirectionY=new $(0,1);function Bn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},cl,De,re,Rn=1e8,ze=1/Rn,Da=Math.PI*2,Pv=Da/4,Lv=0,bu=Math.sqrt,Dv=Math.cos,Uv=Math.sin,Pe=function(t){return typeof t=="string"},fe=function(t){return typeof t=="function"},Yn=function(t){return typeof t=="number"},hl=function(t){return typeof t>"u"},Pn=function(t){return typeof t=="object"},Ke=function(t){return t!==!1},ul=function(){return typeof window<"u"},Gr=function(t){return fe(t)||Pe(t)},Au=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,Ua=/(?:-?\.?\d|\.)+/gi,Cu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ua=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ru=/[+-]=-?[.\d]+/,Pu=/[^,'"\[\]\s]+/gi,Iv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,wn,Ia,fl,ln={},so={},Lu,Du=function(t){return(so=Ss(t,ln))&&Qe},dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qs=function(t,e){return!e&&console.warn(t)},Uu=function(t,e){return t&&(ln[t]=e)&&so&&(so[t]=e)||ln},tr=function(){return 0},Nv={suppressEvents:!0,isStart:!0,kill:!1},Vr={suppressEvents:!0,kill:!1},Ov={suppressEvents:!0},pl={},ci=[],Na={},Iu,sn={},fa={},gh=30,Wr=[],ml="",_l=function(t){var e=t[0],n,i;if(Pn(e)||fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Wr.length;i--&&!Wr[i].targetTest(e););n=Wr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new rf(t[i],n)))||t.splice(i,1);return t},Ui=function(t){return t._gsap||_l(mn(t))[0]._gsap},Nu=function(t,e,n){return(n=t[e])&&fe(n)?t[e]():hl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ze=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},ds=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Fv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ro=function(){var t=ci.length,e=ci.slice(0),n,i;for(Na={},ci.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gl=function(t){return!!(t._initted||t._startAt||t.add)},Ou=function(t,e,n,i){ci.length&&!De&&ro(),t.render(e,n,!!(De&&e<0&&gl(t))),ci.length&&!De&&ro()},Fu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pu).length<2?e:Pe(t)?t.trim():t},zu=function(t){return t},cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ss=function(t,e){for(var n in e)t[n]=e[n];return t},vh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},oo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ys=function(t){var e=t.parent||ae,n=t.keyframes?zv(Be(t.keyframes)):cn;if(Ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Bv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bu=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Mo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},fi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ii=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Oa=function(t,e,n,i){return t._startAt&&(De?t._startAt.revert(Vr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},kv=function s(t){return!t||t._ts&&s(t.parent)},xh=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t=Me(t/e));return t&&n===t?n-1:n},ao=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yo=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||ze)||0))},So=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yo(t),n._dirty||Ii(n,t)),t},Gu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ao(t.rawTime(),e),(!e._dur||cr(0,e.totalDuration(),n)-e._tTime>ze)&&e.render(n,!0)),Ii(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},An=function(t,e,n,i){return e.parent&&fi(e),e._start=Me((Yn(n)?n:n||t!==ae?fn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bu(t,e,"_first","_last",t._sort?"_start":0),Fa(e)||(t._recent=e),i||Gu(t,e),t._ts<0&&So(t,t._tTime),t},ku=function(t,e){return(ln.ScrollTrigger||dl("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},Hu=function(t,e,n,i,r){if(xl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Iu!==rn.frame)return ci.push(t),t._lazy=[r,i],1},Hv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Fa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Vv=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Hv(t)&&!(!t._initted&&Fa(t))||(t._ts<0||t._dp._ts<0)&&!Fa(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=cr(0,t._tDur,e),h=Es(l,a),t._yoyo&&h&1&&(o=1-o),h!==Es(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||De||i||t._zTime===ze||!e&&t._zTime){if(!t._initted&&Hu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ze:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Oa(t,e,n,!0),t._onUpdate&&!n&&on(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&on(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&fi(t,1),!n&&!De&&(on(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ts=function(t,e,n,i){var r=t._repeat,o=Me(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Me(o*(r+1)+t._rDelay*r):o,a>0&&!i&&So(t,t._tTime=t._tDur*a),t.parent&&yo(t),n||Ii(t.parent,t),t},Mh=function(t){return t instanceof He?Ii(t):Ts(t,t._dur)},Xv={_start:0,endTime:tr,totalDuration:tr},fn=function s(t,e,n){var i=t.labels,r=t._recent||Xv,o=t.duration()>=Rn?r.endTime(!1):t._dur,a,l,c;return Pe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Be(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},qs=function(t,e,n){var i=Yn(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ke(l.vars.inherit)&&l.parent;o.immediateRender=Ke(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new xe(e[0],o,e[r+1])},pi=function(t,e){return t||t===0?e(t):e},cr=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!Pe(t)||!(e=Iv.exec(t))?"":e[1]},Yv=function(t,e,n){return pi(n,function(i){return cr(t,e,i)})},za=[].slice,Vu=function(t,e){return t&&Pn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pn(t[0]))&&!t.nodeType&&t!==wn},qv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Pe(i)&&!e||Vu(i,1)?(r=n).push.apply(r,mn(i)):n.push(i)})||n},mn=function(t,e,n){return re&&!e&&re.selector?re.selector(t):Pe(t)&&!n&&(Ia||!ws())?za.call((e||fl).querySelectorAll(t),0):Be(t)?qv(t,n):Vu(t)?za.call(t,0):t?[t]:[]},Ba=function(t){return t=mn(t)[0]||Qs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mn(e,n.querySelectorAll?n:n===t?Qs("Invalid scope")||fl.createElement("div"):t)}},Wu=function(t){return t.sort(function(){return .5-Math.random()})},Xu=function(t){if(fe(t))return t;var e=Pn(t)?t:{each:t},n=Ni(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Pe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,x,v,M,b,w,S,D,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Rn])[1],!y){for(S=-1e8;S<(S=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,x=y===Rn?0:l?_*u/y-.5:i/y|0,S=0,D=Rn,w=0;w<_;w++)v=w%y-p,M=x-(w/y|0),m[w]=b=c?Math.abs(c==="y"?M:v):bu(v*v+M*M),b>S&&(S=b),b<D&&(D=b);i==="random"&&Wu(m),m.max=S-D,m.min=D,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Oe(e.amount||e.each)||0,n=n&&_<0?ef(n):n}return _=(m[f]-m.min)/m.max||0,Me(m.b+(n?n(_):_)*m.v)+m.u}},Ga=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Yn(n)?0:Oe(n))}},Yu=function(t,e){var n=Be(t),i,r;return!n&&Pn(t)&&(i=n=t.radius||Rn,t.values?(t=mn(t.values),(r=!Yn(t[0]))&&(i*=i)):t=Ga(t.increment)),pi(e,n?fe(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Rn,h=0,u=t.length,f,d;u--;)r?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,r||h===o||Yn(o)?h:h+Oe(o)}:Ga(t))},qu=function(t,e,n,i){return pi(Be(t)?!e:n===!0?!!(n=0):!i,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},jv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Kv=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},Zv=function(t,e,n){return Ku(t,e,0,1,n)},ju=function(t,e,n){return pi(n,function(i){return t[~~e(i)]})},Jv=function s(t,e,n){var i=e-t;return Be(t)?ju(t,s(0,t.length),e):pi(n,function(r){return(i+(r-t)%i)%i+t})},$v=function s(t,e,n){var i=e-t,r=i*2;return Be(t)?ju(t,s(0,t.length-1),e):pi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},er=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Pu:Ua),n+=t.substr(e,i-e)+qu(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Ku=function(t,e,n,i,r){var o=e-t,a=i-n;return pi(r,function(l){return n+((l-t)/o*a||0)})},Qv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=Pe(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Ss(Be(t)?[]:{},t));if(!h){for(l in e)vl.call(a,t,l,"get",e[l]);r=function(g){return Sl(g,a)||(o?t.p:t)}}}return pi(n,r)},yh=function(t,e,n){var i=t.labels,r=Rn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},on=function(t,e,n){var i=t.vars,r=i[e],o=re,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ci.length&&ro(),a&&(re=a),h=l?r.apply(c,l):r.call(c),re=o,h},Gs=function(t){return fi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&on(t,"onInterrupt"),t},us,Zu=[],Ju=function(t){if(t)if(t=!t.name&&t.default||t,ul()||t.headless){var e=t.name,n=fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:tr,render:Sl,add:vl,kill:mx,modifier:px,rawVars:0},o={targetTest:0,get:0,getSetter:yl,aliases:{},register:0};if(ws(),t!==i){if(sn[e])return;cn(i,cn(oo(t,r),o)),Ss(i.prototype,Ss(r,oo(t,o))),sn[i.prop=e]=i,t.targetTest&&(Wr.push(i),pl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Uu(e,i),t.register&&t.register(Qe,i,Je)}else Zu.push(t)},ne=255,ks={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},da=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},$u=function(t,e,n){var i=t?Yn(t)?[t>>16,t>>8&ne,t&ne]:0:ks.black,r,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ks[t])i=ks[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ua),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=da(l+1/3,r,o),i[1]=da(l,r,o),i[2]=da(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Cu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ua)||ks.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/ne,o=i[1]/ne,a=i[2]/ne,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qu=function(t){var e=[],n=[],i=-1;return t.split(hi).forEach(function(r){var o=r.match(hs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Sh=function(t,e,n){var i="",r=(t+i).match(hi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=$u(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Qu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(hi,"1").split(hs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(hi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},hi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ks)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),tx=/hsl[a]?\(/,tf=function(t){var e=t.join(" "),n;if(hi.lastIndex=0,hi.test(e))return n=tx.test(e),t[1]=Sh(t[1],n),t[0]=Sh(t[0],n,Qu(t[1])),!0},nr,rn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,g=function _(m){var p=s()-i,x=m===!0,v,M,b,w;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,v=b-o,(v>0||x)&&(w=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=v+(v>=r?4:r-v),M=1),x||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](b,f,w,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Lu&&(!Ia&&ul()&&(wn=Ia=window,fl=wn.document||{},ln.gsap=Qe,(wn.gsapVersions||(wn.gsapVersions=[])).push(Qe.version),Du(so||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Zu.forEach(Ju)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},nr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),nr=0,c=tr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,x){var v=p?function(M,b,w,S){m(M,b,w,S),u.remove(v)}:m;return u.remove(m),a[x?"unshift":"push"](v),ws(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),ws=function(){return!nr&&rn.wake()},Jt={},ex=/^[\d.\-M][\d.\-,\s]/,nx=/["']/g,ix=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(nx,"").trim():+c,i=l.substr(a+1).trim();return e},sx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},rx=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ix(e[1])]:sx(t).split(",").map(Fu)):Jt._CE&&ex.test(t)?Jt._CE("",t):n},ef=function(t){return function(e){return 1-t(1-e)}},nf=function s(t,e){for(var n=t._first,i;n;)n instanceof He?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ni=function(t,e){return t&&(fe(t)?t:Jt[t]||rx(t))||e},ki=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Ze(t,function(a){Jt[a]=ln[a]=r,Jt[o=a.toLowerCase()]=n;for(var l in r)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=r[l]}),r},sf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pa=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Da*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Uv((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:sf(a);return r=Da/r,l.config=function(c,h){return s(t,c,h)},l},ma=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:sf(n);return i.config=function(r){return s(t,r)},i};Ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ki(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;ki("Elastic",pa("in"),pa("out"),pa());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ki("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ki("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ki("Circ",function(s){return-(bu(1-s*s)-1)});ki("Sine",function(s){return s===1?1:-Dv(s*Pv)+1});ki("Back",ma("in"),ma("out"),ma());Jt.SteppedEase=Jt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ze;return function(a){return((i*cr(0,o,a)|0)+r)*n}}};ys.ease=Jt["quad.out"];Ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ml+=s+","+s+"Params,"});var rf=function(t,e){this.id=Lv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Nu,this.set=e?e.getSetter:yl},ir=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ts(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),nr||rn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(So(this,n),!r._dp||r.parent||Gu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ou(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Es(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(cr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),yo(this),Gv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ze&&(this._tTime-=ze)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ao(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ov);var i=De;return De=n,gl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(fn(this,n),Ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ke(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ze)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=fe(n)?n:zu,a=function(){var c=i.then;i.then=null,fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Gs(this)},s}();cn(ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var He=function(s){wu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ke(n.sortChildren),ae&&An(n.parent||ae,Bn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ku(Bn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return qs(0,arguments,this),this},e.from=function(i,r,o){return qs(1,arguments,this),this},e.fromTo=function(i,r,o,a){return qs(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ys(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new xe(i,r,fn(this,o),1),this},e.call=function(i,r,o){return An(this,xe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new xe(i,o,fn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ys(o).immediateRender=Ke(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Ys(a).immediateRender=Ke(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Me(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,x,v,M,b,w,S;if(this!==ae&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,M=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Me(h%m),h===l?(_=this._repeat,f=c):(b=Me(h/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Es(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,S=1),_!==b&&!this._lock){var D=w&&b&1,y=D===(w&&_&1);if(_<b&&(D=!D),a=D?0:h%c?c:h,this._lock=1,this.render(a||(S?0:Me(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;nf(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Wv(this,Me(a),Me(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!b&&(on(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var T=i<0?i:f;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,r,o||De&&gl(d)),f!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=T?-1e-8:ze);break}}d=g}}if(x&&!r&&(this.pause(),x.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=M,yo(this),this.render(i,r,o);this._onUpdate&&!r&&on(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&fi(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(on(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Yn(r)||(r=fn(this,r,i)),!(i instanceof ir)){if(Be(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Pe(i))return this.addLabel(i,r);if(fe(i))i=xe.delayedCall(0,i);else return this}return this!==i?An(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof xe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Pe(i)?this.removeLabel(i):fe(i)?this.killTweensOf(i):(i.parent===this&&Mo(this,i),i===this._recent&&(this._recent=this._last),Ii(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=fn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=xe.delayedCall(0,r||tr,o);return a.data="isPause",this._hasPause=1,An(this,a,fn(this,i))},e.removePause=function(i){var r=this._first;for(i=fn(this,i);r;)r._start===i&&r.data==="isPause"&&fi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ii!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=mn(i),l=this._first,c=Yn(r),h;l;)l instanceof xe?Fv(l._targets,a)&&(c?(!ii||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=fn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=xe.to(o,cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ze,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ts(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,cn({startAt:{time:fn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),yh(this,fn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),yh(this,fn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ze)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ii(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ii(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Rn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,An(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ts(o,o===ae&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ae._ts&&(Ou(ae,ao(i,ae)),Iu=rn.frame),rn.frame>=gh){gh+=an.autoSleep||120;var r=ae._first;if((!r||!r._ts)&&an.autoSleep&&rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||rn.sleep()}}},t}(ir);cn(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var ox=function(t,e,n,i,r,o,a){var l=new Je(this._pt,t,e,0,1,uf,null,r),c=0,h=0,u,f,d,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=er(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(ua)||[];u=ua.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ds(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ua.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ru.test(i)||p)&&(l.e=0),this._pt=l,l},vl=function(t,e,n,i,r,o,a,l,c,h){fe(i)&&(i=i(r||0,t,o));var u=t[e],f=n!=="get"?n:fe(u)?c?t[e.indexOf("set")||!fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=fe(u)?c?ux:cf:Ml,g;if(Pe(i)&&(~i.indexOf("random(")&&(i=er(i)),i.charAt(1)==="="&&(g=ds(f,i)+(Oe(f)||0),(g||g===0)&&(i=g))),!h||f!==i||ka)return!isNaN(f*i)&&i!==""?(g=new Je(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?dx:hf,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&dl(e,i),ox.call(this,t,e,f,i,d,l||an.stringFilter,c))},ax=function(t,e,n,i,r){if(fe(t)&&(t=js(t,r,e,n,i)),!Pn(t)||t.style&&t.nodeType||Be(t)||Au(t))return Pe(t)?js(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=js(t[a],r,e,n,i);return o},of=function(t,e,n,i,r,o){var a,l,c,h;if(sn[t]&&(a=new sn[t]).init(r,a.rawVars?e[t]:ax(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Je(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==us))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ii,ka,xl=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!cl,M=t.timeline,b,w,S,D,y,T,N,z,W,R,O,F,k;if(M&&(!f||!r)&&(r="none"),t._ease=Ni(r,ys.ease),t._yEase=u?ef(Ni(u===!0?r:u,ys.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(z=m[0]?Ui(m[0]).harness:0,F=z&&i[z.prop],b=oo(i,pl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Vr:Nv),_._lazy=0),o){if(fi(t._startAt=xe.set(m,cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ke(l),startAt:null,delay:0,onUpdate:c&&function(){return on(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!a&&!d)&&t._startAt.revert(Vr),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),S=cn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ke(l),immediateRender:a,stagger:0,parent:p},b),F&&(S[z.prop]=F),fi(t._startAt=xe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(Vr):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ze,ze);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ke(l)||l&&!g,w=0;w<m.length;w++){if(y=m[w],N=y._gsap||_l(m)[w]._gsap,t._ptLookup[w]=R={},Na[N.id]&&ci.length&&ro(),O=x===m?w:x.indexOf(y),z&&(W=new z).init(y,F||b,t,O,x)!==!1&&(t._pt=D=new Je(t._pt,y,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(X){R[X]=D}),W.priority&&(T=1)),!z||F)for(S in b)sn[S]&&(W=of(S,b,t,O,y,x))?W.priority&&(T=1):R[S]=D=vl.call(t,y,S,"get",b[S],O,x,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),v&&t._pt&&(ii=t,ae.killTweensOf(y,R,t.globalTime(e)),k=!t.parent,ii=0),t._pt&&l&&(Na[N.id]=1)}T&&ff(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,f&&e<=0&&M.render(Rn,!0,!0)},lx=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ka=1,t.vars[e]="+=0",xl(t,a),ka=0,l?Qs(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=_e(n)+Oe(u.e)),u.b&&(u.b=h.s+Oe(u.b))},cx=function(t,e){var n=t[0]?Ui(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ss({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},hx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Be(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},js=function(t,e,n,i,r){return fe(t)?t.call(e,n,i,r):Pe(t)&&~t.indexOf("random(")?er(t):t},af=ml+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lf={};Ze(af+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lf[s]=1});var xe=function(s){wu(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ys(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||ae,v=(Be(n)||Au(n)?Yn(n[0]):"length"in i)?[n]:mn(n),M,b,w,S,D,y,T,N;if(a._targets=v.length?_l(v):Qs("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Gr(c)||Gr(h)){if(i=a.vars,M=a.timeline=new He({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Bn(a),M._start=0,f||Gr(c)||Gr(h)){if(S=v.length,T=f&&Xu(f),Pn(f))for(D in f)~af.indexOf(D)&&(N||(N={}),N[D]=f[D]);for(b=0;b<S;b++)w=oo(i,lf),w.stagger=0,p&&(w.yoyoEase=p),N&&Ss(w,N),y=v[b],w.duration=+js(c,Bn(a),b,y,v),w.delay=(+js(h,Bn(a),b,y,v)||0)-a._delay,!f&&S===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),M.to(y,w,T?T(b,y,v):0),M._ease=Jt.none;M.duration()?c=h=0:a.timeline=0}else if(g){Ys(cn(M.vars.defaults,{ease:"none"})),M._ease=Ni(g.ease||i.ease||"none");var z=0,W,R,O;if(Be(g))g.forEach(function(F){return M.to(v,F,">")}),M.duration();else{w={};for(D in g)D==="ease"||D==="easeEach"||hx(D,g[D],w,g.easeEach);for(D in w)for(W=w[D].sort(function(F,k){return F.t-k.t}),z=0,b=0;b<W.length;b++)R=W[b],O={ease:R.e,duration:(R.t-(b?W[b-1].t:0))/100*c},O[D]=R.v,M.to(v,O,z),z+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!cl&&(ii=Bn(a),ae.killTweensOf(v),ii=0),An(x,Bn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Me(x._time)&&Ke(u)&&kv(Bn(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),m&&ku(Bn(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ze&&!h?l:i<ze?0:i,f,d,g,_,m,p,x,v,M;if(!c)Vv(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Me(u%_),u===l?(g=this._repeat,f=c):(m=Me(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,f=c-f),m=Es(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(v&&this._yEase&&nf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Me(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hu(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&u&&!r&&!m&&(on(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Oa(this,i,r,o),on(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&on(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Oa(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&fi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(on(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){nr||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||xl(this,c),h=this._ease(c/this._dur),lx(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(So(this,0),this.parent||Bu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!De),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ii&&ii.vars.overwrite!==!0)._first||Gs(this),this.parent&&o!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!r||r==="all")&&Bv(a,l))return r==="all"&&(this._pt=0),Gs(this);for(u=this._op=this._op||[],r!=="all"&&(Pe(r)&&(_={},Ze(r,function(x){return _[x]=1}),r=_),r=cx(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,g=f,d={}):(d=u[p]=u[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Mo(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Gs(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return qs(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return qs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return ae.killTweensOf(i,r,o)},t}(ir);cn(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ze("staggerTo,staggerFrom,staggerFromTo",function(s){xe[s]=function(){var t=new He,e=za.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ml=function(t,e,n){return t[e]=n},cf=function(t,e,n){return t[e](n)},ux=function(t,e,n,i){return t[e](i.fp,n)},fx=function(t,e,n){return t.setAttribute(e,n)},yl=function(t,e){return fe(t[e])?cf:hl(t[e])&&t.setAttribute?fx:Ml},hf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},dx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},uf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Sl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},px=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},mx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Mo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},_x=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ff=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Je=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||hf,this.d=l||this,this.set=c||Ml,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=_x,this.m=n,this.mt=r,this.tween=i},s}();Ze(ml+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return pl[s]=1});ln.TweenMax=ln.TweenLite=xe;ln.TimelineLite=ln.TimelineMax=He;ae=new He({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=tf;var Oi=[],Xr={},gx=[],Eh=0,vx=0,_a=function(t){return(Xr[t]||gx).map(function(e){return e()})},Ha=function(){var t=Date.now(),e=[];t-Eh>2&&(_a("matchMediaInit"),Oi.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=wn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),_a("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Eh=t,_a("matchMedia"))},df=function(){function s(e,n){this.selector=n&&Ba(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){fe(n)&&(r=i,i=n,n=fe);var o=this,a=function(){var c=re,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ba(r)),re=o,u=i.apply(o,arguments),fe(u)&&o._r.push(u),re=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===fe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof He?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Oi.length;o--;)Oi[o].id===this.id&&Oi.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),xx=function(){function s(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Pn(n)||(n={matches:n});var o=new df(0,r||this.scope),a=o.conditions={},l,c,h;re&&!o.selector&&(o.selector=re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wn.matchMedia(n[c]),l&&(Oi.indexOf(o)<0&&Oi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ha):l.addEventListener("change",Ha)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),lo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ju(i)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){Pe(t)&&(t=mn(t)[0]);var r=Ui(t||{}).get,o=n?zu:Fu;return n==="native"&&(n=""),t&&(e?o((sn[e]&&sn[e].get||r)(t,e,n,i)):function(a,l,c){return o((sn[a]&&sn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=mn(t),t.length>1){var i=t.map(function(h){return Qe.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=sn[e],a=Ui(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;us._pt=0,u.init(t,n?h+n:h,us,0,[t]),u.render(1,u),us._pt&&Sl(1,us)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Qe.to(t,cn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ni(t.ease,ys.ease)),vh(ys,t||{})},config:function(t){return vh(an,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!sn[a]&&!ln[a]&&Qs(e+" effect requires "+a+" plugin.")}),fa[e]=function(a,l,c){return n(mn(a),cn(l||{},r),c)},o&&(He.prototype[e]=function(a,l,c){return this.add(fa[e](a,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Ni(e)},parseEase:function(t,e){return arguments.length?Ni(t,e):Jt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new He(t),i,r;for(n.smoothChildTiming=Ke(t.smoothChildTiming),ae.remove(n),n._dp=0,n._time=n._tTime=ae._time,i=ae._first;i;)r=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=r;return An(ae,n,0),n},context:function(t,e){return t?new df(t,e):re},matchMedia:function(t){return new xx(t)},matchMediaRefresh:function(){return Oi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ha()},addEventListener:function(t,e){var n=Xr[t]||(Xr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Jv,wrapYoyo:$v,distribute:Xu,random:qu,snap:Yu,normalize:Zv,getUnit:Oe,clamp:Yv,splitColor:$u,toArray:mn,selector:Ba,mapRange:Ku,pipe:jv,unitize:Kv,interpolate:Qv,shuffle:Wu},install:Du,effects:fa,ticker:rn,updateRoot:He.updateRoot,plugins:sn,globalTimeline:ae,core:{PropTween:Je,globals:Uu,Tween:xe,Timeline:He,Animation:ir,getCache:Ui,_removeLinkedListItem:Mo,reverting:function(){return De},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return cl=t}}};Ze("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return lo[s]=xe[s]});rn.add(He.updateRoot);us=lo.to({},{duration:0});var Mx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},yx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Mx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ga=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Pe(r)&&(l={},Ze(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}yx(a,r)}}}},Qe=lo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ga("roundProps",Ga),ga("modifiers"),ga("snap",Yu))||lo;xe.version=He.version=Qe.version="3.13.0";Lu=1;ul()&&ws();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Th,si,ps,El,Ci,wh,Tl,Sx=function(){return typeof window<"u"},qn={},Ti=180/Math.PI,ms=Math.PI/180,os=Math.atan2,bh=1e8,wl=/([A-Z])/g,Ex=/(left|right|width|margin|padding|x)/i,Tx=/[\s,\(]\S/,Cn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Va=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ax=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Cx=function(t,e,n){return t.style[e]=n},Rx=function(t,e,n){return t.style.setProperty(e,n)},Px=function(t,e,n){return t._gsap[e]=n},Lx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Dx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Ux=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ce="transform",$e=ce+"Origin",Ix=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in qn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Cn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Gn(i,a)}):this.tfm[t]=o.x?o[t]:Gn(i,t),t===$e&&(this.tfm.zOrigin=o.zOrigin);else return Cn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ce)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($e,e,"")),t=ce}(r||e)&&this.props.push(t,e,r[t])},_f=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(wl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Tl(),(!r||!r.isStart)&&!n[ce]&&(_f(n),i.zOrigin&&n[$e]&&(n[$e]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gf=function(t,e){var n={target:t,props:[],revert:Nx,save:Ix};return t._gsap||Qe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},vf,Wa=function(t,e){var n=si.createElementNS?si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):si.createElement(t);return n&&n.style?n:si.createElement(t)},_n=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(wl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,bs(e)||e,1)||""},Ah="O,Moz,ms,Ms,Webkit".split(","),bs=function(t,e,n){var i=e||Ci,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ah[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Ah[o]:"")+t},Xa=function(){Sx()&&window.document&&(Th=window,si=Th.document,ps=si.documentElement,Ci=Wa("div")||{style:{}},Wa("div"),ce=bs(ce),$e=ce+"Origin",Ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vf=!!bs("perspective"),Tl=Qe.core.reverting,El=1)},Ch=function(t){var e=t.ownerSVGElement,n=Wa("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ps.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ps.removeChild(n),r},Rh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xf=function(t){var e,n;try{e=t.getBBox()}catch{e=Ch(t),n=1}return e&&(e.width||e.height)||n||(e=Ch(t)),e&&!e.width&&!e.x&&!e.y?{x:+Rh(t,["x","cx","x1"])||0,y:+Rh(t,["y","cy","y1"])||0,width:0,height:0}:e},Mf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xf(t))},Bi=function(t,e){if(e){var n=t.style,i;e in qn&&e!==$e&&(e=ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(wl,"-$1").toLowerCase())):n.removeAttribute(e)}},ri=function(t,e,n,i,r,o){var a=new Je(t._pt,e,n,0,1,o?mf:pf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Ph={deg:1,rad:1,turn:1},Ox={grid:1,flex:1},di=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ci.style,l=Ex.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!r||Ph[i]||Ph[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),p=t.getCTM&&Mf(t),(d||o==="%")&&(qn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],_e(d?r/g*u:r/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===si||!_.appendChild)&&(_=si.body),m=_._gsap,m&&d&&m.width&&l&&m.time===rn.time&&!m.uncache)return _e(r/m.width*u);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:Bi(t,e)}else(d||o==="%")&&!Ox[_n(_,"display")]&&(a.position=_n(t,"position")),_===t&&(a.position="static"),_.appendChild(Ci),g=Ci[h],_.removeChild(Ci),a.position="absolute";return l&&d&&(m=Ui(_),m.time=rn.time,m.width=_[h]),_e(f?g*r/u:g&&r?u/g*r:0)},Gn=function(t,e,n,i){var r;return El||Xa(),e in Cn&&e!=="transform"&&(e=Cn[e],~e.indexOf(",")&&(e=e.split(",")[0])),qn[e]&&e!=="transform"?(r=rr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ho(_n(t,$e))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=co[e]&&co[e](t,e,n)||_n(t,e)||Nu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?di(t,e,r,n)+n:r},Fx=function(t,e,n,i){if(!n||n==="none"){var r=bs(e,t,1),o=r&&_n(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var a=new Je(this._pt,t.style,e,0,1,uf),l=0,c=0,h,u,f,d,g,_,m,p,x,v,M,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_n(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=_n(t,e)||i,_?t.style[e]=_:Bi(t,e)),h=[n,i],tf(h),n=h[0],i=h[1],f=n.match(hs)||[],b=i.match(hs)||[],b.length){for(;u=hs.exec(i);)m=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=ds(d,m)+M),p=parseFloat(m),v=m.substr((p+"").length),l=hs.lastIndex-v.length,v||(v=v||an.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=di(t,e,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?mf:pf;return Ru.test(i)&&(a.e=0),this._pt=a,a},Lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Lh[n]||n,e[1]=Lh[i]||i,e.join(" ")},Bx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],qn[a]&&(l=1,a=a==="transformOrigin"?$e:ce),Bi(n,a);l&&(Bi(n,ce),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rr(n,1),o.uncache=1,_f(i)))}},co={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Je(t._pt,e,n,0,0,Bx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},sr=[1,0,0,1,0,0],yf={},Sf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Dh=function(t){var e=_n(t,ce);return Sf(e)?sr:e.substr(7).match(Cu).map(_e)},bl=function(t,e){var n=t._gsap||Ui(t),i=t.style,r=Dh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?sr:r):(r===sr&&!t.offsetParent&&t!==ps&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ps.appendChild(t)),r=Dh(t),l?i.display=l:Bi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ps.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ya=function(t,e,n,i,r,o){var a=t._gsap,l=r||bl(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=e.split(" "),M=parseFloat(v[0])||0,b=parseFloat(v[1])||0,w,S,D,y;n?l!==sr&&(S=d*m-g*_)&&(D=M*(m/S)+b*(-_/S)+(_*x-m*p)/S,y=M*(-g/S)+b*(d/S)-(d*x-g*p)/S,M=D,b=y):(w=xf(t),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),b=w.y+(~(v[1]||v[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=M-c,x=b-h,a.xOffset=u+(p*d+x*_)-p,a.yOffset=f+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$e]="0px 0px",o&&(ri(o,a,"xOrigin",c,M),ri(o,a,"yOrigin",h,b),ri(o,a,"xOffset",u,a.xOffset),ri(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+b)},rr=function(t,e){var n=t._gsap||new rf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=_n(t,$e)||"0",h,u,f,d,g,_,m,p,x,v,M,b,w,S,D,y,T,N,z,W,R,O,F,k,X,K,J,et,ot,q,Q,ft;return h=u=f=_=m=p=x=v=M=0,d=g=1,n.svg=!!(t.getCTM&&Mf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ce]!=="none"?l[ce]:"")),i.scale=i.rotate=i.translate="none"),S=bl(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Ya(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,w=n.yOrigin||0,S!==sr&&(N=S[0],z=S[1],W=S[2],R=S[3],h=O=S[4],u=F=S[5],S.length===6?(d=Math.sqrt(N*N+z*z),g=Math.sqrt(R*R+W*W),_=N||z?os(z,N)*Ti:0,x=W||R?os(W,R)*Ti+_:0,x&&(g*=Math.abs(Math.cos(x*ms))),n.svg&&(h-=b-(b*N+w*W),u-=w-(b*z+w*R))):(ft=S[6],q=S[7],J=S[8],et=S[9],ot=S[10],Q=S[11],h=S[12],u=S[13],f=S[14],D=os(ft,ot),m=D*Ti,D&&(y=Math.cos(-D),T=Math.sin(-D),k=O*y+J*T,X=F*y+et*T,K=ft*y+ot*T,J=O*-T+J*y,et=F*-T+et*y,ot=ft*-T+ot*y,Q=q*-T+Q*y,O=k,F=X,ft=K),D=os(-W,ot),p=D*Ti,D&&(y=Math.cos(-D),T=Math.sin(-D),k=N*y-J*T,X=z*y-et*T,K=W*y-ot*T,Q=R*T+Q*y,N=k,z=X,W=K),D=os(z,N),_=D*Ti,D&&(y=Math.cos(D),T=Math.sin(D),k=N*y+z*T,X=O*y+F*T,z=z*y-N*T,F=F*y-O*T,N=k,O=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=_e(Math.sqrt(N*N+z*z+W*W)),g=_e(Math.sqrt(F*F+ft*ft)),D=os(O,F),x=Math.abs(D)>2e-4?D*Ti:0,M=Q?1/(Q<0?-Q:Q):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sf(_n(t,ce)),k&&t.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=_e(d),n.scaleY=_e(g),n.rotation=_e(_)+a,n.rotationX=_e(m)+a,n.rotationY=_e(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$e]=ho(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?kx:vf?Ef:Gx,n.uncache=0,n},ho=function(t){return(t=t.split(" "))[0]+" "+t[1]},va=function(t,e,n){var i=Oe(e);return _e(parseFloat(e)+parseFloat(di(t,"x",n+"px",i)))+i},Gx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ef(t,e)},yi="0deg",zs="0px",Si=") ",Ef=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",b=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==yi||h!==yi)){var w=parseFloat(h)*ms,S=Math.sin(w),D=Math.cos(w),y;w=parseFloat(u)*ms,y=Math.cos(w),o=va(x,o,S*y*-v),a=va(x,a,-Math.sin(w)*-v),l=va(x,l,D*y*-v+v)}m!==zs&&(M+="perspective("+m+Si),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(b||o!==zs||a!==zs||l!==zs)&&(M+=l!==zs||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Si),c!==yi&&(M+="rotate("+c+Si),h!==yi&&(M+="rotateY("+h+Si),u!==yi&&(M+="rotateX("+u+Si),(f!==yi||d!==yi)&&(M+="skew("+f+", "+d+Si),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Si),x.style[ce]=M||"translate(0, 0)"},kx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),b,w,S,D,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ms,c*=ms,b=Math.cos(l)*u,w=Math.sin(l)*u,S=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(h*=ms,y=Math.tan(c-h),y=Math.sqrt(1+y*y),S*=y,D*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=_e(b),w=_e(w),S=_e(S),D=_e(D)):(b=u,D=f,w=S=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=di(d,"x",o,"px"),M=di(d,"y",a,"px")),(g||_||m||p)&&(v=_e(v+g-(g*b+_*S)+m),M=_e(M+_-(g*w+_*D)+p)),(i||r)&&(y=d.getBBox(),v=_e(v+i/100*y.width),M=_e(M+r/100*y.height)),y="matrix("+b+","+w+","+S+","+D+","+v+","+M+")",d.setAttribute("transform",y),x&&(d.style[ce]=y)},Hx=function(t,e,n,i,r){var o=360,a=Pe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ti:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*bh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*bh)%o-~~(c/o)*o)),t._pt=f=new Je(t._pt,e,n,i,c,wx),f.e=h,f.u="deg",t._props.push(n),f},Uh=function(t,e){for(var n in e)t[n]=e[n];return t},Vx=function(t,e,n){var i=Uh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ce]=e,a=rr(n,1),Bi(n,ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ce],o[ce]=e,a=rr(n,1),o[ce]=c);for(l in qn)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=Oe(c),g=Oe(h),u=d!==g?di(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Je(t._pt,a,l,u,f-u,Va),t._pt.u=g||0,t._props.push(l));Uh(a,i)};Ze("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});co[t>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Gn(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Tf={name:"css",register:Xa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,x,v,M,b,w,S,D;El||Xa(),this.styles=this.styles||gf(t),D=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(sn[_]&&of(_,e,n,i,t,r)))){if(d=typeof h,g=co[_],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=er(h)),g)g(this,t,_,h,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",hi.lastIndex=0,hi.test(c)||(m=Oe(c),p=Oe(h)),p?m!==p&&(c=di(t,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Pe(c)&&~c.indexOf("random(")&&(c=er(c)),Oe(c+"")||c==="auto"||(c+=an.units[_]||Oe(Gn(t,_))||""),(c+"").charAt(1)==="="&&(c=Gn(t,_))):c=Gn(t,_),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Cn&&(_==="autoAlpha"&&(f===1&&Gn(t,"visibility")==="hidden"&&u&&(f=0),D.push("visibility",0,a.visibility),ri(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Cn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in qn,v){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=_n(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),M||(b=t._gsap,b.renderTransform&&!e.parseTransform||rr(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,M=this._pt=new Je(this._pt,a,ce,0,1,b.renderTransform,b,0,-1),M.dep=1),_==="scale")this._pt=new Je(this._pt,b,"scaleY",b.scaleY,(x?ds(b.scaleY,x+u):u)-b.scaleY||0,Va),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push($e,0,a[$e]),h=zx(h),b.svg?Ya(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&ri(this,b,"zOrigin",b.zOrigin,p),ri(this,a,_,ho(c),ho(h)));continue}else if(_==="svgOrigin"){Ya(t,h,1,w,0,this);continue}else if(_ in yf){Hx(this,b,_,f,x?ds(f,x+h):h);continue}else if(_==="smoothOrigin"){ri(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Vx(this,h,t);continue}}else _ in a||(_=bs(_)||_);if(v||(u||u===0)&&(f||f===0)&&!Tx.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=Oe(h)||(_ in an.units?an.units[_]:m),m!==p&&(f=di(t,_,c,p)),this._pt=new Je(this._pt,v?b:a,_,f,(x?ds(f,x+u):u)-f,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Ax:Va),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=bx);else if(_ in a)Fx.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,r);else if(_!=="parseTransform"){dl(_,h);continue}v||(_ in a?D.push(_,0,a[_]):typeof t[_]=="function"?D.push(_,2,t[_]()):D.push(_,1,c||t[_])),o.push(_)}}S&&ff(this)},render:function(t,e){if(e.tween._time||!Tl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Gn,aliases:Cn,getSetter:function(t,e,n){var i=Cn[e];return i&&i.indexOf(",")<0&&(e=i),e in qn&&e!==$e&&(t._gsap.x||Gn(t,"x"))?n&&wh===n?e==="scale"?Lx:Px:(wh=n||{})&&(e==="scale"?Dx:Ux):t.style&&!hl(t.style[e])?Cx:~e.indexOf("-")?Rx:yl(t,e)},core:{_removeProperty:Bi,_getMatrix:bl}};Qe.utils.checkPrefix=bs;Qe.core.getStyleSaver=gf;(function(s,t,e,n){var i=Ze(s+","+t+","+e,function(r){qn[r]=1});Ze(t,function(r){an.units[r]="deg",yf[r]=1}),Cn[i[13]]=s+","+t,Ze(n,function(r){var o=r.split(":");Cn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){an.units[s]="px"});Qe.registerPlugin(Tf);var wf=Qe.registerPlugin(Tf)||Qe;wf.core.Tween;class Wx{constructor(){this.scene=new N0,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.clock=new yu,this.wheelGroup=null,this.gauges=[],this.particles=null,this.compass={bearing:347,display:null},this.raycaster=new Mv,this.mouse=new $,this.dragControls={isDragging:!1,selectedObject:null,offset:new L},this.init()}init(){this.setupCamera(),this.setupRenderer(),this.setupPostProcessing(),this.setupControls(),this.setupLighting(),this.createEnvironment(),this.createHelm(),this.createGauges(),this.createParticles(),this.setupEventListeners(),this.hideLoadingScreen(),this.animate()}setupCamera(){this.camera=new Ye(65,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.8,4),this.camera.lookAt(0,1.2,0)}setupRenderer(){this.renderer=new fu({canvas:document.getElementById("canvas"),antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nh,this.renderer.toneMapping=Fh,this.renderer.toneMappingExposure=1.8,this.renderer.outputColorSpace=Ce}setupPostProcessing(){this.composer=new Av(this.renderer);const t=new Cv(this.scene,this.camera);this.composer.addPass(t);const e=new Ms(new $(window.innerWidth,window.innerHeight),.5,.4,.85);this.composer.addPass(e);const n={uniforms:{tDiffuse:{value:null},amount:{value:.8}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D tDiffuse;
                uniform float amount;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    float dist = distance(vUv, vec2(0.5, 0.5));
                    color.rgb *= smoothstep(0.8, 0.4, dist * amount);
                    gl_FragColor = color;
                }
            `},i=new Tu(n);this.composer.addPass(i)}setupControls(){this.controls=new Sv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=8,this.controls.maxPolarAngle=Math.PI*.85,this.controls.target.set(0,1.2,0)}setupLighting(){const t=new xv(16755336,1.2);this.scene.add(t);const e=new ch(16746564,2.5);e.position.set(-15,3,-10),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.left=-15,e.shadow.camera.right=15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,this.scene.add(e);const n=new ch(4482730,.4);n.position.set(5,10,5),this.scene.add(n);const i=new Fs(6750156,4,15);i.position.set(0,1.2,0),this.scene.add(i);const r=new la(6750156,1,10,Math.PI/4,.5);r.position.set(0,1.2,0),r.target.position.set(0,0,0),this.scene.add(r),this.scene.add(r.target);const o=new mv(16764057,4478344,1.2);this.scene.add(o);const a=new Fs(16755268,2.5,10);a.position.set(-4,1.5,-5),a.castShadow=!0,this.scene.add(a);const l=new Fs(16755268,2.5,10);l.position.set(4,1.5,-5),l.castShadow=!0,this.scene.add(l);const c=new Fs(13412966,1.5,6);c.position.set(-2,2.2,-1),this.scene.add(c);const h=new Fs(13412966,1.5,6);h.position.set(2,2.2,-1),this.scene.add(h),this.scene.fog=new tl(6697779,15,120);const u=new la(16766720,2,8,Math.PI/4,.5);u.position.set(-2,3,-6),u.target.position.set(-2,0,-6),this.scene.add(u),this.scene.add(u.target);const f=new la(16766720,1.5,6,Math.PI/4,.5);f.position.set(0,2,-4),f.target.position.set(0,0,-4),this.scene.add(f),this.scene.add(f.target)}createEnvironment(){const t=new Xe(200,32,32),e=new Fe({uniforms:{time:{value:0},topColor:{value:new Bt(661555)},horizonColor:{value:new Bt(16729122)},bottomColor:{value:new Bt(16746564)},sunGlow:{value:new Bt(16755302)}},vertexShader:`
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * viewMatrix * worldPosition;
                }
            `,fragmentShader:`
                uniform vec3 topColor;
                uniform vec3 horizonColor;
                uniform vec3 bottomColor;
                uniform vec3 sunGlow;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition).y;
                    vec3 color;
                    
                    // Create dramatic sunset gradient
                    if (h > 0.3) {
                        color = mix(topColor, topColor * 0.5, smoothstep(0.3, 1.0, h));
                    } else if (h > 0.0) {
                        color = mix(horizonColor, topColor, smoothstep(0.0, 0.3, h));
                    } else if (h > -0.1) {
                        color = mix(sunGlow, horizonColor, smoothstep(-0.1, 0.0, h));
                    } else {
                        color = mix(bottomColor, sunGlow, smoothstep(-0.3, -0.1, h));
                    }
                    
                    // Add sun glow at horizon
                    float sunIntensity = 1.0 - abs(h + 0.05) * 10.0;
                    sunIntensity = clamp(sunIntensity, 0.0, 1.0);
                    color += sunGlow * sunIntensity * 0.3;
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `,side:Ve}),n=new ct(t,e);this.scene.add(n);const i=new Le,r=new zt({color:1706501,roughness:.7,metalness:.05}),o=new Ae(16,.5,20),a=new ct(o,r);a.position.y=-.25,a.receiveShadow=!0,i.add(a);const l=[],c=16;for(let F=0;F<=c;F++){const k=F/c*Math.PI,X=Math.sin(k)*8,K=10+Math.cos(k)*8;l.push(new L(X,-.25,K))}new Bs(l);const h=new ol(new Xs([new $(-8,0),new $(0,8),new $(8,0),new $(0,-2)]),{depth:.5,bevelEnabled:!1}),u=new ct(h,r);u.rotation.x=-Math.PI/2,u.position.set(0,-.25,15),u.receiveShadow=!0,i.add(u);const f=new Zt(.15,.25,8,12),d=new ct(f,new zt({color:2759184,roughness:.9,metalness:.1}));d.rotation.x=-Math.PI/6,d.position.set(0,1,18),d.castShadow=!0,i.add(d);const g=new Zt(8,8,.5,16,1,!1,Math.PI,Math.PI),_=new ct(g,r);_.rotation.x=Math.PI/2,_.rotation.y=Math.PI/2,_.position.set(0,-.25,-10),_.receiveShadow=!0,i.add(_),this.scene.add(i);const m=new zt({color:656899,roughness:.9,metalness:.02});for(let F=-8;F<8;F+=.35){const k=new Ae(.3,.02,20),X=new ct(k,m);X.position.set(F,.01,0),X.receiveShadow=!0,this.scene.add(X)}const p=new zt({color:2757904,roughness:.8,metalness:.1}),x=new Ae(.3,1.2,20),v=new ct(x,p);v.position.set(-8,.6,0),v.castShadow=!0,this.scene.add(v);const M=new ct(x,p);M.position.set(8,.6,0),M.castShadow=!0,this.scene.add(M);const b=new Bs([new L(-8,.6,10),new L(-5,.6,16),new L(-1,.6,18)]),w=new io(b,20,.15,8,!1),S=new ct(w,p);S.castShadow=!0,this.scene.add(S);const D=new Bs([new L(8,.6,10),new L(5,.6,16),new L(1,.6,18)]),y=new io(D,20,.15,8,!1),T=new ct(y,p);T.castShadow=!0,this.scene.add(T);const N=new Le,z=new Xe(.8,12,8),W=new ct(z,new zt({color:9127187,roughness:.8,metalness:.1}));W.scale.set(1.2,.8,1.5),N.add(W);for(let F of[-.3,.3]){const k=new Xe(.1,8,8),X=new ct(k,new zt({color:16711680,emissive:3342336,emissiveIntensity:.5}));X.position.set(F,.2,.6),N.add(X)}const R=new Zt(.4,.6,2,12),O=new ct(R,new zt({color:9127187,roughness:.8,metalness:.1}));O.position.set(0,-1,-.5),O.rotation.x=Math.PI/6,N.add(O),N.position.set(0,2,19),N.rotation.y=Math.PI,N.castShadow=!0,this.scene.add(N),this.createCannonBattery(),this.createTreasure(),this.createShipBackground(),this.createSailingWarship()}createCannonBattery(){const t=new zt({color:2763306,roughness:.6,metalness:.8}),e=new zt({color:13412966,roughness:.3,metalness:.9});for(let n=0;n<4;n++){const i=new Le,r=new Zt(.4,.5,6,16),o=new ct(r,t);o.rotation.z=Math.PI/2,o.position.x=-2,i.add(o);const a=new Zt(.45,.4,.3,16),l=new ct(a,e);l.rotation.z=Math.PI/2,l.position.x=-4.8,i.add(l);const c=new Xe(.6,12,12),h=new ct(c,t);h.position.x=1,i.add(h);for(let u of[-.8,.8]){const f=new Zt(.6,.6,.2,12),d=new ct(f,new zt({color:4865064,roughness:.9,metalness:.1}));d.rotation.x=Math.PI/2,d.position.set(.5,u,-.3),i.add(d)}i.position.set(-7,.8,-6+n*4),i.rotation.y=-Math.PI/12,i.castShadow=!0,this.scene.add(i)}for(let n=0;n<4;n++){const i=new Le,r=new Zt(.4,.5,6,16),o=new ct(r,t);o.rotation.z=-Math.PI/2,o.position.x=2,i.add(o);const a=new Zt(.45,.4,.3,16),l=new ct(a,e);l.rotation.z=-Math.PI/2,l.position.x=4.8,i.add(l);const c=new Xe(.6,12,12),h=new ct(c,t);h.position.x=-1,i.add(h);for(let u of[-.8,.8]){const f=new Zt(.6,.6,.2,12),d=new ct(f,new zt({color:4865064,roughness:.9,metalness:.1}));d.rotation.x=Math.PI/2,d.position.set(-.5,u,-.3),i.add(d)}i.position.set(7,.8,-6+n*4),i.rotation.y=Math.PI/12,i.castShadow=!0,this.scene.add(i)}for(let n of[-2,2]){const i=new Le,r=new Zt(.25,.3,4,12),o=new ct(r,t);o.rotation.x=-Math.PI/2,o.position.z=2,i.add(o);const a=new Zt(.3,.25,.2,12),l=new ct(a,e);l.rotation.x=-Math.PI/2,l.position.z=3.8,i.add(l);const c=new Xe(.4,10,10),h=new ct(c,t);h.position.z=-.5,i.add(h),i.position.set(n,1.2,14),i.castShadow=!0,this.scene.add(i)}}createHelm(){this.wheelGroup=new Le;const t=new Zt(.15,.2,1.5,8),e=new zt({color:657413,roughness:.6,metalness:.1}),n=new ct(t,e);n.position.y=.75,n.castShadow=!0,this.scene.add(n);const i=new Ai(1.5,.15,12,48),r=new zt({color:2757904,roughness:.8,metalness:.05}),o=new ct(i,r);o.castShadow=!0,this.wheelGroup.add(o);for(let S=0;S<24;S++){const D=new Xe(.04,8,8),y=new zt({color:13412966,roughness:.4,metalness:.8}),T=new ct(D,y),N=S/24*Math.PI*2;T.position.set(Math.cos(N)*1.5,Math.sin(N)*1.5,.12),this.wheelGroup.add(T)}const a=new zt({color:1707784,roughness:.85,metalness:.02});for(let S=0;S<12;S++){const D=new Ae(.1,.15,2.8),y=new ct(D,a);y.rotation.z=S*Math.PI*2/12,y.castShadow=!0,this.wheelGroup.add(y);const T=new Zt(.08,.08,.3,8),N=new zt({color:2759178,roughness:.95,metalness:0}),z=new ct(T,N);z.position.set(Math.cos(S*Math.PI*2/12)*1.3,Math.sin(S*Math.PI*2/12)*1.3,0),z.rotation.z=S*Math.PI*2/12,this.wheelGroup.add(z)}const l=new Zt(.35,.35,.25,16),c=new zt({color:13412966,roughness:.3,metalness:.9}),h=new ct(l,c);h.rotation.x=Math.PI/2,this.wheelGroup.add(h);const u=new Zt(.28,.28,.05,32),f=new zt({color:65484,emissive:65484,emissiveIntensity:2,roughness:.2,metalness:.8});this.compass.mesh=new ct(u,f),this.compass.mesh.rotation.x=Math.PI/2,this.wheelGroup.add(this.compass.mesh);const d=new Ai(.3,.02,8,32),g=new zt({color:65484,emissive:65484,emissiveIntensity:1,roughness:.2,metalness:.8}),_=new ct(d,g);_.rotation.x=Math.PI/2,this.wheelGroup.add(_);const m=new zt({color:9139029,roughness:1,metalness:0});for(let S=0;S<4;S++){const D=new Ai(.15,.02,4,12),y=new ct(D,m),T=S*Math.PI*2/4+Math.PI/8;y.position.set(Math.cos(T)*.8,Math.sin(T)*.8,0),y.rotation.z=T,this.wheelGroup.add(y)}const p=new zt({color:1707784,roughness:.9,metalness:0}),x=new Le,v=new Ae(.02,.1,.01),M=new ct(v,p);x.add(M);const b=new Ae(.06,.02,.01),w=new ct(b,p);w.position.y=.03,x.add(w),x.position.set(1.45,0,.1),x.scale.set(.5,.5,.5),this.wheelGroup.add(x),this.wheelGroup.position.set(0,1.2,0),this.wheelGroup.rotation.x=-Math.PI/8,this.wheelGroup.rotation.y=0,this.scene.add(this.wheelGroup)}createGauges(){[{name:"KNOTS",pos:{x:-2.5,y:2.5,z:-1}},{name:"DEPTH",pos:{x:0,y:2.7,z:-1.2}},{name:"DRIFT",pos:{x:2.5,y:2.5,z:-1}}].forEach((e,n)=>{const i=new Le,r=new Zt(.18,.2,.15,16),o=new zt({color:13216097,roughness:.4,metalness:.6}),a=new ct(r,o);a.rotation.x=Math.PI/2,a.castShadow=!0,i.add(a);const l=new il(.16,32),c=new zt({color:1710618,roughness:.2,metalness:.1}),h=new ct(l,c);h.position.z=.08,i.add(h);const u=new Xe(.17,32,16,0,Math.PI*2,0,Math.PI/2),f=new oa({color:16777215,metalness:0,roughness:0,transmission:.95,thickness:.5,transparent:!0,clearcoat:1,clearcoatRoughness:0}),d=new ct(u,f);d.rotation.x=-Math.PI/2,d.position.z=.08,i.add(d);const g=new Ae(.015,.14,.005),_=new zt({color:16711680,emissive:16711680,emissiveIntensity:.5,roughness:.3,metalness:.7}),m=new ct(g,_);m.position.z=.09,m.geometry.translate(0,.07,0),i.add(m),i.position.set(e.pos.x,e.pos.y,e.pos.z),i.lookAt(0,1.8,4),i.userData={isDraggable:!0,name:e.name,originalPosition:{x:e.pos.x,y:e.pos.y,z:e.pos.z}},this.gauges.push({group:i,needle:m,name:e.name}),this.scene.add(i)})}createParticles(){const t=new Se,e=5e3,n=new Float32Array(e*3),i=new Float32Array(e);for(let x=0;x<e;x++){const v=Math.random()*Math.PI*2,M=Math.acos(Math.random()*2-1),b=150+Math.random()*50;n[x*3]=b*Math.sin(M)*Math.cos(v),n[x*3+1]=b*Math.cos(M),n[x*3+2]=b*Math.sin(M)*Math.sin(v),i[x]=Math.random()*.8+.2}t.setAttribute("position",new qe(n,3)),t.setAttribute("size",new qe(i,1));const r=new Fe({uniforms:{time:{value:0}},vertexShader:`
                attribute float size;
                varying float vSize;
                uniform float time;
                void main() {
                    vSize = size;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * 5.0 * (200.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                varying float vSize;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    float intensity = 1.0 - dist * 2.0;
                    intensity = pow(intensity, 3.0);
                    vec3 color = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 1.0, 0.9), vSize);
                    gl_FragColor = vec4(color * intensity, intensity);
                }
            `,transparent:!0,blending:Yr,depthWrite:!1}),o=new Qc(t,r);this.scene.add(o);const a=new Se,l=500,c=new Float32Array(l*3),h=new Float32Array(l);for(let x=0;x<l;x++)c[x*3]=(Math.random()-.5)*40,c[x*3+1]=Math.random()*5,c[x*3+2]=(Math.random()-.5)*40,h[x]=Math.random();a.setAttribute("position",new qe(c,3)),a.setAttribute("scale",new qe(h,1));const u=new Fe({uniforms:{time:{value:0}},vertexShader:`
                attribute float scale;
                varying float vScale;
                uniform float time;
                void main() {
                    vScale = scale;
                    vec3 pos = position;
                    pos.x += sin(time * 0.5 + position.y) * 0.3;
                    pos.y += sin(time * 0.3) * 0.1;
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = scale * 80.0 / -mvPosition.z;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                varying float vScale;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    float opacity = (1.0 - dist * 2.0) * vScale * 0.15;
                    // Golden mist color
                    gl_FragColor = vec4(1.0, 0.7, 0.4, opacity);
                }
            `,transparent:!0,blending:Ri,depthWrite:!1});this.particles=new Qc(a,u),this.scene.add(this.particles);const f=new Xe(5,32,32),d=new zt({color:16777164,emissive:16777130,emissiveIntensity:.3,roughness:.8,metalness:0}),g=new ct(f,d);g.position.set(-30,40,-50),this.scene.add(g);const _=new Xe(7,32,32),m=new go({color:16777164,transparent:!0,opacity:.3}),p=new ct(_,m);p.position.copy(g.position),this.scene.add(p)}createTreasure(){const t=new zt({color:16766720,metalness:.9,roughness:.2}),e=new zt({color:13369344,metalness:.4,roughness:.1,emissive:3342336,emissiveIntensity:.2}),n=new zt({color:16777215,metalness:.1,roughness:.05});for(let z=0;z<15;z++){const W=new Zt(.08,.08,.02,16),R=new ct(W,t);R.position.set(-3+Math.random()*6,.02+Math.random()*.02,-8+Math.random()*4),R.rotation.x=Math.PI/2+Math.random()*.2,R.rotation.z=Math.random()*Math.PI,R.castShadow=!0,this.scene.add(R)}const i=new Le,r=new Zt(.15,.1,.3,12),o=new ct(r,t);i.add(o);for(let z=0;z<6;z++){const W=new al(.03,0),R=new ct(W,e),O=z/6*Math.PI*2;R.position.set(Math.cos(O)*.12,.05,Math.sin(O)*.12),i.add(R)}i.position.set(-2,.15,-6),i.rotation.z=.3,this.scene.add(i),new Bs([new L(2,.3,-7),new L(2.5,.2,-6.8),new L(2.3,.1,-6.5),new L(2,.05,-6.7)]).getPoints(20).forEach((z,W)=>{const R=new Xe(.02+Math.random()*.01,8,8),O=new ct(R,n);O.position.copy(z),this.scene.add(O)});const c=new zt({color:13412966,metalness:.7,roughness:.4}),h=new Le,u=new Ai(.3,.02,8,12,Math.PI/3),f=new ct(u,c);h.add(f);const d=new Ae(.02,.4,.02),g=new ct(d,c);g.position.y=-.2,h.add(g),h.position.set(3,.1,-5),h.rotation.z=-.5,this.scene.add(h);const _=new Le,m=new sl(.03,.5,4),p=new zt({color:13421772,metalness:.9,roughness:.2}),x=new ct(m,p);x.position.y=.25,_.add(x);const v=new Zt(.04,.04,.2,8),M=new zt({color:2759178,roughness:.8}),b=new ct(v,M);b.position.y=-.1,_.add(b);const w=new Xe(.05,8,8),S=new ct(w,e);S.position.y=-.2,_.add(S),_.position.set(0,.2,-4),_.rotation.z=Math.PI/4,_.rotation.x=-Math.PI/2,this.scene.add(_);const D=new ti(.6,.4),y=new F0(this.createMapTexture()),T=new zt({map:y,roughness:.9,metalness:0}),N=new ct(D,T);N.position.set(-1.5,.02,-5),N.rotation.x=-Math.PI/2,N.rotation.z=.2,this.scene.add(N)}createMapTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");return e.fillStyle="#f4e8d0",e.fillRect(0,0,256,256),e.fillStyle="rgba(139, 90, 43, 0.2)",e.beginPath(),e.arc(200,50,30,0,Math.PI*2),e.fill(),e.strokeStyle="#5a3a1a",e.lineWidth=2,e.beginPath(),e.moveTo(50,100),e.lineTo(100,80),e.lineTo(150,120),e.lineTo(200,100),e.stroke(),e.strokeStyle="#cc0000",e.lineWidth=3,e.beginPath(),e.moveTo(140,140),e.lineTo(160,160),e.moveTo(160,140),e.lineTo(140,160),e.stroke(),t}createShipBackground(){const t=new zt({color:2759184,roughness:.9,metalness:.1}),e=new Zt(.3,.4,15,12),n=new ct(e,t);n.position.set(-5,7.5,-10),n.castShadow=!0,this.scene.add(n);const i=new Zt(.2,.2,8,8),r=new ct(i,t);r.position.set(-5,10,-10),r.rotation.z=Math.PI/2,this.scene.add(r);const o=new zt({color:9139029,roughness:1,metalness:0});for(let _=0;_<4;_++){const m=new Zt(.02,.02,12,6),p=new ct(m,o);p.position.set(-5+(_-1.5)*.5,6,-10),p.rotation.z=(_-1.5)*.2,p.castShadow=!0,this.scene.add(p)}const a=new Le,l=new zt({color:3355443,roughness:.6,metalness:.7}),c=new Zt(.15,.25,1.5,12),h=new ct(c,l);h.rotation.z=Math.PI/2,a.add(h);for(let _ of[-.5,.5]){const m=new Zt(.3,.3,.1,16),p=new ct(m,t);p.position.set(_,-.2,0),p.rotation.x=Math.PI/2,a.add(p)}a.position.set(5,.5,-8),a.rotation.y=-Math.PI/6,this.scene.add(a);const u=new zt({color:3811616,roughness:.8,metalness:.1});for(let _=-12;_<-2;_+=2){const m=new Zt(.05,.05,1.2,8),p=new ct(m,u);p.position.set(-7,.6,_),this.scene.add(p);const x=new ct(m,u);x.position.set(7,.6,_),this.scene.add(x)}const f=new zt({color:4865064,roughness:.85,metalness:.05});for(let _=0;_<3;_++)for(let m=0;m<2-_;m++){const p=new Zt(.35,.35,.7,12),x=new ct(p,f);x.position.set(6-m*.7,.35+_*.7,-10),x.castShadow=!0,this.scene.add(x)}const d=new Le;for(let _=0;_<5;_++){const m=new Ai(.3-_*.02,.04,6,20),p=new ct(m,o);p.position.y=_*.08,p.rotation.x=Math.PI/2,d.add(p)}d.position.set(-4,.1,-9),this.scene.add(d);const g=new zt({color:6710835,roughness:.5,metalness:.6});for(let _ of[-4,4]){const m=new Zt(.04,.04,2,8),p=new ct(m,g);p.position.set(_,1,-5),this.scene.add(p);const x=new Ae(.3,.4,.3),v=new ct(x,g);v.position.set(_,2,-5),this.scene.add(v);const M=new oa({color:16755268,metalness:0,roughness:0,transmission:.5,thickness:.1,emissive:16755268,emissiveIntensity:.5}),b=new Ae(.25,.35,.25),w=new ct(b,M);w.position.copy(v.position),this.scene.add(w)}}setupEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});let t=0;this.renderer.domElement.addEventListener("mousedown",e=>{e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.gauges.map(r=>r.group),i=this.raycaster.intersectObjects(n,!0);if(i.length>0){this.controls.enabled=!1,this.dragControls.isDragging=!0,this.dragControls.selectedObject=i[0].object.parent;const r=i[0].point;this.dragControls.offset.copy(r).sub(this.dragControls.selectedObject.position)}else this.dragControls.isDragging=!1,this.dragControls.wheelDragging=!0,this.dragControls.lastMouseX=e.clientX}),window.addEventListener("mouseup",()=>{this.controls.enabled=!0,this.dragControls.isDragging=!1,this.dragControls.wheelDragging=!1,this.dragControls.selectedObject=null}),window.addEventListener("mousemove",e=>{if(this.dragControls.isDragging&&this.dragControls.selectedObject){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.dragControls.selectedObject.position.distanceTo(this.camera.position),i=new L;i.set(this.mouse.x,this.mouse.y,.5),i.unproject(this.camera),i.sub(this.camera.position).normalize(),i.multiplyScalar(n),i.add(this.camera.position),this.dragControls.selectedObject.position.copy(i.sub(this.dragControls.offset)),this.dragControls.selectedObject.lookAt(this.camera.position)}else if(this.dragControls.wheelDragging&&this.wheelGroup){const n=e.clientX-this.dragControls.lastMouseX;t+=n*.01,wf.to(this.wheelGroup.rotation,{z:t,duration:.3,ease:"power2.out"}),this.dragControls.lastMouseX=e.clientX}})}hideLoadingScreen(){setTimeout(()=>{document.querySelector(".loading-screen").classList.add("hidden")},1e3)}updateCompass(){this.compass.bearing+=(Math.random()-.5)*.5,this.compass.bearing>=360&&(this.compass.bearing-=360),this.compass.bearing<0&&(this.compass.bearing+=360);const t=this.compass.bearing<22.5||this.compass.bearing>=337.5?"N":this.compass.bearing<67.5?"NE":this.compass.bearing<112.5?"E":this.compass.bearing<157.5?"SE":this.compass.bearing<202.5?"S":this.compass.bearing<247.5?"SW":this.compass.bearing<292.5?"W":"NW";document.querySelector(".compass-value").textContent=`${t} ${Math.floor(this.compass.bearing)}°`}animate(){requestAnimationFrame(()=>this.animate()),this.clock.getDelta();const t=this.clock.getElapsedTime();this.scene.rotation.z=Math.sin(t*.5)*.02,this.scene.rotation.x=Math.cos(t*.3)*.01,this.wheelGroup&&(this.wheelGroup.rotation.z+=Math.sin(t*.8)*5e-4),this.gauges.forEach((i,r)=>{i.needle.rotation.z=Math.sin(t*(1+r*.3))*Math.PI/3}),this.compass.mesh&&(this.compass.mesh.material.emissiveIntensity=2+Math.sin(t*2)*.5),this.particles&&(this.particles.material.uniforms.time.value=t,this.particles.rotation.y+=1e-4);const e=2.5+Math.sin(t*8)*.3+Math.sin(t*13)*.2,n=2.5+Math.sin(t*7+1)*.3+Math.sin(t*11)*.2;this.scene.traverse(i=>{i.type==="PointLight"&&(i.position.x===-4&&i.position.z===-5?i.intensity=e:i.position.x===4&&i.position.z===-5&&(i.intensity=n))}),Math.random()<.02&&this.updateCompass(),this.controls.update(),this.composer.render()}createSailingWarship(){const t=new zt({color:2759184,roughness:.9,metalness:.1}),e=new zt({color:16315622,roughness:.8,metalness:.05,transparent:!0,opacity:.9}),n=new zt({color:9139029,roughness:1,metalness:0}),i=new Zt(.6,.8,35,16),r=new ct(i,t);r.position.set(0,17.5,-3),r.castShadow=!0,this.scene.add(r);const o=new Zt(.5,.7,30,16),a=new ct(o,t);a.position.set(0,15,8),a.castShadow=!0,this.scene.add(a);const l=new Zt(.4,.6,25,16),c=new ct(l,t);c.position.set(0,12.5,-12),c.castShadow=!0,this.scene.add(c);const h=new ti(20,25),u=new ct(h,e);u.position.set(0,20,-2),u.rotation.y=Math.PI/16,this.scene.add(u);const f=new ti(16,20),d=new ct(f,e);d.position.set(0,18,9),d.rotation.y=-Math.PI/20,this.scene.add(d);const g=new ti(15,12),_=new ct(g,e);_.position.set(0,30,-2),_.rotation.y=Math.PI/12,this.scene.add(_);for(let R=0;R<3;R++){const O=new Xs;O.moveTo(0,0),O.lineTo(8,0),O.lineTo(0,12-R*2),O.lineTo(0,0);const F=new no(O),k=new ct(F,e);k.position.set(0,10+R*3,15+R*2),k.rotation.y=Math.PI/2,k.rotation.x=Math.PI/8,this.scene.add(k)}const m=new Xs;m.moveTo(0,0),m.lineTo(12,0),m.lineTo(0,18),m.lineTo(0,0);const p=new no(m),x=new ct(p,e);x.position.set(0,15,-11),x.rotation.y=Math.PI/2,this.scene.add(x);const v=new Zt(2,1.5,1,12),M=new ct(v,t);M.position.set(0,28,-3),this.scene.add(M),[{pos:[0,32,-2],length:22},{pos:[0,27,-2],length:25},{pos:[0,22,-2],length:24},{pos:[0,25,9],length:18},{pos:[0,20,9],length:20}].forEach(R=>{const O=new Zt(.15,.15,R.length,8),F=new ct(O,t);F.position.set(...R.pos),F.rotation.z=Math.PI/2,this.scene.add(F)}),[{from:[0,35,-3],to:[-12,0,-15]},{from:[0,35,-3],to:[12,0,-15]},{from:[0,35,-3],to:[-12,0,8]},{from:[0,35,-3],to:[12,0,8]},{from:[0,30,8],to:[-10,0,18]},{from:[0,30,8],to:[10,0,18]},{from:[0,30,8],to:[-8,0,-2]},{from:[0,30,8],to:[8,0,-2]},{from:[0,25,-12],to:[-8,0,-20]},{from:[0,25,-12],to:[8,0,-20]}].forEach(R=>{const O=Math.sqrt(Math.pow(R.to[0]-R.from[0],2)+Math.pow(R.to[1]-R.from[1],2)+Math.pow(R.to[2]-R.from[2],2)),F=new Zt(.02,.02,O,6),k=new ct(F,n);k.position.set((R.from[0]+R.to[0])/2,(R.from[1]+R.to[1])/2,(R.from[2]+R.to[2])/2);const X=new L(R.to[0]-R.from[0],R.to[1]-R.from[1],R.to[2]-R.from[2]).normalize();k.lookAt(k.position.x+X.x,k.position.y+X.y,k.position.z+X.z),k.rotateX(Math.PI/2),this.scene.add(k)});const S=new Ae(12,1,8),D=new ct(S,new zt({color:3811616,roughness:.8,metalness:.1}));D.position.set(0,.5,-8),D.receiveShadow=!0,this.scene.add(D);const y=-2,T=new Ae(18,3,25),N=new ct(T,new zt({color:2757904,roughness:.8,metalness:.1}));N.position.set(0,y,0),this.scene.add(N);const z=new Ae(8,4,6),W=new ct(z,new zt({color:4865064,roughness:.7,metalness:.1}));W.position.set(0,2,-15),this.scene.add(W);for(let R of[-2,2]){const O=new ti(1.5,1),F=new ct(O,new oa({color:16777164,metalness:0,roughness:0,transmission:.8,thickness:.1,emissive:16777130,emissiveIntensity:.3}));F.position.set(R,2,-18.1),this.scene.add(F)}}}new Wx;
