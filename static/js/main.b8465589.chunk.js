(this.webpackJsonpcounter_ap=this.webpackJsonpcounter_ap||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),c=n(7),a=n.n(c),o=(n(12),n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),s(t),c(t),a(t)}))}),i=n(2),u=n(3),l=n(5),h=n(4),j=n(0),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={count:t.props.counter.value,tags:["New tags"]},t.styles={fontFamily:"Open Sans",fontSize:20},t.handleIncrement=function(){t.setState({count:t.state.count+1})},t.rendertags=function(){return 0===t.state.tags.length?Object(j.jsx)("p",{children:"No tags."}):Object(j.jsx)("ul",{children:t.state.tags.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"justify-content-center text-center mt-5",children:[Object(j.jsx)("span",{style:this.styles,className:this.getNewClassBadge(),children:this.formatCount()}),Object(j.jsx)("button",{onClick:this.handleIncrement,style:this.styles,className:"btn btn-sm btn-secondary",children:"Increment"}),Object(j.jsx)("button",{onClick:function(){return t.props.onDelete(t.props.counter.id)},style:this.styles,className:"btn btn-danger btn-sm m-3",children:"Delete"})]})})}},{key:"getNewClassBadge",value:function(){var t="badge m-2 badge-";return t+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){var t=this.state.count;return 0===t?"Zero":t}}]),n}(r.Component),b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0}]},t.styles={fontFamily:"Open Sans",fontSize:20},t.handleDelete=function(e){t.setState((function(t){return{counters:t.counters.filter((function(t){return t.id!==e}))}}))},t.renderCounter=function(){if(0===t.state.counters.length)return Object(j.jsx)("h3",{style:t.styles,className:"justify-content-center text-center mt-5 text-danger",children:"No Counter Avaliable."})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)(j.Fragment,{children:[this.state.counters.map((function(e){return Object(j.jsx)(d,{onDelete:t.handleDelete,counter:e},e.id)})),this.renderCounter()]})}}]),n}(r.Component);var f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontFamily:"Open Sans"},className:"justify-content-center text-center text-secondary",children:"Counters App"}),Object(j.jsx)(b,{})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.b8465589.chunk.js.map