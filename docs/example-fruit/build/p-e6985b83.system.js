System.register(["./p-716ccb21.system.js"],(function(n){"use strict";var r;return{setters:[function(n){r=n.i}],execute:function(){var e;var i=function(){if(typeof window==="undefined"){return new Map}else{if(!e){var n=window;n.Ionicons=n.Ionicons||{};e=n.Ionicons.map=n.Ionicons.map||new Map}return e}};var t=n("g",(function(n){var r=f(n.src);if(r){return r}r=o(n.name,n.icon,n.mode,n.ios,n.md);if(r){return u(r)}if(n.icon){r=f(n.icon);if(r){return r}r=f(n.icon[n.mode]);if(r){return r}}return null}));var u=function(n){var e=i().get(n);if(e){return e}return r("svg/"+n+".svg")};var o=n("a",(function(n,r,e,i,t){e=(e&&a(e))==="ios"?"ios":"md";if(i&&e==="ios"){n=a(i)}else if(t&&e==="md"){n=a(t)}else{if(!n&&r&&!s(r)){n=r}if(c(n)){n=a(n)}}if(!c(n)||n.trim()===""){return null}var u=n.replace(/[a-z]|-|\d/gi,"");if(u!==""){return null}return n}));var f=function(n){if(c(n)){n=n.trim();if(s(n)){return n}}return null};var s=function(n){return n.length>0&&/(\/|\.)/.test(n)};var c=n("i",(function(n){return typeof n==="string"}));var a=function(n){return n.toLowerCase()}}}}));