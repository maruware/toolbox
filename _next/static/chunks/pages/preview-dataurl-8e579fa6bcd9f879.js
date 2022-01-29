(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{5193:function(e,n,t){"use strict";t.d(n,{zx:function(){return N}});var a=t(7375),r=t(1604),i=t(4592),l=t(8554),c=t.n(l),o=t(7294),s=t(8922),u=t(9238);function d(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var m=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],p=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),g=p[0],h=p[1],v=(0,r.Gp)((function(e,n){var t=e.size,a=e.colorScheme,l=e.variant,c=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,p=e.isAttached,h=e.isDisabled,v=d(e,m),b=(0,i.cx)("chakra-button__group",c),_=o.useMemo((function(){return{size:t,colorScheme:a,variant:l,isDisabled:h}}),[t,a,l,h]),E={display:"inline-flex"};return E=f({},E,p?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),o.createElement(g,{value:_},o.createElement(r.m$.div,f({ref:n,role:"group",__css:E,className:b},v)))}));i.Ts&&(v.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],_=function(e){var n=e.label,t=e.placement,a=e.spacing,l=void 0===a?"0.5rem":a,c=e.children,s=void 0===c?o.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):c,m=e.className,p=e.__css,g=d(e,b),h=(0,i.cx)("chakra-button__spinner",m),v="start"===t?"marginEnd":"marginStart",_=o.useMemo((function(){var e;return f(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[v]=n?l:0,e.fontSize="1em",e.lineHeight="normal",e),p)}),[p,n,v,l]);return o.createElement(r.m$.div,f({className:h},g,{__css:_}),s)};i.Ts&&(_.displayName="ButtonSpinner");var E=["children","className"],y=function(e){var n=e.children,t=e.className,a=d(e,E),l=o.isValidElement(n)?o.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,c=(0,i.cx)("chakra-button__icon",t);return o.createElement(r.m$.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:c}),l)};i.Ts&&(y.displayName="ButtonIcon");var x=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],N=(0,r.Gp)((function(e,n){var t=h(),l=(0,r.mq)("Button",f({},t,e)),s=(0,r.Lr)(e),u=s.isDisabled,m=void 0===u?null==t?void 0:t.isDisabled:u,p=s.isLoading,g=s.isActive,v=s.isFullWidth,b=s.children,E=s.leftIcon,y=s.rightIcon,N=s.loadingText,S=s.iconSpacing,w=void 0===S?"0.5rem":S,O=s.type,j=s.spinner,I=s.spinnerPlacement,T=void 0===I?"start":I,C=s.className,z=s.as,B=d(s,x),P=o.useMemo((function(){var e,n=c()({},null!=(e=null==l?void 0:l._focus)?e:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},l,!!t&&{_focus:n})}),[l,t,v]),R=function(e){var n=o.useState(!e),t=n[0],a=n[1];return{ref:o.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(z),F=R.ref,$=R.type,D={rightIcon:y,leftIcon:E,iconSpacing:w,children:b};return o.createElement(r.m$.button,f({disabled:m||p,ref:(0,a.qq)(n,F),as:z,type:null!=O?O:$,"data-active":(0,i.PB)(g),"data-loading":(0,i.PB)(p),__css:P,className:(0,i.cx)("chakra-button",C)},B),p&&"start"===T&&o.createElement(_,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:w},j),p?N||o.createElement(r.m$.span,{opacity:0},o.createElement(k,D)):o.createElement(k,D),p&&"end"===T&&o.createElement(_,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:w},j))}));function k(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return o.createElement(o.Fragment,null,n&&o.createElement(y,{marginEnd:r},n),a,t&&o.createElement(y,{marginStart:r},t))}i.Ts&&(N.displayName="Button");var S=["icon","children","isRound","aria-label"],w=(0,r.Gp)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=d(e,S),c=t||a,s=o.isValidElement(c)?o.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(N,f({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},l),s)}));i.Ts&&(w.displayName="IconButton")},113:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview-dataurl",function(){return t(5477)}])},5477:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var a=t(5893),r=t(1604),i=t(4592),l=t(7294),c=t(8698);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=l.forwardRef((function(e,n){var t=e.htmlWidth,a=e.htmlHeight,r=e.alt,i=s(e,u);return l.createElement("img",o({width:t,height:a,ref:n,alt:r},i))})),m=(0,r.Gp)((function(e,n){var t=e.fallbackSrc,a=e.fallback,u=e.src,m=e.srcSet,p=e.align,g=e.fit,h=e.loading,v=e.ignoreFallback,b=e.crossOrigin,_=s(e,d),E=null!=h||v||void 0===t&&void 0===a,y=function(e){var n=e.loading,t=e.src,a=e.srcSet,r=e.onLoad,i=e.onError,o=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),f=d[0],m=d[1];(0,l.useEffect)((function(){m(t?"loading":"pending")}),[t]);var p=(0,l.useRef)(),g=(0,l.useCallback)((function(){if(t){h();var e=new Image;e.src=t,o&&(e.crossOrigin=o),a&&(e.srcset=a),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){h(),m("loaded"),null==r||r(e)},e.onerror=function(e){h(),m("failed"),null==i||i(e)},p.current=e}}),[t,o,a,s,r,i,n]),h=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,c.a)((function(){if(!u)return"loading"===f&&g(),function(){h()}}),[f,g,u]),u?"loaded":f}(o({},e,{ignoreFallback:E})),x=o({ref:n,objectFit:g,objectPosition:p},E?_:(0,i.CE)(_,["onError","onLoad"]));return"loaded"!==y?a||l.createElement(r.m$.img,o({as:f,className:"chakra-image__placeholder",src:t},x)):l.createElement(r.m$.img,o({as:f,src:u,srcSet:m,crossOrigin:b,loading:h,className:"chakra-image"},x))}));i.Ts&&(m.displayName="Image");var p=t(8527),g=t(4671),h=t(5193),v=t(9736),b=function(){var e=(0,l.useState)(""),n=e[0],t=e[1],r=(0,l.useState)(void 0),i=r[0],c=r[1];return(0,a.jsxs)(p.xu,{children:[(0,a.jsx)(p.xv,{fontSize:"4xl",children:"Preview Data URL"}),(0,a.jsxs)(p.kC,{children:[(0,a.jsx)(g.g,{width:"lg",height:"lg",onChange:function(e){var n=e.target.value;t(n)},value:n}),(0,a.jsx)(h.zx,{onClick:function(){n&&c(n)},children:(0,a.jsx)(v.mr,{})}),(0,a.jsx)(p.xu,{width:"lg",children:i&&(0,a.jsx)(m,{src:i,alt:"data url preview"})})]})]})}}},function(e){e.O(0,[830,774,888,179],(function(){return n=113,e(e.s=n);var n}));var n=e.O();_N_E=n}]);