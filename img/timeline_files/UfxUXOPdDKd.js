if (self.CavalryLogger) { CavalryLogger.start_js(["lPaeU"]); }

__d("FantaTabsVisibleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAllowedRaisedTabs=function(a){this.$1.allowed_raised_tabs=a;return this};a.prototype.setOpenTabs=function(a){this.$1.open_tabs=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVisibleTabs=function(a){this.$1.visible_tabs=a;return this};c={allowed_raised_tabs:!0,open_tabs:!0,vc:!0,visible_tabs:!0};e.exports=a}),null);
__d("XPlacesMapController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/places/map/",{id:{type:"Int"},latitude:{type:"Float",defaultValue:0},longitude:{type:"Float",defaultValue:0},address:{type:"StringVector",defaultValue:[]},name:{type:"String"},zoom:{type:"Int"},message_location_id:{type:"Int"},message_live_location_id:{type:"Int"},polygon_page_id:{type:"Int"},dialog_width:{type:"Int"},map_width:{type:"Int"},map_height:{type:"Int"},hide_footer:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);