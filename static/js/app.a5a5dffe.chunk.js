(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{82:function(e,n,t){"use strict";var o=t(15),s=t.n(o),i=t(0),r=t.n(i),l=t(6),a=t(4),c=t(83),p=t(7),u=t(25),d=t(20),h=t.n(d),w="#23EED3",k=t(16),m=t.n(k),b=t(34);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){m()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n=e.children,t=e.paddingVertical,o=void 0===t?0:t,s=e.fontSize,i=void 0===s?16:s,l=e.title,a=e.style,c=l?"Poppins_600SemiBold":"Teko_300Light";return r.a.createElement(b.a,{style:g({fontSize:i,paddingVertical:o,fontFamily:c,textTransform:"none"},a)},n)},E=(a.a.create({}),"chiggins"),_="tnickerson",P="jhartenberger",W="abitchell",v=["unknown","win","loss"],S=[{id:"dbishop",coach:"D. Bishop",wins:6,possibleWins:6,schedule:[{opponent:"simon",result:"unknown"},{opponent:"sbishop",result:"unknown"},{opponent:"alawson",result:"unknown"}]},{id:"sbishop",coach:"S. Bishop",wins:7,possibleWins:7,schedule:[{opponent:"alawson",result:"unknown"},{opponent:"dbishop",result:"unknown"},{opponent:"simon",result:"unknown"}]},{id:E,coach:"Higgins",wins:8,possibleWins:8,schedule:[{opponent:W,result:"unknown"},{opponent:_,result:"unknown"},{opponent:"chorwill",result:"unknown"}]},{id:_,coach:"Nickerson",wins:6,possibleWins:6,schedule:[{opponent:"chorwill",result:"unknown"},{opponent:E,result:"unknown"},{opponent:W,result:"unknown"}]},{id:P,coach:"Hartenberger",wins:5,possibleWins:5,schedule:[{opponent:"wdeeker",result:"unknown"},{opponent:"jsolomon",result:"unknown"},{opponent:"sam",result:"unknown"}]},{id:"wdeeker",coach:"Deeker",wins:3,possibleWins:3,schedule:[{opponent:P,result:"unknown"},{opponent:"sam",result:"unknown"},{opponent:"jsolomon",result:"unknown"}]},{id:W,coach:"Bitchell",wins:3,possibleWins:3,schedule:[{opponent:E,result:"unknown"},{opponent:"chorwill",result:"unknown"},{opponent:_,result:"unknown"}]},{id:"sam",coach:"Sa. Evans",wins:5,possibleWins:5,schedule:[{opponent:"jsolomon",result:"unknown"},{opponent:"wdeeker",result:"unknown"},{opponent:P,result:"unknown"}]},{id:"simon",coach:"Si. Evans",wins:6,possibleWins:6,schedule:[{opponent:"dbishop",result:"unknown"},{opponent:"alawson",result:"unknown"},{opponent:"sbishop",result:"unknown"}]},{id:"jsolomon",coach:"Solomon",wins:6,possibleWins:6,schedule:[{opponent:"sam",result:"unknown"},{opponent:P,result:"unknown"},{opponent:"wdeeker",result:"unknown"}]},{id:"chorwill",coach:"Horwill",wins:6,possibleWins:6,schedule:[{opponent:_,result:"unknown"},{opponent:W,result:"unknown"},{opponent:E,result:"unknown"}]},{id:"alawson",coach:"Lawson",wins:6,possibleWins:6,schedule:[{opponent:"sbishop",result:"unknown"},{opponent:"simon",result:"unknown"},{opponent:"dbishop",result:"unknown"}]}],j=t(47),O=t(139),T=[{id:"tm",isSched:!1,isTap:!1,label:"Team"},{id:"w12",isSched:!0,isTap:!1,label:"Week 12"},{id:"w13",isSched:!0,isTap:!1,label:"Week 13"},{id:"w14",isSched:!0,isTap:!1,label:"Week 14"},{id:"wns",isSched:!1,isTap:!0,label:"Wins"}],x=function(e){var n=e.data,t=e.handleMatchUp,o=e.sortData,a=Object(i.useState)(!0),c=s()(a,2),p=c[0],u=c[1],d=function(){u(!0),o()};return r.a.createElement(l.a,null,r.a.createElement(l.a,{style:B.headers},T.map((function(e){var n=e.id,t=e.label,o=e.isSched,s=e.isTap;return r.a.createElement(j.a,{disabled:!s,onPress:d,key:n,style:[B.item,o&&B.schedule]},r.a.createElement(l.a,{style:{flexDirection:"row",alignItems:"center"}},r.a.createElement(y,null,t),s&&r.a.createElement(O.a,{style:{opacity:p?1:0},name:"caretdown",size:8})))}))),n.map((function(e){var n=e.id,o=e.coach,s=e.schedule,i=e.possibleWins;return r.a.createElement(l.a,{key:n,style:B.row},r.a.createElement(l.a,{style:B.item},r.a.createElement(y,{style:{color:"black",fontWeight:"600",textTransform:"uppercase"}},o)),s.map((function(e,o){var s=e.opponent,i=e.result,l=function(e){return S.filter((function(n){return n.id===e}))[0]}(s),a=function(e){switch(e){case"win":return"rgb(134,255,134)";case"loss":return"rgb(255, 89, 107)";default:return"white"}}(i);return r.a.createElement(j.a,{key:"sched-"+o,style:[B.item,B.schedule,{backgroundColor:a}],onPress:function(){u(!1),t(n,s,o)}},r.a.createElement(y,{style:{color:"black"}},l.coach))})),r.a.createElement(l.a,{style:B.item},r.a.createElement(y,{style:{color:"black"}},i)))})))},B=a.a.create({row:{flexDirection:"row",marginVertical:1,backgroundColor:"#fff",height:40},headers:{flexDirection:"row",backgroundColor:w,height:50},heading:{color:"black",fontSize:16,textTransform:"uppercase"},item:{flex:1,alignItems:"center",justifyContent:"center",paddingVertical:5},schedule:{maxWidth:100}}),D=function(e,n){return n.wins-e.wins};function I(){var e=Object(i.useState)(S.sort(D)),n=s()(e,2),t=n[0],o=n[1];return r.a.createElement(l.a,{style:z.container},r.a.createElement(l.a,{style:{flex:1}},r.a.createElement(l.a,{style:{flexDirection:"row",alignItems:"center"}},r.a.createElement(y,{style:{fontSize:60,fontWeight:"600"}},"TAB"),r.a.createElement(l.a,{style:z.divider}),r.a.createElement(y,{style:{fontSize:30}},"2021 Playoffs Predictor")),r.a.createElement(x,{data:t,handleMatchUp:function(e,n,s){var i=h()(t),r=i.filter((function(n){return n.id===e}))[0],l=i.filter((function(e){return e.id===n}))[0],a=0,c=v.indexOf(r.schedule[s].result);c<v.length-1&&(a=c+1);var p=v[a];r.schedule[s].result=p,l.schedule[s].result=function(e){switch(e){case v[0]:return v[0];case v[1]:return v[2];case v[2]:return v[1];default:return v[0]}}(p),r.possibleWins=r.schedule.reduce((function(e,n){return"win"===n.result?e+1:e}),r.wins),l.possibleWins=l.schedule.reduce((function(e,n){return"win"===n.result?e+1:e}),l.wins),o(i)},sortData:function(){var e=h()(t).sort((function(e,n){return n.possibleWins-e.possibleWins}));o(e)}})))}var z=a.a.create({container:{flex:1,padding:16},divider:{marginTop:-10,width:3,height:50,marginHorizontal:10,backgroundColor:w}}),L=(n.a=function(){var e=Object(p.s)({Poppins_100Thin:p.a,Poppins_100Thin_Italic:p.b,Poppins_200ExtraLight:p.c,Poppins_200ExtraLight_Italic:p.d,Poppins_300Light:p.e,Poppins_300Light_Italic:p.f,Poppins_400Regular:p.g,Poppins_400Regular_Italic:p.h,Poppins_500Medium:p.i,Poppins_500Medium_Italic:p.j,Poppins_600SemiBold:p.k,Poppins_600SemiBold_Italic:p.l,Poppins_700Bold:p.m,Poppins_700Bold_Italic:p.n,Poppins_800ExtraBold:p.o,Poppins_800ExtraBold_Italic:p.p,Poppins_900Black:p.q,Poppins_900Black_Italic:p.r,Teko_300Light:u.a,Teko_400Regular:u.b,Teko_500Medium:u.c,Teko_600SemiBold:u.d,Teko_700Bold:u.e});return s()(e,1)[0]?r.a.createElement(l.a,{style:L.app},r.a.createElement(I,null)):r.a.createElement(c.a,null)},a.a.create({app:{flex:1,backgroundColor:"rgba(191, 191, 191, 0.2)"}}))},84:function(e,n,t){e.exports=t(133)}},[[84,1,2]]]);
//# sourceMappingURL=app.a5a5dffe.chunk.js.map