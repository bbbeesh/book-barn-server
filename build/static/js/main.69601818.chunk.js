(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(20),s=c.n(a),i=(c(42),c(23)),o=(c(43),c(5)),d=c(3),l=(c(44),c(4)),j=c(0),u=function(e){var t=e.click,c=Object(l.c)((function(e){return e.cart})).cartItems;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar__logo",children:Object(j.jsx)("h2",{children:"Book Barn"})}),Object(j.jsxs)("ul",{className:"navbar__links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsxs)("span",{children:["Cart ",Object(j.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(j.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})},p=(c(51),function(e){var t=e.show,c=e.click,r=["sidedrawer"],n=Object(l.c)((function(e){return e.cart})).cartItems;return t&&r.push("show"),Object(j.jsx)("div",{className:r.join(" "),children:Object(j.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsxs)("span",{children:["Cart"," ",Object(j.jsx)("span",{className:"sidedrawer__cartbadge",children:n.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]})})}),b=(c(52),function(e){var t=e.click;return e.show&&Object(j.jsx)("div",{className:"backdrop",onClick:t})}),O=(c(53),c(54),function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("img",{src:"https://i.imgur.com/jKl82h1.jpg",alt:"Hey"})})})}),h=(c(55),function(e){var t=e.imageUrl,c=e.description,r=e.price,n=e.name,a=e.productId;return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("img",{src:t,alt:n,className:"info_img"}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("p",{className:"info__name",children:n}),Object(j.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(j.jsxs)("p",{className:"info__price",children:["$",r]}),Object(j.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})}),m=c(11),x=c.n(m),f=c(17),_="GET_PRODUCTS_REQUEST",g="GET_PRODUCTS_SUCCESS",v="GET_PRODUCTS_FAIL",y="GET_PRODUCT_DETAILS_REQUEST",N="GET_PRODUCT_DETAILS_SUCCESS",S="GET_PRODUCT_DETAILS_FAIL",I="GET_PRODUCT_DETAILS_RESET",k=c(18),C=c.n(k),T=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.getProducts})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(x.a.mark((function e(t){var c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:_}),e.next=4,C.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:g,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:v,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(j.jsxs)("div",{className:"homescreen",children:[Object(j.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(j.jsx)("div",{className:"homescreen__products",children:n?Object(j.jsx)("h2",{children:"Loading..."}):a?Object(j.jsx)("h2",{children:a}):c.map((function(e){return Object(j.jsx)(h,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))}),Object(j.jsx)(O,{})]})},E=c(14),w=(c(75),"ADD_TO_CART"),D="REMOVE_FROM_CART",P=function(e,t){return function(){var c=Object(f.a)(x.a.mark((function c(r,n){var a,s;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:w,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},U=function(e){var t=e.match,c=e.history,n=Object(r.useState)(1),a=Object(i.a)(n,2),s=a[0],o=a[1],d=Object(l.b)(),u=Object(l.c)((function(e){return e.getProductDetails})),p=u.loading,b=u.error,O=u.product;Object(r.useEffect)((function(){var e;O&&t.params.id!==O._id&&d((e=t.params.id,function(){var t=Object(f.a)(x.a.mark((function t(c){var r,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:y}),t.next=4,C.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:N,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:S,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,O]);return Object(j.jsx)("div",{className:"productscreen",children:p?Object(j.jsx)("h2",{children:"Loading..."}):b?Object(j.jsx)("h2",{children:b}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"productscreen__left",children:[Object(j.jsx)("div",{className:"left__image",children:Object(j.jsx)("img",{src:O.imageUrl,alt:O.name})}),Object(j.jsxs)("div",{className:"left__info",children:[Object(j.jsx)("p",{className:"left__name",children:"PlayStation 5"}),Object(j.jsxs)("p",{children:["Price: $",O.price]}),Object(j.jsxs)("p",{children:["Description: ",O.description]})]})]}),Object(j.jsx)("div",{className:"productscreen__right",children:Object(j.jsxs)("div",{className:"right__info",children:[Object(j.jsxs)("p",{children:["Price:",Object(j.jsxs)("span",{children:["$",O.price]})]}),Object(j.jsxs)("p",{children:["Status:",Object(j.jsx)("span",{children:O.countInStock>0?"In Stock":"Out of Stock"})]}),Object(j.jsxs)("p",{children:["Qty",Object(j.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(E.a)(Array(O.countInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{type:"button",onClick:function(){d(P(O._id,s)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},R=(c(76),c(77),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(j.jsxs)("div",{className:"cartitem",children:[Object(j.jsx)("div",{className:"cartitem__image",children:Object(j.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(j.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(j.jsx)("p",{children:t.name})}),Object(j.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(j.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(E.a)(Array(t.countInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(j.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return r(t.product)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}),A=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cart})).cartItems;Object(r.useEffect)((function(){}),[]);var c=function(t,c){e(P(t,c))},n=function(t){e(function(e){return function(t,c){t({type:D,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"cartscreen",children:[Object(j.jsxs)("div",{className:"cartscreen__left",children:[Object(j.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(j.jsxs)("div",{children:["Your Cart Is Empty ",Object(j.jsx)(o.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(j.jsx)(R,{item:e,qtyChangeHandler:c,removeHandler:n},e.product)}))]}),Object(j.jsxs)("div",{className:"cartscreen__right",children:[Object(j.jsxs)("div",{className:"cartscreen__info",children:[Object(j.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(j.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Proceed To Checkout"})})]})]})})};var L=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(u,{click:function(){return n(!0)}}),Object(j.jsx)(p,{show:c,click:function(){return n(!1)}}),Object(j.jsx)(b,{show:c,click:function(){return n(!1)}}),Object(j.jsx)("main",{className:"app",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:T}),Object(j.jsx)(d.a,{exact:!0,path:"/product/:id",component:U}),Object(j.jsx)(d.a,{exact:!0,path:"/cart",component:A})]})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},q=c(19),G=c(36),B=c(37),H=c(12),J={cartItems:[]},$=Object(q.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(H.a)(Object(H.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(H.a)(Object(H.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems),[c])});case D:return Object(H.a)(Object(H.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0,products:[]};case g:return{products:t.payload,loading:!1};case v:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case N:return{loading:!1,product:t.payload};case S:return{loading:!1,error:t.payload};case I:return{product:{}};default:return e}}}),M=[G.a],Q={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},V=Object(q.createStore)($,Q,Object(B.composeWithDevTools)(q.applyMiddleware.apply(void 0,M)));s.a.render(Object(j.jsx)(l.a,{store:V,children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L,{})})}),document.getElementById("root")),F()}},[[78,1,2]]]);
//# sourceMappingURL=main.69601818.chunk.js.map