"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[747],{9743:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(4165),s=r(5861),a=r(9439),c=r(2791),i=r(7689),o=r(3373),l=r(3999),d=r(2921),u=r(184);function h(e){var n=(0,c.useRef)(),r=e.center,t=e.zoom;return(0,c.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:r,zoom:t});new window.google.maps.Marker({position:r,map:e})}),[r,t]),(0,u.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})}var p=r(5434),f=r(9895),m=r(3108),x=r(9508);function j(e){var n=(0,x.x)(),r=n.isLoading,i=n.error,j=n.sendRequest,v=n.clearError,Z=(0,c.useContext)(m.V),k=(0,c.useState)(!1),C=(0,a.Z)(k,2),g=C[0],E=C[1],w=(0,c.useState)(!1),N=(0,a.Z)(w,2),_=N[0],y=N[1],b=function(){return y(!1)},I=function(){return E(!1)},D=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!1),n.prev=1,n.next=4,j("brandtharrison.huskisites.com"+"/api/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+Z.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{error:i,onClear:v}),(0,u.jsx)(d.Z,{show:_,onCancel:b,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,u.jsx)(l.Z,{onClick:b,children:"CLOSE"}),children:(0,u.jsx)("div",{className:"map-container",children:(0,u.jsx)(h,{center:e.coordinates,zoom:16})})}),(0,u.jsx)(d.Z,{show:g,onCancel:I,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{onClick:I,inverse:!0,children:"CANCEL"}),(0,u.jsx)(l.Z,{onClick:D,danger:!0,children:"DELETE"})]}),children:(0,u.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,u.jsx)("li",{className:"place-item",children:(0,u.jsxs)(o.Z,{className:"place-item__content",children:[r&&(0,u.jsx)(f.Z,{asOverlay:!0}),(0,u.jsx)("div",{className:"place-item__image",children:(0,u.jsx)("img",{src:"brandtharrison.huskisites.com"+"/".concat(e.image),alt:e.title})}),(0,u.jsxs)("div",{className:"place-item__info",children:[(0,u.jsx)("h2",{children:e.title}),(0,u.jsx)("h3",{children:e.address}),(0,u.jsx)("p",{children:e.description})]}),(0,u.jsxs)("div",{className:"place-item__actions",children:[(0,u.jsx)(l.Z,{inverse:!0,onClick:function(){return y(!0)},children:"VIEW ON MAP"}),Z.userId===e.creatorId&&(0,u.jsx)(l.Z,{to:"/places/".concat(e.id),children:"EDIT"}),Z.userId===e.creatorId&&(0,u.jsx)(l.Z,{onClick:function(){return E(!0)},danger:!0,children:"DELETE"})]})]})})]})}function v(e){return 0===e.items.length?(0,u.jsx)("div",{className:"place-list center",children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,u.jsx)(l.Z,{to:"/places/new",children:"Share Place"})]})}):(0,u.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,u.jsx)(j,{id:n.id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.deleteUpdate},n.id)}))})}function Z(){var e=(0,c.useState)(),n=(0,a.Z)(e,2),r=n[0],o=n[1],l=(0,x.x)(),d=l.isLoading,h=l.error,m=l.sendRequest,j=l.clearErrorAndMove,Z=(0,i.UO)().userId;return(0,c.useEffect)((function(){function e(){return(e=(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("brandtharrison.huskisites.com"+"/api/places/user/".concat(Z));case 3:n=e.sent,o(n.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m,Z]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{error:h,onClear:function(){j("/")}}),d&&(0,u.jsx)("div",{className:"center",children:(0,u.jsx)(f.Z,{asOverlay:!0})}),!d&&r&&(0,u.jsx)(v,{items:r,deleteUpdate:function(e){o((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}},3373:function(e,n,r){r.d(n,{Z:function(){return s}});r(2791);var t=r(184),s=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}}}]);
//# sourceMappingURL=747.8a32e88c.chunk.js.map