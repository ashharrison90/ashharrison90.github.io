(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981,902],{8981:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893),l=n(7294),a=n(6902),r=n(4550),g=n.n(r);function h(){let{theme:e,setTheme:t}=(0,l.useContext)(a.ThemeContext),n=e=>{t(e?a.Theme.DARK:a.Theme.LIGHT)};return(0,o.jsxs)("div",{className:g().toggleContainer,children:[(0,o.jsx)("input",{id:"themeToggle",checked:e===a.Theme.DARK,className:g().input,onChange:e=>n(e.target.checked),type:"checkbox"}),(0,o.jsxs)("label",{"aria-label":"Toggle theme",className:g().toggle,htmlFor:"themeToggle",children:[(0,o.jsx)("span",{className:g().lightIcon,children:"☀️"}),(0,o.jsx)("span",{className:g().darkIcon,children:"\uD83C\uDF19"}),(0,o.jsx)("span",{className:g().toggleButton})]})]})}},6902:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return l},ThemeContext:function(){return g},ThemeContextProvider:function(){return h}});var o,l,a=n(5893),r=n(7294);(o=l||(l={})).LIGHT="light",o.DARK="dark";let g=(0,r.createContext)({theme:"light",setTheme:()=>{}}),h=e=>{var t;let{children:n}=e,o=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";window.localStorage.setItem("theme",o),document.documentElement.setAttribute("data-theme",o);let[l,h]=(0,r.useState)({theme:o,setTheme:e=>{window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),h({...l,theme:e})}});return(0,a.jsx)(g.Provider,{value:l,children:n})};t.default=h},4550:function(e){e.exports={toggleContainer:"ThemeToggle_toggleContainer__r0MJx",toggle:"ThemeToggle_toggle__zqOmC",lightIcon:"ThemeToggle_lightIcon__1gtBD",darkIcon:"ThemeToggle_darkIcon__AwJpD",toggleButton:"ThemeToggle_toggleButton__3F4kz",input:"ThemeToggle_input__H7Sgh"}}}]);