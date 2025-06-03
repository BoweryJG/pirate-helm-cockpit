(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="160",qi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kf=0,$l=1,Jf=2,Qh=1,tu=2,Gn=3,gi=0,je=1,Wn=2,qn=0,ui=1,Ss=2,Ql=3,tc=4,$f=5,Li=100,Qf=101,td=102,ec=103,nc=104,ed=200,nd=201,id=202,sd=203,za=204,Ba=205,rd=206,od=207,ad=208,ld=209,cd=210,hd=211,ud=212,fd=213,dd=214,pd=0,md=1,_d=2,uo=3,gd=4,vd=5,xd=6,Md=7,eu=0,yd=1,Sd=2,fi=0,Ed=1,Td=2,wd=3,nu=4,bd=5,Ad=6,iu=300,Cs=301,Rs=302,Ga=303,ka=304,Do=306,Ha=1e3,En=1001,Va=1002,Ye=1003,ic=1004,Xo=1005,mn=1006,Cd=1007,cr=1008,di=1009,Rd=1010,Pd=1011,pl=1012,su=1013,oi=1014,ai=1015,jn=1016,ru=1017,ou=1018,Ii=1020,Ld=1021,Tn=1023,Dd=1024,Ud=1025,Ni=1026,Ps=1027,Id=1028,au=1029,Nd=1030,lu=1031,cu=1033,Yo=33776,qo=33777,jo=33778,Zo=33779,sc=35840,rc=35841,oc=35842,ac=35843,hu=36196,lc=37492,cc=37496,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,_c=37814,gc=37815,vc=37816,xc=37817,Mc=37818,yc=37819,Sc=37820,Ec=37821,Ko=36492,Tc=36494,wc=36495,Od=36283,bc=36284,Ac=36285,Cc=36286,uu=3e3,Oi=3001,Fd=3200,zd=3201,fu=0,Bd=1,gn="",De="srgb",Kn="srgb-linear",ml="display-p3",Uo="display-p3-linear",fo="linear",se="srgb",po="rec709",mo="p3",Zi=7680,Rc=519,Gd=512,kd=513,Hd=514,du=515,Vd=516,Wd=517,Xd=518,Yd=519,Wa=35044,Pc="300 es",Xa=1035,Yn=2e3,_o=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oo=Math.PI/180,go=180/Math.PI;function Zn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ue(r,t,e){return Math.max(t,Math.min(e,r))}function qd(r,t){return(r%t+t)%t}function Jo(r,t,e){return(1-e)*r+e*t}function Lc(r){return(r&r-1)===0&&r!==0}function Ya(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:oo};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,s,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],x=i[1],v=i[4],M=i[7],b=i[2],S=i[5],T=i[8];return s[0]=o*_+a*x+l*b,s[3]=o*p+a*v+l*S,s[6]=o*d+a*M+l*T,s[1]=c*_+h*x+u*b,s[4]=c*p+h*v+u*S,s[7]=c*d+h*M+u*T,s[2]=f*_+m*x+g*b,s[5]=f*p+m*v+g*S,s[8]=f*d+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new qt;function pu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zd(){const r=vo("canvas");return r.style.display="block",r}const Dc={};function nr(r){r in Dc||(Dc[r]=!0,console.warn(r))}const Uc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ic=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Kn]:{transfer:fo,primaries:po,toReference:r=>r,fromReference:r=>r},[De]:{transfer:se,primaries:po,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Uo]:{transfer:fo,primaries:mo,toReference:r=>r.applyMatrix3(Ic),fromReference:r=>r.applyMatrix3(Uc)},[ml]:{transfer:se,primaries:mo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ic),fromReference:r=>r.applyMatrix3(Uc).convertLinearToSRGB()}},Kd=new Set([Kn,Uo]),ee={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Kd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=br[t].toReference,i=br[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return br[r].primaries},getTransfer:function(r){return r===gn?fo:br[r].transfer}};function Es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=vo("canvas")),Ki.width=t.width,Ki.height=t.height;const n=Ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Es(e[n]/255)*255):e[n]=Es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jd=0;class _u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Zn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ta(i[o].image)):s.push(ta(i[o]))}else s=ta(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0;class Ke extends Wi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=En,i=En,s=mn,o=cr,a=Tn,l=di,c=Ke.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Zn(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?De:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Oi:uu}set encoding(t){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oi?De:gn}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=iu;Ke.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,b=(d+1)/2,S=(h+f)/4,T=(u+_)/4,L=(g+p)/4;return v>M&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=T/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=S/i,s=L/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=L/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oi?De:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tp extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),S=Math.atan2(b,d*x);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b}const M=a*x;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new R,Nc=new ki;class Mr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Cr.subVectors(this.max,Hs),Ji.subVectors(t.a,Hs),$i.subVectors(t.b,Hs),Qi.subVectors(t.c,Hs),Qn.subVectors($i,Ji),ti.subVectors(Qi,$i),Ei.subVectors(Ji,Qi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Ei.z,Ei.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Ei.z,0,-Ei.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Ei.y,Ei.x,0];return!na(e,Ji,$i,Qi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Ji,$i,Qi,Cr))?!1:(Rr.crossVectors(Qn,ti),e=[Rr.x,Rr.y,Rr.z],na(e,Ji,$i,Qi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],Mn=new R,Ar=new Mr,Ji=new R,$i=new R,Qi=new R,Qn=new R,ti=new R,Ei=new R,Hs=new R,Cr=new R,Rr=new R,Ti=new R;function na(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ti.fromArray(r,s);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ep=new Mr,Vs=new R,ia=new R;class Io{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(ia)),this.expandByPoint(Vs.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new R,sa=new R,Pr=new R,ei=new R,ra=new R,Lr=new R,oa=new R;class No{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(sa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=ei.dot(this.direction),l=-ei.dot(Pr),c=ei.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(sa).addScaledVector(Pr,f),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){ra.subVectors(e,t),Lr.subVectors(n,t),oa.crossVectors(ra,Lr);let o=this.direction.dot(oa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(Lr.crossVectors(ei,Lr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(oa);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,s,o,a,l,c,h,u,f,m,g,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,m,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(n,sn)),ni.normalize(),Dr.crossVectors(sn,ni),i[0]=ni.x,i[4]=Dr.x,i[8]=sn.x,i[1]=ni.y,i[5]=Dr.y,i[9]=sn.y,i[2]=ni.z,i[6]=Dr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],x=n[3],v=n[7],M=n[11],b=n[15],S=i[0],T=i[4],L=i[8],y=i[12],w=i[1],N=i[5],F=i[9],X=i[13],D=i[2],O=i[6],z=i[10],H=i[14],q=i[3],Z=i[7],Q=i[11],et=i[15];return s[0]=o*S+a*w+l*D+c*q,s[4]=o*T+a*N+l*O+c*Z,s[8]=o*L+a*F+l*z+c*Q,s[12]=o*y+a*X+l*H+c*et,s[1]=h*S+u*w+f*D+m*q,s[5]=h*T+u*N+f*O+m*Z,s[9]=h*L+u*F+f*z+m*Q,s[13]=h*y+u*X+f*H+m*et,s[2]=g*S+_*w+p*D+d*q,s[6]=g*T+_*N+p*O+d*Z,s[10]=g*L+_*F+p*z+d*Q,s[14]=g*y+_*X+p*H+d*et,s[3]=x*S+v*w+M*D+b*q,s[7]=x*T+v*N+M*O+b*Z,s[11]=x*L+v*F+M*z+b*Q,s[15]=x*y+v*X+M*H+b*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+s*o*f-i*o*m+i*c*h-s*l*h)+p*(+e*c*u-e*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],x=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,M=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,b=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,S=e*x+n*v+i*M+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=x*T,t[1]=(_*f*s-u*p*s-_*i*m+n*p*m+u*i*d-n*f*d)*T,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*d+n*l*d)*T,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*m-n*l*m)*T,t[4]=v*T,t[5]=(h*p*s-g*f*s+g*i*m-e*p*m-h*i*d+e*f*d)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*d-e*l*d)*T,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*m+e*l*m)*T,t[8]=M*T,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*d-e*u*d)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*m-e*a*m)*T,t[12]=b*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,_=o*h,p=o*u,d=a*u,x=l*c,v=l*h,M=l*u,b=n.x,S=n.y,T=n.z;return i[0]=(1-(_+d))*b,i[1]=(m+M)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(m-M)*S,i[5]=(1-(f+d))*S,i[6]=(p+x)*S,i[7]=0,i[8]=(g+v)*T,i[9]=(p-x)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ts.set(i[0],i[1],i[2]).length();const o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const c=1/s,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Yn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===Yn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_o)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Yn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,m=(n+i)*h;let g,_;if(a===Yn)g=(o+s)*u,_=-2*u;else if(a===_o)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new R,yn=new ue,np=new R(0,0,0),ip=new R(1,1,1),ni=new R,Dr=new R,sn=new R,Oc=new ue,Fc=new ki;class Ls{constructor(t=0,e=0,n=0,i=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sp=0;const zc=new R,es=new ki,Fn=new ue,Ur=new R,Ws=new R,rp=new R,op=new ki,Bc=new R(1,0,0),Gc=new R(0,1,0),kc=new R(0,0,1),ap={type:"added"},lp={type:"removed"};class Me extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new Ls,n=new ki,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new qt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ws,Ur,this.up):Fn.lookAt(Ur,Ws,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Fn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new R,zn=new R,aa=new R,Bn=new R,ns=new R,is=new R,Hc=new R,la=new R,ca=new R,ha=new R;let Ir=!1;class _n{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Sn.subVectors(i,e),zn.subVectors(n,e),aa.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(zn),l=Sn.dot(aa),c=zn.dot(zn),h=zn.dot(aa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),zn.subVectors(t,e),Sn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Sn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),_n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ns.subVectors(i,n),is.subVectors(s,n),la.subVectors(t,n);const l=ns.dot(la),c=is.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,i);const h=ns.dot(ca),u=is.dot(ca);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);ha.subVectors(t,s);const m=ns.dot(ha),g=is.dot(ha);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Hc.subVectors(s,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Hc,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=qd(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,s=Be.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=De){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Nr);const n=Jo(ii.h,Nr.h,e),i=Jo(ii.s,Nr.s,e),s=Jo(ii.l,Nr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ot;Ot.NAMES=vu;let cp=0;class Xi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ui,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ba,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,Or=new J;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}}class xu extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mu extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hp=0;const dn=new ue,fa=new Me,ss=new R,rn=new Mr,Xs=new Mr,Le=new R;class pe extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?Mu:xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,Xs.min),rn.expandByPoint(Le),Le.addVectors(rn.max,Xs.max),rn.expandByPoint(Le)):(rn.expandByPoint(Xs.min),rn.expandByPoint(Xs.max))}rn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Le.add(ss)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new R,h[w]=new R;const u=new R,f=new R,m=new R,g=new J,_=new J,p=new J,d=new R,x=new R;function v(w,N,F){u.fromArray(i,w*3),f.fromArray(i,N*3),m.fromArray(i,F*3),g.fromArray(o,w*2),_.fromArray(o,N*2),p.fromArray(o,F*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const X=1/(_.x*p.y-p.x*_.y);isFinite(X)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(X),x.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(X),c[w].add(d),c[N].add(d),c[F].add(d),h[w].add(x),h[N].add(x),h[F].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,N=M.length;w<N;++w){const F=M[w],X=F.start,D=F.count;for(let O=X,z=X+D;O<z;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new R,S=new R,T=new R,L=new R;function y(w){T.fromArray(s,w*3),L.copy(T);const N=c[w];b.copy(N),b.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(L,N);const X=S.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=X}for(let w=0,N=M.length;w<N;++w){const F=M[w],X=F.start,D=F.count;for(let O=X,z=X+D;O<z;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new we(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ue,wi=new No,Fr=new Io,Wc=new R,rs=new R,os=new R,as=new R,da=new R,zr=new R,Br=new J,Gr=new J,kr=new J,Xc=new R,Yc=new R,qc=new R,Hr=new R,Vr=new R;class at extends Me{constructor(t=new pe,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(da.fromBufferAttribute(u,t),o?zr.addScaledVector(da,h):zr.addScaledVector(da.sub(e),h))}e.add(zr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Fr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Fr,Wc)===null||wi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,b=v;M<b;M+=3){const S=a.getX(M),T=a.getX(M+1),L=a.getX(M+2);i=Wr(this,d,t,n,c,h,u,S,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=Wr(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,b=v;M<b;M+=3){const S=M,T=M+1,L=M+2;i=Wr(this,d,t,n,c,h,u,S,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=p,v=p+1,M=p+2;i=Wr(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function up(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===gi,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:r}}function Wr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,rs),r.getVertexPosition(l,os),r.getVertexPosition(c,as);const h=up(r,t,e,n,rs,os,as,Hr);if(h){i&&(Br.fromBufferAttribute(i,a),Gr.fromBufferAttribute(i,l),kr.fromBufferAttribute(i,c),h.uv=_n.getInterpolation(Hr,rs,os,as,Br,Gr,kr,new J)),s&&(Br.fromBufferAttribute(s,a),Gr.fromBufferAttribute(s,l),kr.fromBufferAttribute(s,c),h.uv1=_n.getInterpolation(Hr,rs,os,as,Br,Gr,kr,new J),h.uv2=h.uv1),o&&(Xc.fromBufferAttribute(o,a),Yc.fromBufferAttribute(o,l),qc.fromBufferAttribute(o,c),h.normal=_n.getInterpolation(Hr,rs,os,as,Xc,Yc,qc,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};_n.getNormal(rs,os,as,u.normal),h.face=u}return h}class Te extends pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,p,d,x,v,M,b,S,T,L,y){const w=M/T,N=b/L,F=M/2,X=b/2,D=S/2,O=T+1,z=L+1;let H=0,q=0;const Z=new R;for(let Q=0;Q<z;Q++){const et=Q*N-X;for(let tt=0;tt<O;tt++){const W=tt*w-F;Z[_]=W*x,Z[p]=et*v,Z[d]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[d]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(tt/T),u.push(1-Q/L),H+=1}}for(let Q=0;Q<L;Q++)for(let et=0;et<T;et++){const tt=f+et+O*Q,W=f+et+O*(Q+1),j=f+(et+1)+O*(Q+1),ct=f+(et+1)+O*Q;l.push(tt,W,ct),l.push(W,j,ct),q+=6}a.addGroup(m,q,y),m+=q,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(r){const t={};for(let e=0;e<r.length;e++){const n=Ds(r[e]);for(const i in n)t[i]=n[i]}return t}function fp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function yu(r){return r.getRenderTarget()===null?r.outputColorSpace:ee.workingColorSpace}const xo={clone:Ds,merge:Xe};var dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class mp extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(ls,cs,t,e);i.layers=this.layers,this.add(i);const s=new Ze(ls,cs,t,e);s.layers=this.layers,this.add(s);const o=new Ze(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new Ze(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new Ze(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new Ze(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Ke{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _p extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oi?De:gn),this.texture=new Eu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Te(5,5,5),s=new Ie({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:qn});s.uniforms.tEquirect.value=e;const o=new at(i,s),a=e.minFilter;return e.minFilter===cr&&(e.minFilter=mn),new mp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const pa=new R,gp=new R,vp=new qt;class si{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pa.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vp.getNormalMatrix(t),i=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Io,Xr=new R;class gl{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-m,M-d).normalize(),n[1].setComponents(l+s,f+c,p+m,M+d).normalize(),n[2].setComponents(l+o,f+h,p+g,M+x).normalize(),n[3].setComponents(l-o,f-h,p-g,M-x).normalize(),n[4].setComponents(l-a,f-u,p-_,M-v).normalize(),e===Yn)n[5].setComponents(l+a,f+u,p+_,M+v).normalize();else if(e===_o)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xr.x=i.normal.x>0?t.max.x:t.min.x,Xr.y=i.normal.y>0?t.max.y:t.min.y,Xr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function xp(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];e?r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ts extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const x=d*f-o;for(let v=0;v<c;v++){const M=v*u-s;g.push(M,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+c*d,M=x+c*(d+1),b=x+1+c*(d+1),S=x+1+c*d;m.push(v,M,S),m.push(M,b,S)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`
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
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s_=`float getShadowMask() {
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
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,A_=`#define DISTANCE
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
}`,C_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
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
}`,D_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,O_=`#define LAMBERT
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
}`,F_=`#define MATCAP
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
}`,z_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,k_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,W_=`#define STANDARD
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
}`,X_=`#define TOON
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
}`,Y_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,j_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,K_=`uniform vec3 color;
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
}`,J_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Mp,alphahash_pars_fragment:yp,alphamap_fragment:Sp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:wp,aomap_fragment:bp,aomap_pars_fragment:Ap,batching_pars_vertex:Cp,batching_vertex:Rp,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:zp,color_fragment:Bp,color_pars_fragment:Gp,color_pars_vertex:kp,color_vertex:Hp,common:Vp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:Yp,displacementmap_vertex:qp,emissivemap_fragment:jp,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:Jp,envmap_fragment:$p,envmap_common_pars_fragment:Qp,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:dm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:fm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:_m,lights_phong_pars_fragment:gm,lights_physical_fragment:vm,lights_physical_pars_fragment:xm,lights_fragment_begin:Mm,lights_fragment_maps:ym,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:bm,map_fragment:Am,map_pars_fragment:Cm,map_particle_fragment:Rm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphcolor_vertex:Um,morphnormal_vertex:Im,morphtarget_pars_vertex:Nm,morphtarget_vertex:Om,normal_fragment_begin:Fm,normal_fragment_maps:zm,normal_pars_fragment:Bm,normal_pars_vertex:Gm,normal_vertex:km,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:Ym,opaque_fragment:qm,packing:jm,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:Jm,dithering_pars_fragment:$m,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:o_,skinning_vertex:a_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:f_,transmission_fragment:d_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:__,uv_vertex:g_,worldpos_vertex:v_,background_vert:x_,background_frag:M_,backgroundCube_vert:y_,backgroundCube_frag:S_,cube_vert:E_,cube_frag:T_,depth_vert:w_,depth_frag:b_,distanceRGBA_vert:A_,distanceRGBA_frag:C_,equirect_vert:R_,equirect_frag:P_,linedashed_vert:L_,linedashed_frag:D_,meshbasic_vert:U_,meshbasic_frag:I_,meshlambert_vert:N_,meshlambert_frag:O_,meshmatcap_vert:F_,meshmatcap_frag:z_,meshnormal_vert:B_,meshnormal_frag:G_,meshphong_vert:k_,meshphong_frag:H_,meshphysical_vert:V_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:Y_,points_vert:q_,points_frag:j_,shadow_vert:Z_,shadow_frag:K_,sprite_vert:J_,sprite_frag:$_},dt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Cn={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Cn.physical={uniforms:Xe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Yr={r:0,b:0,g:0};function Q_(r,t,e,n,i,s,o){const a=new Ot(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Do)?(h===void 0&&(h=new at(new Te(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Ds(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==se,(u!==v||f!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new Ts(2,2),new Ie({name:"BackgroundMaterial",uniforms:Ds(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Yr,yu(r)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function tg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(D,O,z,H,q){let Z=!1;if(o){const Q=_(H,z,O);c!==Q&&(c=Q,m(c.object)),Z=d(D,H,z,q),Z&&x(D,H,z,q)}else{const Q=O.wireframe===!0;(c.geometry!==H.id||c.program!==z.id||c.wireframe!==Q)&&(c.geometry=H.id,c.program=z.id,c.wireframe=Q,Z=!0)}q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,L(D,O,z,H),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,z){const H=z.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let Z=q[O.id];Z===void 0&&(Z={},q[O.id]=Z);let Q=Z[H];return Q===void 0&&(Q=p(f()),Z[H]=Q),Q}function p(D){const O=[],z=[],H=[];for(let q=0;q<i;q++)O[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:H,object:D,attributes:{},index:null}}function d(D,O,z,H){const q=c.attributes,Z=O.attributes;let Q=0;const et=z.getAttributes();for(const tt in et)if(et[tt].location>=0){const j=q[tt];let ct=Z[tt];if(ct===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),j===void 0||j.attribute!==ct||ct&&j.data!==ct.data)return!0;Q++}return c.attributesNum!==Q||c.index!==H}function x(D,O,z,H){const q={},Z=O.attributes;let Q=0;const et=z.getAttributes();for(const tt in et)if(et[tt].location>=0){let j=Z[tt];j===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ct={};ct.attribute=j,j&&j.data&&(ct.data=j.data),q[tt]=ct,Q++}c.attributes=q,c.attributesNum=Q,c.index=H}function v(){const D=c.newAttributes;for(let O=0,z=D.length;O<z;O++)D[O]=0}function M(D){b(D,0)}function b(D,O){const z=c.newAttributes,H=c.enabledAttributes,q=c.attributeDivisors;z[D]=1,H[D]===0&&(r.enableVertexAttribArray(D),H[D]=1),q[D]!==O&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),q[D]=O)}function S(){const D=c.newAttributes,O=c.enabledAttributes;for(let z=0,H=O.length;z<H;z++)O[z]!==D[z]&&(r.disableVertexAttribArray(z),O[z]=0)}function T(D,O,z,H,q,Z,Q){Q===!0?r.vertexAttribIPointer(D,O,z,q,Z):r.vertexAttribPointer(D,O,z,H,q,Z)}function L(D,O,z,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=H.attributes,Z=z.getAttributes(),Q=O.defaultAttributeValues;for(const et in Z){const tt=Z[et];if(tt.location>=0){let W=q[et];if(W===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const j=W.normalized,ct=W.itemSize,St=e.get(W);if(St===void 0)continue;const gt=St.buffer,Lt=St.type,Ft=St.bytesPerElement,Tt=n.isWebGL2===!0&&(Lt===r.INT||Lt===r.UNSIGNED_INT||W.gpuType===su);if(W.isInterleavedBufferAttribute){const Nt=W.data,U=Nt.stride,ft=W.offset;if(Nt.isInstancedInterleavedBuffer){for(let $=0;$<tt.locationSize;$++)b(tt.location+$,Nt.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let $=0;$<tt.locationSize;$++)M(tt.location+$);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let $=0;$<tt.locationSize;$++)T(tt.location+$,ct/tt.locationSize,Lt,j,U*Ft,(ft+ct/tt.locationSize*$)*Ft,Tt)}else{if(W.isInstancedBufferAttribute){for(let Nt=0;Nt<tt.locationSize;Nt++)b(tt.location+Nt,W.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Nt=0;Nt<tt.locationSize;Nt++)M(tt.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Nt=0;Nt<tt.locationSize;Nt++)T(tt.location+Nt,ct/tt.locationSize,Lt,j,ct*Ft,ct/tt.locationSize*Nt*Ft,Tt)}}else if(Q!==void 0){const j=Q[et];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(tt.location,j);break;case 3:r.vertexAttrib3fv(tt.location,j);break;case 4:r.vertexAttrib4fv(tt.location,j);break;default:r.vertexAttrib1fv(tt.location,j)}}}}S()}function y(){F();for(const D in a){const O=a[D];for(const z in O){const H=O[z];for(const q in H)g(H[q].object),delete H[q];delete O[z]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const z in O){const H=O[z];for(const q in H)g(H[q].object),delete H[q];delete O[z]}delete a[D.id]}function N(D){for(const O in a){const z=a[O];if(z[D.id]===void 0)continue;const H=z[D.id];for(const q in H)g(H[q].object),delete H[q];delete z[D.id]}}function F(){X(),h=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:X,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:S}}function eg(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ng(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||t.has("OES_texture_float"),b=v&&M,S=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:S}}function ig(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new si,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,v=x*4;let M=d.clippingState||null;l.value=M,M=h(g,f,v,m);for(let b=0;b!==v;++b)M[b]=e[b];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,M=m;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function sg(r){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=Cs:a===ka&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ga||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _p(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class vl extends Su{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,jc=[.125,.215,.35,.446,.526,.582],Di=20,ma=new vl,Zc=new Ot;let _a=null,ga=0,va=0;const Ri=(1+Math.sqrt(5))/2,hs=1/Ri,Kc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ri,hs),new R(0,Ri,-hs),new R(hs,0,Ri),new R(-hs,0,Ri),new R(Ri,hs,0),new R(-Ri,hs,0)];class Jc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,ga,va),t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:jn,format:Tn,colorSpace:Kn,depthBuffer:!1},i=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(s)),this._blurMaterial=og(s,t,e)}return i}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,i){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zc),h.toneMapping=fi,h.autoClear=!1;const m=new Hn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new at(new Te,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Zc),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;qr(i,x*v,d>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Kc[(i-1)%Kc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Di-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const d=[];let x=0;for(let T=0;T<Di;++T){const L=T/_,y=Math.exp(-L*L/2);d.push(y),T===0?x+=y:T<p&&(x+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],b=3*M*(i>v-gs?i-v+gs:0),S=4*(this._cubeSize-M);qr(e,b,S,3*M,2*M),l.setRenderTarget(e),l.render(u,ma)}}function rg(r){const t=[],e=[],n=[];let i=r;const s=r-gs+1+jc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-gs?l=jc[o-r+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,L=S>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(y,_*g*S),v.set(f,p*g*S);const w=[S,S,S,S,S,S];M.set(w,d*g*S)}const b=new pe;b.setAttribute("position",new we(x,_)),b.setAttribute("uv",new we(v,p)),b.setAttribute("faceIndex",new we(M,d)),t.push(b),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(r,t,e){const n=new wn(r,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function og(r,t,e){const n=new Float32Array(Di),i=new R(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qc(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function th(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function ag(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===ka,h=l===Cs||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Jc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Jc(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cg(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const b=x[v+0],S=x[v+1],T=x[v+2];f.push(b,S,S,T,T,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const b=v+0,S=v+1,T=v+2;f.push(b,S,S,T,T,b)}}else return;const p=new(pu(f)?Mu:xu)(f,1);p.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hg(r,t,e,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*l),e.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),e.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];e.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function ug(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fg(r,t){return r[0]-t[0]}function dg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function pg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let O=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),b===!0&&(y=3);let w=h.attributes.position.count*y,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*N*4*_),X=new gu(F,w,N,_);X.type=ai,X.needsUpdate=!0;const D=y*4;for(let z=0;z<_;z++){const H=S[z],q=T[z],Z=L[z],Q=w*N*4*z;for(let et=0;et<H.count;et++){const tt=et*D;v===!0&&(o.fromBufferAttribute(H,et),F[Q+tt+0]=o.x,F[Q+tt+1]=o.y,F[Q+tt+2]=o.z,F[Q+tt+3]=0),M===!0&&(o.fromBufferAttribute(q,et),F[Q+tt+4]=o.x,F[Q+tt+5]=o.y,F[Q+tt+6]=o.z,F[Q+tt+7]=0),b===!0&&(o.fromBufferAttribute(Z,et),F[Q+tt+8]=o.x,F[Q+tt+9]=o.y,F[Q+tt+10]=o.z,F[Q+tt+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:X,size:new J(w,N)},s.set(h,p),h.addEventListener("dispose",O)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const b=_[M];b[0]=M,b[1]=f[M]}_.sort(dg);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(fg);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const b=a[M],S=b[0],T=b[1];S!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+M)!==p[S]&&h.setAttribute("morphTarget"+M,p[S]),d&&h.getAttribute("morphNormal"+M)!==d[S]&&h.setAttribute("morphNormal"+M,d[S]),i[M]=T,x+=T):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),d&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function mg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class wu extends Ke{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=oi),n===void 0&&h===Ps&&(n=Ii),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bu=new Ke,Au=new wu(1,1);Au.compareFunction=du;const Cu=new gu,Ru=new tp,Pu=new Eu,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Gs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=eh[i];if(s===void 0&&(s=new Float32Array(i),eh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Oo(r,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _g(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function Mg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;rh.set(n),r.uniformMatrix2fv(this.addr,!1,rh),Re(e,n)}}function yg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;sh.set(n),r.uniformMatrix3fv(this.addr,!1,sh),Re(e,n)}}function Sg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;ih.set(n),r.uniformMatrix4fv(this.addr,!1,ih),Re(e,n)}}function Eg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function Ag(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function Pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function Lg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Au:bu;e.setTexture2D(t||s,i)}function Dg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ru,i)}function Ug(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function Ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cu,i)}function Ng(r){switch(r){case 5126:return _g;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return yg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return bg;case 5125:return Ag;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ig}}function Og(r,t){r.uniform1fv(this.addr,t)}function Fg(r,t){const e=Gs(t,this.size,2);r.uniform2fv(this.addr,e)}function zg(r,t){const e=Gs(t,this.size,3);r.uniform3fv(this.addr,e)}function Bg(r,t){const e=Gs(t,this.size,4);r.uniform4fv(this.addr,e)}function Gg(r,t){const e=Gs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function kg(r,t){const e=Gs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hg(r,t){const e=Gs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Vg(r,t){r.uniform1iv(this.addr,t)}function Wg(r,t){r.uniform2iv(this.addr,t)}function Xg(r,t){r.uniform3iv(this.addr,t)}function Yg(r,t){r.uniform4iv(this.addr,t)}function qg(r,t){r.uniform1uiv(this.addr,t)}function jg(r,t){r.uniform2uiv(this.addr,t)}function Zg(r,t){r.uniform3uiv(this.addr,t)}function Kg(r,t){r.uniform4uiv(this.addr,t)}function Jg(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||bu,s[o])}function $g(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ru,s[o])}function Qg(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pu,s[o])}function t0(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cu,s[o])}function e0(r){switch(r){case 5126:return Og;case 35664:return Fg;case 35665:return zg;case 35666:return Bg;case 35674:return Gg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return Yg;case 5125:return qg;case 36294:return jg;case 36295:return Zg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t0}}class n0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}}class i0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e0(e.type)}}class s0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function oh(r,t){r.seq.push(t),r.map[t.id]=t}function r0(r,t,e){const n=r.name,i=n.length;for(xa.lastIndex=0;;){const s=xa.exec(n),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){oh(e,c===void 0?new n0(a,r,t):new i0(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new s0(a),oh(e,u)),e=u}}}class ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);r0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ah(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const o0=37297;let a0=0;function l0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function c0(r){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(r);let n;switch(t===e?n="":t===mo&&e===po?n="LinearDisplayP3ToLinearSRGB":t===po&&e===mo&&(n="LinearSRGBToLinearDisplayP3"),r){case Kn:case Uo:return[n,"LinearTransferOETF"];case De:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function lh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+l0(r.getShaderSource(t),o)}else return i}function h0(r,t){const e=c0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function u0(r,t){let e;switch(t){case Ed:e="Linear";break;case Td:e="Reinhard";break;case wd:e="OptimizedCineon";break;case nu:e="ACESFilmic";break;case Ad:e="AgX";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function f0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function d0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function p0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function vs(r){return r!==""}function ch(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(r){return r.replace(_0,v0)}const g0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v0(r,t){let e=Vt[t];if(e===void 0){const n=g0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(x0,M0)}function M0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fh(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function T0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eu:t="ENVMAP_BLENDING_MULTIPLY";break;case yd:t="ENVMAP_BLENDING_MIX";break;case Sd:t="ENVMAP_BLENDING_ADD";break}return t}function w0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=y0(e),c=S0(e),h=E0(e),u=T0(e),f=w0(e),m=e.isWebGL2?"":f0(e),g=d0(e),_=p0(s),p=i.createProgram();let d,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),d.length>0&&(d+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),x.length>0&&(x+=`
`)):(d=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),x=[m,fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=qa(o),o=ch(o,e),o=hh(o,e),a=qa(a),a=ch(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+d+o,b=v+x+a,S=ah(i,i.VERTEX_SHADER,M),T=ah(i,i.FRAGMENT_SHADER,b);i.attachShader(p,S),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(F){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(S).trim(),O=i.getShaderInfoLog(T).trim();let z=!0,H=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,S,T);else{const q=lh(i,S,"vertex"),Z=lh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+q+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(D===""||O==="")&&(H=!1);H&&(F.diagnostics={runnable:z,programLog:X,vertexShader:{log:D,prefix:d},fragmentShader:{log:O,prefix:x}})}i.deleteShader(S),i.deleteShader(T),y=new ao(i,p),w=m0(i,p)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,o0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}let A0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new R0(t),e.set(t,n)),n}}class R0{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function P0(r,t,e,n,i,s,o){const a=new _l,l=new C0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,w,N,F,X){const D=F.fog,O=X.geometry,z=y.isMeshStandardMaterial?F.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),q=H&&H.mapping===Do?H.image.height:null,Z=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=Q!==void 0?Q.length:0;let tt=0;O.morphAttributes.position!==void 0&&(tt=1),O.morphAttributes.normal!==void 0&&(tt=2),O.morphAttributes.color!==void 0&&(tt=3);let W,j,ct,St;if(Z){const _e=Cn[Z];W=_e.vertexShader,j=_e.fragmentShader}else W=y.vertexShader,j=y.fragmentShader,l.update(y),ct=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const gt=r.getRenderTarget(),Lt=X.isInstancedMesh===!0,Ft=X.isBatchedMesh===!0,Tt=!!y.map,Nt=!!y.matcap,U=!!H,ft=!!y.aoMap,$=!!y.lightMap,lt=!!y.bumpMap,K=!!y.normalMap,wt=!!y.displacementMap,_t=!!y.emissiveMap,A=!!y.metalnessMap,E=!!y.roughnessMap,B=y.anisotropy>0,rt=y.clearcoat>0,it=y.iridescence>0,nt=y.sheen>0,Et=y.transmission>0,pt=B&&!!y.anisotropyMap,xt=rt&&!!y.clearcoatMap,Rt=rt&&!!y.clearcoatNormalMap,Gt=rt&&!!y.clearcoatRoughnessMap,st=it&&!!y.iridescenceMap,$t=it&&!!y.iridescenceThicknessMap,Wt=nt&&!!y.sheenColorMap,zt=nt&&!!y.sheenRoughnessMap,Ct=!!y.specularMap,vt=!!y.specularColorMap,P=!!y.specularIntensityMap,ht=Et&&!!y.transmissionMap,bt=Et&&!!y.thicknessMap,yt=!!y.gradientMap,ot=!!y.alphaMap,I=y.alphaTest>0,ut=!!y.alphaHash,mt=!!y.extensions,Dt=!!O.attributes.uv1,Pt=!!O.attributes.uv2,jt=!!O.attributes.uv3;let Zt=fi;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Zt=r.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:j,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ft,instancing:Lt,instancingColor:Lt&&X.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Kn,map:Tt,matcap:Nt,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:q,aoMap:ft,lightMap:$,bumpMap:lt,normalMap:K,displacementMap:f&&wt,emissiveMap:_t,normalMapObjectSpace:K&&y.normalMapType===Bd,normalMapTangentSpace:K&&y.normalMapType===fu,metalnessMap:A,roughnessMap:E,anisotropy:B,anisotropyMap:pt,clearcoat:rt,clearcoatMap:xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Gt,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:$t,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:zt,specularMap:Ct,specularColorMap:vt,specularIntensityMap:P,transmission:Et,transmissionMap:ht,thicknessMap:bt,gradientMap:yt,opaque:y.transparent===!1&&y.blending===ui,alphaMap:ot,alphaTest:I,alphaHash:ut,combine:y.combine,mapUv:Tt&&_(y.map.channel),aoMapUv:ft&&_(y.aoMap.channel),lightMapUv:$&&_(y.lightMap.channel),bumpMapUv:lt&&_(y.bumpMap.channel),normalMapUv:K&&_(y.normalMap.channel),displacementMapUv:wt&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:A&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:pt&&_(y.anisotropyMap.channel),clearcoatMapUv:xt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:zt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ct&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:P&&_(y.specularIntensityMap.channel),transmissionMapUv:ht&&_(y.transmissionMap.channel),thicknessMapUv:bt&&_(y.thicknessMap.channel),alphaMapUv:ot&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(K||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:jt,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(Tt||ot),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Zt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(w,y),v(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const w=g[y.type];let N;if(w){const F=Cn[w];N=xo.clone(F.uniforms)}else N=y.uniforms;return N}function b(y,w){let N;for(let F=0,X=c.length;F<X;F++){const D=c[F];if(D.cacheKey===w){N=D,++N.usedTimes;break}}return N===void 0&&(N=new b0(r,w,y,s),c.push(N)),N}function S(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:L}}function L0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function D0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ph(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,g,_,p){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||D0),n.length>1&&n.sort(f||dh),i.length>1&&i.sort(f||dh)}function h(){for(let u=t,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function U0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ph,r.set(n,[o])):i>=s.length?(o=new ph,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function I0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function N0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let O0=0;function F0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function z0(r,t){const e=new I0,n=N0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new ue,a=new ue;function l(h,u){let f=0,m=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,p=0,d=0,x=0,v=0,M=0,b=0,S=0,T=0,L=0,y=0;h.sort(F0);const w=u===!0?Math.PI:1;for(let F=0,X=h.length;F<X;F++){const D=h[F],O=D.color,z=D.intensity,H=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*z*w,m+=O.g*z*w,g+=O.b*z*w;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],z);y++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const Q=D.shadow,et=n.get(D);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[_]=et,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,M++}i.directional[_]=Z,_++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(O).multiplyScalar(z*w),Z.distance=H,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[d]=Z;const Q=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,Q.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[d]=Q.matrix,D.castShadow){const et=n.get(D);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[d]=et,i.spotShadowMap[d]=q,S++}d++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(O).multiplyScalar(z),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=Z,x++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*w),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const Q=D.shadow,et=n.get(D);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=D.shadow.matrix,b++}i.point[p]=Z,p++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(z*w),Z.groundColor.copy(D.groundColor).multiplyScalar(z*w),i.hemi[v]=Z,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==d||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=y,N.directionalLength=_,N.pointLength=p,N.spotLength=d,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=y,i.version=O0++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),f++}else if(M.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function mh(r,t){const e=new z0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function B0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new mh(r,t),e.set(s,[l])):o>=a.length?(l=new mh(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class G0 extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class k0 extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function W0(r,t,e){let n=new gl;const i=new J,s=new J,o=new re,a=new G0({depthPacking:zd}),l=new k0,c={},h=e.maxTextureSize,u={[gi]:je,[je]:gi,[Wn]:Wn},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let d=this.type;this.render=function(S,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const y=r.getRenderTarget(),w=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),F=r.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=d!==Gn&&this.type===Gn,D=d===Gn&&this.type!==Gn;for(let O=0,z=S.length;O<z;O++){const H=S[O],q=H.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Z=q.getFrameExtents();if(i.multiply(Z),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,q.mapSize.y=s.y)),q.map===null||X===!0||D===!0){const et=this.type!==Gn?{minFilter:Ye,magFilter:Ye}:{};q.map!==null&&q.map.dispose(),q.map=new wn(i.x,i.y,et),q.map.texture.name=H.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Q=q.getViewportCount();for(let et=0;et<Q;et++){const tt=q.getViewport(et);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),F.viewport(o),q.updateMatrices(H,et),n=q.getFrustum(),M(T,L,q.camera,H,this.type)}q.isPointLightShadow!==!0&&this.type===Gn&&x(q,L),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(y,w,N)};function x(S,T){const L=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,L,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,L,m,_,null)}function v(S,T,L,y){let w=null;const N=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)w=N;else if(w=L.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=w.uuid,X=T.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let O=D[X];O===void 0&&(O=w.clone(),D[X]=O,T.addEventListener("dispose",b)),w=O}if(w.visible=T.visible,w.wireframe=T.wireframe,y===Gn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=r.properties.get(w);F.light=L}return w}function M(S,T,L,y,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Gn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const X=t.update(S),D=S.material;if(Array.isArray(D)){const O=X.groups;for(let z=0,H=O.length;z<H;z++){const q=O[z],Z=D[q.materialIndex];if(Z&&Z.visible){const Q=v(S,Z,y,w);S.onBeforeShadow(r,S,T,L,X,Q,q),r.renderBufferDirect(L,null,X,Q,S,q),S.onAfterShadow(r,S,T,L,X,Q,q)}}}else if(D.visible){const O=v(S,D,y,w);S.onBeforeShadow(r,S,T,L,X,O,null),r.renderBufferDirect(L,null,X,O,S,null),S.onAfterShadow(r,S,T,L,X,O,null)}}const F=S.children;for(let X=0,D=F.length;X<D;X++)M(F[X],T,L,y,w)}function b(S){S.target.removeEventListener("dispose",b);for(const L in c){const y=c[L],w=S.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function X0(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const ut=new re;let mt=null;const Dt=new re(0,0,0,0);return{setMask:function(Pt){mt!==Pt&&!I&&(r.colorMask(Pt,Pt,Pt,Pt),mt=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,jt,Zt,fe,_e){_e===!0&&(Pt*=fe,jt*=fe,Zt*=fe),ut.set(Pt,jt,Zt,fe),Dt.equals(ut)===!1&&(r.clearColor(Pt,jt,Zt,fe),Dt.copy(ut))},reset:function(){I=!1,mt=null,Dt.set(-1,0,0,0)}}}function s(){let I=!1,ut=null,mt=null,Dt=null;return{setTest:function(Pt){Pt?Ft(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(Pt){ut!==Pt&&!I&&(r.depthMask(Pt),ut=Pt)},setFunc:function(Pt){if(mt!==Pt){switch(Pt){case pd:r.depthFunc(r.NEVER);break;case md:r.depthFunc(r.ALWAYS);break;case _d:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case gd:r.depthFunc(r.EQUAL);break;case vd:r.depthFunc(r.GEQUAL);break;case xd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Dt!==Pt&&(r.clearDepth(Pt),Dt=Pt)},reset:function(){I=!1,ut=null,mt=null,Dt=null}}}function o(){let I=!1,ut=null,mt=null,Dt=null,Pt=null,jt=null,Zt=null,fe=null,_e=null;return{setTest:function(Qt){I||(Qt?Ft(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!I&&(r.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,ye,bn){(mt!==Qt||Dt!==ye||Pt!==bn)&&(r.stencilFunc(Qt,ye,bn),mt=Qt,Dt=ye,Pt=bn)},setOp:function(Qt,ye,bn){(jt!==Qt||Zt!==ye||fe!==bn)&&(r.stencilOp(Qt,ye,bn),jt=Qt,Zt=ye,fe=bn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){_e!==Qt&&(r.clearStencil(Qt),_e=Qt)},reset:function(){I=!1,ut=null,mt=null,Dt=null,Pt=null,jt=null,Zt=null,fe=null,_e=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,x=null,v=null,M=null,b=null,S=null,T=null,L=null,y=new Ot(0,0,0),w=0,N=!1,F=null,X=null,D=null,O=null,z=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=Z>=2);let et=null,tt={};const W=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ct=new re().fromArray(W),St=new re().fromArray(j);function gt(I,ut,mt,Dt){const Pt=new Uint8Array(4),jt=r.createTexture();r.bindTexture(I,jt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<mt;Zt++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(ut,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(ut+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return jt}const Lt={};Lt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Lt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Lt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(r.DEPTH_TEST),l.setFunc(uo),_t(!1),A($l),Ft(r.CULL_FACE),K(qn);function Ft(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Tt(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Nt(I,ut){return m[I]!==ut?(r.bindFramebuffer(I,ut),m[I]=ut,n&&(I===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ut),I===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ut)),!0):!1}function U(I,ut){let mt=_,Dt=!1;if(I)if(mt=g.get(ut),mt===void 0&&(mt=[],g.set(ut,mt)),I.isWebGLMultipleRenderTargets){const Pt=I.texture;if(mt.length!==Pt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let jt=0,Zt=Pt.length;jt<Zt;jt++)mt[jt]=r.COLOR_ATTACHMENT0+jt;mt.length=Pt.length,Dt=!0}}else mt[0]!==r.COLOR_ATTACHMENT0&&(mt[0]=r.COLOR_ATTACHMENT0,Dt=!0);else mt[0]!==r.BACK&&(mt[0]=r.BACK,Dt=!0);Dt&&(e.isWebGL2?r.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ft(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const $={[Li]:r.FUNC_ADD,[Qf]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};if(n)$[ec]=r.MIN,$[nc]=r.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&($[ec]=I.MIN_EXT,$[nc]=I.MAX_EXT)}const lt={[ed]:r.ZERO,[nd]:r.ONE,[id]:r.SRC_COLOR,[za]:r.SRC_ALPHA,[cd]:r.SRC_ALPHA_SATURATE,[ad]:r.DST_COLOR,[rd]:r.DST_ALPHA,[sd]:r.ONE_MINUS_SRC_COLOR,[Ba]:r.ONE_MINUS_SRC_ALPHA,[ld]:r.ONE_MINUS_DST_COLOR,[od]:r.ONE_MINUS_DST_ALPHA,[hd]:r.CONSTANT_COLOR,[ud]:r.ONE_MINUS_CONSTANT_COLOR,[fd]:r.CONSTANT_ALPHA,[dd]:r.ONE_MINUS_CONSTANT_ALPHA};function K(I,ut,mt,Dt,Pt,jt,Zt,fe,_e,Qt){if(I===qn){d===!0&&(Tt(r.BLEND),d=!1);return}if(d===!1&&(Ft(r.BLEND),d=!0),I!==$f){if(I!==x||Qt!==N){if((v!==Li||S!==Li)&&(r.blendEquation(r.FUNC_ADD),v=Li,S=Li),Qt)switch(I){case ui:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.ONE,r.ONE);break;case Ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ui:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,T=null,L=null,y.set(0,0,0),w=0,x=I,N=Qt}return}Pt=Pt||ut,jt=jt||mt,Zt=Zt||Dt,(ut!==v||Pt!==S)&&(r.blendEquationSeparate($[ut],$[Pt]),v=ut,S=Pt),(mt!==M||Dt!==b||jt!==T||Zt!==L)&&(r.blendFuncSeparate(lt[mt],lt[Dt],lt[jt],lt[Zt]),M=mt,b=Dt,T=jt,L=Zt),(fe.equals(y)===!1||_e!==w)&&(r.blendColor(fe.r,fe.g,fe.b,_e),y.copy(fe),w=_e),x=I,N=!1}function wt(I,ut){I.side===Wn?Tt(r.CULL_FACE):Ft(r.CULL_FACE);let mt=I.side===je;ut&&(mt=!mt),_t(mt),I.blending===ui&&I.transparent===!1?K(qn):K(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Dt=I.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ft(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){F!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),F=I)}function A(I){I!==Kf?(Ft(r.CULL_FACE),I!==X&&(I===$l?r.cullFace(r.BACK):I===Jf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),X=I}function E(I){I!==D&&(q&&r.lineWidth(I),D=I)}function B(I,ut,mt){I?(Ft(r.POLYGON_OFFSET_FILL),(O!==ut||z!==mt)&&(r.polygonOffset(ut,mt),O=ut,z=mt)):Tt(r.POLYGON_OFFSET_FILL)}function rt(I){I?Ft(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function it(I){I===void 0&&(I=r.TEXTURE0+H-1),et!==I&&(r.activeTexture(I),et=I)}function nt(I,ut,mt){mt===void 0&&(et===null?mt=r.TEXTURE0+H-1:mt=et);let Dt=tt[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},tt[mt]=Dt),(Dt.type!==I||Dt.texture!==ut)&&(et!==mt&&(r.activeTexture(mt),et=mt),r.bindTexture(I,ut||Lt[I]),Dt.type=I,Dt.texture=ut)}function Et(){const I=tt[et];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){ct.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function ht(I){St.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),St.copy(I))}function bt(I,ut){let mt=u.get(ut);mt===void 0&&(mt=new WeakMap,u.set(ut,mt));let Dt=mt.get(I);Dt===void 0&&(Dt=r.getUniformBlockIndex(ut,I.name),mt.set(I,Dt))}function yt(I,ut){const Dt=u.get(ut).get(I);h.get(ut)!==Dt&&(r.uniformBlockBinding(ut,Dt,I.__bindingPointIndex),h.set(ut,Dt))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},et=null,tt={},m={},g=new WeakMap,_=[],p=null,d=!1,x=null,v=null,M=null,b=null,S=null,T=null,L=null,y=new Ot(0,0,0),w=0,N=!1,F=null,X=null,D=null,O=null,z=null,ct.set(0,0,r.canvas.width,r.canvas.height),St.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:Tt,bindFramebuffer:Nt,drawBuffers:U,useProgram:ft,setBlending:K,setMaterial:wt,setFlipSided:_t,setCullFace:A,setLineWidth:E,setPolygonOffset:B,setScissorTest:rt,activeTexture:it,bindTexture:nt,unbindTexture:Et,compressedTexImage2D:pt,compressedTexImage3D:xt,texImage2D:Ct,texImage3D:vt,updateUBOMapping:bt,uniformBlockBinding:yt,texStorage2D:Wt,texStorage3D:zt,texSubImage2D:Rt,texSubImage3D:Gt,compressedTexSubImage2D:st,compressedTexSubImage3D:$t,scissor:P,viewport:ht,reset:ot}}function Y0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return m?new OffscreenCanvas(A,E):vo("canvas")}function _(A,E,B,rt){let it=1;if((A.width>rt||A.height>rt)&&(it=rt/Math.max(A.width,A.height)),it<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const nt=E?Ya:Math.floor,Et=nt(it*A.width),pt=nt(it*A.height);u===void 0&&(u=g(Et,pt));const xt=B?g(Et,pt):u;return xt.width=Et,xt.height=pt,xt.getContext("2d").drawImage(A,0,0,Et,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Et+"x"+pt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Lc(A.width)&&Lc(A.height)}function d(A){return a?!1:A.wrapS!==En||A.wrapT!==En||A.minFilter!==Ye&&A.minFilter!==mn}function x(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ye&&A.minFilter!==mn}function v(A){r.generateMipmap(A)}function M(A,E,B,rt,it=!1){if(a===!1)return E;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt=E;if(E===r.RED&&(B===r.FLOAT&&(nt=r.R32F),B===r.HALF_FLOAT&&(nt=r.R16F),B===r.UNSIGNED_BYTE&&(nt=r.R8)),E===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(nt=r.R8UI),B===r.UNSIGNED_SHORT&&(nt=r.R16UI),B===r.UNSIGNED_INT&&(nt=r.R32UI),B===r.BYTE&&(nt=r.R8I),B===r.SHORT&&(nt=r.R16I),B===r.INT&&(nt=r.R32I)),E===r.RG&&(B===r.FLOAT&&(nt=r.RG32F),B===r.HALF_FLOAT&&(nt=r.RG16F),B===r.UNSIGNED_BYTE&&(nt=r.RG8)),E===r.RGBA){const Et=it?fo:ee.getTransfer(rt);B===r.FLOAT&&(nt=r.RGBA32F),B===r.HALF_FLOAT&&(nt=r.RGBA16F),B===r.UNSIGNED_BYTE&&(nt=Et===se?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(A,E,B){return x(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function S(A){return A===Ye||A===ic||A===Xo?r.NEAREST:r.LINEAR}function T(A){const E=A.target;E.removeEventListener("dispose",T),y(E),E.isVideoTexture&&h.delete(E)}function L(A){const E=A.target;E.removeEventListener("dispose",L),N(E)}function y(A){const E=n.get(A);if(E.__webglInit===void 0)return;const B=A.source,rt=f.get(B);if(rt){const it=rt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(A),Object.keys(rt).length===0&&f.delete(B)}n.remove(A)}function w(A){const E=n.get(A);r.deleteTexture(E.__webglTexture);const B=A.source,rt=f.get(B);delete rt[E.__cacheKey],o.memory.textures--}function N(A){const E=A.texture,B=n.get(A),rt=n.get(E);if(rt.__webglTexture!==void 0&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(B.__webglFramebuffer[it]))for(let nt=0;nt<B.__webglFramebuffer[it].length;nt++)r.deleteFramebuffer(B.__webglFramebuffer[it][nt]);else r.deleteFramebuffer(B.__webglFramebuffer[it]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[it])}else{if(Array.isArray(B.__webglFramebuffer))for(let it=0;it<B.__webglFramebuffer.length;it++)r.deleteFramebuffer(B.__webglFramebuffer[it]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let it=0;it<B.__webglColorRenderbuffer.length;it++)B.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[it]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,nt=E.length;it<nt;it++){const Et=n.get(E[it]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(E[it])}n.remove(E),n.remove(A)}let F=0;function X(){F=0}function D(){const A=F;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function O(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function z(A,E){const B=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,A,E);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+E)}function H(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ct(B,A,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+E)}function q(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ct(B,A,E);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+E)}function Z(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){St(B,A,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+E)}const Q={[Ha]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[Va]:r.MIRRORED_REPEAT},et={[Ye]:r.NEAREST,[ic]:r.NEAREST_MIPMAP_NEAREST,[Xo]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Cd]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},tt={[Gd]:r.NEVER,[Yd]:r.ALWAYS,[kd]:r.LESS,[du]:r.LEQUAL,[Hd]:r.EQUAL,[Xd]:r.GEQUAL,[Vd]:r.GREATER,[Wd]:r.NOTEQUAL};function W(A,E,B){if(B?(r.texParameteri(A,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Q[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,et[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,et[E.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==En||E.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,S(E.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Ye&&E.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ye||E.minFilter!==Xo&&E.minFilter!==cr||E.type===ai&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===jn&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(A,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function j(A,E){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));const rt=E.source;let it=f.get(rt);it===void 0&&(it={},f.set(rt,it));const nt=O(E);if(nt!==A.__cacheKey){it[nt]===void 0&&(it[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),it[nt].usedTimes++;const Et=it[A.__cacheKey];Et!==void 0&&(it[A.__cacheKey].usedTimes--,Et.usedTimes===0&&w(E)),A.__cacheKey=nt,A.__webglTexture=it[nt].texture}return B}function ct(A,E,B){let rt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=r.TEXTURE_3D);const it=j(A,E),nt=E.source;e.bindTexture(rt,A.__webglTexture,r.TEXTURE0+B);const Et=n.get(nt);if(nt.version!==Et.__version||it===!0){e.activeTexture(r.TEXTURE0+B);const pt=ee.getPrimaries(ee.workingColorSpace),xt=E.colorSpace===gn?null:ee.getPrimaries(E.colorSpace),Rt=E.colorSpace===gn||pt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Gt=d(E)&&p(E.image)===!1;let st=_(E.image,Gt,!1,i.maxTextureSize);st=_t(E,st);const $t=p(st)||a,Wt=s.convert(E.format,E.colorSpace);let zt=s.convert(E.type),Ct=M(E.internalFormat,Wt,zt,E.colorSpace,E.isVideoTexture);W(rt,E,$t);let vt;const P=E.mipmaps,ht=a&&E.isVideoTexture!==!0&&Ct!==hu,bt=Et.__version===void 0||it===!0,yt=b(E,st,$t);if(E.isDepthTexture)Ct=r.DEPTH_COMPONENT,a?E.type===ai?Ct=r.DEPTH_COMPONENT32F:E.type===oi?Ct=r.DEPTH_COMPONENT24:E.type===Ii?Ct=r.DEPTH24_STENCIL8:Ct=r.DEPTH_COMPONENT16:E.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ni&&Ct===r.DEPTH_COMPONENT&&E.type!==pl&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,zt=s.convert(E.type)),E.format===Ps&&Ct===r.DEPTH_COMPONENT&&(Ct=r.DEPTH_STENCIL,E.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ii,zt=s.convert(E.type))),bt&&(ht?e.texStorage2D(r.TEXTURE_2D,1,Ct,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Ct,st.width,st.height,0,Wt,zt,null));else if(E.isDataTexture)if(P.length>0&&$t){ht&&bt&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let ot=0,I=P.length;ot<I;ot++)vt=P[ot],ht?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,vt.width,vt.height,Wt,zt,vt.data):e.texImage2D(r.TEXTURE_2D,ot,Ct,vt.width,vt.height,0,Wt,zt,vt.data);E.generateMipmaps=!1}else ht?(bt&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,st.width,st.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,Wt,zt,st.data)):e.texImage2D(r.TEXTURE_2D,0,Ct,st.width,st.height,0,Wt,zt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ht&&bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ct,P[0].width,P[0].height,st.depth);for(let ot=0,I=P.length;ot<I;ot++)vt=P[ot],E.format!==Tn?Wt!==null?ht?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,st.depth,Wt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,Ct,vt.width,vt.height,st.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,st.depth,Wt,zt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ot,Ct,vt.width,vt.height,st.depth,0,Wt,zt,vt.data)}else{ht&&bt&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let ot=0,I=P.length;ot<I;ot++)vt=P[ot],E.format!==Tn?Wt!==null?ht?e.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,vt.width,vt.height,Wt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,ot,Ct,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,vt.width,vt.height,Wt,zt,vt.data):e.texImage2D(r.TEXTURE_2D,ot,Ct,vt.width,vt.height,0,Wt,zt,vt.data)}else if(E.isDataArrayTexture)ht?(bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ct,st.width,st.height,st.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Wt,zt,st.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,st.width,st.height,st.depth,0,Wt,zt,st.data);else if(E.isData3DTexture)ht?(bt&&e.texStorage3D(r.TEXTURE_3D,yt,Ct,st.width,st.height,st.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Wt,zt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,st.width,st.height,st.depth,0,Wt,zt,st.data);else if(E.isFramebufferTexture){if(bt)if(ht)e.texStorage2D(r.TEXTURE_2D,yt,Ct,st.width,st.height);else{let ot=st.width,I=st.height;for(let ut=0;ut<yt;ut++)e.texImage2D(r.TEXTURE_2D,ut,Ct,ot,I,0,Wt,zt,null),ot>>=1,I>>=1}}else if(P.length>0&&$t){ht&&bt&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,P[0].width,P[0].height);for(let ot=0,I=P.length;ot<I;ot++)vt=P[ot],ht?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,Wt,zt,vt):e.texImage2D(r.TEXTURE_2D,ot,Ct,Wt,zt,vt);E.generateMipmaps=!1}else ht?(bt&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,st.width,st.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,zt,st)):e.texImage2D(r.TEXTURE_2D,0,Ct,Wt,zt,st);x(E,$t)&&v(rt),Et.__version=nt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function St(A,E,B){if(E.image.length!==6)return;const rt=j(A,E),it=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);const nt=n.get(it);if(it.version!==nt.__version||rt===!0){e.activeTexture(r.TEXTURE0+B);const Et=ee.getPrimaries(ee.workingColorSpace),pt=E.colorSpace===gn?null:ee.getPrimaries(E.colorSpace),xt=E.colorSpace===gn||Et===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Gt=E.image[0]&&E.image[0].isDataTexture,st=[];for(let ot=0;ot<6;ot++)!Rt&&!Gt?st[ot]=_(E.image[ot],!1,!0,i.maxCubemapSize):st[ot]=Gt?E.image[ot].image:E.image[ot],st[ot]=_t(E,st[ot]);const $t=st[0],Wt=p($t)||a,zt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),vt=M(E.internalFormat,zt,Ct,E.colorSpace),P=a&&E.isVideoTexture!==!0,ht=nt.__version===void 0||rt===!0;let bt=b(E,$t,Wt);W(r.TEXTURE_CUBE_MAP,E,Wt);let yt;if(Rt){P&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,vt,$t.width,$t.height);for(let ot=0;ot<6;ot++){yt=st[ot].mipmaps;for(let I=0;I<yt.length;I++){const ut=yt[I];E.format!==Tn?zt!==null?P?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,ut.width,ut.height,zt,Ct,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,vt,ut.width,ut.height,0,zt,Ct,ut.data)}}}else{yt=E.mipmaps,P&&ht&&(yt.length>0&&bt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,vt,st[0].width,st[0].height));for(let ot=0;ot<6;ot++)if(Gt){P?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,st[ot].width,st[ot].height,zt,Ct,st[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,vt,st[ot].width,st[ot].height,0,zt,Ct,st[ot].data);for(let I=0;I<yt.length;I++){const mt=yt[I].image[ot].image;P?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,mt.width,mt.height,zt,Ct,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,vt,mt.width,mt.height,0,zt,Ct,mt.data)}}else{P?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,zt,Ct,st[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,vt,zt,Ct,st[ot]);for(let I=0;I<yt.length;I++){const ut=yt[I];P?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,zt,Ct,ut.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,vt,zt,Ct,ut.image[ot])}}}x(E,Wt)&&v(r.TEXTURE_CUBE_MAP),nt.__version=it.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function gt(A,E,B,rt,it,nt){const Et=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),xt=M(B.internalFormat,Et,pt,B.colorSpace);if(!n.get(E).__hasExternalTextures){const Gt=Math.max(1,E.width>>nt),st=Math.max(1,E.height>>nt);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,xt,Gt,st,E.depth,0,Et,pt,null):e.texImage2D(it,nt,xt,Gt,st,0,Et,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),K(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,it,n.get(B).__webglTexture,0,lt(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,it,n.get(B).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(A,E,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let rt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||K(E)){const it=E.depthTexture;it&&it.isDepthTexture&&(it.type===ai?rt=r.DEPTH_COMPONENT32F:it.type===oi&&(rt=r.DEPTH_COMPONENT24));const nt=lt(E);K(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,rt,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,rt,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,rt,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const rt=lt(E);B&&K(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const rt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0;it<rt.length;it++){const nt=rt[it],Et=s.convert(nt.format,nt.colorSpace),pt=s.convert(nt.type),xt=M(nt.internalFormat,Et,pt,nt.colorSpace),Rt=lt(E);B&&K(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,xt,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const rt=n.get(E.depthTexture).__webglTexture,it=lt(E);if(E.depthTexture.format===Ni)K(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(E.depthTexture.format===Ps)K(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Tt(A){const E=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,A)}else if(B){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]=r.createRenderbuffer(),Lt(E.__webglDepthbuffer[rt],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Lt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(A,E,B){const rt=n.get(A);E!==void 0&&gt(rt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Tt(A)}function U(A){const E=A.texture,B=n.get(A),rt=n.get(E);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=E.version,o.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,nt=A.isWebGLMultipleRenderTargets===!0,Et=p(A)||a;if(it){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let xt=0;xt<E.mipmaps.length;xt++)B.__webglFramebuffer[pt][xt]=r.createFramebuffer()}else B.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<E.mipmaps.length;pt++)B.__webglFramebuffer[pt]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(nt)if(i.drawBuffers){const pt=A.texture;for(let xt=0,Rt=pt.length;xt<Rt;xt++){const Gt=n.get(pt[xt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&K(A)===!1){const pt=nt?E:[E];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<pt.length;xt++){const Rt=pt[xt];B.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);const Gt=s.convert(Rt.format,Rt.colorSpace),st=s.convert(Rt.type),$t=M(Rt.internalFormat,Gt,st,Rt.colorSpace,A.isXRRenderTarget===!0),Wt=lt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,$t,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),W(r.TEXTURE_CUBE_MAP,E,Et);for(let pt=0;pt<6;pt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)gt(B.__webglFramebuffer[pt][xt],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else gt(B.__webglFramebuffer[pt],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(E,Et)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const pt=A.texture;for(let xt=0,Rt=pt.length;xt<Rt;xt++){const Gt=pt[xt],st=n.get(Gt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),W(r.TEXTURE_2D,Gt,Et),gt(B.__webglFramebuffer,A,Gt,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),x(Gt,Et)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,rt.__webglTexture),W(pt,E,Et),a&&E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)gt(B.__webglFramebuffer[xt],A,E,r.COLOR_ATTACHMENT0,pt,xt);else gt(B.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,pt,0);x(E,Et)&&v(pt),e.unbindTexture()}A.depthBuffer&&Tt(A)}function ft(A){const E=p(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let rt=0,it=B.length;rt<it;rt++){const nt=B[rt];if(x(nt,E)){const Et=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pt=n.get(nt).__webglTexture;e.bindTexture(Et,pt),v(Et),e.unbindTexture()}}}function $(A){if(a&&A.samples>0&&K(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,rt=A.height;let it=r.COLOR_BUFFER_BIT;const nt=[],Et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=n.get(A),xt=A.isWebGLMultipleRenderTargets===!0;if(xt)for(let Rt=0;Rt<E.length;Rt++)e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){nt.push(r.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&nt.push(Et);const Gt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),xt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[Rt]),Gt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Et])),xt){const st=n.get(E[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,B,rt,0,0,B,rt,it,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let Rt=0;Rt<E.length;Rt++){e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,pt.__webglColorRenderbuffer[Rt]);const Gt=n.get(E[Rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function lt(A){return Math.min(i.maxSamples,A.samples)}function K(A){const E=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function _t(A,E){const B=A.colorSpace,rt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Xa||B!==Kn&&B!==gn&&(ee.getTransfer(B)===se?a===!1?t.has("EXT_sRGB")===!0&&rt===Tn?(A.format=Xa,A.minFilter=mn,A.generateMipmaps=!1):E=mu.sRGBToLinear(E):(rt!==Tn||it!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=D,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Nt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=K}function q0(r,t,e){const n=e.isWebGL2;function i(s,o=gn){let a;const l=ee.getTransfer(o);if(s===di)return r.UNSIGNED_BYTE;if(s===ru)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ou)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rd)return r.BYTE;if(s===Pd)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===su)return r.INT;if(s===oi)return r.UNSIGNED_INT;if(s===ai)return r.FLOAT;if(s===jn)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ld)return r.ALPHA;if(s===Tn)return r.RGBA;if(s===Dd)return r.LUMINANCE;if(s===Ud)return r.LUMINANCE_ALPHA;if(s===Ni)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===Xa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Id)return r.RED;if(s===au)return r.RED_INTEGER;if(s===Nd)return r.RG;if(s===lu)return r.RG_INTEGER;if(s===cu)return r.RGBA_INTEGER;if(s===Yo||s===qo||s===jo||s===Zo)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sc||s===rc||s===oc||s===ac)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lc||s===cc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lc)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===_c||s===gc||s===vc||s===xc||s===Mc||s===yc||s===Sc||s===Ec)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_c)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ec)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ko||s===Tc||s===wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ko)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Od||s===bc||s===Ac||s===Cc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ko)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class j0 extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class K0 extends Wi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const x=[],v=[],M=new J;let b=null;const S=new Ze;S.layers.enable(1),S.viewport=new re;const T=new Ze;T.layers.enable(2),T.viewport=new re;const L=[S,T],y=new j0;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=x[W];return j===void 0&&(j=new Ma,x[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=x[W];return j===void 0&&(j=new Ma,x[W]=j),j.getGripSpace()},this.getHand=function(W){let j=x[W];return j===void 0&&(j=new Ma,x[W]=j),j.getHandSpace()};function F(W){const j=v.indexOf(W.inputSource);if(j===-1)return;const ct=x[j];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||o),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",D);for(let W=0;W<x.length;W++){const j=v[W];j!==null&&(v[W]=null,x[W].disconnect(j))}w=null,N=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new wn(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ct=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?Ps:Ni,ct=_.stencil?Ii:oi);const gt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(gt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new wn(f.textureWidth,f.textureHeight,{format:Tn,type:di,depthTexture:new wu(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Lt=t.properties.get(d);Lt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(W){for(let j=0;j<W.removed.length;j++){const ct=W.removed[j],St=v.indexOf(ct);St>=0&&(v[St]=null,x[St].disconnect(ct))}for(let j=0;j<W.added.length;j++){const ct=W.added[j];let St=v.indexOf(ct);if(St===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(ct),St=Lt;break}else if(v[Lt]===null){v[Lt]=ct,St=Lt;break}if(St===-1)break}const gt=x[St];gt&&gt.connect(ct)}}const O=new R,z=new R;function H(W,j,ct){O.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ct.matrixWorld);const St=O.distanceTo(z),gt=j.projectionMatrix.elements,Lt=ct.projectionMatrix.elements,Ft=gt[14]/(gt[10]-1),Tt=gt[14]/(gt[10]+1),Nt=(gt[9]+1)/gt[5],U=(gt[9]-1)/gt[5],ft=(gt[8]-1)/gt[0],$=(Lt[8]+1)/Lt[0],lt=Ft*ft,K=Ft*$,wt=St/(-ft+$),_t=wt*-ft;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ft+wt,E=Tt+wt,B=lt-_t,rt=K+(St-_t),it=Nt*Tt/E*A,nt=U*Tt/E*A;W.projectionMatrix.makePerspective(B,rt,it,nt,A,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=T.near=S.near=W.near,y.far=T.far=S.far=W.far,(w!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);const j=W.parent,ct=y.cameras;q(y,j);for(let St=0;St<ct.length;St++)q(ct[St],j);ct.length===2?H(y,S,T):y.projectionMatrix.copy(S.projectionMatrix),Z(W,y,j)};function Z(W,j,ct){ct===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=go*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let Q=null;function et(W,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let St=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let gt=0;gt<ct.length;gt++){const Lt=ct[gt];let Ft=null;if(m!==null)Ft=m.getViewport(Lt);else{const Nt=u.getViewSubImage(f,Lt);Ft=Nt.viewport,gt===0&&(t.setRenderTargetTextures(d,Nt.colorTexture,f.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(d))}let Tt=L[gt];Tt===void 0&&(Tt=new Ze,Tt.layers.enable(gt),Tt.viewport=new re,L[gt]=Tt),Tt.matrix.fromArray(Lt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Lt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),gt===0&&(y.matrix.copy(Tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(Tt)}}for(let ct=0;ct<x.length;ct++){const St=v[ct],gt=x[ct];St!==null&&gt!==void 0&&gt.update(St,j,c||o)}Q&&Q(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const tt=new Tu;tt.setAnimationLoop(et),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function J0(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,yu(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,x,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,x,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===je&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===je&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===je&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const x=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $0(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",p));const b=v.program;n.updateUBOMapping(x,b);const S=t.render.frame;s[x.id]!==S&&(f(x),s[x.id]=S)}function h(x){const v=u();x.__bindingPointIndex=v;const M=r.createBuffer(),b=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,b,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,T=M.length;S<T;S++){const L=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,w=L.length;y<w;y++){const N=L[y];if(m(N,S,y,b)===!0){const F=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let O=0;O<X.length;O++){const z=X[O],H=_(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,F+D,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(x,v,M,b){const S=x.value,T=v+"_"+M;if(b[T]===void 0)return typeof S=="number"||typeof S=="boolean"?b[T]=S:b[T]=S.clone(),!0;{const L=b[T];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return b[T]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(x){const v=x.uniforms;let M=0;const b=16;for(let T=0,L=v.length;T<L;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,N=y.length;w<N;w++){const F=y[w],X=Array.isArray(F.value)?F.value:[F.value];for(let D=0,O=X.length;D<O;D++){const z=X[D],H=_(z),q=M%b;q!==0&&b-q<H.boundary&&(M+=b-q),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=H.storage}}}const S=M%b;return S>0&&(M+=b-S),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Lu{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let M=!1,b=0,S=0,T=null,L=-1,y=null;const w=new re,N=new re;let F=null;const X=new Ot(0);let D=0,O=e.width,z=e.height,H=1,q=null,Z=null;const Q=new re(0,0,O,z),et=new re(0,0,O,z);let tt=!1;const W=new gl;let j=!1,ct=!1,St=null;const gt=new ue,Lt=new J,Ft=new R,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return T===null?H:1}let U=n;function ft(C,G){for(let V=0;V<C.length;V++){const Y=C[V],k=e.getContext(Y,G);if(k!==null)return k}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),U=ft(G,C),U===null)throw ft(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,lt,K,wt,_t,A,E,B,rt,it,nt,Et,pt,xt,Rt,Gt,st,$t,Wt,zt,Ct,vt,P,ht;function bt(){$=new lg(U),lt=new ng(U,$,t),$.init(lt),vt=new q0(U,$,lt),K=new X0(U,$,lt),wt=new ug(U),_t=new L0,A=new Y0(U,$,K,_t,lt,vt,wt),E=new sg(v),B=new ag(v),rt=new xp(U,lt),P=new tg(U,$,rt,lt),it=new cg(U,rt,wt,P),nt=new mg(U,it,rt,wt),Wt=new pg(U,lt,A),Gt=new ig(_t),Et=new P0(v,E,B,$,lt,P,Gt),pt=new J0(v,_t),xt=new U0,Rt=new B0($,lt),$t=new Q_(v,E,B,K,nt,f,l),st=new W0(v,nt,lt),ht=new $0(U,wt,lt,K),zt=new eg(U,$,wt,lt),Ct=new hg(U,$,wt,lt),wt.programs=Et.programs,v.capabilities=lt,v.extensions=$,v.properties=_t,v.renderLists=xt,v.shadowMap=st,v.state=K,v.info=wt}bt();const yt=new K0(v,U);this.xr=yt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(O,z,!1))},this.getSize=function(C){return C.set(O,z)},this.setSize=function(C,G,V=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,z=G,e.width=Math.floor(C*H),e.height=Math.floor(G*H),V===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(O*H,z*H).floor()},this.setDrawingBufferSize=function(C,G,V){O=C,z=G,H=V,e.width=Math.floor(C*V),e.height=Math.floor(G*V),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,G,V,Y){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,V,Y),K.viewport(w.copy(Q).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,G,V,Y){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,G,V,Y),K.scissor(N.copy(et).multiplyScalar(H).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){K.setScissorTest(tt=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,G=!0,V=!0){let Y=0;if(C){let k=!1;if(T!==null){const Mt=T.texture.format;k=Mt===cu||Mt===lu||Mt===au}if(k){const Mt=T.texture.type,At=Mt===di||Mt===oi||Mt===pl||Mt===Ii||Mt===ru||Mt===ou,Ut=$t.getClearColor(),Bt=$t.getClearAlpha(),Xt=Ut.r,kt=Ut.g,Ht=Ut.b;At?(m[0]=Xt,m[1]=kt,m[2]=Ht,m[3]=Bt,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Xt,g[1]=kt,g[2]=Ht,g[3]=Bt,U.clearBufferiv(U.COLOR,0,g))}else Y|=U.COLOR_BUFFER_BIT}G&&(Y|=U.DEPTH_BUFFER_BIT),V&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),xt.dispose(),Rt.dispose(),_t.dispose(),E.dispose(),B.dispose(),nt.dispose(),P.dispose(),ht.dispose(),Et.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",_e),yt.removeEventListener("sessionend",Qt),St&&(St.dispose(),St=null),ye.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=wt.autoReset,G=st.enabled,V=st.autoUpdate,Y=st.needsUpdate,k=st.type;bt(),wt.autoReset=C,st.enabled=G,st.autoUpdate=V,st.needsUpdate=Y,st.type=k}function ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){const G=C.target;G.removeEventListener("dispose",mt),Dt(G)}function Dt(C){Pt(C),_t.remove(C)}function Pt(C){const G=_t.get(C).programs;G!==void 0&&(G.forEach(function(V){Et.releaseProgram(V)}),C.isShaderMaterial&&Et.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,V,Y,k,Mt){G===null&&(G=Tt);const At=k.isMesh&&k.matrixWorld.determinant()<0,Ut=Yf(C,G,V,Y,k);K.setMaterial(Y,At);let Bt=V.index,Xt=1;if(Y.wireframe===!0){if(Bt=it.getWireframeAttribute(V),Bt===void 0)return;Xt=2}const kt=V.drawRange,Ht=V.attributes.position;let ge=kt.start*Xt,nn=(kt.start+kt.count)*Xt;Mt!==null&&(ge=Math.max(ge,Mt.start*Xt),nn=Math.min(nn,(Mt.start+Mt.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),nn=Math.min(nn,Bt.count)):Ht!=null&&(ge=Math.max(ge,0),nn=Math.min(nn,Ht.count));const Pe=nn-ge;if(Pe<0||Pe===1/0)return;P.setup(k,Y,Ut,V,Bt);let In,ae=zt;if(Bt!==null&&(In=rt.get(Bt),ae=Ct,ae.setIndex(In)),k.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*Nt()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),K.setLineWidth(Yt*Nt()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ae.renderInstances(ge,Pe,k.count);else if(V.isInstancedBufferGeometry){const Yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ko=Math.min(V.instanceCount,Yt);ae.renderInstances(ge,Pe,ko)}else ae.render(ge,Pe)};function jt(C,G,V){C.transparent===!0&&C.side===Wn&&C.forceSinglePass===!1?(C.side=je,C.needsUpdate=!0,wr(C,G,V),C.side=gi,C.needsUpdate=!0,wr(C,G,V),C.side=Wn):wr(C,G,V)}this.compile=function(C,G,V=null){V===null&&(V=C),p=Rt.get(V),p.init(),x.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),C!==V&&C.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const Y=new Set;return C.traverse(function(k){const Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Ut=Mt[At];jt(Ut,V,k),Y.add(Ut)}else jt(Mt,V,k),Y.add(Mt)}),x.pop(),p=null,Y},this.compileAsync=function(C,G,V=null){const Y=this.compile(C,G,V);return new Promise(k=>{function Mt(){if(Y.forEach(function(At){_t.get(At).currentProgram.isReady()&&Y.delete(At)}),Y.size===0){k(C);return}setTimeout(Mt,10)}$.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Zt=null;function fe(C){Zt&&Zt(C)}function _e(){ye.stop()}function Qt(){ye.start()}const ye=new Tu;ye.setAnimationLoop(fe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(C){Zt=C,yt.setAnimationLoop(C),C===null?ye.stop():ye.start()},yt.addEventListener("sessionstart",_e),yt.addEventListener("sessionend",Qt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(G),G=yt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,T),p=Rt.get(C,x.length),p.init(),x.push(p),gt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(gt),ct=this.localClippingEnabled,j=Gt.init(this.clippingPlanes,ct),_=xt.get(C,d.length),_.init(),d.push(_),bn(C,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Z),this.info.render.frame++,j===!0&&Gt.beginShadows();const V=p.state.shadowsArray;if(st.render(V,C,G),j===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(_,C),p.setupLights(v._useLegacyLights),G.isArrayCamera){const Y=G.cameras;for(let k=0,Mt=Y.length;k<Mt;k++){const At=Y[k];Yl(_,C,At,At.viewport)}}else Yl(_,C,G);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,G),P.resetDefaultState(),L=-1,y=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function bn(C,G,V,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){Y&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);const At=nt.update(C),Ut=C.material;Ut.visible&&_.push(C,At,Ut,V,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const At=nt.update(C),Ut=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ft.copy(At.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Ut)){const Bt=At.groups;for(let Xt=0,kt=Bt.length;Xt<kt;Xt++){const Ht=Bt[Xt],ge=Ut[Ht.materialIndex];ge&&ge.visible&&_.push(C,At,ge,V,Ft.z,Ht)}}else Ut.visible&&_.push(C,At,Ut,V,Ft.z,null)}}const Mt=C.children;for(let At=0,Ut=Mt.length;At<Ut;At++)bn(Mt[At],G,V,Y)}function Yl(C,G,V,Y){const k=C.opaque,Mt=C.transmissive,At=C.transparent;p.setupLightsView(V),j===!0&&Gt.setGlobalState(v.clippingPlanes,V),Mt.length>0&&Xf(k,Mt,G,V),Y&&K.viewport(w.copy(Y)),k.length>0&&Tr(k,G,V),Mt.length>0&&Tr(Mt,G,V),At.length>0&&Tr(At,G,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Xf(C,G,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Mt=lt.isWebGL2;St===null&&(St=new wn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?jn:di,minFilter:cr,samples:Mt?4:0})),v.getDrawingBufferSize(Lt),Mt?St.setSize(Lt.x,Lt.y):St.setSize(Ya(Lt.x),Ya(Lt.y));const At=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(X),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=fi,Tr(C,V,Y),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St);let Bt=!1;for(let Xt=0,kt=G.length;Xt<kt;Xt++){const Ht=G[Xt],ge=Ht.object,nn=Ht.geometry,Pe=Ht.material,In=Ht.group;if(Pe.side===Wn&&ge.layers.test(Y.layers)){const ae=Pe.side;Pe.side=je,Pe.needsUpdate=!0,ql(ge,V,Y,nn,Pe,In),Pe.side=ae,Pe.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St)),v.setRenderTarget(At),v.setClearColor(X,D),v.toneMapping=Ut}function Tr(C,G,V){const Y=G.isScene===!0?G.overrideMaterial:null;for(let k=0,Mt=C.length;k<Mt;k++){const At=C[k],Ut=At.object,Bt=At.geometry,Xt=Y===null?At.material:Y,kt=At.group;Ut.layers.test(V.layers)&&ql(Ut,G,V,Bt,Xt,kt)}}function ql(C,G,V,Y,k,Mt){C.onBeforeRender(v,G,V,Y,k,Mt),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,G,V,Y,C,Mt),k.transparent===!0&&k.side===Wn&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,v.renderBufferDirect(V,G,Y,k,C,Mt),k.side=gi,k.needsUpdate=!0,v.renderBufferDirect(V,G,Y,k,C,Mt),k.side=Wn):v.renderBufferDirect(V,G,Y,k,C,Mt),C.onAfterRender(v,G,V,Y,k,Mt)}function wr(C,G,V){G.isScene!==!0&&(G=Tt);const Y=_t.get(C),k=p.state.lights,Mt=p.state.shadowsArray,At=k.state.version,Ut=Et.getParameters(C,k.state,Mt,G,V),Bt=Et.getProgramCacheKey(Ut);let Xt=Y.programs;Y.environment=C.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(C.isMeshStandardMaterial?B:E).get(C.envMap||Y.environment),Xt===void 0&&(C.addEventListener("dispose",mt),Xt=new Map,Y.programs=Xt);let kt=Xt.get(Bt);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===At)return Zl(C,Ut),kt}else Ut.uniforms=Et.getUniforms(C),C.onBuild(V,Ut,v),C.onBeforeCompile(Ut,v),kt=Et.acquireProgram(Ut,Bt),Xt.set(Bt,kt),Y.uniforms=Ut.uniforms;const Ht=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=Gt.uniform),Zl(C,Ut),Y.needsLights=jf(C),Y.lightsStateVersion=At,Y.needsLights&&(Ht.ambientLightColor.value=k.state.ambient,Ht.lightProbe.value=k.state.probe,Ht.directionalLights.value=k.state.directional,Ht.directionalLightShadows.value=k.state.directionalShadow,Ht.spotLights.value=k.state.spot,Ht.spotLightShadows.value=k.state.spotShadow,Ht.rectAreaLights.value=k.state.rectArea,Ht.ltc_1.value=k.state.rectAreaLTC1,Ht.ltc_2.value=k.state.rectAreaLTC2,Ht.pointLights.value=k.state.point,Ht.pointLightShadows.value=k.state.pointShadow,Ht.hemisphereLights.value=k.state.hemi,Ht.directionalShadowMap.value=k.state.directionalShadowMap,Ht.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ht.spotShadowMap.value=k.state.spotShadowMap,Ht.spotLightMatrix.value=k.state.spotLightMatrix,Ht.spotLightMap.value=k.state.spotLightMap,Ht.pointShadowMap.value=k.state.pointShadowMap,Ht.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function jl(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=ao.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Zl(C,G){const V=_t.get(C);V.outputColorSpace=G.outputColorSpace,V.batching=G.batching,V.instancing=G.instancing,V.instancingColor=G.instancingColor,V.skinning=G.skinning,V.morphTargets=G.morphTargets,V.morphNormals=G.morphNormals,V.morphColors=G.morphColors,V.morphTargetsCount=G.morphTargetsCount,V.numClippingPlanes=G.numClippingPlanes,V.numIntersection=G.numClipIntersection,V.vertexAlphas=G.vertexAlphas,V.vertexTangents=G.vertexTangents,V.toneMapping=G.toneMapping}function Yf(C,G,V,Y,k){G.isScene!==!0&&(G=Tt),A.resetTextureUnits();const Mt=G.fog,At=Y.isMeshStandardMaterial?G.environment:null,Ut=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,Bt=(Y.isMeshStandardMaterial?B:E).get(Y.envMap||At),Xt=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!V.morphAttributes.position,ge=!!V.morphAttributes.normal,nn=!!V.morphAttributes.color;let Pe=fi;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pe=v.toneMapping);const In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=In!==void 0?In.length:0,Yt=_t.get(Y),ko=p.state.lights;if(j===!0&&(ct===!0||C!==y)){const fn=C===y&&Y.id===L;Gt.setState(Y,C,fn)}let de=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ko.state.version||Yt.outputColorSpace!==Ut||k.isBatchedMesh&&Yt.batching===!1||!k.isBatchedMesh&&Yt.batching===!0||k.isInstancedMesh&&Yt.instancing===!1||!k.isInstancedMesh&&Yt.instancing===!0||k.isSkinnedMesh&&Yt.skinning===!1||!k.isSkinnedMesh&&Yt.skinning===!0||k.isInstancedMesh&&Yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Yt.instancingColor===!1&&k.instanceColor!==null||Yt.envMap!==Bt||Y.fog===!0&&Yt.fog!==Mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Gt.numPlanes||Yt.numIntersection!==Gt.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==kt||Yt.morphTargets!==Ht||Yt.morphNormals!==ge||Yt.morphColors!==nn||Yt.toneMapping!==Pe||lt.isWebGL2===!0&&Yt.morphTargetsCount!==ae)&&(de=!0):(de=!0,Yt.__version=Y.version);let yi=Yt.currentProgram;de===!0&&(yi=wr(Y,G,k));let Kl=!1,ks=!1,Ho=!1;const Fe=yi.getUniforms(),Si=Yt.uniforms;if(K.useProgram(yi.program)&&(Kl=!0,ks=!0,Ho=!0),Y.id!==L&&(L=Y.id,ks=!0),Kl||y!==C){Fe.setValue(U,"projectionMatrix",C.projectionMatrix),Fe.setValue(U,"viewMatrix",C.matrixWorldInverse);const fn=Fe.map.cameraPosition;fn!==void 0&&fn.setValue(U,Ft.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&Fe.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Fe.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,ks=!0,Ho=!0)}if(k.isSkinnedMesh){Fe.setOptional(U,k,"bindMatrix"),Fe.setOptional(U,k,"bindMatrixInverse");const fn=k.skeleton;fn&&(lt.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Fe.setValue(U,"boneTexture",fn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Fe.setOptional(U,k,"batchingTexture"),Fe.setValue(U,"batchingTexture",k._matricesTexture,A));const Vo=V.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0&&lt.isWebGL2===!0)&&Wt.update(k,V,yi),(ks||Yt.receiveShadow!==k.receiveShadow)&&(Yt.receiveShadow=k.receiveShadow,Fe.setValue(U,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Si.envMap.value=Bt,Si.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ks&&(Fe.setValue(U,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&qf(Si,Ho),Mt&&Y.fog===!0&&pt.refreshFogUniforms(Si,Mt),pt.refreshMaterialUniforms(Si,Y,H,z,St),ao.upload(U,jl(Yt),Si,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ao.upload(U,jl(Yt),Si,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Fe.setValue(U,"center",k.center),Fe.setValue(U,"modelViewMatrix",k.modelViewMatrix),Fe.setValue(U,"normalMatrix",k.normalMatrix),Fe.setValue(U,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const fn=Y.uniformsGroups;for(let Wo=0,Zf=fn.length;Wo<Zf;Wo++)if(lt.isWebGL2){const Jl=fn[Wo];ht.update(Jl,yi),ht.bind(Jl,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function qf(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function jf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,G,V){_t.get(C.texture).__webglTexture=G,_t.get(C.depthTexture).__webglTexture=V;const Y=_t.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const V=_t.get(C);V.__webglFramebuffer=G,V.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,V=0){T=C,b=G,S=V;let Y=!0,k=null,Mt=!1,At=!1;if(C){const Bt=_t.get(C);Bt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Bt.__webglFramebuffer===void 0?A.setupRenderTarget(C):Bt.__hasExternalTextures&&A.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const kt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?k=kt[G][V]:k=kt[G],Mt=!0):lt.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?k=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?k=kt[V]:k=kt,w.copy(C.viewport),N.copy(C.scissor),F=C.scissorTest}else w.copy(Q).multiplyScalar(H).floor(),N.copy(et).multiplyScalar(H).floor(),F=tt;if(K.bindFramebuffer(U.FRAMEBUFFER,k)&&lt.drawBuffers&&Y&&K.drawBuffers(C,k),K.viewport(w),K.scissor(N),K.setScissorTest(F),Mt){const Bt=_t.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,V)}else if(At){const Bt=_t.get(C.texture),Xt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,V||0,Xt)}L=-1},this.readRenderTargetPixels=function(C,G,V,Y,k,Mt,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Ut=Ut[At]),Ut){K.bindFramebuffer(U.FRAMEBUFFER,Ut);try{const Bt=C.texture,Xt=Bt.format,kt=Bt.type;if(Xt!==Tn&&vt.convert(Xt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=kt===jn&&($.has("EXT_color_buffer_half_float")||lt.isWebGL2&&$.has("EXT_color_buffer_float"));if(kt!==di&&vt.convert(kt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===ai&&(lt.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&V>=0&&V<=C.height-k&&U.readPixels(G,V,Y,k,vt.convert(Xt),vt.convert(kt),Mt)}finally{const Bt=T!==null?_t.get(T).__webglFramebuffer:null;K.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(C,G,V=0){const Y=Math.pow(2,-V),k=Math.floor(G.image.width*Y),Mt=Math.floor(G.image.height*Y);A.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,C.x,C.y,k,Mt),K.unbindTexture()},this.copyTextureToTexture=function(C,G,V,Y=0){const k=G.image.width,Mt=G.image.height,At=vt.convert(V.format),Ut=vt.convert(V.type);A.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,k,Mt,At,Ut,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,At,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Y,C.x,C.y,At,Ut,G.image),Y===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(C,G,V,Y,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=C.max.x-C.min.x+1,At=C.max.y-C.min.y+1,Ut=C.max.z-C.min.z+1,Bt=vt.convert(Y.format),Xt=vt.convert(Y.type);let kt;if(Y.isData3DTexture)A.setTexture3D(Y,0),kt=U.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),kt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ht=U.getParameter(U.UNPACK_ROW_LENGTH),ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),Pe=U.getParameter(U.UNPACK_SKIP_ROWS),In=U.getParameter(U.UNPACK_SKIP_IMAGES),ae=V.isCompressedTexture?V.mipmaps[k]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(kt,k,G.x,G.y,G.z,Mt,At,Ut,Bt,Xt,ae.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(kt,k,G.x,G.y,G.z,Mt,At,Ut,Bt,ae.data)):U.texSubImage3D(kt,k,G.x,G.y,G.z,Mt,At,Ut,Bt,Xt,ae),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,In),k===0&&Y.generateMipmaps&&U.generateMipmap(kt),K.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),K.unbindTexture()},this.resetState=function(){b=0,S=0,T=null,K.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ml?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Oi:uu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oi?De:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Q0 extends Lu{}Q0.prototype.isWebGL1Renderer=!0;class Ml{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tv extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ev{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new R;class Mo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $s extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let us;const Ys=new R,fs=new R,ds=new R,ps=new J,qs=new J,Du=new ue,jr=new R,js=new R,Zr=new R,_h=new J,ya=new J,gh=new J;class Kr extends Me{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ev(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Mo(n,3,0,!1)),us.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Jr(jr.set(-.5,-.5,0),ds,o,fs,i,s),Jr(js.set(.5,-.5,0),ds,o,fs,i,s),Jr(Zr.set(.5,.5,0),ds,o,fs,i,s),_h.set(0,0),ya.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(jr,js,Zr,!1,Ys);if(a===null&&(Jr(js.set(-.5,.5,0),ds,o,fs,i,s),ya.set(0,1),a=t.ray.intersectTriangle(jr,Zr,js,!1,Ys),a===null))return;const l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:_n.getInterpolation(Ys,jr,js,Zr,_h,ya,gh,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(r,t,e,n,i,s){ps.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=s*ps.x-i*ps.y,qs.y=i*ps.x+s*ps.y):qs.copy(ps),r.copy(t),r.x+=qs.x,r.y+=qs.y,r.applyMatrix4(Du)}class nv extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new ue,ja=new No,$r=new Io,Qr=new R;class to extends Me{constructor(t=new pe,e=new nv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,t.ray.intersectsSphere($r)===!1)return;vh.copy(i).invert(),ja.copy(t.ray).applyMatrix4(vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Qr.fromBufferAttribute(u,p),xh(Qr,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Qr.fromBufferAttribute(u,g),xh(Qr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xh(r,t,e,n,i,s,o){const a=ja.distanceSqToPoint(r);if(a<e){const l=new R;ja.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Zs extends Ke{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new J:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],s=[],o=[],a=new R,l=new ue;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(Ue(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yl extends Un{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class iv extends yl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,i(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const eo=new R,Sa=new Sl,Ea=new Sl,Ta=new Sl;class Qs extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(eo.subVectors(i[0],i[1]).add(i[0]),c=eo);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(eo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Sa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Ea.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),Ta.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ea.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ta.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sa.calc(l),Ea.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function sv(r,t){const e=1-r;return e*e*t}function rv(r,t){return 2*(1-r)*r*t}function ov(r,t){return r*r*t}function ir(r,t,e,n){return sv(r,t)+rv(r,e)+ov(r,n)}function av(r,t){const e=1-r;return e*e*e*t}function lv(r,t){const e=1-r;return 3*e*e*r*t}function cv(r,t){return 3*(1-r)*r*r*t}function hv(r,t){return r*r*r*t}function sr(r,t,e,n,i){return av(r,t)+lv(r,e)+cv(r,n)+hv(r,i)}class Uu extends Un{constructor(t=new J,e=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new J){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(t,i.x,s.x,o.x,a.x),sr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uv extends Un{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(t,i.x,s.x,o.x,a.x),sr(t,i.y,s.y,o.y,a.y),sr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends Un{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fv extends Un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Un{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,i.x,s.x,o.x),ir(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends Un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,i.x,s.x,o.x),ir(t,i.y,s.y,o.y),ir(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Mh(a,l.x,c.x,h.x,u.x),Mh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new J().fromArray(i))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:iv,CatmullRomCurve3:Qs,CubicBezierCurve:Uu,CubicBezierCurve3:uv,EllipseCurve:yl,LineCurve:Iu,LineCurve3:fv,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:Ou,SplineCurve:Fu});class dv extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new yo[i.type]().fromJSON(i))}return this}}class yh extends dv{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Iu(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Nu(this.currentPoint.clone(),new J(t,e),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Uu(this.currentPoint.clone(),new J(t,e),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new yl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class So extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new R,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Kt extends pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(m,2));function x(){const M=new R,b=new R;let S=0;const T=(e-t)/n;for(let L=0;L<=s;L++){const y=[],w=L/s,N=w*(e-t)+t;for(let F=0;F<=i;F++){const X=F/i,D=X*l+a,O=Math.sin(D),z=Math.cos(D);b.x=N*O,b.y=-w*n+p,b.z=N*z,u.push(b.x,b.y,b.z),M.set(O,T,z).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-w),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<s;y++){const w=_[y][L],N=_[y+1][L],F=_[y+1][L+1],X=_[y][L+1];h.push(w,N,X),h.push(N,F,X),S+=6}c.addGroup(d,S,0),d+=S}function v(M){const b=g,S=new J,T=new R;let L=0;const y=M===!0?t:e,w=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const N=g;for(let F=0;F<=i;F++){const D=F/i*l+a,O=Math.cos(D),z=Math.sin(D);T.x=y*z,T.y=p*w,T.z=y*O,u.push(T.x,T.y,T.z),f.push(0,w,0),S.x=O*.5+.5,S.y=z*.5*w+.5,m.push(S.x,S.y),g++}for(let F=0;F<i;F++){const X=b+F,D=N+F;M===!0?h.push(D,D+1,X):h.push(D+1,D,X),L+=3}c.addGroup(d,L,M===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class El extends Kt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new El(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tl extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new R,M=new R,b=new R;for(let S=0;S<e.length;S+=3)m(e[S+0],v),m(e[S+1],M),m(e[S+2],b),l(v,M,b,x)}function l(x,v,M,b){const S=b+1,T=[];for(let L=0;L<=S;L++){T[L]=[];const y=x.clone().lerp(M,L/S),w=v.clone().lerp(M,L/S),N=S-L;for(let F=0;F<=N;F++)F===0&&L===S?T[L][F]=y:T[L][F]=y.clone().lerp(w,F/N)}for(let L=0;L<S;L++)for(let y=0;y<2*(S-L)-1;y++){const w=Math.floor(y/2);y%2===0?(f(T[L][w+1]),f(T[L+1][w]),f(T[L][w])):(f(T[L][w+1]),f(T[L+1][w+1]),f(T[L+1][w]))}}function c(x){const v=new R;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){const x=new R;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const M=p(x)/2/Math.PI+.5,b=d(x)/Math.PI+.5;o.push(M,1-b)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],b=o[x+4],S=Math.max(v,M,b),T=Math.min(v,M,b);S>.9&&T<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function m(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new R,v=new R,M=new R,b=new R,S=new J,T=new J,L=new J;for(let y=0,w=0;y<s.length;y+=9,w+=6){x.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),S.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),L.set(o[w+4],o[w+5]),b.copy(x).add(v).add(M).divideScalar(3);const N=p(b);_(S,w+0,x,N),_(T,w+2,v,N),_(L,w+4,M,N)}}function _(x,v,M,b){b<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.vertices,t.indices,t.radius,t.details)}}class rr extends yh{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yh().fromJSON(i))}return this}}const pv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=zu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,m;if(n&&(s=xv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return hr(s,o,e,a,l,m,0),o}};function zu(r,t,e,n,i){let s,o;if(i===Pv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Sh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Sh(s,r[s],r[s+1],o);return o&&Fo(o,o.next)&&(fr(o),o=o.next),o}function Hi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||ce(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Tv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?_v(r,n,i,s):mv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),fr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=gv(Hi(r),t,e),hr(r,t,e,n,i,s,2)):o===2&&vv(r,t,e,n,i,s):hr(Hi(r),t,e,n,i,s,1);break}}}function mv(r){const t=r.prev,e=r,n=r.next;if(ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&xs(i,a,s,l,o,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _v(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ce(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,d=Za(m,g,t,e,n),x=Za(_,p,t,e,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=d&&M&&M.z<=x;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&xs(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&xs(a,h,l,u,c,f,M.x,M.y)&&ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&xs(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&xs(a,h,l,u,c,f,M.x,M.y)&&ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Fo(i,s)&&Bu(i,n,n.next,s)&&ur(i,s)&&ur(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),fr(n),fr(n.next),n=r=s),n=n.next}while(n!==r);return Hi(n)}function vv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Av(o,a)){let l=Gu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),hr(o,t,e,n,i,s,0),hr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function xv(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=zu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(bv(c));for(i.sort(Mv),s=0;s<i.length;s++)e=yv(i[s],e);return e}function Mv(r,t){return r.x-t.x}function yv(r,t){const e=Sv(r,t);if(!e)return t;const n=Gu(e,r);return Hi(n,n.next),Hi(e,e.next)}function Sv(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&xs(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),ur(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Ev(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Ev(r,t){return ce(r.prev,r,t.prev)<0&&ce(t.next,r,r.next)<0}function Tv(r,t,e,n){let i=r;do i.z===0&&(i.z=Za(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,wv(i)}function wv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Za(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function bv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function xs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Av(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Cv(r,t)&&(ur(r,t)&&ur(t,r)&&Rv(r,t)&&(ce(r.prev,r,t.prev)||ce(r,t.prev,t))||Fo(r,t)&&ce(r.prev,r,r.next)>0&&ce(t.prev,t,t.next)>0)}function ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Fo(r,t){return r.x===t.x&&r.y===t.y}function Bu(r,t,e,n){const i=io(ce(r,t,e)),s=io(ce(r,t,n)),o=io(ce(e,n,r)),a=io(ce(e,n,t));return!!(i!==s&&o!==a||i===0&&no(r,e,t)||s===0&&no(r,n,t)||o===0&&no(e,r,n)||a===0&&no(e,t,n))}function no(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function io(r){return r>0?1:r<0?-1:0}function Cv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ur(r,t){return ce(r.prev,r,r.next)<0?ce(r,t,r.next)>=0&&ce(r,r.prev,t)>=0:ce(r,t,r.prev)<0||ce(r,r.next,t)<0}function Rv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Gu(r,t){const e=new Ka(r.i,r.x,r.y),n=new Ka(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Sh(r,t,e,n){const i=new Ka(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ka(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class pi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Eh(t),Th(n,t);let o=t.length;e.forEach(Eh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Th(n,e[l]);const a=pv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Eh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Th(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class wl extends pe{constructor(t=new rr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Lv;let v,M=!1,b,S,T,L;d&&(v=d.getSpacedPoints(h),M=!0,f=!1,b=d.computeFrenetFrames(h,!1),S=new R,T=new R,L=new R),f||(p=0,m=0,g=0,_=0);const y=a.extractPoints(c);let w=y.shape;const N=y.holes;if(!pi.isClockWise(w)){w=w.reverse();for(let U=0,ft=N.length;U<ft;U++){const $=N[U];pi.isClockWise($)&&(N[U]=$.reverse())}}const X=pi.triangulateShape(w,N),D=w;for(let U=0,ft=N.length;U<ft;U++){const $=N[U];w=w.concat($)}function O(U,ft,$){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ft,$)}const z=w.length,H=X.length;function q(U,ft,$){let lt,K,wt;const _t=U.x-ft.x,A=U.y-ft.y,E=$.x-U.x,B=$.y-U.y,rt=_t*_t+A*A,it=_t*B-A*E;if(Math.abs(it)>Number.EPSILON){const nt=Math.sqrt(rt),Et=Math.sqrt(E*E+B*B),pt=ft.x-A/nt,xt=ft.y+_t/nt,Rt=$.x-B/Et,Gt=$.y+E/Et,st=((Rt-pt)*B-(Gt-xt)*E)/(_t*B-A*E);lt=pt+_t*st-U.x,K=xt+A*st-U.y;const $t=lt*lt+K*K;if($t<=2)return new J(lt,K);wt=Math.sqrt($t/2)}else{let nt=!1;_t>Number.EPSILON?E>Number.EPSILON&&(nt=!0):_t<-Number.EPSILON?E<-Number.EPSILON&&(nt=!0):Math.sign(A)===Math.sign(B)&&(nt=!0),nt?(lt=-A,K=_t,wt=Math.sqrt(rt)):(lt=_t,K=A,wt=Math.sqrt(rt/2))}return new J(lt/wt,K/wt)}const Z=[];for(let U=0,ft=D.length,$=ft-1,lt=U+1;U<ft;U++,$++,lt++)$===ft&&($=0),lt===ft&&(lt=0),Z[U]=q(D[U],D[$],D[lt]);const Q=[];let et,tt=Z.concat();for(let U=0,ft=N.length;U<ft;U++){const $=N[U];et=[];for(let lt=0,K=$.length,wt=K-1,_t=lt+1;lt<K;lt++,wt++,_t++)wt===K&&(wt=0),_t===K&&(_t=0),et[lt]=q($[lt],$[wt],$[_t]);Q.push(et),tt=tt.concat(et)}for(let U=0;U<p;U++){const ft=U/p,$=m*Math.cos(ft*Math.PI/2),lt=g*Math.sin(ft*Math.PI/2)+_;for(let K=0,wt=D.length;K<wt;K++){const _t=O(D[K],Z[K],lt);gt(_t.x,_t.y,-$)}for(let K=0,wt=N.length;K<wt;K++){const _t=N[K];et=Q[K];for(let A=0,E=_t.length;A<E;A++){const B=O(_t[A],et[A],lt);gt(B.x,B.y,-$)}}}const W=g+_;for(let U=0;U<z;U++){const ft=f?O(w[U],tt[U],W):w[U];M?(T.copy(b.normals[0]).multiplyScalar(ft.x),S.copy(b.binormals[0]).multiplyScalar(ft.y),L.copy(v[0]).add(T).add(S),gt(L.x,L.y,L.z)):gt(ft.x,ft.y,0)}for(let U=1;U<=h;U++)for(let ft=0;ft<z;ft++){const $=f?O(w[ft],tt[ft],W):w[ft];M?(T.copy(b.normals[U]).multiplyScalar($.x),S.copy(b.binormals[U]).multiplyScalar($.y),L.copy(v[U]).add(T).add(S),gt(L.x,L.y,L.z)):gt($.x,$.y,u/h*U)}for(let U=p-1;U>=0;U--){const ft=U/p,$=m*Math.cos(ft*Math.PI/2),lt=g*Math.sin(ft*Math.PI/2)+_;for(let K=0,wt=D.length;K<wt;K++){const _t=O(D[K],Z[K],lt);gt(_t.x,_t.y,u+$)}for(let K=0,wt=N.length;K<wt;K++){const _t=N[K];et=Q[K];for(let A=0,E=_t.length;A<E;A++){const B=O(_t[A],et[A],lt);M?gt(B.x,B.y+v[h-1].y,v[h-1].x+$):gt(B.x,B.y,u+$)}}}j(),ct();function j(){const U=i.length/3;if(f){let ft=0,$=z*ft;for(let lt=0;lt<H;lt++){const K=X[lt];Lt(K[2]+$,K[1]+$,K[0]+$)}ft=h+p*2,$=z*ft;for(let lt=0;lt<H;lt++){const K=X[lt];Lt(K[0]+$,K[1]+$,K[2]+$)}}else{for(let ft=0;ft<H;ft++){const $=X[ft];Lt($[2],$[1],$[0])}for(let ft=0;ft<H;ft++){const $=X[ft];Lt($[0]+z*h,$[1]+z*h,$[2]+z*h)}}n.addGroup(U,i.length/3-U,0)}function ct(){const U=i.length/3;let ft=0;St(D,ft),ft+=D.length;for(let $=0,lt=N.length;$<lt;$++){const K=N[$];St(K,ft),ft+=K.length}n.addGroup(U,i.length/3-U,1)}function St(U,ft){let $=U.length;for(;--$>=0;){const lt=$;let K=$-1;K<0&&(K=U.length-1);for(let wt=0,_t=h+p*2;wt<_t;wt++){const A=z*wt,E=z*(wt+1),B=ft+lt+A,rt=ft+K+A,it=ft+K+E,nt=ft+lt+E;Ft(B,rt,it,nt)}}}function gt(U,ft,$){l.push(U),l.push(ft),l.push($)}function Lt(U,ft,$){Tt(U),Tt(ft),Tt($);const lt=i.length/3,K=x.generateTopUV(n,i,lt-3,lt-2,lt-1);Nt(K[0]),Nt(K[1]),Nt(K[2])}function Ft(U,ft,$,lt){Tt(U),Tt(ft),Tt(lt),Tt(ft),Tt($),Tt(lt);const K=i.length/3,wt=x.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);Nt(wt[0]),Nt(wt[1]),Nt(wt[3]),Nt(wt[1]),Nt(wt[2]),Nt(wt[3])}function Tt(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function Nt(U){s.push(U.x),s.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Dv(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new yo[i.type]().fromJSON(i)),new wl(n,t.options)}}const Lv={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new J(s,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[s*3],p=t[s*3+1],d=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(f,1-g),new J(_,1-d)]:[new J(a,1-l),new J(h,1-u),new J(m,1-g),new J(p,1-d)]}};function Dv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bl extends Tl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bl(t.radius,t.detail)}}class Eo extends pe{constructor(t=new rr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let m=f.shape;const g=f.holes;pi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){const x=g[p];pi.isClockWise(x)===!0&&(g[p]=x.reverse())}const _=pi.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){const x=g[p];m=m.concat(x)}for(let p=0,d=m.length;p<d;p++){const x=m[p];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let p=0,d=_.length;p<d;p++){const x=_[p],v=x[0]+u,M=x[1]+u,b=x[2]+u;n.push(v,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Uv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Eo(n,t.curveSegments)}}function Uv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ge extends pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const S=b/e;u.x=-t*Math.cos(i+S*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+S*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(S+M,1-v),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const v=h[d][x+1],M=h[d][x],b=h[d+1][x],S=h[d+1][x+1];(d!==0||o>0)&&m.push(v,M,S),(d!==n-1||l<Math.PI)&&m.push(M,b,S)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ri extends pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,x=(i+1)*m+g;o.push(_,p,x),o.push(p,d,x)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class To extends pe{constructor(t=new Ou(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new J;let h=new R;const u=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(m,2));function _(){for(let v=0;v<e;v++)p(v);p(s===!1?e:0),x(),d()}function p(v){h=t.getPointAt(v/e,h);const M=o.normals[v],b=o.binormals[v];for(let S=0;S<=i;S++){const T=S/i*Math.PI*2,L=Math.sin(T),y=-Math.cos(T);l.x=y*M.x+L*b.x,l.y=y*M.y+L*b.y,l.z=y*M.z+L*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const b=(i+1)*(v-1)+(M-1),S=(i+1)*v+(M-1),T=(i+1)*v+M,L=(i+1)*(v-1)+M;g.push(b,S,L),g.push(S,T,L)}}function x(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new To(new yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class It extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wa extends It{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Iv extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ba=new ue,wh=new R,bh=new R;class Al{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nv extends Al{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=go*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Aa extends yr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Nv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ah=new ue,Ks=new R,Ca=new R;class Ov extends Al{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ks),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}}class ms extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fv extends Al{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zv extends yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ku{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rh(){return(typeof performance>"u"?Date:performance).now()}class Bv{constructor(t,e,n=0,i=1/0){this.ray=new No(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ja(t[i],this,n,e);return n.sort(Ph),n}}function Ph(r,t){return r.distance-t.distance}function Ja(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ja(i[s],t,e,!0)}}class Lh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const Dh={type:"change"},Ra={type:"start"},Uh={type:"end"},so=new No,Ih=new si,Gv=Math.cos(70*jd.DEG2RAD);class kv extends Wi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Rt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dh),n.update(),s=i.NONE},this.update=function(){const P=new R,ht=new ki().setFromUnitVectors(t.up,new R(0,1,0)),bt=ht.clone().invert(),yt=new R,ot=new ki,I=new R,ut=2*Math.PI;return function(Dt=null){const Pt=n.object.position;P.copy(Pt).sub(n.target),P.applyQuaternion(ht),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&F(w(Dt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,Zt=n.maxAzimuthAngle;isFinite(jt)&&isFinite(Zt)&&(jt<-Math.PI?jt+=ut:jt>Math.PI&&(jt-=ut),Zt<-Math.PI?Zt+=ut:Zt>Math.PI&&(Zt-=ut),jt<=Zt?a.theta=Math.max(jt,Math.min(Zt,a.theta)):a.theta=a.theta>(jt+Zt)/2?Math.max(jt,a.theta):Math.min(Zt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(bt),Pt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let fe=!1;if(n.zoomToCursor&&S){let _e=null;if(n.object.isPerspectiveCamera){const Qt=P.length();_e=Q(Qt*c);const ye=Qt-_e;n.object.position.addScaledVector(M,ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new R(b.x,b.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0;const ye=new R(b.x,b.y,0);ye.unproject(n.object),n.object.position.sub(ye).add(Qt),n.object.updateMatrixWorld(),_e=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;_e!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(_e).add(n.object.position):(so.origin.copy(n.object.position),so.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(so.direction))<Gv?t.lookAt(n.target):(Ih.setFromNormalAndCoplanarPoint(n.object.up,n.target),so.intersectPlane(Ih,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0);return c=1,S=!1,fe||yt.distanceToSquared(n.object.position)>o||8*(1-ot.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Dh),yt.copy(n.object.position),ot.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$t),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Lh,l=new Lh;let c=1;const h=new R,u=new J,f=new J,m=new J,g=new J,_=new J,p=new J,d=new J,x=new J,v=new J,M=new R,b=new J;let S=!1;const T=[],L={};let y=!1;function w(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function N(P){const ht=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ht)}function F(P){l.theta-=P}function X(P){l.phi-=P}const D=function(){const P=new R;return function(bt,yt){P.setFromMatrixColumn(yt,0),P.multiplyScalar(-bt),h.add(P)}}(),O=function(){const P=new R;return function(bt,yt){n.screenSpacePanning===!0?P.setFromMatrixColumn(yt,1):(P.setFromMatrixColumn(yt,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(bt),h.add(P)}}(),z=function(){const P=new R;return function(bt,yt){const ot=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;P.copy(I).sub(n.target);let ut=P.length();ut*=Math.tan(n.object.fov/2*Math.PI/180),D(2*bt*ut/ot.clientHeight,n.object.matrix),O(2*yt*ut/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(bt*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),O(yt*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(P,ht){if(!n.zoomToCursor)return;S=!0;const bt=n.domElement.getBoundingClientRect(),yt=P-bt.left,ot=ht-bt.top,I=bt.width,ut=bt.height;b.x=yt/I*2-1,b.y=-(ot/ut)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function et(P){u.set(P.clientX,P.clientY)}function tt(P){Z(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function W(P){g.set(P.clientX,P.clientY)}function j(P){f.set(P.clientX,P.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ht=n.domElement;F(2*Math.PI*m.x/ht.clientHeight),X(2*Math.PI*m.y/ht.clientHeight),u.copy(f),n.update()}function ct(P){x.set(P.clientX,P.clientY),v.subVectors(x,d),v.y>0?H(N(v.y)):v.y<0&&q(N(v.y)),d.copy(x),n.update()}function St(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(_),n.update()}function gt(P){Z(P.clientX,P.clientY),P.deltaY<0?q(N(P.deltaY)):P.deltaY>0&&H(N(P.deltaY)),n.update()}function Lt(P){let ht=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),ht=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),ht=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),ht=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),ht=!0;break}ht&&(P.preventDefault(),n.update())}function Ft(P){if(T.length===1)u.set(P.pageX,P.pageY);else{const ht=vt(P),bt=.5*(P.pageX+ht.x),yt=.5*(P.pageY+ht.y);u.set(bt,yt)}}function Tt(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const ht=vt(P),bt=.5*(P.pageX+ht.x),yt=.5*(P.pageY+ht.y);g.set(bt,yt)}}function Nt(P){const ht=vt(P),bt=P.pageX-ht.x,yt=P.pageY-ht.y,ot=Math.sqrt(bt*bt+yt*yt);d.set(0,ot)}function U(P){n.enableZoom&&Nt(P),n.enablePan&&Tt(P)}function ft(P){n.enableZoom&&Nt(P),n.enableRotate&&Ft(P)}function $(P){if(T.length==1)f.set(P.pageX,P.pageY);else{const bt=vt(P),yt=.5*(P.pageX+bt.x),ot=.5*(P.pageY+bt.y);f.set(yt,ot)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ht=n.domElement;F(2*Math.PI*m.x/ht.clientHeight),X(2*Math.PI*m.y/ht.clientHeight),u.copy(f)}function lt(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const ht=vt(P),bt=.5*(P.pageX+ht.x),yt=.5*(P.pageY+ht.y);_.set(bt,yt)}p.subVectors(_,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(_)}function K(P){const ht=vt(P),bt=P.pageX-ht.x,yt=P.pageY-ht.y,ot=Math.sqrt(bt*bt+yt*yt);x.set(0,ot),v.set(0,Math.pow(x.y/d.y,n.zoomSpeed)),H(v.y),d.copy(x);const I=(P.pageX+ht.x)*.5,ut=(P.pageY+ht.y)*.5;Z(I,ut)}function wt(P){n.enableZoom&&K(P),n.enablePan&&lt(P)}function _t(P){n.enableZoom&&K(P),n.enableRotate&&$(P)}function A(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",B)),Wt(P),P.pointerType==="touch"?Gt(P):rt(P))}function E(P){n.enabled!==!1&&(P.pointerType==="touch"?st(P):it(P))}function B(P){zt(P),T.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(Uh),s=i.NONE}function rt(P){let ht;switch(P.button){case 0:ht=n.mouseButtons.LEFT;break;case 1:ht=n.mouseButtons.MIDDLE;break;case 2:ht=n.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case qi.DOLLY:if(n.enableZoom===!1)return;tt(P),s=i.DOLLY;break;case qi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;W(P),s=i.PAN}else{if(n.enableRotate===!1)return;et(P),s=i.ROTATE}break;case qi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;et(P),s=i.ROTATE}else{if(n.enablePan===!1)return;W(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ra)}function it(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ct(P);break;case i.PAN:if(n.enablePan===!1)return;St(P);break}}function nt(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(Ra),gt(Et(P)),n.dispatchEvent(Uh))}function Et(P){const ht=P.deltaMode,bt={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ht){case 1:bt.deltaY*=16;break;case 2:bt.deltaY*=100;break}return P.ctrlKey&&!y&&(bt.deltaY*=10),bt}function pt(P){P.key==="Control"&&(y=!0,document.addEventListener("keyup",xt,{passive:!0,capture:!0}))}function xt(P){P.key==="Control"&&(y=!1,document.removeEventListener("keyup",xt,{passive:!0,capture:!0}))}function Rt(P){n.enabled===!1||n.enablePan===!1||Lt(P)}function Gt(P){switch(Ct(P),T.length){case 1:switch(n.touches.ONE){case ji.ROTATE:if(n.enableRotate===!1)return;Ft(P),s=i.TOUCH_ROTATE;break;case ji.PAN:if(n.enablePan===!1)return;Tt(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),s=i.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ra)}function st(P){switch(Ct(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;$(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;lt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(P),n.update();break;default:s=i.NONE}}function $t(P){n.enabled!==!1&&P.preventDefault()}function Wt(P){T.push(P.pointerId)}function zt(P){delete L[P.pointerId];for(let ht=0;ht<T.length;ht++)if(T[ht]==P.pointerId){T.splice(ht,1);return}}function Ct(P){let ht=L[P.pointerId];ht===void 0&&(ht=new J,L[P.pointerId]=ht),ht.set(P.pageX,P.pageY)}function vt(P){const ht=P.pointerId===T[0]?T[1]:T[0];return L[ht]}n.domElement.addEventListener("contextmenu",$t),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}const Hu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hv=new vl(-1,1,1,-1,0,1);class Vv extends pe{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const Wv=new Vv;class Vu{constructor(t){this._mesh=new at(Wv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Hv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Wu extends Sr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xo.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nh extends Sr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xv extends Sr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Yv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wu(Hu),this.copyPass.material.blending=qn,this.clock=new ku}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nh!==void 0&&(o instanceof Nh?n=!0:o instanceof Xv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qv extends Sr{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const jv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Us extends Sr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(s,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new wn(s,o,{type:jn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new wn(s,o,{type:jn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=jv;this.highPassUniforms=xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Hu;this.copyUniforms=xo.clone(h.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ss,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new Vu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new J(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Us.BlurDirectionX=new J(1,0);Us.BlurDirectionY=new J(0,1);function kn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},Cl,Oe,oe,Ln=1e8,He=1/Ln,$a=Math.PI*2,Zv=$a/4,Kv=0,Yu=Math.sqrt,Jv=Math.cos,$v=Math.sin,Ne=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},Jn=function(t){return typeof t=="number"},Rl=function(t){return typeof t>"u"},Dn=function(t){return typeof t=="object"},Je=function(t){return t!==!1},Pl=function(){return typeof window<"u"},ro=function(t){return me(t)||Ne(t)},qu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ve=Array.isArray,Qa=/(?:-?\.?\d|\.)+/gi,ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,Ku=/[^,'"\[\]\s]+/gi,Qv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,An,tl,Ll,hn={},wo={},Ju,$u=function(t){return(wo=Ns(t,hn))&&en},Dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},dr=function(t,e){return!e&&console.warn(t)},Qu=function(t,e){return t&&(hn[t]=e)&&wo&&(wo[t]=e)||hn},pr=function(){return 0},tx={suppressEvents:!0,isStart:!0,kill:!1},lo={suppressEvents:!0,kill:!1},ex={suppressEvents:!0},Ul={},mi=[],el={},tf,on={},La={},Oh=30,co=[],Il="",Nl=function(t){var e=t[0],n,i;if(Dn(e)||me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=co.length;i--&&!co[i].targetTest(e););n=co[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wf(t[i],n)))||t.splice(i,1);return t},Fi=function(t){return t._gsap||Nl(vn(t))[0]._gsap},ef=function(t,e,n){return(n=t[e])&&me(n)?t[e]():Rl(n)&&t.getAttribute&&t.getAttribute(e)||n},$e=function(t,e){return(t=t.split(",")).forEach(e)||t},xe=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},nx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},bo=function(){var t=mi.length,e=mi.slice(0),n,i;for(el={},mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ol=function(t){return!!(t._initted||t._startAt||t.add)},nf=function(t,e,n,i){mi.length&&!Oe&&bo(),t.render(e,n,!!(Oe&&e<0&&Ol(t))),mi.length&&!Oe&&bo()},sf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ku).length<2?e:Ne(t)?t.trim():t},rf=function(t){return t},un=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ix=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ns=function(t,e){for(var n in e)t[n]=e[n];return t},Fh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Dn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ao=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},or=function(t){var e=t.parent||le,n=t.keyframes?ix(Ve(t.keyframes)):un;if(Je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},sx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},of=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},zo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},rx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nl=function(t,e,n,i){return t._startAt&&(Oe?t._startAt.revert(lo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ox=function r(t){return!t||t._ts&&r(t.parent)},zh=function(t){return t._repeat?Os(t._tTime,t=t.duration()+t._rDelay)*t:0},Os=function(t,e){var n=Math.floor(t=Ae(t/e));return t&&n===t?n-1:n},Co=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bo=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||He)||0))},Go=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bo(t),n._dirty||zi(n,t)),t},af=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Co(t.rawTime(),e),(!e._dur||Er(0,e.totalDuration(),n)-e._tTime>He)&&e.render(n,!0)),zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},Rn=function(t,e,n,i){return e.parent&&vi(e),e._start=Ae((Jn(n)?n:n||t!==le?pn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),of(t,e,"_first","_last",t._sort?"_start":0),il(e)||(t._recent=e),i||af(t,e),t._ts<0&&Go(t,t._tTime),t},lf=function(t,e){return(hn.ScrollTrigger||Dl("scrollTrigger",e))&&hn.ScrollTrigger.create(e,t)},cf=function(t,e,n,i,s){if(zl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Oe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&tf!==an.frame)return mi.push(t),t._lazy=[s,i],1},ax=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},il=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},lx=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&ax(t)&&!(!t._initted&&il(t))||(t._ts<0||t._dp._ts<0)&&!il(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Er(0,t._tDur,e),h=Os(l,a),t._yoyo&&h&1&&(o=1-o),h!==Os(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Oe||i||t._zTime===He||!e&&t._zTime){if(!t._initted&&cf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?He:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&nl(t,e,n,!0),t._onUpdate&&!n&&ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vi(t,1),!n&&!Oe&&(ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},cx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Fs=function(t,e,n,i){var s=t._repeat,o=Ae(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ae(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Go(t,t._tTime=t._tDur*a),t.parent&&Bo(t),n||zi(t.parent,t),t},Bh=function(t){return t instanceof qe?zi(t):Fs(t,t._dur)},hx={_start:0,endTime:pr,totalDuration:pr},pn=function r(t,e,n){var i=t.labels,s=t._recent||hx,o=t.duration()>=Ln?s.endTime(!1):t._dur,a,l,c;return Ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ve(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ar=function(t,e,n){var i=Jn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Je(l.vars.inherit)&&l.parent;o.immediateRender=Je(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new be(e[0],o,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},Er=function(t,e,n){return n<t?t:n>e?e:n},ke=function(t,e){return!Ne(t)||!(e=Qv.exec(t))?"":e[1]},ux=function(t,e,n){return Mi(n,function(i){return Er(t,e,i)})},sl=[].slice,hf=function(t,e){return t&&Dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Dn(t[0]))&&!t.nodeType&&t!==An},fx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ne(i)&&!e||hf(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Ne(t)&&!n&&(tl||!zs())?sl.call((e||Ll).querySelectorAll(t),0):Ve(t)?fx(t,n):hf(t)?sl.call(t,0):t?[t]:[]},rl=function(t){return t=vn(t)[0]||dr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?dr("Invalid scope")||Ll.createElement("div"):t)}},uf=function(t){return t.sort(function(){return .5-Math.random()})},ff=function(t){if(me(t))return t;var e=Dn(t)?t:{each:t},n=Bi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ne(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,m,g){var _=(g||e).length,p=o[_],d,x,v,M,b,S,T,L,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,Ln])[1],!y){for(T=-1e8;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=o[_]=[],d=l?Math.min(y,_)*h-.5:i%y,x=y===Ln?0:l?_*u/y-.5:i/y|0,T=0,L=Ln,S=0;S<_;S++)v=S%y-d,M=x-(S/y|0),p[S]=b=c?Math.abs(c==="y"?M:v):Yu(v*v+M*M),b>T&&(T=b),b<L&&(L=b);i==="random"&&uf(p),p.max=T-L,p.min=L,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=ke(e.amount||e.each)||0,n=n&&_<0?Sf(n):n}return _=(p[f]-p.min)/p.max||0,Ae(p.b+(n?n(_):_)*p.v)+p.u}},ol=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Jn(n)?0:ke(n))}},df=function(t,e){var n=Ve(t),i,s;return!n&&Dn(t)&&(i=n=t.radius||Ln,t.values?(t=vn(t.values),(s=!Jn(t[0]))&&(i*=i)):t=ol(t.increment)),Mi(e,n?me(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ln,h=0,u=t.length,f,m;u--;)s?(f=t[u].x-a,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Jn(o)?h:h+ke(o)}:ol(t))},pf=function(t,e,n,i){return Mi(Ve(t)?!e:n===!0?!!(n=0):!i,function(){return Ve(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},dx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},px=function(t,e){return function(n){return t(parseFloat(n))+(e||ke(n))}},mx=function(t,e,n){return _f(t,e,0,1,n)},mf=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},_x=function r(t,e,n){var i=e-t;return Ve(t)?mf(t,r(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},gx=function r(t,e,n){var i=e-t,s=i*2;return Ve(t)?mf(t,r(0,t.length-1),e):Mi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},mr=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Ku:Qa),n+=t.substr(e,i-e)+pf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},_f=function(t,e,n,i,s){var o=e-t,a=i-n;return Mi(s,function(l){return n+((l-t)/o*a||0)})},vx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var o=Ne(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ve(t)&&!Ve(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Ns(Ve(t)?[]:{},t));if(!h){for(l in e)Fl.call(a,t,l,"get",e[l]);s=function(g){return kl(g,a)||(o?t.p:t)}}}return Mi(n,s)},Gh=function(t,e,n){var i=t.labels,s=Ln,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ln=function(t,e,n){var i=t.vars,s=i[e],o=oe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&mi.length&&bo(),a&&(oe=a),h=l?s.apply(c,l):s.call(c),oe=o,h},tr=function(t){return vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Oe),t.progress()<1&&ln(t,"onInterrupt"),t},ys,gf=[],vf=function(t){if(t)if(t=!t.name&&t.default||t,Pl()||t.headless){var e=t.name,n=me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:pr,render:kl,add:Fl,kill:Ix,modifier:Ux,rawVars:0},o={targetTest:0,get:0,getSetter:Gl,aliases:{},register:0};if(zs(),t!==i){if(on[e])return;un(i,un(Ao(t,s),o)),Ns(i.prototype,Ns(s,Ao(t,o))),on[i.prop=e]=i,t.targetTest&&(co.push(i),Ul[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qu(e,i),t.register&&t.register(en,i,Qe)}else gf.push(t)},ne=255,er={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},Da=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},xf=function(t,e,n){var i=t?Jn(t)?[t>>16,t>>8&ne,t&ne]:0:er.black,s,o,a,l,c,h,u,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),er[t])i=er[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Qa),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Da(l+1/3,s,o),i[1]=Da(l,s,o),i[2]=Da(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(ju),n&&i.length<4&&(i[3]=1),i}else i=t.match(Qa)||er.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ne,o=i[1]/ne,a=i[2]/ne,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===s?(o-a)/m+(o<a?6:0):u===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Mf=function(t){var e=[],n=[],i=-1;return t.split(_i).forEach(function(s){var o=s.match(Ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},kh=function(t,e,n){var i="",s=(t+i).match(_i),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=xf(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Mf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(_i,"1").split(Ms),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(_i),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},_i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in er)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),xx=/hsl[a]?\(/,yf=function(t){var e=t.join(" "),n;if(_i.lastIndex=0,_i.test(e))return n=xx.test(e),t[1]=kh(t[1],n),t[0]=kh(t[0],n,Mf(t[1])),!0},_r,an=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,m,g=function _(p){var d=r()-i,x=p===!0,v,M,b,S;if((d>t||d<0)&&(n+=d-e),i+=d,b=i-n,v=b-o,(v>0||x)&&(S=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=v+(v>=s?4:s-v),M=1),x||(l=c(_)),M)for(m=0;m<a.length;m++)a[m](b,f,S,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Ju&&(!tl&&Pl()&&(An=tl=window,Ll=An.document||{},hn.gsap=en,(An.gsapVersions||(An.gsapVersions=[])).push(en.version),$u(wo||An.GreenSockGlobals||!An.gsap&&An||{}),gf.forEach(vf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},_r=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),_r=0,c=pr},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,d,x){var v=d?function(M,b,S,T){p(M,b,S,T),u.remove(v)}:p;return u.remove(p),a[x?"unshift":"push"](v),zs(),v},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},u}(),zs=function(){return!_r&&an.wake()},Jt={},Mx=/^[\d.\-M][\d.\-,\s]/,yx=/["']/g,Sx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(yx,"").trim():+c,i=l.substr(a+1).trim();return e},Ex=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Tx=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Sx(e[1])]:Ex(t).split(",").map(sf)):Jt._CE&&Mx.test(t)?Jt._CE("",t):n},Sf=function(t){return function(e){return 1-t(1-e)}},Ef=function r(t,e){for(var n=t._first,i;n;)n instanceof qe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Bi=function(t,e){return t&&(me(t)?t:Jt[t]||Tx(t))||e},Yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return $e(t,function(a){Jt[a]=hn[a]=s,Jt[o=a.toLowerCase()]=n;for(var l in s)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=s[l]}),s},Tf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ua=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/$a*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*$v((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tf(a);return s=$a/s,l.config=function(c,h){return r(t,c,h)},l},Ia=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tf(n);return i.config=function(s){return r(t,s)},i};$e("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Yi("Elastic",Ua("in"),Ua("out"),Ua());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Yi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Yi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yi("Circ",function(r){return-(Yu(1-r*r)-1)});Yi("Sine",function(r){return r===1?1:-Jv(r*Zv)+1});Yi("Back",Ia("in"),Ia("out"),Ia());Jt.SteppedEase=Jt.steps=hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-He;return function(a){return((i*Er(0,o,a)|0)+s)*n}}};Is.ease=Jt["quad.out"];$e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Il+=r+","+r+"Params,"});var wf=function(t,e){this.id=Kv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ef,this.set=e?e.getSetter:Gl},gr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Fs(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),_r||an.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Go(this,n),!s._dp||s.parent||af(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Os(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Co(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Er(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Bo(this),rx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Co(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ex);var i=Oe;return Oe=n,Ol(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Oe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pn(this,n),Je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Je(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-He)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=me(n)?n:rf,a=function(){var c=i.then;i.then=null,me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){tr(this)},r}();un(gr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var qe=function(r){Xu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Je(n.sortChildren),le&&Rn(n.parent||le,kn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lf(kn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ar(0,arguments,this),this},e.from=function(i,s,o){return ar(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ar(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,or(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new be(i,s,pn(this,o),1),this},e.call=function(i,s,o){return Rn(this,be.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new be(i,o,pn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,or(o).immediateRender=Je(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,or(a).immediateRender=Je(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ae(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,x,v,M,b,S,T;if(this!==le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,M=this._start,v=this._ts,d=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ae(h%p),h===l?(_=this._repeat,f=c):(b=Ae(h/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Os(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),S&&_&1&&(f=c-f,T=1),_!==b&&!this._lock){var L=S&&b&1,y=L===(S&&_&1);if(_<b&&(L=!L),a=L?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ae(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Ef(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=cx(this,Ae(a),Ae(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!b&&(ln(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!d){x=0,g&&(h+=this._zTime=-1e-8);break}}m=g}else{m=this._last;for(var w=i<0?i:f;m;){if(g=m._prev,(m._act||w<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(w-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(w-m._start)*m._ts,s,o||Oe&&Ol(m)),f!==this._time||!this._ts&&!d){x=0,g&&(h+=this._zTime=w?-1e-8:He);break}}m=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=M,Bo(this),this.render(i,s,o);this._onUpdate&&!s&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&vi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Jn(s)||(s=pn(this,s,i)),!(i instanceof gr)){if(Ve(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ne(i))return this.addLabel(i,s);if(me(i))i=be.delayedCall(0,i);else return this}return this!==i?Rn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof be?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ne(i)?this.removeLabel(i):me(i)?this.killTweensOf(i):(i.parent===this&&zo(this,i),i===this._recent&&(this._recent=this._last),zi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(an.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=pn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=be.delayedCall(0,s||pr,o);return a.data="isPause",this._hasPause=1,Rn(this,a,pn(this,i))},e.removePause=function(i){var s=this._first;for(i=pn(this,i);s;)s._start===i&&s.data==="isPause"&&vi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)li!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=vn(i),l=this._first,c=Jn(s),h;l;)l instanceof be?nx(l._targets,a)&&(c?(!li||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=pn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=be.to(o,un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||He,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Fs(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,un({startAt:{time:pn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gh(this,pn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gh(this,pn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ln,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Rn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(le._ts&&(nf(le,Co(i,le)),tf=an.frame),an.frame>=Oh){Oh+=cn.autoSleep||120;var s=le._first;if((!s||!s._ts)&&cn.autoSleep&&an._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||an.sleep()}}},t}(gr);un(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var wx=function(t,e,n,i,s,o,a){var l=new Qe(this._pt,t,e,0,1,Lf,null,s),c=0,h=0,u,f,m,g,_,p,d,x;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=mr(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(Pa)||[];u=Pa.exec(i);)g=u[0],_=i.substring(c,u.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?ws(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Pa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zu.test(i)||d)&&(l.e=0),this._pt=l,l},Fl=function(t,e,n,i,s,o,a,l,c,h){me(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:me(u)?c?t[e.indexOf("set")||!me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=me(u)?c?Px:Rf:Bl,g;if(Ne(i)&&(~i.indexOf("random(")&&(i=mr(i)),i.charAt(1)==="="&&(g=ws(f,i)+(ke(f)||0),(g||g===0)&&(i=g))),!h||f!==i||al)return!isNaN(f*i)&&i!==""?(g=new Qe(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Dx:Pf,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Dl(e,i),wx.call(this,t,e,f,i,m,l||cn.stringFilter,c))},bx=function(t,e,n,i,s){if(me(t)&&(t=lr(t,s,e,n,i)),!Dn(t)||t.style&&t.nodeType||Ve(t)||qu(t))return Ne(t)?lr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=lr(t[a],s,e,n,i);return o},bf=function(t,e,n,i,s,o){var a,l,c,h;if(on[t]&&(a=new on[t]).init(s,a.rawVars?e[t]:bx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Qe(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},li,al,zl=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,d=t.parent,x=d&&d.data==="nested"?d.vars.targets:p,v=t._overwrite==="auto"&&!Cl,M=t.timeline,b,S,T,L,y,w,N,F,X,D,O,z,H;if(M&&(!f||!s)&&(s="none"),t._ease=Bi(s,Is.ease),t._yEase=u?Sf(Bi(u===!0?s:u,Is.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(F=p[0]?Fi(p[0]).harness:0,z=F&&i[F.prop],b=Ao(i,Ul),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!m?_.render(-1,!0):_.revert(h&&g?lo:tx),_._lazy=0),o){if(vi(t._startAt=be.set(p,un({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Je(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe||!a&&!m)&&t._startAt.revert(lo),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=un({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Je(l),immediateRender:a,stagger:0,parent:d},b),z&&(T[F.prop]=z),vi(t._startAt=be.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe?t._startAt.revert(lo):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,He,He);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Je(l)||l&&!g,S=0;S<p.length;S++){if(y=p[S],N=y._gsap||Nl(p)[S]._gsap,t._ptLookup[S]=D={},el[N.id]&&mi.length&&bo(),O=x===p?S:x.indexOf(y),F&&(X=new F).init(y,z||b,t,O,x)!==!1&&(t._pt=L=new Qe(t._pt,y,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(q){D[q]=L}),X.priority&&(w=1)),!F||z)for(T in b)on[T]&&(X=bf(T,b,t,O,y,x))?X.priority&&(w=1):D[T]=L=Fl.call(t,y,T,"get",b[T],O,x,0,i.stringFilter);t._op&&t._op[S]&&t.kill(y,t._op[S]),v&&t._pt&&(li=t,le.killTweensOf(y,D,t.globalTime(e)),H=!t.parent,li=0),t._pt&&l&&(el[N.id]=1)}w&&Df(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&M.render(Ln,!0,!0)},Ax=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(h=f[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return al=1,t.vars[e]="+=0",zl(t,a),al=0,l?dr(e+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=xe(n)+ke(u.e)),u.b&&(u.b=h.s+ke(u.b))},Cx=function(t,e){var n=t[0]?Fi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ns({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Rx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ve(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},lr=function(t,e,n,i,s){return me(t)?t.call(e,n,i,s):Ne(t)&&~t.indexOf("random(")?mr(t):t},Af=Il+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cf={};$e(Af+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cf[r]=1});var be=function(r){Xu(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:or(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,x=i.parent||le,v=(Ve(n)||qu(n)?Jn(n[0]):"length"in i)?[n]:vn(n),M,b,S,T,L,y,w,N;if(a._targets=v.length?Nl(v):dr("GSAP target "+n+" not found. https://gsap.com",!cn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ro(c)||ro(h)){if(i=a.vars,M=a.timeline=new qe({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=kn(a),M._start=0,f||ro(c)||ro(h)){if(T=v.length,w=f&&ff(f),Dn(f))for(L in f)~Af.indexOf(L)&&(N||(N={}),N[L]=f[L]);for(b=0;b<T;b++)S=Ao(i,Cf),S.stagger=0,d&&(S.yoyoEase=d),N&&Ns(S,N),y=v[b],S.duration=+lr(c,kn(a),b,y,v),S.delay=(+lr(h,kn(a),b,y,v)||0)-a._delay,!f&&T===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),M.to(y,S,w?w(b,y,v):0),M._ease=Jt.none;M.duration()?c=h=0:a.timeline=0}else if(g){or(un(M.vars.defaults,{ease:"none"})),M._ease=Bi(g.ease||i.ease||"none");var F=0,X,D,O;if(Ve(g))g.forEach(function(z){return M.to(v,z,">")}),M.duration();else{S={};for(L in g)L==="ease"||L==="easeEach"||Rx(L,g[L],S,g.easeEach);for(L in S)for(X=S[L].sort(function(z,H){return z.t-H.t}),F=0,b=0;b<X.length;b++)D=X[b],O={ease:D.e,duration:(D.t-(b?X[b-1].t:0))/100*c},O[L]=D.v,M.to(v,O,F),F+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return m===!0&&!Cl&&(li=kn(a),le.killTweensOf(v),li=0),Rn(x,kn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Ae(x._time)&&Je(u)&&ox(kn(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),p&&lf(kn(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-He&&!h?l:i<He?0:i,f,m,g,_,p,d,x,v,M;if(!c)lx(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=Ae(u%_),u===l?(g=this._repeat,f=c):(p=Ae(u/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),p=Os(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(v&&this._yEase&&Ef(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(cf(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&u&&!s&&!p&&(ln(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&nl(this,i,s,o),ln(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ln(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&nl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&vi(this,1),!s&&!(h&&!a)&&(u||a||d)&&(ln(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){_r||an.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zl(this,c),h=this._ease(c/this._dur),Ax(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Go(this,0),this.parent||of(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?tr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Oe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,li&&li.vars.overwrite!==!0)._first||tr(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vn(i):a,c=this._ptLookup,h=this._pt,u,f,m,g,_,p,d;if((!s||s==="all")&&sx(a,l))return s==="all"&&(this._pt=0),tr(this);for(u=this._op=this._op||[],s!=="all"&&(Ne(s)&&(_={},$e(s,function(x){return _[x]=1}),s=_),s=Cx(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(u[d]=s,g=f,m={}):(m=u[d]=u[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&zo(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&h&&tr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ar(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ar(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return le.killTweensOf(i,s,o)},t}(gr);un(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$e("staggerTo,staggerFrom,staggerFromTo",function(r){be[r]=function(){var t=new qe,e=sl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Bl=function(t,e,n){return t[e]=n},Rf=function(t,e,n){return t[e](n)},Px=function(t,e,n,i){return t[e](i.fp,n)},Lx=function(t,e,n){return t.setAttribute(e,n)},Gl=function(t,e){return me(t[e])?Rf:Rl(t[e])&&t.setAttribute?Lx:Bl},Pf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Dx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Lf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ux=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Ix=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?zo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Nx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Df=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Qe=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Pf,this.d=l||this,this.set=c||Bl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Nx,this.m=n,this.mt=s,this.tween=i},r}();$e(Il+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ul[r]=1});hn.TweenMax=hn.TweenLite=be;hn.TimelineLite=hn.TimelineMax=qe;le=new qe({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=yf;var Gi=[],ho={},Ox=[],Hh=0,Fx=0,Na=function(t){return(ho[t]||Ox).map(function(e){return e()})},ll=function(){var t=Date.now(),e=[];t-Hh>2&&(Na("matchMediaInit"),Gi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=An.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Na("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hh=t,Na("matchMedia"))},Uf=function(){function r(e,n){this.selector=n&&rl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){me(n)&&(s=i,i=n,n=me);var o=this,a=function(){var c=oe,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=rl(s)),oe=o,u=i.apply(o,arguments),me(u)&&o._r.push(u),oe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===me?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Gi.length;o--;)Gi[o].id===this.id&&Gi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),zx=function(){function r(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Dn(n)||(n={matches:n});var o=new Uf(0,s||this.scope),a=o.conditions={},l,c,h;oe&&!o.selector&&(o.selector=oe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=An.matchMedia(n[c]),l&&(Gi.indexOf(o)<0&&Gi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ll):l.addEventListener("change",ll)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ro={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return vf(i)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ne(t)&&(t=vn(t)[0]);var s=Fi(t||{}).get,o=n?rf:sf;return n==="native"&&(n=""),t&&(e?o((on[e]&&on[e].get||s)(t,e,n,i)):function(a,l,c){return o((on[a]&&on[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=on[e],a=Fi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;ys._pt=0,u.init(t,n?h+n:h,ys,0,[t]),u.render(1,u),ys._pt&&kl(1,ys)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=en.to(t,un((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bi(t.ease,Is.ease)),Fh(Is,t||{})},config:function(t){return Fh(cn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!on[a]&&!hn[a]&&dr(e+" effect requires "+a+" plugin.")}),La[e]=function(a,l,c){return n(vn(a),un(l||{},s),c)},o&&(qe.prototype[e]=function(a,l,c){return this.add(La[e](a,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Bi(e)},parseEase:function(t,e){return arguments.length?Bi(t,e):Jt},getById:function(t){return le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),i,s;for(n.smoothChildTiming=Je(t.smoothChildTiming),le.remove(n),n._dp=0,n._time=n._tTime=le._time,i=le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof be&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=s;return Rn(le,n,0),n},context:function(t,e){return t?new Uf(t,e):oe},matchMedia:function(t){return new zx(t)},matchMediaRefresh:function(){return Gi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ll()},addEventListener:function(t,e){var n=ho[t]||(ho[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ho[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:_x,wrapYoyo:gx,distribute:ff,random:pf,snap:df,normalize:mx,getUnit:ke,clamp:ux,splitColor:xf,toArray:vn,selector:rl,mapRange:_f,pipe:dx,unitize:px,interpolate:vx,shuffle:uf},install:$u,effects:La,ticker:an,updateRoot:qe.updateRoot,plugins:on,globalTimeline:le,core:{PropTween:Qe,globals:Qu,Tween:be,Timeline:qe,Animation:gr,getCache:Fi,_removeLinkedListItem:zo,reverting:function(){return Oe},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Cl=t}}};$e("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ro[r]=be[r]});an.add(qe.updateRoot);ys=Ro.to({},{duration:0});var Bx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Gx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Bx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Oa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ne(s)&&(l={},$e(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Gx(a,s)}}}},en=Ro.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Oe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oa("roundProps",ol),Oa("modifiers"),Oa("snap",df))||Ro;be.version=qe.version=en.version="3.13.0";Ju=1;Pl()&&zs();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vh,ci,bs,Hl,Ui,Wh,Vl,kx=function(){return typeof window<"u"},$n={},Pi=180/Math.PI,As=Math.PI/180,_s=Math.atan2,Xh=1e8,Wl=/([A-Z])/g,Hx=/(left|right|width|margin|padding|x)/i,Vx=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},If=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},qx=function(t,e,n){return t.style[e]=n},jx=function(t,e,n){return t.style.setProperty(e,n)},Zx=function(t,e,n){return t._gsap[e]=n},Kx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Jx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$x=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},he="transform",tn=he+"Origin",Qx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in $n&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Vn(i,a)}):this.tfm[t]=o.x?o[t]:Vn(i,t),t===tn&&(this.tfm.zOrigin=o.zOrigin);else return Pn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,e,"")),t=he}(s||e)&&this.props.push(t,e,s[t])},Of=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},tM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Wl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Vl(),(!s||!s.isStart)&&!n[he]&&(Of(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ff=function(t,e){var n={target:t,props:[],revert:tM,save:Qx};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zf,hl=function(t,e){var n=ci.createElementNS?ci.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ci.createElement(t);return n&&n.style?n:ci.createElement(t)},xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Bs(e)||e,1)||""},Yh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(t,e,n){var i=e||Ui,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Yh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Yh[o]:"")+t},ul=function(){kx()&&window.document&&(Vh=window,ci=Vh.document,bs=ci.documentElement,Ui=hl("div")||{style:{}},hl("div"),he=Bs(he),tn=he+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zf=!!Bs("perspective"),Vl=en.core.reverting,Hl=1)},qh=function(t){var e=t.ownerSVGElement,n=hl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),bs.removeChild(n),s},jh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bf=function(t){var e,n;try{e=t.getBBox()}catch{e=qh(t),n=1}return e&&(e.width||e.height)||n||(e=qh(t)),e&&!e.width&&!e.x&&!e.y?{x:+jh(t,["x","cx","x1"])||0,y:+jh(t,["y","cy","y1"])||0,width:0,height:0}:e},Gf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bf(t))},Vi=function(t,e){if(e){var n=t.style,i;e in $n&&e!==tn&&(e=he),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Wl,"-$1").toLowerCase())):n.removeAttribute(e)}},hi=function(t,e,n,i,s,o){var a=new Qe(t._pt,e,n,0,1,o?Nf:If);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Zh={deg:1,rad:1,turn:1},eM={grid:1,flex:1},xi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ui.style,l=Hx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",m=i==="%",g,_,p,d;if(i===o||!s||Zh[i]||Zh[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Gf(t),(m||o==="%")&&($n[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[h],xe(m?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ci||!_.appendChild)&&(_=ci.body),p=_._gsap,p&&m&&p.width&&l&&p.time===an.time&&!p.uncache)return xe(s/p.width*u);if(m&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:Vi(t,e)}else(m||o==="%")&&!eM[xn(_,"display")]&&(a.position=xn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ui),g=Ui[h],_.removeChild(Ui),a.position="absolute";return l&&m&&(p=Fi(_),p.time=an.time,p.width=_[h]),xe(f?g*s/u:g&&s?u/g*s:0)},Vn=function(t,e,n,i){var s;return Hl||ul(),e in Pn&&e!=="transform"&&(e=Pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),$n[e]&&e!=="transform"?(s=xr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Lo(xn(t,tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Po[e]&&Po[e](t,e,n)||xn(t,e)||ef(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xi(t,e,s,n)+n:s},nM=function(t,e,n,i){if(!n||n==="none"){var s=Bs(e,t,1),o=s&&xn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var a=new Qe(this._pt,t.style,e,0,1,Lf),l=0,c=0,h,u,f,m,g,_,p,d,x,v,M,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=xn(t,e)||i,_?t.style[e]=_:Vi(t,e)),h=[n,i],yf(h),n=h[0],i=h[1],f=n.match(Ms)||[],b=i.match(Ms)||[],b.length){for(;u=Ms.exec(i);)p=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=ws(m,p)+M),d=parseFloat(p),v=p.substr((d+"").length),l=Ms.lastIndex-v.length,v||(v=v||cn.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(m=xi(t,e,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:m,c:d-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Nf:If;return Zu.test(i)&&(a.e=0),this._pt=a,a},Kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Kh[n]||n,e[1]=Kh[i]||i,e.join(" ")},sM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],$n[a]&&(l=1,a=a==="transformOrigin"?tn:he),Vi(n,a);l&&(Vi(n,he),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xr(n,1),o.uncache=1,Of(i)))}},Po={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Qe(t._pt,e,n,0,0,sM);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},vr=[1,0,0,1,0,0],kf={},Hf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Jh=function(t){var e=xn(t,he);return Hf(e)?vr:e.substr(7).match(ju).map(xe)},Xl=function(t,e){var n=t._gsap||Fi(t),i=t.style,s=Jh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vr:s):(s===vr&&!t.offsetParent&&t!==bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,bs.appendChild(t)),s=Jh(t),l?i.display=l:Vi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fl=function(t,e,n,i,s,o){var a=t._gsap,l=s||Xl(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],x=l[5],v=e.split(" "),M=parseFloat(v[0])||0,b=parseFloat(v[1])||0,S,T,L,y;n?l!==vr&&(T=m*p-g*_)&&(L=M*(p/T)+b*(-_/T)+(_*x-p*d)/T,y=M*(-g/T)+b*(m/T)-(m*x-g*d)/T,M=L,b=y):(S=Bf(t),M=S.x+(~v[0].indexOf("%")?M/100*S.width:M),b=S.y+(~(v[1]||v[0]).indexOf("%")?b/100*S.height:b)),i||i!==!1&&a.smooth?(d=M-c,x=b-h,a.xOffset=u+(d*m+x*_)-d,a.yOffset=f+(d*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[tn]="0px 0px",o&&(hi(o,a,"xOrigin",c,M),hi(o,a,"yOrigin",h,b),hi(o,a,"xOffset",u,a.xOffset),hi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+b)},xr=function(t,e){var n=t._gsap||new wf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=xn(t,tn)||"0",h,u,f,m,g,_,p,d,x,v,M,b,S,T,L,y,w,N,F,X,D,O,z,H,q,Z,Q,et,tt,W,j,ct;return h=u=f=_=p=d=x=v=M=0,m=g=1,n.svg=!!(t.getCTM&&Gf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[he]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[he]!=="none"?l[he]:"")),i.scale=i.rotate=i.translate="none"),T=Xl(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),fl(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,S=n.yOrigin||0,T!==vr&&(N=T[0],F=T[1],X=T[2],D=T[3],h=O=T[4],u=z=T[5],T.length===6?(m=Math.sqrt(N*N+F*F),g=Math.sqrt(D*D+X*X),_=N||F?_s(F,N)*Pi:0,x=X||D?_s(X,D)*Pi+_:0,x&&(g*=Math.abs(Math.cos(x*As))),n.svg&&(h-=b-(b*N+S*X),u-=S-(b*F+S*D))):(ct=T[6],W=T[7],Q=T[8],et=T[9],tt=T[10],j=T[11],h=T[12],u=T[13],f=T[14],L=_s(ct,tt),p=L*Pi,L&&(y=Math.cos(-L),w=Math.sin(-L),H=O*y+Q*w,q=z*y+et*w,Z=ct*y+tt*w,Q=O*-w+Q*y,et=z*-w+et*y,tt=ct*-w+tt*y,j=W*-w+j*y,O=H,z=q,ct=Z),L=_s(-X,tt),d=L*Pi,L&&(y=Math.cos(-L),w=Math.sin(-L),H=N*y-Q*w,q=F*y-et*w,Z=X*y-tt*w,j=D*w+j*y,N=H,F=q,X=Z),L=_s(F,N),_=L*Pi,L&&(y=Math.cos(L),w=Math.sin(L),H=N*y+F*w,q=O*y+z*w,F=F*y-N*w,z=z*y-O*w,N=H,O=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=xe(Math.sqrt(N*N+F*F+X*X)),g=xe(Math.sqrt(z*z+ct*ct)),L=_s(O,z),x=Math.abs(L)>2e-4?L*Pi:0,M=j?1/(j<0?-j:j):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hf(xn(t,he)),H&&t.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=xe(m),n.scaleY=xe(g),n.rotation=xe(_)+a,n.rotationX=xe(p)+a,n.rotationY=xe(d)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[tn]=Lo(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?oM:zf?Vf:rM,n.uncache=0,n},Lo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fa=function(t,e,n){var i=ke(e);return xe(parseFloat(e)+parseFloat(xi(t,"x",n+"px",i)))+i},rM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vf(t,e)},Ai="0deg",Js="0px",Ci=") ",Vf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,x=n.target,v=n.zOrigin,M="",b=d==="auto"&&t&&t!==1||d===!0;if(v&&(u!==Ai||h!==Ai)){var S=parseFloat(h)*As,T=Math.sin(S),L=Math.cos(S),y;S=parseFloat(u)*As,y=Math.cos(S),o=Fa(x,o,T*y*-v),a=Fa(x,a,-Math.sin(S)*-v),l=Fa(x,l,L*y*-v+v)}p!==Js&&(M+="perspective("+p+Ci),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||o!==Js||a!==Js||l!==Js)&&(M+=l!==Js||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ci),c!==Ai&&(M+="rotate("+c+Ci),h!==Ai&&(M+="rotateY("+h+Ci),u!==Ai&&(M+="rotateX("+u+Ci),(f!==Ai||m!==Ai)&&(M+="skew("+f+", "+m+Ci),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ci),x.style[he]=M||"translate(0, 0)"},oM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),b,S,T,L,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=As,c*=As,b=Math.cos(l)*u,S=Math.sin(l)*u,T=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(h*=As,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,L*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,S*=y)),b=xe(b),S=xe(S),T=xe(T),L=xe(L)):(b=u,L=f,S=T=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=xi(m,"x",o,"px"),M=xi(m,"y",a,"px")),(g||_||p||d)&&(v=xe(v+g-(g*b+_*T)+p),M=xe(M+_-(g*S+_*L)+d)),(i||s)&&(y=m.getBBox(),v=xe(v+i/100*y.width),M=xe(M+s/100*y.height)),y="matrix("+b+","+S+","+T+","+L+","+v+","+M+")",m.setAttribute("transform",y),x&&(m.style[he]=y)},aM=function(t,e,n,i,s){var o=360,a=Ne(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pi:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*Xh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Xh)%o-~~(c/o)*o)),t._pt=f=new Qe(t._pt,e,n,i,c,Wx),f.e=h,f.u="deg",t._props.push(n),f},$h=function(t,e){for(var n in e)t[n]=e[n];return t},lM=function(t,e,n){var i=$h({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[he]=e,a=xr(n,1),Vi(n,he),n.setAttribute("transform",c)):(c=getComputedStyle(n)[he],o[he]=e,a=xr(n,1),o[he]=c);for(l in $n)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(m=ke(c),g=ke(h),u=m!==g?xi(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Qe(t._pt,a,l,u,f-u,cl),t._pt.u=g||0,t._props.push(l));$h(a,i)};$e("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Po[t>1?"border"+r:r]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(g){return Vn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,m,u)}});var Wf={name:"css",register:ul,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,m,g,_,p,d,x,v,M,b,S,T,L;Hl||ul(),this.styles=this.styles||Ff(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(on[_]&&bf(_,e,n,i,t,s)))){if(m=typeof h,g=Po[_],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=mr(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",_i.lastIndex=0,_i.test(c)||(p=ke(c),d=ke(h)),d?p!==d&&(c=xi(t,_,c,d)+d):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ne(c)&&~c.indexOf("random(")&&(c=mr(c)),ke(c+"")||c==="auto"||(c+=cn.units[_]||ke(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),f=parseFloat(c),x=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Pn&&(_==="autoAlpha"&&(f===1&&Vn(t,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,a.visibility),hi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Pn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in $n,v){if(this.styles.save(_),m==="string"&&h.substring(0,6)==="var(--"&&(h=xn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),M||(b=t._gsap,b.renderTransform&&!e.parseTransform||xr(t,e.parseTransform),S=e.smoothOrigin!==!1&&b.smooth,M=this._pt=new Qe(this._pt,a,he,0,1,b.renderTransform,b,0,-1),M.dep=1),_==="scale")this._pt=new Qe(this._pt,b,"scaleY",b.scaleY,(x?ws(b.scaleY,x+u):u)-b.scaleY||0,cl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(tn,0,a[tn]),h=iM(h),b.svg?fl(t,h,0,S,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==b.zOrigin&&hi(this,b,"zOrigin",b.zOrigin,d),hi(this,a,_,Lo(c),Lo(h)));continue}else if(_==="svgOrigin"){fl(t,h,1,S,0,this);continue}else if(_ in kf){aM(this,b,_,f,x?ws(f,x+h):h);continue}else if(_==="smoothOrigin"){hi(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){lM(this,h,t);continue}}else _ in a||(_=Bs(_)||_);if(v||(u||u===0)&&(f||f===0)&&!Vx.test(h)&&_ in a)p=(c+"").substr((f+"").length),u||(u=0),d=ke(h)||(_ in cn.units?cn.units[_]:p),p!==d&&(f=xi(t,_,c,d)),this._pt=new Qe(this._pt,v?b:a,_,f,(x?ws(f,x+u):u)-f,!v&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Yx:cl),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Xx);else if(_ in a)nM.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Dl(_,h);continue}v||(_ in a?L.push(_,0,a[_]):typeof t[_]=="function"?L.push(_,2,t[_]()):L.push(_,1,c||t[_])),o.push(_)}}T&&Df(this)},render:function(t,e){if(e.tween._time||!Vl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Pn,getSetter:function(t,e,n){var i=Pn[e];return i&&i.indexOf(",")<0&&(e=i),e in $n&&e!==tn&&(t._gsap.x||Vn(t,"x"))?n&&Wh===n?e==="scale"?Kx:Zx:(Wh=n||{})&&(e==="scale"?Jx:$x):t.style&&!Rl(t.style[e])?qx:~e.indexOf("-")?jx:Gl(t,e)},core:{_removeProperty:Vi,_getMatrix:Xl}};en.utils.checkPrefix=Bs;en.core.getStyleSaver=Ff;(function(r,t,e,n){var i=$e(r+","+t+","+e,function(s){$n[s]=1});$e(t,function(s){cn.units[s]="deg",kf[s]=1}),Pn[i[13]]=r+","+t,$e(n,function(s){var o=s.split(":");Pn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){cn.units[r]="px"});en.registerPlugin(Wf);var ve=en.registerPlugin(Wf)||en;ve.core.Tween;class cM{constructor(){this.scene=new tv,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.clock=new ku,this.wheelGroup=null,this.gauges=[],this.particles=null,this.compass={bearing:347,display:null},this.raycaster=new Bv,this.mouse=new J,this.dragControls={isDragging:!1,selectedObject:null,offset:new R},this.cannons=[],this.fireButton=null,this.isFiring=!1,this.cannonEffects={muzzleFlashes:[],smokeParticles:[],sparkParticles:[],cannonBalls:[]},this.init()}init(){this.setupCamera(),this.setupRenderer(),this.setupPostProcessing(),this.setupControls(),this.setupLighting(),this.createEnvironment(),this.createHelm(),this.createGauges(),this.createParticles(),this.setupEventListeners(),this.hideLoadingScreen(),this.animate()}setupCamera(){this.camera=new Ze(65,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.8,4),this.camera.lookAt(0,1.2,0)}setupRenderer(){this.renderer=new Lu({canvas:document.getElementById("canvas"),antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tu,this.renderer.toneMapping=nu,this.renderer.toneMappingExposure=1.8,this.renderer.outputColorSpace=De}setupPostProcessing(){this.composer=new Yv(this.renderer);const t=new qv(this.scene,this.camera);this.composer.addPass(t);const e=new Us(new J(window.innerWidth,window.innerHeight),.5,.4,.85);this.composer.addPass(e);const n={uniforms:{tDiffuse:{value:null},amount:{value:.8}},vertexShader:`
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
            `},i=new Wu(n);this.composer.addPass(i)}setupControls(){this.controls=new kv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=8,this.controls.maxPolarAngle=Math.PI*.85,this.controls.target.set(0,1.2,0)}setupLighting(){const t=new zv(16755336,1.2);this.scene.add(t);const e=new Ch(16746564,2.5);e.position.set(-15,3,-10),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.left=-15,e.shadow.camera.right=15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,this.scene.add(e);const n=new Ch(4482730,.4);n.position.set(5,10,5),this.scene.add(n);const i=new ms(6750156,4,15);i.position.set(0,1.2,0),this.scene.add(i);const s=new Aa(6750156,1,10,Math.PI/4,.5);s.position.set(0,1.2,0),s.target.position.set(0,0,0),this.scene.add(s),this.scene.add(s.target);const o=new Iv(16764057,4478344,1.2);this.scene.add(o);const a=new ms(16755268,2.5,10);a.position.set(-4,1.5,-5),a.castShadow=!0,this.scene.add(a);const l=new ms(16755268,2.5,10);l.position.set(4,1.5,-5),l.castShadow=!0,this.scene.add(l);const c=new ms(13412966,1.5,6);c.position.set(-2,2.2,-1),this.scene.add(c);const h=new ms(13412966,1.5,6);h.position.set(2,2.2,-1),this.scene.add(h),this.scene.fog=new Ml(6697779,15,120);const u=new Aa(16766720,2,8,Math.PI/4,.5);u.position.set(-2,3,-6),u.target.position.set(-2,0,-6),this.scene.add(u),this.scene.add(u.target);const f=new Aa(16766720,1.5,6,Math.PI/4,.5);f.position.set(0,2,-4),f.target.position.set(0,0,-4),this.scene.add(f),this.scene.add(f.target)}createEnvironment(){const t=new Ge(200,32,32),e=new Ie({uniforms:{time:{value:0},topColor:{value:new Ot(661555)},horizonColor:{value:new Ot(16729122)},bottomColor:{value:new Ot(16746564)},sunGlow:{value:new Ot(16755302)}},vertexShader:`
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
            `,side:je}),n=new at(t,e);this.scene.add(n);const i=new Ee,s=new It({color:1706501,roughness:.7,metalness:.05}),o=new Te(16,.5,20),a=new at(o,s);a.position.y=-.25,a.receiveShadow=!0,i.add(a);const l=[],c=16;for(let z=0;z<=c;z++){const H=z/c*Math.PI,q=Math.sin(H)*8,Z=10+Math.cos(H)*8;l.push(new R(q,-.25,Z))}new Qs(l);const h=new wl(new rr([new J(-8,0),new J(0,8),new J(8,0),new J(0,-2)]),{depth:.5,bevelEnabled:!1}),u=new at(h,s);u.rotation.x=-Math.PI/2,u.position.set(0,-.25,15),u.receiveShadow=!0,i.add(u);const f=new Kt(.15,.25,8,12),m=new at(f,new It({color:2759184,roughness:.9,metalness:.1}));m.rotation.x=-Math.PI/6,m.position.set(0,1,18),m.castShadow=!0,i.add(m);const g=new Kt(8,8,.5,16,1,!1,Math.PI,Math.PI),_=new at(g,s);_.rotation.x=Math.PI/2,_.rotation.y=Math.PI/2,_.position.set(0,-.25,-10),_.receiveShadow=!0,i.add(_),this.scene.add(i);const p=new It({color:656899,roughness:.9,metalness:.02});for(let z=-8;z<8;z+=.35){const H=new Te(.3,.02,20),q=new at(H,p);q.position.set(z,.01,0),q.receiveShadow=!0,this.scene.add(q)}const d=new It({color:2757904,roughness:.8,metalness:.1}),x=new Te(.3,1.2,20),v=new at(x,d);v.position.set(-8,.6,0),v.castShadow=!0,this.scene.add(v);const M=new at(x,d);M.position.set(8,.6,0),M.castShadow=!0,this.scene.add(M);const b=new Qs([new R(-8,.6,10),new R(-5,.6,16),new R(-1,.6,18)]),S=new To(b,20,.15,8,!1),T=new at(S,d);T.castShadow=!0,this.scene.add(T);const L=new Qs([new R(8,.6,10),new R(5,.6,16),new R(1,.6,18)]),y=new To(L,20,.15,8,!1),w=new at(y,d);w.castShadow=!0,this.scene.add(w);const N=new Ee,F=new Ge(.8,12,8),X=new at(F,new It({color:9127187,roughness:.8,metalness:.1}));X.scale.set(1.2,.8,1.5),N.add(X);for(let z of[-.3,.3]){const H=new Ge(.1,8,8),q=new at(H,new It({color:16711680,emissive:3342336,emissiveIntensity:.5}));q.position.set(z,.2,.6),N.add(q)}const D=new Kt(.4,.6,2,12),O=new at(D,new It({color:9127187,roughness:.8,metalness:.1}));O.position.set(0,-1,-.5),O.rotation.x=Math.PI/6,N.add(O),N.position.set(0,2,19),N.rotation.y=Math.PI,N.castShadow=!0,this.scene.add(N),this.createCannonBattery(),this.createTreasure(),this.createShipBackground(),this.createSailingWarship()}createCannonBattery(){const t=new It({color:2763306,roughness:.6,metalness:.8}),e=new It({color:13412966,roughness:.3,metalness:.9});for(let n=0;n<4;n++){const i=new Ee,s=new Kt(.4,.5,6,16),o=new at(s,t);o.rotation.z=Math.PI/2,o.position.x=-2,i.add(o);const a=new Kt(.45,.4,.3,16),l=new at(a,e);l.rotation.z=Math.PI/2,l.position.x=-4.8,i.add(l);const c=new Ge(.6,12,12),h=new at(c,t);h.position.x=1,i.add(h);for(let u of[-.8,.8]){const f=new Kt(.6,.6,.2,12),m=new at(f,new It({color:4865064,roughness:.9,metalness:.1}));m.rotation.x=Math.PI/2,m.position.set(.5,u,-.3),i.add(m)}i.position.set(-7,.8,-6+n*4),i.rotation.y=-Math.PI/12,i.castShadow=!0,i.userData={side:"port",muzzlePosition:new R(-9.8,.8,-6+n*4),direction:new R(-1,0,0).applyEuler(new Ls(0,-Math.PI/12,0))},this.cannons.push(i),this.scene.add(i)}for(let n=0;n<4;n++){const i=new Ee,s=new Kt(.4,.5,6,16),o=new at(s,t);o.rotation.z=-Math.PI/2,o.position.x=2,i.add(o);const a=new Kt(.45,.4,.3,16),l=new at(a,e);l.rotation.z=-Math.PI/2,l.position.x=4.8,i.add(l);const c=new Ge(.6,12,12),h=new at(c,t);h.position.x=-1,i.add(h);for(let u of[-.8,.8]){const f=new Kt(.6,.6,.2,12),m=new at(f,new It({color:4865064,roughness:.9,metalness:.1}));m.rotation.x=Math.PI/2,m.position.set(-.5,u,-.3),i.add(m)}i.position.set(7,.8,-6+n*4),i.rotation.y=Math.PI/12,i.castShadow=!0,i.userData={side:"starboard",muzzlePosition:new R(9.8,.8,-6+n*4),direction:new R(1,0,0).applyEuler(new Ls(0,Math.PI/12,0))},this.cannons.push(i),this.scene.add(i)}for(let n of[-2,2]){const i=new Ee,s=new Kt(.25,.3,4,12),o=new at(s,t);o.rotation.x=-Math.PI/2,o.position.z=2,i.add(o);const a=new Kt(.3,.25,.2,12),l=new at(a,e);l.rotation.x=-Math.PI/2,l.position.z=3.8,i.add(l);const c=new Ge(.4,10,10),h=new at(c,t);h.position.z=-.5,i.add(h),i.position.set(n,1.2,14),i.castShadow=!0,i.userData={side:n<0?"bow-port":"bow-starboard",muzzlePosition:new R(n,1.2,18),direction:new R(0,0,1)},this.cannons.push(i),this.scene.add(i)}}fireAllCannons(){this.isFiring||(this.isFiring=!0,console.log("🔥 FIRING ALL CANNONS! 🔥"),this.fireButton.children[0].material.emissiveIntensity=.5,this.createScreenFlash(),this.cannons.forEach((t,e)=>{setTimeout(()=>{this.fireSingleCannon(t)},e*50)}),this.createCameraShake(),setTimeout(()=>{this.isFiring=!1,this.fireButton.children[0].material.emissiveIntensity=1.5,console.log("🔥 Cannons ready to fire again! 🔥")},5e3))}fireSingleCannon(t){const e=t.position.clone(),n=t.userData.side.includes("bow")?-2:t.userData.side==="port"?2:-2;ve.to(t.position,{x:e.x+(t.userData.side==="port"||t.userData.side==="starboard"?n:0),z:e.z+(t.userData.side.includes("bow")?n:0),duration:.1,ease:"power3.out",onComplete:()=>{ve.to(t.position,{x:e.x,z:e.z,duration:.3,ease:"elastic.out(1, 0.5)"})}}),this.createMuzzleFlash(t.userData.muzzlePosition),this.createSmokeEffect(t.userData.muzzlePosition),this.createSparkEffect(t.userData.muzzlePosition),this.createCannonBall(t.userData.muzzlePosition,t.userData.direction)}createScreenFlash(){const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.backgroundColor="rgba(255, 255, 255, 0.9)",t.style.zIndex="9999",t.style.pointerEvents="none",document.body.appendChild(t),ve.to(t,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>{document.body.removeChild(t)}}),this.composer&&this.composer.passes[1]&&ve.to(this.composer.passes[1],{strength:3,duration:.1,ease:"power2.out",onComplete:()=>{ve.to(this.composer.passes[1],{strength:.5,duration:1,ease:"power2.out"})}})}createCameraShake(){const t=this.camera.position.clone(),e=this.camera.rotation.clone();ve.to(this.camera.position,{x:t.x+(Math.random()-.5)*2,y:t.y+(Math.random()-.5)*1,z:t.z+(Math.random()-.5)*1,duration:.1,ease:"power2.out",repeat:10,yoyo:!0,onComplete:()=>{ve.to(this.camera.position,{x:t.x,y:t.y,z:t.z,duration:.5,ease:"elastic.out(1, 0.3)"})}}),ve.to(this.camera.rotation,{x:e.x+(Math.random()-.5)*.2,y:e.y+(Math.random()-.5)*.2,z:e.z+(Math.random()-.5)*.1,duration:.1,ease:"power2.out",repeat:8,yoyo:!0,onComplete:()=>{ve.to(this.camera.rotation,{x:e.x,y:e.y,z:e.z,duration:.5,ease:"elastic.out(1, 0.3)"})}})}createMuzzleFlash(t){const e=new Ge(2,16,16),n=new Hn({color:16755200,transparent:!0,opacity:1,blending:Ss}),i=new at(e,n);i.position.copy(t),this.scene.add(i),ve.fromTo(i.scale,{x:0,y:0,z:0},{x:3,y:3,z:3,duration:.1,ease:"power3.out"}),ve.to(n,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>{this.scene.remove(i),i.geometry.dispose(),i.material.dispose()}});const s=new ms(16755200,20,50);s.position.copy(t),this.scene.add(s),ve.to(s,{intensity:0,duration:.5,ease:"power2.out",onComplete:()=>{this.scene.remove(s)}})}createSmokeEffect(t){const n=new pe,i=new Float32Array(200*3),s=new Float32Array(200*3),o=new Float32Array(200);for(let c=0;c<200;c++)i[c*3]=t.x+(Math.random()-.5)*2,i[c*3+1]=t.y+(Math.random()-.5)*1,i[c*3+2]=t.z+(Math.random()-.5)*2,s[c*3]=(Math.random()-.5)*5,s[c*3+1]=Math.random()*3+2,s[c*3+2]=(Math.random()-.5)*5,o[c]=Math.random()*2+1;n.setAttribute("position",new we(i,3)),n.setAttribute("velocity",new we(s,3)),n.setAttribute("size",new we(o,1));const a=new Ie({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:`
                attribute float size;
                attribute vec3 velocity;
                varying float vSize;
                uniform float time;
                void main() {
                    vSize = size;
                    vec3 pos = position + velocity * time;
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * 100.0 / -mvPosition.z;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                varying float vSize;
                uniform float opacity;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    float alpha = (1.0 - dist * 2.0) * opacity;
                    gl_FragColor = vec4(0.3, 0.3, 0.3, alpha);
                }
            `,transparent:!0,blending:ui,depthWrite:!1}),l=new to(n,a);this.scene.add(l),ve.to(a.uniforms.time,{value:3,duration:3,ease:"power1.out"}),ve.to(a.uniforms.opacity,{value:0,duration:3,ease:"power2.out",onComplete:()=>{this.scene.remove(l),l.geometry.dispose(),l.material.dispose()}})}createSparkEffect(t){const n=new pe,i=new Float32Array(100*3),s=new Float32Array(100*3);for(let l=0;l<100;l++)i[l*3]=t.x,i[l*3+1]=t.y,i[l*3+2]=t.z,s[l*3]=(Math.random()-.5)*20,s[l*3+1]=Math.random()*10+5,s[l*3+2]=(Math.random()-.5)*20;n.setAttribute("position",new we(i,3)),n.setAttribute("velocity",new we(s,3));const o=new Ie({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:`
                attribute vec3 velocity;
                uniform float time;
                void main() {
                    vec3 pos = position + velocity * time - vec3(0, 9.8 * time * time * 0.5, 0);
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = 5.0;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                uniform float opacity;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    gl_FragColor = vec4(1.0, 0.7, 0.2, opacity);
                }
            `,transparent:!0,blending:Ss,depthWrite:!1}),a=new to(n,o);this.scene.add(a),ve.to(o.uniforms.time,{value:2,duration:2,ease:"power1.out"}),ve.to(o.uniforms.opacity,{value:0,duration:1.5,ease:"power2.out",onComplete:()=>{this.scene.remove(a),a.geometry.dispose(),a.material.dispose()}})}createCannonBall(t,e){const n=new Ge(.2,8,8),i=new Hn({color:3355443}),s=new at(n,i);s.position.copy(t),this.scene.add(s);const o=new Kt(.05,.1,5,8),a=new Hn({color:6710886,transparent:!0,opacity:.7}),l=new at(o,a);l.lookAt(e),l.position.copy(t),this.scene.add(l);const c=t.clone().add(e.clone().multiplyScalar(100));ve.to(s.position,{x:c.x,y:c.y-20,z:c.z,duration:3,ease:"power1.out"}),ve.to(l.position,{x:c.x,y:c.y-20,z:c.z,duration:3,ease:"power1.out",onComplete:()=>{this.scene.remove(s),this.scene.remove(l),s.geometry.dispose(),s.material.dispose(),l.geometry.dispose(),l.material.dispose()}}),ve.to(a,{opacity:0,duration:1,ease:"power2.out"})}createHelm(){this.wheelGroup=new Ee;const t=new Kt(.15,.2,1.5,8),e=new It({color:657413,roughness:.6,metalness:.1}),n=new at(t,e);n.position.y=.75,n.castShadow=!0,this.scene.add(n);const i=new ri(1.5,.15,12,48),s=new It({color:2757904,roughness:.8,metalness:.05}),o=new at(i,s);o.castShadow=!0,this.wheelGroup.add(o);for(let tt=0;tt<24;tt++){const W=new Ge(.04,8,8),j=new It({color:13412966,roughness:.4,metalness:.8}),ct=new at(W,j),St=tt/24*Math.PI*2;ct.position.set(Math.cos(St)*1.5,Math.sin(St)*1.5,.12),this.wheelGroup.add(ct)}const a=new It({color:1707784,roughness:.85,metalness:.02});for(let tt=0;tt<12;tt++){const W=new Te(.1,.15,2.8),j=new at(W,a);j.rotation.z=tt*Math.PI*2/12,j.castShadow=!0,this.wheelGroup.add(j);const ct=new Kt(.08,.08,.3,8),St=new It({color:2759178,roughness:.95,metalness:0}),gt=new at(ct,St);gt.position.set(Math.cos(tt*Math.PI*2/12)*1.3,Math.sin(tt*Math.PI*2/12)*1.3,0),gt.rotation.z=tt*Math.PI*2/12,this.wheelGroup.add(gt)}const l=new Kt(.35,.35,.25,16),c=new It({color:13412966,roughness:.3,metalness:.9}),h=new at(l,c);h.rotation.x=Math.PI/2,this.wheelGroup.add(h);const u=new Kt(.28,.28,.05,32),f=new It({color:65484,emissive:65484,emissiveIntensity:2,roughness:.2,metalness:.8});this.compass.mesh=new at(u,f),this.compass.mesh.rotation.x=Math.PI/2,this.wheelGroup.add(this.compass.mesh);const m=new ri(.3,.02,8,32),g=new It({color:65484,emissive:65484,emissiveIntensity:1,roughness:.2,metalness:.8}),_=new at(m,g);_.rotation.x=Math.PI/2,this.wheelGroup.add(_);const p=new Ee,d=new Kt(.2,.25,.15,16),x=new It({color:13378048,emissive:4460800,emissiveIntensity:1.5,roughness:.3,metalness:.9}),v=new at(d,x);v.rotation.x=Math.PI/2,p.add(v);const M=new So(.18,32),b=new It({color:16724736,emissive:16724736,emissiveIntensity:2,roughness:.1,metalness:.8}),S=new at(M,b);S.position.z=.08,p.add(S);const T=new ri(.22,.03,8,32),L=new It({color:13412966,roughness:.3,metalness:.9}),y=new at(T,L);y.rotation.x=Math.PI/2,p.add(y);const w=document.createElement("canvas");w.width=256,w.height=128;const N=w.getContext("2d");N.fillStyle="#ffffff",N.font="bold 60px Arial",N.textAlign="center",N.fillText("FIRE",128,80);const F=new Zs(w),X=new $s({map:F}),D=new Kr(X);D.scale.set(.8,.4,1),D.position.z=.1,p.add(D),p.userData={isFireButton:!0,isDraggable:!1},this.fireButton=p,this.wheelGroup.add(p);const O=new It({color:9139029,roughness:1,metalness:0});for(let tt=0;tt<4;tt++){const W=new ri(.15,.02,4,12),j=new at(W,O),ct=tt*Math.PI*2/4+Math.PI/8;j.position.set(Math.cos(ct)*.8,Math.sin(ct)*.8,0),j.rotation.z=ct,this.wheelGroup.add(j)}const z=new It({color:1707784,roughness:.9,metalness:0}),H=new Ee,q=new Te(.02,.1,.01),Z=new at(q,z);H.add(Z);const Q=new Te(.06,.02,.01),et=new at(Q,z);et.position.y=.03,H.add(et),H.position.set(1.45,0,.1),H.scale.set(.5,.5,.5),this.wheelGroup.add(H),this.wheelGroup.position.set(0,1.2,0),this.wheelGroup.rotation.x=-Math.PI/8,this.wheelGroup.rotation.y=0,this.scene.add(this.wheelGroup)}createGauges(){[{name:"KNOTS",pos:{x:-3.5,y:2.5,z:-1},scale:2},{name:"COMPASS",pos:{x:0,y:2.7,z:-1.2},scale:3},{name:"DRIFT",pos:{x:3.5,y:2.5,z:-1},scale:2}].forEach((e,n)=>{const i=new Ee,s=e.scale||1,o=new Kt(.18*s,.2*s,.15*s,16),a=new It({color:13216097,roughness:.4,metalness:.6}),l=new at(o,a);l.rotation.x=Math.PI/2,l.castShadow=!0,i.add(l);const c=new So(.16*s,32),h=new It({color:1710618,roughness:.2,metalness:.1}),u=new at(c,h);u.position.z=.08*s,i.add(u);const f=new Ge(.17*s,32,16,0,Math.PI*2,0,Math.PI/2),m=new wa({color:16777215,metalness:0,roughness:0,transmission:.95,thickness:.5,transparent:!0,clearcoat:1,clearcoatRoughness:0}),g=new at(f,m);g.rotation.x=-Math.PI/2,g.position.z=.08*s,i.add(g);const _=new Te(.015*s,.14*s,.005),p=new It({color:16711680,emissive:16711680,emissiveIntensity:.5,roughness:.3,metalness:.7}),d=new at(_,p);d.position.z=.09*s,d.geometry.translate(0,.07*s,0),i.add(d),i.position.set(e.pos.x,e.pos.y,e.pos.z),i.lookAt(0,1.8,4),i.userData={isDraggable:!0,name:e.name,originalPosition:{x:e.pos.x,y:e.pos.y,z:e.pos.z}};const x=document.createElement("canvas");x.width=256,x.height=64;const v=x.getContext("2d");v.fillStyle="#ffffff",v.font="bold 48px Arial",v.textAlign="center",v.fillText(e.name,128,48);const M=new Zs(x),b=new $s({map:M}),S=new Kr(b);S.scale.set(.5*s,.125*s,1),S.position.y=-.3*s,i.add(S),this.gauges.push({group:i,needle:d,name:e.name}),this.scene.add(i)})}createDebugText(){const t=new Ee,e=new Te(3,.8,.2),n=new Hn({color:65280}),i=new at(e,n);t.add(i);const s=document.createElement("canvas");s.width=256,s.height=64;const o=s.getContext("2d");o.fillStyle="#000000",o.font="bold 48px Arial",o.textAlign="center",o.fillText("FRONT",128,48);const a=new Zs(s),l=new $s({map:a}),c=new Kr(l);c.scale.set(2,.5,1),c.position.z=.2,t.add(c),t.position.set(0,4,5),this.scene.add(t);const h=new Ee,u=new Te(3,.8,.2),f=new Hn({color:16711680}),m=new at(u,f);h.add(m);const g=document.createElement("canvas");g.width=256,g.height=64;const _=g.getContext("2d");_.fillStyle="#ffffff",_.font="bold 48px Arial",_.textAlign="center",_.fillText("BACK",128,48);const p=new Zs(g),d=new $s({map:p}),x=new Kr(d);x.scale.set(2,.5,1),x.position.z=.2,h.add(x),h.position.set(0,4,-5),this.scene.add(h)}createParticles(){const t=new pe,e=5e3,n=new Float32Array(e*3),i=new Float32Array(e);for(let x=0;x<e;x++){const v=Math.random()*Math.PI*2,M=Math.acos(Math.random()*2-1),b=150+Math.random()*50;n[x*3]=b*Math.sin(M)*Math.cos(v),n[x*3+1]=b*Math.cos(M),n[x*3+2]=b*Math.sin(M)*Math.sin(v),i[x]=Math.random()*.8+.2}t.setAttribute("position",new we(n,3)),t.setAttribute("size",new we(i,1));const s=new Ie({uniforms:{time:{value:0}},vertexShader:`
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
            `,transparent:!0,blending:Ss,depthWrite:!1}),o=new to(t,s);this.scene.add(o);const a=new pe,l=500,c=new Float32Array(l*3),h=new Float32Array(l);for(let x=0;x<l;x++)c[x*3]=(Math.random()-.5)*40,c[x*3+1]=Math.random()*5,c[x*3+2]=(Math.random()-.5)*40,h[x]=Math.random();a.setAttribute("position",new we(c,3)),a.setAttribute("scale",new we(h,1));const u=new Ie({uniforms:{time:{value:0}},vertexShader:`
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
            `,transparent:!0,blending:ui,depthWrite:!1});this.particles=new to(a,u),this.scene.add(this.particles);const f=new Ge(5,32,32),m=new It({color:16777164,emissive:16777130,emissiveIntensity:.3,roughness:.8,metalness:0}),g=new at(f,m);g.position.set(-30,40,-50),this.scene.add(g);const _=new Ge(7,32,32),p=new Hn({color:16777164,transparent:!0,opacity:.3}),d=new at(_,p);d.position.copy(g.position),this.scene.add(d)}createTreasure(){const t=new It({color:16766720,metalness:.9,roughness:.2}),e=new It({color:13369344,metalness:.4,roughness:.1,emissive:3342336,emissiveIntensity:.2}),n=new It({color:16777215,metalness:.1,roughness:.05});for(let F=0;F<15;F++){const X=new Kt(.08,.08,.02,16),D=new at(X,t);D.position.set(-3+Math.random()*6,.02+Math.random()*.02,-8+Math.random()*4),D.rotation.x=Math.PI/2+Math.random()*.2,D.rotation.z=Math.random()*Math.PI,D.castShadow=!0,this.scene.add(D)}const i=new Ee,s=new Kt(.15,.1,.3,12),o=new at(s,t);i.add(o);for(let F=0;F<6;F++){const X=new bl(.03,0),D=new at(X,e),O=F/6*Math.PI*2;D.position.set(Math.cos(O)*.12,.05,Math.sin(O)*.12),i.add(D)}i.position.set(-2,.15,-6),i.rotation.z=.3,this.scene.add(i),new Qs([new R(2,.3,-7),new R(2.5,.2,-6.8),new R(2.3,.1,-6.5),new R(2,.05,-6.7)]).getPoints(20).forEach((F,X)=>{const D=new Ge(.02+Math.random()*.01,8,8),O=new at(D,n);O.position.copy(F),this.scene.add(O)});const c=new It({color:13412966,metalness:.7,roughness:.4}),h=new Ee,u=new ri(.3,.02,8,12,Math.PI/3),f=new at(u,c);h.add(f);const m=new Te(.02,.4,.02),g=new at(m,c);g.position.y=-.2,h.add(g),h.position.set(3,.1,-5),h.rotation.z=-.5,this.scene.add(h);const _=new Ee,p=new El(.03,.5,4),d=new It({color:13421772,metalness:.9,roughness:.2}),x=new at(p,d);x.position.y=.25,_.add(x);const v=new Kt(.04,.04,.2,8),M=new It({color:2759178,roughness:.8}),b=new at(v,M);b.position.y=-.1,_.add(b);const S=new Ge(.05,8,8),T=new at(S,e);T.position.y=-.2,_.add(T),_.position.set(0,.2,-4),_.rotation.z=Math.PI/4,_.rotation.x=-Math.PI/2,this.scene.add(_);const L=new Ts(.6,.4),y=new Zs(this.createMapTexture()),w=new It({map:y,roughness:.9,metalness:0}),N=new at(L,w);N.position.set(-1.5,.02,-5),N.rotation.x=-Math.PI/2,N.rotation.z=.2,this.scene.add(N)}createMapTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");return e.fillStyle="#f4e8d0",e.fillRect(0,0,256,256),e.fillStyle="rgba(139, 90, 43, 0.2)",e.beginPath(),e.arc(200,50,30,0,Math.PI*2),e.fill(),e.strokeStyle="#5a3a1a",e.lineWidth=2,e.beginPath(),e.moveTo(50,100),e.lineTo(100,80),e.lineTo(150,120),e.lineTo(200,100),e.stroke(),e.strokeStyle="#cc0000",e.lineWidth=3,e.beginPath(),e.moveTo(140,140),e.lineTo(160,160),e.moveTo(160,140),e.lineTo(140,160),e.stroke(),t}createShipBackground(){const t=new It({color:2759184,roughness:.9,metalness:.1}),e=new Kt(.3,.4,15,12),n=new at(e,t);n.position.set(-5,7.5,-10),n.castShadow=!0,this.scene.add(n);const i=new Kt(.2,.2,8,8),s=new at(i,t);s.position.set(-5,10,-10),s.rotation.z=Math.PI/2,this.scene.add(s);const o=new It({color:9139029,roughness:1,metalness:0});for(let _=0;_<4;_++){const p=new Kt(.02,.02,12,6),d=new at(p,o);d.position.set(-5+(_-1.5)*.5,6,-10),d.rotation.z=(_-1.5)*.2,d.castShadow=!0,this.scene.add(d)}const a=new Ee,l=new It({color:3355443,roughness:.6,metalness:.7}),c=new Kt(.15,.25,1.5,12),h=new at(c,l);h.rotation.z=Math.PI/2,a.add(h);for(let _ of[-.5,.5]){const p=new Kt(.3,.3,.1,16),d=new at(p,t);d.position.set(_,-.2,0),d.rotation.x=Math.PI/2,a.add(d)}a.position.set(5,.5,-8),a.rotation.y=-Math.PI/6,this.scene.add(a);const u=new It({color:3811616,roughness:.8,metalness:.1});for(let _=-12;_<-2;_+=2){const p=new Kt(.05,.05,1.2,8),d=new at(p,u);d.position.set(-7,.6,_),this.scene.add(d);const x=new at(p,u);x.position.set(7,.6,_),this.scene.add(x)}const f=new It({color:4865064,roughness:.85,metalness:.05});for(let _=0;_<3;_++)for(let p=0;p<2-_;p++){const d=new Kt(.35,.35,.7,12),x=new at(d,f);x.position.set(6-p*.7,.35+_*.7,-10),x.castShadow=!0,this.scene.add(x)}const m=new Ee;for(let _=0;_<5;_++){const p=new ri(.3-_*.02,.04,6,20),d=new at(p,o);d.position.y=_*.08,d.rotation.x=Math.PI/2,m.add(d)}m.position.set(-4,.1,-9),this.scene.add(m);const g=new It({color:6710835,roughness:.5,metalness:.6});for(let _ of[-4,4]){const p=new Kt(.04,.04,2,8),d=new at(p,g);d.position.set(_,1,-5),this.scene.add(d);const x=new Te(.3,.4,.3),v=new at(x,g);v.position.set(_,2,-5),this.scene.add(v);const M=new wa({color:16755268,metalness:0,roughness:0,transmission:.5,thickness:.1,emissive:16755268,emissiveIntensity:.5}),b=new Te(.25,.35,.25),S=new at(b,M);S.position.copy(v.position),this.scene.add(S)}}setupEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});let t=0;this.renderer.domElement.addEventListener("mousedown",e=>{if(e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.fireButton&&this.raycaster.intersectObjects([this.fireButton],!0).length>0){console.log("🔥 FIRE BUTTON CLICKED! 🔥"),this.fireAllCannons();return}const n=this.gauges.map(s=>s.group),i=this.raycaster.intersectObjects(n,!0);if(i.length>0){this.controls.enabled=!1,this.dragControls.isDragging=!0,this.dragControls.selectedObject=i[0].object.parent;const s=i[0].point;this.dragControls.offset.copy(s).sub(this.dragControls.selectedObject.position)}else this.dragControls.isDragging=!1,this.dragControls.wheelDragging=!0,this.dragControls.lastMouseX=e.clientX}),window.addEventListener("mouseup",()=>{this.controls.enabled=!0,this.dragControls.isDragging=!1,this.dragControls.wheelDragging=!1,this.dragControls.selectedObject=null}),window.addEventListener("mousemove",e=>{if(this.dragControls.isDragging&&this.dragControls.selectedObject){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.dragControls.selectedObject.position.distanceTo(this.camera.position),i=new R;i.set(this.mouse.x,this.mouse.y,.5),i.unproject(this.camera),i.sub(this.camera.position).normalize(),i.multiplyScalar(n),i.add(this.camera.position),this.dragControls.selectedObject.position.copy(i.sub(this.dragControls.offset)),this.dragControls.selectedObject.lookAt(this.camera.position)}else if(this.dragControls.wheelDragging&&this.wheelGroup){const n=e.clientX-this.dragControls.lastMouseX;t+=n*.01,ve.to(this.wheelGroup.rotation,{z:t,duration:.3,ease:"power2.out"}),this.dragControls.lastMouseX=e.clientX}})}hideLoadingScreen(){setTimeout(()=>{document.querySelector(".loading-screen").classList.add("hidden")},1e3)}updateCompass(){this.compass.bearing+=(Math.random()-.5)*.5,this.compass.bearing>=360&&(this.compass.bearing-=360),this.compass.bearing<0&&(this.compass.bearing+=360);const t=this.compass.bearing<22.5||this.compass.bearing>=337.5?"N":this.compass.bearing<67.5?"NE":this.compass.bearing<112.5?"E":this.compass.bearing<157.5?"SE":this.compass.bearing<202.5?"S":this.compass.bearing<247.5?"SW":this.compass.bearing<292.5?"W":"NW";document.querySelector(".compass-value").textContent=`${t} ${Math.floor(this.compass.bearing)}°`}animate(){requestAnimationFrame(()=>this.animate()),this.clock.getDelta();const t=this.clock.getElapsedTime();this.scene.rotation.z=Math.sin(t*.5)*.02,this.scene.rotation.x=Math.cos(t*.3)*.01,this.wheelGroup&&(this.wheelGroup.rotation.z+=Math.sin(t*.8)*5e-4),this.gauges.forEach((i,s)=>{i.needle.rotation.z=Math.sin(t*(1+s*.3))*Math.PI/3}),this.compass.mesh&&(this.compass.mesh.material.emissiveIntensity=2+Math.sin(t*2)*.5),this.particles&&(this.particles.material.uniforms.time.value=t,this.particles.rotation.y+=1e-4);const e=2.5+Math.sin(t*8)*.3+Math.sin(t*13)*.2,n=2.5+Math.sin(t*7+1)*.3+Math.sin(t*11)*.2;this.scene.traverse(i=>{i.type==="PointLight"&&(i.position.x===-4&&i.position.z===-5?i.intensity=e:i.position.x===4&&i.position.z===-5&&(i.intensity=n))}),Math.random()<.02&&this.updateCompass(),this.controls.update(),this.composer.render()}createSailingWarship(){const t=new It({color:2759184,roughness:.9,metalness:.1}),e=new It({color:16315622,roughness:.8,metalness:.05,transparent:!0,opacity:.9}),n=new It({color:9139029,roughness:1,metalness:0}),i=new Kt(.5,.7,30,16),s=new at(i,t);s.position.set(0,15,8),s.castShadow=!0,this.scene.add(s);const o=new Kt(.4,.6,25,16),a=new at(o,t);a.position.set(0,12.5,-12),a.castShadow=!0,this.scene.add(a);const l=new Ts(16,20),c=new at(l,e);c.position.set(0,18,9),c.rotation.y=-Math.PI/20,this.scene.add(c);for(let S=0;S<3;S++){const T=new rr;T.moveTo(0,0),T.lineTo(8,0),T.lineTo(0,12-S*2),T.lineTo(0,0);const L=new Eo(T),y=new at(L,e);y.position.set(0,10+S*3,15+S*2),y.rotation.y=Math.PI/2,y.rotation.x=Math.PI/8,this.scene.add(y)}const h=new rr;h.moveTo(0,0),h.lineTo(12,0),h.lineTo(0,18),h.lineTo(0,0);const u=new Eo(h),f=new at(u,e);f.position.set(0,15,-11),f.rotation.y=Math.PI/2,this.scene.add(f),[{pos:[0,25,9],length:18},{pos:[0,20,9],length:20}].forEach(S=>{const T=new Kt(.15,.15,S.length,8),L=new at(T,t);L.position.set(...S.pos),L.rotation.z=Math.PI/2,this.scene.add(L)}),[{from:[0,30,8],to:[-10,0,18]},{from:[0,30,8],to:[10,0,18]},{from:[0,30,8],to:[-8,0,-2]},{from:[0,30,8],to:[8,0,-2]},{from:[0,25,-12],to:[-8,0,-20]},{from:[0,25,-12],to:[8,0,-20]}].forEach(S=>{const T=Math.sqrt(Math.pow(S.to[0]-S.from[0],2)+Math.pow(S.to[1]-S.from[1],2)+Math.pow(S.to[2]-S.from[2],2)),L=new Kt(.02,.02,T,6),y=new at(L,n);y.position.set((S.from[0]+S.to[0])/2,(S.from[1]+S.to[1])/2,(S.from[2]+S.to[2])/2);const w=new R(S.to[0]-S.from[0],S.to[1]-S.from[1],S.to[2]-S.from[2]).normalize();y.lookAt(y.position.x+w.x,y.position.y+w.y,y.position.z+w.z),y.rotateX(Math.PI/2),this.scene.add(y)});const _=new Te(12,1,8),p=new at(_,new It({color:3811616,roughness:.8,metalness:.1}));p.position.set(0,.5,-8),p.receiveShadow=!0,this.scene.add(p);const d=-2,x=new Te(18,3,25),v=new at(x,new It({color:2757904,roughness:.8,metalness:.1}));v.position.set(0,d,0),this.scene.add(v);const M=new Te(8,4,6),b=new at(M,new It({color:4865064,roughness:.7,metalness:.1}));b.position.set(0,2,-15),this.scene.add(b);for(let S of[-2,2]){const T=new Ts(1.5,1),L=new at(T,new wa({color:16777164,metalness:0,roughness:0,transmission:.8,thickness:.1,emissive:16777130,emissiveIntensity:.3}));L.position.set(S,2,-18.1),this.scene.add(L)}}}new cM;
