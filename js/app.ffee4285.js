(function(e){function t(t){for(var n,o,i=t[0],s=t[1],u=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-weather-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=(a("b0c0"),a("cf05")),r=a.n(c),o={key:0,class:"container"},i={class:"weather-side"},s=Object(n["e"])("div",{class:"weather-gradient"},null,-1),u={class:"date-container"},l={class:"date-dayname"},b={class:"date-day"},d={class:"location"},p=Object(n["e"])("i",{class:"fas fa-bookmark"},null,-1),f=[p],h={class:"weather-container"},O=Object(n["e"])("i",{class:"weather-icon far fa-sun"},null,-1),j={class:"weather-temp"},y={class:"weather-desc"},m={class:"info-side"},k={class:"today-info-container"},v=Object(n["e"])("img",{class:"info-logo",src:r.a,alt:"VueLogo"},null,-1),g={class:"today-info"},w={class:"humidity"},M=Object(n["e"])("span",{class:"title"},"HUMIDITY",-1),x={class:"value"},_=Object(n["e"])("div",{class:"clear"},null,-1),q={class:"wind"},D=Object(n["e"])("span",{class:"title"},"WIND",-1),S={class:"value"},P=Object(n["e"])("div",{class:"clear"},null,-1),T={class:"location-container"},W=Object(n["e"])("button",{type:"submit",class:"location-button"},[Object(n["e"])("i",{class:"location-icon fas fa-map-marker-alt"}),Object(n["f"])(),Object(n["e"])("span",null,"Change location")],-1),C={key:0,class:"bookmarks"},J=Object(n["e"])("div",{class:"bookmarks-button"},[Object(n["e"])("span")],-1),A=Object(n["e"])("h3",null,"Bookmarks:",-1),B={class:"bookmarks-list"},F=["onClick"];function I(e,t,a,c,r,p){return"undefined"!=typeof e.weather.main?(Object(n["g"])(),Object(n["d"])("div",o,[Object(n["e"])("div",i,[s,Object(n["e"])("div",u,[Object(n["e"])("h2",l,Object(n["i"])(p.getDate.weekday),1),Object(n["e"])("span",b,Object(n["i"])(p.getDate.date),1),Object(n["e"])("span",d,[Object(n["e"])("span",{class:"bookmark-add",onClick:t[0]||(t[0]=function(e){return p.addToBookmarks()}),title:"add to bookmark"},f),Object(n["f"])(" "+Object(n["i"])(e.weather.name)+", "+Object(n["i"])(e.weather.sys.country),1)])]),Object(n["e"])("div",h,[O,Object(n["e"])("h1",j,Object(n["i"])(Math.round(e.weather.main.temp))+"°C",1),Object(n["e"])("h3",y,Object(n["i"])(e.weather.weather[0].main),1)])]),Object(n["e"])("div",m,[Object(n["e"])("div",k,[v,Object(n["e"])("div",g,[Object(n["e"])("div",w,[M,Object(n["e"])("span",x,Object(n["i"])(e.weather.main.humidity)+" %",1),_]),Object(n["e"])("div",q,[D,Object(n["e"])("span",S,Object(n["i"])(e.weather.wind.speed)+" km/h",1),P])])]),Object(n["e"])("div",T,[Object(n["e"])("form",{onSubmit:t[2]||(t[2]=Object(n["l"])((function(e){return p.fetchWeather()}),["prevent"])),"accept-charset":"utf-8"},[Object(n["k"])(Object(n["e"])("input",{class:"location-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.query=t}),placholder:"Enter your location"},null,512),[[n["j"],e.query]]),W],32)])]),e.bookmarks.length?(Object(n["g"])(),Object(n["d"])("div",C,[J,A,Object(n["e"])("ul",B,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["h"])(e.bookmarks,(function(t,a){return Object(n["g"])(),Object(n["d"])("li",{onClick:function(a){e.query=t,p.fetchWeather},key:a},Object(n["i"])(t),9,F)})),128))])])):Object(n["c"])("",!0)])):Object(n["c"])("",!0)}a("99af");var N=a("bc3a"),U=a.n(N),V={name:"App",data:function(){return{api_url:"https://api.openweathermap.org/data/2.5/",api_key:"814ca0274a5978ef78c6b9b44ff87547",query:"Moscow",weather:{},bookmarks:[]}},methods:{fetchWeather:function(){var e=this;U.a.get("".concat(this.api_url,"weather?q=").concat(this.query,"&units=metric&appid=").concat(this.api_key)).then((function(t){return e.weather=t.data})).catch((function(e){return console.log(e)}))},addToBookmarks:function(){console.log(this.bookmarks.indexOf(this.query)),-1===this.bookmarks.indexOf(this.query)&&this.bookmarks.push(this.query)}},computed:{getDate:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=e.getMonth()+1,n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c="".concat(e.getDate(),", ").concat(t[a]," ").concat(e.getFullYear());return{date:c,weekday:n}}},mounted:function(){this.fetchWeather()}},Y=(a("5c19"),a("6b0d")),E=a.n(Y);const H=E()(V,[["render",I]]);var L=H;a("7051");Object(n["b"])(L).mount("#app")},"5c19":function(e,t,a){"use strict";a("7425")},7425:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ffee4285.js.map