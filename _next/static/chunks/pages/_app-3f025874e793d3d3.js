(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6877:function(e,t,r){"use strict";r.d(t,{Q2:function(){return n},Ni:function(){return a},ze:function(){return s}});var n,o=r(4942),c=r(7294),u=r(5893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.LIGHT="light",e.DARK="dark"}(n||(n={}));var a=c.createContext({theme:n.LIGHT,setTheme:function(e){}}),s=function(e){var t=e.children,r=function(e){window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),p(f(f({},s),{},{theme:e}))};(0,c.useEffect)((function(){var e,t=null!==(e=window.localStorage.getItem("theme"))&&void 0!==e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?n.DARK:n.LIGHT;document.documentElement.setAttribute("data-theme",t),r(t)}),[]);var o={theme:n.LIGHT,setTheme:r},i=(0,c.useState)(o),s=i[0],p=i[1];return(0,u.jsx)(a.Provider,{value:s,children:t})}},3611:function(e,t,r){"use strict";r.r(t);var n=r(4942),o=r(6877),c=(r(9221),r(5893));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,c.jsx)(o.ze,{children:(0,c.jsx)(t,i({},r))})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3611)}])},9221:function(){},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(9898)}));var r=e.O();_N_E=r}]);