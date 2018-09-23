if (self.CavalryLogger) { CavalryLogger.start_js(["rB6ZQ"]); }

__d("WebMessengerConfirmBlockDialog",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";a={show:function(a){a=a&&a.length>0?g._("You have blocked {name}",[g._param("name",a)]):g._("You have blocked the sender");var c=g._("You can access messages you've blocked by going to the Filtered Messages list."),d=b("React").createElement("div",null,b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("OK"),use:"confirm"}));b("SimpleXUIDialog").showEx(c,a,d)}};e.exports=a}),null);
__d("WebMessengerDeclineMRDialog",["fbt","React","SimpleXUIDialog","MercuryThreadActions","XUIDialogButton.react","XUIDialogCancelButton.react","MercuryIDs","MessengerMessageRequestsTypedLogger","WebMessengerConfirmBlockDialog","FantaTabActions","MessagingTag","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MercuryThreadActions").get();a={show:function(a,c,d,e,f){__p&&__p();var i=function(d){b("WebMessengerConfirmBlockDialog").show(d);d=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,b("CurrentUser").getID());b("FantaTabActions").closeTab(c);h.changeFolder(a.thread_id,b("MessagingTag").OTHER);new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(d).setEntryPoint(null).log()},j=e?b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Ignore"),use:"confirm",onClick:function(d){a.folder===b("MessagingTag").OTHER?(h["delete"](c),b("FantaTabActions").closeTab(c)):h.ignoreMessages(b("MercuryIDs").getThreadFBIDFromThreadID(c))}}):b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Block"),use:"confirm",onClick:function(){h.blockMessages(c,i)}}),k=g._("Decline Conversation");e=e?g._("Request will be declined. Would you like to delete the messages from this group?"):g._({"Workplace chat":"Message request will be declined. Would you like to block this person on Workplace chat or delete these messages?","Messenger":"Message request will be declined. Would you like to block this person on Messenger or delete these messages?"},[g._enum(b("CurrentUser").isWorkUser()?"Workplace chat":"Messenger",{"Workplace chat":"Workplace chat",Messenger:"Messenger"})]);var l=b("CurrentUser").getID(),m=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,l);l=function(a){a==="hide"&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()};j=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Delete"),use:"confirm",onClick:function(){h["delete"](c),d&&d(),new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()}}),j);b("SimpleXUIDialog").showEx(e,k,j,l,{causalElement:f})}};e.exports=a}),null);
__d("MercuryJewelCountControl",["Arbiter","CurrentUser","MercuryDispatcher","MercuryThreadInformer","MessengerState.bs","UserActivity"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();var c=b("MercuryDispatcher").get(),d=b("MercuryThreadInformer").get();this.render();c.subscribe("model-update-completed",function(a,b){this.$2(!1)}.bind(this));d.subscribe("unseen-updated",function(){return this.render()}.bind(this));d.subscribe("unread-updated",function(){return this.render()}.bind(this));this.$1=a;this.$1.subscribe("marked-seen",function(){this.$2(!0)}.bind(this))}a.prototype.render=function(){"use strict";var a=b("MessengerState.bs").getUnseenUnreadCount(b("CurrentUser").getID());b("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:a},"state")};a.prototype.$2=function(a){"use strict";(a||this.$1.isOpen()&&b("UserActivity").isActive())&&b("MessengerState.bs").markAsSeen(b("CurrentUser").getID())};e.exports=a}),null);
__d("MercuryPresenceIndicator.react",["cx","fbt","Arbiter","AvailableListConstants","MercuryIDs","PresenceStatus","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$2=function(){if(!b("MercuryIDs").isCanonical(this.props.threadID))return null;else{var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);return b("PresenceStatus").get(a)}}.bind(this),c}a.prototype.componentDidMount=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){return this.forceUpdate()}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.release()};a.prototype.render=function(){var a=this.$2();return b("React").createElement("span",{className:this.$3(a)},b("React").createElement("span",{className:"accessible_elem"},this.$4(a)))};a.prototype.$3=function(a){return"presenceIndicator"+(b("MercuryIDs").isGroupChat(this.props.threadID)?" groupThread":"")+(a==b("AvailableListConstants").ACTIVE?" presenceActive":"")};a.prototype.$4=function(a){switch(a){case b("AvailableListConstants").ACTIVE:return h._("Active");default:return null}};a.propTypes={threadID:c.string.isRequired};e.exports=a}),null);
__d("MercurySeenIndicator.react",["cx","MercuryIDs","MessengerReadReceipt.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer);a=this.$1(a);return b("React").createElement("span",{className:"_3jy5"+(a?" repliedLast":"")+(a&&this.$2()?" seenByAll":"")})};a.prototype.$1=function(a){return a===this.props.thread.snippet_sender};a.prototype.$2=function(){return b("MessengerReadReceipt.bs").wasSeenByAll(this.props.readReceipts,{thread_id:this.props.thread.thread_id,author:this.props.thread.snippet_sender,timestamp:this.props.thread.timestamp})};function a(){h.apply(this,arguments)}a.propTypes={thread:c.object.isRequired,viewer:c.string.isRequired};e.exports=a}),null);
__d("MercuryThreadPermalink.react",["Link.react","React","WebMessengerThreadPermalinks"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={permalinkURI:"#"},b}a.prototype.componentDidMount=function(){this.$1(this.props)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){(a.threadID!==this.props.threadID||a.folder!==this.props.folder)&&this.$1(a)};a.prototype.render=function(){return b("React").createElement(b("Link.react"),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:"button"},this.props.children)};a.prototype.$1=function(a){this.setState({permalinkURI:"#"}),b("WebMessengerThreadPermalinks").getThreadURI(a.threadID,function(a){return this.setState({permalinkURI:a})}.bind(this),a.folder)};a.propTypes={className:c.string,children:c.any,threadID:c.string.isRequired,viewer:c.string.isRequired,folder:c.string,onClick:c.func};e.exports=a}),null);
__d("MercuryThreadReadToggle.react",["fbt","invariant","MercuryThreadActions","React","ReadToggle.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){a&&(a.preventDefault(),a.stopPropagation());a=b("MercuryThreadActions").getForFBID(this.props.viewer);this.props.unreadCount>0?a.markRead(this.props.threadID):a.markUnread(this.props.threadID)}.bind(this),c}a.prototype.render=function(){this.props.unreadCount>=0||h(0,undefined);return b("React").createElement(b("ReadToggle.react"),{isRead:this.props.unreadCount===0,onClick:this.$1,readLabel:g._("Mark as Unread"),unreadLabel:g._("Mark as Read")})};a.propTypes={threadID:c.string.isRequired,viewer:c.string.isRequired,unreadCount:c.number.isRequired};e.exports=a}),null);
__d("MessengerPlayGameCallToActionHelper",["URI"],(function(a,b,c,d,e,f){__p&&__p();e.exports={parseMetadata:function(a){var b,c,d;d=(d=a)!=null?d.instantgame_gameid:d;if(!d)return null;c=(c=a)!=null?c.instantgame_payload:c;b=(b=a)!=null?b.instantgame_context_type:b;a=(a=a)!=null?a.instantgame_context_id:a;return{contextSourceID:a,contextType:b,gameID:d,payload:c}},parseActionLink:function(a){a=new(b("URI"))(a).getQueryData();if(!a)return null;var c=a.game_id;if(!c)return null;var d=a.payload,e=a.context_type;a=a.context_id;return{contextSourceID:a,contextType:e,gameID:c,payload:d}}}}),null);
__d("MessagesJewelGameButtonContainer.react",["InstantNativeGames","JSResource","MessengerPlayGameCallToActionHelper","Placeholder.react","React","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("lazyLoadComponent")(b("JSResource")("MessagesJewelGameButton.react").__setRef("MessagesJewelGameButtonContainer.react"));g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){__p&&__p();var a;a=(a=this.props.thread)!=null?a.game_id:a;if(a===null){var c;c=(c=this.props.thread)!=null?(c=c.snippet_attachments)!=null?(c=c[0])!=null?(c=c.share)!=null?(c=c.messenger_ctas)!=null?(c=c[0])!=null?c.action_url:c:c:c:c:c:c;c=c?c:"";c=b("MessengerPlayGameCallToActionHelper").parseActionLink(c);a=(c=c)!=null?c.gameID:c}return!a||a===b("InstantNativeGames").SOCCER.toString()||a===b("InstantNativeGames").BASKETBALL.toString()?null:b("React").createElement(b("Placeholder.react"),{fallback:b("React").createElement("div",null)},b("React").createElement(h,{thread:this.props.thread,gameID:a}))};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("MessagesJewelInlineThumbnail.react",["cx","MercuryAttachmentType","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.$1();if(a.length===0)return b("React").createElement("span",null);var c=a[0].thumbnail_url;if(!c)return b("React").createElement("span",null);c=b("React").createElement("span",{className:"_56hv"},b("React").createElement("i",{style:{backgroundImage:"url("+c+")"}}));a.length>1&&(c=b("React").createElement("span",null,b("React").createElement("span",{className:"_56hy"}),c));return c};a.prototype.$1=function(){var a=this.props.thread;return!a.snippet_attachments?[]:a.snippet_attachments.filter(function(a){return a.attach_type===b("MercuryAttachmentType").PHOTO})};function a(){h.apply(this,arguments)}a.propTypes={thread:c.object.isRequired};e.exports=a}),null);
__d("MessagesJewelThreadListRow.react",["ix","cx","fbt","Promise","Bootloader","CurrentUser","ErrorBoundary.react","Image.react","ImageBlock.react","ImmutableObject","MercuryIDs","MercuryPresenceIndicator.react","MercurySeenIndicator.react","MercuryThreadActions","MercuryThreadPermalink.react","MercuryThreadReadToggle.react","MercuryThreadSnippet.react","MercuryThreadTimestampReact.bs","MercuryThreadTitle.react","MercuryTimestamp","MessagesJewelGameButtonContainer.react","MessagesJewelInlineThumbnail.react","MessagingTag","MessengerThreadImageReact.bs","MNAdsMessageRequestUtils","React","RTCCallState","UserAgent","WebMessengerDeclineMRDialog","XUIButton.react","asset","gkx","immutable","promiseDone"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("MercuryThreadTimestampReact.bs").jsComponent,l=b("MessengerThreadImageReact.bs").jsComponent;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$13=function(){b("MercuryThreadActions").get()["delete"](this.props.thread.thread_id)}.bind(this),this.$14=function(){b("MercuryThreadActions").get().archive(this.props.thread.thread_id)}.bind(this),this.$16=function(a){__p&&__p();a.preventDefault();a.stopPropagation();a=window.callWindow&&!window.callWindow.closed&&window.callWindow.focus;if(a)window.callWindow.focus();else{a=this.props.thread;var c=a.rtc_call_data,d=a.thread_fbid;b("Bootloader").loadModules(["FBRTCCore","FBRTCLogger"],function(a,e){e=e.Trigger;a.startGroupCall({conferenceName:"GROUP:"+d,hasVideo:c.call_state===b("RTCCallState").VIDEO_GROUP_CALL,serverInfoData:c.server_info_data,trigger:e.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON})},"MessagesJewelThreadListRow.react")}}.bind(this),c}a.prototype.render=function(){var a=this.props.isDoNotDisturb&&b("CurrentUser").isWorkUser()&&b("gkx")("AT505jRFtG_7w3nhZICN2g5HZo5KZ4FP0G7n7x_oCDMvQmeZOfjSNcbXcUzDHS_pr0yjnx5p-38r7Z_8WJZNypI6")?this.$2():this.$3();a=b("UserAgent").isBrowser("Chrome")&&!b("UserAgent").isPlatform("Windows")?b("React").createElement("div",{className:"author fixemoji"},this.$4(),a):b("React").createElement("div",{className:"author"},b("React").createElement("strong",null,this.$4()),a);a=b("React").createElement(b("ImageBlock.react"),{spacing:"none"},b("React").createElement("div",{className:"_p32"},this.$5()),b("React").createElement("div",{className:"content"},a,b("React").createElement("div",{className:"_1iji"},b("React").createElement("div",{className:"_1ijj"},this.$6(),this.$7()),b("React").createElement("div",null,this.$8())),b("React").createElement("div",{className:"time"},b("MNAdsMessageRequestUtils").isAdsMessageRequest(this.props.thread)?b("MNAdsMessageRequestUtils").renderAdsMessageRequestStatus():this.$9()),this.$10()),b("React").createElement("div",null,b("React").createElement(b("MessagesJewelInlineThumbnail.react"),{thread:this.props.thread}),b("React").createElement("div",{className:"x_div"},this.$11())));return b("React").createElement("li",{className:this.props.thread.unread_count>0?"jewelItemNew":""},b("React").createElement(b("MercuryThreadPermalink.react"),{className:"messagesContent",threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},a))};a.prototype.$8=function(){__p&&__p();if(this.props.thread.folder!==b("MessagingTag").PENDING)return null;var a=b("CurrentUser").getID(),c=b("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,a);return b("React").createElement("div",{className:"_zjy"},b("React").createElement(b("XUIButton.react"),{use:"confirm",onClick:function(a){a.preventDefault(),b("MercuryThreadActions").get().changeFolder(this.props.thread.thread_id,b("MessagingTag").INBOX),b("promiseDone")(this.$12(),function(a){a.setAction("message_requests_accept_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setThreadKey(c).log()}.bind(this))}.bind(this),label:i._("Accept")}),b("React").createElement(b("XUIButton.react"),{onClick:function(a){a.preventDefault();var d=b("MercuryIDs").isGroupChat(this.props.thread.thread_id);b("WebMessengerDeclineMRDialog").show(this.props.thread,this.props.thread.thread_id,this.$13,d);a.stopPropagation();b("promiseDone")(this.$12(),function(a){a.setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setThreadKey(c).log()}.bind(this))}.bind(this),use:"default",label:i._("Decline")}))};a.prototype.$2=function(){return b("React").createElement(b("Image.react"),{className:"_3-9a",src:g("550341")})};a.prototype.$3=function(){return!this.props.showPresence?null:b("React").createElement(b("MercuryPresenceIndicator.react"),{threadID:this.props.thread.thread_id})};a.prototype.$5=function(a){return b("React").createElement(l,{size:48,thread:this.props.thread,useBackground:!0,viewer:this.props.viewer,participants:this.props.participants})};a.prototype.$4=function(){return b("React").createElement(b("MercuryThreadTitle.react"),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:!0})};a.prototype.$7=function(){return b("React").createElement(b("MercuryThreadSnippet.react"),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer})};a.prototype.$9=function(){return b("React").createElement(k,{time:this.props.thread.timestamp,title:b("MercuryTimestamp").getAbsoluteTimestamp(this.props.thread.timestamp),text:b("MercuryTimestamp").getRelativeTimestamp(this.props.thread.timestamp)})};a.prototype.$6=function(){return b("React").createElement(b("MercurySeenIndicator.react"),{thread:this.props.thread,viewer:this.props.viewer,readReceipts:this.props.readReceipts})};a.prototype.$11=function(){return b("React").createElement(b("MercuryThreadReadToggle.react"),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count})};a.prototype.$10=function(){var a=this.$15();return!a&&this.props.thread.folder!==b("MessagingTag").PENDING?b("React").createElement(b("ErrorBoundary.react"),null,b("React").createElement(b("MessagesJewelGameButtonContainer.react"),{thread:this.props.thread})):a};a.prototype.$15=function(){if(!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state===b("RTCCallState").NO_ONGOING_CALL)return null;var a=window.callWindow&&!window.callWindow.closed?i._("Return to Call"):i._("Join Call");return b("React").createElement(b("XUIButton.react"),{className:"_4oci",label:a,onClick:this.$16})};a.prototype.$12=function(){this.$1||(this.$1=new(b("Promise"))(function(a,c){b("Bootloader").loadModules(["MessengerMessageRequestsTypedLogger"],function(b){b=new b();b.setSurface("inbox").setFolderType("pending").setEntryPoint("inbox_banner");a(b)},"MessagesJewelThreadListRow.react")}));return this.$1};a.propTypes={onClick:c.func,participants:c.instanceOf(b("immutable").Map).isRequired,showPresence:c.bool,isDoNotDisturb:c.bool,thread:c.instanceOf(b("ImmutableObject")).isRequired,viewer:c.string.isRequired};e.exports=a}),null);
__d("MessagesJewelThreadlistRowContainer.react",["ChatOpenTab","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","ImmutableObject","MercuryIDs","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","MessagingTag","MessengerDiscoveryEntryPoint","MessengerMessageRequestsTypedLogger","React","ReactComponentWithPureRenderMixin","TimeSlice"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MessagesJewelThreadlistRowContainer",mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{folder:a.string,readReceipts:a.any,thread:a.instanceOf(b("ImmutableObject")).isRequired,viewer:a.string.isRequired,handleChatTabOpen:a.func},render:function(){return b("React").createElement(b("MercuryThreadlistRowContainer.react"),{ChildClass:b("MessagesJewelThreadListRow.react"),onClick:this._handleClick,showPresence:b("ChatOpenTab").canOpenTab(),readReceipts:this.props.readReceipts,thread:this.props.thread,viewer:this.props.viewer})},_handleClick:function(a){__p&&__p();if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;if(!b("ChatOpenTab").canOpenTab())return;this.props.handleChatTabOpen&&b("TimeSlice").guard(this.props.handleChatTabOpen,"Jewelupdate after Chat tab open",{propagationType:b("TimeSlice").PropagationType.ORPHAN})();a.preventDefault();a=this.props.thread.thread_id;var c=b("CurrentUser").getID();c=b("MercuryIDs").getThreadKeyfromThreadIDUserID(a,c);b("FantaTabActions").openTab(a,[b("MessengerDiscoveryEntryPoint").FB_HEADER_DOCK_JEWEL_THREAD]);b("ChatOpenTabEventLogger").logClickOpen("jewel",a);var d;switch(this.props.folder){case"inbox":d="inbox";break;case"pending":d="pending";break;case"other":d="other";break}this.props.thread.folder!==b("MessagingTag").INBOX&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(b("MercuryIDs").getUserIDFromThreadID(a)).setSurface(d).setFolderType(this.props.thread.folder).setThreadKey(c).log()}});e.exports=c}),null);
__d("MessagesJewelThreadList.react",["cx","fbt","Arbiter","BootloadedComponent.react","ChatConfig","CurrentUser","EventProfiler","ImmutableObject","JSResource","Link.react","MessagesJewelThreadlistRowContainer.react","MessagingTag","MessengerMessageRequestsInfo.react","MessengerState.bs","React","ScrollableArea.react","SubscriptionsHandler","TimeSlice","XUISpinner.react","debounce","getViewportDimensions","requestIdleCallback","requireWeak","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=160,k=60,l=10;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=new(b("SubscriptionsHandler"))(),this.$4=function(){if(this.props.isLoaded||!this.refs.scrollable)return;var a=this.refs.scrollable.getArea();if(!a)return;a.getScrollTop()+a.getClientHeight()>=a.getScrollHeight()-1&&(this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest())}.bind(this),this.$9=function(a){a.preventDefault(),this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$8=function(a){this.props.onFilteredRequestsClick&&this.props.onFilteredRequestsClick(a)}.bind(this),this.state={height:this.$3(),hasQP:!1},c}a.prototype.componentDidMount=function(){__p&&__p();this.$2=Event.listen(window,"resize",b("debounce")(function(){this.setState({height:this.$3()})}.bind(this)));b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click");var a=b("ChatConfig").get("message_jewel_promotion_data");a&&this.setState({hasQP:!0},function(){this.setState({height:this.$3()})}.bind(this));this.$1.addSubscriptions(b("Arbiter").subscribeOnce("hideMessageJewelQP",function(){this.setState({hasQP:!1},function(){this.setState({height:this.$3()})}.bind(this))}.bind(this)));a=function(){b("requestIdleCallback")(function(){b("requireWeak")("FantaTabsEagerBootloader",function(a){return a.bootload()})})};b("TimeSlice").guard(a,"JewelOpen fanta eagerbootloader",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype.componentDidUpdate=function(a){a.threads.length===0&&this.props.threads.length!==0&&(this.props.onRenderThreads&&this.props.onRenderThreads()),b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click")};a.prototype.componentWillUnmount=function(){this.$2.remove(),this.$1.release()};a.prototype.render=function(){return b("React").createElement(b("MessengerState.bs").jsComponent,{fbid:b("CurrentUser").getID()},function(a){return b("React").createElement(b("ScrollableArea.react"),{className:"_2q3u",height:this.state.height,onScroll:b("throttle")(this.$4,50),ref:"scrollable"},b("React").createElement("ul",{className:"jewelContent"},this.$5(),this.props.threads.map(function(c){return this.$6(c,b("MessengerState.bs").pendingFolderUnseenCount(a),b("MessengerState.bs").readReceiptsPerThread(a))}.bind(this))),this.$7())}.bind(this))};a.prototype.$6=function(a,c,d){return b("React").createElement(b("MessagesJewelThreadlistRowContainer.react"),{folder:this.props.folder,key:a.thread_id,thread:a,viewer:this.props.viewer,handleChatTabOpen:this.props.handleChatTabOpen,readReceipts:d})};a.prototype.$3=function(){var a=(this.props.maxInitialThreadCount||l)*k-(this.state&&this.state.hasQP?260:0);return Math.min(a,b("getViewportDimensions")().height-j)};a.prototype.$7=function(){if(this.props.isLoaded)return this.props.folder===b("MessagingTag").PENDING?b("React").createElement("div",{className:"_16bh _16bi"},b("React").createElement(b("Link.react"),{onClick:this.$8},h._("See filtered messages"))):null;return this.props.isLoading?b("React").createElement(b("XUISpinner.react"),{className:"jewelLoading"}):b("React").createElement("div",{className:"_v8y"},b("React").createElement(b("Link.react"),{href:"#",onClick:this.$9},h._("Show Older")))};a.prototype.$5=function(){return!this.props.jewelRequestsUI||this.props.folder!==b("MessagingTag").PENDING?null:b("React").createElement("li",{className:"_16bh _16bi"},b("React").createElement(b("MessengerMessageRequestsInfo.react"),null))};a.propTypes={folder:c.string,isLoaded:c.bool,isLoading:c.bool,maxInitialThreadCount:c.number,jewelRequestsUI:c.bool,onFilteredRequestsClick:c.func,onLoadMoreRequest:c.func,onMessageRequestsClick:c.func,onRenderThreads:c.func,threads:c.arrayOf(c.oneOfType([c.instanceOf(b("ImmutableObject")),c.arrayOf(c.instanceOf(b("ImmutableObject")))])).isRequired,viewer:c.string.isRequired};e.exports=a}),null);
__d("MercuryJewelThreadlistControl",["csx","cx","fbt","ArbiterMixin","Bootloader","CSS","CurrentUser","DOM","Event","JSLogger","MercuryFilters.bs","MercuryServerRequests","MercuryThreadlistConstants","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","MessengerURIConstants","React","ReactDOM","gkx","mixin"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("JSLogger").create("mercury_jewel"),l=b("MessagingTag").PENDING,m="back_to_inbox",n=i._("See All in Messenger"),o=i._("See All in Workplace Chat");c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));j=c&&c.prototype;function a(a){"use strict";__p&&__p();j.constructor.call(this);this.$JewelThreadlistControl13=function(a){a.preventDefault(),this.$JewelThreadlistControl9(b("MessagingTag").PENDING,b("MercuryFilters.bs").all)}.bind(this);this.$JewelThreadlistControl14=function(a){a.preventDefault(),this.$JewelThreadlistControl9(b("MessagingTag").OTHER,b("MercuryFilters.bs").all)}.bind(this);a=a.getFlyout();this.$JewelThreadlistControl1=[];this.$JewelThreadlistControl2=b("DOM").find(a,"._3v_l");this.$JewelThreadlistControl3=b("MessagingTag").INBOX;this.$JewelThreadlistControl4=b("MercuryFilters.bs").all;this.$JewelThreadlistControl5=b("CurrentUser").getID();this.$JewelThreadlistControl6={};this.$JewelThreadlistControl7={};this.$JewelThreadlistControl6[b("MessagingTag").INBOX]=b("DOM").find(a,"._1sde");this.$JewelThreadlistControl7[b("MessagingTag").INBOX]=b("DOM").find(a,"._1sdg");this.$JewelThreadlistControl8=b("MercuryServerRequests").getForFBID(this.$JewelThreadlistControl5);b("Event").listen(this.$JewelThreadlistControl6[b("MessagingTag").INBOX],"click",function(){return this.$JewelThreadlistControl9(b("MessagingTag").INBOX,b("MercuryFilters.bs").all)}.bind(this));!b("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h")?(this.$JewelThreadlistControl6[l]=b("DOM").find(a,"._1sdf"),this.$JewelThreadlistControl7[l]=b("DOM").find(a,"._1sdh"),b("Event").listen(this.$JewelThreadlistControl6[l],"click",function(){return this.$JewelThreadlistControl9(l,b("MercuryFilters.bs").all)}.bind(this))):(this.$JewelThreadlistControl6[m]=b("DOM").find(a,"._34zq"),b("Event").listen(this.$JewelThreadlistControl6[m],"click",function(){return this.$JewelThreadlistControl9(b("MessagingTag").INBOX,b("MercuryFilters.bs").all)}.bind(this)));this.$JewelThreadlistControl10=b("DOM").find(a,"._1c1m");this.$JewelThreadlistControl11=b("DOM").find(a,"._4djt");b("Event").listen(this.$JewelThreadlistControl10,"click",function(a){this.$JewelThreadlistControl12(),a.kill()}.bind(this));this.render();k.bump("opened_threadlist_"+this.$JewelThreadlistControl3)}a.prototype.render=function(){"use strict";b("Bootloader").loadModules(["MessengerState.bs","MercuryJewelUnreadCount.bs"],function(a,c){b("ReactDOM").render(b("React").createElement(a.jsComponent,{fbid:this.$JewelThreadlistControl5},function(c){return b("React").createElement(b("MercuryThreadlistContainer.react"),{ChildClass:b("MessagesJewelThreadList.react"),folder:this.$JewelThreadlistControl3,filter:this.$JewelThreadlistControl4,jewelRequestsUI:!b("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h"),viewer:this.$JewelThreadlistControl5,onMessageRequestsClick:this.$JewelThreadlistControl13,onFilteredRequestsClick:this.$JewelThreadlistControl14,threadIDs:this.$JewelThreadlistControl1,threads:a.threads(c),threadlistOrderMap:a.threadlistOrderMap(c)})}.bind(this)),this.$JewelThreadlistControl2);var d=this.$JewelThreadlistControl7[b("MessagingTag").INBOX],e=this.$JewelThreadlistControl7[l];d&&b("ReactDOM").render(b("React").createElement(c.jsComponent,{viewer:this.$JewelThreadlistControl5,folder:b("MessagingTag").INBOX}),d);e&&b("ReactDOM").render(b("React").createElement(c.jsComponent,{viewer:this.$JewelThreadlistControl5,folder:l}),e)}.bind(this),"MercuryJewelThreadlistControl")};a.prototype.$JewelThreadlistControl12=function(){"use strict";this.$JewelThreadlistControl8.markFolderAsRead(this.$JewelThreadlistControl3)};a.prototype.$JewelThreadlistControl9=function(a,c){"use strict";__p&&__p();this.$JewelThreadlistControl1=[];if(this.$JewelThreadlistControl3!==a||this.$JewelThreadlistControl4!==c){var d=this.$JewelThreadlistControl3,e=a===b("MessagingTag").INBOX,f=a;k.bump("opened_threadlist_"+a);this.$JewelThreadlistControl6[f]&&b("CSS").addClass(this.$JewelThreadlistControl6[f],"_1sdd");this.$JewelThreadlistControl6[d]&&b("CSS").removeClass(this.$JewelThreadlistControl6[d],"_1sdd");f=b("CurrentUser").isWorkUser()?o:n;this.$JewelThreadlistControl3=a;this.$JewelThreadlistControl4=c;e?(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID()):a==l&&(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX+b("MessengerURIConstants").MESSAGE_REQUESTS_PATH,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID());b("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h")&&(b("CSS").conditionShow(this.$JewelThreadlistControl6[b("MessagingTag").INBOX],e),b("CSS").conditionShow(this.$JewelThreadlistControl6[m],!e));this.render()}};e.exports=a}),null);
__d("MercuryJewel",["Arbiter","EventProfiler","MercuryJewelCountControl","MercuryServerPayloadPreprocessor"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=!1,i=null;function a(a,c){"use strict";b("MercuryServerPayloadPreprocessor").get().handleUpdate(c),this.$1=new(b("MercuryJewelCountControl"))(a),a.subscribeOnce("opened",function(){this.$2(a)}.bind(this)),a.subscribeOnce("user-open",function(){this.$3(a)}.bind(this)),a.subscribe("updated",function(b,c){c&&c.count>0&&this.$2(a)}.bind(this))}a.prototype.$2=function(a){"use strict";this.$3(a),g||(g=!0,a.isOpen()||(i=b("EventProfiler").notifyRunningEagerInteraction(["Messages_Jewel_Button"],"click")),d(["MercuryJewelThreadlistControl"],function(b){this.$4=new b(a)}.bind(this)),b("Arbiter").inform("mercury-jewel/opened",null,"state"))};a.prototype.$3=function(a){"use strict";!h&&a.isOpen()&&(h=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstMercuryJewelOpen"),i&&i())};e.exports=a}),null);
__d("MercuryJewelUnreadCount.bs",["fbt","bs_curry","ReasonReact.bs","bs_js_primitive","MessengerState.bs","MercuryThreadlistConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("MercuryJewelUnreadCount");function i(a,c,d){__p&&__p();return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){__p&&__p();return b("ReasonReact.bs").element(0,0,b("bs_curry")._1(b("MessengerState.bs").Provider[0](0,[a]),function(a){var d=a[16][c];d=d!==undefined?[d.size]:b("bs_js_primitive").undefined_to_opt(a[17][c]);if(d){a=d[0];if(a===0)return null;else return g._("({unread_count})",[g._param("unread_count",String(a>b("MercuryThreadlistConstants").MAX_UNREAD_COUNT?b("MercuryThreadlistConstants").MAX_UNREAD_COUNT:a))])}else return null}))},h[9],h[10],h[11],h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(a.viewer,a.folder,[])});f.component=h;f.make=i;f.jsComponent=a}),null);