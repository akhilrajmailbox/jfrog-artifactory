(function(){var aa=function(a,b){function c(){}c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},h=this,m=function(a){return"string"==typeof a},ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},fa=function(a,b,c){fa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return fa.apply(null,arguments)},ga=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},n=Date.now||function(){return+new Date},r=function(a,b){a=a.split(".");var c=h;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var ha=function(a,b,c,d,e){if(e)c=a+("&"+b+"="+c);else{var f="&"+b+"=",g=a.indexOf(f);0>g?c=a+f+c:(g+=f.length,f=a.indexOf("&",g),c=0<=f?a.substring(0,g)+c+a.substring(f):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?ha(a,b,d,void 0,e):a:c};var t=document,u=window;var ka={S:"ud=1",R:"ts=0",ia:"sc=1",O:"gz=1",ha:"rz=1",la:"efp=1",fa:"dcl=1",ga:"mlc=1",da:"rafv=1",ca:"rafx=1",P:"opp=1",ma:"mcvt=1",ea:"lom=1",ka:"csbv=1",ja:"ifp=1",N:"dm=1"};var la=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},ma=function(a,b){return null!==a&&b in a};var v=function(){this.G={};this.s=!0};v.prototype.disable=function(){this.s=!1};v.prototype.enable=function(){this.s=!0};v.prototype.isEnabled=function(){return this.s};v.prototype.reset=function(){this.G={};this.s=!0};var na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},pa=function(a,b){var c=0;a=na(String(a)).split(".");b=na(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=oa(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||oa(0==f[2].length,0==g[2].length)||oa(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},oa=function(a,b){return a<b?-1:a>b?1:0};var qa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},sa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=m(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},ta=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ua=Array.prototype.reduce?function(a,b,c,d){d&&(b=fa(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;ra(a,function(c,g){e=b.call(d,e,c,g,a)});return e},va=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},wa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var xa=function(a){xa[" "](a);return a};xa[" "]=ba;var za=function(a,b){var c=ya;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var Aa=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{xa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Ba=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Da=function(){var a=Ca;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var Ea=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});h.addEventListener("test",null,b)}catch(c){}return a}(),Fa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,Ea?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)},Ga=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,Ea?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};var w=!1,Ha=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(w=!0,a.description)){Ha(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){w=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],w=!(!a||!a.enabledPlugin))){Ha(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");w=!0;Ha(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");w=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),w=!0,Ha(b.GetVariable("$version"))}catch(c){}})();var x;a:{var Ia=h.navigator;if(Ia){var La=Ia.userAgent;if(La){x=La;break a}}x=""}var y=function(a){return-1!=x.indexOf(a)},Ma=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Na=function(){return y("Trident")||y("MSIE")},Oa=function(){return(y("Chrome")||y("CriOS"))&&!y("Edge")},Qa=function(){function a(a){a:{var b=d;for(var e=a.length,k=m(a)?a.split(""):a,l=0;l<e;l++)if(l in k&&b.call(void 0,k[l],l,a)){b=l;break a}b=-1}return c[0>b?null:m(a)?a.charAt(b):a[b]]||""}var b=x;if(Na())return Pa(b);var b=Ma(b),c={};ra(b,function(a){c[a[0]]=a[1]});var d=ga(ma,c);return y("Opera")?a(["Version","Opera"]):y("Edge")?a(["Edge"]):Oa()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Pa=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var z=function(){return y("iPhone")&&!y("iPod")&&!y("iPad")};var Ra=y("Opera"),A=Na(),Sa=y("Edge"),Ta=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Ua=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"),Va=y("Macintosh"),Wa=y("Windows"),Xa=y("Android"),Ya=z(),Za=y("iPad"),$a=y("iPod"),ab=function(){var a=h.document;return a?a.documentMode:void 0},bb;a:{var cb="",db=function(){var a=x;if(Ta)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Sa)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ua)return/WebKit\/(\S+)/.exec(a);if(Ra)return/(?:Version)[ \/]?(\S+)/.exec(a)}();db&&(cb=db?db[1]:"");if(A){var eb=ab();if(null!=eb&&eb>parseFloat(cb)){bb=String(eb);break a}}bb=cb}var fb=bb,ya={},gb=function(a){za(a,function(){return 0<=pa(fb,a)})},hb;var ib=h.document;hb=ib&&A?ab()||("CSS1Compat"==ib.compatMode?parseInt(fb,10):5):void 0;(function(){if(Wa){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(x))?a[1]:"0"}return Va?(a=/10[_.][0-9_.]+/,(a=a.exec(x))?a[0].replace(/_/g,"."):"10"):Xa?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(x))?a[1]:""):Ya||Za||$a?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(x))?a[1].replace(/_/g,"."):""):""})();var jb=y("Firefox"),kb=z()||y("iPod"),lb=y("iPad"),mb=y("Android")&&!(Oa()||y("Firefox")||y("Opera")||y("Silk")),nb=Oa(),ob=y("Safari")&&!(Oa()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))&&!(z()||y("iPad")||y("iPod"));var B=function(a){return(a=a.exec(x))?a[1]:""};(function(){if(jb)return B(/Firefox\/([0-9.]+)/);if(A||Sa||Ra)return fb;if(nb)return z()||y("iPad")||y("iPod")?B(/CriOS\/([0-9.]+)/):B(/Chrome\/([0-9.]+)/);if(ob&&!(z()||y("iPad")||y("iPod")))return B(/Version\/([0-9.]+)/);if(kb||lb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(x);if(a)return a[1]+"."+a[2]}else if(mb)return(a=B(/Android\s+([0-9.]+)/))?a:B(/Version\/([0-9.]+)/);return""})();var pb;if(!(pb=!Ta&&!A)){var qb;if(qb=A)qb=9<=Number(hb);pb=qb}pb||Ta&&gb("1.9.1");A&&gb("9");var rb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);Ga(d,"load",e);Ga(d,"error",e)};Fa(d,"load",e);Fa(d,"error",e)}d.src=b;a.google_image_requests.push(d)};var sb=null,C=function(a,b){rb(a,b,void 0)},tb=function(){if(!t.body)return!1;if(!sb){var a=t.createElement("iframe");a.style.display="none";a.id="anonIframe";sb=a;t.body.appendChild(a)}return!0},ub=!!window.google_async_iframe_id,D=ub&&window.parent||window;var vb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var wb=function(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))},xb=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)wb(a[b],a[b+1],c);return c.join("&")},yb=function(a,b){var c=2==arguments.length?xb(arguments[1],0):xb(arguments,1);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c};var zb=function(a,b){this.K=a;this.L=b},Ab=function(a,b){this.url=a;this.H=!!b;this.depth=null};var Bb=function(a,b,c,d,e){this.I=c||4E3;this.m=a||"&";this.T=b||",$";this.v=void 0!==d?d:"trn";this.ba=e||null;this.D=!1;this.j={};this.Y=0;this.g=[]},Cb=function(a,b){var c={};c[a]=b;return[c]},Eb=function(a,b,c,d,e){var f=[];Ba(a,function(a,k){(a=Db(a,b,c,d,e))&&f.push(k+"="+a)});return f.join(b)},Db=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Db(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Eb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},E=function(a,b,c,d){a.g.push(b);a.j[b]=Cb(c,d)},Gb=function(a,b,c,d){b=b+"//"+c+d;var e=Fb(a)-d.length-0;if(0>e)return"";a.g.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.g.length;f++)for(var g=a.g[f],k=a.j[g],l=0;l<k.length;l++){if(!e){d=null==d?g:d;break}var q=Eb(k[l],a.m,a.T);if(q){q=c+q;if(e>=q.length){e-=q.length;b+=q;c=a.m;break}else a.D&&(c=e,q[c-1]==a.m&&--c,b+=q.substr(0,c),c=a.m,e=0);d=null==d?g:d}}f="";a.v&&null!=d&&(f=c+a.v+"="+(a.ba||d));return b+f+""},Fb=function(a){if(!a.v)return a.I;var b=1,c;for(c in a.j)b=c.length>b?c.length:b;return a.I-a.v.length-b-a.m.length-1};var Hb=function(a,b,c,d,e){if((d?a.aa:Math.random())<(e||a.U))try{if(c instanceof Bb)var f=c;else f=new Bb,Ba(c,function(a,b){var c=f,d=c.Y++;a=Cb(b,a);c.g.push(d);c.j[d]=a});var g=Gb(f,a.$,a.V,a.Z+b+"&");g&&rb(h,g)}catch(k){}};var Jb=function(a,b){var c=Ib();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()};var F=function(a,b){this.l=[];this.h=b||h;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.l=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.h||h).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(g){}f=""}b=f;b=b.indexOf&&0<=b.indexOf("1337");this.f=(this.f=null!=c?c:Math.random()<a)||b;a=this.h.performance;this.u=!!(a&&a.mark&&a.clearMarks&&b)};F.prototype.disable=function(){this.l!=this.h.google_js_reporting_queue&&(this.l.length=0,this.u&&ra(this.l,this.F,this));this.f=!1};F.prototype.F=function(a){if(a&&this.u){var b=this.h.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};F.prototype.start=function(a,b){if(!this.f)return null;a=new Jb(a,b);this.u&&this.h.performance.mark("goog_"+a.uniqueId+"_start");return a};F.prototype.end=function(a){this.f&&(a.duration=Ib()-a.value,this.u&&this.h.performance.mark("goog_"+a.uniqueId+"_end"),this.f&&this.l.push(a))};var Ib=function(){var a=h.performance;return a&&a.now?a.now():n()};var Kb=function(a,b,c,d){this.J=a;this.X=b;this.B=c;this.C=null;this.W=this.A;this.i=void 0===d?null:d;this.M=!1},Mb=function(a,b,c){try{if(a.i&&a.i.f){var d=a.i.start(b.toString(),3);var e=c();a.i.end(d)}else e=c()}catch(g){c=a.B;try{a.i&&d&&a.i.F(d);var f=Lb(g);c=a.W.call(a,b,f,void 0,void 0)}catch(k){a.A(217,k)}if(!c)throw g;}return e},G=function(a,b){var c=Nb;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return Mb(c,a,function(){return b.apply(void 0,e)})}};Kb.prototype.A=function(a,b,c,d,e){e=e||this.X;try{var f=new Bb;f.D=!0;E(f,1,"context",a);b.error&&b.meta&&b.id||(b=Lb(b));b.msg&&E(f,2,"msg",b.msg.substring(0,512));b.file&&E(f,3,"file",b.file);0<b.line&&E(f,4,"line",b.line);var g=b.meta||{};if(this.C)try{this.C(g)}catch(ia){}if(d)try{d(g)}catch(ia){}b=[g];f.g.push(5);f.j[5]=b;d=h;b=[];var g=null;do{var k=d;if(Aa(k)){var l=k.location.href;g=k.document&&k.document.referrer||null}else l=g,g=null;b.push(new Ab(l||""));try{d=k.parent}catch(ia){d=null}}while(d&&k!=d);l=0;for(var q=b.length-1;l<=q;++l)b[l].depth=q-l;k=h;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var p=b[l];p.url||(p.url=k.location.ancestorOrigins[l-1]||"",p.H=!0)}var Ja=new Ab(h.location.href,!1),Ka=b.length-1;for(k=Ka;0<=k;--k){var J=b[k];if(J.url&&!J.H){Ja=J;break}}var J=null,Gc=b.length&&b[Ka].url;0!=Ja.depth&&Gc&&(J=b[Ka]);var ja=new zb(Ja,J);ja.L&&E(f,6,"top",ja.L.url||"");E(f,7,"url",ja.K.url||"");Hb(this.J,e,f,this.M,c)}catch(ia){try{Hb(this.J,e,{context:"ecmserr",rctx:a,msg:Ob(ia),url:ja.K.url},this.M,c)}catch(Zc){}}return this.B};var Lb=function(a){return new Pb(Ob(a),a.fileName,a.lineNumber)},Ob=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Pb=function(a,b,c){vb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};aa(Pb,vb);var Nb;if(ub&&!Aa(D)){var Qb="."+t.domain;try{for(;2<Qb.split(".").length&&!Aa(D);)t.domain=Qb=Qb.substr(Qb.indexOf(".")+1),D=window.parent}catch(a){}Aa(D)||(D=window)}var H=D,Rb=new F(1,H);Nb=new Kb(new function(){this.$="http:"===u.location.protocol?"http:":"https:";this.V="pagead2.googlesyndication.com";this.Z="/pagead/gen_204?id=";this.U=.01;this.aa=Math.random()},"jserror",!0,Rb);"complete"==H.document.readyState?H.google_measure_js_timing||Rb.disable():Rb.f&&Fa(H,"load",function(){H.google_measure_js_timing||Rb.disable()});var I=function(a,b){return G(a,b)};if(t&&t.URL){var Ca=t.URL,Sb=!(Ca&&0<Da().length);Nb.B=Sb}var K=function(a,b,c,d){Fa(a,b,G(d,c),{capture:void 0})},Tb=function(a){var b=["IMG","FRAME","IFRAME"];return va(b,function(b){return a.nodeName==String(b)})?[a]:ua(b,function(b,d){return b.concat(wa((a||document).getElementsByTagName(String(d))))},[])},Vb=function(){var a=L.c,b=Ub;if(a){for(var c=0,d=null,a=Tb(a),e=0;e<a.length;e++){var f=!1,d=a[e];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)f=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(f=!0)}f||(c++,K(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)}},Wb=function(a,b){var c=0,d=function(){a();c++;10>c&&u.setTimeout(G(b,d),100)};d()};var Xb=function(a,b){this.b=a||0;this.a=b||""},M=function(a,b){a.b&&(b[4]=a.b);a.a&&(b[12]=a.a)};Xb.prototype.match=function(a){return(this.b||this.a)&&(a.b||a.a)?this.a||a.a?this.a==a.a:this.b||a.b?this.b==a.b:!1:!1};Xb.prototype.toString=function(){var a=""+this.b;this.a&&(a+="-"+this.a);return a};var Yb=function(){var a=N,b=[];a.b&&b.push("adk="+a.b);a.a&&b.push("exk="+a.a);return b},Zb=function(a){var b=[];la(a,function(a,d){d=encodeURIComponent(d);m(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+(new Date).getTime());return b.join("\n")},O=0,$b=0,ac=function(a){var b=0,c=u;try{if(c&&c.Goog_AdSense_getAdAdapterInstance)return c}catch(d){}for(;c&&5>b;){try{if(c.google_osd_static_frame)return c}catch(d){}try{if(c.aswift_0&&(!a||c.aswift_0.google_osd_static_frame))return c.aswift_0}catch(d){}b++;c=c!=c.parent?c.parent:null}return null},bc=function(a,b,c,d,e,f,g,k){g=g||ba;if(10<$b)u.clearInterval(O),g();else if(++$b,u.postMessage&&(b.b||b.a)){if(g=ac(!0)){var l={};M(b,l);l[0]="goog_request_monitoring";l[6]=a;c&&(l[27]=c);l[16]=!!d;e&&e.length&&(l[17]=e.join(","));f&&(l[19]=f);k&&(l[28]=k);try{var q=Zb(l);g.postMessage(q,"*")}catch(p){}}}else u.clearInterval(O),g()};var cc=function(){this.c=null;this.w=this.o=0},dc=function(){var a=null;if(null!==u&&u.top!=u)a=u.document.body;else{var b=(u.document||document).getElementsByTagName("SCRIPT");0<b.length&&(b=b[b.length-1])&&b.parentElement&&(a=b.parentElement)}return a},ec=function(){var a=dc(),b=new cc;if(a){var c=sa(a.children,function(a){return 15<a.clientHeight&&15<a.clientHeight});b.o=a.children.length;b.w=c.length;1==b.o?b.c=a.children[0]:1==b.w?b.c=c[0]:1<b.o&&(b.c=a)}return b},fc=function(){return"data-"+"googleAvDm".replace(/([A-Z])/g,"-$1").toLowerCase()};var gc=function(){var a=/[&\?#]exk=([^& ]+)/.exec(u.location.href);return a&&2==a.length?a[1]:null};var P=0,Q="",R=[],S=!1,T=!1,U=!1,hc=!0,ic=!1,jc=!1,kc=new v,V=!1,lc=!1,mc=!1,nc=!1,oc=0,pc=0,W=0,qc=[],N=null,rc="",sc=[],tc=null,uc=[],vc=!1,wc="",xc="",yc=(new Date).getTime(),L=null,zc=!1,Ac=["1","0","3"],X=0,Y=0,Bc=0,Cc="",Dc=!1,Z=function(){return!(!L||!L.c)},Ec=function(){return L.c.getElementsByClassName("GoogleActiveViewClass")[0]},Fc=function(){if(!Z())return 0;var a=Ec();return a?a.hasAttribute(fc())?1:2:0},Ic=function(a,b,c){S&&(hc||3!=(c||3)||jc)&&Hc(a,b,!0);if(U||T&&ic)Hc(a,b),T=U=!1},Jc=function(){var a=tc;return a?2!=a():!0},Hc=function(a,b,c){if((b=b||rc)&&!vc&&(2==Y||c)&&Jc()){for(var d=0;d<R.length;++d){var e=Kc(R[d],b,c);C(a,e)}mc=!0;c?S=!1:vc=!0}},Lc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},Kc=function(a,b,c){c=c?"osdim":U?"osd2":"osdtos";a=[a,-1<a.indexOf("?")?"&id=":"?id=",c];"osd2"==c&&T&&ic&&a.push("&ts=1");a.push("&ti=1");a.push("&",b);a.push("&uc="+Bc);Z()?a.push("&tgt="+(Z()?L.c.tagName:"")):a.push("&tgt=nf");a.push("&cl="+(zc?1:0));nc&&(a.push("&lop=1"),b=n()-oc,a.push("&tslp="+b));if(b=L)a.push("&cec="+b.o),a.push("&clc="+b.w),b.c?a.push("&cd="+b.c.clientWidth+"x"+b.c.clientHeight):a.push("&cd=nf");V&&a.push("&dmsg=1");b=a.join("");for(a=0;a<sc.length;a++){try{var d=sc[a]()}catch(e){}c="max_length";2<=d.length&&(3==d.length&&(c=d[2]),b=ha(b,encodeURIComponent(d[0]),encodeURIComponent(d[1]),c))}2E3<b.length&&(b=b.substring(0,2E3));return b},Mc=function(a){if(wc){try{var b=ha(wc,"vi",a);tb()&&C(sb.contentWindow,b)}catch(c){}0<=qa(Ac,a)&&(wc="")}},Nc=function(){Mc("-1")},Pc=function(a){if(a&&a.data&&m(a.data)){var b=a.data;if(m(b)){var c={};for(var b=b.split("\n"),d=0;d<b.length;d++){var e=b[d].indexOf("=");if(!(0>=e)){var f=Number(b[d].substr(0,e)),e=b[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:case 26:e="true"==e;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==ca(decodeURIComponent))try{e=decodeURIComponent(e)}catch(k){throw Error("Error: URI malformed: "+e);}break;case 17:e=ta(decodeURIComponent(e).split(","),Number)}c[f]=e}}c=c[0]?c:null}else c=null;if(c&&(b=new Xb(c[4],c[12]),N&&N.match(b))){for(b=0;b<uc.length;b++)uc[b](c);c&&(b=100*c[25],"number"==typeof b&&!isNaN(b)&&(window.document["4CGeArbVQ"]=b|0));void 0!=c[18]&&(jc=c[18],jc||2!=W||(W=3,Oc()));Dc&&void 0!=c[7]&&0<c[7]&&(b="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+c[7],Q&&(b+="&avi="+Q),C(u,b),Dc=!1);b=c[0];if("goog_acknowledge_monitoring"==b)u.clearInterval(O),X=2;else if("goog_get_mode"==b){X=1;d={};N&&M(N,d);d[0]="goog_provide_mode";d[6]=Y;d[19]=Cc;d[16]=T;try{var g=Zb(d);a.source.postMessage(g,a.origin)}catch(k){}u.clearInterval(O);X=2}else"goog_update_data"==b?(rc=c[3],++Bc):"goog_image_request"==b&&(Ic(u,c[3]),c[5]||c[11]||Mc("0"));if("goog_update_data"==b||"goog_image_request"==b)(1==Y||2==Y||S)&&c[5]&&(a=1==c[15]&&"goog_update_data"==b,ic=!0,Mc("1"),xc&&Jc()&&(g=xc,tb()&&C(sb.contentWindow,g),xc=""),S&&!a&&(Hc(u,void 0,!0),lc=!0,pc=n()),3==W&&(W=4,Oc()),S||1!=Y||(vc=!0)),(1==Y||2==Y||S)&&c[11]&&(T=!1,Mc("3"),S&&(Hc(u,void 0,!0),1==W&&jc&&(W=2)))}}},Oc=function(){var a=W;0!=a&&1!=a&&Qc("osdim","zas="+a)},Qc=function(a,b){var c=[];Q&&c.push("avi="+Q);c.push("id="+a);c.push("ovr_value="+P);nc&&c.push("lop=1");N&&(c=c.concat(Yb()));c.push("tt="+((new Date).getTime()-yc));c.push(b);u.document&&u.document.referrer&&c.push("ref="+encodeURIComponent(u.document.referrer));try{C(u,"//pagead2.googlesyndication.com/pagead/gen_204?"+c.join("&"))}catch(d){}},Rc=function(){Ic(u);Mc("0");2>X&&!T&&2==Y&&Qc("osd2","hs="+X)},Sc=function(a){if(N&&(N.b||N.a)){var b=u.document.domain;X=1;O=u.setInterval(G(197,ga(bc,Y,N,b,T,qc,Cc,void 0,a)),500)}},Tc=function(a,b){var c=Zb(a);try{Wb(function(){var a=ac(!1),b=!a;!a&&u&&(a=u.parent);if(a&&a.postMessage)try{a.postMessage(c,"*"),b&&u.postMessage(c,"*")}catch(f){}},b)}catch(d){}},Uc=function(a,b){switch(b){case 1:a[26]=!0;break;case 2:a[26]=!1}},Wc=function(){if(V&&1===Fc()){var a=Ec();if(h.MutationObserver&&a){var b={};b.attributeFilter=[fc()];(new h.MutationObserver(G(283,Vc))).observe(a,b)}else a&&a.addEventListener?a.addEventListener("DOMAttrModified",G(283,Vc)):Nb.A(286,Error(),void 0,void 0)}a={};N&&M(N,a);a[0]="goog_dom_content_loaded";V&&(b=Fc(),Uc(a,b));Tc(a,114)},Ub=function(){var a={};N&&M(N,a);a[0]="goog_creative_loaded";if(V){var b=Fc();Uc(a,b)}Tc(a,115);zc=!0},Vc=function(){var a=Fc();if(V&&0!=a){var b={};N&&M(N,b);b[0]="goog_av_measurement_hold_update";Uc(b,a);Tc(b,282)}},Xc=function(a){if(m(a)){a=a.split("&");for(var b=a.length-1;0<=b;b--){var c=a[b].split("="),d=c[1];(c=kc.G[c[0]])&&c.oa(parseInt(d,10))&&c.na()&&a.splice(b,1)}a=a.join("&").split("&");for(b=a.length-1;0<=b;b--)d=a[b],c=ka,d==c.N?(V=!0,a.splice(b,1)):d==c.S?(hc=!1,a.splice(b,1)):d==c.O?(W=1,a.splice(b,1)):d==c.R?(T=!1,a.splice(b,1)):d==c.P&&(Dc=!0,a.splice(b,1));Cc=a.join("&")}},Yc=function(){Z()||(L=ec(),Z()&&Vb())};r("osdlfm",I(123,function(a,b,c,d,e,f,g,k,l,q){P=a;wc=b;xc=d;S=f;g&&Xc(g);T=f;1==k?qc.push(947190538):2==k?qc.push(947190541):3==k&&qc.push(947190542);N=new Xb(e,gc());K(u,"load",Nc,117);K(u,"message",Pc,118);Q=c||"";R=[q||Lc(c,l)];K(u,"unload",Rc,119);var p=u.document;0==({visible:1,hidden:2,prerender:3,preview:4}[p.webkitVisibilityState||p.mozVisibilityState||p.visibilityState||""]||0)?(Hc(u,"r=pv",!0),Sc(!0)):(!p.readyState||"complete"!=p.readyState&&"loaded"!=p.readyState?!Na()||0<=pa(Qa(),11)?K(p,"DOMContentLoaded",Wc,121):K(p,"readystatechange",function(){"complete"!=p.readyState&&"loaded"!=p.readyState||Wc()},120):Wc(),-1==P?Y=f?3:1:-2==P?Y=3:0<P&&(Y=2,U=!0),T&&!U&&-1==P&&(Y=2),Sc(),Wb(Yc,122))}));r("osdlac",I(124,function(a){sc.push(a)}));r("osdlamrc",I(125,function(a){uc.push(a)}));r("osdsir",G(126,Ic));r("osdacrc",I(127,function(a){tc=a}));r("osdpcls",I(128,function(a){var b=/^(http[s]?:)?\/\//.test(a)?a:Lc(a);if(nc&&0<=qa(R,b))return!0;if(!a||null===u||u.top==u||vc||mc&&!lc)return!1;nc=!0;if(lc){a=Kc(b,rc,!0);var c=n()-pc;a=yb(a,"tsvp",c);C(u,a)}R.push(b);oc=n();return!0}));}).call(this);
