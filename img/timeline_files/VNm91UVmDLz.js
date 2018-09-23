if (self.CavalryLogger) { CavalryLogger.start_js(["5418W"]); }

__d("Facepile.react",["cx","fbt","ix","HovercardLink","Image.react","Link.react","List.react","React","intlSummarizeNumber","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j={small:24,medium:32,large:50};c=b("React").createClass({displayName:"Facepile",defaultProps:{moreColor:"blue",moreCount:0,showHovercard:!1,tooltipPosition:"above",showToolTip:!0,spacing:"none"},propTypes:{className:a.string,moreColor:a.oneOf(["blue","gray"]),moreCount:a.number,moreDialogLink:a.string,morePageLink:a.string,numFaces:a.number,onFaceClick:a.func,onComponentDidMount:a.func,profiles:a.arrayOf(a.shape({URL:a.any,name:a.node.isRequired,uniqueID:a.any.isRequired,profilePicURI:a.any.isRequired})).isRequired,showHovercard:a.bool,size:a.oneOf([28,"small","medium","large"]).isRequired,spacing:a.oneOf(["none","small","medium","large"]),showToolTip:a.bool,tooltipPosition:a.oneOf(["above","below","left","right"])},_onFaceClick:function(a,b){this.props.onFaceClick&&this.props.onFaceClick(a,b)},componentDidMount:function(){this.props.onComponentDidMount&&this.props.onComponentDidMount()},getPicSize:function(){return j[this.props.size]||this.props.size},renderFace:function(a,c){var d=this.getPicSize(),e=b("HovercardLink").constructEndpoint({id:a.uniqueID}).toString();return b("React").createElement("li",{className:"_43q7",key:a.uniqueID,onClick:this._onFaceClick.bind(this,a,c)},b("React").createElement(b("Link.react"),{"aria-label":a.name,className:"_2rt_ link","data-hover":this.props.showHovercard?null:"tooltip","data-hovercard":this.props.showHovercard?e:null,"data-ignoreclass":"_2rt_","data-tooltip-alignh":"left","data-tooltip-content":a.name,"data-tooltip-position":this.props.tooltipPosition,href:a.URL},b("React").createElement(b("Image.react"),{src:a.profilePicURI,width:d,height:d,className:"img"})))},renderMore:function(){if(!this.props.moreCount)return null;var a=this.props.numFaces!=null&&this.props.numFaces<=this.props.profiles.length?this.props.moreCount+1:this.props.moreCount,c=b("intlSummarizeNumber")(a,0),d=c.length,e;a===0||this.props.size==="small"&&d>2||this.props.size===28&&d>2||this.props.size==="medium"&&d>3||this.props.size==="large"&&d>6?e=b("React").createElement(b("Image.react"),{src:i("97502")}):e="+"+c;var f;(this.props.showToolTip===undefined||this.props.showToolTip===!0)&&(a===1?f=h._("1 other person"):f=h._("{num} other people",[h._param("num",a)]));c=b("joinClasses")("_43q8 _43q7"+(d<2?" _43qa":"")+(d===2?" _43qb":"")+(d===3?" _43qd":"")+(d>3?" _43qe":"")+(this.props.moreColor==="blue"?" _49c8":"")+(this.props.moreColor==="gray"?" _49cb":""));return b("React").createElement("li",{className:c},b("React").createElement("a",{"data-hover":f?"tooltip":null,"data-tooltip-position":f?"right":null,"data-tooltip-content":f,ajaxify:this.props.moreDialogLink||this.props.morePageLink,href:this.props.morePageLink,role:"button",rel:this.props.moreDialogLink?"dialog":null},e))},render:function(){var a=this.props.spacing||this.defaultProps.spacing;a=b("joinClasses")(this.props.className,"_43qm"+(this.props.size==28?" _3cxu":"")+(this.props.size=="small"?" _43q9":"")+(this.props.size=="medium"?" _43qc":"")+(this.props.size=="large"?" _43qf":"")+(a!=this.defaultProps.spacing?" _4nab":""));var c=this.props.numFaces==undefined?this.props.profiles:this.props.profiles.slice(0,this.props.moreCount?this.props.numFaces-1:this.props.numFaces);return b("React").createElement("div",{className:a,style:this.props.style},b("React").createElement(b("List.react"),{className:"_4cg3",direction:"horizontal",spacing:this.props.spacing||"none",border:"none"},c.map(this.renderFace),this.renderMore()))}});e.exports=c}),null);
__d("EventCreatorTipsHideMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"tipID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"eventID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"context",type:"EventContextShape!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"event_hide_creator_tip",storageKey:null,args:[{kind:"Variable",name:"context",variableName:"context",type:"EventContextShape!"},{kind:"Variable",name:"event_id",variableName:"eventID",type:"ID!"},{kind:"Variable",name:"tip_id",variableName:"tipID",type:"ID!"}],concreteType:"EventHideCreatorTipPayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}];return{kind:"Request",operationKind:"mutation",name:"EventCreatorTipsHideMutation",id:"2508668315817396",text:null,metadata:{},fragment:{kind:"Fragment",name:"EventCreatorTipsHideMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"EventCreatorTipsHideMutation",argumentDefinitions:a,selections:b}}}();e.exports=a}),null);
__d("EventCreatorTipsHideMutation",["EventActionContext","RelayFBEnvironment","RelayModern","gkx","EventCreatorTipsHideMutation.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayModern").MutationTypes,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=function(){return b("EventCreatorTipsHideMutation.graphql")};function a(a,c,d){d=b("EventActionContext").getForGraphQL(d);var e=b("gkx")("AT5AdaVB04yHpC_giQcS4c3amSbjW7TuKJ-FIG9MFGPuzVb23esHugkWKEH3PidnpLc214WP_IOUg4MnHV5CqD-L")?a+":"+c:a;h(b("RelayFBEnvironment"),{mutation:i,variables:{tipID:a,eventID:c,context:d},configs:[{type:g.NODE_DELETE,deletedIDFieldName:"id"}],optimisticResponse:function(){return{id:e}}})}e.exports={hideEventCreatorTip:a}}),null);
__d("EventInsightsRecommendedActionUtil",["AsyncDialog","AsyncRequest","EventActionContext","EventsActionsLogger","gkx","goURI","nullthrows"],(function(a,b,c,d,e,f){"use strict";var g={log:function(a,c,d,e,f){d=b("EventActionContext").addActionHistoryEntry(b("EventActionContext").getNewActionContext(),{surface:d,mechanism:e});b("EventsActionsLogger").log(a,{type:c,target:b("EventsActionsLogger").Target.RECOMMENDATION,acontext:d},{list_position:f})},handleClick:function(a,c,d,e,f,h){g.log(a,b("EventsActionsLogger").Type.CLICK,c,d,e);a=b("nullthrows")(f);h==="dialog"?b("AsyncDialog").send(new(b("AsyncRequest"))(a)):b("goURI")(a)},santizeTipID:function(a){return b("gkx")("AT5AdaVB04yHpC_giQcS4c3amSbjW7TuKJ-FIG9MFGPuzVb23esHugkWKEH3PidnpLc214WP_IOUg4MnHV5CqD-L")?a.substr(0,a.indexOf(":")):a}};e.exports=g}),null);
__d("EventRecommendedActionCardLayoutV2.react",["ix","cx","fbt","EventActionContext","EventCreatorTipsHideMutation","EventInsightsRecommendedActionUtil","EventsActionsLogger","FDSText.react","FlexLayout.react","Image.react","React","ShimButton.react","Tooltip.react","XUIButton.react","asset","gkx","suiMargin"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("EventCreatorTipsHideMutation").hideEventCreatorTip,l=b("EventsActionsLogger").Surface.INSIGHTS_REC_ACTIONS_CARD;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$1=function(){var a=this.props.actionType,c=b("EventInsightsRecommendedActionUtil").santizeTipID(this.props.tipID);k(c,this.props.eventID,b("EventActionContext").addActionHistoryEntry(b("EventActionContext").getNewActionContext(),{surface:l,mechanism:a}));b("EventInsightsRecommendedActionUtil").log(this.props.eventID,b("EventsActionsLogger").Type.REMOVE,l,a,this.props.position)}.bind(this),c}a.prototype.componentDidMount=function(){b("EventInsightsRecommendedActionUtil").log(this.props.eventID,b("EventsActionsLogger").Type.VIEW,l,this.props.actionType,this.props.position)};a.prototype.render=function(){var a=this.props,c=a.icon,d=a.title,e=a.subtitle,f=a.eventID,h=a.actionType,j=a.actionLabel,k=a.actionRel,l=a.actionHref,m=a.position;return b("React").createElement(b("FlexLayout.react"),{className:"_3_b9"},b("React").createElement("div",{className:"_3_br"},b("React").createElement("div",{className:"_2lkc"},b("React").createElement(b("Image.react"),{src:c,className:"_6iyc"}))),b("React").createElement("div",null,b("React").createElement(b("FDSText.react"),{color:"primary",size:"body2",weight:"bold",display:"block",margin:"_3-94"},d),b("React").createElement("div",{className:"_6kha"},b("React").createElement(b("FDSText.react"),{size:"body3",color:"secondary",display:"block",margin:"_3-92"},e)),j&&l?b("React").createElement(b("XUIButton.react"),{use:"confirm",label:j,onClick:function(){return b("EventInsightsRecommendedActionUtil").handleClick(f,b("EventsActionsLogger").Surface.INSIGHTS_REC_ACTIONS_CARD,h,m,l,k)},className:"_2lkh"}):null),b("gkx")("AT5DcLN3r7XLpJkwkn6A6hrc0iPqdn8kfNnW9JVBJbQD1v11SIO96pytkxniJB0toiLh9bLLO2SZW4_y42jQ55FV")?b("React").createElement("div",{className:"_6jt-"},b("React").createElement(b("Tooltip.react"),{alignH:"center",tooltip:i._("Hide this recommended action")},b("React").createElement(b("ShimButton.react"),{onClick:this.$1},b("React").createElement(b("Image.react"),{src:g("497562")})))):null)};e.exports=a}),null);
__d("EventRecommendedActionsCardV2Query.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"eventID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"renderLocation",type:"EventRecommendedActionRenderLocation",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"eventID",type:"ID!"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"LinkedField",alias:"eventInsights",name:"event_insights",storageKey:null,args:null,concreteType:"EventInsights",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"recommended_actions",storageKey:null,args:[{kind:"Variable",name:"render_location",variableName:"renderLocation",type:"EventRecommendedActionRenderLocation"}],concreteType:"EventInsightsRecommendedAction",plural:!0,selections:[c,{kind:"ScalarField",alias:null,name:"action_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"action_title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"action_uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"action_rel",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"asset",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"subtitle",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"title",args:null,storageKey:null}]}]};return{kind:"Request",operationKind:"query",name:"EventRecommendedActionsCardV2Query",id:"1750462854991399",text:null,metadata:{},fragment:{kind:"Fragment",name:"EventRecommendedActionsCardV2Query",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"event",storageKey:null,args:b,concreteType:"Event",plural:!1,selections:[d]}]},operation:{kind:"Operation",name:"EventRecommendedActionsCardV2Query",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"event",storageKey:null,args:b,concreteType:"Event",plural:!1,selections:[d,c]}]}}}();e.exports=a}),null);
__d("EventRecommendedActionsCardV2.react",["ix","cx","fbt","EventRecommendedActionCardLayoutV2.react","FDSText.react","Image.react","Link.react","React","RelayFBEnvironment","RelayModern","XUICard.react","XUICardHeader.react","XUICardHeaderTitle.react","asset","suiMargin","EventRecommendedActionsCardV2Query.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var l=3,m=function(){return b("EventRecommendedActionsCardV2Query.graphql")};function n(a){return a.totalCardCount<=l||a.showAll?null:b("React").createElement(b("Link.react"),{className:"_2lj8",onClick:a.onSeeMoreClicked},b("React").createElement(b("Image.react"),{className:"_3-9b",src:g("512979")}),b("React").createElement(b("FDSText.react"),{margin:"_3-9a",color:"blueLink"},i._("See More ({remaining_card_count})",[i._param("remaining_card_count",a.totalCardCount-l)])))}c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.state={showAll:!1},b}a.prototype.render=function(){__p&&__p();return b("React").createElement(k,{environment:b("RelayFBEnvironment"),query:m,variables:{eventID:this.props.eventID,renderLocation:this.props.renderLocation},render:function(a){__p&&__p();a.error;a=a.props;a=(a=a)!=null?(a=a.event)!=null?(a=a.eventInsights)!=null?a.recommended_actions:a:a:a;if(a&&a.length>0){a=a.filter(Boolean);var c=a;!this.state.showAll&&c.length>l&&(c=c.slice(0,l));return b("React").createElement("div",{className:"_6ioc"},b("React").createElement(b("XUICard.react"),{className:"_3-96 _6iod"},b("React").createElement(b("XUICardHeader.react"),{type:"secondary"},b("React").createElement(b("XUICardHeaderTitle.react"),{className:"_3-94"},i._("Recommended Actions"))),c.map(function(a,c){return b("React").createElement(b("EventRecommendedActionCardLayoutV2.react"),{key:a.title,tipID:a.id,icon:a.asset,title:a.title,subtitle:a.subtitle,eventID:this.props.eventID,actionType:a.action_type,actionLabel:a.action_title,actionRel:a.action_rel,actionHref:a.action_uri,position:c})}.bind(this)),b("React").createElement(n,{totalCardCount:a.length,showAll:this.state.showAll,onSeeMoreClicked:function(a){return this.setState({showAll:!0})}.bind(this)})))}return null}.bind(this)})};e.exports=a}),null);
__d("SpotlightViewerClose",["cx","fbt","React","TooltipLink.react","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=this.props.position=="left"?"_5wx3":"_5wx4",c=b("React").createElement("span",null,h._("Press Esc to close"));return b("React").createElement(b("TooltipLink.react"),{className:b("joinClasses")("_4-o9 _50-m _51an",a,this.props.isFixed?"_2chv":""),onClick:this.props.onClick,onKeyPress:this.props.onKeyPress,tooltip:c,tabIndex:"0"})};function a(){"use strict";i.apply(this,arguments)}a.propTypes={position:c.oneOf(["left","right"]),isFixed:c.bool,onKeyPress:c.func};a.defaultProps={position:"right",isFixed:!1,onKeyPress:b("emptyFunction")};e.exports=a}),null);
__d("QuestionPollType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHOOSE_ONE:"CHOOSE_ONE",CHOOSE_MULTIPLE:"CHOOSE_MULTIPLE",GIF_CHOOSE_ONE:"GIF_CHOOSE_ONE",IMAGE_CHOOSE_ONE:"IMAGE_CHOOSE_ONE",VISUAL_TEXT_CHOOSE_ONE:"VISUAL_TEXT_CHOOSE_ONE",IMAGE_CHOOSE_MULTIPLE:"IMAGE_CHOOSE_MULTIPLE"})}),null);