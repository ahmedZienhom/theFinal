import{a as p}from"./chunk-G5KA7DMQ.js";import{B as r,w as c}from"./chunk-7RJWTQJR.js";import{ba as i,ha as n}from"./chunk-CL6NW3CB.js";var f=(()=>{let t=class t{constructor(){this._HttpClient=n(c),this.token=localStorage.getItem("userToken")||sessionStorage.getItem("userToken"),this.code=p(this.token)}checkOut(o,e){return this._HttpClient.post(`${r.baseUrl}/api/v1/orders/checkout-session/${o}?url=${r.url}`,{shippingAddress:e})}getOrders(){return this._HttpClient.get(`${r.baseUrl}/api/v1/orders/user/${this.code.id}`)}checkOutHome(o,e){return this._HttpClient.post(`${r.baseUrl}/api/v1/orders/${o}`,{shippingAddress:e})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{f as a};
