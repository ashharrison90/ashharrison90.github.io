(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489,353],{9489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(7294),c=n(3353),l=n(2072),a=n.n(l);function i(){var e=(0,o.useContext)(c.ThemeContext),t=e.theme,n=e.setTheme;return(0,r.jsxs)("div",{className:a().toggleContainer,children:[(0,r.jsx)("input",{id:"themeToggle",checked:t===c.Theme.DARK,className:a().input,onChange:function(e){return t=e.target.checked,void n(t?c.Theme.DARK:c.Theme.LIGHT);var t},type:"checkbox"}),(0,r.jsxs)("label",{"aria-label":"Toggle theme",className:a().toggle,htmlFor:"themeToggle",children:[(0,r.jsx)("span",{className:a().lightIcon,children:"\u2600\ufe0f"}),(0,r.jsx)("span",{className:a().darkIcon,children:"\ud83c\udf19"}),(0,r.jsx)("span",{className:a().toggleButton})]})]})}},3353:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return r},ThemeContext:function(){return i},ThemeContextProvider:function(){return s}});var r,o=n(6042),c=n(9396),l=n(5893),a=n(7294);!function(e){e.LIGHT="light",e.DARK="dark"}(r||(r={}));var i=a.createContext({theme:r.LIGHT,setTheme:function(e){}}),s=function(e){var t,n=e.children,s=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?r.DARK:r.LIGHT;window.localStorage.setItem("theme",s),document.documentElement.setAttribute("data-theme",s);var u={theme:s,setTheme:function(e){window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),m((0,c.Z)((0,o.Z)({},h),{theme:e}))}},g=(0,a.useState)(u),h=g[0],m=g[1];return(0,l.jsx)(i.Provider,{value:h,children:n})};t.default=s},2072:function(e){e.exports={toggleContainer:"ThemeToggle_toggleContainer__0wIB_",toggle:"ThemeToggle_toggle__q_Zc_",lightIcon:"ThemeToggle_lightIcon__gaJFg",darkIcon:"ThemeToggle_darkIcon__ke_ks",toggleButton:"ThemeToggle_toggleButton__m8Y2l",input:"ThemeToggle_input__gQcJp"}},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})}}]);