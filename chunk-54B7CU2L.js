import{B as e,w as c}from"./chunk-LQWHXOTZ.js";import{ba as n,ha as p}from"./chunk-CL6NW3CB.js";var m=(()=>{let t=class t{constructor(){this._HttpClient=p(c)}getAllProducts(r=1){return this._HttpClient.get(`${e.baseUrl}/api/v1/products?page=${r}`)}getSepicificProduct(r){return this._HttpClient.get(`${e.baseUrl}/api/v1/products/${r}`)}getGroupProduct(r,o){return this._HttpClient.get(`${e.baseUrl}/api/v1/products?${r}=${o}`)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{m as a};
