import{r as t,h as o}from"./p-5f108aff.js";const n=class{constructor(o){t(this,o),this.state=!1}formattedName(){return this.name?this.name.substr(0,1).toUpperCase()+this.name.substr(1).toLowerCase():""}render(){return[o("ion-header",null,o("ion-toolbar",{color:"primary"},o("ion-buttons",{slot:"start"},o("ion-back-button",{defaultHref:"/"})),o("ion-title",null,"Profile: ",this.name))),o("ion-content",{class:"ion-padding"},o("p",null,Math.random()<.5?"Hello":"Hola","! My name is ",this.formattedName(),". My name was passed in through a route param!"),o("ion-item",null,o("ion-label",null,"Setting (",this.state.toString(),")"),o("ion-toggle",{checked:this.state,onIonChange:t=>this.state=t.detail.checked})))]}};n.style="";export{n as app_profile}