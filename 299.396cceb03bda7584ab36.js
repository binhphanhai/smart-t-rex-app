(self.webpackChunksmart_t_rex_app=self.webpackChunksmart_t_rex_app||[]).push([[299],{4299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(7294),a=r(682),l=r(4051),c=r(5508),u=r(5147);const o=function(e){var t=e.celebrities;return n.createElement(u.Z,{className:"ranking-table",striped:!0,bordered:!0,hover:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"text-center col-2"},"RANK"),n.createElement("th",{className:"text-center col-5"},"NAME"),n.createElement("th",{className:"text-center col-5"},"RECOGNIZED IMAGES"))),n.createElement("tbody",null,t.map((function(e){return n.createElement("tr",{key:e.id},n.createElement("td",{className:"text-center"},e.id),n.createElement("td",null,e.celebrity),n.createElement("td",{className:"text-center"},e.count))}))))},i=function(e){var t=e.active,r=void 0!==t&&t,a=e.setPage,l=e.children;return n.createElement("li",{className:"page-item ".concat(r&&"active"),onClick:a},n.createElement("span",{className:"page-link"},l))},s=function(e){var t=e.currentPage,r=e.setCurrentPage,a=e.totalItem,l=Math.ceil(a/c.xR);return n.createElement("ul",{className:"pagination d-flex justify-content-end"},l>1&&n.createElement(i,{setPage:function(){return r(1)}},"«"),t>2&&t===l&&n.createElement(i,{setPage:function(){return r(t-2)}},t-2),t>1&&n.createElement(i,{setPage:function(){return r(t-1)}},t-1),l>0&&n.createElement(i,{active:!0},t),t<l&&n.createElement(i,{setPage:function(){return r(t+1)}},t+1),t<l-1&&1===t&&n.createElement(i,{setPage:function(){return r(t+2)}},t+2),l>1&&n.createElement(i,{setPage:function(){return r(l)}},"»"))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const E=function(e){var t=e.resource.read(),r=m((0,n.useState)([]),2),u=r[0],i=r[1],f=m((0,n.useState)(1),2),E=f[0],d=f[1];return(0,n.useEffect)((function(){var e=E*c.xR,r=e-c.xR;i(t.slice(r,e))}),[E,t]),n.createElement(a.Z,null,n.createElement("p",{className:"text-center h2 bold"},"The most recognized celebrities Ranking"),n.createElement(l.Z,null,n.createElement(o,{celebrities:u}),n.createElement("br",null),n.createElement(s,{currentPage:E,setCurrentPage:d,totalItem:t.length})))}}}]);