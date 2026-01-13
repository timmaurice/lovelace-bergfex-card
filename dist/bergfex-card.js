function t(t,e,s,i){var o,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(n=(a<3?o(n):a>3?o(e,s,n):o(e,s))||n);return a>3&&n&&Object.defineProperty(e,s,n),n}console.groupCollapsed("%c🏔️ BERGFEX CARD%cv2.0.0","color: orange; font-weight: bold; background: black; padding: 2px 4px; border-radius: 2px 0 0 2px;","color: white; font-weight: bold; background: dimgray; padding: 2px 4px; border-radius: 0 2px 2px 0;"),console.info("A Lovelace card to display ski resort conditions from Bergfex."),console.info("Github:  https://github.com/timmaurice/lovelace-bergfex-card.git"),console.info("Sponsor: https://buymeacoffee.com/timmaurice"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new n("string"==typeof t?t:t+"",void 0,o),r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n(s,t,o)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return a(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);i?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(s)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of o){const o=document.createElement("style"),i=e.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=s.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(void 0!==o&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,o=s._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=s.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=o;const n=i.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const o=this.constructor,i=this[t];if(s??=o.getPropertyOptions(t),!((s.hasChanged??$)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==i||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,s,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,v?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,S=A.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,P=`<${C}>`,M=document,O=()=>M.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,j="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,L=/>/g,R=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,G=M.createTreeWalker(M,129);function Z(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,o=[];let i,n=2===e?"<svg>":3===e?"<math>":"",a=U;for(let e=0;e<s;e++){const s=t[e];let r,c,l=-1,d=0;for(;d<s.length&&(a.lastIndex=d,c=a.exec(s),null!==c);)d=a.lastIndex,a===U?"!--"===c[1]?a=H:void 0!==c[1]?a=L:void 0!==c[2]?(I.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=R):void 0!==c[3]&&(a=R):a===R?">"===c[0]?(a=i??U,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?R:'"'===c[3]?F:D):a===F||a===D?a=R:a===H||a===L?a=U:(a=R,i=void 0);const h=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===U?s+P:l>=0?(o.push(r),s.slice(0,l)+N+s.slice(l)+E+h):s+E+(-2===l?e:h)}return[Z(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Y{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,n=0;const a=t.length-1,r=this.parts,[c,l]=J(t,e);if(this.el=Y.createElement(c,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=G.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(N)){const e=l[n++],s=o.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:i,name:a[2],strings:s,ctor:"."===a[1]?et:"?"===a[1]?st:"@"===a[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(E)&&(r.push({type:6,index:i}),o.removeAttribute(t));if(I.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)o.append(t[s],O()),G.nextNode(),r.push({type:2,index:++i});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===C)r.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)r.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,o){if(e===B)return e;let i=void 0!==o?s._$Co?.[o]:s._$Cl;const n=T(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(t),i._$AT(t,s,o)),void 0!==o?(s._$Co??=[])[o]=i:s._$Cl=i),void 0!==i&&(e=K(t,i._$AS(t,e.values),i,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);G.currentNode=o;let i=G.nextNode(),n=0,a=0,r=s[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new Q(i,i.nextSibling,this,t):1===r.type?e=new r.ctor(i,r.name,r.strings,this,t):6===r.type&&(e=new it(i,this,t)),this._$AV.push(e),r=s[++a]}n!==r?.index&&(i=G.nextNode(),n++)}return G.currentNode=M,o}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const i of t)o===e.length?e.push(s=new Q(this.O(O()),this.O(O()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,o){const i=this.strings;let n=!1;if(void 0===i)t=K(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const o=t;let a,r;for(t=i[0],a=0;a<i.length-1;a++)r=K(this,o[s+a],e,a),r===B&&(r=this._$AH[a]),n||=!T(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+i[a+1]),this._$AH[a]=r}n&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class ot extends tt{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===B)return;const s=this._$AH,o=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==V&&(s===V||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(Y,Q),(A.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const o=s?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=s?.renderBefore??null;o._$litPart$=i=new Q(e.insertBefore(O(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:$},ht=(t=dt,e,s)=>{const{kind:o,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===o){const{name:o}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(o,i,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=s;return function(s){const i=this[o];e.call(this,s),this.requestUpdate(o,i,t)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return pt({...t,state:!0,attribute:!1})}
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
const ut=1,ft=2,gt=t=>(...e)=>({_$litDirective$:t,values:e});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=gt(class extends mt{constructor(t){if(super(t),t.type!==_t||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return B}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yt extends mt{constructor(t){if(super(t),this.it=V,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===B)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}yt.directiveName="unsafeHTML",yt.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class wt extends yt{}wt.directiveName="unsafeSVG",wt.resultType=2;const $t=gt(wt);const bt={de:{editor:{groups:{core:"Grundeinstellungen",display:"Anzeige"},title:"Titel (Optional)",resorts:"Skigebiete",show_snow:"Schneeinformationen anzeigen",show_lifts_slopes:"Lift- & Pistenstatistiken anzeigen",show_conditions:"Bedingungen anzeigen",show_forecast:"Schneevorhersage anzeigen",show_trend:"Trend-Indikatoren anzeigen (24h)",show_last_updated:"Zuletzt aktualisiert anzeigen",show_link:"Link-Symbol anzeigen",hide_closed_resorts:"Geschlossene Skigebiete ausblenden",sort_by:"Sortieren nach",sort_by_options:{mountain:"Schnee (Berg)",valley:"Schnee (Tal)",new:"Neuschnee",lift:"Offene Lifte",update:"Letzte Aktualisierung"}},card:{resort_not_found:"Skigebiet nicht gefunden: {resort}",lifts_open:"Lifte",header:{snow_mountain:"Berg",snow_valley:"Tal",new_snow:"Neu",snow_condition:"Schneezustand",slope_condition:"Pistenzustand",avalanche_warning:"Lawinenwarnstufe",last_snowfall:"Letzter Schneefall",slopes_info:"Pisten",slopes_open_km:"Offen",slopes_total_km:"Gesamt",link_title:"{resortName} Detailseite auf bergfex öffnen"},forecast:{daily:"Täglich",summary:"Zusammenfassung",hour:"{hours} Stunden",today:"Heute",tomorrow:"Morgen"},accordion:{conditions:"Bedingungen",forecast:"Schneevorhersage"}},common:{errors:{no_resorts:"Sie müssen mindestens ein Skigebiet definieren."}}},en:{editor:{groups:{core:"Core Configuration",display:"Display"},title:"Title (Optional)",resorts:"Resort Entities",show_snow:"Show snow information",show_lifts_slopes:"Show lift & slope statistics",show_conditions:"Show conditions section",show_forecast:"Show snow forecast",show_trend:"Show trend indicators (24h)",show_last_updated:"Show last updated",show_link:"Show link icon",hide_closed_resorts:"Hide closed resorts",sort_by:"Sort by",sort_by_options:{mountain:"Snow (Mountain)",valley:"Snow (Valley)",new:"New Snow",lift:"Lifts Open",update:"Last Update"}},card:{resort_not_found:"Resort not found: {resort}",lifts_open:"Lifts",header:{snow_mountain:"Mountain",snow_valley:"Valley",new_snow:"New",snow_condition:"Snow Condition",slope_condition:"Slope Condition",avalanche_warning:"Avalanche Warning",last_snowfall:"Last Snowfall",slopes_info:"Slopes",slopes_open_km:"Open",slopes_total_km:"Total",link_title:"Open {resortName} detail page on bergfex"},forecast:{daily:"Daily",summary:"Summary",hour:"{hours} Hour",today:"Today",tomorrow:"Tomorrow"},accordion:{conditions:"Conditions",forecast:"Snow Forecast"}},common:{errors:{no_resorts:"You need to define at least one resort entity."}}},pl:{editor:{groups:{core:"Główna konfiguracja",display:"Wyświetlacz"},title:"Tytuł (opcjonalnie)",resorts:"Wpisy kurortu",show_snow:"Pokaż informację o śniegu",show_lifts_slopes:"Pokaż statystyki wyciągów i stoków",show_conditions:"Pokaż sekcję warunków",show_forecast:"Pokaż prognozę śniegu",show_trend:"Pokaż indykator trendu (24g)",show_last_updated:"Pokaż ostatnio aktualizowane",show_link:"Pokaż ikonę linku",hide_closed_resorts:"Ukryj zamknięte kurorty",sort_by:"Posortuj",sort_by_options:{mountain:"Śnieg (szczyt)",valley:"Śnieg (dolina)",new:"Nowy śnieg",lift:"Otwarte wyciągi",update:"Ostatnio aktualizowane"}},card:{resort_not_found:"Nie znaleziono resortu: {resort}",lifts_open:"Wyciągi",header:{snow_mountain:"Szczyt",snow_valley:"Dolina",new_snow:"Nowy opad",snow_condition:"Warunki śniegowe",slope_condition:"Warunki na stoku",avalanche_warning:"Ostrzeżenie lawinowe",last_snowfall:"Ostatni opad",slopes_info:"Trasy",slopes_open_km:"otwarte",slopes_total_km:"Całkowita",link_title:"Otwórz informację o  {resortName} na stronie Bergfex"},forecast:{daily:"Dzienna",summary:"Podsumowanie",hour:"{hours} godziny",today:"Dziś",tomorrow:"Jutro"},accordion:{conditions:"Warunki",forecast:"Prognoza opadów"}},common:{errors:{no_resorts:"Musisz zdefiniować przynajmniej jeden wpis o resorcie."}}}};function xt(t,e){let s=bt[t];for(const t of e){if("object"!=typeof s||null===s)return;s=s[t]}return"string"==typeof s?s:void 0}function At(t,e,s={}){const o=t.language||"en",i=e.replace("component.bergfex-card.","").split("."),n=xt(o,i)??xt("en",i);if("string"==typeof n){let t=n;for(const e in s)t=t.replace(`{${e}}`,String(s[e]));return t}return e}const St=(t,e,s,o)=>{const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:s});t.dispatchEvent(i)};function kt(t,e){const s=new Date(t),o=new Date,i=Math.round((o.getTime()-s.getTime())/1e3);try{const t=new Intl.RelativeTimeFormat(e.language,{numeric:"auto"});if(i<60)return t.format(-i,"second");const s=Math.round(i/60);if(s<60)return t.format(-s,"minute");const o=Math.round(s/60);if(o<24)return t.format(-o,"hour");const n=Math.round(o/24);return t.format(-n,"day")}catch{return function(t,e){const s=new Date(t),o=new Date,i={hour:"numeric",minute:"2-digit"};return s.getDate()===o.getDate()&&s.getMonth()===o.getMonth()&&s.getFullYear()===o.getFullYear()||Object.assign(i,{year:"numeric",month:"short",day:"2-digit"}),"12"===e.locale?.time_format&&(i.hour12=!0),s.toLocaleString(e.language,i)}(t,e)}}const Nt=r`:host ::slotted(.card-content),.card-content{display:flex;flex-direction:column;gap:12px;padding:16px}.resort{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);cursor:pointer;display:flex;flex-direction:column;padding:12px;transition:background-color .2s ease-in-out}.resort:hover{background-color:rgba(var(--rgb-primary-text-color), 0.05)}.resort-header{align-items:center;display:flex;justify-content:space-between}.resort-name{font-size:1.2em;font-weight:500}.resort-status{background-color:var(--divider-color);border-radius:4px;color:var(--primary-text-color);font-size:.9em;font-weight:500;padding:2px 6px;text-transform:uppercase}.resort-status.open{background-color:var(--label-badge-green)}.resort-status.closed{background-color:var(--label-badge-red)}.details{display:grid;gap:8px;grid-template-columns:repeat(3, minmax(0, 1fr));padding-top:12px}.detail-item{--mdc-icon-size: 24px;align-items:center;cursor:pointer;display:flex;gap:8px}.detail-item ha-icon{color:var(--secondary-text-color)}.detail-item svg,.custom-icon{align-items:center;display:flex;height:var(--mdc-icon-size, 24px);justify-content:center;width:var(--mdc-icon-size, 24px)}.detail-item svg svg,.custom-icon svg{height:100%;stroke:var(--secondary-text-color);width:100%}.detail-item-value{align-items:flex-start;display:flex;flex-direction:column;font-size:1.1em;width:calc(100% - 32px)}.detail-item-label{color:var(--secondary-text-color);font-size:.8em}.detail-item.n-a{opacity:.5}.value-row{align-items:center;display:flex;justify-content:space-between;width:100%}.trend-icon{--mdc-icon-size: 18px;display:inline-block;margin-left:4px;vertical-align:middle}.trend-icon.up{color:var(--label-badge-green, #4caf50)}.trend-icon.down{color:var(--label-badge-red, #f44336)}.trend-icon.same{color:var(--secondary-text-color);opacity:.5}.resort-footer{align-items:center;border-top:1px solid var(--divider-color);display:flex;justify-content:space-between;padding:12px 0 0}.link-icon{color:var(--secondary-text-color);display:flex;text-decoration:none}.last-updated{align-items:center;color:var(--secondary-text-color);cursor:pointer;display:flex;font-size:.8em;gap:4px;justify-content:flex-end}.warning{color:var(--error-color)}.progress-bar-container{background-color:var(--divider-color);border-radius:2px;height:4px;margin-top:4px;overflow:hidden;width:100%}.progress-bar-fill{background-color:var(--primary-color);border-radius:2px;height:100%;transition:width .3s ease-in-out}.accordion-container{border-top:1px solid var(--divider-color);margin-top:12px}.accordion-container+.accordion-container{margin-top:0}.accordion-header{align-items:center;color:var(--primary-text-color);cursor:pointer;display:flex;font-weight:500;justify-content:space-between;padding:12px 0}.accordion-header:hover{background-color:rgba(var(--rgb-primary-text-color), 0.02)}.accordion-content{padding-bottom:12px}.accordion-content.details{grid-template-columns:repeat(2, minmax(0, 1fr))}.forecast-tabs{border-bottom:1px solid var(--divider-color);display:flex;gap:16px;margin-bottom:12px}.forecast-tab{border-bottom:2px solid rgba(0,0,0,0);color:var(--secondary-text-color);cursor:pointer;font-weight:500;padding:8px 12px;transition:all .2s ease}.forecast-tab:hover{color:var(--primary-text-color)}.forecast-tab.active{border-bottom-color:var(--primary-color);color:var(--primary-color)}.forecast-carousel{align-items:center;display:flex;flex-direction:column;gap:8px;position:relative}.forecast-image-container{align-items:center;aspect-ratio:16/9;background-color:rgba(0,0,0,.05);border-radius:8px;display:flex;justify-content:center;overflow:hidden;position:relative;width:100%}.forecast-image{height:100%;object-fit:contain;width:100%}.carousel-controls{align-items:center;display:flex;justify-content:space-between;margin-top:8px;width:100%}.carousel-btn{align-items:center;background:none;border:none;border-radius:50%;color:var(--primary-text-color);cursor:pointer;display:flex;justify-content:center;padding:8px;transition:background-color .2s}.carousel-btn:hover{background-color:rgba(var(--rgb-primary-text-color), 0.1)}.carousel-btn:disabled{color:var(--disabled-text-color);cursor:not-allowed}.carousel-label{font-size:1.1em;font-weight:500}`;const Et="bergfex-card",Ct=`${Et}-editor`;let Pt=class extends rt{constructor(){super(...arguments),this._forecastState={},this._accordionState={},this._historyState={}}setConfig(t){if(!t||!t.resorts||!Array.isArray(t.resorts)||0===t.resorts.length)throw new Error(At(this.hass,"common.errors.no_resorts"));this._config={show_snow:!0,show_lifts:!0,show_last_updated:!0,hide_closed_resorts:!1,show_link:!0,show_conditions:!0,show_avalanche:!0,show_slopes:!0,show_trend:!1,...t},this._config.show_trend&&this._fetchHistory()}static async getConfigElement(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),s=e?.constructor;return s?.getConfigElement&&await s.getConfigElement(),await Promise.resolve().then(function(){return jt}),document.createElement(Ct)}static getStubConfig(){return{title:"Bergfex",resorts:[]}}getCardSize(){return 3}_getResorts(t,e){const s={},o=Object.values(t.states);return e.resorts.forEach(e=>{const i="string"==typeof e?e:e.device,n="object"==typeof e?e.name:void 0,a=o.filter(e=>t.entities[e.entity_id]?.device_id===i&&(e.entity_id.startsWith("sensor.")||e.entity_id.startsWith("image.")));if(0!==a.length&&(s[i]||(s[i]={forecast_days:[],forecast_summaries:[]}),n&&(s[i].name=n),a.forEach(t=>{const e=t.entity_id;e.endsWith("_status")&&(s[i].status=e),e.endsWith("_snow_valley")&&(s[i].snow_valley=e),e.endsWith("_snow_mountain")&&(s[i].snow_mountain=e),e.endsWith("_new_snow")&&(s[i].new_snow=e),e.endsWith("_lifts_open")&&(s[i].lifts_open=e),e.endsWith("_lifts_total")&&(s[i].lifts_total=e),e.endsWith("_last_update")&&(s[i].last_update=e),e.endsWith("_snow_condition")&&(s[i].snow_condition=e),e.endsWith("_last_snowfall")&&(s[i].last_snowfall=e),e.endsWith("_avalanche_warning")&&(s[i].avalanche_warning=e),e.endsWith("_slopes_open_km")&&(s[i].slopes_open_km=e),e.endsWith("_slopes_total_km")&&(s[i].slopes_total_km=e),e.endsWith("_slopes_open")&&(s[i].slopes_open=e),e.endsWith("_slopes_total")&&(s[i].slopes_total=e),e.endsWith("_slope_condition")&&(s[i].slope_condition=e),e.includes("_snow_forecast_day_")&&s[i].forecast_days?.push(e),e.includes("_snow_forecast_summary_")&&s[i].forecast_summaries?.push(e)}),s[i].forecast_days?.sort(),s[i].forecast_summaries?.sort((t,e)=>{const s=t=>{const e=t.match(/summary_(\d+)h/);return e?parseInt(e[1],10):0};return s(t)-s(e)}),!(s[i].forecast_days&&0!==s[i].forecast_days.length||s[i].forecast_summaries&&0!==s[i].forecast_summaries.length))){const t=s[i].status;if(t){const e=t.match(/^sensor\.(.+)_status$/);if(e){const t=`image.${e[1]}_snow_forecast`;o.forEach(e=>{e.entity_id.startsWith(t)&&(e.entity_id.includes("_day_")?s[i].forecast_days?.push(e.entity_id):e.entity_id.includes("_summary_")&&s[i].forecast_summaries?.push(e.entity_id))}),s[i].forecast_days?.sort(),s[i].forecast_summaries?.sort((t,e)=>{const s=t=>{const e=t.match(/summary_(\d+)h/);return e?parseInt(e[1],10):0};return s(t)-s(e)})}}}}),s}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(e){const s=this._getResorts(this.hass,this._config),o=Object.values(s).flatMap(t=>Object.values(t)),i=o.some(t=>t&&e.states[t]!==this.hass.states[t]);return this.getOldConfig(t)?.show_trend!==this._config.show_trend&&this._config.show_trend&&this._fetchHistory(),i||e.language!==this.hass.language||t.has("_historyState")}return!0}getOldConfig(t){return t.get("_config")}async _fetchHistory(){if(!this.hass||!this._config.resorts)return;const t=this._getResorts(this.hass,this._config),e=Object.values(t).flatMap(t=>[t.snow_mountain,t.snow_valley,t.new_snow,t.lifts_open,t.slopes_open_km,t.slopes_open]).filter(Boolean);0!==e.length&&(this._historyState=await async function(t,e,s){if(0===e.length)return{};const o=new Date;o.setHours(o.getHours()-s);try{const s=await t.callWS({type:"history/history_during_period",start_time:o.toISOString(),end_time:o.toISOString(),entity_ids:e,no_attributes:!0}),i={};return Object.entries(s).forEach(([t,e])=>{Array.isArray(e)&&e.length>0&&(i[t]=e[0].s)}),i}catch(t){return console.error(`Error fetching history for ${e.join(", ")}:`,t),{}}}(this.hass,e,24))}_renderTrend(t,e){if(!this._config.show_trend)return W``;const s=this._historyState[t];if(void 0===s||this._isNA(e)||this._isNA(s))return W``;const o=parseFloat(e),i=parseFloat(s);return isNaN(o)||isNaN(i)?W``:o>i?W`<ha-icon class="trend-icon up" icon="mdi:trending-up"></ha-icon>`:o<i?W`<ha-icon class="trend-icon down" icon="mdi:trending-down"></ha-icon>`:W`<ha-icon class="trend-icon same" icon="mdi:trending-neutral"></ha-icon>`}_handleMoreInfo(t){St(this,"hass-more-info",{entityId:t})}_handleTabChange(t,e,s){s.stopPropagation(),this._forecastState={...this._forecastState,[t]:{...this._forecastState[t],tab:e,index:0}}}_handleCarouselChange(t,e,s,o){o.stopPropagation();const i=this._forecastState[t]||{tab:"daily",index:0};let n=i.index+("next"===e?1:-1);n<0&&(n=s-1),n>=s&&(n=0),this._forecastState={...this._forecastState,[t]:{...i,index:n}}}_toggleAccordion(t,e,s){s.stopPropagation(),this._accordionState={...this._accordionState,[t]:this._accordionState[t]===e?null:e}}_formatForecastDate(t){const e=new Date;if(e.setDate(e.getDate()+t),0===t)return At(this.hass,"component.bergfex-card.card.forecast.today");if(1===t)return At(this.hass,"component.bergfex-card.card.forecast.tomorrow");{const t=this.hass.locale?.language||this.hass.language||"de";return`${e.toLocaleDateString(t,{weekday:"short"})}, ${e.getDate().toString().padStart(2,"0")}.${(e.getMonth()+1).toString().padStart(2,"0")}.`}}_renderProgressBar(t,e){const s=Math.min(100,Math.max(0,t/e*100));return W`
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${s}%"></div>
      </div>
    `}_isNA(t){return["N/A","keine Meldung","unknown"].includes(t)}render(){if(!this._config||!this.hass)return W``;let t=Object.entries(this._getResorts(this.hass,this._config));this._config.hide_closed_resorts&&(t=t.filter(([,t])=>t.status&&"open"===this.hass.states[t.status].state.toLowerCase()));const e=this._config.sort_by;return e&&"none"!==e&&t.sort(([,t],[,s])=>{let o,i;switch(e){case"mountain":o=t.snow_mountain?parseFloat(this.hass.states[t.snow_mountain].state):NaN,i=s.snow_mountain?parseFloat(this.hass.states[s.snow_mountain].state):NaN;break;case"valley":o=t.snow_valley?parseFloat(this.hass.states[t.snow_valley].state):NaN,i=s.snow_valley?parseFloat(this.hass.states[s.snow_valley].state):NaN;break;case"new":o=t.new_snow?parseFloat(this.hass.states[t.new_snow].state):NaN,i=s.new_snow?parseFloat(this.hass.states[s.new_snow].state):NaN;break;case"lift":o=t.lifts_open?parseFloat(this.hass.states[t.lifts_open].state):NaN,i=s.lifts_open?parseFloat(this.hass.states[s.lifts_open].state):NaN;break;case"update":return o=t.last_update?this.hass.states[t.last_update].state:"0",i=s.last_update?this.hass.states[s.last_update].state:"0",new Date(i).getTime()-new Date(o).getTime()}if("number"==typeof o&&"number"==typeof i){const t=isNaN(o),e=isNaN(i);return t&&e?0:t?1:e?-1:i-o}return 0}),W`
      <ha-card .header=${this._config.title} tabindex="0">
        <div class="card-content">
          ${t.map(([t,e])=>{const s=e.status;if(!s)return W`
                <div class="warning">
                  ${kt(this.hass,"component.bergfex-card.card.resort_not_found",{resort:t})}
                </div>
              `;const o=this.hass.devices[t],i=e.name||o?.name_by_user||o?.name||"Unknown Resort",n=e.status?this.hass.states[e.status]:void 0,a=n?.state??"N/A",r=n?.attributes.link,c=e.snow_valley?this.hass.states[e.snow_valley]:void 0,l=e.snow_mountain?this.hass.states[e.snow_mountain]:void 0,d=e.new_snow?this.hass.states[e.new_snow]:void 0,h=e.lifts_open?this.hass.states[e.lifts_open]:void 0,p=e.lifts_total?this.hass.states[e.lifts_total]:void 0,u=e.last_update?this.hass.states[e.last_update]:void 0,_=e.snow_condition?this.hass.states[e.snow_condition]:void 0,f=e.slope_condition?this.hass.states[e.slope_condition]:void 0,g=e.last_snowfall?this.hass.states[e.last_snowfall]:void 0,m=e.avalanche_warning?this.hass.states[e.avalanche_warning]:void 0,v=e.slopes_open_km?this.hass.states[e.slopes_open_km]:void 0,y=e.slopes_total_km?this.hass.states[e.slopes_total_km]:void 0,w=e.slopes_open?this.hass.states[e.slopes_open]:void 0,$=e.slopes_total?this.hass.states[e.slopes_total]:void 0;return W`
              <div class="resort" tabindex="0" @click=${()=>this._handleMoreInfo(s)}>
                <div class="resort-header">
                  <span class="resort-name">${o}</span>
                  <span
                    class=${vt({"resort-status":!0,open:"open"===(c||"").toLowerCase(),closed:"closed"===(c||"").toLowerCase()})}
                    >${d}</span
                  >
                </div>

                <div class="details">
                  ${this._config.show_snow?W`
                        <div
                          class=${vt({"detail-item":!0,"n-a":!_||isNaN(parseFloat(_.state))})}
                          @click=${t=>{t.stopPropagation(),_&&this._handleMoreInfo(_.entity_id)}}
                        >
                          <span class="custom-icon">${$t('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  \x3c!-- Mountain --\x3e\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  \x3c!-- Left-pointing arrow further right from first peak --\x3e\n  <g stroke-width="1">\n    <line x1="15" y1="3" x2="10" y2="3" />\n    <polyline points="12,1 10,3 12,5" />\n  </g>\n</svg>')}</span>
                          <div class="detail-item-value">
                            ${l&&!isNaN(parseFloat(l.state))?W`<div class="value-row">
                                  <span
                                    >${_.state} ${_.attributes.unit_of_measurement??""}</span
                                  >
                                  ${this._renderTrend(l.entity_id,l.state)}
                                </div>`:W`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.snow_mountain")}
                              ${_?.attributes.elevation?`(${_.attributes.elevation}m)`:""}</span
                            >
                          </div>
                        </div>
                        <div
                          class=${vt({"detail-item":!0,"n-a":!p||isNaN(parseFloat(p.state))})}
                          @click=${t=>{t.stopPropagation(),p&&this._handleMoreInfo(p.entity_id)}}
                        >
                          <span class="custom-icon">${$t('<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- License: MIT. Made by Lucide Contributors: https://lucide.dev/ --\x3e\n<svg \n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#000000"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M8 3l4 8 5-5 5 15H2L8 3z" />\n  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />\n\n  <g stroke-width="1">\n    <line x1="5" y1="17.5" x2="10" y2="17.5" />\n    <polyline points="8,15.5 5,17.5 8,19.5" />\n  </g>\n</svg>')}</span>
                          <div class="detail-item-value">
                            ${c&&!isNaN(parseFloat(c.state))?W`<div class="value-row">
                                  <span>${c.state} ${c.attributes.unit_of_measurement??""}</span>
                                  ${this._renderTrend(c.entity_id,c.state)}
                                </div>`:W`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.snow_valley")}
                              ${p?.attributes.elevation?`(${p.attributes.elevation}m)`:""}</span
                            >
                          </div>
                        </div>
                        <div
                          class=${vt({"detail-item":!0,"n-a":!u||isNaN(parseFloat(u.state))})}
                          @click=${t=>{t.stopPropagation(),u&&this._handleMoreInfo(u.entity_id)}}
                        >
                          <ha-icon icon="mdi:weather-snowy-heavy"></ha-icon>
                          <div class="detail-item-value">
                            ${d&&!isNaN(parseFloat(d.state))?W`<div class="value-row">
                                  <span>${d.state} ${d.attributes.unit_of_measurement??""}</span>
                                  ${this._renderTrend(d.entity_id,d.state)}
                                </div>`:W`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${kt(this.hass,"component.bergfex-card.card.header.new_snow")}</span
                            >
                          </div>
                        </div>
                      `:""}
                  ${this._config.show_lifts_slopes?W`
                        <div
                          class=${vt({"detail-item":!0,"n-a":!h||!p||isNaN(parseFloat(h.state))})}
                          @click=${t=>{t.stopPropagation(),h&&this._handleMoreInfo(h.entity_id)}}
                        >
                          <ha-icon icon="mdi:gondola"></ha-icon>
                          <div class="detail-item-value">
                            ${h&&p&&!isNaN(parseFloat(h.state))&&!isNaN(parseFloat(p.state))?W`<div class="value-row">
                                    <span>${h.state}/${p.state}</span>
                                    ${this._renderTrend(h.entity_id,h.state)}
                                  </div>
                                  ${this._renderProgressBar(parseFloat(h.state),parseFloat(p.state))}`:W`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${At(this.hass,"component.bergfex-card.card.lifts_open")}</span
                            >
                          </div>
                        </div>
                      `:""}
                  ${this._config.show_lifts_slopes&&(v||y||w||$)?W`
                        ${v?W`
                              <div
                                class=${vt({"detail-item":!0,"n-a":!x||isNaN(parseFloat(x.state))})}
                                @click=${t=>{t.stopPropagation(),x&&this._handleMoreInfo(x.entity_id)}}
                              >
                                <span class="custom-icon fill">${bt(Ct)}</span>
                                <div class="detail-item-value">
                                  ${v&&!isNaN(parseFloat(v.state))?W`<div class="value-row">
                                          <span
                                            >${v.state}${y&&!isNaN(parseFloat(y.state))?`/${y.state}`:""}
                                            ${v.attributes.unit_of_measurement??"km"}</span
                                          >
                                          ${this._renderTrend(v.entity_id,v.state)}
                                        </div>
                                        ${y&&!isNaN(parseFloat(y.state))?this._renderProgressBar(parseFloat(v.state),parseFloat(y.state)):""}`:W`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.header.classical_trails")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                        ${w&&$?W`
                              <div
                                class=${vt({"detail-item":!0,"n-a":!w||!$||isNaN(parseFloat(w.state))||isNaN(parseFloat($.state))})}
                                @click=${t=>{t.stopPropagation(),w&&this._handleMoreInfo(w.entity_id)}}
                              >
                                <span class="custom-icon fill">${bt(Et)}</span>
                                <div class="detail-item-value">
                                  ${w&&$&&!isNaN(parseFloat(w.state))&&!isNaN(parseFloat($.state))?W`<div class="value-row">
                                          <span>${w.state}/${$.state}</span>
                                          ${this._renderTrend(w.entity_id,w.state)}
                                        </div>
                                        ${this._renderProgressBar(parseFloat(w.state),parseFloat($.state))}`:W`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.header.skating_trails")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                      `:B`
                        ${this._config.show_lifts_slopes?B`
                              <div
                                class=${vt({"detail-item":!0,"n-a":!f||isNaN(parseFloat(f.state))||isNaN(parseFloat(String(z??NaN)))})}
                                @click=${t=>{t.stopPropagation(),f&&this._handleMoreInfo(f.entity_id)}}
                              >
                                <ha-icon icon="mdi:gondola"></ha-icon>
                                <div class="detail-item-value">
                                  ${f&&!isNaN(parseFloat(f.state))?(()=>{const t=parseFloat(f.state),e=z?parseFloat(String(z)):NaN;return isNaN(e)?B`<div class="value-row">
                                          <span>${f.state}</span>
                                          ${this._renderTrend(f.entity_id,f.state)}
                                        </div>`:B`<div class="value-row">
                                              <span>${t}/${e}</span>
                                              ${this._renderTrend(f.entity_id,f.state)}
                                            </div>
                                            ${this._renderProgressBar(t,e)}`})():B`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${kt(this.hass,"component.bergfex-card.card.lifts_open")}</span
                                  >
                                </div>
                              </div>
                            `:""}
                        ${this._config.show_lifts_slopes&&(b||w)?B`
                              ${b?B`
                                    <div
                                      class=${vt({"detail-item":!0,"n-a":!b||isNaN(parseFloat(b.state))})}
                                      @click=${t=>{t.stopPropagation(),b&&this._handleMoreInfo(b.entity_id)}}
                                    >
                                      <span class="custom-icon stroke">
                                        <ha-icon icon="mdi:slope-downhill"></ha-icon>
                                      </span>
                                      <div class="detail-item-value">
                                        ${b&&!isNaN(parseFloat(b.state))?(()=>{const t=parseFloat(b.state),e=L?parseFloat(String(L)):NaN,s=b.attributes.unit_of_measurement??"km";return isNaN(e)?B`<div class="value-row">
                                                <span>${b.state} ${s}</span>
                                                ${this._renderTrend(b.entity_id,b.state)}
                                              </div>`:B`<div class="value-row">
                                                    <span>${t}/${e} ${s}</span>
                                                    ${this._renderTrend(b.entity_id,b.state)}
                                                  </div>
                                                  ${this._renderProgressBar(t,e)}`})():B`<span>N/A</span>`}
                                        <span class="detail-item-label"
                                          >${kt(this.hass,"component.bergfex-card.card.header.slopes_info")}</span
                                        >
                                      </div>
                                    </div>
                                  `:""}
                              ${w&&H?B`
                                    <div
                                      class=${vt({"detail-item":!0,"n-a":!w||isNaN(parseFloat(w.state))||isNaN(parseFloat(String(H??NaN)))})}
                                      @click=${t=>{t.stopPropagation(),w&&this._handleMoreInfo(w.entity_id)}}
                                    >
                                      <ha-icon icon="mdi:counter"></ha-icon>
                                      <div class="detail-item-value">
                                        ${w&&!isNaN(parseFloat(w.state))?(()=>{const t=parseFloat(w.state),e=H?parseFloat(String(H)):NaN;return isNaN(e)?B`<div class="value-row">
                                                <span>${w.state}</span>
                                                ${this._renderTrend(w.entity_id,w.state)}
                                              </div>`:B`<div class="value-row">
                                                    <span>${t}/${e}</span>
                                                    ${this._renderTrend(w.entity_id,w.state)}
                                                  </div>
                                                  ${this._renderProgressBar(t,e)}`})():B`<span>N/A</span>`}
                                        <span class="detail-item-label"
                                          >${kt(this.hass,"component.bergfex-card.card.header.slopes_info")}
                                          (${kt(this.hass,"component.bergfex-card.card.header.slopes_total")})</span
                                        >
                                      </div>
                                    </div>
                                  `:""}
                            `:""}
                      `}
                </div>

                ${this._config.show_conditions&&(_||f||m||g)?W`
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
                        ${"conditions"===this._accordionState[t]?W`
                              <div class="accordion-content details">
                                ${this._config.show_conditions&&(_||f)?W`
                                      ${_?W`
                                            <div
                                              class=${vt({"detail-item":!0,"n-a":this._isNA(m.state)})}
                                              @click=${t=>{t.stopPropagation(),m&&this._handleMoreInfo(m.entity_id)}}
                                            >
                                              <ha-icon icon="mdi:weather-snowy"></ha-icon>
                                              <div class="detail-item-value">
                                                <span>${m.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.snow_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                      ${f?W`
                                            <div
                                              class=${vt({"detail-item":!0,"n-a":this._isNA(v.state)})}
                                              @click=${t=>{t.stopPropagation(),v&&this._handleMoreInfo(v.entity_id)}}
                                            >
                                              <ha-icon icon="mdi:ski"></ha-icon>
                                              <div class="detail-item-value">
                                                <span>${v.state}</span>
                                                <span class="detail-item-label"
                                                  >${kt(this.hass,"component.bergfex-card.card.header.slope_condition")}</span
                                                >
                                              </div>
                                            </div>
                                          `:""}
                                    `:""}
                                ${this._config.show_conditions&&m?W`
                                      <div
                                        class=${vt({"detail-item":!0,"n-a":this._isNA(y.state)})}
                                        @click=${t=>{t.stopPropagation(),y&&this._handleMoreInfo(y.entity_id)}}
                                      >
                                        <ha-icon icon="mdi:alert"></ha-icon>
                                        <div class="detail-item-value">
                                          <span>${y.state}</span>
                                          <span class="detail-item-label"
                                            >${kt(this.hass,"component.bergfex-card.card.header.avalanche_warning")}</span
                                          >
                                        </div>
                                      </div>
                                    `:""}
                                ${g?W`
                                      <div
                                        class=${vt({"detail-item":!0,"n-a":this._isNA($.state)})}
                                        @click=${t=>{t.stopPropagation(),this._handleMoreInfo($.entity_id)}}
                                      >
                                        <ha-icon icon="mdi:calendar-clock"></ha-icon>
                                        <div class="detail-item-value">
                                          <span>${$.state}</span>
                                          <span class="detail-item-label"
                                            >${kt(this.hass,"component.bergfex-card.card.header.last_snowfall")}</span
                                          >
                                        </div>
                                      </div>
                                    `:""}
                                ${this._config.show_conditions&&a?B`
                                      <div
                                        class=${vt({"detail-item":!0,"n-a":this._isNA(a.state)})}
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
                ${(()=>{if(!this._config.show_forecast)return"";const s=e.forecast_days&&e.forecast_days.length>0&&e.forecast_days.some(t=>{const e=this.hass.states[t];return e&&e.attributes.entity_picture}),o=e.forecast_summaries&&e.forecast_summaries.length>0&&e.forecast_summaries.some(t=>{const e=this.hass.states[t];return e&&e.attributes.entity_picture});return s||o?W`
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
                      ${"forecast"===this._accordionState[t]?W`
                            <div class="forecast-container">
                              <div class="forecast-tabs">
                                ${s?W`
                                      <div
                                        class="forecast-tab ${this._forecastState[t]&&"daily"!==this._forecastState[t].tab?"":"active"}"
                                        @click=${e=>this._handleTabChange(t,"daily",e)}
                                      >
                                        ${kt(this.hass,"component.bergfex-card.card.forecast.daily")}
                                      </div>
                                    `:""}
                                ${o?W`
                                      <div
                                        class="forecast-tab ${"summary"===this._forecastState[t]?.tab?"active":""}"
                                        @click=${e=>this._handleTabChange(t,"summary",e)}
                                      >
                                        ${kt(this.hass,"component.bergfex-card.card.forecast.summary")}
                                      </div>
                                    `:""}
                              </div>

                              <div class="forecast-carousel">
                                ${(()=>{const s=this._forecastState[t]?.tab||"daily",o="daily"===s?e.forecast_days:e.forecast_summaries,i=this._forecastState[t]?.index||0;if(!o||0===o.length)return W``;const n=o[i],a=this.hass.states[n],r=a?.attributes.entity_picture;let c="";if("daily"===s){const t=n.match(/day_(\d+)/),e=t?parseInt(t[1],10):i;c=this._formatForecastDate(e)}else{const t=n.match(/summary_(\d+)h/),e=t?t[1]:"";c=At(this.hass,"component.bergfex-card.card.forecast.hour",{hours:e})}return W`
                                    <div class="forecast-image-container">
                                      ${r?W`<img
                                            src="${r}"
                                            class="forecast-image"
                                            alt="${c}"
                                            @click=${t=>{t.stopPropagation(),this._handleMoreInfo(a)}}
                                            style="cursor: pointer;"
                                          />`:W`<span>Image not available</span>`}
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
                  ${this._config.show_link&&r?W`
                        <a
                          href=${h}
                          target="_blank"
                          class="link-icon"
                          title=${kt(this.hass,"component.bergfex-card.card.link_title",{resortName:o})}
                          @click=${t=>t.stopPropagation()}
                        >
                          <ha-icon icon="mdi:link-variant"></ha-icon>
                        </a>
                      `:W`<div></div>`}
                  ${this._config.show_last_updated&&u?W`
                        <div
                          class="last-updated"
                          @click=${t=>{t.stopPropagation(),g&&this._handleMoreInfo(g.entity_id)}}
                        >
                          <ha-icon icon="mdi:clock-outline"></ha-icon>
                          <span>${At(g.state,this.hass)}</span>
                        </div>
                      `:""}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}static{this.styles=r`
    ${n(Nt)}
  `}};t([pt({attribute:!1})],Tt.prototype,"hass",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(e,s,o)=>((t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s))(e,s,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("ha-card")],Pt.prototype,"_card",void 0),t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_forecastState",void 0),t([ut()],Pt.prototype,"_accordionState",void 0),t([ut()],Pt.prototype,"_historyState",void 0),Pt=t([lt(Et)],Pt),"undefined"!=typeof window&&(window.customCards=window.customCards||[],window.customCards.push({type:Et,name:"Bergfex Card",description:"A Lovelace card to display ski resort conditions from Bergfex.",documentationURL:"https://github.com/timmaurice/lovelace-bergfex-card"}));const Mt=r`.card-config{display:flex;flex-direction:column;gap:12px}.group{border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius, 12px);margin-top:0;padding:16px}.group-header{color:var(--primary-text-color);font-size:16px;font-weight:500;margin-bottom:12px}ha-form{display:block}`,Ot=[{name:"title",selector:{text:{}}}],Tt=[{name:"resorts",selector:{device:{multiple:!0,integration:"bergfex"}}}];let zt=class extends rt{setConfig(t){this._config={show_snow:!0,show_lifts_slopes:!0,show_conditions:!0,show_forecast:!1,show_trend:!1,...t}}_valueChanged(t){this.hass&&this._config&&St(this,"config-changed",{config:{...this._config,...t.detail.value}})}render(){if(!this.hass||!this._config)return W``;const t=[{name:"show_snow",selector:{boolean:{}}},{name:"show_lifts_slopes",selector:{boolean:{}}},{name:"show_conditions",selector:{boolean:{}}},{name:"show_forecast",selector:{boolean:{}}},{name:"show_trend",selector:{boolean:{}}},{name:"show_link",selector:{boolean:{}}},{name:"show_last_updated",selector:{boolean:{}}},{name:"hide_closed_resorts",selector:{boolean:{}}},{name:"sort_by",selector:{select:{mode:"dropdown",clearable:!0,options:[{value:"mountain",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.mountain")},{value:"valley",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.valley")},{value:"new",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.new")},{value:"lift",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.lift")},{value:"update",label:At(this.hass,"component.bergfex-card.editor.sort_by_options.update")}]}}}];return W`
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
    `}static{this.styles=r`
    ${a(Mt)}
  `}};t([pt({attribute:!1})],zt.prototype,"hass",void 0),t([ut()],zt.prototype,"_config",void 0),zt=t([lt("bergfex-card-editor")],zt);var jt=Object.freeze({__proto__:null,get BergfexCardEditor(){return zt}});export{Pt as BergfexCard};
