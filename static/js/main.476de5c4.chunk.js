(this["webpackJsonpipl-app"]=this["webpackJsonpipl-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=(n(27),n(16)),i=n(6),s=n(7),u=n(9),d=n(8),p=n(12),m=n(1),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{className:"todoitem",style:this.getStyle()},o.a.createElement("p",null,"  ",o.a.createElement("input",{type:"checkBox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,o.a.createElement("button",{style:h,onClick:this.props.delTodo.bind(this,t)},"X")))}}]),n}(a.Component),h={background:"#ff0000",color:"#fff",border:"none",borderRadius:"50%",cursor:"pointer",float:"right",padding:" 5px 7px 0px",textAling:"center"},b=f,v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),n}(a.Component);var y={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E=function(){return o.a.createElement("div",null,o.a.createElement("header",{style:y},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:{color:"#fff"},to:"/"},"Home")," | ",o.a.createElement(p.b,{to:"/about",style:{color:"#fff"}},"About")))},g=n(21),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",padding:"5px"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10"},value:this.state.title,onChange:this.onChange,className:"btnval"}),o.a.createElement("input",{type:"submit",className:"btn",value:"Submit",style:{flex:"1"}}))}}]),n}(a.Component),O=n(36);n(33);var k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This.is the TodoList app v1.0.0. It is a part of a React crash course"),o.a.createElement("h1",null,"Devloped by shampy"))},x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){console.log(t),e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var n={id:Object(O.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement("div",{class:"container"},o.a.createElement(E,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{addTodo:e.addTodo}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:k}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.476de5c4.chunk.js.map