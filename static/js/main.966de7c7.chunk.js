(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),m=a(15),o=a.n(m),i=a(13),s=a(14);function u(){return r.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}var d=a(6);function f(e){return Object(d.b)({value:e.price,currency:e.currency,language:navigator.language})}function x(){var e=Object(s.useQuery)("Products",function(){return o()("/api/products").then(function(e){return e.data.products})}),t=e.data;return e.isLoading?r.a.createElement(u,null):t.map(function(e){return r.a.createElement(p,{key:e.id,product:e})})}function p(e){var t=e.product,a=f(t);return r.a.createElement("div",{className:"p-4 md:w-1/3"},r.a.createElement("div",{className:"h-full border-2 border-gray-800 rounded-lg overflow-hidden"},r.a.createElement(i.b,{to:"/".concat(t.id)},r.a.createElement("img",{className:"lg:h-96 md:h-36 w-full object-cover object-center",src:t.image,alt:t.name})),r.a.createElement("div",{className:"p-6"},r.a.createElement("h2",{className:"tracking-widest text-xs title-font font-medium text-gray-500 mb-1"},t.category),r.a.createElement("h1",{className:"title-font text-lg font-medium text-white mb-3"},t.name),r.a.createElement("p",{className:"leading-relaxed mb-3"},t.description),r.a.createElement("div",{className:"flex items-center flex-wrap "},r.a.createElement(i.b,{to:"/".concat(t.id),className:"text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"},"See More",r.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))),r.a.createElement("span",{className:"text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold"},a)))))}function E(){return r.a.createElement("section",{className:"text-gray-400 bg-gray-900 body-font"},r.a.createElement("div",{className:"container px-5 py-24 mx-auto"},r.a.createElement("div",{className:"text-center mb-20"},r.a.createElement("h1",{className:"sm:text-3xl text-2xl font-medium title-font text-white mb-4"},"E-Commerce App with Complete Shopping Cart"),r.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80"},"A full-stack ecommerce app made with a Create-React-App client and Node API, using Stripe to process payments."),r.a.createElement("div",{className:"flex mt-6 justify-center"},r.a.createElement("div",{className:"w-16 h-1 rounded-full bg-indigo-500 inline-flex"}))),r.a.createElement("div",{className:"flex flex-wrap -m-4"},r.a.createElement(x,null))))}var g=a(5),b=a(17);function h(e){var t=e.product,a=Object(d.c)().addItem;return r.a.createElement("button",{className:"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",onClick:function(){a(t),b.b.success("".concat(t.name," is added to your cart!"))}},"Add To Cart")}function v(e){var t=e.product,a=Object(d.c)(),n=a.removeItem,l=a.cartCount;return r.a.createElement("button",{className:"flex ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded",onClick:function(){n(t.sku),b.b.success("".concat(t.name," is removed to your cart!"))},disabled:!l},"Remove")}function w(){var e=Object(g.g)().productId,t=Object(s.useQuery)(["Product",e],function(){return o()("/api/products/".concat(e)).then(function(e){return e.data.product})}),a=t.data,n=t.isLoading,l=t.isError,c=t.error;if(n)return r.a.createElement(u,null);if(l)return r.a.createElement("div",{className:"text-red-500 font-bold text-center mx-auto"},"Oops! ",c.message);var m=f(a);return r.a.createElement("section",{className:"text-gray-400 bg-gray-900 body-font overflow-hidden"},r.a.createElement("div",{className:"container px-5 py-24 mx-auto"},r.a.createElement("div",{className:"lg:w-4/5 mx-auto flex flex-wrap"},r.a.createElement("img",{alt:a.name,className:"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",src:a.image}),r.a.createElement("div",{className:"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"},r.a.createElement("h2",{className:"text-sm title-font text-gray-500 tracking-widest"},a.category),r.a.createElement("h1",{className:"text-white text-3xl title-font font-medium mb-8"},a.name),r.a.createElement("p",{className:"leading-relaxed"},a.description_long),r.a.createElement("div",{className:"flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"}),r.a.createElement("div",{className:"flex"},r.a.createElement("span",{className:"title-font font-medium text-2xl text-white"},m),r.a.createElement(h,{product:a}),r.a.createElement(v,{product:a}))))))}function y(){var e=new URLSearchParams(Object(g.f)().search).get("session_id"),t=Object(s.useQuery)("Result",function(){return e?o()("/api/checkout-sessions/".concat(e)).then(function(e){return e.data}):null}),a=t.data,n=t.isLoading,l=t.isError;if(n)return r.a.createElement(u,null);if(!a&&!n)return r.a.createElement("div",{className:"text-white font-bold text-center mx-auto"},"No purchase found.");if(l)return r.a.createElement("div",{className:"text-red-500 font-bold text-center mx-auto"},"Error loading result page");var c=Object(d.b)({value:a.amount_total,currency:a.currency,language:navigator.language});return r.a.createElement("section",{className:"text-gray-400 bg-gray-900 body-font"},r.a.createElement("div",{className:"container px-5 py-24 mx-auto"},r.a.createElement("div",{className:"text-center mb-20"},r.a.createElement("h1",{className:"sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4"},"Payment Accepted!"),r.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-xl mx-auto"},"Below is your order summary. The items will be shipped to you within the next week."),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-xl text-indigo-400 tracking-widest font-medium title-font mb-1"},"Order Total: ",c),r.a.createElement("h2",{className:"text-xl text-indigo-400 tracking-widest font-medium title-font mb-1"},"Email: ",a.customer_details.email))))}var N=a(55),k=a(22),C=a(34),j=a.n(C),O=a(21),M=a.n(O),S=a(56);function I(){var e=Object(d.c)(),t=e.redirectToCheckout,a=e.cartDetails;function n(){return(n=Object(S.a)(M.a.mark(function e(){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/api/checkout-sessions",a).then(function(e){return e.data}).catch(function(e){b.b.error("Checkout failed!"),console.log("Error during checkout: ",e)});case 2:(n=e.sent)&&t({sessionId:n.id});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(){return n.apply(this,arguments)}}function L(e){var t=e.cartItem,a=Object(d.c)().setItemQuantity;return r.a.createElement("div",{className:"flex w-full"},r.a.createElement("div",{className:"flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 w-full justify-between"},r.a.createElement("div",{className:"flex"},r.a.createElement("img",{className:"h-16 w-16 rounded-full object-cover mx-1",src:t.image,alt:t.name}),r.a.createElement("p",{className:"text-gray-600 text-lg mx-2"},r.a.createElement("span",{className:"font-bold"},t.name)," ",r.a.createElement("br",null),f(t)," x ",t.quantity)),r.a.createElement("div",null,r.a.createElement("input",{style:{width:50},className:"border-solid border-2",type:"number",value:t.quantity,onChange:function(e){a(t.sku,e.target.value)},min:0}))))}function P(e){var t=e.isOpen,a=e.toggleModal,n=Object(d.c)(),l=n.formattedTotalPrice,c=n.cartCount,m=n.cartDetails,o=I(),i=Object.keys(m).map(function(e){return m[e]});return r.a.createElement(j.a,{isOpen:t,onRequestClose:a,contentLabel:"Cart Modal",closeTimeoutMS:500},r.a.createElement("div",{className:"flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800"},r.a.createElement("div",{className:"bg-white rounded-lg w-80 sm:w-1/2 md:w-2/3 lg:w-1/2"},r.a.createElement("div",{className:"flex flex-col items-start p-4 full m"},r.a.createElement("div",{className:"flex items-center w-full mb-4"},r.a.createElement("div",{className:"text-gray-900 font-medium text-lg"},"Cart Summary: ",l," (",c,")")),r.a.createElement("hr",null),i.map(function(e){return r.a.createElement(L,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"ml-auto mt-4"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",style:{marginRight:4},onClick:o},"Checkout Now"),r.a.createElement("button",{className:"bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:a},"Still Shopping"))))))}function A(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 470 470",width:50,height:50},r.a.createElement("path",{d:"M462.5 242.5a7.5 7.5 0 01-7.5-7.5c0-38.635-88.401-80-220-80S15 196.365 15 235a7.5 7.5 0 01-15 0c0-26.693 25.372-51.152 71.441-68.872C115.249 149.279 173.335 140 235 140s119.751 9.279 163.559 26.128C444.628 183.848 470 208.307 470 235a7.5 7.5 0 01-7.5 7.5z",fill:"#082947"}),r.a.createElement("path",{d:"M121.243 439.522a7.465 7.465 0 01-3.743-1.006c-23.118-13.348-31.614-47.55-23.924-96.306 7.312-46.363 28.319-101.307 59.152-154.711 30.833-53.403 67.912-99.068 104.407-128.582 38.38-31.037 72.247-40.78 95.365-27.434a7.5 7.5 0 01-7.5 12.99C311.544 25.154 231.516 81.033 165.718 195 99.919 308.968 91.542 406.209 125 425.526a7.5 7.5 0 01-3.757 13.996z",fill:"#274b6d"}),r.a.createElement("path",{d:"M329.625 444.347c-20.431.002-45.329-11.299-72.49-33.264-36.495-29.515-73.574-75.179-104.407-128.583-30.833-53.404-51.84-108.348-59.152-154.71-7.689-48.757.807-82.959 23.924-96.306a7.5 7.5 0 017.5 12.99c-17.112 9.88-23.166 39.396-16.607 80.979 7.032 44.588 27.391 97.698 57.325 149.547 57.217 99.103 125.197 154.279 163.955 154.285 5.813.001 10.963-1.239 15.327-3.759a7.5 7.5 0 017.5 12.99c-6.757 3.902-14.437 5.831-22.875 5.831z",fill:"#6da8d6"}),r.a.createElement("path",{d:"M235 330c-61.666 0-119.752-9.279-163.559-26.128C25.372 286.153 0 261.693 0 235c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5c0 38.635 88.401 80 220 80s220-41.365 220-80c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5c0 26.693-25.372 51.153-71.441 68.872C354.752 320.721 296.666 330 235 330z",fill:"#082947"}),r.a.createElement("circle",{cx:"49.397",cy:"185.057",r:20,fill:"#6da8d6"}),r.a.createElement("circle",{cx:"284.949",cy:"421.749",r:"19.997",fill:"#f2484b"}),r.a.createElement("circle",{cx:"98.346",cy:"98.543",r:"19.997",fill:"#f2484b"}),r.a.createElement("circle",{cx:235,cy:235,r:45,fill:"#f48205"}),r.a.createElement("path",{d:"M140.375 444.347c-8.44 0-16.116-1.928-22.875-5.83a7.5 7.5 0 017.5-12.99c33.458 19.32 113.483-36.56 179.282-150.526 29.935-51.849 50.293-104.959 57.325-149.547 6.558-41.583.505-71.099-16.607-80.979a7.5 7.5 0 017.5-12.99c23.118 13.347 31.614 47.549 23.924 96.306-7.312 46.362-28.319 101.306-59.152 154.71-30.833 53.404-67.912 99.068-104.407 128.583-27.159 21.962-52.06 33.263-72.49 33.263z",fill:"#274b6d"}),r.a.createElement("path",{d:"M348.757 439.522A7.5 7.5 0 01345 425.526c33.458-19.317 25.081-116.559-40.718-230.526S158.458 25.158 125 44.474a7.5 7.5 0 01-7.5-12.99c23.119-13.348 56.986-3.604 95.365 27.434 36.496 29.514 73.575 75.179 104.407 128.582 30.833 53.404 51.84 108.348 59.152 154.711 7.689 48.756-.807 82.958-23.924 96.306a7.474 7.474 0 01-3.743 1.005z",fill:"#6da8d6"}),r.a.createElement("circle",{cx:"371.654",cy:"98.543",r:"19.997",fill:"#6da8d6"}))}function R(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 450.297 450.297",height:20,width:20,fill:"#fff"},r.a.createElement("path",{d:"M450.297 105.211v-30H326.751l-7.347-45h31.235v-30h-66.53l12.245 75H0l25.888 158.454c2.833 17.282 19.479 31.422 36.992 31.422h264.474l8.98 55H30.993v30h340.636l-13.878-85h92.545v-30h-97.443l-8.222-50.358h105.665v-30H339.734l-8.085-49.518h118.648z"}),r.a.createElement("circle",{cx:"65.993",cy:"415.086",r:35}),r.a.createElement("circle",{cx:"321.593",cy:"415.086",r:35}))}function T(){var e=Object(d.c)(),t=e.formattedTotalPrice,a=e.cartCount,n=r.a.useState(!1),l=Object(k.a)(n,2),c=l[0],m=l[1],o=function(){return m(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{onClick:o,className:"md:ml-auto flex flex-wrap items-center text-base justify-center"},r.a.createElement("span",{className:"mr-5 hover:text-white flex items-center"},r.a.createElement(R,null),r.a.createElement("span",{className:"ml-3"},t," (",a,")"))),r.a.createElement(P,{isOpen:c,toggleModal:o}))}function z(){var e=Object(d.c)().cartCount,t=I();return r.a.createElement("button",{className:"inline-flex items-center bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-white mt-4 md:mt-0",onClick:t,disabled:!e},"Go To Checkout",r.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"})))}function B(){return r.a.createElement("header",{className:"text-gray-400 bg-gray-900 body-font"},r.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},r.a.createElement(i.b,{to:"/",className:"flex title-font font-medium items-center text-white mb-4 md:mb-0"},r.a.createElement("span",{className:"flex items-center justify-center ml-3 text-xl"},r.a.createElement(A,null),r.a.createElement("span",{className:"inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider"},"React Shopper"))),r.a.createElement(T,null),r.a.createElement(z,null)))}j.a.setAppElement("#root");var Q=new s.QueryClient,_=Object(N.a)("pk_test_a3jPwDxZY7BixLRkPZth4CFl");var D=function(){return r.a.createElement(s.QueryClientProvider,{client:Q},r.a.createElement(d.a,{mode:"checkout-session",stripe:_,currency:"USD"},r.a.createElement(i.a,null,r.a.createElement(B,null),r.a.createElement(b.a,{position:"bottom-center"}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:E}),r.a.createElement(g.a,{path:"/result",component:y}),r.a.createElement(g.a,{path:"/:productId",component:w})))))};c.a.render(r.a.createElement(D,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(103)}},[[64,1,2]]]);
//# sourceMappingURL=main.966de7c7.chunk.js.map