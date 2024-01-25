(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(1),l=c.n(n),o=(c(13),c(14),c(5)),d=c.n(o),i=c(2);function r(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))}var j,u=c(0),b=l.a.createContext({todos:[],loading:!1,filteredTodos:[],setFilteredTodos:function(){},selectedTodo:null,setSelectedTodo:function(){}}),h=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],l=s[1],o=Object(n.useState)([]),d=Object(i.a)(o,2),j=d[0],h=d[1],O=Object(n.useState)(!1),m=Object(i.a)(O,2),x=m[0],f=m[1],v=Object(n.useState)(null),p=Object(i.a)(v,2),N=p[0],y=p[1];Object(n.useEffect)((function(){f(!0),r("/todos.json").then(l).catch((function(){})).finally((function(){f(!1)}))}),[]),Object(n.useEffect)((function(){h(a)}),[a]);var g=Object(n.useMemo)((function(){return{todos:a,loading:x,filteredTodos:j,setFilteredTodos:h,selectedTodo:N,setSelectedTodo:y}}),[a,x,j,N]);return Object(u.jsx)(b.Provider,{value:g,children:t})},O=l.a.memo((function(e){var t=e.todo,c=Object(n.useContext)(b),s=c.selectedTodo,a=c.setSelectedTodo,l=t.id,o=t.title,i=t.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===(null===t||void 0===t?void 0:t.id)}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:l}),Object(u.jsx)("td",{className:"is-vcentered",children:i&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:d()({"has-text-success":i,"has-text-danger":!i}),children:o})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:d()("far",{"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===(null===t||void 0===t?void 0:t.id),"fa-eye":(null===s||void 0===s?void 0:s.id)!==(null===t||void 0===t?void 0:t.id)})})})})})]})})),m=l.a.memo((function(e){var t=e.filteredTodos;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(O,{todo:e},e.id)}))})]})}));!function(e){e.All="all",e.Active="active",e.Completed="completed"}(j||(j={}));var x=c(8);var f=l.a.memo((function(){var e=Object(n.useContext)(b),t=e.todos,c=e.setFilteredTodos,s=Object(n.useState)(""),a=Object(i.a)(s,2),l=a[0],o=a[1],d=Object(n.useState)(j.All),r=Object(i.a)(d,2),h=r[0],O=r[1],m=Object(n.useCallback)((function(){return function(e,t,c){var s=Object(x.a)(e);return t!==j.All&&(s=s.filter((function(e){switch(t){case j.Active:return!e.completed;case j.Completed:return e.completed;default:return e}}))),c&&(s=s.filter((function(e){return e.title.toLowerCase().includes(c)}))),s}(t,h,l)}),[h,l]);Object(n.useEffect)((function(){c(m())}),[h,l]);return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:h,onChange:function(e){return O(e.target.value)},children:[Object(u.jsx)("option",{value:j.All,children:"All"}),Object(u.jsx)("option",{value:j.Active,children:"Active"}),Object(u.jsx)("option",{value:j.Completed,children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:l,onChange:function(e){o(e.target.value.toLowerCase())}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),l&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return o("")}})})]})]})})),v=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});var p=l.a.memo((function(){var e=Object(n.useContext)(b),t=e.selectedTodo,c=e.setSelectedTodo,s=t||{},a=s.id,l=s.title,o=s.completed,d=s.userId,j=Object(n.useState)(null),h=Object(i.a)(j,2),O=h[0],m=h[1],x=Object(n.useState)(!1),f=Object(i.a)(x,2),p=f[0],N=f[1];return Object(n.useEffect)((function(){d&&(N(!0),setTimeout((function(){(function(e){return r("".concat("/users/").concat(e,".json"))})(d).then((function(e){return m(e)})).catch((function(){})).finally((function(){N(!1)}))}),100))}),[d]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),p?Object(u.jsx)(v,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",a]}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:l}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:null===O||void 0===O?void 0:O.email,children:null===O||void 0===O?void 0:O.name})]})]})]})]})})),N=function(){var e=Object(n.useContext)(b),t=e.loading,c=e.filteredTodos,s=e.selectedTodo;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(f,{})}),Object(u.jsxs)("div",{className:"block",children:[t&&Object(u.jsx)(v,{}),Object(u.jsx)(m,{filteredTodos:c})]})]})})}),s&&Object(u.jsx)(p,{})]})};a.a.render(Object(u.jsx)(h,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5485fc66.chunk.js.map