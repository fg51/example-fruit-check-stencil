import{r as t,h as i,H as n,d as e,c as o,w as r}from"./p-5f108aff.js";import{g as s,c as a}from"./p-6c421054.js";import{e as l,f as c,p as h,b as d}from"./p-56dbf9e6.js";import"./p-7261e130.js";import{f as p,g,h as u}from"./p-e210814f.js";import{o as b,c as m,h as f}from"./p-5b51185b.js";const v=class{constructor(i){t(this,i)}render(){return i("ion-footer",null,"作成日: 2020-05-26 作成者: Alice 承認者: Bob")}};v.style=":host{display:block}";const x=class{constructor(i){t(this,i),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}isClickable(){return void 0!==this.href||this.button}renderCard(t){const n=this.isClickable();if(!n)return[i("slot",null)];const{href:e,routerDirection:o}=this,r=n?void 0===e?"button":"a":"div";return i(r,Object.assign({},"button"===r?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target},{class:"card-native",disabled:this.disabled,onClick:t=>b(e,t,o)}),i("slot",null),n&&"md"===t&&i("ion-ripple-effect",null))}render(){const t=s(this);return i(n,{class:Object.assign(Object.assign({[t]:!0},m(this.color)),{"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(t))}};x.style={ios:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background, var(--ion-background-color, #fff));--color:var(--ion-color-step-600, #666666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}"};const k=class{constructor(i){t(this,i)}render(){const t=s(this);return i(n,{class:{[t]:!0,["card-content-"+t]:!0}})}};k.style={ios:"ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}"};const w=class{constructor(i){t(this,i),this.inputId="ion-input-"+y++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const i=t.target;i&&(this.value=i.value||""),this.ionInput.emit(t)},this.onBlur=()=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},this.onFocus=()=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},this.onKeydown=t=>{this.shouldClearOnEdit()&&(this.didBlurAfterEdit&&this.hasValue()&&"Enter"!==t.key&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation()),this.value="",this.nativeInput&&(this.nativeInput.value="")},this.ionInput=e(this,"ionInput",7),this.ionChange=e(this,"ionChange",7),this.ionBlur=e(this,"ionBlur",7),this.ionFocus=e(this,"ionFocus",7),this.ionStyle=e(this,"ionStyle",7)}debounceChanged(){this.ionChange=l(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.ionChange.emit({value:null==this.value?this.value:this.value.toString()})}connectedCallback(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}shouldClearOnEdit(){const{type:t,clearOnEdit:i}=this;return void 0===i?"password"===t:i}getValue(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=s(this),e=this.getValue(),o=this.inputId+"-lbl",r=c(this.el);return r&&(r.id=o),i(n,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},m(this.color)),{[t]:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus})},i("input",{class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":o,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:e,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&i("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))}get el(){return o(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}};let y=0;w.style={ios:".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}"};const C=class{constructor(i){t(this,i),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const i=t.target,n=this.checked;this.value=i.value,n&&this.scrollable&&this.checkButton(n,i),this.checked=i},this.ionChange=e(this,"ionChange",7),this.ionSelect=e(this,"ionSelect",7),this.ionStyle=e(this,"ionStyle",7)}valueChanged(t,i){this.ionSelect.emit({value:t}),(""!==i||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const i of t)i.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await __sc_import_app("./p-78321f41.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const i=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),i&&this.addRipple(t);const n=this.valueAfterGesture;void 0!==n&&(this.ionChange.emit({value:n}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!a.getBoolean("animated",!0)||!a.getBoolean("rippleEffect",!0))return;const i=this.getButtons().find(t=>t.value===this.value),n=(i.shadowRoot||i).querySelector("ion-ripple-effect");if(!n)return;const{x:e,y:o}=h(t.event);n.addRipple(e,o).then(t=>t())}setActivated(t){this.getButtons().forEach(i=>{t?i.classList.add("segment-button-activated"):i.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const i=t.event.target,n=this.getButtons().find(t=>t.value===this.value);"ION-SEGMENT-BUTTON"===i.tagName&&(n||(this.value=i.value),this.value===i.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,i){const n=this.getIndicator(t),e=this.getIndicator(i);if(null===n||null===e)return;const o=n.getBoundingClientRect(),s=e.getBoundingClientRect(),a=`translate3d(${o.left-s.left}px, 0, 0) scaleX(${o.width/s.width})`;r(()=>{e.classList.remove("segment-button-indicator-animated"),e.style.setProperty("transform",a),e.getBoundingClientRect(),e.classList.add("segment-button-indicator-animated"),e.style.setProperty("transform","")}),this.value=i.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),i=t.findIndex(t=>t.value===this.value)+1;this.checked=t.find(t=>t.value===this.value);for(const n of t)n.classList.remove("segment-button-after-checked");i<t.length&&t[i].classList.add("segment-button-after-checked")}setNextIndex(t,i=!1){const n="rtl"===document.dir,e=this.activated,o=this.getButtons(),r=o.findIndex(t=>t.value===this.value),s=o[r];let a,l;if(-1===r)return;const c=s.getBoundingClientRect(),h=c.left,d=c.width,p=t.currentX,g=document.elementFromPoint(p,c.top+c.height/2);if(e&&!i){if(n?p>h+d:p<h){const t=r-1;t>=0&&(l=t)}else if((n?p<h:p>h+d)&&e&&!i){const t=r+1;t<o.length&&(l=t)}void 0===l||o[l].disabled||(a=o[l])}if(!e&&i&&(a=g),null!=a){if("ION-SEGMENT"===a.tagName)return!1;s!==a&&this.checkButton(s,a)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=s(this);return i(n,{onClick:this.onClick,class:Object.assign(Object.assign({},m(this.color)),{[t]:!0,"in-toolbar":f("ion-toolbar",this.el),"in-toolbar-color":f("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},i("slot",null))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}};C.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}"};let z=0;const O=class{constructor(i){t(this,i),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+z++,this.updateState=()=>{this.segmentEl&&(this.checked=this.segmentEl.value===this.value)}}connectedCallback(){const t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),t.addEventListener("ionSelect",this.updateState))}disconnectedCallback(){const t=this.segmentEl;t&&(t.removeEventListener("ionSelect",this.updateState),this.segmentEl=null)}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}render(){const{checked:t,type:e,disabled:o,hasIcon:r,hasLabel:a,layout:l}=this,c=s(this);return i(n,{"aria-disabled":o?"true":null,class:{[c]:!0,"in-toolbar":f("ion-toolbar",this.el),"in-toolbar-color":f("ion-toolbar[color]",this.el),"in-segment":f("ion-segment",this.el),"in-segment-color":f("ion-segment[color]",this.el),"segment-button-has-label":a,"segment-button-has-icon":r,"segment-button-has-label-only":a&&!r,"segment-button-has-icon-only":r&&!a,"segment-button-disabled":o,"segment-button-checked":t,["segment-button-layout-"+l]:!0,"ion-activatable":!0,"ion-activatable-instant":!0,"ion-focusable":!0}},i("button",{type:e,"aria-pressed":t?"true":null,class:"button-native",disabled:o},i("span",{class:"button-inner"},i("slot",null)),"md"===c&&i("ion-ripple-effect",null)),i("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},i("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}get el(){return o(this)}};O.style={ios:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}'};const j=(t,i)=>{if(1===t.nodeType)return(t.tagName===i.toUpperCase()?[t]:Array.from(t.querySelectorAll(i))).find(i=>i.value===t.value)},S=class{constructor(i){t(this,i),this.inputId="ion-sel-"+M++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,i,n)=>{const e=new MutationObserver(t=>{n(((t,i)=>{let n;t.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)n=j(t.addedNodes[e],i)||n})})(t,"ion-select-option"))});return e.observe(t,{childList:!0,subtree:!0}),e})(this.el,0,async()=>{this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const i=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,i.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await i.present(),i}createOverlay(t){let i=this.interface;return"action-sheet"!==i&&"popover"!==i||!this.multiple||(console.warn(`Select interface cannot be "${i}" with a multi-value select. Using the "alert" interface instead.`),i="alert"),"popover"!==i||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),i="alert"),"popover"===i?this.openPopover(t):"action-sheet"===i?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const i=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(i,n);break;case"popover":const e=t.querySelector("ion-select-popover");e&&(e.options=this.createPopoverOptions(i,n));break;case"alert":t.inputs=this.createAlertInputs(i,this.multiple?"checkbox":"radio",n)}}createActionSheetButtons(t,i){const n=t.map(t=>{const n=E(t);return{role:_(n,i,this.compareWith)?"selected":"",text:t.textContent,handler:()=>{this.value=n}}});return n.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),n}createAlertInputs(t,i,n){return t.map(t=>{const e=E(t);return{type:i,label:t.textContent||"",value:e,checked:_(e,n,this.compareWith),disabled:t.disabled}})}createPopoverOptions(t,i){return t.map(t=>{const n=E(t);return{text:t.textContent||"",value:n,checked:_(n,i,this.compareWith),disabled:t.disabled,handler:()=>{this.value=n,this.close()}}})}async openPopover(t){const i=this.interfaceOptions,n=s(this),e=this.value,o=Object.assign(Object.assign({mode:n},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],event:t,componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,value:e,options:this.createPopoverOptions(this.childOpts,e)}});return p.create(o)}async openActionSheet(){const t=s(this),i=this.interfaceOptions,n=Object.assign(Object.assign({mode:t},i),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",i.cssClass]});return g.create(n)}async openAlert(){const t=this.getLabel(),i=t?t.textContent:null,n=this.interfaceOptions,e=this.multiple?"checkbox":"radio",o=s(this),r=Object.assign(Object.assign({mode:o},n),{header:n.header?n.header:i,inputs:this.createAlertInputs(this.childOpts,e,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return u.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return c(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:I(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:t,name:e,disabled:o,isExpanded:r,value:a,el:l}=this,h=s(this),p=this.inputId+"-lbl",g=c(l);g&&(g.id=p);let u=!1,b=this.getText();""===b&&null!=t&&(b=t,u=!0),d(!0,l,e,L(a),o);const m={"select-text":!0,"select-placeholder":u},v=u?"placeholder":"text";return i(n,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":o?"true":null,"aria-expanded":""+r,"aria-labelledby":p,class:{[h]:!0,"in-item":f("ion-item",l),"select-disabled":o}},i("div",{class:m,part:v},b),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner",part:"icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:o,ref:t=>this.buttonEl=t}))}get el(){return o(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},_=(t,i,n)=>void 0!==t&&(Array.isArray(t)?t.some(t=>A(t,i,n)):A(t,i,n)),E=t=>{const i=t.value;return void 0===i?t.textContent||"":i},L=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},A=(t,i,n)=>"function"==typeof n?n(t,i):"string"==typeof n?t[n]===i[n]:Array.isArray(i)?i.includes(t):t===i,I=(t,i,n)=>void 0===i?"":Array.isArray(i)?i.map(i=>B(t,i,n)).filter(t=>null!==t).join(", "):B(t,i,n)||"",B=(t,i,n)=>{const e=t.find(t=>A(E(t),i,n));return e?e.textContent:null};let M=0;S.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}"};const D=class{constructor(i){t(this,i),this.inputId="ion-selopt-"+F++,this.disabled=!1}render(){return i(n,{role:"option",id:this.inputId,class:s(this)})}get el(){return o(this)}};let F=0;D.style=":host{display:none}";export{v as app_footer,x as ion_card,k as ion_card_content,w as ion_input,C as ion_segment,O as ion_segment_button,S as ion_select,D as ion_select_option}