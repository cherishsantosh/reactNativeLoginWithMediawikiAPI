(function(g){var window=this;var Fza=function(a,b,c,d){var e=b.jc();g.T(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.pd(c,d?d:"mqdefault.jpg");var k=b instanceof g.QN?g.MV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.jQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.QN?b.za:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.U("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Nn(c),is_live:m,is_list:l,
is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.lQ&&(c.playlist_length=b.getLength());a.update(c)},n5=function(a,b){g.RH.call(this,{G:"div",
aa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.l=a;this.created=!1},o5=function(a){var b={G:"span",
M:"ytp-upnext-top",J:[{G:"span",M:"ytp-upnext-header",J:[g.U("YTP_PLAYLIST_UP_NEXT")]},{G:"span",M:"ytp-upnext-title",J:["{{title}}"]},{G:"span",M:"ytp-upnext-author",J:["{{author}}"]}]},c={role:"button",href:"{{url}}","aria-label":g.U("YTP_AUTOPLAY_NEXT")};b={G:"div",M:"ytp-upnext",T:{"aria-label":"{{watch}}"},J:[{G:"div",M:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},b,{G:"a",M:"ytp-upnext-autoplay-icon",T:c,J:[{G:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},
J:[{G:"circle",M:"ytp-svg-autoplay-circle",T:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{G:"circle",M:"ytp-svg-autoplay-ring",T:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{G:"polygon",M:"ytp-svg-autoplay-triangle",T:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{G:"span",M:"ytp-upnext-bottom",J:[{G:"span",M:"ytp-upnext-cancel"},{G:"span",M:"ytp-upnext-paused",J:[g.U("YTP_AUTOPLAY_PAUSED_3")]}]}]};
g.V.call(this,b);this.A=null;b=this.wa["ytp-upnext-cancel"];this.A=new g.V({G:"button",aa:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":g.U("YTP_AUTOPLAY_CANCEL")},J:[g.U("YTP_CANCEL")]});g.M(this,this.A);this.A.R("click",this.KO,this);this.A.va(b);this.l=a;this.I=this.wa["ytp-svg-autoplay-ring"];this.D=this.C=this.o=this.B=null;this.F=new g.$t(this.bn,5E3,this);g.M(this,this.F);this.H=0;this.O(this.wa["ytp-upnext-autoplay-icon"],"click",this.UQ);this.TA();this.O(a,"autonavvisibility",
this.TA);this.O(a,"mdxnowautoplaying",this.iQ);this.O(a,"mdxautoplaycanceled",this.jQ);this.O(a,"mdxautoplayupnext",this.wD);3==this.l.Ta()&&(a=(a=g.$U(g.VU(this.l)))?a.WH():null)&&this.wD(a)},Gza=function(a,b){a.B=b;
Fza(a,b,g.X(a.l),"hqdefault.jpg")},p5=function(a,b){if(!a.o){g.TF("a11y-announce",g.U("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title);
a.H=g.eG();a.o=new g.$t((0,g.z)(a.fq,a,b),25);a.fq(b);var c=b||g.X(a.l).experiments.l("autoplay_time")||1E4;a.l.sa("onAutonavCoundownStarted",c)}g.wq(a.element,"ytp-upnext-autoplay-paused")},r5=function(a){q5(a);
a.H=g.eG();a.fq();g.S(a.element,"ytp-upnext-autoplay-paused")},q5=function(a){a.o&&(a.o.dispose(),a.o=null)},s5=function(a,b){b=void 0===b?!1:b;
var c=g.X(a.l);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;g.iV(a.l,"xwebnotifications",{permission:d});"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.B.jc(),a.bn(),a.C=new window.Notification(g.U("YTP_PLAYLIST_UP_NEXT"),{body:d.title,icon:d.pd(c)}),a.D=a.O(a.C,"click",a.KQ),a.F.start())}q5(a);a.l.Ij(!1,b)},Hza=function(a){n5.call(this,a,"subscribecard-endscreen");
var b=a.ea();this.o=new g.V({G:"div",M:"ytp-subscribe-card",J:[{G:"img",M:"ytp-author-image",T:{src:b.profilePicture}},{G:"div",M:"ytp-subscribe-card-right",J:[{G:"div",M:"ytp-author-name",J:[b.author]},{G:"div",M:"html5-subscribe-button-container"}]}]});g.M(this,this.o);this.o.va(this.element);this.A=new g.i_(g.U("YTP_SUBSCRIBE"),null,g.U("YTP_UNSUBSCRIBE"),null,!0,!1,b.Rl,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.A);this.A.va(this.o.wa["html5-subscribe-button-container"]);this.hide()},
t5=function(a){var b=g.X(a),c=g.LJ||g.af?{style:"will-change: opacity"}:void 0,d=b.l&&!b.D,e=["ytp-videowall-still"];
b.g&&e.push("ytp-videowall-show-text");g.V.call(this,{G:"a",aa:e,T:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},J:[{G:"div",M:"ytp-videowall-still-image",T:{style:"{{background}}"}},{G:"span",M:"ytp-videowall-still-info",J:[{G:"span",M:"ytp-videowall-still-info-bg",J:[{G:"span",M:"ytp-videowall-still-info-content",T:c,J:[{G:"span",M:"ytp-videowall-still-info-title",J:["{{title}}"]},{G:"span",M:"ytp-videowall-still-info-author",
J:["{{author_and_views}}"]},{G:"span",M:"ytp-videowall-still-info-live",J:[g.U("YTP_LIVE")]},{G:"span",M:"ytp-videowall-still-info-duration",J:["{{duration}}"]}]}]}]},{G:"span",aa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],J:[{G:"span",M:"ytp-videowall-still-listlabel-icon"},g.U("YTP_PLAYLIST"),{G:"span",M:"ytp-videowall-still-listlabel-length",J:[" (",{G:"span",J:["{{playlist_length}}"]},")"]}]},{G:"span",aa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
J:[{G:"span",M:"ytp-videowall-still-listlabel-mix-icon"},g.U("YTP_MIX"),{G:"span",M:"ytp-videowall-still-listlabel-length",J:[" (50+)"]}]}]});this.A=d;this.l=a;this.o=null;this.R("click",this.B);this.R("keypress",this.C);g.X(a).W&&(a=a.app.ca,b=this.element,g.Na(a.g,b),g.Qa(a.g,b),c=String(a.F++),b.setAttribute("data-visual-id",c),g.We(this,(0,g.z)(a.D,a,b)))},u5=function(a){n5.call(this,a,"videowall-endscreen");
this.K=a;this.F=0;this.A=[];this.H=this.D=this.C=null;this.I=this.X=!1;this.B=new g.CF(this);g.M(this,this.B);this.L=new g.$t(g.Da(g.S,this.element,"ytp-show-tiles"),0);g.M(this,this.L);var b=new g.V({G:"button",aa:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":g.U("YTP_PREVIOUS")},J:[g.Wna()]});g.M(this,b);b.va(this.element);b.R("click",this.LM,this);this.N=new g.LH({G:"div",M:"ytp-endscreen-content"});g.M(this,this.N);this.N.va(this.element);b=new g.V({G:"button",aa:["ytp-button","ytp-endscreen-next"],
T:{"aria-label":g.U("YTP_NEXT")},J:[g.Xna()]});g.M(this,b);b.va(this.element);b.R("click",this.KM,this);this.o=new o5(a);g.M(this,this.o);g.tV(this.l,this.o.element,4);this.hide()},v5=function(a){return g.uV(a.l)&&a.jq()&&!a.H},Iza=function(a){return(0,g.H)(a.suggestions,function(a){return g.$Y(a)})},w5=function(a){var b=a.jt();
b!=a.X&&(a.X=b,a.l.P("autonavvisibility"))},x5=function(a){g.zV.call(this,a);
g.PG({YTP_AUTOPLAY_CANCEL:"Cancel autoplay",YTP_AUTOPLAY_NEXT:"Play next video",YTP_AUTOPLAY_PAUSED_3:"Autoplay is paused",YTP_CANCEL:"Cancel",YTP_MIX:"Mix",YTP_PLAYLIST_UP_NEXT:"Up Next",YTP_UNSUBSCRIBE:"Unsubscribe"});this.l=null;this.o=new g.CF(this);g.M(this,this.o);this.A=g.X(a);Jza(a)?this.l=new u5(this.g):this.A.da?this.l=new Hza(this.g):this.l=new n5(this.g);g.M(this,this.l);g.tV(this.g,this.l.element,4);this.jC();this.o.O(a,"videodatachange",this.jC,this);this.o.O(a,"crn_endscreen",this.TK,
this);this.o.O(a,"crx_endscreen",this.UK,this)},Jza=function(a){a=g.X(a);
return a.Kd&&!a.da};
g.p(n5,g.RH);n5.prototype.create=function(){this.created=!0};
n5.prototype.destroy=function(){this.created=!1};
n5.prototype.jq=function(){return!1};
n5.prototype.jt=function(){return!1};g.p(o5,g.V);g.h=o5.prototype;g.h.bn=function(){this.C&&(this.F.stop(),this.Ba(this.D),this.D=null,this.C.close(),this.C=null)};
g.h.TA=function(){g.QH(this,g.WU(this.l))};
g.h.KQ=function(){window.focus();this.bn()};
g.h.hide=function(){g.V.prototype.hide.call(this)};
g.h.fq=function(a){a=a||g.X(this.l).experiments.l("autoplay_time")||1E4;var b=Math.min(g.eG()-this.H,a);a=Math.min(b/a,1);this.I.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.l.Ta()?s5(this,!0):this.o&&this.o.start()};
g.h.UQ=function(a){!g.Ld(this.A.element,g.rF(a))&&g.mX(a,this.l)&&s5(this)};
g.h.KO=function(){g.YU(this.l,!0)};
g.h.iQ=function(a){this.l.Ta();this.show();p5(this,a)};
g.h.wD=function(a){this.l.Ta();this.B&&this.B.jc().videoId==a.jc().videoId||Gza(this,a)};
g.h.jQ=function(){this.l.Ta();q5(this);this.hide()};
g.h.U=function(){q5(this);this.bn();g.V.prototype.U.call(this)};g.p(Hza,n5);g.p(t5,g.V);t5.prototype.Xj=function(){g.xV(this.l,this.element);var a=this.o.jc().videoId,b=this.o.getPlaylistId();g.h0(this.l.app,a,this.o.be,b,void 0,void 0,void 0)};
t5.prototype.B=function(a){g.mX(a,this.l,this.A,this.o.be||void 0)&&this.Xj()};
t5.prototype.C=function(a){switch(a.keyCode){case 13:case 32:g.wF(a)||(this.Xj(),g.vF(a))}};g.p(u5,n5);g.h=u5.prototype;g.h.create=function(){n5.prototype.create.call(this);var a=this.l.ea();a&&(this.C=Iza(a),this.D=a);this.Fg();this.B.O(this.l,"appresize",this.Fg);this.B.O(this.l,"onVideoAreaChange",this.Fg);this.B.O(this.l,"videodatachange",this.MM);this.B.O(this.l,"autonavchange",this.Vz);this.B.O(this.l,"autonavcancel",this.JM);this.B.O(this.element,"transitionend",this.gS)};
g.h.destroy=function(){g.EF(this.B);g.Ye(this.A);this.A=[];this.C=null;n5.prototype.destroy.call(this);g.wq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.jq=function(){return 1!=this.D.autonavState};
g.h.show=function(){n5.prototype.show.call(this);g.wq(this.element,"ytp-show-tiles");g.X(this.l).g?g.bu(this.L):this.L.start();(this.I||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.YU(this.l,!1);var a=v5(this);g.uV(this.l)&&g.X(this.l).experiments.g("ui_logging")&&g.iV(this.l,"end",{cancelButtonShow:a?"1":"0",state:this.jq()?"enabled":"disabled"});a?(w5(this),2==this.D.autonavState?g.X(this.l).experiments.g("fast_autonav_in_background")&&3==this.l.Ci()?s5(this.o,!0):p5(this.o):3==this.D.autonavState&&
r5(this.o)):(g.YU(this.l,!0),w5(this))};
g.h.hide=function(){n5.prototype.hide.call(this);r5(this.o);w5(this)};
g.h.gS=function(a){g.rF(a)==this.element&&this.Fg()};
g.h.Fg=function(){if(this.C&&this.C.length){g.S(this.element,"ytp-endscreen-paginate");if(g.X(this.K).experiments.g("web_player_endscreen_size_killswitch"))var a=g.Jh(this.element);else{a=g.lV(this.K);var b=g.eI(this.K);b&&(b=b.Ed()?48:32,a.width-=2*b)}var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,r=e/2,u=b<=f-2&&n>=r*m,B=e<=k-2&&n>=q*m;if((q+
1)/r*d/c>c/(q/(r+1)*d)&&B)n-=q*m,e+=2;else if(u)n-=r*m,b+=2;else if(B)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.Yc(a.width/m||1,1,1.21);n*=g.Yc(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.Ih(a,m,n);g.oh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});Gza(this.o,this.C[0]);g.T(this.element,"ytp-endscreen-takeover",v5(this));w5(this);m+=4;
n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),q=g.Zc(q+this.F,l),0!=r){u=this.A[c];u||(u=new t5(this.l),this.A[c]=u,a.appendChild(u.element));B=Math.floor(n*k/e);var E=Math.floor(m*f/b),L=Math.floor(n*(k+r)/e)-B-4,Y=Math.floor(m*(f+r)/b)-E-4;g.xh(u.element,E,B);g.Ih(u.element,Y,L);g.oh(u.element,"transitionDelay",(k+f)/20+"s");g.T(u.element,"ytp-videowall-still-mini",1==r);g.T(u.element,"ytp-videowall-still-large",2<r);r=u;
q=this.C[q];r.o=q;Fza(r,q,g.X(r.l),g.uq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");u=q.be;q=r.l;g.X(q).W&&(q=q.app.ca,r=r.element,u=u&&u.itct,B=r.getAttribute("data-visual-id"),g.Na(q.g,r),g.vV(q,"onLogServerVeCreated",{id:B,tracking_params:u}));c++}g.T(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.Ed(e.element),g.Xe(e);this.A.length=c}};
g.h.MM=function(){var a=this.l.ea();this.D!=a&&(this.F=0,this.C=Iza(a),this.D=a,this.Fg())};
g.h.KM=function(){this.F+=this.A.length;this.Fg()};
g.h.LM=function(){this.F-=this.A.length;this.Fg()};
g.h.aK=function(){return!!this.o.o};
g.h.Vz=function(a){1==a?(this.I=!1,this.H=this.D.clientPlaybackNonce,q5(this.o),this.g&&this.Fg()):(this.I=!0,this.g&&v5(this)&&(2==a?p5(this.o):3==a&&r5(this.o)))};
g.h.JM=function(a){if(a){for(a=0;a<this.A.length;a++)g.yV(this.K,this.A[a].element,!0);this.Vz(1)}else this.H=null,this.I=!1;this.Fg()};
g.h.jt=function(){return this.g&&v5(this)};g.p(x5,g.zV);g.h=x5.prototype;g.h.xz=function(){var a=this.g.ea(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Jza(this.g)||b;a=g.iO(a,"ypc_module");var c=g.i0(this.g.app);return b&&!a&&!c};
g.h.wz=function(){return this.l.jt()};
g.h.WJ=function(){return this.wz()?this.l.aK():!1};
g.h.U=function(){g.rV(this.g,"endscreen");g.zV.prototype.U.call(this)};
g.h.load=function(){g.zV.prototype.load.call(this);this.l.show();g.X(this.g).da&&.01>Math.random()&&g.iV(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.zV.prototype.unload.call(this);this.l.hide();this.l.destroy()};
g.h.TK=function(a){this.xz()&&(this.l.created||this.l.create(),"load"==a.ia&&this.load())};
g.h.UK=function(a){"load"==a.ia&&this.loaded&&this.unload()};
g.h.jC=function(){g.rV(this.g,"endscreen");var a=Math.max(1E3*(this.g.ea().lengthSeconds-10),0);a=new g.gQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.gQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.oV(this.g,[a,b])};g.fY.endscreen=x5;})(_yt_player);