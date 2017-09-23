"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),a=i(2);window.GameAudioPlayer=n.a,window.GameAudioSpritePlayer=a.a},function(e,t,i){function n(){var e="/",t=window.location.href.split(e);return t[t.length-1].indexOf(".html")?t[t.length-1]="":t[t.length]="",t.join(e)}function a(e){var t=n();return t=s(t,"/")+"/",e=e?s(e,"/"):"",t+e}function r(e){return e.indexOf("//")<0&&(e=a(e)),e}function o(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function s(e,t){t=o(t);var i=new RegExp("^["+t+"]+|["+t+"]+$","g");return e.replace(i,"")}var l=function(){function e(t,i){_classCallCheck(this,e),i&&"object"===(void 0===i?"undefined":_typeof(i))||(i={}),this.SOUND=t,this.loop=!1,this._isPlaying=!1,this.loopListenerIsSetUp=!1,this.CACHE={player:{},src:""},this.load(),this._onReadyCb=!!i.onLoad&&i.onLoad,this._spriteInterval=null,this._wasPrePlayed=!1,this._isPreplaying=!1,i.preload&&this.setUpEarliestPrePlay(),this._haveCreateJS=this.haveCreateJS}return _createClass(e,[{key:"reset",value:function(){this.CACHE.player=this.getNewAudio()}},{key:"load",value:function(){var e=this,t=r(this.SOUND);if(this.haveCreateJS)return createjs.Sound.registerSound(t,this.SOUND),void createjs.Sound.on("fileload",function(){e.CACHE.player=e.getNewAudio(),e._executeOnLoad()});var i="undefined"!=typeof XMLHttpRequest&&new XMLHttpRequest;i&&void 0!==i.responseType?(i.onreadystatechange=function(){4===i.readyState&&200===i.status&&(e.CACHE.src=window.URL.createObjectURL(i.response),e.CACHE.player=e.getNewAudio(),e._playbackEnd_Watchers(),e._executeOnLoad())},i.open("GET",t),i.responseType="blob",i.send()):(this.CACHE.src=t,this.CACHE.player=this.getNewAudio(),this._playbackEnd_Watchers(),this._executeOnLoad())}},{key:"play",value:function(){var e=this.CACHE.player;e&&(this._isPreplaying&&(e.pause(),this._isPreplaying=!1),this._wasPrePlayed&&(e.muted=!1),e.play(),this._isPlaying=!0)}},{key:"playSprite",value:function(e,t){this.CACHE.player&&(null!==e&&t&&(this._clearSpriteInterval(),this.setUpSpritePlay(e,t)),this.play())}},{key:"playLoop",value:function(){if(this.loop=!0,this.haveCreateJS)return void this.CACHE.player.play({loop:-1});void 0!==this.CACHE.player.loop?this.CACHE.player.loop=!0:this.setupLoop(),this.play()}},{key:"pause",value:function(){var e=this.CACHE.player;e&&(this.haveCreateJS?e.paused=!0:e.pause(),this._clearSpriteInterval(),this._destroyLoop()),this._isPlaying=!1}},{key:"playAsync",value:function(){this.isPlaying()?this.playNewAudio():this.play()}},{key:"_executeOnLoad",value:function(){this._onReadyCb&&(this._onReadyCb(this),this._onReadyCb=!1)}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"getNewAudio",value:function(){if(this.haveCreateJS)return createjs.Sound.createInstance(this.SOUND);var e=new window[this.AUDIO_PLATFORM];return this.CACHE.src&&(e.src=this.CACHE.src),this.loop&&(e.loop=!0),e}},{key:"playNewAudio",value:function(){this.getNewAudio().play()}},{key:"setupLoop",value:function(){this.loopListenerIsSetUp||(this.CACHE.player.onended=function(){this.currentTime=0,this.play()},this.loopListenerIsSetUp=!0)}},{key:"_destroyLoop",value:function(){this.CACHE.player.onended=null,this.loopListenerIsSetUp=!1,this.loop=!1}},{key:"setUpEarliestPrePlay",value:function(){var e=this,t=function t(){e._wasPrePlayed||e._isPreplaying||!e.CACHE.player.play||(e.CACHE.player.muted=!0,e.play(),e._isPreplaying=!0,e._wasPrePlayed=!0,window.removeEventListener("click",t))};window.addEventListener("click",t)}},{key:"setUpSpritePlay",value:function(e,t){var i=this,n=this.CACHE.player,a=e||0,r=t||1e3,o=25,s=Math.ceil(1e3*(r-a)/o),l=0;if(n.play){n.currentTime=a;var u=function(){l++,l>=s&&i.pause(),n.currentTime>=r&&(i.loop?i.playSprite(a,r):i.pause())};this._spriteInterval=setInterval(u,o)}}},{key:"_clearSpriteInterval",value:function(){this._spriteInterval&&clearInterval(this._spriteInterval)}},{key:"_playbackEnd_Watchers",value:function(){var e=this,t=function(){e.loop||e.pause()};this.CACHE.player.addEventListener("ended",t)}},{key:"AUDIO_PLATFORM",get:function(){return"Audio"}},{key:"haveCreateJS",get:function(){return this._haveCreateJS||(this._haveCreateJS=!!window.createjs),this._haveCreateJS}},{key:"volume",set:function(e){this.CACHE.player.volume=e}},{key:"autoplay",set:function(e){this.CACHE.player.volume=e}}]),e}();t.a=l},function(e,t,i){var n=function(){function e(t,i,n){_classCallCheck(this,e),this.GameAudioPlayer=t||!1,this.TIME={start:i||0,end:n||1e3},this._isPlaying=!1}return _createClass(e,[{key:"reset",value:function(){}},{key:"play",value:function(){this.GameAudioPlayer.playSprite(this.TIME.start,this.TIME.end),this._isPlaying=!0}},{key:"playLoop",value:function(){this.GameAudioPlayer.loop=!0,this.play()}},{key:"pause",value:function(){this.GameAudioPlayer.pause(),this._isPlaying=!1}},{key:"isPlaying",value:function(){return this._isPlaying&&this.GameAudioPlayer.isPlaying()}},{key:"loop",set:function(e){this.GameAudioPlayer.loop=!!e}}]),e}();t.a=n}]);