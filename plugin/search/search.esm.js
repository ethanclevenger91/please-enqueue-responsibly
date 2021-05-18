function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==("undefined"==typeof globalThis?"undefined":t(globalThis))&&globalThis)||r("object"==("undefined"==typeof window?"undefined":t(window))&&window)||r("object"==("undefined"==typeof self?"undefined":t(self))&&self)||r("object"==t(e)&&e)||function(){return this}()||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},a={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},u=function(e){return"object"===t(e)?null!==e:"function"==typeof e},c=o.document,f=u(c)&&u(c.createElement),l=function(t){return f?c.createElement(t):{}},s=!g&&!i((function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a})),p=function(t){if(!u(t))throw TypeError(String(t)+" is not an object");return t},d=function(t,e){if(!u(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!u(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!u(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!u(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},h=Object.defineProperty,v={f:g?h:function(t,e,n){if(p(t),e=d(e,!0),p(n),s)try{return h(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}};ei({target:"Object",stat:!0,forced:!g,sham:!g},{defineProperty:v.f});var g=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=g?function(t,e,n){return v.f(t,e,y(1,n))}:function(t,e,n){return t[e]=n,t};for(var m in a){var S=o[m],x=S&&S.prototype;if(x&&x.forEach!==wr)try{b(x,"forEach",wr)}catch(t){x.forEach=wr}}var E=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},w=function(t,e,n){if(E(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},O=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},j=function(t){return Object(O(t))},T=Math.ceil,I=Math.floor,A=function(t){return isNaN(t=+t)?0:(t>0?I:T)(t)},R=Math.min,P=function(t){return t>0?R(A(t),9007199254740991):0};ei({target:"Array",stat:!0},{isArray:gr});var _=Math.max,N=Math.min,k=function(t,e){var n=A(t);return n<0?_(n+e,0):N(n,e)},C=function(t,e,n){var r=d(e);r in t?v.f(t,r,y(0,n)):t[r]=n},L=function(t){return function(e,n,r){var o,i=Ho(e),a=P(i.length),u=k(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},D={includes:L(!0),indexOf:L(!1)},M=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))},z=D.indexOf,U=[].indexOf,F=!!U&&1/[1].indexOf(1,-0)<0,$=M("indexOf");ei({target:"Array",proto:!0,forced:F||!$},{indexOf:function(t){return F?U.apply(this,arguments)||0:z(this,t,arguments.length>1?arguments[1]:void 0)}});var G=Po("isConcatSpreadable"),W=ur>=51||!i((function(){var t=[];return t[G]=!1,t.concat()[0]!==t})),B=fr("concat"),V=function(t){if(!u(t))return!1;var e=t[G];return void 0!==e?!!e:gr(t)};ei({target:"Array",proto:!0,forced:!W||!B},{concat:function(t){var e,n,r,o,i,a=j(this),u=br(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(V(i=-1===e?a:arguments[e])){if(c+(o=P(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&C(u,c,i[n])}else{if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");C(u,c++,i)}return u.length=c,u}});var K=function(t){return function(e,n){var r,o,i=String(O(e)),a=A(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},Y={codeAt:K(!1),charAt:K(!0)},q=Y.charAt,H=function(t,e,n){return e+(n?q(t,e).length:1)},Q=Math.floor,X="".replace,J=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Z=/\$([$&'`]|\d{1,2})/g,tt=function(t,e,n,r,o,i){var a=n+t.length,u=r.length,c=Z;return void 0!==o&&(o=j(o),c=J),X.call(i,c,(function(i,c){var f;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(a);case"<":f=o[c.slice(1,-1)];break;default:var l=+c;if(0===l)return i;if(l>u){var s=Q(l/10);return 0===s?i:s<=u?void 0===r[s-1]?c.charAt(1):r[s-1]+c.charAt(1):i}f=r[l-1]}return void 0===f?"":f}))},et=function(){var t=p(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function nt(t,e){return RegExp(t,e)}var rt={UNSUPPORTED_Y:i((function(){var t=nt("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:i((function(){var t=nt("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ot=function(t,e){try{b(o,t,e)}catch(n){o[t]=e}return e},it=o["__core-js_shared__"]||ot("__core-js_shared__",{}),at=n((function(t){(t.exports=function(t,e){return it[t]||(it[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),ut=RegExp.prototype.exec,ct=at("native-string-replace",String.prototype.replace),ft=ut,lt=function(){var t=/a/,e=/b*/g;return ut.call(t,"a"),ut.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),st=rt.UNSUPPORTED_Y||rt.BROKEN_CARET,pt=void 0!==/()??/.exec("")[1];(lt||pt||st)&&(ft=function(t){var e,n,r,o,i=this,a=st&&i.sticky,u=et.call(i),c=i.source,f=0,l=t;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),l=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",l=" "+l,f++),n=new RegExp("^(?:"+c+")",u)),pt&&(n=new RegExp("^"+c+"$(?!\\s)",u)),lt&&(e=i.lastIndex),r=ut.call(a?n:i,l),a?r?(r.input=r.input.slice(f),r[0]=r[0].slice(f),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:lt&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),pt&&r&&r.length>1&&ct.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var dt=ft,ht=function(e,n){var r=e.exec;if("function"==typeof r){var o=r.call(e,n);if("object"!==t(o))throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==vr(e))throw TypeError("RegExp#exec called on incompatible receiver");return dt.call(e,n)},vt=Math.max,gt=Math.min;tr("replace",2,(function(t,e,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(n,r){var o=O(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(a)){var u=n(e,t,this,r);if(u.done)return u.value}var c=p(t),f=String(this),l="function"==typeof r;l||(r=String(r));var s=c.global;if(s){var d=c.unicode;c.lastIndex=0}for(var h=[];;){var v=ht(c,f);if(null===v)break;if(h.push(v),!s)break;""===String(v[0])&&(c.lastIndex=H(f,P(c.lastIndex),d))}for(var g,y="",b=0,m=0;m<h.length;m++){v=h[m];for(var S=String(v[0]),x=vt(gt(A(v.index),f.length),0),E=[],w=1;w<v.length;w++)E.push(void 0===(g=v[w])?g:String(g));var O=v.groups;if(l){var j=[S].concat(E,x,f);void 0!==O&&j.push(O);var T=String(r.apply(void 0,j))}else T=tt(S,f,x,E,O,r);x>=b&&(y+=f.slice(b,x)+T,b=x+S.length)}return y+f.slice(b)}]})),g&&("g"!=/./g.flags||rt.UNSUPPORTED_Y)&&v.f(RegExp.prototype,"flags",{configurable:!0,get:et});var yt=[].join,bt=qo!=Object,mt=M("join",",");ei({target:"Array",proto:!0,forced:bt||!mt},{join:function(t){return yt.call(Ho(this),void 0===t?",":t)}});var St={}.hasOwnProperty,xt=function(t,e){return St.call(j(t),e)},Et=Function.toString;"function"!=typeof it.inspectSource&&(it.inspectSource=function(t){return Et.call(t)});var wt=it.inspectSource;ei({target:"Object",stat:!0,sham:!g},{create:Vt}),ei({target:"Object",stat:!0,forced:!g,sham:!g},{defineProperties:_t});var Ot=i((function(){Pt(1)}));ei({target:"Object",stat:!0,forced:Ot},{keys:function(t){return Pt(j(t))}});var jt,Tt={},It=D.indexOf,At=function(t,e){var n,r=Ho(t),o=0,i=[];for(n in r)!xt(Tt,n)&&xt(r,n)&&i.push(n);for(;e.length>o;)xt(r,n=e[o++])&&(~It(i,n)||i.push(n));return i},Rt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Pt=Object.keys||function(t){return At(t,Rt)},_t=g?Object.defineProperties:function(t,e){p(t);for(var n,r=Pt(e),o=r.length,i=0;o>i;)v.f(t,n=r[i++],e[n]);return t},Nt=o,kt=function(t){return"function"==typeof t?t:void 0},Ct=function(t,e){return arguments.length<2?kt(Nt[t])||kt(o[t]):Nt[t]&&Nt[t][e]||o[t]&&o[t][e]},Lt=Ct("document","documentElement"),Dt=0,Mt=Math.random(),zt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Dt+Mt).toString(36)},Ut=at("keys"),Ft=function(t){return Ut[t]||(Ut[t]=zt(t))},$t=Ft("IE_PROTO"),Gt=function(){},Wt=function(t){return"<script>"+t+"<\/script>"},Bt=function(){try{jt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Bt=jt?function(t){t.write(Wt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(jt):((e=l("iframe")).style.display="none",Lt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Wt("document.F=Object")),t.close(),t.F);for(var n=Rt.length;n--;)delete Bt.prototype[Rt[n]];return Bt()};Tt[$t]=!0;var Vt=Object.create||function(t,e){var n;return null!==t?(Gt.prototype=p(t),n=new Gt,Gt.prototype=null,n[$t]=t):n=Bt(),void 0===e?n:_t(n,e)},Kt=Po("unscopables"),Yt=Array.prototype;null==Yt[Kt]&&v.f(Yt,Kt,{configurable:!0,value:Vt(null)});var qt=function(t){Yt[Kt][t]=!0},Ht={},Qt=Po("iterator"),Xt=Po("toStringTag"),Jt=_e.values;for(var Zt in a){var te=o[Zt],ee=te&&te.prototype;if(ee){if(ee[Qt]!==Jt)try{b(ee,Qt,Jt)}catch(t){ee[Qt]=Jt}if(ee[Xt]||b(ee,Xt,Zt),a[Zt])for(var ne in _e)if(ee[ne]!==_e[ne])try{b(ee,ne,_e[ne])}catch(t){ee[ne]=_e[ne]}}}var re=v.f,oe=Function.prototype,ie=oe.toString,ae=/^\s*function ([^ (]*)/;g&&!("name"in oe)&&re(oe,"name",{configurable:!0,get:function(){try{return ie.call(this).match(ae)[1]}catch(t){return""}}});var ue=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),ce=i((function(){he(1)}));ei({target:"Object",stat:!0,forced:ce,sham:!ue},{getPrototypeOf:function(t){return he(j(t))}});var fe,le,se,pe=Ft("IE_PROTO"),de=Object.prototype,he=ue?Object.getPrototypeOf:function(t){return t=j(t),xt(t,pe)?t[pe]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?de:null},ve=Po("iterator"),ge=!1;[].keys&&("next"in(se=[].keys())?(le=he(he(se)))!==Object.prototype&&(fe=le):ge=!0),(null==fe||i((function(){var t={};return fe[ve].call(t)!==t})))&&(fe={}),xt(fe,ve)||b(fe,ve,(function(){return this}));var ye={IteratorPrototype:fe,BUGGY_SAFARI_ITERATORS:ge},be=v.f,me=Po("toStringTag"),Se=function(t,e,n){t&&!xt(t=n?t:t.prototype,me)&&be(t,me,{configurable:!0,value:e})},xe=ye.IteratorPrototype,Ee=function(){return this};ei({target:"Object",stat:!0},{setPrototypeOf:we});var we=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return p(n),function(t){if(!u(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),Oe=ye.IteratorPrototype,je=ye.BUGGY_SAFARI_ITERATORS,Te=Po("iterator"),Ie=function(){return this},Ae=function(t,e,n,r,o,i,a){!function(t,e,n){var r=e+" Iterator";t.prototype=Vt(xe,{next:y(1,n)}),Se(t,r,!1),Ht[r]=Ee}(n,e,r);var u,c,f,l=function(t){if(t===o&&v)return v;if(!je&&t in d)return d[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},s=e+" Iterator",p=!1,d=t.prototype,h=d[Te]||d["@@iterator"]||o&&d[o],v=!je&&h||l(o),g="Array"==e&&d.entries||h;if(g&&(u=he(g.call(new t)),Oe!==Object.prototype&&u.next&&(he(u)!==Oe&&(we?we(u,Oe):"function"!=typeof u[Te]&&b(u,Te,Ie)),Se(u,s,!0))),"values"==o&&h&&"values"!==h.name&&(p=!0,v=function(){return h.call(this)}),d[Te]!==v&&b(d,Te,v),Ht[e]=v,o)if(c={values:l("values"),keys:i?v:l("keys"),entries:l("entries")},a)for(f in c)(je||p||!(f in d))&&Kn(d,f,c[f]);else ei({target:e,proto:!0,forced:je||p},c);return c},Re=Vn.set,Pe=Vn.getterFor("Array Iterator"),_e=Ae(Array,"Array",(function(t,e){Re(this,{type:"Array Iterator",target:Ho(t),index:0,kind:e})}),(function(){var t=Pe(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");Ht.Arguments=Ht.Array,qt("keys"),qt("values"),qt("entries");var Ne=Y.charAt,ke=Vn.set,Ce=Vn.getterFor("String Iterator");Ae(String,"String",(function(t){ke(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Ce(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=Ne(n,r),e.index+=t.length,{value:t,done:!1})}));var Le=Object.isExtensible,De=i((function(){Le(1)}));ei({target:"Object",stat:!0,forced:De},{isExtensible:function(t){return!!u(t)&&(!Le||Le(t))}});var Me=function(t,e,n){for(var r in e)Kn(t,r,e[r],n);return t},ze=Ge.onFreeze,Ue=Object.preventExtensions,Fe=i((function(){Ue(1)}));ei({target:"Object",stat:!0,forced:Fe,sham:!$e},{preventExtensions:function(t){return Ue&&u(t)?Ue(ze(t)):t}});var $e=!i((function(){return Object.isExtensible(Object.preventExtensions({}))})),Ge=n((function(e){var n=v.f,r=zt("meta"),o=0,i=Object.isExtensible||function(){return!0},a=function(t){n(t,r,{value:{objectID:"O"+ ++o,weakData:{}}})},c=e.exports={REQUIRED:!1,fastKey:function(e,n){if(!u(e))return"symbol"==t(e)?e:("string"==typeof e?"S":"P")+e;if(!xt(e,r)){if(!i(e))return"F";if(!n)return"E";a(e)}return e[r].objectID},getWeakData:function(t,e){if(!xt(t,r)){if(!i(t))return!0;if(!e)return!1;a(t)}return t[r].weakData},onFreeze:function(t){return $e&&c.REQUIRED&&i(t)&&!xt(t,r)&&a(t),t}};Tt[r]=!0})),We=/#|\.prototype\./,Be=function(t,e){var n=Ke[Ve(t)];return n==qe||n!=Ye&&("function"==typeof e?i(e):!!e)},Ve=Be.normalize=function(t){return String(t).replace(We,".").toLowerCase()},Ke=Be.data={},Ye=Be.NATIVE="N",qe=Be.POLYFILL="P",He=Be,Qe=Po("iterator"),Xe=Array.prototype,Je=function(t){return void 0!==t&&(Ht.Array===t||Xe[Qe]===t)},Ze=Po("toStringTag"),tn="Arguments"==vr(function(){return arguments}()),en=No?vr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ze))?n:tn?vr(e):"Object"==(r=vr(e))&&"function"==typeof e.callee?"Arguments":r},nn=Po("iterator"),rn=function(t){if(null!=t)return t[nn]||t["@@iterator"]||Ht[en(t)]},on=function(t){var e=t.return;if(void 0!==e)return p(e.call(t)).value},an=function(t,e){this.stopped=t,this.result=e},un=function(e,n,r){var o,i,a,u,c,f,l,s=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_ITERATOR),v=!(!r||!r.INTERRUPTED),g=w(n,s,1+d+v),y=function(t){return o&&on(o),new an(!0,t)},b=function(t){return d?(p(t),v?g(t[0],t[1],y):g(t[0],t[1])):v?g(t,y):g(t)};if(h)o=e;else{if("function"!=typeof(i=rn(e)))throw TypeError("Target is not iterable");if(Je(i)){for(a=0,u=P(e.length);u>a;a++)if((c=b(e[a]))&&c instanceof an)return c;return new an(!1)}o=i.call(e)}for(f=o.next;!(l=f.call(o)).done;){try{c=b(l.value)}catch(t){throw on(o),t}if("object"==t(c)&&c&&c instanceof an)return c}return new an(!1)},cn=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t},fn=function(t,e,n,r){try{return r?e(p(n)[0],n[1]):e(n)}catch(e){throw on(t),e}},ln=!vn((function(t){Array.from(t)}));ei({target:"Array",stat:!0,forced:ln},{from:function(t){var e,n,r,o,i,a,u=j(t),c="function"==typeof this?this:Array,f=arguments.length,l=f>1?arguments[1]:void 0,s=void 0!==l,p=rn(u),d=0;if(s&&(l=w(l,f>2?arguments[2]:void 0,2)),null==p||c==Array&&Je(p))for(n=new c(e=P(u.length));e>d;d++)a=s?l(u[d],d):u[d],C(n,d,a);else for(i=(o=p.call(u)).next,n=new c;!(r=i.call(o)).done;d++)a=s?fn(o,l,[r.value,d],!0):r.value,C(n,d,a);return n.length=d,n}});var sn=Po("iterator"),pn=!1;try{var dn=0,hn={next:function(){return{done:!!dn++}},return:function(){pn=!0}};hn[sn]=function(){return this},Array.from(hn,(function(){throw 2}))}catch(t){}var vn=function(t,e){if(!e&&!pn)return!1;var n=!1;try{var r={};r[sn]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n},gn=function(t,e,n){var r,o;return we&&"function"==typeof(r=e.constructor)&&r!==n&&u(o=r.prototype)&&o!==n.prototype&&we(t,o),t},yn=xr.find,bn=!0;"find"in[]&&Array(1).find((function(){bn=!1})),ei({target:"Array",proto:!0,forced:bn},{find:function(t){return yn(this,t,arguments.length>1?arguments[1]:void 0)}}),qt("find");var mn=xr.findIndex,Sn=!0;"findIndex"in[]&&Array(1).findIndex((function(){Sn=!1})),ei({target:"Array",proto:!0,forced:Sn},{findIndex:function(t){return mn(this,t,arguments.length>1?arguments[1]:void 0)}}),qt("findIndex");var xn=fr("splice"),En=Math.max,wn=Math.min;ei({target:"Array",proto:!0,forced:!xn},{splice:function(t,e){var n,r,o,i,a,u,c=j(this),f=P(c.length),l=k(t,f),s=arguments.length;if(0===s?n=r=0:1===s?(n=0,r=f-l):(n=s-2,r=wn(En(A(e),0),f-l)),f+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=br(c,r),i=0;i<r;i++)(a=l+i)in c&&C(o,i,c[a]);if(o.length=r,n<r){for(i=l;i<f-r;i++)u=i+n,(a=i+r)in c?c[u]=c[a]:delete c[u];for(i=f;i>f-r+n;i--)delete c[i-1]}else if(n>r)for(i=f-r;i>l;i--)u=i+n-1,(a=i+r-1)in c?c[u]=c[a]:delete c[u];for(i=0;i<n;i++)c[i+l]=arguments[i+2];return c.length=f-r+n,o}});var On=Ge.getWeakData,jn=Vn.set,Tn=Vn.getterFor,In=xr.find,An=xr.findIndex,Rn=0,Pn=function(t){return t.frozen||(t.frozen=new _n)},_n=function(){this.entries=[]},Nn=function(t,e){return In(t.entries,(function(t){return t[0]===e}))};_n.prototype={get:function(t){var e=Nn(this,t);if(e)return e[1]},has:function(t){return!!Nn(this,t)},set:function(t,e){var n=Nn(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=An(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}};var kn={getConstructor:function(t,e,n,r){var o=t((function(t,i){cn(t,o,e),jn(t,{type:e,id:Rn++,frozen:void 0}),null!=i&&un(i,t[r],{that:t,AS_ENTRIES:n})})),i=Tn(e),a=function(t,e,n){var r=i(t),o=On(p(e),!0);return!0===o?Pn(r).set(e,n):o[r.id]=n,t};return Me(o.prototype,{delete:function(t){var e=i(this);if(!u(t))return!1;var n=On(t);return!0===n?Pn(e).delete(t):n&&xt(n,e.id)&&delete n[e.id]},has:function(t){var e=i(this);if(!u(t))return!1;var n=On(t);return!0===n?Pn(e).has(t):n&&xt(n,e.id)}}),Me(o.prototype,n?{get:function(t){var e=i(this);if(u(t)){var n=On(t);return!0===n?Pn(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return a(this,t,e)}}:{add:function(t){return a(this,t,!0)}}),o}},Cn=o.WeakMap,Ln="function"==typeof Cn&&/native code/.test(wt(Cn));n((function(t){var e,n=Vn.enforce,r=!o.ActiveXObject&&"ActiveXObject"in o,a=Object.isExtensible,c=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},f=t.exports=function(t,e,n){var r=-1!==t.indexOf("Map"),a=-1!==t.indexOf("Weak"),c=r?"set":"add",f=o[t],l=f&&f.prototype,s=f,p={},d=function(t){var e=l[t];Kn(l,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(a&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return a&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(a&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(He(t,"function"!=typeof f||!(a||l.forEach&&!i((function(){(new f).entries().next()})))))s=n.getConstructor(e,t,r,c),Ge.REQUIRED=!0;else if(He(t,!0)){var h=new s,v=h[c](a?{}:-0,1)!=h,g=i((function(){h.has(1)})),y=vn((function(t){new f(t)})),b=!a&&i((function(){for(var t=new f,e=5;e--;)t[c](e,e);return!t.has(-0)}));y||((s=e((function(e,n){cn(e,s,t);var o=gn(new f,e,s);return null!=n&&un(n,o[c],{that:o,AS_ENTRIES:r}),o}))).prototype=l,l.constructor=s),(g||b)&&(d("delete"),d("has"),r&&d("get")),(b||v)&&d(c),a&&l.clear&&delete l.clear}return p[t]=s,ei({global:!0,forced:s!=f},p),Se(s,t),a||n.setStrong(s,t,r),s}("WeakMap",c,kn);if(Ln&&r){e=kn.getConstructor(c,"WeakMap",!0),Ge.REQUIRED=!0;var l=f.prototype,s=l.delete,p=l.has,d=l.get,h=l.set;Me(l,{delete:function(t){if(u(t)&&!a(t)){var r=n(this);return r.frozen||(r.frozen=new e),s.call(this,t)||r.frozen.delete(t)}return s.call(this,t)},has:function(t){if(u(t)&&!a(t)){var r=n(this);return r.frozen||(r.frozen=new e),p.call(this,t)||r.frozen.has(t)}return p.call(this,t)},get:function(t){if(u(t)&&!a(t)){var r=n(this);return r.frozen||(r.frozen=new e),p.call(this,t)?d.call(this,t):r.frozen.get(t)}return d.call(this,t)},set:function(t,r){if(u(t)&&!a(t)){var o=n(this);o.frozen||(o.frozen=new e),p.call(this,t)?h.call(this,t,r):o.frozen.set(t,r)}else h.call(this,t,r);return this}})}}));var Dn,Mn,zn,Un=o.WeakMap;if(Ln||it.state){var Fn=it.state||(it.state=new Un),$n=Fn.get,Gn=Fn.has,Wn=Fn.set;Dn=function(t,e){if(Gn.call(Fn,t))throw new TypeError("Object already initialized");return e.facade=t,Wn.call(Fn,t,e),e},Mn=function(t){return $n.call(Fn,t)||{}},zn=function(t){return Gn.call(Fn,t)}}else{var Bn=Ft("state");Tt[Bn]=!0,Dn=function(t,e){if(xt(t,Bn))throw new TypeError("Object already initialized");return e.facade=t,b(t,Bn,e),e},Mn=function(t){return xt(t,Bn)?t[Bn]:{}},zn=function(t){return xt(t,Bn)}}var Vn={set:Dn,get:Mn,has:zn,enforce:function(t){return zn(t)?Mn(t):Dn(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=Mn(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Kn=n((function(t){var e=Vn.get,n=Vn.enforce,r=String(String).split("String");(t.exports=function(t,e,i,a){var u,c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||xt(i,"name")||b(i,"name",e),(u=n(i)).source||(u.source=r.join("string"==typeof e?e:""))),t!==o?(c?!l&&t[e]&&(f=!0):delete t[e],f?t[e]=i:b(t,e,i)):f?t[e]=i:ot(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||wt(this)}))})),Yn=Po("species"),qn=RegExp.prototype,Hn=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Qn="$0"==="a".replace(/./,"$0"),Xn=Po("replace"),Jn=!!/./[Xn]&&""===/./[Xn]("a","$0"),Zn=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),tr=function(t,e,n,r){var o=Po(t),a=!i((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),u=a&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Yn]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!a||!u||"replace"===t&&(!Hn||!Qn||Jn)||"split"===t&&!Zn){var c=/./[o],f=n(o,""[t],(function(t,e,n,r,o){var i=e.exec;return i===dt||i===qn.exec?a&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Qn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Jn}),l=f[0],s=f[1];Kn(String.prototype,t,l),Kn(qn,o,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)})}r&&b(qn[o],"sham",!0)};tr("match",1,(function(t,e,n){return[function(e){var n=O(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=p(t),i=String(this);if(!o.global)return ht(o,i);var a=o.unicode;o.lastIndex=0;for(var u,c=[],f=0;null!==(u=ht(o,i));){var l=String(u[0]);c[f]=l,""===l&&(o.lastIndex=H(i,P(o.lastIndex),a)),f++}return 0===f?null:c}]}));var er,nr,rr=Ct("navigator","userAgent")||"",or=o.process,ir=or&&or.versions,ar=ir&&ir.v8;ar?nr=(er=ar.split("."))[0]<4?1:er[0]+er[1]:rr&&(!(er=rr.match(/Edge\/(\d+)/))||er[1]>=74)&&(er=rr.match(/Chrome\/(\d+)/))&&(nr=er[1]);var ur=nr&&+nr,cr=Po("species"),fr=function(t){return ur>=51||!i((function(){var e=[];return(e.constructor={})[cr]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},lr=fr("slice"),sr=Po("species"),pr=[].slice,dr=Math.max;ei({target:"Array",proto:!0,forced:!lr},{slice:function(t,e){var n,r,o,i=Ho(this),a=P(i.length),c=k(t,a),f=k(void 0===e?a:e,a);if(gr(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!gr(n.prototype)?u(n)&&null===(n=n[sr])&&(n=void 0):n=void 0,n===Array||void 0===n))return pr.call(i,c,f);for(r=new(void 0===n?Array:n)(dr(f-c,0)),o=0;c<f;c++,o++)c in i&&C(r,o,i[c]);return r.length=o,r}});var hr={}.toString,vr=function(t){return hr.call(t).slice(8,-1)},gr=Array.isArray||function(t){return"Array"==vr(t)},yr=Po("species"),br=function(t,e){var n;return gr(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!gr(n.prototype)?u(n)&&null===(n=n[yr])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},mr=[].push,Sr=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,f,l,s){for(var p,d,h=j(c),v=qo(h),g=w(f,l,3),y=P(v.length),b=0,m=s||br,S=e?m(c,y):n||a?m(c,0):void 0;y>b;b++)if((u||b in v)&&(d=g(p=v[b],b,h),t))if(e)S[b]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:mr.call(S,p)}else switch(t){case 4:return!1;case 7:mr.call(S,p)}return i?-1:r||o?o:S}},xr={forEach:Sr(0),map:Sr(1),filter:Sr(2),some:Sr(3),every:Sr(4),find:Sr(5),findIndex:Sr(6),filterOut:Sr(7)},Er=xr.forEach,wr=M("forEach")?[].forEach:function(t){return Er(this,t,arguments.length>1?arguments[1]:void 0)};ei({target:"Array",proto:!0,forced:[].forEach!=wr},{forEach:wr});var Or=_r.f,jr={}.toString,Tr="object"==("undefined"==typeof window?"undefined":t(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ir={f:function(t){return Tr&&"[object Window]"==jr.call(t)?function(t){try{return Or(t)}catch(t){return Tr.slice()}}(t):Or(Ho(t))}},Ar=Ir.f,Rr=i((function(){return!Object.getOwnPropertyNames(1)}));ei({target:"Object",stat:!0,forced:Rr},{getOwnPropertyNames:Ar});var Pr=Rt.concat("length","prototype"),_r={f:Object.getOwnPropertyNames||function(t){return At(t,Pr)}},Nr={f:Object.getOwnPropertySymbols},kr=Ct("Reflect","ownKeys")||function(t){var e=_r.f(p(t)),n=Nr.f;return n?e.concat(n(t)):e},Cr=function(t,e){for(var n=kr(e),r=v.f,o=Zo.f,i=0;i<n.length;i++){var a=n[i];xt(t,a)||r(t,a,o(e,a))}},Lr=v.f,Dr=o.Symbol;if(g&&"function"==typeof Dr&&(!("description"in Dr.prototype)||void 0!==Dr().description)){var Mr={},zr=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof zr?new Dr(t):void 0===t?Dr():Dr(t);return""===t&&(Mr[e]=!0),e};Cr(zr,Dr);var Ur=zr.prototype=Dr.prototype;Ur.constructor=zr;var Fr=Ur.toString,$r="Symbol(test)"==String(Dr("test")),Gr=/^Symbol\((.*)\)[^)]+$/;Lr(Ur,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=Fr.call(t);if(xt(Mr,t))return"";var n=$r?e.slice(7,-1):e.replace(Gr,"$1");return""===n?void 0:n}}),ei({global:!0,forced:!0},{Symbol:zr})}var Wr=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())||!Symbol.sham&&ur&&ur<41})),Br={f:Po},Vr=v.f,Kr=function(t){var e=Nt.Symbol||(Nt.Symbol={});xt(e,t)||Vr(e,t,{value:Br.f(t)})};Kr("iterator");var Yr=Wr&&!Symbol.sham&&"symbol"==t(Symbol.iterator),qr={}.propertyIsEnumerable,Hr=Object.getOwnPropertyDescriptor,Qr={f:Hr&&!qr.call({1:2},1)?function(t){var e=Hr(this,t);return!!e&&e.enumerable}:qr},Xr=xr.forEach,Jr=Ft("hidden"),Zr=Po("toPrimitive"),to=Vn.set,eo=Vn.getterFor("Symbol"),no=Object.prototype,ro=o.Symbol,oo=Ct("JSON","stringify"),io=Zo.f,ao=v.f,uo=Ir.f,co=Qr.f,fo=at("symbols"),lo=at("op-symbols"),so=at("string-to-symbol-registry"),po=at("symbol-to-string-registry"),ho=at("wks"),vo=o.QObject,go=!vo||!vo.prototype||!vo.prototype.findChild,yo=g&&i((function(){return 7!=Vt(ao({},"a",{get:function(){return ao(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=io(no,e);r&&delete no[e],ao(t,e,n),r&&t!==no&&ao(no,e,r)}:ao,bo=function(t,e){var n=fo[t]=Vt(ro.prototype);return to(n,{type:"Symbol",tag:t,description:e}),g||(n.description=e),n},mo=Yr?function(e){return"symbol"==t(e)}:function(t){return Object(t)instanceof ro},So=function(t,e,n){t===no&&So(lo,e,n),p(t);var r=d(e,!0);return p(n),xt(fo,r)?(n.enumerable?(xt(t,Jr)&&t[Jr][r]&&(t[Jr][r]=!1),n=Vt(n,{enumerable:y(0,!1)})):(xt(t,Jr)||ao(t,Jr,y(1,{})),t[Jr][r]=!0),yo(t,r,n)):ao(t,r,n)},xo=function(t,e){p(t);var n=Ho(e),r=Pt(n).concat(jo(n));return Xr(r,(function(e){g&&!Eo.call(n,e)||So(t,e,n[e])})),t},Eo=function(t){var e=d(t,!0),n=co.call(this,e);return!(this===no&&xt(fo,e)&&!xt(lo,e))&&(!(n||!xt(this,e)||!xt(fo,e)||xt(this,Jr)&&this[Jr][e])||n)},wo=function(t,e){var n=Ho(t),r=d(e,!0);if(n!==no||!xt(fo,r)||xt(lo,r)){var o=io(n,r);return!o||!xt(fo,r)||xt(n,Jr)&&n[Jr][r]||(o.enumerable=!0),o}},Oo=function(t){var e=uo(Ho(t)),n=[];return Xr(e,(function(t){xt(fo,t)||xt(Tt,t)||n.push(t)})),n},jo=function(t){var e=t===no,n=uo(e?lo:Ho(t)),r=[];return Xr(n,(function(t){!xt(fo,t)||e&&!xt(no,t)||r.push(fo[t])})),r};if(Wr||(Kn((ro=function(){if(this instanceof ro)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=zt(t),n=function t(n){this===no&&t.call(lo,n),xt(this,Jr)&&xt(this[Jr],e)&&(this[Jr][e]=!1),yo(this,e,y(1,n))};return g&&go&&yo(no,e,{configurable:!0,set:n}),bo(e,t)}).prototype,"toString",(function(){return eo(this).tag})),Kn(ro,"withoutSetter",(function(t){return bo(zt(t),t)})),Qr.f=Eo,v.f=So,Zo.f=wo,_r.f=Ir.f=Oo,Nr.f=jo,Br.f=function(t){return bo(Po(t),t)},g&&(ao(ro.prototype,"description",{configurable:!0,get:function(){return eo(this).description}}),Kn(no,"propertyIsEnumerable",Eo,{unsafe:!0}))),ei({global:!0,wrap:!0,forced:!Wr,sham:!Wr},{Symbol:ro}),Xr(Pt(ho),(function(t){Kr(t)})),ei({target:"Symbol",stat:!0,forced:!Wr},{for:function(t){var e=String(t);if(xt(so,e))return so[e];var n=ro(e);return so[e]=n,po[n]=e,n},keyFor:function(t){if(!mo(t))throw TypeError(t+" is not a symbol");if(xt(po,t))return po[t]},useSetter:function(){go=!0},useSimple:function(){go=!1}}),ei({target:"Object",stat:!0,forced:!Wr,sham:!g},{create:function(t,e){return void 0===e?Vt(t):xo(Vt(t),e)},defineProperty:So,defineProperties:xo,getOwnPropertyDescriptor:wo}),ei({target:"Object",stat:!0,forced:!Wr},{getOwnPropertyNames:Oo,getOwnPropertySymbols:jo}),ei({target:"Object",stat:!0,forced:i((function(){Nr.f(1)}))},{getOwnPropertySymbols:function(t){return Nr.f(j(t))}}),oo){var To=!Wr||i((function(){var t=ro();return"[null]"!=oo([t])||"{}"!=oo({a:t})||"{}"!=oo(Object(t))}));ei({target:"JSON",stat:!0,forced:To},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(u(e)||void 0!==t)&&!mo(t))return gr(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!mo(e))return e}),o[1]=e,oo.apply(null,o)}})}ro.prototype[Zr]||b(ro.prototype,Zr,ro.prototype.valueOf),Se(ro,"Symbol"),Tt[Jr]=!0;var Io=at("wks"),Ao=o.Symbol,Ro=Yr?Ao:Ao&&Ao.withoutSetter||zt,Po=function(t){return xt(Io,t)&&(Wr||"string"==typeof Io[t])||(Wr&&xt(Ao,t)?Io[t]=Ao[t]:Io[t]=Ro("Symbol."+t)),Io[t]},_o={};_o[Po("toStringTag")]="z";var No="[object z]"===String(_o),ko=No?{}.toString:function(){return"[object "+en(this)+"]"};No||Kn(Object.prototype,"toString",ko,{unsafe:!0});var Co=Date.prototype,Lo=Co.toString,Do=Co.getTime;new Date(NaN)+""!="Invalid Date"&&Kn(Co,"toString",(function(){var t=Do.call(this);return t==t?Lo.call(this):"Invalid Date"}));var Mo=RegExp.prototype,zo=Mo.toString,Uo=i((function(){return"/a/b"!=zo.call({source:"a",flags:"b"})})),Fo="toString"!=zo.name;(Uo||Fo)&&Kn(RegExp.prototype,"toString",(function(){var t=p(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in Mo)?et.call(t):n)}),{unsafe:!0});var $o=Po("match"),Go=function(t){var e;return u(t)&&(void 0!==(e=t[$o])?!!e:"RegExp"==vr(t))},Wo=Po("species"),Bo=rt.UNSUPPORTED_Y,Vo=[].push,Ko=Math.min;tr("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(O(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Go(t))return e.call(r,t,o);for(var i,a,u,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,s=new RegExp(t.source,f+"g");(i=dt.call(s,r))&&!((a=s.lastIndex)>l&&(c.push(r.slice(l,i.index)),i.length>1&&i.index<r.length&&Vo.apply(c,i.slice(1)),u=i[0].length,l=a,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return l===r.length?!u&&s.test("")||c.push(""):c.push(r.slice(l)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=O(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var a=p(t),u=String(this),c=function(t,e){var n,r=p(t).constructor;return void 0===r||null==(n=p(r)[Wo])?e:E(n)}(a,RegExp),f=a.unicode,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Bo?"g":"y"),s=new c(Bo?"^(?:"+a.source+")":a,l),d=void 0===o?4294967295:o>>>0;if(0===d)return[];if(0===u.length)return null===ht(s,u)?[u]:[];for(var h=0,v=0,g=[];v<u.length;){s.lastIndex=Bo?0:v;var y,b=ht(s,Bo?u.slice(v):u);if(null===b||(y=Ko(P(s.lastIndex+(Bo?v:0)),u.length))===h)v=H(u,v,f);else{if(g.push(u.slice(h,v)),g.length===d)return g;for(var m=1;m<=b.length-1;m++)if(g.push(b[m]),g.length===d)return g;v=h=y}}return g.push(u.slice(h)),g}]}),Bo);var Yo="".split,qo=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==vr(t)?Yo.call(t,""):Object(t)}:Object,Ho=function(t){return qo(O(t))},Qo=Zo.f,Xo=i((function(){Qo(1)}));ei({target:"Object",stat:!0,forced:!g||Xo,sham:!g},{getOwnPropertyDescriptor:function(t,e){return Qo(Ho(t),e)}});var Jo=Object.getOwnPropertyDescriptor,Zo={f:g?Jo:function(t,e){if(t=Ho(t),e=d(e,!0),s)try{return Jo(t,e)}catch(t){}if(xt(t,e))return y(!Qr.f.call(t,e),t[e])}},ti=Zo.f,ei=function(e,n){var r,i,a,u,c,f=e.target,l=e.global,s=e.stat;if(r=l?o:s?o[f]||ot(f,{}):(o[f]||{}).prototype)for(i in n){if(u=n[i],a=e.noTargetGet?(c=ti(r,i))&&c.value:r[i],!He(l?i:f+(s?".":"#")+i,e.forced)&&void 0!==a){if(t(u)===t(a))continue;Cr(u,a)}(e.sham||a&&a.sham)&&b(u,"sham",!0),Kn(r,i,u,e)}};ei({target:"RegExp",proto:!0,forced:/./.exec!==dt},{exec:dt});var ni=Po("species"),ri=v.f,oi=_r.f,ii=Vn.enforce,ai=Po("match"),ui=o.RegExp,ci=ui.prototype,fi=/a/g,li=/a/g,si=new ui(fi)!==fi,pi=rt.UNSUPPORTED_Y;if(g&&He("RegExp",!si||pi||i((function(){return li[ai]=!1,ui(fi)!=fi||ui(li)==li||"/a/i"!=ui(fi,"i")})))){for(var di=function(t,e){var n,r=this instanceof di,o=Go(t),i=void 0===e;if(!r&&o&&t.constructor===di&&i)return t;si?o&&!i&&(t=t.source):t instanceof di&&(i&&(e=et.call(t)),t=t.source),pi&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=gn(si?new ui(t,e):ui(t,e),r?this:ci,di);pi&&n&&(ii(a).sticky=!0);return a},hi=function(t){t in di||ri(di,t,{configurable:!0,get:function(){return ui[t]},set:function(e){ui[t]=e}})},vi=oi(ui),gi=0;vi.length>gi;)hi(vi[gi++]);ci.constructor=di,di.prototype=ci,Kn(o,"RegExp",di)}!function(t){var e=Ct(t),n=v.f;g&&e&&!e[ni]&&n(e,ni,{configurable:!0,get:function(){return this}})}("RegExp");export default function(){var t,e,n,r,o,i,a;function u(){(e=document.createElement("div")).classList.add("searchbox"),e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.zIndex=10,e.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=e.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",t.getRevealElement().appendChild(e),n.addEventListener("keyup",(function(e){switch(e.keyCode){case 13:e.preventDefault(),function(){if(i){var e=n.value;""===e?(a&&a.remove(),r=null):(a=new l("slidecontent"),r=a.apply(e),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(t.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}}),!1),f()}function c(){e||u(),e.style.display="inline",n.focus(),n.select()}function f(){e||u(),e.style.display="none",a&&a.remove()}function l(e,n){var r=document.getElementById(e)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),a=["#ff6","#a0ffff","#9f9","#f99","#f6f"],u=[],c=0,f="",l=[];this.setRegex=function(t){t=t.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),f=new RegExp("("+t+")","i")},this.getRegex=function(){return f.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(e){if(null!=e&&e&&f&&!i.test(e.nodeName)){if(e.hasChildNodes())for(var n=0;n<e.childNodes.length;n++)this.hiliteWords(e.childNodes[n]);var r,s;if(3==e.nodeType)if((r=e.nodeValue)&&(s=f.exec(r))){for(var p=e;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=t.getIndices(p),h=l.length,v=!1;for(n=0;n<h;n++)l[n].h===d.h&&l[n].v===d.v&&(v=!0);v||l.push(d),u[s[0].toLowerCase()]||(u[s[0].toLowerCase()]=a[c++%a.length]);var g=document.createElement(o);g.appendChild(document.createTextNode(s[0])),g.style.backgroundColor=u[s[0].toLowerCase()],g.style.fontStyle="inherit",g.style.color="#000";var y=e.splitText(s.index);y.nodeValue=y.nodeValue.substring(s[0].length),e.parentNode.insertBefore(g,y)}}},this.remove=function(){for(var t,e=document.getElementsByTagName(o);e.length&&(t=e[0]);)t.parentNode.replaceChild(t.firstChild,t)},this.apply=function(t){if(null!=t&&t)return this.remove(),this.setRegex(t),this.hiliteWords(r),l}}return{id:"search",init:function(n){(t=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(t){"F"==t.key&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e||u(),"inline"!==e.style.display?c():f())}),!1)},open:c}}
