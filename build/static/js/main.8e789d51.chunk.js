(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(12),s=c.n(a),i=(c(49),c(25)),o=(c(50),c(8)),d=c(4),l=(c(51),c(7)),j=c(1),u=function(e){var t=e.click,c=Object(l.c)((function(e){return e.cart})).cartItems;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar__logo",children:Object(j.jsx)("h2",{children:"Book Barn"})}),Object(j.jsxs)("ul",{className:"navbar__links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsxs)("span",{children:["Cart ",Object(j.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(j.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})},b=(c(58),function(e){var t=e.show,c=e.click,n=["sidedrawer"],r=Object(l.c)((function(e){return e.cart})).cartItems;return t&&n.push("show"),Object(j.jsx)("div",{className:n.join(" "),children:Object(j.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsxs)("span",{children:["Cart"," ",Object(j.jsx)("span",{className:"sidedrawer__cartbadge",children:r.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]})})}),p=(c(59),function(e){var t=e.click;return e.show&&Object(j.jsx)("div",{className:"backdrop",onClick:t})}),m=(c(60),c(61),function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("img",{src:"https://i.imgur.com/jKl82h1.jpg",alt:"Hey"})})})}),O=(c(62),function(e){var t=e.imageUrl,c=e.description,n=e.price,r=e.name,a=e.productId;return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("img",{src:t,alt:r,className:"info_img"}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("p",{className:"info__name",children:r}),Object(j.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(j.jsxs)("p",{className:"info__price",children:["$",n]}),Object(j.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})}),h=(c(63),c(90)),x=function(){return Object(j.jsxs)(h.a,{fade:!0,children:[Object(j.jsx)(h.a.Item,{interval:3e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:"https://images.squarespace-cdn.com/content/v1/55c154cee4b09ad05fa1b2ba/1511151439085-E0TKO6YJF7KAM9WVNZ4M/ke17ZwdGBToddI8pDm48kKLZU5g9OknfqdNOcMYsxU0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diWfXM56UnIgEngGbvB3JOhIberDfCHNksJIZCKacuzGZDqXZYzu2fuaodM4POSZ4w/Bookstore+Banner.jpg?format=2500w",alt:"Third slide"})}),Object(j.jsx)(h.a.Item,{interval:2e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:"https://assetscdn1.paytm.com/images/catalog/view_item/474593/1571911225913.png",alt:"First slide"})}),Object(j.jsx)(h.a.Item,{interval:2e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:"https://macmillaneducationbookstore.com/wp-content/uploads/2019/06/image_path_id9.png",alt:"Second slide"})}),Object(j.jsx)(h.a.Item,{interval:2e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:"https://i.pinimg.com/600x315/e4/21/1e/e4211ee7ba71b1362aa8168ea152083c.jpg",alt:"Third slide"})})]})},f=c(14),g=c.n(f),_=c(19),v="GET_PRODUCTS_REQUEST",N="GET_PRODUCTS_SUCCESS",y="GET_PRODUCTS_FAIL",I="GET_PRODUCT_DETAILS_REQUEST",k="GET_PRODUCT_DETAILS_SUCCESS",S="GET_PRODUCT_DETAILS_FAIL",T="GET_PRODUCT_DETAILS_RESET",C=c(20),w=c.n(C),E=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.getProducts})),c=t.products,r=t.loading,a=t.error;return Object(n.useEffect)((function(){e(function(){var e=Object(_.a)(g.a.mark((function e(t){var c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:v}),e.next=4,w.a.get("/api/products");case 4:c=e.sent,n=c.data,t({type:N,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:y,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(j.jsxs)("div",{className:"homescreen",children:[Object(j.jsx)(x,{}),Object(j.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(j.jsx)("div",{className:"homescreen__products",children:r?Object(j.jsx)("h2",{children:"Loading..."}):a?Object(j.jsx)("h2",{children:a}):c.map((function(e){return Object(j.jsx)(O,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))}),Object(j.jsx)(m,{})]})},U=c(16),D=(c(83),"ADD_TO_CART"),P="REMOVE_FROM_CART",R=function(e,t){return function(){var c=Object(_.a)(g.a.mark((function c(n,r){var a,s;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,w.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,n({type:D,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(r().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},A=function(e){var t=e.match,c=e.history,r=Object(n.useState)(1),a=Object(i.a)(r,2),s=a[0],o=a[1],d=Object(l.b)(),u=Object(l.c)((function(e){return e.getProductDetails})),b=u.loading,p=u.error,m=u.product;Object(n.useEffect)((function(){var e;m&&t.params.id!==m._id&&d((e=t.params.id,function(){var t=Object(_.a)(g.a.mark((function t(c){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:I}),t.next=4,w.a.get("/api/products/".concat(e));case 4:n=t.sent,r=n.data,c({type:k,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:S,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,m]);return Object(j.jsx)("div",{className:"productscreen",children:b?Object(j.jsx)("h2",{children:"Loading..."}):p?Object(j.jsx)("h2",{children:p}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"productscreen__left",children:[Object(j.jsx)("div",{className:"left__image",children:Object(j.jsx)("img",{src:m.imageUrl,alt:m.name})}),Object(j.jsxs)("div",{className:"left__info",children:[Object(j.jsx)("p",{className:"left__name",children:"PlayStation 5"}),Object(j.jsxs)("p",{children:["Price: $",m.price]}),Object(j.jsxs)("p",{children:["Description: ",m.description]})]})]}),Object(j.jsx)("div",{className:"productscreen__right",children:Object(j.jsxs)("div",{className:"right__info",children:[Object(j.jsxs)("p",{children:["Price:",Object(j.jsxs)("span",{children:["$",m.price]})]}),Object(j.jsxs)("p",{children:["Status:",Object(j.jsx)("span",{children:m.countInStock>0?"In Stock":"Out of Stock"})]}),Object(j.jsxs)("p",{children:["Qty",Object(j.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(U.a)(Array(m.countInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{type:"button",onClick:function(){d(R(m._id,s)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},q=(c(84),c(85),function(e){var t=e.item,c=e.qtyChangeHandler,n=e.removeHandler;return Object(j.jsxs)("div",{className:"cartitem",children:[Object(j.jsx)("div",{className:"cartitem__image",children:Object(j.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(j.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(j.jsx)("p",{children:t.name})}),Object(j.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(j.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(U.a)(Array(t.countInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(j.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return n(t.product)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}),L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){}),[]);var c=function(t,c){e(R(t,c))},r=function(t){e(function(e){return function(t,c){t({type:P,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"cartscreen",children:[Object(j.jsxs)("div",{className:"cartscreen__left",children:[Object(j.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(j.jsxs)("div",{children:["Your Cart Is Empty ",Object(j.jsx)(o.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(j.jsx)(q,{item:e,qtyChangeHandler:c,removeHandler:r},e.product)}))]}),Object(j.jsxs)("div",{className:"cartscreen__right",children:[Object(j.jsxs)("div",{className:"cartscreen__info",children:[Object(j.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(j.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Proceed To Checkout"})})]})]})})};var F=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(u,{click:function(){return r(!0)}}),Object(j.jsx)(b,{show:c,click:function(){return r(!1)}}),Object(j.jsx)(p,{show:c,click:function(){return r(!1)}}),Object(j.jsx)("main",{className:"app",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:E}),Object(j.jsx)(d.a,{exact:!0,path:"/product/:id",component:A}),Object(j.jsx)(d.a,{exact:!0,path:"/cart",component:L})]})})]})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},B=(c(86),c(21)),J=c(43),M=c(44),Z=c(15),K={cartItems:[]},H=Object(B.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:var c=t.payload,n=e.cartItems.find((function(e){return e.product===c.product}));return n?Object(Z.a)(Object(Z.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?c:e}))}):Object(Z.a)(Object(Z.a)({},e),{},{cartItems:[].concat(Object(U.a)(e.cartItems),[c])});case P:return Object(Z.a)(Object(Z.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0,products:[]};case N:return{products:t.payload,loading:!1};case y:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case k:return{loading:!1,product:t.payload};case S:return{loading:!1,error:t.payload};case T:return{product:{}};default:return e}}}),Y=[J.a],V={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},$=Object(B.createStore)(H,V,Object(M.composeWithDevTools)(B.applyMiddleware.apply(void 0,Y)));s.a.render(Object(j.jsx)(l.a,{store:$,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(F,{})})}),document.getElementById("root")),G()}},[[87,1,2]]]);
//# sourceMappingURL=main.8e789d51.chunk.js.map