"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[9924],{9924:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(885),r=a(8214),i=a(5861),s=a(2791),c=a(7604),l=a(3062),u=(l.YU,l.pJ,l.eV,l.US,l.tH),o=(l.Y2,a(1842)),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function p(e){var t=e.kcContext,a=e.i18n,l=e.doFetchDefaultThemeResources,p=void 0===l||l,m=e.Template,h=d(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),f=t.url,b=a.msg,y=a.msgStr,k=t.authenticators,v=t.challenge,g=t.shouldDisplayAuthenticators,E=t.userVerification,w=t.rpId,C=Number(t.createTimeout),S="true"==t.isUserIdentified,I=(0,o.O)((0,i.Z)((0,r.Z)().mark((function e(){var t,a,n,i,s,c,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return");case 2:if(t=k.authenticators.map((function(e){return{id:u.parse(e.credentialId,{loose:!0}),type:"public-key"}})),window.PublicKeyCredential){e.next=7;break}return q(y("webauthn-unsupported-browser-text")),A(),e.abrupt("return");case 7:return a={rpId:w,challenge:u.parse(v,{loose:!0})},0!==C&&(a.timeout=1e3*C),t.length&&(a.allowCredentials=t),"not specified"!==E&&(a.userVerification=E),e.prev=11,e.next=14,navigator.credentials.get({publicKey:a});case 14:if((n=e.sent)&&"public-key"==n.type){e.next=17;break}return e.abrupt("return");case 17:if("authenticatorData"in(i=n).response){e.next=20;break}return e.abrupt("return");case 20:s=i.response,c=s.clientDataJSON,l=s.authenticatorData,o=s.signature,D(u.stringify(new Uint8Array(c),{pad:!1})),B(u.stringify(new Uint8Array(l),{pad:!1})),H(u.stringify(new Uint8Array(o),{pad:!1})),V(i.id),G(u.stringify(new Uint8Array(s.userHandle),{pad:!1})),A(),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(11),q(String(e.t0)),A();case 36:case"end":return e.stop()}}),e,null,[[11,32]])})))),N=(0,s.useRef)(null),A=(0,o.O)((function(){N.current.submit()})),O=(0,s.useState)(""),x=(0,n.Z)(O,2),W=x[0],D=x[1],F=(0,s.useState)(""),U=(0,n.Z)(F,2),L=U[0],B=U[1],P=(0,s.useState)(""),Z=(0,n.Z)(P,2),T=Z[0],H=Z[1],J=(0,s.useState)(""),j=(0,n.Z)(J,2),R=j[0],V=j[1],Y=(0,s.useState)(""),K=(0,n.Z)(Y,2),_=K[0],G=K[1],M=(0,s.useState)(""),Q=(0,n.Z)(M,2),X=Q[0],q=Q[1];return s.createElement(m,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:p},h),{headerNode:b("webauthn-login-title"),formNode:s.createElement("div",{id:"kc-form-webauthn",className:(0,c.W)(h.kcFormClass)},s.createElement("form",{id:"webauth",action:f.loginAction,ref:N,method:"post"},s.createElement("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON",value:W}),s.createElement("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData",value:L}),s.createElement("input",{type:"hidden",id:"signature",name:"signature",value:T}),s.createElement("input",{type:"hidden",id:"credentialId",name:"credentialId",value:R}),s.createElement("input",{type:"hidden",id:"userHandle",name:"userHandle",value:_}),s.createElement("input",{type:"hidden",id:"error",name:"error",value:X})),s.createElement("div",{className:(0,c.W)(h.kcFormGroupClass)},k&&s.createElement("form",{id:"authn_select",className:(0,c.W)(h.kcFormClass)},k.authenticators.map((function(e){return s.createElement("input",{type:"hidden",name:"authn_use_chk",value:e.credentialId,key:e.credentialId})}))),k&&g&&s.createElement(s.Fragment,null,k.authenticators.length>1&&s.createElement("p",{className:(0,c.W)(h.kcSelectAuthListItemTitle)},b("webauthn-available-authenticators")),s.createElement("div",{className:(0,c.W)(h.kcFormClass)},k.authenticators.map((function(e){var t;return s.createElement("div",{id:"kc-webauthn-authenticator",className:(0,c.W)(h.kcSelectAuthListItemClass)},s.createElement("div",{className:(0,c.W)(h.kcSelectAuthListItemIconClass)},s.createElement("i",{className:(0,c.W)(null!==(t=h[e.transports.iconClass])&&void 0!==t?t:h.kcWebAuthnDefaultIcon,h.kcSelectAuthListItemIconPropertyClass)})),s.createElement("div",{className:(0,c.W)(h.kcSelectAuthListItemBodyClass)},s.createElement("div",{id:"kc-webauthn-authenticator-label",className:(0,c.W)(h.kcSelectAuthListItemHeadingClass)},e.label),e.transports&&e.transports.displayNameProperties.length&&s.createElement("div",{id:"kc-webauthn-authenticator-transport",className:(0,c.W)(h.kcSelectAuthListItemDescriptionClass)},e.transports.displayNameProperties.map((function(t,a){return s.createElement(s.Fragment,null,s.createElement("span",null,b(t)),a<e.transports.displayNameProperties.length-1&&s.createElement("span",null,", "))}))),s.createElement("div",{className:(0,c.W)(h.kcSelectAuthListItemDescriptionClass)},s.createElement("span",{id:"kc-webauthn-authenticator-created-label"},b("webauthn-createdAt-label")),s.createElement("span",{id:"kc-webauthn-authenticator-created"},e.createdAt))),s.createElement("div",{className:(0,c.W)(h.kcSelectAuthListItemFillClass)}))})))),s.createElement("div",{id:"kc-form-buttons",className:(0,c.W)(h.kcFormButtonsClass)},s.createElement("input",{id:"authenticateWebAuthnButton",type:"button",onClick:I,autoFocus:!0,value:y("webauthn-doAuthenticate"),className:(0,c.W)(h.kcButtonClass,h.kcButtonPrimaryClass,h.kcButtonBlockClass,h.kcButtonLargeClass)}))))}))}},3062:function(e,t){function a(e,t,a){var n;if(void 0===a&&(a={}),!t.codes){t.codes={};for(var r=0;r<t.chars.length;++r)t.codes[t.chars[r]]=r}if(!a.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var i=e.length;"="===e[i-1];)if(--i,!a.loose&&!((e.length-i)*t.bits&7))throw new SyntaxError("Invalid padding");for(var s=new(null!=(n=a.out)?n:Uint8Array)(i*t.bits/8|0),c=0,l=0,u=0,o=0;o<i;++o){var d=t.codes[e[o]];if(void 0===d)throw new SyntaxError("Invalid character "+e[o]);l=l<<t.bits|d,(c+=t.bits)>=8&&(c-=8,s[u++]=255&l>>c)}if(c>=t.bits||255&l<<8-c)throw new SyntaxError("Unexpected end of data");return s}function n(e,t,a){void 0===a&&(a={});for(var n=a.pad,r=void 0===n||n,i=(1<<t.bits)-1,s="",c=0,l=0,u=0;u<e.length;++u)for(l=l<<8|255&e[u],c+=8;c>t.bits;)c-=t.bits,s+=t.chars[i&l>>c];if(c&&(s+=t.chars[i&l<<t.bits-c]),r)for(;s.length*t.bits&7;)s+="=";return s}var r={chars:"0123456789ABCDEF",bits:4},i={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},s={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},c={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},l={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},u={parse:function(e,t){return a(e.toUpperCase(),r,t)},stringify:function(e,t){return n(e,r,t)}},o={parse:function(e,t){return void 0===t&&(t={}),a(t.loose?e.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):e,i,t)},stringify:function(e,t){return n(e,i,t)}},d={parse:function(e,t){return a(e,s,t)},stringify:function(e,t){return n(e,s,t)}},p={parse:function(e,t){return a(e,c,t)},stringify:function(e,t){return n(e,c,t)}},m={parse:function(e,t){return a(e,l,t)},stringify:function(e,t){return n(e,l,t)}},h={parse:a,stringify:n};t.YU=u,t.pJ=o,t.eV=d,t.US=p,t.tH=m,t.Y2=h}}]);
//# sourceMappingURL=9924.88290052.chunk.js.map