import{a as b}from"./chunk-KDFA2LVT.js";import"./chunk-G5KA7DMQ.js";import{c as O,d as T}from"./chunk-ITMMMUVJ.js";import{o as _,q as C}from"./chunk-7RJWTQJR.js";import{$b as o,Cb as y,Eb as v,Fb as u,Gb as t,Hb as i,Ib as f,Za as E,_b as r,ac as g,bb as e,bc as s,gc as B,ha as h,ma as S,mc as a,nc as d,oc as c,wb as I}from"./chunk-CL6NW3CB.js";var w=(l,p)=>p._id;function A(l,p){if(l&1&&(t(0,"div",10)(1,"div",11),f(2,"img",12),i(),t(3,"div",13)(4,"div",4)(5,"span",14),r(6),i(),t(7,"h3",5),r(8),i(),t(9,"p",6),r(10),a(11,"currency"),i()(),t(12,"div",4)(13,"p"),r(14),a(15,"translate"),i()()()()),l&2){let n=p.$implicit;e(2),I("src",n.product.imageCover,E)("alt",n.product.title),e(4),o(n.product.brand.name),e(2),o(n.product.title),e(2),o(c(11,7,n.price,"EGP")),e(4),s("",d(15,10,"allorders.count")," : ",n.count,"")}}function F(l,p){if(l&1&&(t(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),r(4),a(5,"translate"),t(6,"span",6),r(7),i()(),t(8,"p",7),r(9),a(10,"translate"),a(11,"date"),i(),t(12,"p",4),r(13),a(14,"translate"),i()(),t(15,"div",4)(16,"p",4),r(17),a(18,"translate"),a(19,"currency"),i(),t(20,"p",4),r(21),a(22,"translate"),i(),t(23,"p",4),r(24),a(25,"translate"),i()()(),t(26,"div",8)(27,"h3",9),r(28),a(29,"translate"),i(),v(30,A,16,12,"div",10,y),i()(),f(32,"hr")),l&2){let n=p.$implicit;e(4),g("",d(5,13,"allorders.order for")," : "),e(3),o(n.user.name),e(2),s("",d(10,15,"allorders.created at")," : ",c(11,17,n.createdAt,"mediumDate"),""),e(4),s("",d(14,20,"allorders.contact phone")," : ",n.shippingAddress.phone,""),e(4),s("",d(18,22,"allorders.total")," : ",c(19,24,n.totalOrderPrice,"EGP"),""),e(4),s("",d(22,27,"allorders.payment method")," : ",n.paymentMethodType,""),e(3),s("",d(25,29,"allorders.shepping address")," : ",n.shippingAddress.city,""),e(4),o(d(29,31,"allorders.shepping products")),e(2),u(n.cartItems)}}var U=(()=>{let p=class p{constructor(){this._OrderService=h(b)}ngOnInit(){this._OrderService.getOrders().subscribe({next:x=>{this.orders=x,this.orders.reverse()}})}};p.\u0275fac=function(m){return new(m||p)},p.\u0275cmp=S({type:p,selectors:[["app-all-orders"]],standalone:!0,features:[B],decls:6,vars:3,consts:[[1,"h1","text-center","text-capitalize"],[1,"m-3"],[1,"my-2","bg-main-light","rounded-2","p-2"],[1,"ms-2","d-flex","align-items-center","justify-content-between"],[1,""],[1,"h5"],[1,"text-main"],[1,"small"],[1,"p-2"],[1,"h2","text-center","text-main"],[1,"row","m-2"],[1,"col-1","p-0"],[1,"w-100",3,"src","alt"],[1,"col-11","d-flex","align-items-center","justify-content-between"],[1,"smal","text-main"]],template:function(m,P){m&1&&(t(0,"h2",0),r(1),a(2,"translate"),i(),t(3,"section",1),v(4,F,33,33,null,null,w),i()),m&2&&(e(),o(d(2,1,"allorders.shepped details")),e(3),u(P.orders))},dependencies:[C,_,T,O]});let l=p;return l})();export{U as AllOrdersComponent};
