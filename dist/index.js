"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react"),o=function(){return o=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function n(e,t,o){if(o||2===arguments.length)for(var n,i=0,r=t.length;i<r;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function i(t){var n=t.size,i=void 0===n?25:n,r=t.SVGstrokeColor,l=void 0===r?"currentColor":r,a=t.SVGstorkeWidth,s=void 0===a?0:a,c=t.SVGclassName,d=void 0===c?"star-svg":c,u=t.SVGstyle;return e.jsx("svg",o({className:d,style:u,stroke:l,fill:"currentColor",strokeWidth:s,viewBox:"0 0 24 24",width:i,height:i,xmlns:"http://www.w3.org/2000/svg"},{children:e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function r(e,t){switch(t.type){case"PointerMove":return o(o({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return o(o({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return o(o({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var l="style-module_starRatingWrap__q-lJC",a="style-module_simpleStarRating__nWUxf",s="style-module_fillIcons__6---A",c="style-module_emptyIcons__Bg-FZ",d="style-module_tooltip__tKc3i";function u(){return"undefined"!=typeof window&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||"undefined"!=typeof navigator&&navigator.maxTouchPoints>0}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),exports.Rating=function(v){var p,f,y=v.onClick,h=v.onPointerMove,m=v.onPointerEnter,g=v.onPointerLeave,x=v.initialValue,_=void 0===x?0:x,C=v.iconsCount,w=void 0===C?5:C,V=v.size,k=void 0===V?40:V,S=v.readonly,M=void 0!==S&&S,b=v.rtl,G=void 0!==b&&b,I=v.customIcons,N=void 0===I?[]:I,j=v.allowFraction,P=void 0!==j&&j,A=v.fullFraction,L=void 0!==A&&A,R=v.multiplier,T=void 0===R?1:R,W=v.style,F=v.className,z=void 0===F?"react-simple-star-rating":F,B=v.transition,E=void 0!==B&&B,q=v.allowHover,O=void 0===q||q,H=v.disableFillHover,J=void 0!==H&&H,K=v.fillIcon,U=void 0===K?null:K,Z=v.fillColor,D=void 0===Z?"#ffbc0b":Z,X=v.fillColorArray,Y=void 0===X?[]:X,Q=v.fillStyle,$=v.fillClassName,ee=void 0===$?"filled-icons":$,te=v.emptyIcon,oe=void 0===te?null:te,ne=v.emptyColor,ie=void 0===ne?"#cccccc":ne,re=v.emptyStyle,le=v.emptyClassName,ae=void 0===le?"empty-icons":le,se=v.allowTitleTag,ce=void 0===se||se,de=v.showTooltip,ue=void 0!==de&&de,ve=v.tooltipDefaultText,pe=void 0===ve?"Your Rate":ve,fe=v.tooltipArray,ye=void 0===fe?[]:fe,he=v.tooltipStyle,me=v.tooltipClassName,ge=void 0===me?"react-simple-star-rating-tooltip":me,xe=v.SVGclassName,_e=void 0===xe?"star-svg":xe,Ce=v.titleSeparator,we=void 0===Ce?"out of":Ce,Ve=v.SVGstyle,ke=v.SVGstorkeWidth,Se=void 0===ke?0:ke,Me=v.SVGstrokeColor,be=void 0===Me?"currentColor":Me,Ge=t.useReducer(r,{hoverIndex:0,valueIndex:0,ratingValue:_,hoverValue:null}),Ie=Ge[0],Ne=Ie.ratingValue,je=Ie.hoverValue,Pe=Ie.hoverIndex,Ae=Ie.valueIndex,Le=Ge[1];t.useEffect((function(){_&&Le({type:"MouseClick",payload:0})}),[_]);var Re=t.useMemo((function(){return P?2*w:w}),[P,w]),Te=t.useMemo((function(){return _>Re?0:P||Math.floor(_)===_?Math.round(_/w*100):2*Math.ceil(_)*10}),[P,_,w,Re]),We=t.useMemo((function(){return(P?2*_-1:_-1)||0}),[P,_]),Fe=t.useCallback((function(e){return(w%2!=0?e/2/10:e*w/100)*T}),[w]),ze=function(e){for(var t=e.clientX,o=e.currentTarget.children[0].getBoundingClientRect(),n=o.left,i=o.right,r=o.width,l=G?i-t:t-n,a=Re,s=Math.round(r/Re),c=0;c<=Re;c+=1)if(l<=s*c){a=0===c&&l<s?0:L?l:c;break}var d=a-1;a>0&&(Le(L?{type:"PointerMove",payload:100*a/r,index:d}:{type:"PointerMove",payload:100*a/Re,index:d}),h&&je&&h(Fe(je),d,e))},Be=function(e){je&&(Le({type:"MouseClick",payload:je}),y&&y(Fe(je),Pe,e))},Ee=t.useMemo((function(){if(O){if(J){var e=Ne&&Ne||Te;return je&&je>e?je:e}return je&&je||Ne&&Ne||Te}return Ne&&Ne||Te}),[O,J,je,Ne,Te]);t.useEffect((function(){ye.length>Re&&console.error("tooltipArray Array length is bigger then Icons Count length.")}),[ye.length,Re]);var qe=t.useCallback((function(e){return je&&e[Pe]||Ne&&e[Ae]||_&&e[We]}),[je,Pe,Ne,Ae,_,We]),Oe=t.useMemo((function(){return je&&Fe(je)||Ne&&Fe(Ne)||_&&Fe(Te)}),[je,Fe,Ne,_,Te]);return e.jsxs("span",o({className:l,style:{direction:"".concat(G?"rtl":"ltr")}},{children:[e.jsxs("span",o({className:"".concat(a," ").concat(z),style:o({cursor:M?"":"pointer"},W),onPointerMove:M?void 0:ze,onPointerEnter:M?void 0:function(e){m&&m(e),u()&&ze(e)},onPointerLeave:M?void 0:function(e){u()&&Be(),Le({type:"PointerLeave"}),g&&g(e)},onClick:M?void 0:Be,"aria-hidden":"true"},{children:[e.jsx("span",o({className:"".concat(c," ").concat(ae),style:o({color:ie},re)},{children:n([],Array(w),!0).map((function(o,n){var r;return e.jsx(t.Fragment,{children:(null===(r=N[n])||void 0===r?void 0:r.icon)||oe||e.jsx(i,{SVGclassName:_e,SVGstyle:Ve,SVGstorkeWidth:Se,SVGstrokeColor:be,size:k})},n)}))})),e.jsx("span",o({className:"".concat(s," ").concat(ee),style:o((p={},p[G?"right":"left"]=0,p.color=qe(Y)||D,p.transition=E?"width .2s ease, color .2s ease":"",p.width="".concat(Ee,"%"),p),Q),title:ce?"".concat(Oe," ").concat(we," ").concat(w):void 0},{children:n([],Array(w),!0).map((function(o,n){var r;return e.jsx(t.Fragment,{children:(null===(r=N[n])||void 0===r?void 0:r.icon)||U||e.jsx(i,{SVGclassName:_e,SVGstyle:Ve,SVGstorkeWidth:Se,SVGstrokeColor:be,size:k})},n)}))}))]})),ue&&e.jsx("span",o({className:"".concat(d," ").concat(ge),style:o((f={},f[G?"marginRight":"marginLeft"]=20,f),he)},{children:(ye.length>0?qe(ye):Oe)||pe}))]}))};
//# sourceMappingURL=index.js.map
