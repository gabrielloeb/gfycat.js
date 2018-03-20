/**
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
var gfyObject=function(e,t){function n(){de={title:!1,controls:!1,autoplay:!0,optimize:!0,gif:!1,responsive:!1,hd:!0}}function o(e,t){if(t.getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],o=t.getElementsByTagName("*"),i=0;i<o.length;i++)(" "+o[i].className+" ").indexOf(" "+e+" ")>-1&&n.push(o[i]);return n}function i(){if(de.title&&oe.title){ne=document.createElement("div"),ne.className="title",ne.style.position="absolute";try{ne.style.backgroundColor="rgba(0,0,0,0.4)"}catch(e){ne.style.backgroundColor="#000";try{ne.style.filter="alpha(opacity=60)"}catch(e){}}ne.style.color="#fff",ne.style.fontFamily="Arial,sans-serif",ne.style.fontSize="20px",ne.style.padding="10px",ne.innerHTML=oe.title,ne.style.width="100%",ne.style.left="0",ne.style.top="0",ne.style.boxSizing="border-box",ne.style.display="none",ce.appendChild(ne)}}function a(){te=document.createElement("div"),te.className="overlay",te.style.position="absolute",te.style.width="100%",te.style.left="0",te.style.top="0",te.style.boxSizing="border-box",de.controls?te.style.height="calc(100% - 22px)":te.style.height="100%",de.gif||(te.style.cursor="pointer",te.style.textAlign="center",te.onclick=L,de.controls||(te.button=r())),de.title&&oe.title&&(te.onmouseout=A,te.onmouseover=H),ce.appendChild(te)}function r(){var e=document.createElement("div");return e.className="play-button",e.style.position="relative",e.style.display="none",e.style.top="50%",e.style.marginTop="-39px",e.style.width="75px",e.style.height="75px",e.style.justifyContent="center",e.style.alignItems="center",e.style.boxSizing="border-box",e.style.border="1px solid rgba(100, 100, 100, .3)",e.style.borderRadius="50%",e.style.backgroundColor="rgba(255,255,255,.3)",e.style.color="#fff",e.style.userSelect="none",e.style.webkitUserSelect="none",e.style.msUserSelect="none",e.style.MozUserSelect="none",e.innerHTML='<div style="width:0;height:0;margin-left:4px;border-style:solid;border-width: 17px 0 17px 29px;border-color: transparent transparent transparent #ffffff;"></div>',te.appendChild(e),e}function s(){$=document.createElement("video"),$.className="gfy-video",de.autoplay&&($.autoplay=!0),$.loop=!0,$.controls=!1,$.setAttribute("playsinline",""),$.setAttribute("muted",""),$.style.width="100%",de.responsive?(de.controls?$.style.height="calc(100% - 20px)":$.style.height="100%",$.style.position="absolute",$.style.top="0",$.style.left="0"):$.style.height="auto",$.setAttribute("poster","https://thumbs.gfycat.com/"+oe.gfyName+"-poster.jpg"),ce.appendChild($),$.addEventListener?$.addEventListener("loadedmetadata",N,!1):$.attachEvent("onloadedmetadata",N),V&&($.playbackRate=V),$.addEventListener("play",T),$.addEventListener("pause",B)}function l(){if($&&!ue){var e=document.createElement("source");if(de.hd?e.src=oe.mp4Url:e.src=oe.mobileUrl,e.type="video/mp4",e.className="mp4source",$.appendChild(e),de.hd){var t=document.createElement("source");t.src=oe.webmUrl,t.type="video/webm",t.className="webmsource",$.appendChild(t)}ue=!0}}function c(){ee=document.createElement("img"),ee.className="gif",de.optimize?ee.src="":ee.src=de.hd?oe.gifUrl:oe.max5mbGif,de.responsive?(ee.style.width="100%",ee.style.position="absolute",ee.style.top="0",ee.style.left="0"):ee.style.maxWidth=oe.width+"px",ee.style.height="auto",ce.appendChild(ee)}function d(){if(de.controls&&!J){J=document.createElement("div"),J.className="controls",J.style.position="relative",J.style.display="flex",J.style.justifyContent="flex-end",J.style.padding="5px",J.style.margin="0",J.style.width="100%",J.style.boxSizing="border-box";J.innerHTML='<div class="gfyCtrlPause" style="display:inline-block;width:12px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlReverse" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlSlower" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div><div class="gfyCtrlFaster" style="display:inline-block;width:14px;height:12px;margin-right:5px;border-style:none;background-repeat:no-repeat;background-image:url(\'https://assets.gfycat.com/img/gfycontrols.png\');cursor:pointer;"></div>',K=J.getElementsByClassName("gfyCtrlPause")[0],K.onclick=L,Q=J.getElementsByClassName("gfyCtrlReverse")[0],Q.onclick=M,Q.style.backgroundPosition="-46px 0",X=J.getElementsByClassName("gfyCtrlSlower")[0],Z=J.getElementsByClassName("gfyCtrlFaster")[0],$.paused?z():P(),ce.appendChild(J)}}function p(e){return new Promise(function(n,o){var i=W;g(e),ue=!1,me=!1;try{if(!W)throw new Error("Gfyid is required!")}catch(e){return o(),void console.log(e)}if(i&&i===W)ce.innerHTML="",y(),n();else{var a=document.createElement("div"),r=ce.attributes,s=a.attributes,l=ce.className,c=l.indexOf(t);c>-1&&(l=0===c?l.replace(t,"").trim():l.replace(" "+t,""));for(var d=0;d<r.length;d++){var p=r.item(d),m=p.cloneNode();"style"==m.name&&"null"!=p.value&&s.setNamedItem(m)}ce.parentNode.replaceChild(a,ce),ce=a,l&&(ce.className=l),ce.style.position="relative",ce.style.padding=0,ce.style.fontSize=0,F(W),h("https://gfycat.com/cajax/get/"+W,function(e){e?(oe=e.gfyItem,y(),n()):o()})}})}function y(){if(m(),!de.gif&&document.createElement("video").canPlayType)if(s(),d(),i(),a(),de.optimize)if($.poster){var e=new Image;e.onload=function(){u()},e.onerror=function(){u()},e.src=$.poster}else u();else C(),l(),de.autoplay&&S();else de.gif=!0,de.controls=!1,de.autoplay=!1,c(),v(),ee.onload=function(){if(de.title&&oe.title){i(),a();navigator.userAgent.toLowerCase();ne.style.width=ee.clientWidth+"px"}}}function m(){if(de.responsive){var e=document.createElement("div");e.className="sizer",e.style.position="relative";var t=oe.width/oe.height;e.style.paddingBottom=100/t+"%",ce.appendChild(e),de.maxHeight&&(ce.style.maxWidth=de.maxHeight*t+"px"),ce.style.margin="0 auto"}else ce.style.display="inline-block",ce.style.overflow="hidden",ce.style.boxSizing="border-box",ce.style.MozBoxSizing="border-box",ce.style.webkitBoxSizing="border-box"}function u(){C(),b()}function g(e){n(),Y||(Y=ce.dataset),e&&e.id?W=e.id:W||(W=Y.id),e&&e.playbackSpeed?V=e.playbackSpeed:V||(V=Y.playbackSpeed),V&&V>8&&(V=8),V&&V<.125&&(V=.125),e&&e.hasOwnProperty("expand")&&!e.hasOwnProperty("responsive")&&(e.responsive=e.expand),Y.hasOwnProperty("expand")&&!Y.hasOwnProperty("responsive")&&(Y.responsive=Y.expand),pe?de.title=!1:f("title","true",e),f("controls","true",e),f("autoplay","false",e),f("optimize","false",e),f("gif","true",e),f("responsive","true",e),f("hd","false",e),de.responsive&&(e&&e.hasOwnProperty("maxHeight")?de.maxHeight=e.maxHeight:Y&&Y.hasOwnProperty("maxHeight")&&(de.maxHeight=Y.maxHeight)),Y={}}function f(e,t,n){n&&n.hasOwnProperty(e)?de[e]=ge[n[e]]:Y[e]===t&&(de[e]=ge[t])}function h(e,t,n){var o=Math.floor(1e7*Math.random()+1),i="_"+W+"_"+o++;e.match(/\?/)?e+="&callback="+i:e+="?callback="+i;var a=document.createElement("script");a.type="text/javascript",a.src=e,window[i]=function(e){t.call(n||window,e),document.getElementsByTagName("head")[0].removeChild(a),a=null;try{delete window[i]}catch(e){}},document.getElementsByTagName("head")[0].appendChild(a)}function b(){var e=x();e&&!me?(l(),de.autoplay&&S(),me=!0):!e&&me&&(R(),me=!1)}function v(){x()&&!me&&(ee.src&&ee.src!==window.location.href||(ee.src=de.hd?oe.gifUrl:oe.max5mbGif),me=!0)}function w(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function x(){return(le=w())+se>=ae+re&&le<=ae+ie-re}function k(e,t){se=e,le=t,C(),E(t)}function E(e){void 0!==e&&(le=e),$?b():ee&&v()}function C(){var e;if($?e=$:ee&&(e=ee),e){var t=e.getBoundingClientRect();le=w(),ie=t.height,ae=t.top+le,re=.5*ie}}function N(){de.autoplay||pe||de.controls||O(),window.addEventListener?$.addEventListener("webkitendfullscreen",R):window.attachEvent&&$.attachEvent("webkitendfullscreen",R)}function z(){if(!de.controls)return void O();K.style.backgroundPosition="-71px 0",X.style.backgroundPosition="0 0",X.style.marginLeft="6px",Z.style.backgroundPosition="-192px 0",Z.style.width="8px",Z.onclick=q,X.onclick=I}function P(){if(!de.controls)return void j();K.style.backgroundPosition="-95px 0",Z.style.backgroundPosition="-20px 0",X.style.backgroundPosition="-165px 0",Z.style.width="14px",X.style.marginLeft="0px",Z.onclick=G,X.onclick=U}function L(){$.paused?S():R()}function S(){$.paused&&$.play(),$.paused&&z()}function R(){$.paused||$.pause()}function T(){P()}function B(){z()}function O(){te&&te.button&&(te.button.style.display="inline-flex")}function j(){te&&te.button&&(te.button.style.display="none")}function H(){de.title&&oe.title&&(ne.style.display="block")}function A(){de.title&&oe.title&&(ne.style.display="none")}function M(){K.style.backgroundPosition="-95px 0",X.style.backgroundPosition="0 0",X.style.marginLeft="6px",Z.style.backgroundPosition="-192px 0",Z.style.width="8px",Z.onclick=q,X.onclick=I,R(),l();var e=o("mp4source",$)[0],t=o("webmsource",$)[0];ye?(e.src=e.src.replace(/-reverse\.mp4/g,".mp4"),e.src=e.src.replace(/-reverse\.webm/g,".webm"),t.src=t.src.replace(/-reverse\.webm/g,".webm"),Q.style.backgroundPosition="-46px 0",ye=!1):(e.src=e.src.replace(/\.mp4/g,"-reverse.mp4"),e.src=e.src.replace(/\.webm/g,"-reverse.webm"),t.src=t.src.replace(/\.webm/g,"-reverse.webm"),Q.style.backgroundPosition="-141px 0",ye=!0),$.playbackRate=1,$.load(),S()}function U(){$.playbackRate<=1?$.playbackRate=$.playbackRate/2:$.playbackRate--}function G(){$.playbackRate<=1?$.playbackRate=2*$.playbackRate:$.playbackRate++}function q(){if(window.opera){var e=$.onplay;$.onplay=function(){R(),$.onplay=e},S()}else $.currentTime+=1/oe.frameRate}function I(){$.currentTime-=1/oe.frameRate}function _(){$.load(),S()}function D(){return ce}function F(e){var t="";t=void 0!==document.referrer&&document.referrer?encodeURIComponent(document.referrer):location.href;var n={ref:t,context:"jsEmbed",device_type:pe?"mobile":"desktop"};GfyAnalytics.sendViewCount(e,n)}var W,V,Y,J,K,Q,X,Z,$,ee,te,ne,oe,ie,ae,re,se,le,ce=e,de={},pe=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|htc|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}(),ye=!1,me=!1,ue=!1,ge={true:!0,false:!1};return{init:p,refresh:_,getRootElement:D,checkScroll:E,onPageUpdate:k}},gfyCollection=function(){function e(e,t){if(t.getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],o=t.getElementsByTagName("*"),i=0;i<o.length;i++)(" "+o[i].className+" ").indexOf(" "+e+" ")>-1&&n.push(o[i]);return n}function t(e){"undefined"!=typeof GfyAnalytics&&GfyAnalytics.initGA(),e="string"==typeof e?e:d,a(e),i()}function n(){l&&clearTimeout(l),l=setTimeout(function(){s=document.body.scrollTop;for(var e=0;e<c.length;e++)c[e].checkScroll(s)},100)}function o(){s=document.body.scrollTop;for(var e=window.innerHeight,t=0;t<c.length;t++)c[t].onPageUpdate(e,s)}function i(){window.addEventListener?(addEventListener("DOMContentLoaded",o,!1),addEventListener("load",o,!1),addEventListener("resize",o,!1),addEventListener("scroll",n,!1)):window.attachEvent&&(attachEvent("DOMContentLoaded",o,!1),attachEvent("load",o,!1),attachEvent("resize",o,!1),attachEvent("scroll",n,!1))}function a(t){t="string"==typeof t?t:d;for(var n=c.length,o=e(t,document),i=0;i<o.length;i++){var a=new gfyObject(o[i],t);c.push(a)}for(var i=n;i<c.length;i++)c[i].init()}function r(){return c}var s,l,c=[],d="gfyitem";return t(),{init:t,get:r,scan:a}}();document.addEventListener?document.addEventListener("DOMContentLoaded",function(){gfyCollection.init()},!1):document.attachEvent("onreadystatechange",gfyCollection.init);