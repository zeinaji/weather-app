(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(74)},34:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),i=(a(34),a(3)),o=a.n(i),l=a(9),d=a(2),m=function(e){return r.a.createElement("h1",{className:"location-details"},e.city,", ",e.country)},u=a(24),p=a.n(u),f=a(4),y=a.n(f),h=function(e){var t=e.date,a=e.temperature,n=e.description,c=e.icon,s=e.onSelect,i=c;return r.a.createElement("div",{className:"forecast-summary",style:{padding:"5px 5px 5px 5px"}},r.a.createElement("div",{className:"date","data-testid":"date-id"},r.a.createElement("span",null,y()(t).format("ddd Do MMM"))),r.a.createElement("div",{className:"icon","data-testid":i.toString()},r.a.createElement("span",null,r.a.createElement(p.a,{name:"owm",iconId:i.toString()}))),r.a.createElement("div",{className:"temperature","data-testid":"temperature-id"},r.a.createElement("span",null,a,"\xb0c")),r.a.createElement("div",{className:"description","data-testid":"description-id"},r.a.createElement("span",null,n)),r.a.createElement("button",{style:{fontFamily:"Balsamiq Sans, cursive",borderRadius:"5px",border:"0.5px solid rgb(53, 51, 51) ",cursor:"pointer",color:"rgb(53, 51, 51)"},onClick:function(){return s(t)}},"More Details"))},v=(a(45),function(e){return r.a.createElement("div",{className:"forecast-summaries"},e.forecasts.map((function(t){return r.a.createElement(h,{key:t.date,date:t.date,description:t.description,icon:t.icon,temperature:t.temperature.max,onSelect:e.onForecastSelect})})))}),b=(a(46),function(e){var t=e.forecast;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"date-details","data-testid":"date-id"},r.a.createElement("span",{style:{fontSize:"50px"}},y()(t.date).format("ddd Do MMM"))),r.a.createElement("div",{className:"max-temperature","data-testid":"max-temperature-id",style:{fontSize:"25px"}},"Max temperature:"," ",r.a.createElement("span",{style:{opacity:".5"}},t.temperature.max,"\xb0c")),r.a.createElement("div",{className:"min-temperature","data-testid":"min-temperature-id",style:{fontSize:"25px"}},"Min temperature:"," ",r.a.createElement("span",{style:{opacity:".5"}}," ",t.temperature.min,"\xb0c")),r.a.createElement("div",{className:"humidity","data-testid":"humidity",style:{fontSize:"25px"}},"Humidity: ",r.a.createElement("span",{style:{opacity:".5"}},t.humidity,"%")),r.a.createElement("div",{className:"wind-speed","data-testid":"wind-speed",style:{fontSize:"25px"}},"Wind speed:"," ",r.a.createElement("span",{style:{opacity:".5"}},t.wind.speed," mph")),r.a.createElement("div",{className:"wind-direction","data-testid":"wind-direction",style:{fontSize:"25px"}},"Wind direction:"," ",r.a.createElement("span",{style:{opacity:".5"}}," ",t.wind.direction)))}),E=a(10),x=a.n(E),g=a(25),S=a(26),w=a(5),j=a(28),N=a(27),O=function(e){Object(j.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state={searchText:""},n.handleInputChange=n.handleInputChange.bind(Object(w.a)(n)),n}return Object(S.a)(a,[{key:"handleInputChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-form",style:{margin:"25px 25px 0px 0px"}},r.a.createElement("input",{type:"text",onChange:this.handleInputChange,value:this.searchState,style:{borderRadius:"5px",border:"0.5px solid rgb(53, 51, 51)"}}),r.a.createElement("button",{className:"search-button",onClick:function(){return e.props.handleSubmit(e.state.searchText)},style:{fontFamily:"Balsamiq Sans, cursive",borderRadius:"5px",border:"0.5px solid rgb(53, 51, 51)",marginLeft:"3px",cursor:"pointer",color:"rgb(53, 51, 51)"}},"Search"))}}]),a}(r.a.Component),k=function(e){return r.a.createElement("h1",{className:"message-element"},e.message)},M=a(11),C=a.n(M),I=(a(73),function(e){var t=e.forecast,a=e.openModal,n=e.closeModal;return C.a.setAppElement("body"),r.a.createElement(C.a,{isOpen:a,onRequestClose:n,style:{overlay:{backgroundColor:"transparent",fontFamily:"Balsamiq Sans, cursive",display:"flex",justifyContent:"center",alignItems:"center"},content:{textAlign:"center",border:"3px solid rgb(53, 51, 51)",borderRadius:"20px",position:"relative",padding:"50px",left:"4px",bottom:"0px",right:"0px"}}},r.a.createElement(b,{forecast:t}))}),z=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),u=i[0],p=i[1],f=Object(n.useState)(!1),y=Object(d.a)(f,2),h=y[0],b=y[1],E=Object(n.useState)({city:"",country:""}),g=Object(d.a)(E,2),S=g[0],w=g[1],j=Object(n.useState)(""),N=Object(d.a)(j,2),M=N[0],C=N[1];Object(n.useEffect)((function(){var e=S.city;(function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,x.a.get("https://mcr-codes-weather.herokuapp.com/forecast?city=".concat(e));case 4:n=t.sent,console.log(a),p(n.data.forecasts),w({city:n.data.location.city,country:"UK"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),C(t.t0.message);case 13:c(!1),console.log(a);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[M]);var z=Object(n.useState)(0),B=Object(d.a)(z,2),F=B[0],R=B[1],q=u.find((function(e){return e.date===F}));return a?r.a.createElement("h1",{className:"loading"},"Loading..."):M?r.a.createElement("div",{className:"error-message"},r.a.createElement(k,{message:M})):r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"location-wrapper",style:{display:"flex",justifyContent:"space-between"}},S.city&&r.a.createElement(m,{city:S.city,country:S.country}),S.city&&r.a.createElement(O,{handleSubmit:function(e){(function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,x.a.get("https://mcr-codes-weather.herokuapp.com/forecast?city=".concat(e));case 4:a=t.sent,p(a.data.forecasts),w({city:a.data.location.city,country:"UK"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),C(t.t0.message);case 12:c(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}})()()}})),r.a.createElement(v,{forecasts:u,onForecastSelect:function(e){R(e),b(!0)}}),q&&r.a.createElement(I,{forecast:q,openModal:h,closeModal:function(){b(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.f6d9f292.chunk.js.map