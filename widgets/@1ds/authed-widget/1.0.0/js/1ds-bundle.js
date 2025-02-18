System.register(["react"],function(c,O){"use strict";var f;return{setters:[o=>{f=o.default}],execute:function(){c("default",R);var o={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=f,m=Symbol.for("react.element"),a=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,x=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,l){var r,s={},i=null,_=null;l!==void 0&&(i=""+l),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(_=e.ref);for(r in e)y.call(e,r)&&!v.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m,type:t,key:i,ref:_,props:s,_owner:x.current}}n.Fragment=a,n.jsx=p,n.jsxs=p,o.exports=n;var u=o.exports;function R(t){return u.jsx(u.Fragment,{children:u.jsx("p",{children:"My component from authed widget is mounted!"})})}}}});
