import{r as t,d as r,h as i,H as e,c as n}from"./p-5f108aff.js";import{g as a}from"./p-6c421054.js";import{c as s,e as o,b as h}from"./p-56dbf9e6.js";import{c as l,h as d}from"./p-5b51185b.js";const b=class{constructor(i){t(this,i),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=t=>s(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.handleKeyboard=(t,r)=>{let i=this.step;i=i>0?i:1,i/=this.max-this.min,r||(i*=-1),"A"===t?this.ratioA=s(0,this.ratioA+i,1):this.ratioB=s(0,this.ratioB+i,1),this.updateValue()},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ionChange=r(this,"ionChange",7),this.ionStyle=r(this,"ionStyle",7),this.ionFocus=r(this,"ionFocus",7),this.ionBlur=r(this,"ionBlur",7)}debounceChanged(){this.ionChange=o(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async componentDidLoad(){const t=this.rangeSlider;t&&(this.gesture=(await __sc_import_app("./p-78321f41.js")).createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.disabled))}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const r=this.rect=this.rangeSlider.getBoundingClientRect(),i=t.currentX;let e=s(0,(i-r.left)/r.width,1);"rtl"===document.dir&&(e=1-e),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-e)<Math.abs(this.ratioB-e)?"A":"B",this.setFocus(this.pressedKnob),this.update(i)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0}update(t){const r=this.rect;let i=s(0,(t-r.left)/r.width,1);"rtl"===document.dir&&(i=1-i),this.snaps&&(i=p(c(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()}get valA(){return c(this.ratioA,this.min,this.max,this.step)}get valB(){return c(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:r,max:i}=this;this.dualKnobs?(this.ratioA=p(t.lower,r,i),this.ratioB=p(t.upper,r,i)):this.ratioA=p(t,r,i)}updateValue(){this.noUpdate=!0;const{valA:t,valB:r}=this;this.value=this.dualKnobs?{lower:Math.min(t,r),upper:Math.max(t,r)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const r=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");r&&r.focus()}}render(){const{min:t,max:r,step:n,el:s,handleKeyboard:o,pressedKnob:b,disabled:c,pin:m,ratioLower:u,ratioUpper:k}=this,f=a(this),v="rtl"===document.dir,x=v?"right":"left",w=t=>({[x]:t[x]}),y={[x]:100*u+"%",[v?"left":"right"]:100-100*k+"%"},z=[];if(this.snaps&&this.ticks)for(let i=t;i<=r;i+=n){const e=p(i,t,r),n={ratio:e,active:e>=u&&e<=k};n[x]=100*e+"%",z.push(n)}return h(!0,s,this.name,JSON.stringify(this.getValue()),c),i(e,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},l(this.color)),{[f]:!0,"in-item":d("ion-item",s),"range-disabled":c,"range-pressed":void 0!==b,"range-has-pin":m})},i("slot",{name:"start"}),i("div",{class:"range-slider",ref:t=>this.rangeSlider=t},z.map(t=>i("div",{style:w(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active}})),i("div",{class:"range-bar",role:"presentation"}),i("div",{class:"range-bar range-bar-active",role:"presentation",style:y}),g(v,{knob:"A",pressed:"A"===b,value:this.valA,ratio:this.ratioA,pin:m,disabled:c,handleKeyboard:o,min:t,max:r}),this.dualKnobs&&g(v,{knob:"B",pressed:"B"===b,value:this.valB,ratio:this.ratioB,pin:m,disabled:c,handleKeyboard:o,min:t,max:r})),i("slot",{name:"end"}))}get el(){return n(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},g=(t,{knob:r,value:e,ratio:n,min:a,max:s,disabled:o,pressed:h,pin:l,handleKeyboard:d})=>{const b=t?"right":"left";return i("div",{onKeyDown:t=>{const i=t.key;"ArrowLeft"===i||"ArrowDown"===i?(d(r,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==i&&"ArrowUp"!==i||(d(r,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===r,"range-knob-b":"B"===r,"range-knob-pressed":h,"range-knob-min":e===a,"range-knob-max":e===s},style:(()=>{const t={};return t[b]=100*n+"%",t})(),role:"slider",tabindex:o?-1:0,"aria-valuemin":a,"aria-valuemax":s,"aria-disabled":o?"true":null,"aria-valuenow":e},l&&i("div",{class:"range-pin",role:"presentation"},Math.round(e)),i("div",{class:"range-knob",role:"presentation"}))},c=(t,r,i,e)=>{let n=(i-r)*t;return e>0&&(n=Math.round(n/e)*e+r),s(r,n,i)},p=(t,r,i)=>s(0,(t-r)/(i-r),1);b.style={md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'};export{b as ion_range}