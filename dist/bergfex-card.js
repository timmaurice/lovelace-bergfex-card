function t(t,e,s,i){var o,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(n=(a<3?o(n):a>3?o(e,s,n):o(e,s))||n);return a>3&&n&&Object.defineProperty(e,s,n),n}console.groupCollapsed("%c🏔️ BERGFEX CARD%cv1.3.0","color: orange; font-weight: bold; background: black; padding: 2px 4px; border-radius: 2px 0 0 2px;","color: white; font-weight: bold; background: dimgray; padding: 2px 4px; border-radius: 0 2px 2px 0;"),console.info("A Lovelace card to display ski resort conditions from Bergfex."),console.info("Github:  https://github.com/timmaurice/lovelace-bergfex-card.git"),console.info("Sponsor: https://buymeacoffee.com/timmaurice"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const n=t=>new a("string"==typeof t?t:t+"",void 0,i),r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new a(s,t,i)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return n(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:_,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);o?.call(this,e),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...p(t),..._(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const a=o.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const a=this.constructor;if(!1===i&&(o=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??b)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,v?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,k=t=>t,S=A.trustedTypes,N=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+E,M=`<${P}>`,T=document,O=()=>T.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,U="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,j=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,D=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,Z=T.createTreeWalker(T,129);function K(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let o,a=2===e?"<svg>":3===e?"<math>":"",n=L;for(let e=0;e<s;e++){const s=t[e];let r,c,l=-1,d=0;for(;d<s.length&&(n.lastIndex=d,c=n.exec(s),null!==c);)d=n.lastIndex,n===L?"!--"===c[1]?n=F:void 0!==c[1]?n=j:void 0!==c[2]?(W.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=H):void 0!==c[3]&&(n=H):n===H?">"===c[0]?(n=o??L,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,r=c[1],n=void 0===c[3]?H:'"'===c[3]?D:I):n===D||n===I?n=H:n===F||n===j?n=L:(n=H,o=void 0);const h=n===H&&t[e+1].startsWith("/>")?" ":"";a+=n===L?s+M:l>=0?(i.push(r),s.slice(0,l)+C+s.slice(l)+E+h):s+E+(-2===l?e:h)}return[K(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,a=0;const n=t.length-1,r=this.parts,[c,l]=Y(t,e);if(this.el=J.createElement(c,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[a++],s=i.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(E)&&(r.push({type:6,index:o}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),Z.nextNode(),r.push({type:2,index:++o});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)r.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const a=R(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);Z.currentNode=i;let o=Z.nextNode(),a=0,n=0,r=s[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new tt(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new at(o,this,t)),this._$AV.push(e),r=s[++n]}a!==r?.index&&(o=Z.nextNode(),a++)}return Z.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),R(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new tt(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const o=this.strings;let a=!1;if(void 0===o)t=X(this,t,e,0),a=!R(t)||t!==this._$AH&&t!==V,a&&(this._$AH=t);else{const i=t;let n,r;for(t=o[0],n=0;n<o.length-1;n++)r=X(this,i[s+n],e,n),r===V&&(r=this._$AH[n]),a||=!R(r)||r!==this._$AH[n],r===q?t=q:t!==q&&(t+=(r??"")+o[n+1]),this._$AH[n]=r}a&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends et{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===V)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(J,tt),(A.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};ct._$litElement$=!0,ct.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ct});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:ct}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pt=(t=ht,e,s)=>{const{kind:i,metadata:o}=s;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return(e,s)=>"object"==typeof s?pt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return _t({...t,state:!0,attribute:!1})}
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
const ft=1,gt=2,mt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=mt(class extends vt{constructor(t){if(super(t),t.type!==ft||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return V}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yt extends vt{constructor(t){if(super(t),this.it=q,t.type!==gt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===V)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}yt.directiveName="unsafeHTML",yt.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class bt extends yt{}bt.directiveName="unsafeSVG",bt.resultType=2;const wt=mt(bt);const xt={de:{editor:{groups:{core:"Grundeinstellungen",display:"Anzeige"},title:"Titel (Optional)",resorts:"Skigebiete",show_snow:"Schneeinformationen anzeigen",show_lifts_slopes:"Lift- & Pistenstatistiken anzeigen",show_conditions:"Bedingungen anzeigen",show_forecast:"Schneevorhersage anzeigen",show_trend:"Trend-Indikatoren anzeigen (24h)",show_last_updated:"Zuletzt aktualisiert anzeigen",show_link:"Link-Symbol anzeigen",hide_closed_resorts:"Geschlossene Skigebiete ausblenden",sort_by:"Sortieren nach",sort_by_options:{mountain:"Schnee (Berg)",valley:"Schnee (Tal)",new:"Neuschnee",lift:"Offene Lifte",classical:"Klassische Loipen",skating:"Skating-Loipen",update:"Letzte Aktualisierung"}},card:{resort_not_found:"Skigebiet nicht gefunden: {resort}",lifts_open:"Lifte",header:{snow_mountain:"Berg",snow_valley:"Tal",new_snow:"Neu",snow_condition:"Schneezustand",slope_condition:"Pistenzustand",avalanche_warning:"Lawinenwarnstufe",last_snowfall:"Letzter Schneefall",slopes_info:"Pisten",slopes_open_km:"Offen",slopes_total_km:"Gesamt",classical_trails:"Klassische Loipen",skating_trails:"Skating-Loipen",classical_condition:"Klassischer Zustand",skating_condition:"Skating-Zustand",operation_status:"Betriebsstatus",link_title:"{resortName} Detailseite auf bergfex öffnen"},forecast:{daily:"Täglich",summary:"Zusammenfassung",hour:"{hours} Stunden",today:"Heute",tomorrow:"Morgen"},accordion:{conditions:"Bedingungen",forecast:"Schneevorhersage"}},common:{errors:{no_resorts:"Sie müssen mindestens ein Skigebiet definieren."}}},en:{editor:{groups:{core:"Core Configuration",display:"Display"},title:"Title (Optional)",resorts:"Resort Entities",show_snow:"Show snow information",show_lifts_slopes:"Show lift & slope statistics",show_conditions:"Show conditions section",show_forecast:"Show snow forecast",show_trend:"Show trend indicators (24h)",show_last_updated:"Show last updated",show_link:"Show link icon",hide_closed_resorts:"Hide closed resorts",sort_by:"Sort by",sort_by_options:{mountain:"Snow (Mountain)",valley:"Snow (Valley)",new:"New Snow",lift:"Lifts Open",classical:"Classical Trails",skating:"Skating Trails",update:"Last Update"}},card:{resort_not_found:"Resort not found: {resort}",lifts_open:"Lifts",header:{snow_mountain:"Mountain",snow_valley:"Valley",new_snow:"New",snow_condition:"Snow Condition",slope_condition:"Slope Condition",avalanche_warning:"Avalanche Warning",last_snowfall:"Last Snowfall",slopes_info:"Slopes",slopes_open_km:"Open",slopes_total_km:"Total",classical_trails:"Classical Trails",skating_trails:"Skating Trails",classical_condition:"Classical Condition",skating_condition:"Skating Condition",operation_status:"Operation Status",link_title:"Open {resortName} detail page on bergfex"},forecast:{daily:"Daily",summary:"Summary",hour:"{hours} Hour",today:"Today",tomorrow:"Tomorrow"},accordion:{conditions:"Conditions",forecast:"Snow Forecast"}},common:{errors:{no_resorts:"You need to define at least one resort entity."}}}};function At(t,e){let s=xt[t];for(const t of e){if("object"!=typeof s||null===s)return;s=s[t]}return"string"==typeof s?s:void 0}function kt(t,e,s={}){const i=t.language||"en",o=e.replace("component.bergfex-card.","").split("."),a=At(i,o)??At("en",o);if("string"==typeof a){let t=a;for(const e in s)t=t.replace(`{${e}}`,String(s[e]));return t}return e}const St=(t,e,s,i)=>{const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:s});t.dispatchEvent(o)};function Nt(t,e){const s=new Date(t),i=new Date,o=Math.round((i.getTime()-s.getTime())/1e3);try{const t=new Intl.RelativeTimeFormat(e.language,{numeric:"auto"});if(o<60)return t.format(-o,"second");const s=Math.round(o/60);if(s<60)return t.format(-s,"minute");const i=Math.round(s/60);if(i<24)return t.format(-i,"hour");const a=Math.round(i/24);return t.format(-a,"day")}catch{return function(t,e){const s=new Date(t),i=new Date,o={hour:"numeric",minute:"2-digit"};return s.getDate()===i.getDate()&&s.getMonth()===i.getMonth()&&s.getFullYear()===i.getFullYear()||Object.assign(o,{year:"numeric",month:"short",day:"2-digit"}),"12"===e.locale?.time_format&&(o.hour12=!0),s.toLocaleString(e.language,o)}(t,e)}}const Ct=r`:host ::slotted(.card-content),.card-content{display:flex;flex-direction:column;gap:12px;padding:16px}.resort{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);cursor:pointer;display:flex;flex-direction:column;padding:12px;transition:background-color .2s ease-in-out}.resort:hover{background-color:rgba(var(--rgb-primary-text-color), 0.05)}.resort-header{align-items:center;display:flex;justify-content:space-between}.resort-name{font-size:1.2em;font-weight:500}.resort-status{background-color:var(--divider-color);border-radius:4px;color:var(--primary-text-color);font-size:.9em;font-weight:500;padding:2px 6px;text-transform:uppercase}.resort-status.open{background-color:var(--label-badge-green)}.resort-status.closed{background-color:var(--label-badge-red)}.details{display:grid;gap:8px;grid-template-columns:repeat(3, minmax(0, 1fr));padding-top:12px}.details.cross-country-details{grid-template-columns:repeat(2, minmax(0, 1fr))}.detail-item{--mdc-icon-size: 24px;align-items:center;cursor:pointer;display:flex;gap:8px}.detail-item ha-icon{color:var(--secondary-text-color)}.detail-item svg,.custom-icon{align-items:center;display:flex;height:var(--mdc-icon-size, 24px);justify-content:center;width:var(--mdc-icon-size, 24px)}.detail-item svg svg,.custom-icon svg{height:100%;width:100%}.detail-item svg.stroke svg,.custom-icon.stroke svg{stroke:var(--secondary-text-color)}.detail-item svg.fill svg,.custom-icon.fill svg{fill:var(--secondary-text-color)}.detail-item-value{align-items:flex-start;display:flex;flex-direction:column;font-size:1.1em;width:calc(100% - 32px)}.detail-item-label{color:var(--secondary-text-color);font-size:.8em}.detail-item.n-a{opacity:.5}.value-row{align-items:center;display:flex;justify-content:space-between;width:100%}.trend-icon{--mdc-icon-size: 18px;display:inline-block;margin-left:4px;vertical-align:middle}.trend-icon.up{color:var(--label-badge-green, #4caf50)}.trend-icon.down{color:var(--label-badge-red, #f44336)}.trend-icon.same{color:var(--secondary-text-color);opacity:.5}.resort-footer{align-items:center;border-top:1px solid var(--divider-color);display:flex;justify-content:space-between;padding:12px 0 0}.link-icon{color:var(--secondary-text-color);display:flex;text-decoration:none}.last-updated{align-items:center;color:var(--secondary-text-color);cursor:pointer;display:flex;font-size:.8em;gap:4px;justify-content:flex-end}.warning{color:var(--error-color)}.progress-bar-container{background-color:var(--divider-color);border-radius:2px;height:4px;margin-top:4px;overflow:hidden;width:100%}.progress-bar-fill{background-color:var(--primary-color);border-radius:2px;height:100%;transition:width .3s ease-in-out}.accordion-container{border-top:1px solid var(--divider-color);margin-top:12px}.accordion-container+.accordion-container{margin-top:0}.accordion-header{align-items:center;color:var(--primary-text-color);cursor:pointer;display:flex;font-weight:500;justify-content:space-between;padding:12px 0}.accordion-header:hover{background-color:rgba(var(--rgb-primary-text-color), 0.02)}.accordion-content{padding-bottom:12px}.accordion-content.details{grid-template-columns:repeat(2, minmax(0, 1fr))}.forecast-tabs{border-bottom:1px solid var(--divider-color);display:flex;gap:16px;margin-bottom:12px}.forecast-tab{border-bottom:2px solid rgba(0,0,0,0);color:var(--secondary-text-color);cursor:pointer;font-weight:500;padding:8px 12px;transition:all .2s ease}.forecast-tab:hover{color:var(--primary-text-color)}.forecast-tab.active{border-bottom-color:var(--primary-color);color:var(--primary-color)}.forecast-carousel{align-items:center;display:flex;flex-direction:column;gap:8px;position:relative}.forecast-image-container{align-items:center;aspect-ratio:16/9;background-color:rgba(0,0,0,.05);border-radius:8px;display:flex;justify-content:center;overflow:hidden;position:relative;width:100%}.forecast-image{height:100%;object-fit:contain;width:100%}.carousel-controls{align-items:center;display:flex;justify-content:space-between;margin-top:8px;width:100%}.carousel-btn{align-items:center;background:none;border:none;border-radius:50%;color:var(--primary-text-color);cursor:pointer;display:flex;justify-content:center;padding:8px;transition:background-color .2s}.carousel-btn:hover{background-color:rgba(var(--rgb-primary-text-color), 0.1)}.carousel-btn:disabled{color:var(--disabled-text-color);cursor:not-allowed}.carousel-label{font-size:1.1em;font-weight:500}`;var Et='<svg height="5.485163mm" viewBox="0 0 5.8208332 5.4851627" width="5.820833mm"\n    xmlns="http://www.w3.org/2000/svg">\n    <g transform="matrix(1.4664468 0 0 1.4664092 -91.591331 -91.904945)">\n        <path\n            d="m65.27 62.689c.183-.037.29-.008.375.088.075.085.084.24.037.339-.053.113-.215.169-.339.157-.104-.01-.229-.082-.256-.183-.038-.142.025-.365.183-.401z" />\n        <path\n            d="m64.248 63.2s.552-.094.803 0c.242.091.585.511.585.511l.365-.365s.139-.043.182 0 0 .183 0 .183l-.365.365-.123.151-.133.032-.365-.292c-.213.103-.45.351-.505.612 0 0 .371.185.483.349.03.043.039.153.039.153l-.093.226-.129.412-.16.512-.256-.182.146-.439.146-.486-.62-.354-.366.438-.384.021-.748-.021v-.292l.895.009.42-.703.511-.584-.234-.034-.569.631s-.097-.012-.124-.047c-.038-.049-.023-.185-.023-.185l.475-.548z" />\n        <path d="m66.06 63.401.129.053-.882 2.595h-.22v-.11z" />\n        <path\n            d="m62.486 63.941 1.199-.077c.042.001.059.003.041.147l-1.241.064c-.042-.003-.017.01.001-.134z" />\n        <path\n            d="m62.494 64.88.677.64s.167.22.332.333c.075.051.27-.023.27-.023.06.146-.023.309-.206.26 0 0-.092-.011-.123-.041-.318-.303-.986-.986-.986-.986z" />\n        <path d="m66.293 65.976c.128-.041.165.02.109.182l-.072.184-.183.072h-2.922l-.11-.219h2.959z" />\n    </g>\n</svg>',Pt='<svg height="5.816813mm" viewBox="0 0 5.8207846 5.8168125" width="5.820785mm"\n    xmlns="http://www.w3.org/2000/svg">\n    <path\n        d="m146.23391 74.101876c-1.14758-.322091-2.11388-.608331-2.14733-.636091-.0334-.02776-.0608-.108614-.0608-.179677v-.129205l.0961-.06298.0961-.06298.25793.06981.25792.06982.56924-.595103.56924-.595102.27313-.597014c.15023-.328357.29373-.623828.31889-.656601.0252-.03277.21474-.194992.42129-.360486.20655-.165495.37555-.303341.37556-.306325.00001-.003-.091.000688-.20221.0082l-.20224.01358-.33813.251109c-.18597.13811-.36251.285922-.39232.328472-.0298.04255-.10067.08247-.1575.0887-.0568.0062-.14399-.0072-.19371-.02985-.0497-.02265-.10401-.081-.12064-.129668-.0179-.05241-.35705-.333699-.83186-.689982l-.80161-.601501.012-.08403c.007-.04622.0433-.08999.0815-.09727.0428-.0082.35783.203155.82082.550577.41325.310099.77461.572734.80301.583633.0284.0109.26239-.137376.51998-.329498l.46835-.349314h.75066.75066l.10905.05639c.06.03101.15375.109522.20839.17446.0546.06494.11078.17897.12474.253405.0167.08913.003.19368-.0399.306229l-.0653.170892-.4208.334698c-.23143.184083-.42079.347695-.42079.36358 0 .01589.0834.121276.18544.234202.102.112924.21466.248173.25036.300551l.0649.09523v.588443.588443h.70737.70737l.10149.07983c.0598.04707.10148.118197.10148.173327 0 .05142-.0347.128162-.077.170531l-.077.07703h-1.14378-1.14378l-.59912-.156269c-.32951-.08595-.66539-.173625-.7464-.194837l-.14728-.03857.0461-.05552.0461-.05552h.8662.8662l-.0221-.12518c-.0122-.06885-.0424-.281174-.0673-.471834-.0249-.190659-.0645-.36743-.0881-.392826-.0236-.02539-.17114-.116473-.32784-.202393l-.2849-.156218-.52395.533504c-.28817.293428-.65979.658876-.82581.812106-.16602.153231-.29601.283727-.28888.28999.007.0063.74095.212729 1.6307.45881l1.61771.44742.0674.08163c.0371.04489.0674.11437.0674.154392 0 .04002-.0347.107432-.077.149801-.043.04303-.12379.0752-.18296.07288-.0583-.0023-1.04485-.267685-2.19243-.589775zm2.8867-4.068706c-.0683-.01447-.16944-.05594-.2247-.09215-.0553-.03621-.13332-.138153-.17345-.226536-.0401-.08838-.0733-.202887-.0738-.254455-.00052-.05157.0341-.164231.0768-.25036.0427-.08613.1238-.190098.18027-.231041.0587-.04252.18642-.0807.29795-.08903l.19527-.01459.13481.07378c.0741.04058.17352.141311.22084.223843.0473.08253.0863.210993.0867.285469.00027.07448-.0315.195246-.0707.268379-.0392.07313-.11422.16501-.16667.20417-.0525.03916-.15469.08417-.2272.100019-.0725.01585-.18772.01698-.25604.0025z"\n        stroke-width=".052895" transform="translate(-144.02094 -68.875018)" />\n</svg>';const Mt="bergfex-card",Tt=`${Mt}-editor`;let Ot=class extends ct{constructor(){super(...arguments),this._forecastState={},this._accordionState={},this._historyState={}}setConfig(t){if(!t||!t.resorts||!Array.isArray(t.resorts)||0===t.resorts.length)throw new Error(kt(this.hass,"common.errors.no_resorts"));this._config={show_snow:!0,show_lifts_slopes:!0,show_last_updated:!0,hide_closed_resorts:!1,show_link:!0,show_conditions:!0,show_avalanche:!0,show_slopes:!0,show_trend:!1,...t},this._config.show_trend&&this._fetchHistory()}static async getConfigElement(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),s=e?.constructor;return s?.getConfigElement&&await s.getConfigElement(),await Promise.resolve().then(function(){return Ft}),document.createElement(Tt)}static getStubConfig(){return{title:"Bergfex",resorts:[]}}getCardSize(){return 3}_getResorts(t,e){const s={},i=Object.values(t.states);return e.resorts.forEach(e=>{const o="string"==typeof e?e:e.device,a="object"==typeof e?e.name:void 0,n=i.filter(e=>t.entities[e.entity_id]?.device_id===o&&(e.entity_id.startsWith("sensor.")||e.entity_id.startsWith("image.")));if(0!==n.length&&(s[o]||(s[o]={forecast_days:[],forecast_summaries:[]}),a&&(s[o].name=a),n.forEach(t=>{const e=t.entity_id;e.endsWith("_operation_status")?s[o].operation_status=e:e.endsWith("_status")&&(s[o].status=e),e.endsWith("_snow_valley")&&(s[o].snow_valley=e),e.endsWith("_snow_mountain")&&(s[o].snow_mountain=e),e.endsWith("_new_snow")&&(s[o].new_snow=e),e.endsWith("_lifts_open")&&(s[o].lifts_open=e),e.endsWith("_lifts_total")&&(s[o].lifts_total=e),e.endsWith("_last_update")&&(s[o].last_update=e),e.endsWith("_snow_condition")&&(s[o].snow_condition=e),e.endsWith("_last_snowfall")&&(s[o].last_snowfall=e),e.endsWith("_avalanche_warning")&&(s[o].avalanche_warning=e),e.endsWith("_slopes_open_km")&&(s[o].slopes_open_km=e),e.endsWith("_slopes_total_km")&&(s[o].slopes_total_km=e),e.endsWith("_slopes_open")&&(s[o].slopes_open=e),e.endsWith("_slopes_total")&&(s[o].slopes_total=e),e.endsWith("_slope_condition")&&(s[o].slope_condition=e),e.endsWith("_classical_trails")&&(s[o].classical_trails=e),e.endsWith("_skating_trails")&&(s[o].skating_trails=e),e.endsWith("_classical_condition")&&(s[o].classical_condition=e),e.endsWith("_skating_condition")&&(s[o].skating_condition=e),e.includes("_snow_forecast_day_")&&s[o].forecast_days?.push(e),e.includes("_snow_forecast_summary_")&&s[o].forecast_summaries?.push(e)}),s[o].forecast_days?.sort(),s[o].forecast_summaries?.sort((t,e)=>{const s=t=>{const e=t.match(/summary_(\d+)h/);return e?parseInt(e[1],10):0};return s(t)-s(e)}),!(s[o].forecast_days&&0!==s[o].forecast_days.length||s[o].forecast_summaries&&0!==s[o].forecast_summaries.length))){const t=s[o].status;if(t){const e=t.match(/^sensor\.(.+)_status$/);if(e){const t=`image.${e[1]}_snow_forecast`;i.forEach(e=>{e.entity_id.startsWith(t)&&(e.entity_id.includes("_day_")?s[o].forecast_days?.push(e.entity_id):e.entity_id.includes("_summary_")&&s[o].forecast_summaries?.push(e.entity_id))}),s[o].forecast_days?.sort(),s[o].forecast_summaries?.sort((t,e)=>{const s=t=>{const e=t.match(/summary_(\d+)h/);return e?parseInt(e[1],10):0};return s(t)-s(e)})}}}}),s}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(e){const s=this._getResorts(this.hass,this._config),i=Object.values(s).flatMap(t=>Object.values(t)),o=i.some(t=>t&&e.states[t]!==this.hass.states[t]);return this.getOldConfig(t)?.show_trend!==this._config.show_trend&&this._config.show_trend&&this._fetchHistory(),o||e.language!==this.hass.language||t.has("_historyState")}return!0}getOldConfig(t){return t.get("_config")}async _fetchHistory(){if(!this.hass||!this._config.resorts)return;const t=this._getResorts(this.hass,this._config),e=Object.values(t).flatMap(t=>[t.snow_mountain,t.snow_valley,t.new_snow,t.lifts_open,t.slopes_open_km,t.slopes_open,t.classical_trails,t.skating_trails]).filter(Boolean);0!==e.length&&(this._historyState=await async function(t,e,s){if(0===e.length)return{};const i=new Date;i.setHours(i.getHours()-s);try{const s=await t.callWS({type:"history/history_during_period",start_time:i.toISOString(),end_time:i.toISOString(),entity_ids:e,no_attributes:!0}),o={};return Object.entries(s).forEach(([t,e])=>{Array.isArray(e)&&e.length>0&&(o[t]=e[0].s)}),o}catch(t){return console.error(`Error fetching history for ${e.join(", ")}:`,t),{}}}(this.hass,e,24))}_renderTrend(t,e){if(!this._config.show_trend)return B``;const s=this._historyState[t];if(void 0===s||this._isNA(e)||this._isNA(s))return B``;const i=parseFloat(e),o=parseFloat(s);return isNaN(i)||isNaN(o)?B``:i>o?B`<ha-icon class="trend-icon up" icon="mdi:trending-up"></ha-icon>`:i<o?B`<ha-icon class="trend-icon down" icon="mdi:trending-down"></ha-icon>`:B`<ha-icon class="trend-icon same" icon="mdi:trending-neutral"></ha-icon>`}_handleMoreInfo(t){St(this,"hass-more-info",{entityId:t})}_handleTabChange(t,e,s){s.stopPropagation(),this._forecastState={...this._forecastState,[t]:{...this._forecastState[t],tab:e,index:0}}}_handleCarouselChange(t,e,s,i){i.stopPropagation();const o=this._forecastState[t]||{tab:"daily",index:0};let a=o.index+("next"===e?1:-1);a<0&&(a=s-1),a>=s&&(a=0),this._forecastState={...this._forecastState,[t]:{...o,index:a}}}_toggleAccordion(t,e,s){s.stopPropagation(),this._accordionState={...this._accordionState,[t]:this._accordionState[t]===e?null:e}}_formatForecastDate(t){const e=new Date;if(e.setDate(e.getDate()+t),0===t)return kt(this.hass,"component.bergfex-card.card.forecast.today");if(1===t)return kt(this.hass,"component.bergfex-card.card.forecast.tomorrow");{const t=this.hass.locale?.language||this.hass.language||"de";return`${e.toLocaleDateString(t,{weekday:"short"})}, ${e.getDate().toString().padStart(2,"0")}.${(e.getMonth()+1).toString().padStart(2,"0")}.`}}_renderProgressBar(t,e){const s=Math.min(100,Math.max(0,t/e*100));return B`
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${s}%"></div>
      </div>
    `}_isNA(t){return["N/A","keine Meldung","unknown"].includes(t)}_isCrossCountryResort(t){return!!(t.classical_trails||t.skating_trails||t.classical_condition||t.skating_condition)}render(){if(!this._config||!this.hass)return B``;let t=Object.entries(this._getResorts(this.hass,this._config));this._config.hide_closed_resorts&&(t=t.filter(([,t])=>t.status&&"open"===this.hass.states[t.status].state.toLowerCase()));const e=this._config.sort_by;return e&&"none"!==e&&t.sort(([,t],[,s])=>{let i,o;switch(e){case"mountain":if(this._isCrossCountryResort(t)||this._isCrossCountryResort(s))break;i=t.snow_mountain?parseFloat(this.hass.states[t.snow_mountain].state):NaN,o=s.snow_mountain?parseFloat(this.hass.states[s.snow_mountain].state):NaN;break;case"valley":if(this._isCrossCountryResort(t)||this._isCrossCountryResort(s))break;i=t.snow_valley?parseFloat(this.hass.states[t.snow_valley].state):NaN,o=s.snow_valley?parseFloat(this.hass.states[s.snow_valley].state):NaN;break;case"new":if(this._isCrossCountryResort(t)||this._isCrossCountryResort(s))break;i=t.new_snow?parseFloat(this.hass.states[t.new_snow].state):NaN,o=s.new_snow?parseFloat(this.hass.states[s.new_snow].state):NaN;break;case"lift":if(this._isCrossCountryResort(t)||this._isCrossCountryResort(s))break;i=t.lifts_open?parseFloat(this.hass.states[t.lifts_open].state):NaN,o=s.lifts_open?parseFloat(this.hass.states[s.lifts_open].state):NaN;break;case"classical":i=t.classical_trails?parseFloat(this.hass.states[t.classical_trails].state):NaN,o=s.classical_trails?parseFloat(this.hass.states[s.classical_trails].state):NaN;break;case"skating":i=t.skating_trails?parseFloat(this.hass.states[t.skating_trails].state):NaN,o=s.skating_trails?parseFloat(this.hass.states[s.skating_trails].state):NaN;break;case"update":return i=t.last_update?this.hass.states[t.last_update].state:"0",o=s.last_update?this.hass.states[s.last_update].state:"0",new Date(o).getTime()-new Date(i).getTime()}if("number"==typeof i&&"number"==typeof o){const t=isNaN(i),e=isNaN(o);return t&&e?0:t?1:e?-1:o-i}return 0}),B`
      <ha-card .header=${this._config.title} tabindex="0">
        <div class="card-content">
          ${t.map(([t,e])=>{const s=e.status;if(!s)return B`
                <div class="warning">
                  ${kt(this.hass,"component.bergfex-card.card.resort_not_found",{resort:t})}
                </div>
              `;const i=this.hass.devices[t],o=e.name||i?.name_by_user||i?.name||"Unknown Resort",a=e.operation_status?this.hass.states[e.operation_status]:void 0,n=e.status?this.hass.states[e.status]:void 0,r=n?.state??"N/A",c=n?.attributes.link,l=e.snow_valley?this.hass.states[e.snow_valley]:void 0,d=e.snow_mountain?this.hass.states[e.snow_mountain]:void 0,h=e.new_snow?this.hass.states[e.new_snow]:void 0,p=e.lifts_open?this.hass.states[e.lifts_open]:void 0,_=e.lifts_total?this.hass.states[e.lifts_total]:void 0,u=e.last_update?this.hass.states[e.last_update]:void 0,f=e.snow_condition?this.hass.states[e.snow_condition]:void 0,g=e.slope_condition?this.hass.states[e.slope_condition]:void 0,m=e.last_snowfall?this.hass.states[e.last_snowfall]:void 0,v=e.avalanche_warning?this.hass.states[e.avalanche_warning]:void 0,$=e.slopes_open_km?this.hass.states[e.slopes_open_km]:void 0,y=e.slopes_total_km?this.hass.states[e.slopes_total_km]:void 0,b=e.slopes_open?this.hass.states[e.slopes_open]:void 0,w=e.slopes_total?this.hass.states[e.slopes_total]:void 0,x=e.classical_trails?this.hass.states[e.classical_trails]:void 0,A=e.skating_trails?this.hass.states[e.skating_trails]:void 0,k=e.classical_condition?this.hass.states[e.classical_condition]:void 0,S=e.skating_condition?this.hass.states[e.skating_condition]:void 0,N=this._isCrossCountryResort(e);return B`
              <div class="resort" tabindex="0" @click=${()=>this._handleMoreInfo(s)}>
                <div class="resort-header">
                  <span class="resort-name">${o}</span>
                  <span
                    class=${$t({"resort-status":!0,open:"open"===r.toLowerCase(),closed:"closed"===r.toLowerCase()})}
                    >${r}</span
                  >
                </div>

                <div class=${N?"details cross-country-details":"details"}>
                  ${this._config.show_snow&&!N?B`
                        <div
                          class=${$t({"detail-item":!0,"n-a":!d||isNaN(parseFloat(d.state))})}
                          @click=${t=>{t.stopPropagation(),d&&this._handleMoreInfo(d.entity_id)}}
                        >
                          <span class="custom-icon stroke">${wt('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  \x3c!-- Mountain --\x3e\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  \x3c!-- Left-pointing arrow further right from first peak --\x3e\n  <g stroke-width="1">\n    <line x1="15" y1="3" x2="10" y2="3" />\n    <polyline points="12,1 10,3 12,5" />\n  </g>\n</svg>')}</span>
                          <div class="detail-item-value">
                            ${d&&!isNaN(parseFloat(d.state))?B`<div class="value-row">
                                  <span
                                    >${d.state} ${d.attributes.unit_of_measurement??""}</span
                                  >
                                  ${this._renderTrend(d.entity_id,d.state)}
                                </div>`:B`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.snow_mountain")}
                              ${d?.attributes.elevation?`(${d.attributes.elevation}m)`:""}</span
                            >
                          </div>
                        </div>
                        <div
                          class=${$t({"detail-item":!0,"n-a":!l||isNaN(parseFloat(l.state))})}
                          @click=${t=>{t.stopPropagation(),l&&this._handleMoreInfo(l.entity_id)}}
                        >
                          <span class="custom-icon stroke">${wt('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  <g stroke-width="1">\n    <line x1="5" y1="17.5" x2="10" y2="17.5" />\n    <polyline points="8,15.5 5,17.5 8,19.5" />\n  </g>\n</svg>')}</span>
                          <div class="detail-item-value">
                            ${l&&!isNaN(parseFloat(l.state))?B`<div class="value-row">
                                  <span>${l.state} ${l.attributes.unit_of_measurement??""}</span>
                                  ${this._renderTrend(l.entity_id,l.state)}
                                </div>`:B`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.snow_valley")}
                              ${l?.attributes.elevation?`(${l.attributes.elevation}m)`:""}</span
                            >
                          </div>
                        </div>
                        <div
                          class=${$t({"detail-item":!0,"n-a":!h||isNaN(parseFloat(h.state))})}
                          @click=${t=>{t.stopPropagation(),h&&this._handleMoreInfo(h.entity_id)}}
                        >
                          <ha-icon icon="mdi:weather-snowy-heavy"></ha-icon>
                          <div class="detail-item-value">
                            ${h&&!isNaN(parseFloat(h.state))?B`<div class="value-row">
                                  <span>${h.state} ${h.attributes.unit_of_measurement??""}</span>
                                  ${this._renderTrend(h.entity_id,h.state)}
                                </div>`:B`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.new_snow")}</span
                            >
                          </div>
                        </div>
                      `:""}
                  ${N?B`
                        ${x?B`
                              <div
                                class=${$t({"detail-item":!0,"n-a":!x||isNaN(parseFloat(x.state))})}
                                @click=${t=>{t.stopPropagation(),x&&this._handleMoreInfo(x.entity_id)}}
                              >
                                <span class="custom-icon fill">${wt(Et)}</span>
                                <div class="detail-item-value">
                                  ${x&&!isNaN(parseFloat(x.state))?B`<div class="value-row">
                                        <span
                                          >${x.state}
                                          ${x.attributes.unit_of_measurement??"km"}</span
                                        >
                                        ${this._renderTrend(x.entity_id,x.state)}
                                      </div>`:B`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.header.classical_trails")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                        ${A?B`
                              <div
                                class=${$t({"detail-item":!0,"n-a":!A||isNaN(parseFloat(A.state))})}
                                @click=${t=>{t.stopPropagation(),A&&this._handleMoreInfo(A.entity_id)}}
                              >
                                <span class="custom-icon fill">${wt(Pt)}</span>
                                <div class="detail-item-value">
                                  ${A&&!isNaN(parseFloat(A.state))?B`<div class="value-row">
                                        <span
                                          >${A.state}
                                          ${A.attributes.unit_of_measurement??"km"}</span
                                        >
                                        ${this._renderTrend(A.entity_id,A.state)}
                                      </div>`:B`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.header.skating_trails")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                      `:B`
                        ${this._config.show_lifts_slopes?B`
                              <div
                                class=${$t({"detail-item":!0,"n-a":!p||!_||isNaN(parseFloat(p.state))})}
                                @click=${t=>{t.stopPropagation(),p&&this._handleMoreInfo(p.entity_id)}}
                              >
                                <ha-icon icon="mdi:gondola"></ha-icon>
                                <div class="detail-item-value">
                                  ${p&&_&&!isNaN(parseFloat(p.state))&&!isNaN(parseFloat(_.state))?B`<div class="value-row">
                                          <span>${p.state}/${_.state}</span>
                                          ${this._renderTrend(p.entity_id,p.state)}
                                        </div>
                                        ${this._renderProgressBar(parseFloat(p.state),parseFloat(_.state))}`:B`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.lifts_open")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                        ${this._config.show_lifts_slopes&&($||y||b||w)?B`
                              ${$?B`
                                    <div
                                      class=${$t({"detail-item":!0,"n-a":!$||isNaN(parseFloat($.state))})}
                                      @click=${t=>{t.stopPropagation(),$&&this._handleMoreInfo($.entity_id)}}
                                    >
                                      <span class="custom-icon stroke">
                                        <ha-icon icon="mdi:slope-downhill"></ha-icon>
                                      </span>
                                      <div class="detail-item-value">
                                        ${$&&!isNaN(parseFloat($.state))?B`<div class="value-row">
                                                <span
                                                  >${$.state}${y&&!isNaN(parseFloat(y.state))?`/${y.state}`:""}
                                                  ${$.attributes.unit_of_measurement??"km"}</span
                                                >
                                                ${this._renderTrend($.entity_id,$.state)}
                                              </div>
                                              ${y&&!isNaN(parseFloat(y.state))?this._renderProgressBar(parseFloat($.state),parseFloat(y.state)):""}`:B`<span>N/A</span>`}
                                        <span class="detail-item-label"
                                          >${kt(this.hass,"component.bergfex-card.card.header.slopes_info")}</span
                                        >
                                      </div>
                                    </div>
                                  `:""}
                              ${b&&w?B`
                                    <div
                                      class=${$t({"detail-item":!0,"n-a":!b||!w||isNaN(parseFloat(b.state))||isNaN(parseFloat(w.state))})}
                                      @click=${t=>{t.stopPropagation(),b&&this._handleMoreInfo(b.entity_id)}}
                                    >
                                      <ha-icon icon="mdi:counter"></ha-icon>
                                      <div class="detail-item-value">
                                        ${b&&w&&!isNaN(parseFloat(b.state))&&!isNaN(parseFloat(w.state))?B`<div class="value-row">
                                                <span>${b.state}/${w.state}</span>
                                                ${this._renderTrend(b.entity_id,b.state)}
                                              </div>
                                              ${this._renderProgressBar(parseFloat(b.state),parseFloat(w.state))}`:B`<span>N/A</span>`}
                                        <span class="detail-item-label"
                                          >${kt(this.hass,"component.bergfex-card.card.header.slopes_info")}
                                          (${kt(this.hass,"component.bergfex-card.card.header.slopes_total_km")})</span
                                        >
                                      </div>
                                    </div>
                                  `:""}
                            `:""}
                      `}
                </div>

                ${this._config.show_conditions&&(f||g||v||m||a||k||S)?B`
                      <div class="accordion-container">
                        <div
                          class="accordion-header"
                          @click=${e=>this._toggleAccordion(t,"conditions",e)}
                        >
                          <span>${kt(this.hass,"component.bergfex-card.card.accordion.conditions")}</span>
                          <ha-icon
                            icon=${"conditions"===this._accordionState[t]?"mdi:chevron-up":"mdi:chevron-down"}
                          ></ha-icon>
                        </div>
                        ${"conditions"===this._accordionState[t]?B`
                              <div class="accordion-content details">
                                ${this._config.show_conditions&&(f||g)&&!N?B`
                                      ${f?B`
                                            <div
                                              class=${$t({"detail-item":!0,"n-a":this._isNA(f.state)})}
                                              @click=${t=>{t.stopPropagation(),f&&this._handleMoreInfo(f.entity_id)}}
                                            >
                                              <ha-icon icon="mdi:weather-snowy"></ha-icon>
                                              <div class="detail-item-value">
                                                <span>${f.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.snow_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                      ${g?B`
                                            <div
                                              class=${$t({"detail-item":!0,"n-a":this._isNA(g.state)})}
                                              @click=${t=>{t.stopPropagation(),g&&this._handleMoreInfo(g.entity_id)}}
                                            >
                                              <ha-icon icon="mdi:ski"></ha-icon>
                                              <div class="detail-item-value">
                                                <span>${g.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.slope_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                    `:""}
                                ${this._config.show_conditions&&v&&!N?B`
                                      <div
                                        class=${$t({"detail-item":!0,"n-a":this._isNA(v.state)})}
                                        @click=${t=>{t.stopPropagation(),v&&this._handleMoreInfo(v.entity_id)}}
                                      >
                                        <ha-icon icon="mdi:alert"></ha-icon>
                                        <div class="detail-item-value">
                                          <span>${v.state}</span>
                                          <span class="detail-item-label"
                                            >${kt(this.hass,"component.bergfex-card.card.header.avalanche_warning")}</span
                                          >
                                        </div>
                                      </div>
                                    `:""}
                                ${this._config.show_conditions&&(k||S)?B`
                                      ${k?B`
                                            <div
                                              class=${$t({"detail-item":!0,"n-a":this._isNA(k.state)})}
                                              @click=${t=>{t.stopPropagation(),k&&this._handleMoreInfo(k.entity_id)}}
                                            >
                                              <span class="custom-icon fill"
                                                >${wt(Et)}</span
                                              >
                                              <div class="detail-item-value">
                                                <span>${k.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.classical_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                      ${S?B`
                                            <div
                                              class=${$t({"detail-item":!0,"n-a":this._isNA(S.state)})}
                                              @click=${t=>{t.stopPropagation(),S&&this._handleMoreInfo(S.entity_id)}}
                                            >
                                              <span class="custom-icon fill"
                                                >${wt(Pt)}</span
                                              >
                                              <div class="detail-item-value">
                                                <span>${S.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.skating_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                    `:""}
                                ${m?B`
                                      <div
                                        class=${$t({"detail-item":!0,"n-a":this._isNA(m.state)})}
                                        @click=${t=>{t.stopPropagation(),this._handleMoreInfo(m.entity_id)}}
                                      >
                                        <ha-icon icon="mdi:calendar-clock"></ha-icon>
                                        <div class="detail-item-value">
                                          <span>${m.state}</span>
                                          <span class="detail-item-label"
                                            >${kt(this.hass,"component.bergfex-card.card.header.last_snowfall")}</span
                                          >
                                        </div>
                                      </div>
                                    `:""}
                                ${this._config.show_conditions&&a?B`
                                      <div
                                        class=${$t({"detail-item":!0,"n-a":this._isNA(a.state)})}
                                        @click=${t=>{t.stopPropagation(),a&&this._handleMoreInfo(a.entity_id)}}
                                      >
                                        <ha-icon icon="mdi:information-outline"></ha-icon>
                                        <div class="detail-item-value">
                                          <span>${a.state}</span>
                                          <span class="detail-item-label"
                                            >${kt(this.hass,"component.bergfex-card.card.header.operation_status")}</span
                                          >
                                        </div>
                                      </div>
                                    `:""}
                              </div>
                            `:""}
                      </div>
                    `:""}
                ${(()=>{if(!this._config.show_forecast)return"";const s=e.forecast_days&&e.forecast_days.length>0&&e.forecast_days.some(t=>{const e=this.hass.states[t];return e&&e.attributes.entity_picture}),i=e.forecast_summaries&&e.forecast_summaries.length>0&&e.forecast_summaries.some(t=>{const e=this.hass.states[t];return e&&e.attributes.entity_picture});return s||i?B`
                    <div class="accordion-container">
                      <div
                        class="accordion-header"
                        @click=${e=>this._toggleAccordion(t,"forecast",e)}
                      >
                        <span>${kt(this.hass,"component.bergfex-card.card.accordion.forecast")}</span>
                        <ha-icon
                          icon=${"forecast"===this._accordionState[t]?"mdi:chevron-up":"mdi:chevron-down"}
                        ></ha-icon>
                      </div>
                      ${"forecast"===this._accordionState[t]?B`
                            <div class="forecast-container">
                              <div class="forecast-tabs">
                                ${s?B`
                                      <div
                                        class="forecast-tab ${this._forecastState[t]&&"daily"!==this._forecastState[t].tab?"":"active"}"
                                        @click=${e=>this._handleTabChange(t,"daily",e)}
                                      >
                                        ${kt(this.hass,"component.bergfex-card.card.forecast.daily")}
                                      </div>
                                    `:""}
                                ${i?B`
                                      <div
                                        class="forecast-tab ${"summary"===this._forecastState[t]?.tab?"active":""}"
                                        @click=${e=>this._handleTabChange(t,"summary",e)}
                                      >
                                        ${kt(this.hass,"component.bergfex-card.card.forecast.summary")}
                                      </div>
                                    `:""}
                              </div>

                              <div class="forecast-carousel">
                                ${(()=>{const s=this._forecastState[t]?.tab||"daily",i="daily"===s?e.forecast_days:e.forecast_summaries,o=this._forecastState[t]?.index||0;if(!i||0===i.length)return B``;const a=i[o],n=this.hass.states[a],r=n?.attributes.entity_picture;let c="";if("daily"===s){const t=a.match(/day_(\d+)/),e=t?parseInt(t[1],10):o;c=this._formatForecastDate(e)}else{const t=a.match(/summary_(\d+)h/),e=t?t[1]:"";c=kt(this.hass,"component.bergfex-card.card.forecast.hour",{hours:e})}return B`
                                    <div class="forecast-image-container">
                                      ${r?B`<img
                                            src="${r}"
                                            class="forecast-image"
                                            alt="${c}"
                                            @click=${t=>{t.stopPropagation(),this._handleMoreInfo(a)}}
                                            style="cursor: pointer;"
                                          />`:B`<span>Image not available</span>`}
                                    </div>
                                    <div class="carousel-controls">
                                      <button
                                        class="carousel-btn"
                                        @click=${e=>this._handleCarouselChange(t,"prev",i.length,e)}
                                        ?disabled=${i.length<=1}
                                      >
                                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                                      </button>
                                      <span class="carousel-label">${c}</span>
                                      <button
                                        class="carousel-btn"
                                        @click=${e=>this._handleCarouselChange(t,"next",i.length,e)}
                                        ?disabled=${i.length<=1}
                                      >
                                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                                      </button>
                                    </div>
                                  `})()}
                              </div>
                            </div>
                          `:""}
                    </div>
                  `:""})()}

                <div class="resort-footer">
                  ${this._config.show_link&&c?B`
                        <a
                          href=${c}
                          target="_blank"
                          class="link-icon"
                          title=${kt(this.hass,"component.bergfex-card.card.link_title",{resortName:o})}
                          @click=${t=>t.stopPropagation()}
                        >
                          <ha-icon icon="mdi:link-variant"></ha-icon>
                        </a>
                      `:B`<div></div>`}
                  ${this._config.show_last_updated&&u?B`
                        <div
                          class="last-updated"
                          @click=${t=>{t.stopPropagation(),u&&this._handleMoreInfo(u.entity_id)}}
                        >
                          <ha-icon icon="mdi:clock-outline"></ha-icon>
                          <span>${Nt(u.state,this.hass)}</span>
                        </div>
                      `:""}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}static{this.styles=r`
    ${n(Ct)}
  `}};t([_t({attribute:!1})],Ot.prototype,"hass",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(e,s,i)=>((t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s))(e,s,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("ha-card")],Ot.prototype,"_card",void 0),t([ut()],Ot.prototype,"_config",void 0),t([ut()],Ot.prototype,"_forecastState",void 0),t([ut()],Ot.prototype,"_accordionState",void 0),t([ut()],Ot.prototype,"_historyState",void 0),Ot=t([dt(Mt)],Ot),"undefined"!=typeof window&&(window.customCards=window.customCards||[],window.customCards.push({type:Mt,name:"Bergfex Card",description:"A Lovelace card to display ski resort conditions from Bergfex.",documentationURL:"https://github.com/timmaurice/lovelace-bergfex-card"}));const Rt=r`.card-config{display:flex;flex-direction:column;gap:12px}.group{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);margin-top:0;padding:16px}.group-header{color:var(--primary-text-color);font-size:16px;font-weight:500;margin-bottom:12px}ha-form{display:block}`,zt=[{name:"title",selector:{text:{}}}],Ut=[{name:"resorts",selector:{device:{multiple:!0,integration:"bergfex"}}}];let Lt=class extends ct{setConfig(t){this._config={show_snow:!0,show_lifts_slopes:!0,show_conditions:!0,show_forecast:!1,show_trend:!1,...t}}_valueChanged(t){this.hass&&this._config&&St(this,"config-changed",{config:{...this._config,...t.detail.value}})}render(){if(!this.hass||!this._config)return B``;const t=[{name:"show_snow",selector:{boolean:{}}},{name:"show_lifts_slopes",selector:{boolean:{}}},{name:"show_conditions",selector:{boolean:{}}},{name:"show_forecast",selector:{boolean:{}}},{name:"show_trend",selector:{boolean:{}}},{name:"show_link",selector:{boolean:{}}},{name:"show_last_updated",selector:{boolean:{}}},{name:"hide_closed_resorts",selector:{boolean:{}}},{name:"sort_by",selector:{select:{mode:"dropdown",clearable:!0,options:[{value:"mountain",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.mountain")},{value:"valley",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.valley")},{value:"new",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.new")},{value:"lift",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.lift")},{value:"classical",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.classical")},{value:"skating",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.skating")},{value:"update",label:kt(this.hass,"component.bergfex-card.editor.sort_by_options.update")}]}}}];return B`
      <ha-card>
        <div class="card-content card-config">
          <div class="group">
            <div class="group-header">${kt(this.hass,"component.bergfex-card.editor.groups.core")}</div>
            <ha-form
              .schema=${zt}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>kt(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <ha-form
              .schema=${Ut}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>kt(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>

          <div class="group">
            <div class="group-header">${kt(this.hass,"component.bergfex-card.editor.groups.display")}</div>
            <ha-form
              .schema=${t}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${t=>kt(this.hass,`component.bergfex-card.editor.${t.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>
      </ha-card>
    `}static{this.styles=r`
    ${n(Rt)}
  `}};t([_t({attribute:!1})],Lt.prototype,"hass",void 0),t([ut()],Lt.prototype,"_config",void 0),Lt=t([dt("bergfex-card-editor")],Lt);var Ft=Object.freeze({__proto__:null,get BergfexCardEditor(){return Lt}});export{Ot as BergfexCard};
