import{h as _}from"./chunk-RZH2EP4W.js";import{B as p,w as x}from"./chunk-LQWHXOTZ.js";import{Eb as v,Fb as u,Gb as c,Hb as d,Ib as g,Za as f,_b as b,ac as h,ba as l,bb as r,gc as y,ha as a,ic as C,ma as m,wb as s}from"./chunk-CL6NW3CB.js";var k=(()=>{let t=class t{constructor(){this._HttpClient=a(x)}getAllBrands(){return this._HttpClient.get(`${p.baseUrl}/api/v1/brands`)}getSpecificBrand(i){return this._HttpClient.get(`${p.baseUrl}/api/v1/brands/${i}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var B=(e,t)=>t._id,F=e=>["/specific","category[in]",e];function I(e,t){if(e&1&&(c(0,"div",3)(1,"div",4),g(2,"img",5),c(3,"div",6)(4,"h2",7),b(5),d()()()()),e&2){let o=t.$implicit;r(),s("routerLink",C(4,F,o._id)),r(),s("src",o.image,f)("alt",o.name),r(3),h(" ",o.name,"")}}var z=(()=>{let t=class t{constructor(){this._BrandsService=a(k)}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:i=>{this.brandsList=i.data}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-brands"]],standalone:!0,features:[y],decls:5,vars:0,consts:[[1,"my-5"],[1,"container"],[1,"row","g-4"],[1,"col-md-4"],[1,"card","product","position-relative","overflow-hidden",3,"routerLink"],["height","400px",1,"w-100",3,"src","alt"],[1,"overlay"],[1,""]],template:function(n,S){n&1&&(c(0,"section",0)(1,"div",1)(2,"div",2),v(3,I,6,6,"div",3,B),d()()()),n&2&&(r(3),u(S.brandsList))},dependencies:[_],styles:[".overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#000;background:#00000080;color:#f1f1f1;width:100%;transition:.5s ease;opacity:0;color:#fff;font-size:20px;padding:20px;text-align:center}.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}"]});let e=t;return e})();export{z as BrandsComponent};