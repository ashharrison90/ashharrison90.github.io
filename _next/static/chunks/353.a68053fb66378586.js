"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{3353:function(e,t,r){r.r(t),r.d(t,{Theme:function(){return n},ThemeContext:function(){return a},ThemeContextProvider:function(){return m}});var n,o=r(6042),c=r(9396),u=r(5893),i=r(7294);!function(e){e.LIGHT="light",e.DARK="dark"}(n||(n={}));var a=i.createContext({theme:n.LIGHT,setTheme:function(e){}}),m=function(e){var t,r=e.children,m=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?n.DARK:n.LIGHT;window.localStorage.setItem("theme",m),document.documentElement.setAttribute("data-theme",m);var s={theme:m,setTheme:function(e){window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),d((0,c.Z)((0,o.Z)({},h),{theme:e}))}},l=(0,i.useState)(s),h=l[0],d=l[1];return(0,u.jsx)(a.Provider,{value:h,children:r})};t.default=m},9396:function(e,t,r){function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})}}]);