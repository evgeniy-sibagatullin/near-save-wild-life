(this["webpackJsonpnear-save-wild-life"]=this["webpackJsonpnear-save-wild-life"]||[]).push([[0],{159:function(e,t,n){},164:function(e,t){},174:function(e,t){},192:function(e,t){},227:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(148),s=n.n(r),o=n(12),i=n(32),l=n(7),j=(n(159),Object({NODE_ENV:"production",PUBLIC_URL:"/near-save-wild-life",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"swl-contract.market_vgnsbg.testnet");var u=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:j,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:j,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},d=n(98),b=n(67),x=u("testnet");function O(){return(O=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.connect)(Object.assign({deps:{keyStore:new d.keyStores.BrowserLocalStorageKeyStore}},x));case 2:t=e.sent,window.walletConnection=new d.WalletConnection(t,null),window.accountId=window.walletConnection.getAccountId(),window.contract=new d.Contract(window.walletConnection.account(),x.contractName,{viewMethods:["getAnimal","getAnimals"],changeMethods:["donateOneNear","setAnimal","deleteAnimal","resetAnimals"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){window.walletConnection.requestSignIn(x.contractName).then()}function f(){window.walletConnection.signOut(),window.location.reload()}var w=n(238),g=n(242),v=n(240),N=n(235),y=n(245),C=n(1),k=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(v.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(C.jsxs)(C.Fragment,{children:[n," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(C.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(v.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(v.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(v.a.Divider,{}),Object(C.jsxs)(v.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},I=n(50),S=(n(222),function(){return Object(C.jsx)(I.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),A=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},F=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T={text:""};A.defaultProps=T,F.defaultProps=T;var E=n(2),P=n(149),D=n(239),U=n(241),_=n(151),R=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],u=i[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),h=m[0],f=m[1],w=Object(c.useState)(!1),g=Object(l.a)(w,2),v=g[0],N=g[1],y=function(){return N(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(P.a,{onClick:function(){return N(!0)},variant:"dark",className:"rounded-pill px-0 bi bi-plus",style:{width:"38px"}}),Object(C.jsxs)(D.a,{show:v,onHide:y,centered:!0,children:[Object(C.jsx)(D.a.Header,{closeButton:!0,children:Object(C.jsx)(D.a.Title,{children:"New Animal"})}),Object(C.jsx)(U.a,{children:Object(C.jsxs)(D.a.Body,{children:[Object(C.jsx)(_.a,{controlId:"inputName",label:"Animal name",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of animal"})}),Object(C.jsx)(_.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)}})}),Object(C.jsx)(_.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(U.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(C.jsx)(_.a,{controlId:"inputPopulation",label:"Population",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Population",onChange:function(e){f(e.target.value)}})})]})}),Object(C.jsxs)(D.a.Footer,{children:[Object(C.jsx)(P.a,{variant:"outline-secondary",onClick:y,children:"Close"}),Object(C.jsx)(P.a,{variant:"dark",disabled:!(r&&j&&x&&h),onClick:function(){t({name:r,image:j,description:x,population:h}),y()},children:"Save animal"})]})]})]})},L=n(150),B=n(244),H=n(236),W=function(e){var t=e.animal,n=e.donate,c=e.deleteAnimal,a=t.id,r=t.name,s=t.description,o=t.image,i=t.population,l=t.owner,j=t.donation,u=window.walletConnection.account().accountId===l;return Object(C.jsx)(L.a,{children:Object(C.jsxs)(B.a,{className:" h-100",children:[Object(C.jsx)(B.a.Header,{children:Object(C.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:l}),Object(C.jsxs)(H.a,{bg:"secondary",className:"ms-auto",children:[j," Donated"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:o,alt:r,style:{objectFit:"cover"}})}),Object(C.jsxs)(B.a.Body,{className:"d-flex  flex-column text-center",children:[Object(C.jsx)(B.a.Title,{children:r}),Object(C.jsx)(B.a.Text,{className:"flex-grow-1 ",children:s}),Object(C.jsx)(B.a.Text,{className:"text-secondary",children:Object(C.jsxs)("span",{children:["Population: ",i]})}),u?Object(C.jsx)(P.a,{variant:"outline-dark",onClick:function(){c(a,l)},className:"w-100 py-3 btn-danger",children:"Delete animal"}):Object(C.jsx)(P.a,{variant:"outline-dark",onClick:function(){n(a)},className:"w-100 py-3",children:"Donate One NEAR"})]})]})})},M=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},K=n(237),z=n(243),J=1e14;function q(e){return V.apply(this,arguments)}function V(){return(V=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.donateOneNear({id:t},J,Object(b.parseNearAmount)("1"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.contract.deleteAnimal({id:t,owner:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],u=s[1],d=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=a,e.next=5,window.contract.getAnimals();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),b=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(z.a)(),window.contract.setAnimal({animal:n})).then((function(){d()})),Object(I.b)(Object(C.jsx)(A,{text:"Animal added successfully."}))}catch(c){console.log({error:c}),Object(I.b)(Object(C.jsx)(F,{text:"Failed to create an animal."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t).then((function(){return d()}));case 3:Object(I.b)(Object(C.jsx)(A,{text:"Donated successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(I.b)(Object(C.jsx)(F,{text:"Failed to donate"}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t,n).then((function(){return d()}));case 3:Object(I.b)(Object(C.jsx)(A,{text:"Deleted successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(I.b)(Object(C.jsx)(F,{text:"Failed to delete"}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d().then()}),[d]),Object(C.jsx)(C.Fragment,{children:j?Object(C.jsx)(M,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Save Wild Life"}),Object(C.jsx)(R,{save:b})]}),Object(C.jsx)(K.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(C.jsx)(W,{animal:Object(E.a)({},e),donate:x,deleteAnimal:O},e.id)}))})]})})},Y=function(e){var t=e.login,n=e.coverImg;return t?Object(C.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(C.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(C.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(C.jsx)("img",{src:n,alt:""})}),Object(C.jsx)("p",{children:"Please connect your wallet to continue."}),Object(C.jsx)(P.a,{onClick:t,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(C.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null},Z=n.p+"static/media/coverImg.478d1a92.jpg";var $=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,p();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[e.accountId]);return Object(c.useEffect)((function(){s().then()}),[s]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S,{}),e.accountId?Object(C.jsxs)(w.a,{fluid:"md",children:[Object(C.jsx)(g.a,{className:"justify-content-end pt-3 pb-5",children:Object(C.jsx)(g.a.Item,{children:Object(C.jsx)(k,{address:e.accountId,amount:a,symbol:"NEAR",destroy:f})})}),Object(C.jsx)("main",{children:Object(C.jsx)(X,{})})]}):Object(C.jsx)(Y,{login:h,coverImg:Z})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(228),n(225),n(226);window.nearInitPromise=function(){return O.apply(this,arguments)}().then((function(){s.a.createRoot(document.getElementById("root")).render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)($,{})}))})).catch(console.error),ee()}},[[227,1,2]]]);
//# sourceMappingURL=main.1e649335.chunk.js.map