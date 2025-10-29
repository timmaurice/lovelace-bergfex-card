function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}console.groupCollapsed("%c🏔️ BERGFEX CARD%cv1.0.0","color: orange; font-weight: bold; background: black; padding: 2px 4px; border-radius: 2px 0 0 2px;","color: white; font-weight: bold; background: dimgray; padding: 2px 4px; border-radius: 0 2px 2px 0;"),console.info("A Lovelace card to display ski resort conditions from Bergfex."),console.info("Github:  https://github.com/timmaurice/lovelace-bergfex-card.git"),console.info("Sponsor: https://buymeacoffee.com/timmaurice"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=t=>new n("string"==typeof t?t:t+"",void 0,i),a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,_=globalThis,g=_.trustedTypes,m=g?g.emptyScript:"",$=_.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},w=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??w)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,$?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+k,M=`<${N}>`,P=document,O=()=>P.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,z=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,G=P.createTreeWalker(P,129);function Y(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=L;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===L?"!--"===l[1]?r=H:void 0!==l[1]?r=j:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=o??L,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?z:'"'===l[3]?I:D):r===I||r===D?r=z:r===H||r===j?r=L:(r=z,o=void 0);const d=r===z&&t[e+1].startsWith("/>")?" ":"";n+=r===L?s+M:h>=0?(i.push(a),s.slice(0,h)+C+s.slice(h)+k+d):s+k+(-2===h?e:d)}return[Y(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=Z(t,e);if(this.el=J.createElement(l,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[n++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),G.nextNode(),a.push({type:2,index:++o});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===N)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===W)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=T(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);G.currentNode=i;let o=G.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=G.nextNode(),n++)}return G.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=K(this,i[s+r],e,r),a===W&&(a=this._$AH[r]),n||=!T(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===W)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(J,Q),(A.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},dt=(t=ct,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return pt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=1,_t=2,gt=t=>(...e)=>({_$litDirective$:t,values:e});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=gt(class extends mt{constructor(t){if(super(t),t.type!==ft||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return W}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt extends mt{constructor(t){if(super(t),this.it=V,t.type!==_t)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yt extends vt{}yt.directiveName="unsafeSVG",yt.resultType=2;const wt=gt(yt);const bt={de:{editor:{groups:{core:"Grundeinstellungen",display:"Anzeige"},title:"Titel (Optional)",resorts:"Skigebiete",show_snow:"Schneeinformationen anzeigen",show_lifts:"Liftinformationen anzeigen",show_last_updated:"Zeitstempel der letzten Aktualisierung anzeigen",hide_closed_resorts:"Geschlossene Skigebiete ausblenden",show_link:"Link zur Detailseite anzeigen",sort_by:"Sortieren nach",sort_by_options:{mountain:"Schnee (Berg)",valley:"Schnee (Tal)",new:"Neuschnee",lift:"Offene Lifte",update:"Letzte Aktualisierung"}},card:{resort_not_found:"Skigebiet nicht gefunden: {resort}",lifts_open:"Lifte",header:{snow_mountain:"Berg",snow_valley:"Tal",new_snow:"Neu",link_title:"{resortName} Detailseite auf bergfex öffnen"}},common:{errors:{no_resorts:"Sie müssen mindestens ein Skigebiet definieren."}}},en:{editor:{groups:{core:"Core Configuration",display:"Display"},title:"Title (Optional)",resorts:"Resort Entities",show_snow:"Show Snow Information",show_lifts:"Show Lift Information",show_last_updated:"Show Last Updated Timestamp",hide_closed_resorts:"Hide Closed Resorts",show_link:"Show link to detail page",sort_by:"Sort by",sort_by_options:{mountain:"Snow (Mountain)",valley:"Snow (Valley)",new:"New Snow",lift:"Lifts Open",update:"Last Update"}},card:{resort_not_found:"Resort not found: {resort}",lifts_open:"Lifts",header:{snow_mountain:"Mountain",snow_valley:"Valley",new_snow:"New",link_title:"Open {resortName} detail page on bergfex"}},common:{errors:{no_resorts:"You need to define at least one resort entity."}}}};function xt(t,e){let s=bt[t];for(const t of e){if("object"!=typeof s||null===s)return;s=s[t]}return"string"==typeof s?s:void 0}function At(t,e,s={}){const i=t.language||"en",o=e.replace("component.bergfex-card.","").split("."),n=xt(i,o)??xt("en",o);if("string"==typeof n){let t=n;for(const e in s)t=t.replace(`{${e}}`,String(s[e]));return t}return e}const Et=(t,e,s,i)=>{const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:s});t.dispatchEvent(o)};function St(t,e){const s=new Date(t),i=new Date,o=Math.round((i.getTime()-s.getTime())/1e3);try{const t=new Intl.RelativeTimeFormat(e.language,{numeric:"auto"});if(o<60)return t.format(-o,"second");const s=Math.round(o/60);if(s<60)return t.format(-s,"minute");const i=Math.round(s/60);if(i<24)return t.format(-i,"hour");const n=Math.round(i/24);return t.format(-n,"day")}catch{return function(t,e){const s=new Date(t),i=new Date,o={hour:"numeric",minute:"2-digit"};return s.getDate()===i.getDate()&&s.getMonth()===i.getMonth()&&s.getFullYear()===i.getFullYear()||Object.assign(o,{year:"numeric",month:"short",day:"2-digit"}),"12"===e.locale?.time_format&&(o.hour12=!0),s.toLocaleString(e.language,o)}(t,e)}}const Ct=a`:host ::slotted(.card-content),.card-content{display:flex;flex-direction:column;gap:12px;padding:16px}.resort{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);cursor:pointer;display:flex;flex-direction:column;gap:8px;padding:12px;transition:background-color .2s ease-in-out}.resort:hover{background-color:rgba(var(--rgb-primary-text-color), 0.05)}.resort-header{align-items:center;display:flex;justify-content:space-between}.resort-name{font-size:1.2em;font-weight:500}.resort-status{border-radius:4px;color:var(--primary-text-color);font-size:.9em;font-weight:500;padding:2px 6px;text-transform:uppercase}.resort-status.open{background-color:var(--label-badge-green)}.resort-status.closed{background-color:var(--label-badge-red)}.details{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;padding-top:8px}.detail-item{align-items:center;cursor:pointer;display:flex;gap:8px}.detail-item ha-icon{--mdc-icon-size: 28px;color:var(--secondary-text-color)}.detail-item svg{height:var(--mdc-icon-size, 24px);stroke:var(--secondary-text-color);width:var(--mdc-icon-size, 24px)}.detail-item-value{align-items:flex-start;display:flex;flex-direction:column;font-size:1.1em}.detail-item-label{color:var(--secondary-text-color);font-size:.8em}.resort-footer{display:flex;justify-content:space-between;align-items:center}.link-icon{color:var(--secondary-text-color);display:flex;text-decoration:none}.last-updated{align-items:center;color:var(--secondary-text-color);cursor:pointer;display:flex;font-size:.8em;gap:4px;justify-content:flex-end}.warning{color:var(--error-color)}`;const kt="bergfex-card",Nt=`${kt}-editor`;let Mt=class extends at{setConfig(t){if(!t||!t.resorts||!Array.isArray(t.resorts)||0===t.resorts.length)throw new Error(At(this.hass,"common.errors.no_resorts"));this._config={show_snow:!0,show_lifts:!0,show_last_updated:!0,hide_closed_resorts:!1,show_link:!0,...t}}static async getConfigElement(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),s=e?.constructor;return s?.getConfigElement&&await s.getConfigElement(),await Promise.resolve().then(function(){return Rt}),document.createElement(Nt)}static getStubConfig(){return{title:"Bergfex",resorts:[]}}getCardSize(){return 3}_getResorts(t,e){const s={},i=Object.values(t.states);return e.resorts.forEach(e=>{const o="string"==typeof e?e:e.device,n="object"==typeof e?e.name:void 0,r=i.filter(e=>t.entities[e.entity_id]?.device_id===o&&e.entity_id.startsWith("sensor."));0!==r.length&&(s[o]||(s[o]={}),n&&(s[o].name=n),r.forEach(t=>{const e=t.entity_id;e.endsWith("_status")&&(s[o].status=e),e.endsWith("_snow_valley")&&(s[o].snow_valley=e),e.endsWith("_snow_mountain")&&(s[o].snow_mountain=e),e.endsWith("_new_snow")&&(s[o].new_snow=e),e.endsWith("_lifts_open")&&(s[o].lifts_open=e),e.endsWith("_lifts_total")&&(s[o].lifts_total=e),e.endsWith("_last_update")&&(s[o].last_update=e)}))}),s}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(e){const t=this._getResorts(this.hass,this._config),s=Object.values(t).flatMap(t=>Object.values(t));return s.some(t=>t&&e.states[t]!==this.hass.states[t])||e.language!==this.hass.language}return!0}_handleMoreInfo(t){Et(this,"hass-more-info",{entityId:t})}render(){if(!this._config||!this.hass)return F``;let t=Object.entries(this._getResorts(this.hass,this._config));this._config.hide_closed_resorts&&(t=t.filter(([,t])=>t.status&&"open"===this.hass.states[t.status].state.toLowerCase()));const e=this._config.sort_by;return e&&"none"!==e&&t.sort(([,t],[,s])=>{let i,o;switch(e){case"mountain":i=t.snow_mountain?parseFloat(this.hass.states[t.snow_mountain].state):NaN,o=s.snow_mountain?parseFloat(this.hass.states[s.snow_mountain].state):NaN;break;case"valley":i=t.snow_valley?parseFloat(this.hass.states[t.snow_valley].state):NaN,o=s.snow_valley?parseFloat(this.hass.states[s.snow_valley].state):NaN;break;case"new":i=t.new_snow?parseFloat(this.hass.states[t.new_snow].state):NaN,o=s.new_snow?parseFloat(this.hass.states[s.new_snow].state):NaN;break;case"lift":i=t.lifts_open?parseFloat(this.hass.states[t.lifts_open].state):NaN,o=s.lifts_open?parseFloat(this.hass.states[s.lifts_open].state):NaN;break;case"update":return i=t.last_update?this.hass.states[t.last_update].state:"0",o=s.last_update?this.hass.states[s.last_update].state:"0",new Date(o).getTime()-new Date(i).getTime()}if("number"==typeof i&&"number"==typeof o){const t=isNaN(i),e=isNaN(o);return t&&e?0:t?1:e?-1:o-i}return 0}),F`
      <ha-card .header=${this._config.title} tabindex="0">
        <div class="card-content">
          ${t.map(([t,e])=>{const s=e.status;if(!s)return F`
                <div class="warning">
                  ${At(this.hass,"component.bergfex-card.card.resort_not_found",{resort:t})}
                </div>
              `;const i=this.hass.devices[t],o=e.name||i?.name_by_user||i?.name||"Unknown Resort",n=e.status?this.hass.states[e.status]:void 0,r=n?.state??"N/A",a=n?.attributes.link,l=e.snow_valley?this.hass.states[e.snow_valley]:void 0,h=e.snow_mountain?this.hass.states[e.snow_mountain]:void 0,c=e.new_snow?this.hass.states[e.new_snow]:void 0,d=e.lifts_open?this.hass.states[e.lifts_open]:void 0,p=e.lifts_total?this.hass.states[e.lifts_total]:void 0,u=e.last_update?this.hass.states[e.last_update]:void 0;return F`
              <div class="resort" tabindex="0" @click=${()=>this._handleMoreInfo(s)}>
                <div class="resort-header">
                  <span class="resort-name">${o}</span>
                  <span
                    class=${$t({"resort-status":!0,open:"open"===r.toLowerCase(),closed:"closed"===r.toLowerCase()})}
                    >${r}</span
                  >
                </div>

                <div class="details">
                  ${this._config.show_snow?F`
                        <div
                          class="detail-item"
                          @click=${t=>{t.stopPropagation(),h&&this._handleMoreInfo(h.entity_id)}}
                        >
                          ${wt('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  \x3c!-- Mountain --\x3e\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  \x3c!-- Left-pointing arrow further right from first peak --\x3e\n  <g stroke-width="1">\n    <line x1="15" y1="3" x2="10" y2="3" />\n    <polyline points="12,1 10,3 12,5" />\n  </g>\n</svg>')}
                          <div class="detail-item-value">
                            ${h&&!isNaN(parseFloat(h.state))?F`<span
                                  >${h.state} ${h.attributes.unit_of_measurement??""}</span
                                >`:F`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${At(this.hass,"component.bergfex-card.card.header.snow_mountain")}</span
                            >
                          </div>
                        </div>
                        <div
                          class="detail-item"
                          @click=${t=>{t.stopPropagation(),l&&this._handleMoreInfo(l.entity_id)}}
                        >
                          ${wt('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  <g stroke-width="1">\n    <line x1="5" y1="17.5" x2="10" y2="17.5" />\n    <polyline points="8,15.5 5,17.5 8,19.5" />\n  </g>\n</svg>')}
                          <div class="detail-item-value">
                            ${l&&!isNaN(parseFloat(l.state))?F`<span
                                  >${l.state} ${l.attributes.unit_of_measurement??""}</span
                                >`:F`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${At(this.hass,"component.bergfex-card.card.header.snow_valley")}</span
                            >
                          </div>
                        </div>
                        <div
                          class="detail-item"
                          @click=${t=>{t.stopPropagation(),c&&this._handleMoreInfo(c.entity_id)}}
                        >
                          <ha-icon icon="mdi:weather-snowy-heavy"></ha-icon>
                          <div class="detail-item-value">
                            ${c&&!isNaN(parseFloat(c.state))?F`<span>${c.state} ${c.attributes.unit_of_measurement??""}</span>`:F`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${At(this.hass,"component.bergfex-card.card.header.new_snow")}</span
                            >
                          </div>
                        </div>
                      `:""}
                  ${this._config.show_lifts?F`
                        <div
                          class="detail-item"
                          @click=${t=>{t.stopPropagation(),d&&this._handleMoreInfo(d.entity_id)}}
                        >
                          <ha-icon icon="mdi:gondola"></ha-icon>
                          <div class="detail-item-value">
                            ${d&&p&&!isNaN(parseFloat(d.state))&&!isNaN(parseFloat(p.state))?F`<span>${d.state}/${p.state}</span>`:F`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${At(this.hass,"component.bergfex-card.card.lifts_open")}</span
                            >
                          </div>
                        </div>
                      `:""}
                </div>
                <div class="resort-footer">
                  ${this._config.show_link&&a?F`
                        <a
                          href=${a}
                          target="_blank"
                          class="link-icon"
                          title=${At(this.hass,"component.bergfex-card.card.link_title",{resortName:o})}
                          @click=${t=>t.stopPropagation()}
                        >
                          <ha-icon icon="mdi:link-variant"></ha-icon>
                        </a>
                      `:F`<div></div>`}
                  ${this._config.show_last_updated&&u?F`
                        <div class="last-updated" @click=${t=>{t.stopPropagation(),u&&this._handleMoreInfo(u.entity_id)}}>
                          <ha-icon icon="mdi:clock-outline"></ha-icon>
                          <span>${St(u.state,this.hass)}</span>
                        </div>
                      `:""}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}static{this.styles=a`
    ${r(Ct)}
  `}};t([pt({attribute:!1})],Mt.prototype,"hass",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(e,s,i)=>((t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s))(e,s,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("ha-card")],Mt.prototype,"_card",void 0),t([ut()],Mt.prototype,"_config",void 0),Mt=t([ht(kt)],Mt),"undefined"!=typeof window&&(window.customCards=window.customCards||[],window.customCards.push({type:kt,name:"Bergfex Card",description:"A Lovelace card to display ski resort conditions from Bergfex.",documentationURL:"https://github.com/timmaurice/lovelace-bergfex-card"}));const Pt=a`.card-config{display:flex;flex-direction:column;gap:12px}.group{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);margin-top:0;padding:16px}.group-header{color:var(--primary-text-color);font-size:16px;font-weight:500;margin-bottom:12px}ha-form{display:block}`,Ot=[{name:"title",selector:{text:{}}}],Tt=[{name:"resorts",selector:{device:{multiple:!0,integration:"bergfex"}}}];let Ut=class extends at{setConfig(t){this._config={show_snow:!0,show_lifts:!0,show_last_updated:!0,hide_closed_resorts:!1,show_link:!0,...t}}_valueChanged(t){this.hass&&this._config&&Et(this,"config-changed",{config:{...this._config,...t.detail.value}})}render(){if(!this.hass||!this._config)return F``;const t=[{name:"show_snow",selector:{boolean:{}}},{name:"show_lifts",selector:{boolean:{}}},{name:"show_last_updated",selector:{boolean:{}}},{name:"hide_closed_resorts",selector:{boolean:{}}},{name:"show_link",selector:{boolean:{}}},{name:"sort_by",selector:{select:{mode:"dropdown",clearable:!0,options:[{value:"mountain",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.mountain")},{value:"valley",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.valley")},{value:"new",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.new")},{value:"lift",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.lift")},{value:"update",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.update")}]}}}];return F`
      <ha-card>
        <div class="card-content card-config">
          <div class="group">
            <div class="group-header">${At(this.hass,"component.bergfex-card.editor.groups.core")}</div>
            <ha-form
              .schema=${Ot}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>At(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <ha-form
              .schema=${Tt}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>At(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>

          <div class="group">
            <div class="group-header">${At(this.hass,"component.bergfex-card.editor.groups.display")}</div>
            <ha-form
              .schema=${t}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>At(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>
      </ha-card>
    `}static{this.styles=a`
    ${r(Pt)}
  `}};t([pt({attribute:!1})],Ut.prototype,"hass",void 0),t([ut()],Ut.prototype,"_config",void 0),Ut=t([ht("bergfex-card-editor")],Ut);var Rt=Object.freeze({__proto__:null,get BergfexCardEditor(){return Ut}});export{Mt as BergfexCard};
