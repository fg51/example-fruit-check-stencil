import{r as o,h as t,H as r}from"./p-5f108aff.js";import{g as e}from"./p-6c421054.js";const i=class{constructor(t){o(this,t),this.translucent=!1}render(){const o=e(this),i=this.translucent;return t(r,{role:"contentinfo",class:{[o]:!0,["footer-"+o]:!0,"footer-translucent":i,["footer-translucent-"+o]:i}},"ios"===o&&i&&t("div",{class:"footer-background"}),t("slot",null))}};i.style={ios:"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}"};export{i as ion_footer}