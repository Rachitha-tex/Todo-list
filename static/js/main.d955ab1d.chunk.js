(this["webpackJsonp2-todo-list"]=this["webpackJsonp2-todo-list"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(7),a=o.n(s),l=(o(13),o(3)),i=(o(14),o(8)),d=o(0),r=function(t){var e=t.setText,o=t.todos,c=t.setTodos,n=t.text,s=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:n,type:"text",className:"todo-innput",onChange:function(t){e(t.target.value)}}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),c([].concat(Object(i.a)(o),[{text:n,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fa fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6);var j=function(t){var e=t.text,o=t.todos,c=t.setTodos,n=t.todo;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:e}),Object(d.jsx)("button",{onClick:function(){c(o.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{className:"trash-btn",onClick:function(){c(o.filter((function(t){return t.id!==n.id})))},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filterTodo;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{text:t.text,todos:e,setTodos:o,todo:t},t.id)}))})})},f=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(l.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)("all"),f=Object(l.a)(j,2),O=f[0],m=f[1],x=Object(c.useState)([]),p=Object(l.a)(x,2),h=p[0],v=p[1];Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){g(),N()}),[O,i]);var g=function(){switch(O){case"completed":v(i.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(i.filter((function(t){return!1===t.completed})));break;default:v(i)}},N=function(){localStorage.setItem("todos",JSON.stringify(i))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h2",{children:"My Own Todo List"})}),Object(d.jsx)(r,{setText:n,text:o,todos:i,setTodos:u,setStatus:m}),Object(d.jsx)(b,{setTodos:u,todos:i,filterTodo:h})]})},O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.d955ab1d.chunk.js.map