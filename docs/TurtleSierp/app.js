!function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=59)}({0:function(n,t,r){"use strict";var e={};r.r(e),r.d(e,"create",function(){return f}),r.d(e,"clone",function(){return d}),r.d(e,"fromValues",function(){return h}),r.d(e,"copy",function(){return s}),r.d(e,"set",function(){return l}),r.d(e,"add",function(){return v}),r.d(e,"subtract",function(){return M}),r.d(e,"multiply",function(){return m}),r.d(e,"divide",function(){return g}),r.d(e,"ceil",function(){return b}),r.d(e,"floor",function(){return p}),r.d(e,"min",function(){return y}),r.d(e,"max",function(){return _}),r.d(e,"round",function(){return x}),r.d(e,"scale",function(){return w}),r.d(e,"scaleAndAdd",function(){return A}),r.d(e,"distance",function(){return q}),r.d(e,"squaredDistance",function(){return S}),r.d(e,"length",function(){return P}),r.d(e,"squaredLength",function(){return T}),r.d(e,"negate",function(){return I}),r.d(e,"inverse",function(){return L}),r.d(e,"normalize",function(){return E}),r.d(e,"dot",function(){return F}),r.d(e,"cross",function(){return O}),r.d(e,"lerp",function(){return R}),r.d(e,"random",function(){return k}),r.d(e,"transformMat2",function(){return C}),r.d(e,"transformMat2d",function(){return j}),r.d(e,"transformMat3",function(){return V}),r.d(e,"transformMat4",function(){return D}),r.d(e,"rotate",function(){return z}),r.d(e,"angle",function(){return U}),r.d(e,"zero",function(){return B}),r.d(e,"str",function(){return G}),r.d(e,"exactEquals",function(){return W}),r.d(e,"equals",function(){return N}),r.d(e,"len",function(){return Y}),r.d(e,"sub",function(){return Q}),r.d(e,"mul",function(){return X}),r.d(e,"div",function(){return K}),r.d(e,"dist",function(){return Z}),r.d(e,"sqrDist",function(){return J}),r.d(e,"sqrLen",function(){return $}),r.d(e,"forEach",function(){return nn});var u={};r.r(u),r.d(u,"create",function(){return tn}),r.d(u,"clone",function(){return rn}),r.d(u,"length",function(){return en}),r.d(u,"fromValues",function(){return un}),r.d(u,"copy",function(){return on}),r.d(u,"set",function(){return an}),r.d(u,"add",function(){return cn}),r.d(u,"subtract",function(){return fn}),r.d(u,"multiply",function(){return dn}),r.d(u,"divide",function(){return hn}),r.d(u,"ceil",function(){return sn}),r.d(u,"floor",function(){return ln}),r.d(u,"min",function(){return vn}),r.d(u,"max",function(){return Mn}),r.d(u,"round",function(){return mn}),r.d(u,"scale",function(){return gn}),r.d(u,"scaleAndAdd",function(){return bn}),r.d(u,"distance",function(){return pn}),r.d(u,"squaredDistance",function(){return yn}),r.d(u,"squaredLength",function(){return _n}),r.d(u,"negate",function(){return xn}),r.d(u,"inverse",function(){return wn}),r.d(u,"normalize",function(){return An}),r.d(u,"dot",function(){return qn}),r.d(u,"cross",function(){return Sn}),r.d(u,"lerp",function(){return Pn}),r.d(u,"hermite",function(){return Tn}),r.d(u,"bezier",function(){return In}),r.d(u,"random",function(){return Ln}),r.d(u,"transformMat4",function(){return En}),r.d(u,"transformMat3",function(){return Fn}),r.d(u,"transformQuat",function(){return On}),r.d(u,"rotateX",function(){return Rn}),r.d(u,"rotateY",function(){return kn}),r.d(u,"rotateZ",function(){return Cn}),r.d(u,"angle",function(){return jn}),r.d(u,"zero",function(){return Vn}),r.d(u,"str",function(){return Dn}),r.d(u,"exactEquals",function(){return zn}),r.d(u,"equals",function(){return Un}),r.d(u,"sub",function(){return Bn}),r.d(u,"mul",function(){return Gn}),r.d(u,"div",function(){return Wn}),r.d(u,"dist",function(){return Nn}),r.d(u,"sqrDist",function(){return Hn}),r.d(u,"len",function(){return Yn}),r.d(u,"sqrLen",function(){return Qn}),r.d(u,"forEach",function(){return Xn});var o={};r.r(o),r.d(o,"create",function(){return Kn}),r.d(o,"clone",function(){return Zn}),r.d(o,"fromValues",function(){return Jn}),r.d(o,"copy",function(){return $n}),r.d(o,"set",function(){return nt}),r.d(o,"add",function(){return tt}),r.d(o,"subtract",function(){return rt}),r.d(o,"multiply",function(){return et}),r.d(o,"divide",function(){return ut}),r.d(o,"ceil",function(){return ot}),r.d(o,"floor",function(){return it}),r.d(o,"min",function(){return at}),r.d(o,"max",function(){return ct}),r.d(o,"round",function(){return ft}),r.d(o,"scale",function(){return dt}),r.d(o,"scaleAndAdd",function(){return ht}),r.d(o,"distance",function(){return st}),r.d(o,"squaredDistance",function(){return lt}),r.d(o,"length",function(){return vt}),r.d(o,"squaredLength",function(){return Mt}),r.d(o,"negate",function(){return mt}),r.d(o,"inverse",function(){return gt}),r.d(o,"normalize",function(){return bt}),r.d(o,"dot",function(){return pt}),r.d(o,"cross",function(){return yt}),r.d(o,"lerp",function(){return _t}),r.d(o,"random",function(){return xt}),r.d(o,"transformMat4",function(){return wt}),r.d(o,"transformQuat",function(){return At}),r.d(o,"zero",function(){return qt}),r.d(o,"str",function(){return St}),r.d(o,"exactEquals",function(){return Pt}),r.d(o,"equals",function(){return Tt}),r.d(o,"sub",function(){return It}),r.d(o,"mul",function(){return Lt}),r.d(o,"div",function(){return Et}),r.d(o,"dist",function(){return Ft}),r.d(o,"sqrDist",function(){return Ot}),r.d(o,"len",function(){return Rt}),r.d(o,"sqrLen",function(){return kt}),r.d(o,"forEach",function(){return Ct});var i=1e-6,a="undefined"!=typeof Float32Array?Float32Array:Array,c=Math.random;Math.PI;function f(){var n=new a(2);return a!=Float32Array&&(n[0]=0,n[1]=0),n}function d(n){var t=new a(2);return t[0]=n[0],t[1]=n[1],t}function h(n,t){var r=new a(2);return r[0]=n,r[1]=t,r}function s(n,t){return n[0]=t[0],n[1]=t[1],n}function l(n,t,r){return n[0]=t,n[1]=r,n}function v(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function M(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function m(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n}function g(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n}function b(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function p(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function y(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function _(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function x(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function w(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function A(n,t,r,e){return n[0]=t[0]+r[0]*e,n[1]=t[1]+r[1]*e,n}function q(n,t){var r=t[0]-n[0],e=t[1]-n[1];return Math.sqrt(r*r+e*e)}function S(n,t){var r=t[0]-n[0],e=t[1]-n[1];return r*r+e*e}function P(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function T(n){var t=n[0],r=n[1];return t*t+r*r}function I(n,t){return n[0]=-t[0],n[1]=-t[1],n}function L(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function E(n,t){var r=t[0],e=t[1],u=r*r+e*e;return u>0&&(u=1/Math.sqrt(u)),n[0]=t[0]*u,n[1]=t[1]*u,n}function F(n,t){return n[0]*t[0]+n[1]*t[1]}function O(n,t,r){var e=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=e,n}function R(n,t,r,e){var u=t[0],o=t[1];return n[0]=u+e*(r[0]-u),n[1]=o+e*(r[1]-o),n}function k(n,t){t=t||1;var r=2*c()*Math.PI;return n[0]=Math.cos(r)*t,n[1]=Math.sin(r)*t,n}function C(n,t,r){var e=t[0],u=t[1];return n[0]=r[0]*e+r[2]*u,n[1]=r[1]*e+r[3]*u,n}function j(n,t,r){var e=t[0],u=t[1];return n[0]=r[0]*e+r[2]*u+r[4],n[1]=r[1]*e+r[3]*u+r[5],n}function V(n,t,r){var e=t[0],u=t[1];return n[0]=r[0]*e+r[3]*u+r[6],n[1]=r[1]*e+r[4]*u+r[7],n}function D(n,t,r){var e=t[0],u=t[1];return n[0]=r[0]*e+r[4]*u+r[12],n[1]=r[1]*e+r[5]*u+r[13],n}function z(n,t,r,e){var u=t[0]-r[0],o=t[1]-r[1],i=Math.sin(e),a=Math.cos(e);return n[0]=u*a-o*i+r[0],n[1]=u*i+o*a+r[1],n}function U(n,t){var r=n[0],e=n[1],u=t[0],o=t[1],i=r*r+e*e;i>0&&(i=1/Math.sqrt(i));var a=u*u+o*o;a>0&&(a=1/Math.sqrt(a));var c=(r*u+e*o)*i*a;return c>1?0:c<-1?Math.PI:Math.acos(c)}function B(n){return n[0]=0,n[1]=0,n}function G(n){return"vec2("+n[0]+", "+n[1]+")"}function W(n,t){return n[0]===t[0]&&n[1]===t[1]}function N(n,t){var r=n[0],e=n[1],u=t[0],o=t[1];return Math.abs(r-u)<=i*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(e-o)<=i*Math.max(1,Math.abs(e),Math.abs(o))}var H,Y=P,Q=M,X=m,K=g,Z=q,J=S,$=T,nn=(H=f(),function(n,t,r,e,u,o){var i,a;for(t||(t=2),r||(r=0),a=e?Math.min(e*t+r,n.length):n.length,i=r;i<a;i+=t)H[0]=n[i],H[1]=n[i+1],u(H,H,o),n[i]=H[0],n[i+1]=H[1];return n});function tn(){var n=new a(3);return a!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function rn(n){var t=new a(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function en(n){var t=n[0],r=n[1],e=n[2];return Math.sqrt(t*t+r*r+e*e)}function un(n,t,r){var e=new a(3);return e[0]=n,e[1]=t,e[2]=r,e}function on(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function an(n,t,r,e){return n[0]=t,n[1]=r,n[2]=e,n}function cn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n}function fn(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function dn(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n}function hn(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n}function sn(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n}function ln(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n}function vn(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n}function Mn(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n}function mn(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n}function gn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function bn(n,t,r,e){return n[0]=t[0]+r[0]*e,n[1]=t[1]+r[1]*e,n[2]=t[2]+r[2]*e,n}function pn(n,t){var r=t[0]-n[0],e=t[1]-n[1],u=t[2]-n[2];return Math.sqrt(r*r+e*e+u*u)}function yn(n,t){var r=t[0]-n[0],e=t[1]-n[1],u=t[2]-n[2];return r*r+e*e+u*u}function _n(n){var t=n[0],r=n[1],e=n[2];return t*t+r*r+e*e}function xn(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function wn(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function An(n,t){var r=t[0],e=t[1],u=t[2],o=r*r+e*e+u*u;return o>0&&(o=1/Math.sqrt(o)),n[0]=t[0]*o,n[1]=t[1]*o,n[2]=t[2]*o,n}function qn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Sn(n,t,r){var e=t[0],u=t[1],o=t[2],i=r[0],a=r[1],c=r[2];return n[0]=u*c-o*a,n[1]=o*i-e*c,n[2]=e*a-u*i,n}function Pn(n,t,r,e){var u=t[0],o=t[1],i=t[2];return n[0]=u+e*(r[0]-u),n[1]=o+e*(r[1]-o),n[2]=i+e*(r[2]-i),n}function Tn(n,t,r,e,u,o){var i=o*o,a=i*(2*o-3)+1,c=i*(o-2)+o,f=i*(o-1),d=i*(3-2*o);return n[0]=t[0]*a+r[0]*c+e[0]*f+u[0]*d,n[1]=t[1]*a+r[1]*c+e[1]*f+u[1]*d,n[2]=t[2]*a+r[2]*c+e[2]*f+u[2]*d,n}function In(n,t,r,e,u,o){var i=1-o,a=i*i,c=o*o,f=a*i,d=3*o*a,h=3*c*i,s=c*o;return n[0]=t[0]*f+r[0]*d+e[0]*h+u[0]*s,n[1]=t[1]*f+r[1]*d+e[1]*h+u[1]*s,n[2]=t[2]*f+r[2]*d+e[2]*h+u[2]*s,n}function Ln(n,t){t=t||1;var r=2*c()*Math.PI,e=2*c()-1,u=Math.sqrt(1-e*e)*t;return n[0]=Math.cos(r)*u,n[1]=Math.sin(r)*u,n[2]=e*t,n}function En(n,t,r){var e=t[0],u=t[1],o=t[2],i=r[3]*e+r[7]*u+r[11]*o+r[15];return i=i||1,n[0]=(r[0]*e+r[4]*u+r[8]*o+r[12])/i,n[1]=(r[1]*e+r[5]*u+r[9]*o+r[13])/i,n[2]=(r[2]*e+r[6]*u+r[10]*o+r[14])/i,n}function Fn(n,t,r){var e=t[0],u=t[1],o=t[2];return n[0]=e*r[0]+u*r[3]+o*r[6],n[1]=e*r[1]+u*r[4]+o*r[7],n[2]=e*r[2]+u*r[5]+o*r[8],n}function On(n,t,r){var e=r[0],u=r[1],o=r[2],i=r[3],a=t[0],c=t[1],f=t[2],d=u*f-o*c,h=o*a-e*f,s=e*c-u*a,l=u*s-o*h,v=o*d-e*s,M=e*h-u*d,m=2*i;return d*=m,h*=m,s*=m,l*=2,v*=2,M*=2,n[0]=a+d+l,n[1]=c+h+v,n[2]=f+s+M,n}function Rn(n,t,r,e){var u=[],o=[];return u[0]=t[0]-r[0],u[1]=t[1]-r[1],u[2]=t[2]-r[2],o[0]=u[0],o[1]=u[1]*Math.cos(e)-u[2]*Math.sin(e),o[2]=u[1]*Math.sin(e)+u[2]*Math.cos(e),n[0]=o[0]+r[0],n[1]=o[1]+r[1],n[2]=o[2]+r[2],n}function kn(n,t,r,e){var u=[],o=[];return u[0]=t[0]-r[0],u[1]=t[1]-r[1],u[2]=t[2]-r[2],o[0]=u[2]*Math.sin(e)+u[0]*Math.cos(e),o[1]=u[1],o[2]=u[2]*Math.cos(e)-u[0]*Math.sin(e),n[0]=o[0]+r[0],n[1]=o[1]+r[1],n[2]=o[2]+r[2],n}function Cn(n,t,r,e){var u=[],o=[];return u[0]=t[0]-r[0],u[1]=t[1]-r[1],u[2]=t[2]-r[2],o[0]=u[0]*Math.cos(e)-u[1]*Math.sin(e),o[1]=u[0]*Math.sin(e)+u[1]*Math.cos(e),o[2]=u[2],n[0]=o[0]+r[0],n[1]=o[1]+r[1],n[2]=o[2]+r[2],n}function jn(n,t){var r=un(n[0],n[1],n[2]),e=un(t[0],t[1],t[2]);An(r,r),An(e,e);var u=qn(r,e);return u>1?0:u<-1?Math.PI:Math.acos(u)}function Vn(n){return n[0]=0,n[1]=0,n[2]=0,n}function Dn(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"}function zn(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}function Un(n,t){var r=n[0],e=n[1],u=n[2],o=t[0],a=t[1],c=t[2];return Math.abs(r-o)<=i*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-a)<=i*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(u-c)<=i*Math.max(1,Math.abs(u),Math.abs(c))}var Bn=fn,Gn=dn,Wn=hn,Nn=pn,Hn=yn,Yn=en,Qn=_n,Xn=function(){var n=tn();return function(t,r,e,u,o,i){var a,c;for(r||(r=3),e||(e=0),c=u?Math.min(u*r+e,t.length):t.length,a=e;a<c;a+=r)n[0]=t[a],n[1]=t[a+1],n[2]=t[a+2],o(n,n,i),t[a]=n[0],t[a+1]=n[1],t[a+2]=n[2];return t}}();function Kn(){var n=new a(4);return a!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function Zn(n){var t=new a(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Jn(n,t,r,e){var u=new a(4);return u[0]=n,u[1]=t,u[2]=r,u[3]=e,u}function $n(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function nt(n,t,r,e,u){return n[0]=t,n[1]=r,n[2]=e,n[3]=u,n}function tt(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n}function rt(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n}function et(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n}function ut(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n}function ot(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n[3]=Math.ceil(t[3]),n}function it(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n[3]=Math.floor(t[3]),n}function at(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n[3]=Math.min(t[3],r[3]),n}function ct(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n[3]=Math.max(t[3],r[3]),n}function ft(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n[3]=Math.round(t[3]),n}function dt(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n}function ht(n,t,r,e){return n[0]=t[0]+r[0]*e,n[1]=t[1]+r[1]*e,n[2]=t[2]+r[2]*e,n[3]=t[3]+r[3]*e,n}function st(n,t){var r=t[0]-n[0],e=t[1]-n[1],u=t[2]-n[2],o=t[3]-n[3];return Math.sqrt(r*r+e*e+u*u+o*o)}function lt(n,t){var r=t[0]-n[0],e=t[1]-n[1],u=t[2]-n[2],o=t[3]-n[3];return r*r+e*e+u*u+o*o}function vt(n){var t=n[0],r=n[1],e=n[2],u=n[3];return Math.sqrt(t*t+r*r+e*e+u*u)}function Mt(n){var t=n[0],r=n[1],e=n[2],u=n[3];return t*t+r*r+e*e+u*u}function mt(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function gt(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n[3]=1/t[3],n}function bt(n,t){var r=t[0],e=t[1],u=t[2],o=t[3],i=r*r+e*e+u*u+o*o;return i>0&&(i=1/Math.sqrt(i)),n[0]=r*i,n[1]=e*i,n[2]=u*i,n[3]=o*i,n}function pt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function yt(n,t,r,e){var u=r[0]*e[1]-r[1]*e[0],o=r[0]*e[2]-r[2]*e[0],i=r[0]*e[3]-r[3]*e[0],a=r[1]*e[2]-r[2]*e[1],c=r[1]*e[3]-r[3]*e[1],f=r[2]*e[3]-r[3]*e[2],d=t[0],h=t[1],s=t[2],l=t[3];return n[0]=h*f-s*c+l*a,n[1]=-d*f+s*i-l*o,n[2]=d*c-h*i+l*u,n[3]=-d*a+h*o-s*u,n}function _t(n,t,r,e){var u=t[0],o=t[1],i=t[2],a=t[3];return n[0]=u+e*(r[0]-u),n[1]=o+e*(r[1]-o),n[2]=i+e*(r[2]-i),n[3]=a+e*(r[3]-a),n}function xt(n,t){var r,e,u,o,i,a;t=t||1;do{i=(r=2*c()-1)*r+(e=2*c()-1)*e}while(i>=1);do{a=(u=2*c()-1)*u+(o=2*c()-1)*o}while(a>=1);var f=Math.sqrt((1-i)/a);return n[0]=t*r,n[1]=t*e,n[2]=t*u*f,n[3]=t*o*f,n}function wt(n,t,r){var e=t[0],u=t[1],o=t[2],i=t[3];return n[0]=r[0]*e+r[4]*u+r[8]*o+r[12]*i,n[1]=r[1]*e+r[5]*u+r[9]*o+r[13]*i,n[2]=r[2]*e+r[6]*u+r[10]*o+r[14]*i,n[3]=r[3]*e+r[7]*u+r[11]*o+r[15]*i,n}function At(n,t,r){var e=t[0],u=t[1],o=t[2],i=r[0],a=r[1],c=r[2],f=r[3],d=f*e+a*o-c*u,h=f*u+c*e-i*o,s=f*o+i*u-a*e,l=-i*e-a*u-c*o;return n[0]=d*f+l*-i+h*-c-s*-a,n[1]=h*f+l*-a+s*-i-d*-c,n[2]=s*f+l*-c+d*-a-h*-i,n[3]=t[3],n}function qt(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function St(n){return"vec4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}function Pt(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]}function Tt(n,t){var r=n[0],e=n[1],u=n[2],o=n[3],a=t[0],c=t[1],f=t[2],d=t[3];return Math.abs(r-a)<=i*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(e-c)<=i*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(u-f)<=i*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(o-d)<=i*Math.max(1,Math.abs(o),Math.abs(d))}var It=rt,Lt=et,Et=ut,Ft=st,Ot=lt,Rt=vt,kt=Mt,Ct=function(){var n=Kn();return function(t,r,e,u,o,i){var a,c;for(r||(r=4),e||(e=0),c=u?Math.min(u*r+e,t.length):t.length,a=e;a<c;a+=r)n[0]=t[a],n[1]=t[a+1],n[2]=t[a+2],n[3]=t[a+3],o(n,n,i),t[a]=n[0],t[a+1]=n[1],t[a+2]=n[2],t[a+3]=n[3];return t}}();r.d(t,"a",function(){return e}),r.d(t,"b",function(){return u}),r.d(t,"c",function(){return o})},1:function(n,t,r){"use strict";r.d(t,"d",function(){return i}),r.d(t,"a",function(){return a}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return d});var e=r(0);var u='This page requires a browser that supports WebGL.<br/>\n<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',o='It doesn\'t appear your computer can support WebGL.<br/>\n<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';function i(n,t){function r(t){var r=n.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n    <td align="center">\n    <div style="display: table-cell; vertical-align: middle;">\n    <div>'.concat(t,"</div>\n    </div>\n    </td></tr></table>"))}if(!window.WebGLRenderingContext)return r(u),null;var e=function(n,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],e=null,u=0;u<r.length;++u){try{e=n.getContext(r[u],t)}catch(n){}if(e)break}return e}(n,t);return e||r(o),e}function a(n,t,r){var e=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(e,t),n.compileShader(e),!n.getShaderParameter(e,n.COMPILE_STATUS)){var u="Vertex shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(e));return console.error(u),-1}var o=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(o,r),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){var i="Fragment shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(o));return console.error(i),-1}var a=n.createProgram();if(n.attachShader(a,e),n.attachShader(a,o),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS)){var c="Shader program failed to link.  The error log is:".concat(n.getProgramInfoLog(a));return console.error(c),-1}return a}function c(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Float32Array,r=n[0].length,e=n.length,u=new t(r*e),o=0,i=0;i<e;i++)for(var a=0;a<r;a++)u[o++]=n[i][a];return u}var f={fv3:{},fv4:{},uv3:{},uv4:{}};function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fv4";if(f[t][n])return f[t][n];var r,u=parseInt(n.charAt(1)+n.charAt(2),16),o=parseInt(n.charAt(3)+n.charAt(4),16),i=parseInt(n.charAt(5)+n.charAt(6),16);return r="fv3"===t?e.b.fromValues(u/255,o/255,i/255):"fv4"===t?e.c.fromValues(u/255,o/255,i/255,1):"uv3"===t?new Uint8Array([u,o,i]):new Uint8Array([u,o,i,255]),f[t][n]=r,f[t][n]}},11:function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},12:function(n,t){function r(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}n.exports=function(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),n}},23:function(n,t){n.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vPosition;\n}\n"},24:function(n,t){n.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},59:function(n,t,r){"use strict";r.r(t);var e=r(11),u=r.n(e),o=r(12),i=r.n(o),a=r(1),c=r(0),f=r(23),d=r.n(f),h=r(24),s=r.n(h),l=5,v=2;!function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;if(e<=0)for(var u=0;u<3;u++)t.forward(r),t.left(120);else n(t,r/2,e-1),t.forward(r/2),n(t,r/2,e-1),t.forward(-r/2),t.left(60),t.forward(r/2),t.right(60),n(t,r/2,e-1),t.left(60),t.forward(-r/2),t.right(60)}(new(function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;u()(this,n),this.theta=e,this.x=t,this.y=r,this._penStatus="down",this._points=[[c.a.fromValues(t,r)]],this._initGl(),this._timer=null}return i()(n,[{key:"forward",value:function(n){var t=this;if(this.x+=n*Math.cos(Math.PI*this.theta/180),this.y+=n*Math.sin(Math.PI*this.theta/180),"down"===this._penStatus){var r=this._points;r[r.length-1].push(c.a.fromValues(this.x,this.y)),clearTimeout(this._timer),this._timer=setTimeout(function(){t._render()})}}},{key:"right",value:function(n){this.theta+=-1*n}},{key:"left",value:function(n){this.theta+=n}},{key:"pen",value:function(n){if(this._penStatus=n,"up"===n&&0!==this._points[this._points.length-1].length)this._points.push([]);else if("down"===n){this._points[this._points.length-1][0]=c.a.fromValues(this.x,this.y)}}},{key:"_initGl",value:function(){var n=document.getElementById("gl-canvas"),t=Object(a.d)(n);t||console.error("WebGL isn't available"),t.viewport(0,0,n.width,n.height),t.clearColor(1,1,1,1);var r=Object(a.a)(t,d.a,s.a);t.useProgram(r),this._gl=t,this._program=r}},{key:"_render",value:function(){var n=this._gl;n.clear(n.COLOR_BUFFER_BIT);for(var t=n.getAttribLocation(this._program,"vPosition"),r=0;r<this._points.length;r++){var e=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,e),n.bufferData(n.ARRAY_BUFFER,Object(a.c)(this._points[r]),n.STATIC_DRAW),n.vertexAttribPointer(t,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(t),n.drawArrays(n.LINE_STRIP,0,this._points[r].length)}}}]),n}())(-1,-1,0))}});