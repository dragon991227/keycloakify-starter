import{c as A,r as t,j as e,a as T,F as R,_ as i}from"./index-BcsbxRU3.js";import{c as p}from"./useGetClassName-DQ4TH1ew.js";import{u as D}from"./usePrepareTemplate-Zj-0sBJu.js";import{u as W}from"./useGetClassName-7_O5JmQm.js";const{useI18n:z}=A({en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password",invalidUserMessage:"Invalid username or password. (this message was overwrite in the theme)"},fr:{alphanumericalCharsOnly:"Caractère alphanumérique uniquement",gender:"Genre",doForgotPassword:"J'ai oublié mon mot de passe",invalidUserMessage:"Nom d'utilisateur ou mot de passe invalide. (ce message a été écrasé dans le thème)"}}),O="/assets/keycloakify-logo-CaqPJ1qh.png";function d(u){const{displayInfo:a=!1,displayMessage:r=!0,displayRequiredFields:y=!1,displayWide:h=!1,showAnotherWayIfPresent:w=!0,headerNode:f,showUsernameNode:j=null,infoNode:F=null,kcContext:g,i18n:C,doUseDefaultCss:N,classes:I,children:E}=u,{getClassName:s}=W({doUseDefaultCss:N,classes:I}),{msg:m,changeLocale:P,labelBySupportedLanguageTag:_,currentLanguageTag:b}=C,{realm:v,locale:x,auth:l,url:n,message:c,isAppInitiatedAction:L}=g,{isReady:U}=D({doFetchDefaultThemeResources:N,styles:[`${n.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,`${n.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,`${n.resourcesCommonPath}/lib/zocial/zocial.css`,`${n.resourcesPath}/css/login.css`],htmlClassName:s("kcHtmlClass"),bodyClassName:s("kcBodyClass")});return t.useState(()=>{document.title=C.msgStr("loginTitle",g.realm.displayName)}),U?e.jsxs("div",{className:s("kcLoginClass"),children:[e.jsx("div",{id:"kc-header",className:s("kcHeaderClass"),children:e.jsxs("div",{id:"kc-header-wrapper",className:s("kcHeaderWrapperClass"),style:{fontFamily:'"Work Sans"'},children:[e.jsx("img",{src:`${window.kcContext===void 0?"/":window.kcContext.url.resourcesPath+"/build/"}keycloakify-logo.png`,alt:"Keycloakify logo",width:50}),m("loginTitleHtml",v.displayNameHtml),"!!!",e.jsx("img",{src:O,alt:"Keycloakify logo",width:50})]})}),e.jsxs("div",{className:p(s("kcFormCardClass"),h&&s("kcFormCardAccountClass")),children:[e.jsxs("header",{className:s("kcFormHeaderClass"),children:[v.internationalizationEnabled&&(T.assert(x!==void 0),!0)&&x.supported.length>1&&e.jsx("div",{id:"kc-locale",children:e.jsx("div",{id:"kc-locale-wrapper",className:s("kcLocaleWrapperClass"),children:e.jsxs("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[e.jsx("a",{href:"#",id:"kc-current-locale-link",children:_[b]}),e.jsx("ul",{children:x.supported.map(({languageTag:k})=>e.jsx("li",{className:"kc-dropdown-item",children:e.jsx("a",{href:"#",onClick:()=>P(k),children:_[k]})},k))})]})})}),l!==void 0&&l.showUsername&&!l.showResetCredentials?y?e.jsxs("div",{className:s("kcContentWrapperClass"),children:[e.jsx("div",{className:p(s("kcLabelWrapperClass"),"subtitle"),children:e.jsxs("span",{className:"subtitle",children:[e.jsx("span",{className:"required",children:"*"})," ",m("requiredFields")]})}),e.jsxs("div",{className:"col-md-10",children:[j,e.jsx("div",{className:s("kcFormGroupClass"),children:e.jsxs("div",{id:"kc-username",children:[e.jsx("label",{id:"kc-attempted-username",children:l==null?void 0:l.attemptedUsername}),e.jsx("a",{id:"reset-login",href:n.loginRestartFlowUrl,children:e.jsxs("div",{className:"kc-login-tooltip",children:[e.jsx("i",{className:s("kcResetFlowIcon")}),e.jsx("span",{className:"kc-tooltip-text",children:m("restartLoginTooltip")})]})})]})})]})]}):e.jsxs(e.Fragment,{children:[j,e.jsx("div",{className:s("kcFormGroupClass"),children:e.jsxs("div",{id:"kc-username",children:[e.jsx("label",{id:"kc-attempted-username",children:l==null?void 0:l.attemptedUsername}),e.jsx("a",{id:"reset-login",href:n.loginRestartFlowUrl,children:e.jsxs("div",{className:"kc-login-tooltip",children:[e.jsx("i",{className:s("kcResetFlowIcon")}),e.jsx("span",{className:"kc-tooltip-text",children:m("restartLoginTooltip")})]})})]})})]}):y?e.jsxs("div",{className:s("kcContentWrapperClass"),children:[e.jsx("div",{className:p(s("kcLabelWrapperClass"),"subtitle"),children:e.jsxs("span",{className:"subtitle",children:[e.jsx("span",{className:"required",children:"*"}),m("requiredFields")]})}),e.jsx("div",{className:"col-md-10",children:e.jsx("h1",{id:"kc-page-title",children:f})})]}):e.jsx("h1",{id:"kc-page-title",children:f})]}),e.jsx("div",{id:"kc-content",children:e.jsxs("div",{id:"kc-content-wrapper",children:[r&&c!==void 0&&(c.type!=="warning"||!L)&&e.jsxs("div",{className:p("alert",`alert-${c.type}`),children:[c.type==="success"&&e.jsx("span",{className:s("kcFeedbackSuccessIcon")}),c.type==="warning"&&e.jsx("span",{className:s("kcFeedbackWarningIcon")}),c.type==="error"&&e.jsx("span",{className:s("kcFeedbackErrorIcon")}),c.type==="info"&&e.jsx("span",{className:s("kcFeedbackInfoIcon")}),e.jsx("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:c.summary}})]}),E,l!==void 0&&l.showTryAnotherWayLink&&w&&e.jsx("form",{id:"kc-select-try-another-way-form",action:n.loginAction,method:"post",className:p(h&&s("kcContentWrapperClass")),children:e.jsx("div",{className:p(h&&[s("kcFormSocialAccountContentClass"),s("kcFormSocialAccountClass")]),children:e.jsxs("div",{className:s("kcFormGroupClass"),children:[e.jsx("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),e.jsx("a",{href:"#",id:"try-another-way",onClick:()=>(document.forms["kc-select-try-another-way-form"].submit(),!1),children:m("doTryAnotherWay")})]})})}),a&&e.jsx("div",{id:"kc-info",className:s("kcSignUpClass"),children:e.jsx("div",{id:"kc-info-wrapper",className:s("kcInfoAreaWrapperClass"),children:F})})]})})]})]}):null}const S=t.lazy(()=>i(()=>import("./Login-CJsIHcVw.js"),__vite__mapDeps([0,1,2,3]))),q=t.lazy(()=>i(()=>import("./Register-BUSs2bkn.js"),__vite__mapDeps([4,1,2,3]))),H=t.lazy(()=>i(()=>import("./RegisterUserProfile-D4YsRmAs.js"),__vite__mapDeps([5,1,2,6,3]))),V=t.lazy(()=>i(()=>import("./Terms-qIYbmiau.js"),__vite__mapDeps([7,1,2,8,3]))),G=t.lazy(()=>i(()=>import("./MyExtraPage1-CYxOjGjt.js"),__vite__mapDeps([9,1]))),M=t.lazy(()=>i(()=>import("./MyExtraPage2-BMQpB44l.js"),__vite__mapDeps([10,1]))),$=t.lazy(()=>i(()=>import("./Info-DPCiQgwV.js"),__vite__mapDeps([11,1]))),o={kcHtmlClass:"my-root-class",kcHeaderWrapperClass:"my-color my-font"};function X(u){const{kcContext:a}=u,r=z({kcContext:a});return r===null?null:e.jsx(t.Suspense,{children:(()=>{switch(a.pageId){case"login.ftl":return e.jsx(S,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"register.ftl":return e.jsx(q,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"register-user-profile.ftl":return e.jsx(H,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"terms.ftl":return e.jsx(V,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"my-extra-page-1.ftl":return e.jsx(G,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"my-extra-page-2.ftl":return e.jsx(M,{kcContext:a,i18n:r,Template:d,classes:o,doUseDefaultCss:!0});case"info.ftl":return e.jsx($,{kcContext:a,i18n:r,classes:o,Template:t.lazy(()=>i(()=>import("./Template-DI4xbJzD.js"),__vite__mapDeps([12,1,2,13,3]))),doUseDefaultCss:!0});default:return e.jsx(R,{kcContext:a,i18n:r,classes:o,Template:d,doUseDefaultCss:!0})}})()})}export{X as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Login-CJsIHcVw.js","assets/index-BcsbxRU3.js","assets/useGetClassName-DQ4TH1ew.js","assets/useGetClassName-7_O5JmQm.js","assets/Register-BUSs2bkn.js","assets/RegisterUserProfile-D4YsRmAs.js","assets/useFormValidation-B2IBiJDu.js","assets/Terms-qIYbmiau.js","assets/index-C0FNkCuM.js","assets/MyExtraPage1-CYxOjGjt.js","assets/MyExtraPage2-BMQpB44l.js","assets/Info-DPCiQgwV.js","assets/Template-DI4xbJzD.js","assets/usePrepareTemplate-Zj-0sBJu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=KcApp-B1cYS6q_.js.map
