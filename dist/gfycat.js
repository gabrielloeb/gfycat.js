module.exports=function(){/**
 * Copyright 2014-2016 Gfycat, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var e=function(e,t){function n(){ce={title:!1,controls:!1,autoplay:!0,optimize:!0,gif:!1,responsive:!1,hd:!0}}function o(e,t){if(t.getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],o=t.getElementsByTagName("*"),i=0;i<o.length;i++)(" "+o[i].className+" ").indexOf(" "+e+" ")>-1&&n.push(o[i]);return n}function i(){if(ce.title&&ne.title){te=document.createElement("div"),te.className="title",te.style.position="absolute";try{te.style.backgroundColor="rgba(0,0,0,0.4)"}catch(e){te.style.backgroundColor="#000";try{te.style.filter="alpha(opacity=60)"}catch(e){}}te.style.color="#fff",te.style.fontFamily="Arial,sans-serif",te.style.fontSize="20px",te.style.padding="10px",te.innerHTML=ne.title,te.style.width="100%",te.style.left="0",te.style.top="0",te.style.boxSizing="border-box",te.style.display="none",le.appendChild(te)}}function a(){ee=document.createElement("div"),ee.className="overlay",ee.style.position="absolute",ee.style.width="100%",ee.style.left="0",ee.style.top="0",ee.style.boxSizing="border-box",ce.controls?ee.style.height="calc(100% - 22px)":ee.style.height="100%",ce.gif||(ee.style.cursor="pointer",ee.style.textAlign="center",ee.onclick=L,ce.controls||(ee.button=r())),ce.title&&ne.title&&(ee.onmouseout=j,ee.onmouseover=M),le.appendChild(ee)}function r(){var e=document.createElement("div");return e.className="play-button",e.style.position="relative",e.style.display="none",e.style.top="50%",e.style.marginTop="-39px",e.style.width="75px",e.style.height="75px",e.style.justifyContent="center",e.style.alignItems="center",e.style.boxSizing="border-box",e.style.border="1px solid rgba(100, 100, 100, .3)",e.style.borderRadius="50%",e.style.backgroundColor="rgba(255,255,255,.3)",e.style.color="#fff",e.style.userSelect="none",e.style.webkitUserSelect="none",e.style.msUserSelect="none",e.style.MozUserSelect="none",e.innerHTML='<div style="width:0;height:0;margin-left:4px;border-style:solid;border-width: 17px 0 17px 29px;border-color: transparent transparent transparent #ffffff;"></div>',ee.appendChild(e),e}function s(){Z=document.createElement("video"),Z.className="gfy-video",ce.autoplay&&(Z.autoplay=!0),Z.loop=!0,Z.controls=!1,Z.setAttribute("playsinline",""),Z.setAttribute("muted",""),Z.style.width="100%",ce.responsive?(ce.controls?Z.style.height="calc(100% - 20px)":Z.style.height="100%",Z.style.position="absolute",Z.style.top="0",Z.style.left="0"):Z.style.height="auto",Z.setAttribute("poster","https://thumbs.gfycat.com/"+ne.gfyName+"-poster.jpg"),le.appendChild(Z),Z.addEventListener?Z.addEventListener("loadedmetadata",N,!1):Z.attachEvent("onloadedmetadata",N),W&&(Z.playbackRate=W),Z.addEventListener("play",R),Z.addEventListener("pause",B)}function l(){if(Z&&!ue){var e=document.createElement("source");if(ce.hd?e.src=ne.mp4Url:e.src=ne.mobileUrl,e.type="video/mp4",e.className="mp4source",Z.appendChild(e),ce.hd){var t=document.createElement("source");t.src=ne.webmUrl,t.type="video/webm",t.className="webmsource",Z.appendChild(t)}ue=!0}}function c(){$=document.createElement("img"),$.className="gif",ce.optimize?$.src="":$.src=ce.hd?ne.gifUrl:ne.max5mbGif,ce.responsive?($.style.width="100%",$.style.position="absolute",$.style.top="0",$.style.left="0"):$.style.maxWidth=ne.width+"px",$.style.height="auto",le.appendChild($)}function d(){if(ce.controls&&!J){J=document.createElement("div"),J.className="controls",J.style.position="relative",J.style.display="flex",J.style.justifyContent="flex-end",J.style.padding="5px",J.style.margin="0",J.style.width="100%",J.style.boxSizing="border-box";J.innerHTML='<div class="gfyCtrlPause" style="display:inline-block;width:12px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlReverse" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlSlower" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlFaster" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div>',K=J.getElementsByClassName("gfyCtrlPause")[0],K.onclick=L,Q=J.getElementsByClassName("gfyCtrlReverse")[0],Q.onclick=U,Q.style.backgroundPosition="-46px 0",V=J.getElementsByClassName("gfyCtrlSlower")[0],X=J.getElementsByClassName("gfyCtrlFaster")[0],Z.paused?z():P(),le.appendChild(J)}}function p(e){return new Promise(function(n,o){var i=G;g(e),ue=!1,me=!1;try{if(!G)throw new Error("Gfyid is required!")}catch(e){return o(),void console.log(e)}if(i&&i===G)le.innerHTML="",m(),n();else{var a=document.createElement("div"),r=le.attributes,s=a.attributes,l=le.className,c=l.indexOf(t);c>-1&&(l=0===c?l.replace(t,"").trim():l.replace(" "+t,""));for(var d=0;d<r.length;d++){var p=r.item(d),u=p.cloneNode();"style"==u.name&&"null"!=p.value&&s.setNamedItem(u)}le.parentNode.replaceChild(a,le),le=a,l&&(le.className=l),le.style.position="relative",le.style.padding=0,le.style.fontSize=0,h("https://gfycat.com/cajax/get/"+G,function(e){e?(ne=e.gfyItem,m(),n()):o()})}})}function m(){if(u(),!ce.gif&&document.createElement("video").canPlayType)if(s(),d(),i(),a(),ce.optimize)if(Z.poster){var e=new Image;e.onload=function(){y()},e.onerror=function(){y()},e.src=Z.poster}else y();else C(),l(),ce.autoplay&&S();else ce.gif=!0,ce.controls=!1,ce.autoplay=!1,c(),v(),$.onload=function(){if(ce.title&&ne.title){i(),a();navigator.userAgent.toLowerCase();te.style.width=$.clientWidth+"px"}}}function u(){if(ce.responsive){var e=document.createElement("div");e.className="sizer",e.style.position="relative";var t=ne.width/ne.height;e.style.paddingBottom=100/t+"%",le.appendChild(e),ce.maxHeight&&(le.style.maxWidth=ce.maxHeight*t+"px"),le.style.margin="0 auto"}else le.style.display="inline-block",le.style.overflow="hidden",le.style.boxSizing="border-box",le.style.MozBoxSizing="border-box",le.style.webkitBoxSizing="border-box"}function y(){C(),b()}function g(e){n(),Y||(Y=le.dataset),e&&e.id?G=e.id:G||(G=Y.id),e&&e.playbackSpeed?W=e.playbackSpeed:W||(W=Y.playbackSpeed),W&&W>8&&(W=8),W&&W<.125&&(W=.125),e&&e.hasOwnProperty("expand")&&!e.hasOwnProperty("responsive")&&(e.responsive=e.expand),Y.hasOwnProperty("expand")&&!Y.hasOwnProperty("responsive")&&(Y.responsive=Y.expand),de?ce.title=!1:f("title","true",e),f("controls","true",e),f("autoplay","false",e),f("optimize","false",e),f("gif","true",e),f("responsive","true",e),f("hd","false",e),ce.responsive&&(e&&e.hasOwnProperty("maxHeight")?ce.maxHeight=e.maxHeight:Y&&Y.hasOwnProperty("maxHeight")&&(ce.maxHeight=Y.maxHeight)),Y={}}function f(e,t,n){n&&n.hasOwnProperty(e)?ce[e]=ye[n[e]]:Y[e]===t&&(ce[e]=ye[t])}function h(e,t,n){var o=Math.floor(1e7*Math.random()+1),i="_"+G+"_"+o++;e.match(/\?/)?e+="&callback="+i:e+="?callback="+i;var a=document.createElement("script");a.type="text/javascript",a.src=e,window[i]=function(e){t.call(n||window,e),document.getElementsByTagName("head")[0].removeChild(a),a=null;try{delete window[i]}catch(e){}},document.getElementsByTagName("head")[0].appendChild(a)}function b(){var e=x();e&&!me?(l(),ce.autoplay&&S(),me=!0):!e&&me&&(T(),me=!1)}function v(){x()&&!me&&($.src&&$.src!==window.location.href||($.src=ce.hd?ne.gifUrl:ne.max5mbGif),me=!0)}function w(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function x(){return(se=w())+re>=ie+ae&&se<=ie+oe-ae}function k(e,t){re=e,se=t,C(),E(t)}function E(e){void 0!==e&&(se=e),Z?b():$&&v()}function C(){var e;if(Z?e=Z:$&&(e=$),e){var t=e.getBoundingClientRect();se=w(),oe=t.height,ie=t.top+se,ae=.5*oe}}function N(){ce.autoplay||de||ce.controls||O(),window.addEventListener?Z.addEventListener("webkitendfullscreen",T):window.attachEvent&&Z.attachEvent("webkitendfullscreen",T)}function z(){if(!ce.controls)return void O();K.style.backgroundPosition="-71px 0",V.style.backgroundPosition="0 0",V.style.marginLeft="6px",X.style.backgroundPosition="-192px 0",X.style.width="8px",X.onclick=I,V.onclick=_}function P(){if(!ce.controls)return void H();K.style.backgroundPosition="-95px 0",X.style.backgroundPosition="-20px 0",V.style.backgroundPosition="-165px 0",X.style.width="14px",V.style.marginLeft="0px",X.onclick=q,V.onclick=A}function L(){Z.paused?S():T()}function S(){Z.paused&&Z.play(),Z.paused&&z()}function T(){Z.paused||Z.pause()}function R(){P()}function B(){z()}function O(){ee&&ee.button&&(ee.button.style.display="inline-flex")}function H(){ee&&ee.button&&(ee.button.style.display="none")}function M(){ce.title&&ne.title&&(te.style.display="block")}function j(){ce.title&&ne.title&&(te.style.display="none")}function U(){K.style.backgroundPosition="-95px 0",V.style.backgroundPosition="0 0",V.style.marginLeft="6px",X.style.backgroundPosition="-192px 0",X.style.width="8px",X.onclick=I,V.onclick=_,T(),l();var e=o("mp4source",Z)[0],t=o("webmsource",Z)[0];pe?(e.src=e.src.replace(/-reverse\.mp4/g,".mp4"),e.src=e.src.replace(/-reverse\.webm/g,".webm"),t.src=t.src.replace(/-reverse\.webm/g,".webm"),Q.style.backgroundPosition="-46px 0",pe=!1):(e.src=e.src.replace(/\.mp4/g,"-reverse.mp4"),e.src=e.src.replace(/\.webm/g,"-reverse.webm"),t.src=t.src.replace(/\.webm/g,"-reverse.webm"),Q.style.backgroundPosition="-141px 0",pe=!0),Z.playbackRate=1,Z.load(),S()}function A(){Z.playbackRate<=1?Z.playbackRate=Z.playbackRate/2:Z.playbackRate--}function q(){Z.playbackRate<=1?Z.playbackRate=2*Z.playbackRate:Z.playbackRate++}function I(){if(window.opera){var e=Z.onplay;Z.onplay=function(){T(),Z.onplay=e},S()}else Z.currentTime+=1/ne.frameRate}function _(){Z.currentTime-=1/ne.frameRate}function D(){Z.load(),S()}function F(){return le}var G,W,Y,J,K,Q,V,X,Z,$,ee,te,ne,oe,ie,ae,re,se,le=e,ce={},de=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|htc|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}(),pe=!1,me=!1,ue=!1,ye={true:!0,false:!1};return{init:p,refresh:D,getRootElement:F,checkScroll:E,onPageUpdate:k}},t=function(){function t(e,t){if(t.getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],o=t.getElementsByTagName("*"),i=0;i<o.length;i++)(" "+o[i].className+" ").indexOf(" "+e+" ")>-1&&n.push(o[i]);return n}function n(e){e="string"==typeof e?e:p,r(e),a()}function o(){c&&clearTimeout(c),c=setTimeout(function(){l=document.body.scrollTop;for(var e=0;e<d.length;e++)d[e].checkScroll(l)},100)}function i(){l=document.body.scrollTop;for(var e=window.innerHeight,t=0;t<d.length;t++)d[t].onPageUpdate(e,l)}function a(){window.addEventListener?(addEventListener("DOMContentLoaded",i,!1),addEventListener("load",i,!1),addEventListener("resize",i,!1),addEventListener("scroll",o,!1)):window.attachEvent&&(attachEvent("DOMContentLoaded",i,!1),attachEvent("load",i,!1),attachEvent("resize",i,!1),attachEvent("scroll",o,!1))}function r(n){n="string"==typeof n?n:p;for(var o=d.length,i=t(n,document),a=0;a<i.length;a++){var r=new e(i[a],n);d.push(r)}for(var a=o;a<d.length;a++)d[a].init()}function s(){return d}var l,c,d=[],p="gfyitem";return n(),{init:n,get:s,scan:r}}();document.addEventListener?document.addEventListener("DOMContentLoaded",function(){t.init()},!1):document.attachEvent("onreadystatechange",t.init)};