(()=>{"use strict";var t={527:(t,e,r)=>{r.d(e,{y:()=>n,m:()=>o});var n="\n    0 0\n    5 5\n    8 2\n    10 0 \n    8 8\n    10 10 \n    0 10\n",o="\n   1 1\n   1 5 \n   2 3\n   4 2\n   3 6\n   4 4\n   5 2\n   6 4\n"},628:(t,e,r)=>{r.d(e,{x:()=>f,F:()=>c});var n=r(527);function o(t){return t.map((function(t){return Object.assign({},t)}))}function l(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}function a(t){return function(t,e,r){var n=t[e];return t[e]=t[r],t[r]=n,t}(t,l(0,t.length-1),l(0,t.length-1))}function u(t,e){var r=Math.abs(t.x-e.x),n=Math.abs(t.y-e.y);return Math.pow(Math.pow(r,2)+Math.pow(n,2),.5)}function i(t){for(var e=0,r=1;r<t.length;r++)e+=u(t[r-1],t[r]);return e+u(t[0],t[t.length-1])}function s(t){var e=t;e=e.split(" ").map((function(t){return t.replace(/\s/g,"")})).filter((function(t){return""!=t}));for(var r=[],n=1;n<e.length;n+=2)r.push({x:+e[n-1],y:+e[n]});return function(t){for(var e,r,n,l,u,s,f=o(t),c=o(t),h=1e3;h>1;h*=.999)e=a(e=o(f)),r=i(f),n=i(e),Math.random()<(s=h,(u=n)<(l=r)?1:Math.exp((l-u)/s))&&(f=o(e)),i(f)<i(c)&&(c=o(f));return{bestTour:c,bestTourDistance:i(c),dataIn:t}}(r)}var f=s(n.y),c=s(n.m)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,r),l.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(628);function e(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=[],a=[],u=100+o,i=40*r,s=0;s<t.bestTour.length;s++)l.push({x:t.bestTour[s].x*i+u,y:t.bestTour[s].y*i+u,radius:10,fillStyle:"#F9ED32",strokeStyle:"#B0BAC3"}),a.push({from:{x:t.bestTour[s].x*i+u,y:t.bestTour[s].y*i+u},to:{x:t.bestTour[(s+1)%t.bestTour.length].x*i+u,y:t.bestTour[(s+1)%t.bestTour.length].y*i+u}});n(a,l,e)}function n(t,e,r){r.width=600,r.height=600;var n=r.getContext("2d");n.clearRect(0,0,window.innerWidth,window.innerHeight);for(var o=0;o<t.length;o++){var l=t[o].from,a=t[o].to;n.beginPath(),n.strokeStyle=l.strokeStyle,n.moveTo(l.x,l.y),n.lineTo(a.x,a.y),n.stroke()}for(var u=0;u<e.length;u++){var i=e[u];n.beginPath(),n.fillStyle=i.selected?i.selectedFill:i.fillStyle,n.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),n.fillStyle="black",n.font="25px serif",n.fillText(u+1,i.x-20,i.y-30),n.strokeStyle=i.strokeStyle,n.fill(),n.stroke()}}console.log(t.x),console.log(t.F),window.onload=function(){var r=document.querySelector("#test1"),n=document.querySelector("#test2");e(t.x,r),e(t.F,n,2,-60)}})()})();