!function(){"use strict";var t=ReactDOM,e=function(t){var e=t||{},n=e.width,c=void 0===n?"0px":n,o=e.style,a=void 0===o?"solid":o,i=e.color,r=void 0===i?"#0000":i,l=e.side,s=void 0===l?"all":l,d=e.radius,u=void 0===d?"0px":d,f=function(t){var e=null==s?void 0:s.toLowerCase();return(null==e?void 0:e.includes("all"))||(null==e?void 0:e.includes(t))},m="0px"===c||!c,h="".concat(c," ").concat(a," ").concat(r),v="\n\t\t".concat(m?"":["top","right","bottom","left"].map((function(t){return f(t)?"border-".concat(t,": ").concat(h,";"):""})).join(""),"\n\t\t").concat(u?"border-radius: ".concat(u,";"):"","\n\t");return v},n=function(t){var e=t||{},n=e.color,c=void 0===n?"#333":n,o=e.bgType,a=void 0===o?"solid":o,i=e.bg,r=void 0===i?"#0000":i,l=e.gradient,s=void 0===l?"linear-gradient(135deg, #4527a4, #8344c5)":l;return"\n\t\t".concat(c?"color: ".concat(c,";"):"","\n\t\t").concat(s||r?"background: ".concat("gradient"===a?s:r,";"):"","\n\t")},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",n="";return null==t||t.map((function(c,o){var a=c||{},i=a.hOffset,r=void 0===i?"0px":i,l=a.vOffset,s=void 0===l?"0px":l,d=a.blur,u=void 0===d?"0px":d,f=a.spreed,m=void 0===f?"0px":f,h=a.color,v=void 0===h?"#7090b0":h,p=a.isInset,w=void 0!==p&&p?"inset":"",g="".concat(r," ").concat(s," ").concat(u),b=o+1>=t.length?"":", ";n+="text"===e?"".concat(g," ").concat(v).concat(b):"".concat(g," ").concat(m," ").concat(v," ").concat(w).concat(b)})),n||"none"},o=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=e||{},o=c.fontFamily,a=void 0===o?"Default":o,i=c.fontCategory,r=void 0===i?"sans-serif":i,l=c.fontVariant,s=void 0===l?400:l,d=c.fontWeight,u=void 0===d?400:d,f=c.isUploadFont,m=void 0===f||f,h=c.fontSize,v=void 0===h?{desktop:15,tablet:15,mobile:15}:h,p=c.fontStyle,w=void 0===p?"normal":p,g=c.textTransform,b=void 0===g?"none":g,x=c.textDecoration,y=void 0===x?"auto":x,R=c.lineHeight,E=void 0===R?"135%":R,T=c.letterSpace,F=void 0===T?"0px":T,k=function(t,e){return t?"".concat(e,": ").concat(t,";"):""},B=!n||!a||"Default"===a,C=(null==v?void 0:v.desktop)||v,S=(null==v?void 0:v.tablet)||C,_=(null==v?void 0:v.mobile)||S,I="\n\t\t".concat(B?"":"font-family: '".concat(a,"', ").concat(r,";"),"\n\t\t").concat(k(u,"font-weight"),"\n\t\t","font-size: ".concat(C,"px;"),"\n\t\t").concat(k(w,"font-style"),"\n\t\t").concat(k(b,"text-transform"),"\n\t\t").concat(k(y,"text-decoration"),"\n\t\t").concat(k(E,"line-height"),"\n\t\t").concat(k(F,"letter-spacing"),"\n\t"),N=s&&400!==s?"400i"===s?":ital@1":null!=s&&s.includes("00i")?": ital, wght@1, ".concat(null==s?void 0:s.replace("00i","00")," "):": wght@".concat(s," "):"",z=B?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(N.replace(/ /g,""),"&display=swap");return{googleFontLink:!m||B?"":"@import url(".concat(z,");"),styles:"".concat(t,"{\n\t\t\t").concat(I,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(S,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(_,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.values(t).join(" ")},i=function(t){var i,r,l=t.attributes,s=t.clientId,d=l.alignment,u=l.button,f=l.border,m=l.shadow,h=u.icon,v=u.typo,p=u.colors,w=u.padding,g="#etfTwitterFeed-".concat(s),b="".concat(g," .etfTwitterFeed");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(i=o("",v))||void 0===i?void 0:i.googleFontLink,"\n\t\t").concat(null===(r=o("".concat(b," .etfButton"),v))||void 0===r?void 0:r.styles,"\n\n\t\t").concat(g,"{\n\t\t\ttext-align: ").concat(d,";\n\t\t}\n\t\t").concat(b,"{\n\t\t\ttext-align: ").concat(d,";\n\t\t}\n\t\t").concat(b," .etfButton{\n\t\t    ").concat(n(p),"\n\t\t\tpadding: ").concat(a(w),";\n\t\t\t\n\t\t}\n\t\t").concat(b," .etfButton svg{\n\t\t\twidth: ").concat(h.width,";\n\t\t\theight: ").concat(h.height,";\n\t\t}\n\t\t").concat(b," iframe, ").concat(b," .etfButton{\n\t\t\t").concat(e(f),"\n\t\t\tbox-shadow: ").concat(c(m),";\n\t\t}\n\t")}})},r=function(t){var e=t.attributes,n=e.userName,c=e.config,o=c.theme,a=c.width,i=c.height,r=c.scrolling,l=c.isHeader,s=c.isFooter,d=c.language;return React.createElement("iframe",{Scrolling:r,frameBorder:"0",allowtransparency:"true",allowFullScreen:"true",className:"twitter_iframe",style:{position:"static",visibility:"visible",width:"".concat(a),height:"".concat(i),flexGrow:1,overflow:"auto"},title:"Twitter Timeline",src:"https://syndication.twitter.com/srv/timeline-profile/screen-name/".concat(n,"?dnt=false&frame=false&hideBorder=true&showHeader=").concat(l,"&hideFooter=").concat(!s,"&lang=").concat(d,"&showReplies=false&theme=").concat(o,"&transparent=false")})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"currentcolor";return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 48 48",fill:t},React.createElement("path",{fill:t,d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"}))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"currentcolor";return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0,0,256,256",fill:t},React.createElement("path",{fill:t,transform:"scale(5.12,5.12)",d:"M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"}))},d=function(t){var e=t.attributes,n=e.userName,c=e.button.iconsType;return React.createElement("a",{onClick:function(){var t="https://twitter.com/intent/follow?region=follow_link&screen_name=".concat(n);window.open(t,"_blank")},rel:"noreferrer",className:"etfButton"},"tIcon"==c?l():s(),React.createElement("span",null," Follow @",n))},u=function(t){var e=t.attributes,n=e.userName,c=e.button,o=c.iconsType;return React.createElement("a",{onClick:function(){var t="https://twitter.com/intent/tweet?screen_name=".concat(n,"&text=").concat(c.tweetText);window.open(t,"_blank")},className:"etfButton"},"tIcon"==o?l():s(),React.createElement("span",null,"Tweet to @",n))},f=function(t){var e=t.attributes,n=e.type,c=e.config,o=e.videoPostID,a=c.language,i=c.scrolling,r=c.theme,l=c.height,s=c.width,d="video"==n?"280px":l,u="video"===n?"https://platform.twitter.com/embed/Tweet.html?dnt=false&frame=false&hideCard=false&hideThread=false&id=".concat(o,"&lang=").concat(a,"&theme=").concat(r,"&width=").concat(s,"&maxWidth=").concat(s):"post"===n?"https://platform.twitter.com/embed/Tweet.html?dnt=false&frame=false&hideCard=false&hideThread=false&id=".concat(o,"&lang=").concat(a,"&theme=").concat(r,"&width=").concat(s):"";return React.createElement("iframe",{Scrolling:i,frameBorder:"0",allowtransparency:"true",allowFullScreen:"true",style:{width:"".concat(s),height:"".concat(d)},title:"X Post",src:u,"data-tweet-id":o})},m=function(t){var e=t.attributes.button,n=e.tweetText,c=e.hasTagText,o=e.iconsType;return React.createElement("a",{onClick:function(){var t="https://twitter.com/intent/tweet?hashtags=".concat(c,"%2C&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&text=").concat(n);window.open(t,"_blank")},rel:"noreferrer",className:"etfButton"},"tIcon"==o?l():s(),React.createElement("span",null," Post #",c))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-etf-twitter-feed").forEach((function(e){var n=JSON.parse(e.dataset.attributes);(0,t.render)(React.createElement(React.Fragment,null,React.createElement(i,{attributes:n,clientId:n.cId}),React.createElement(h,{attributes:n})),e),null==e||e.removeAttribute("data-attributes")}))}));var h=function(t){var e=t.attributes,n=e.type;return React.createElement("div",{className:"etfTwitterFeed"},"timeline"==n&&React.createElement(r,{attributes:e}),"follow"==n&&React.createElement(d,{attributes:e}),"tweet"==n&&React.createElement(u,{attributes:e}),"tag"==n&&React.createElement(m,{attributes:e}),["video","post"].includes(n)&&React.createElement(f,{attributes:e}))}}();
//# sourceMappingURL=script.js.map