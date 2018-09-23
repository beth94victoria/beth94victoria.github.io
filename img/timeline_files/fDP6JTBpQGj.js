if (self.CavalryLogger) { CavalryLogger.start_js(["b3PCr"]); }

__d("VideoBroadcastStatus",[],(function(a,b,c,d,e,f){e.exports={PREVIEW:"PREVIEW",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",VOD_READY:"VOD_READY",SEAL_STARTED:"SEAL_STARTED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED",SCHEDULED_CANCELED:"SCHEDULED_CANCELED",PRE_LIVE:"PRE_LIVE",SEAL_FAILED:"SEAL_FAILED"}}),null);
__d("VideoPlayerFormatsMap",[],(function(a,b,c,d,e,f){e.exports={live_map:"inline",live_map_sidebar:"inline",live_map_listview:"inline",live_map_tooltip:"inline",live_map_tooltip_from_listview:"inline",live_map_tooltip_from_map:"inline",video_home_inline:"inline",inline:"inline",chained:"inline",page_live_video_module:"inline",chained_suggestion:"inline",embedded_video:"inline",embedded_video_preview:"inline",embedded_video_from_ufi:"inline",ufi_comment_attachment:"inline",media_collage:"inline",channel:"channel",permalink:"permalink",snowlift:"snowlift",tv:"tv",watch_scroll:"watch_scroll",continue_watching_recommendation:"inline",tahoe:"tahoe",search_live_video_module:"inline",videohub_live:"inline",camera_post:"fb_stories",pages_cover:"inline",video_page_spotlight_unit:"inline",pages_cover_hover:"inline",pages_messaging_video:"inline",profile_overview:"inline",profile_cover:"inline",memory_leak_test:"inline",games_video_home_streamer_hub:"inline",games_video_live_recommendation:"inline",games_video_search_unit:"inline",games_video_streamer_unit:"inline",trivia_game_admin_dashboard:"misc",games_streamer_dashboard:"inline",ads_preview:"inline",ads:null,animated_image_share:null,asset:null,broadcast_request_attachment:null,candidate_videos:null,embedded:null,embedded_page_plugin:null,gameroom_live_video_hero_banner:null,gameroom_live_video_tab:null,gameroom_live_video_thumbnail:null,games_video_home:null,games_video_home_hero:null,games_video_single_game:null,games_video_social_plugin:null,games_video_hub:null,games_video_hub_redirect_notification:null,games_video_hub_redirect_unknown:null,group_live_video_module:null,html5:null,insights:null,intern_example:null,issues_module:null,live_beeper:null,live_control_panel:null,live_map_tooltip_from_webgl:null,live_video_broadcast:null,live_video_preview:null,living_room:null,living_room_recap_fullscreen:null,living_room_recap_inline:null,lookback:null,messaging:null,misc:null,mobile:null,not_specified_please_fix:null,offers_detail:null,pages_finch_main_video:null,pages_finch_thumbnail_video:null,pages_finch_trailer:null,pages_video_set:null,pages_timeline_pages_cover:null,pages_home_hero:null,video_page_video_list:null,profile_video:null,profile_video_hovercard:null,profile_video_thumb:null,report_flow:null,review:null,serp_videos_tab:null,slideshow:null,srt_review:null,topic_channel_living_room:null,topic_gaming:null,trailer_og_attachment:null,trailer_timeline_collections:null,trailer_timeline_unit:null,user_video_tab:null,video_copyright_preview:null,discover:null,watchlist:null,video_inline_chaining:null,videohub_featured:null,videohub_playlist:null,live_autoplay_watch_and_scroll:null,video_page_unspecified:null,spotlight_live:null,spotlight_featured:null,spotlight_popular:null,spotlight_unknown:null}}),null);
__d("VideoQualityClassInternal",[],(function(a,b,c,d,e,f){e.exports={orderedValues:["sd","hd","uhd"]}}),null);
__d("dispatchEvent",[],(function(a,b,c,d,e,f){function b(b,c){var d;typeof a.Event==="function"?d=new a.Event(c):(d=a.document.createEvent("Event"),d.initEvent(c,!0,!0));b.dispatchEvent(d)}e.exports=b}),null);
__d("getFullScreenElement",[],(function(a,b,c,d,e,f){function a(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}e.exports=a}),null);
__d("VideoHomePlayButtonThumbnailOverlay.react",["cx","ix","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a;switch(this.props.size){case"24":a=h("354763");break;case"48":a=h("101640");break;case"72":a=h("352839");break}return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_604-")},b("React").createElement(b("Image.react"),{src:a,width:this.props.size}))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("TimeRanges",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this.$1=[],this.$1=a}a.prototype.start=function(a){"use strict";this.$1[a]||g(0,undefined);return this.$1[a].startTime};a.prototype.end=function(a){"use strict";this.$1[a]||g(0,undefined);return this.$1[a].endTime};a.prototype.length=function(){"use strict";return this.$1.length};e.exports=a}),null);
__d("VideoPlayerStates",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({READY:"ready",PLAYING:"playing",PAUSED:"paused",LOADING:"loading",FALLBACK:"fallback",FINISHED:"finished",DESTROYED:"destroyed",REPLAYED:"replayed",UNKNOWN:"unknown"})}),null);
__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerReason","VideoPlayerStates","Visibility"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(){this.$1=new(b("SubscriptionsHandler"))(),this.$3=!1}a.prototype.enable=function(a){this.$2&&g(0,undefined),this.$1.engage(),this.$2=a,this.$1.addSubscriptions(b("Event").listen(window,"blur",this.$4.bind(this)),b("Event").listen(window,"focus",this.$5.bind(this)),b("Visibility").addListener(b("Visibility").HIDDEN,this.$4.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5.bind(this)))};a.prototype.disable=function(){this.$1.release(),this.$2=null};a.prototype.$4=function(){this.pauseVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};a.prototype.$5=function(){this.playVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};a.prototype.playVideo=function(a){var c=this.$2;c||g(0,undefined);c.isState(b("VideoPlayerStates").PAUSED)&&this.$3&&c.play(a);this.$3=!1};a.prototype.pauseVideo=function(a){var c=this.$2;c||g(0,undefined);c.isState(b("VideoPlayerStates").PLAYING)&&(c.pause(a),this.$3=!0)};e.exports=a}),null);
__d("VideoData",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this.$1=a||{aspect_ratio:0,original_height:0,original_width:0,video_id:""}}h.prototype.hasHD=function(){"use strict";return!!this.$1.hd_src};h.prototype.getEncodingTag=function(){"use strict";return this.$1.encoding_tag};h.prototype.getContentCategory=function(){"use strict";return this.$1.content_category};h.prototype.getVideoID=function(){"use strict";return this.$1.video_id};h.prototype.getVideoURL=function(){"use strict";return this.$1.video_url};h.prototype.getAspectRatio=function(){"use strict";return this.$1.aspect_ratio};h.prototype.getRotation=function(){"use strict";return this.$1.rotation||0};h.prototype.hasSubtitles=function(){"use strict";return!!this.$1.subtitles_src};h.prototype.hasDashManifest=function(){"use strict";return!!this.$1.dash_manifest};h.prototype.getDashManifest=function(){"use strict";return this.$1.dash_manifest};h.prototype.hasHighlightsManifest=function(){"use strict";return!!this.$1.highlights_manifest};h.prototype.getHighlightsManifest=function(){"use strict";return this.$1.highlights_manifest};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$1.dash_prefetched_representation_ids};h.prototype.getSubtitlesSrc=function(){"use strict";this.$1.subtitles_src||g(0,undefined);return this.$1.subtitles_src};h.prototype.getPlayableSrcSD=function(){"use strict";return this.$1.sd_src_no_ratelimit?this.$1.sd_src_no_ratelimit:this.getPlayableSrcRateLimitedSD()};h.prototype.getPlayableSrcHD=function(){"use strict";return this.$1.hd_src_no_ratelimit?this.$1.hd_src_no_ratelimit:this.getPlayableSrcRateLimitedHD()};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$1.sd_src};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$1.hd_src};h.prototype.getLiveManifestUrl=function(){"use strict";this.isLiveStream()||g(0,undefined);return this.getPlayableSrcRateLimitedSD()};h.prototype.hasRateLimit=function(){"use strict";return!!this.$1.sd_src_no_ratelimit};h.prototype.getStreamType=function(){"use strict";this.$1.stream_type||g(0,undefined);return this.$1.stream_type};h.prototype.isBroadcast=function(){"use strict";return!!this.$1.is_broadcast};h.prototype.isServableViaFbms=function(){"use strict";return!!this.$1.is_servable_via_fbms};h.prototype.isLiveStream=function(){"use strict";return!!this.$1.is_live_stream};h.prototype.isFacecastAudio=function(){"use strict";return!!this.$1.is_facecast_audio};h.prototype.liveRoutingToken=function(){"use strict";return this.$1.live_routing_token};h.prototype.getHDTag=function(){"use strict";return this.$1.hd_tag};h.prototype.getSDTag=function(){"use strict";return this.$1.sd_tag};h.prototype.getProjection=function(){"use strict";return this.$1.projection};h.prototype.getPlayerVersionOverwrite=function(){"use strict";return this.$1.player_version_overwrite};h.prototype.getFalloverData=function(){"use strict";var a=this.$1.fallover_data;return a?a.map(function(a){return new h(a)}):[]};h.prototype.getSphericalConfig=function(){"use strict";return this.$1.spherical_config};h.prototype.isSpherical=function(){"use strict";return!!this.$1.is_spherical};h.prototype.getOriginalHeight=function(){"use strict";return this.$1.original_height};h.prototype.getOriginalWidth=function(){"use strict";return this.$1.original_width};h.prototype.getOverrideConfig=function(){"use strict";return this.$1.override_config};h.prototype.getRawData=function(){"use strict";return this.$1};h.prototype.getPrefetchCache=function(){"use strict";return this.$1.prefetch_cache};e.exports=h}),null);
__d("XVideoDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_data_async/",{video_id:{type:"String",required:!0},width:{type:"Int"},height:{type:"Int"},scrubbing_preference:{type:"Int"},source:{type:"String"},preferred_projection:{type:"Enum",enumType:1},supports_html5_video:{type:"Bool",defaultValue:!0},is_ad:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},is_omnistab_preview_select_revert:{type:"Bool",defaultValue:!1},allow_dash_prefetch:{type:"Bool",defaultValue:!1},force_hd:{type:"Bool",defaultValue:!1}})}),null);
__d("VideoMimeTypes",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){return a+'; codecs="'+b+", "+c+'"'}f="mp4a.40.2";function b(a){return"avc1.42E0"+a.toString(16).toUpperCase()}function c(a){return"avc1.4D40"+a.toString(16).toUpperCase()}function d(a){return"avc1.6400"+a.toString(16).toUpperCase()}var g="video/mp4";b={h264baseline:a(g,b(30),f),h264main30avc:a(g,c(30),f),h264main31avc:a(g,c(31),f),h264high50avc:a(g,d(50),f),h264high51avc:a(g,d(51),f)};e.exports=b}),null);
__d("canVideoPlayType",["DOM"],(function(a,b,c,d,e,f){var g=null;function a(a){g=g||b("DOM").create("video");return!("canPlayType"in g)?"":g.canPlayType(a)}e.exports=a}),null);
__d("supportsHTML5Video",["DOM","memoize"],(function(a,b,c,d,e,f){e.exports=b("memoize")(function(){return!!b("DOM").create("video").canPlayType})}),null);
__d("isHTML5VideoImplementationUnavailable",["VideoMimeTypes","canVideoPlayType","supportsHTML5Video"],(function(a,b,c,d,e,f){a=function(a){if(a){a=b("canVideoPlayType")(b("VideoMimeTypes").h264main30avc);return a!=="probably"}return!b("supportsHTML5Video")()};e.exports=a}),null);
__d("VideoPlayerMetaData",["regeneratorRuntime","Promise","AsyncRequest","AsyncResponse","TimeSlice","VideoData","XVideoDataAsyncController","isHTML5VideoImplementationUnavailable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=12e4;function i(a){this.videoID=a}i.prototype.getVideoID=function(){return this.videoID};i.prototype.genVideoData=function(a,c){__p&&__p();var d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:a===void 0&&(a={});e.prev=1;d=this.$1;(!d||a.forceRefetch)&&(this.$2&&(clearTimeout(this.$2),this.$2=null),d=this.$1=this.$3(a),this.$2=setTimeout(b("TimeSlice").guard(function(){this.$1=null,c()}.bind(this),"VideoPlayerMetaData cacheTimeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),a.cacheTimeout||h));e.next=6;return b("regeneratorRuntime").awrap(d);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9;e.t0=e["catch"](1);throw e.t0;case 12:case"end":return e.stop()}},null,this,[[1,9]])};i.prototype.$3=function(a){__p&&__p();var c=b("XVideoDataAsyncController").getURIBuilder().setString("video_id",this.videoID).setBool("supports_html5_video",!b("isHTML5VideoImplementationUnavailable")(!0)),d=a.forceFlash,e=a.allowDashPrefetch;a=a.forceHD;d!==undefined&&(c=c.setBool("force_flash",d));e!==undefined&&(c=c.setBool("allow_dash_prefetch",e));a!==undefined&&(c=c.setBool("force_hd",a));var f=c.getURI();return new(b("Promise"))(function(a,c){new(b("AsyncRequest"))(f).setMethod("GET").setURI(f).setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(d){d=d.payload;!d.error?a(new(b("VideoData"))(d)):c(d.error)}).setErrorHandler(function(a){c(a.getErrorDescription())}).send()})};i.get=function(a){g[a]||(g[a]=new i(a));return g[a]};i.genVideoData=function(a,c,d){return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:c===void 0&&(c={});d===void 0&&(d=function(){});e.next=4;return b("regeneratorRuntime").awrap(i.get(a).genVideoData(c,d));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},null,this)};e.exports=i}),null);
__d("VideoQualityClasses",["VideoQualityClassInternal"],(function(a,b,c,d,e,f){e.exports=b("VideoQualityClassInternal").orderedValues}),null);
__d("logVideosClickTracking",["clickRefAction"],(function(a,b,c,d,e,f){function a(a){b("clickRefAction")("click",a,null,"FORCE")}e.exports=a}),null);
__d("VideoWithClickPlayPause",["VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}a.prototype.$3=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause(b("VideoPlayerReason").USER)}else b("logVideosClickTracking")(this.$2),this.$1.play(b("VideoPlayerReason").USER)};a.prototype.$4=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};a.prototype.$5=function(){"use strict";return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};e.exports=a}),null);
__d("VideoPlayerApiEvents",[],(function(a,b,c,d,e,f){a=["buffered","buffering","bufferingProgress","beginPlayback","updateStatus","logEvent","pausePlayback","playbackNotAllowed","clickVideo","clickForTracking","finishPlayback","unmuteVideo","muteVideo","changeVolume","turnOffAutoplay","updateBuffer","updateMetadata","qualityChange","updateViewportBegin","updateViewportMove","updateViewportEnd","dimensionsChange","viewportChange","wheelScroll","error","loadedSubtitles","toggleSubtitles","toggleFullscreen","seekEnd","seekRangeChanged","streamInterrupted","streamResumed","networkInterrupted","networkResumed","debug/dashPlayerEvent","abortedLoading","restoringAfterAbort","restoredAfterAbort","sphericalOrientationChange","videoNodeStaled"];e.exports=a}),null);
__d("AbstractVideoPlayerApi",["invariant","EventEmitter","VideoPlayerApiEvents"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(a,b("EventEmitter"));i=h&&h.prototype;a.prototype.addListener=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return i.addListener.apply(this,b)};a.prototype.emit=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return i.emit.apply(this,b)};a.prototype.setRelativeSphericalOrientation=function(a,b){"use strict"};a.isImplementationUnavailable=function(){"use strict";return!0};a.prototype.isDrm=function(){"use strict";return!1};a.prototype.setup=function(){"use strict"};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("VideoPlaybackQuality",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().droppedVideoFrames;a=a.webkitDroppedFrameCount;return typeof a==="number"?a:0}function b(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().totalVideoFrames;a=a.webkitDecodedFrameCount;return typeof a==="number"?a:0}e.exports={getDroppedFrames:a,getTotalFrames:b}}),null);
__d("VideoPlayerConnectionQuality",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={POOR:"POOR",MODERATE:"MODERATE",GOOD:"GOOD",EXCELLENT:"EXCELLENT"},h=[{bandwidth:5e5,connectionQuality:g.POOR},{bandwidth:2e6,connectionQuality:g.MODERATE},{bandwidth:1e7,connectionQuality:g.GOOD}],i=100,j=null,k=null;a={evaluate:function(a){__p&&__p();if(j!==null&&k!==null&&j>=Date.now()-i)return k;a=a();var b=null;for(var c=0;c<h.length;c++)if(a<h[c].bandwidth){b=h[c].connectionQuality;break}b===null&&(b=g.EXCELLENT);j=Date.now();k=b;return b}};e.exports=a}),null);
__d("VideoPlayerReasonTransitionHelper",["VideoPlayerReasonTransitionExperiment"],(function(a,b,c,d,e,f){function a(a){"use strict";this.$1=a}a.prototype.getReason=function(){"use strict";return!b("VideoPlayerReasonTransitionExperiment").provideReason?null:this.$1};e.exports=a}),null);
__d("VideoPlayerUIComponentDrawer",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(a,b){g.constructor.call(this),this.$VideoPlayerUIComponentDrawer1=a,this.$VideoPlayerUIComponentDrawer2=b,this.$VideoPlayerUIComponentDrawer4=!1}a.prototype.reserve=function(){if(this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!0;this.emit("reserve")};a.prototype.release=function(){if(!this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!1;this.emit("release")};a.prototype.getPriority=function(){return this.$VideoPlayerUIComponentDrawer1};a.prototype.getHeight=function(){return this.$VideoPlayerUIComponentDrawer2};a.prototype.setHeight=function(a){this.$VideoPlayerUIComponentDrawer2=a,this.emit("heightChange")};a.prototype.emit=function(event){var a;for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];event==="reposition"&&(this.$VideoPlayerUIComponentDrawer3=c[0]);(a=g.emit).call.apply(a,[this,event].concat(c))};a.prototype.reposition=function(){this.emit("reposition",this.$VideoPlayerUIComponentDrawer3)};a.prototype.isReserved=function(){return this.$VideoPlayerUIComponentDrawer4};a.priorities={EmbeddedControls:0,AdBreakStartingIndicator:1,ClickForMore:2,Subtitles:3,SphericalMouseAnimation:4};e.exports=a}),null);
__d("VideoPlayerVolumeSettings",["WebStorage"],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this.$1=1,this.$2=1}a.prototype.getVolume=function(){"use strict";var a=b("WebStorage").getLocalStorage();if(a){a=a.getItem("videoPlayerControllerVolume");return a===null||isNaN(+a)?1:+a}return this.$1};a.prototype.getSessionVolume=function(){"use strict";return this.$1};a.prototype.setSessionVolume=function(a){"use strict";this.$1=a};a.prototype.saveVolume=function(a){"use strict";var c=b("WebStorage").getLocalStorage();c&&c.setItem("videoPlayerControllerVolume",a);this.$1=a};a.prototype.getLastVolumeBeforeMute=function(){"use strict";var a=b("WebStorage").getLocalStorage();if(a){a=a.getItem("videoPlayerControllerLastVolumeBeforeMute");return a===null||isNaN(+a)?1:+a}return this.$2};a.prototype.saveLastVolumeBeforeMute=function(a){"use strict";var c=b("WebStorage").getLocalStorage();c&&c.setItem("videoPlayerControllerLastVolumeBeforeMute",a);this.$2=a};c=new a();e.exports=c}),null);
__d("VideoPlayerShakaBandwidthEstimator",["CacheStorage","Run","VideoPlayerShakaGlobalConfig","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g;b("requireWeak")("Shaka",function(a){g=a.util.EWMACacheBandwidthEstimator});var h=null,i=!1;function j(){"use strict";var a=new(b("CacheStorage"))("localstorage","_video_"),c=a.get("bandwidthEstimate");this.$1={isMockObject:!0,getBandwidth:function(a){return c},getFastMovingBandwidth:function(){return c}};g&&(this.$1=new g(b("VideoPlayerShakaGlobalConfig").getNumber("cache_delay",30),b("VideoPlayerShakaGlobalConfig").getNumber("cache_bandwidth",2e6),c),this.$1.isMockObject=!1);b("Run").onUnload(function(){a.set("bandwidthEstimate",this.$1.getBandwidth())}.bind(this))}j.prototype.getEstimator=function(){"use strict";return this.$1};j.getInstance=function(){"use strict";(h===null||h.getEstimator().isMockObject&&g)&&(h=new j());return h};j.getEstimator=function(){"use strict";return j.getInstance().getEstimator()};j.getBandwidth=function(a){"use strict";var b=j.getEstimator();return b.getBandwidth(a)};j.getBandwidthByVideoType=function(a){"use strict";return j.getBandwidth(j.getBandwidthModel(a))};j.getBandwidthModel=function(a){"use strict";return a?"aggressive":"conservative"};j.isAutoplayBandwidthRestrained=function(a){"use strict";var c=j.getEstimator(),d;b("VideoPlayerShakaGlobalConfig").getBool("block_autoplay_use_fast_moving_average",!0)&&i?d=c.getFastMovingBandwidth():d=c.getBandwidth();c=a?b("VideoPlayerShakaGlobalConfig").getNumber("live_block_autoplay_bandwidth_threshold",25e4):b("VideoPlayerShakaGlobalConfig").getNumber("block_autoplay_bandwidth_threshold",123034);d===null||d>=c?i=!1:i=!0;return i};e.exports=j}),null);
__d("LiveVideoPlayerConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTIONS:{SET_IS_REWOUND:"SET_IS_REWOUND",DISMISS_REWIND_COMMENT_OVERLAY:"DISMISS_REWIND_COMMENT_OVERLAY"}};e.exports=a}),null);
__d("LiveVideoPlayerDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!0})}),null);
__d("LiveVideoPlayerStore",["FluxReduceStore","LiveVideoPlayerConstants","LiveVideoPlayerDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("LiveVideoPlayerConstants").ACTIONS;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({})};a.prototype.getIsRewound=function(a){return this.getState().getIn([a,"isRewound"],!1)};a.prototype.getIsRewindCommentOverlayDismissed=function(a){return this.getState().getIn([a,"isRewindCommentOverlayDismissed"],!1)};a.prototype.$LiveVideoPlayerStore1=function(a,b){a.hasOption("LivePlayer","isRewound")||a.registerOption("LivePlayer","isRewound",function(){return this.getIsRewound(a.getVideoPlayerID())}.bind(this)),a.emit("LivePlayer/isRewoundChanged")};a.prototype.reduce=function(a,b){__p&&__p();switch(b.type){case h.DISMISS_REWIND_COMMENT_OVERLAY:a=a.setIn([b.playerID,"isRewindCommentOverlayDismissed"],!0);break;case h.SET_IS_REWOUND:var c=b.vpc,d=b.isRewound;a=a.setIn([c.getVideoPlayerID(),"isRewound"],d);setTimeout(function(){return this.$LiveVideoPlayerStore1(c,d)}.bind(this),0);c.setEnableLiveheadCatchup(!d);break;default:break}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("LiveVideoPlayerDispatcher"))}),null);
__d("VideoPlayerLoggerSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS:"ads",ANIMATED_IMAGE_SHARE:"animated_image_share",ASSET:"asset",BROADCAST_REQUEST_ATTACHMENT:"broadcast_request_attachment",CAMERA_POST:"camera_post",CANDIDATE_VIDEOS:"candidate_videos",CHAINED:"chained",CHAINED_SUGGESTION:"chained_suggestion",CHANNEL:"channel",CONTINUE_WATCHING_RECOMMENDATION:"continue_watching_recommendation",EMBEDDED:"embedded",EMBEDDED_PAGE_PLUGIN:"embedded_page_plugin",EMBEDDED_VIDEO:"embedded_video",EMBEDDED_VIDEO_FROM_UFI:"embedded_video_from_ufi",EMBEDDED_VIDEO_PREVIEW:"embedded_video_preview",GAMEROOM_LIVE_VIDEO_HERO_BANNER:"gameroom_live_video_hero_banner",GAMEROOM_LIVE_VIDEO_TAB:"gameroom_live_video_tab",GAMEROOM_LIVE_VIDEO_THUMBNAIL:"gameroom_live_video_thumbnail",GAMES_VIDEO_LIVE_RECOMMENDATION:"games_video_live_recommendation",GAMES_VIDEO_HOME:"games_video_home",GAMES_VIDEO_HOME_HERO:"games_video_home_hero",GAMES_VIDEO_HOME_STREAMER_HUB:"games_video_home_streamer_hub",GAMES_VIDEO_SINGLE_GAME:"games_video_single_game",GAMES_VIDEO_SEARCH_UNIT:"games_video_search_unit",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",GAMES_VIDEO_HUB:"games_video_hub",GAMES_VIDEO_HUB_REDIRECT_NOTIFICATION:"games_video_hub_redirect_notification",GAMES_VIDEO_HUB_REDIRECT_UNKNOWN:"games_video_hub_redirect_unknown",GROUP_LIVE_VIDEO_MODULE:"group_live_video_module",HTML5:"html5",INLINE:"inline",INSIGHTS:"insights",INTERN_EXAMPLE:"intern_example",ISSUES_MODULE:"issues_module",LIVE_BEEPER:"live_beeper",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_MAP:"live_map",LIVE_MAP_LISTVIEW:"live_map_listview",LIVE_MAP_SIDEBAR:"live_map_sidebar",LIVE_MAP_TOOLTIP:"live_map_tooltip",LIVE_MAP_TOOLTIP_FROM_LISTVIEW:"live_map_tooltip_from_listview",LIVE_MAP_TOOLTIP_FROM_MAP:"live_map_tooltip_from_map",LIVE_MAP_TOOLTIP_FROM_WEBGL:"live_map_tooltip_from_webgl",LIVE_VIDEO_BROADCAST:"live_video_broadcast",LIVE_VIDEO_PREVIEW:"live_video_preview",LIVING_ROOM:"living_room",LIVING_ROOM_RECAP_FULLSCREEN:"living_room_recap_fullscreen",LIVING_ROOM_RECAP_INLINE:"living_room_recap_inline",LOOKBACK:"lookback",MEDIA_COLLAGE:"media_collage",MEMORY_LEAK_TEST:"memory_leak_test",MESSAGING:"messaging",MISC:"misc",MOBILE:"mobile",NOT_SPECIFIED_PLEASE_FIX:"not_specified_please_fix",OFFERS_DETAIL:"offers_detail",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",PAGES_FINCH_MAIN_VIDEO:"pages_finch_main_video",PAGES_FINCH_THUMBNAIL_VIDEO:"pages_finch_thumbnail_video",PAGES_FINCH_TRAILER:"pages_finch_trailer",PAGES_VIDEO_SET:"pages_video_set",PAGES_MESSAGING_VIDEO:"pages_messaging_video",PAGES_COVER:"pages_cover",PAGES_TIMELINE_PAGES_COVER:"pages_timeline_pages_cover",PAGES_COVER_HOVER:"pages_cover_hover",PAGES_HOME_HERO:"pages_home_hero",VIDEO_PAGE_SPOTLIGHT_UNIT:"video_page_spotlight_unit",VIDEO_PAGE_VIDEO_LIST:"video_page_video_list",PERMALINK:"permalink",PROFILE_OVERVIEW:"profile_overview",PROFILE_COVER:"profile_cover",PROFILE_VIDEO:"profile_video",PROFILE_VIDEO_HOVERCARD:"profile_video_hovercard",PROFILE_VIDEO_THUMB:"profile_video_thumb",REPORT_FLOW:"report_flow",REVIEW:"review",SEARCH_LIVE_VIDEO_MODULE:"search_live_video_module",SERP_VIDEOS_TAB:"serp_videos_tab",SLIDESHOW:"slideshow",SNOWLIFT:"snowlift",SRT_REVIEW:"srt_review",TAHOE:"tahoe",TOPIC_CHANNEL_LIVING_ROOM:"topic_channel_living_room",TOPIC_GAMING:"topic_gaming",TRAILER_OG_ATTACHMENT:"trailer_og_attachment",TRAILER_TIMELINE_COLLECTIONS:"trailer_timeline_collections",TRAILER_TIMELINE_UNIT:"trailer_timeline_unit",TRIVIA_GAME_ADMIN_DASHBOARD:"trivia_game_admin_dashboard",TV:"tv",USER_VIDEO_TAB:"user_video_tab",VIDEO_COPYRIGHT_PREVIEW:"video_copyright_preview",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_EXPLORE:"discover",VIDEO_HOME_WATCHLIST:"watchlist",VIDEO_INLINE_CHAINING:"video_inline_chaining",VIDEOHUB_FEATURED:"videohub_featured",VIDEOHUB_LIVE:"videohub_live",VIDEOHUB_PLAYLIST:"videohub_playlist",WATCH_SCROLL:"watch_scroll",UFI_COMMENT_ATTACHMENT:"ufi_comment_attachment",LIVE_AUTOPLAY_WATCH_AND_SCROLL:"live_autoplay_watch_and_scroll",GAMES_VIDEO_STREAMER_SEARCH_UNIT:"games_video_streamer_unit",GAMES_STREAMER_DASHBOARD:"games_streamer_dashboard",ADS_PREVIEW:"ads_preview",VIDEO_PAGE_UNSPECIFIED:"video_page_unspecified",SPOTLIGHT_LIVE:"spotlight_live",SPOTLIGHT_FEATURED:"spotlight_featured",SPOTLIGHT_POPULAR:"spotlight_popular",SPOTLIGHT_UNKNOWN:"spotlight_unknown"})}),null);
__d("VideoWithLoopingPlayback",["VideoPlayerLoggerSource","VideoPlayerReason","setImmediate"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){c===void 0&&(c=-1),this.$5=!1,this.$6=function(){var a=this.$1.getOption("FeedAutoplay","isVisibleForAutoplay"),c=this.$1.getOption("WatchAndScroll","isActive"),d=this.$1.getIsInChannel(),e=this.$1.getSource()===b("VideoPlayerLoggerSource").TAHOE;!this.$5&&(a||a===undefined)&&!c&&!d&&!e&&(!this.$4||this.$3<this.$4)&&(b("setImmediate")(function(){return this.$1.play(b("VideoPlayerReason").LOOP)}.bind(this)),this.$3++,this.$4&&this.$3===this.$4-1&&this.$1.setOption("Looping","isLooping",!1))}.bind(this),this.$1=a,this.$2=!0,this.$3=1,this.$4=c>-1?c:null,this.$1.addListener("finishPlayback",this.$6),this.$1.registerOption("Looping","isLooping",function(){return this.$2}.bind(this),function(a){return this.$7(a)}.bind(this)),this.$1.registerOption("Looping","disabled",function(){return this.$5}.bind(this),function(a){return this.$5=a}.bind(this))}a.prototype.isLooping=function(){"use strict";return this.$2};a.prototype.getLoopCount=function(){"use strict";return this.$3};a.prototype.getMaxLoopCount=function(){"use strict";return this.$4};a.prototype.setMaxLoopCount=function(a){"use strict";this.$4=a>-1?a:null};a.prototype.$7=function(a){"use strict";this.$2=a};e.exports=a}),null);
__d("shouldWNSRenderToRHC",["ge"],(function(a,b,c,d,e,f){"use strict";function a(){return!!b("ge")("fbRHCVideoWNS-container")}e.exports=a}),null);
__d("Tahoe",[],(function(a,b,c,d,e,f){var g=null;a={get:function(){return g},set:function(a){g=a}};e.exports=a}),null);
__d("CoverVideoOffsetType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VERTICAL:0,HORIZONTAL:1})}),null);
__d("VODPresenceCVCDisplayStage",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PRE_ENTER:"pre_enter",POST_ENTER:"post_enter"})}),null);
__d("VideoPlayerAbrEvaluation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IDEAL:"ideal",CONSERVATIVE:"conservative",AGGRESSIVE:"aggressive",CONSERVATIVE_RESOLUTION_CONSTRAINED:"conservative_resolution_constrained"})}),null);
__d("VideoPlayerFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INLINE:"inline",SNOWLIFT:"snowlift",PERMALINK:"permalink",CHANNEL:"channel",FULL_SCREEN:"full_screen",SOCIAL_PLAYER:"social_player",TV:"tv",MISC:"misc",WATCH_SCROLL:"watch_scroll",WATCH_SCROLL_APP_BACKGROUND:"watch_scroll_app_background",WATCH_AND_GO:"watch_and_go",WATCH_AND_BROWSE:"watch_and_browse",CANVAS:"canvas",TAHOE:"tahoe",FB_STORIES:"fb_stories",UNKNOWN:"unknown"})}),null);
__d("VideoPlayerOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",NEWSFEED:"newsfeed",USER_TIMELINE:"user_timeline",PAGE_TIMELINE:"page_timeline",PARENT_PAGE_TIMELINE:"parent_page_timeline",PERMALINK:"permalink",GROUP:"group",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",CONNECTED_TV_SAMSUNG_EDEN_TILE:"connected_tv_samsung_eden_tile",CONNECTED_TV_SAMSUNG_LC:"connected_tv_samsung_lc",SOCIAL_PLAYER:"social_player",VIDEO_HOME:"video_home",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_REACTION:"video_home_reaction",VIDEO_HOME_MAIN:"video_home_main",VIDEO_HOME_GUIDE:"video_home_guide",VIDEO_TAB:"video_tab",EXTERNAL:"external",INSTANT_ARTICLES:"instant_articles",INTERN:"intern",BACKSTAGE:"backstage",INSTANT_SHOPPING:"instant_shopping",REDSPACE:"redspace",SAVED:"saved",SEARCH:"search",NOTIFICATIONS:"notifications",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_DISCOVERY:"live_discovery",LIVE_MAP:"live_map",LIVE_REDIRECT:"live_redirect",LIVE_EMBED_REDIRECT:"live_embed_redirect",LOCAL_NEWS:"local_news",MOVIE_CHECKOUT_FLOW:"movie_checkout_flow",PAGES_MODULE:"pages_module",PAGES_VIDEO_TAB:"pages_video_tab",BUSINESS_PAGE_VIDEO_EDUCATION_UNIT:"business_page_video_education_unit",BUSINESS_PAGE_VIDEO_EDUCATION_DIALOG:"business_page_video_education_dialog",PROMOTIONS_MANAGER_INSPIRATION_GALLERY:"promotions_manager_inspiration_gallery",BACKGROUND_PLAY:"background_play",QUICK_PROMOTION:"quick_promotion",CULTURAL_MOMENTS_SHARE:"cultural_moments_share",CULTURAL_MOMENTS_PROMOTION:"cm_promotion",DAILY_DIALOGUE_PINNED_UNIT:"dd_pinned",SPHERIAL_VIDEO_EDITING:"spherial_video_editing",EXPLORE_FEED:"explorefeed",RHC:"rhc",ADS:"ads",CANVAS:"canvas",COMMERCE:"commerce",COMPOSER:"composer",DASH:"dash",FACEWEB:"faceweb",FEEDBACK:"feedback",FRIENDS:"friends",EVENTS:"events",HELP:"help",INFRASTRUCTURE:"infrastructure",LOGIN:"login",MARKETING:"marketing",MESSAGING:"messaging",NAVIGATION:"navigation",PHOTOS:"photos",PRIVACY:"privacy",SETTINGS:"settings",STORY_VIEW:"story_view",WEBVIEW:"webview",TRENDING:"trending",FACECAST_NUX:"facecast_nux",PIXELCLOUD:"pixelcloud",PROTON:"proton",TAROT:"tarot",GAMEROOM:"gameroom",GAMES_VIDEO_HUB:"games_video_hub",LEARN:"learn",BEEPER:"beeper",FACECAST_BEEPER:"facecast_beeper",JOB_SEARCH:"job_search",TOP_LIVE_BOOKMARK:"top_live_bookmark",AUTODOWNLOAD:"autodownload",FB_STORIES:"fb_stories",DIRECT_INBOX:"direct_inbox",COMMENT:"comment",LIVE_VIDEO_END_SCREEN:"live_video_end_screen",MEDIA_GALLERY:"media_gallery",MOMENTS:"moments",PHOTOSFEED:"photosfeed",SIMPLE_PICKER:"simple_picker",VIDEO_EDITING_GALLERY:"video_editing_gallery",ALBUM:"album",OFFERS:"offers",MESSENGER_THREAD:"messenger_thread",MESSENGER_MONTAGE:"messenger_montage",MESSENGER_GIF:"messenger_gif",SHARED_VIDEO:"shared_video",VISUAL_POLL_GIF:"visual_poll_gif",LIVING_ROOM:"living_room",LIVE_CHAINING:"live_chaining",BRANDED_CONTENT:"branded_content",LIVING_ROOM_RECAP:"living_room_recap",POLITICAL_AD_ARCHIVE:"political_ad_archive",MESSENGER_ADS:"messenger_ads",VIDEO_PAGE_VIDEO_LIST:"video_page_video_list",HASHTAG_DISCOVERY:"hashtag_discovery",VIDEO_GIF_CREATION:"video_gif_creation",VIEW_ADS:"view_ads",GAME_GROUP_RHC:"game_group_rhc",GAME_PAGE_RHC:"game_page_rhc",LOL_CURATION:"lol_curation",SEARCH_VOYAGER:"search_voyager",KOTOTORO:"kototoro",PAGE_SPOTLIGHT:"page_spotlight",PAGE_VIDEOS_TAB:"page_videos_tab",PAGE_VIDEOS_CARD:"page_videos_card",PLAYLIST_PAGE:"playlist_page",MESSENGER_STORY:"messenger_story",GAMES_FEED:"games_feed"})}),null);
__d("VideoPlayerVersions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HTML5:"html5",PLEASANTVILLE:"pleasantville",REACT:"react",REACT_PLEASANTVILLE:"react_pleasantville",REACT_SILVERCITY:"react_silvercity",SILVERCITY:"silvercity",OZ:"oz",REACT_OZ:"react_oz",OLD_API_EXO:"old_api_exo",OLD_API_EXO_DEPRECATED:"old_api_exo_deprecated",OLD_API_EXO_NEW_LIB:"old_api_exo_new_lib",OLD_API_PSR:"old_api_psr",HEROPLAYER:"heroplayer",HEROPLAYER2:"heroplayer2",FNF:"fnf",LEGACY:"legacy",REFACTORED:"refactored",MBASIC:"mbasic",MTOUCH_SHAKA_LIVE:"mtouch_shaka_live",MTOUCH_SPHERICAL:"mtouch_360",MTOUCH_OZ:"mtouch_oz",CASTING_DEBUG:"casting_debug",CHROMECAST:"chromecast",WEBAPIS_AVPLAY:"webapis_avplay",FBLITE_LEGACY:"fblite_legacy",FBLITE_SURFACE:"fblite_surface",FBLITE_TEXTURE:"fblite_texture",HERO_SURFACE:"hero_surface",HERO_TEXTURE:"hero_texture",UNKNOWN:"unknown"})}),null);
__d("VideoPlayerLoggerErrors",[],(function(a,b,c,d,e,f){e.exports={ENTERED_FALLBACK:"entered_fallback",ERROR_CALLING_FLASH:"error_calling_flash"}}),null);
__d("dangerouslyOverrideMediaElementEndedProperty",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a={});a.dangerouslyOverrideMediaElementEndedProperty=!0;return a}a.isEnded=function(event){return!!(event&&event.detail&&event.detail.dangerouslyOverrideMediaElementEndedProperty)};e.exports=a}),null);