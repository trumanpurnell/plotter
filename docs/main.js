!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class s{constructor(e){this.line=e.line,this.sources=e.media,this.handler=e.handler,this.reader=new FileReader,this.reader.onloadend=this.expose.bind(this),this.stream=null,this.recording=null,this.line.addEventListener("pause",function(){this.recording.stop()}.bind(this)),this.line.addEventListener("play",function(){this.recording.start()}.bind(this)),navigator.mediaDevices.getUserMedia(this.sources).then(this.connect.bind(this))}expose(){this.handler(this.reader.result)}save(e){this.reader.readAsArrayBuffer(e.data)}connect(e){this.stream=e,this.line.srcObject=this.stream,this.recording=new MediaRecorder(this.stream),this.recording.ondataavailable=this.save.bind(this)}}class i{constructor(e){this.zone=e.zone,this.handler=e.handler,this.reader=new FileReader,this.reader.onloadend=this.expose.bind(this),this.zone.addEventListener("drop",this.read.bind(this),!1),this.zone.addEventListener("dragover",this.noop,!1)}expose(){this.handler(this.reader.result)}read(e){e.stopPropagation(),e.preventDefault(),Array.from(e.dataTransfer.files).forEach(this.reader.readAsArrayBuffer.bind(this.reader))}noop(e){e.stopPropagation(),e.preventDefault()}}class r{constructor(e){this.scene=e.scene,this.isPressed=!1,this.scene.canvas.addEventListener("mousedown",this.clickDown.bind(this)),this.scene.canvas.addEventListener("mouseup",this.clickUp.bind(this)),this.scene.canvas.addEventListener("mousemove",this.move.bind(this))}move(e){}clickUp(e){this.isPressed=!1,console.log(e)}clickDown(e){console.log(e)}}class o{constructor(e){this.scene=e.scene,this.pressedKeys=new Set,window.addEventListener("keyup",this.keyu.bind(this)),window.addEventListener("keydown",this.keyd.bind(this))}keyd(e){this.pressedKeys.add(e.key)}keyu(e){this.pressedKeys=new Set}}new class{constructor(e){this.scene=e.scene,this.mouse=new r({scene:this.scene}),this.keyboard=new o({scene:this.scene}),this.webcam=new s({line:document.getElementById("video"),media:{video:!0,audio:!0},handler:this.onWebCam.bind(this)}),this.fileDrop=new i({zone:this.scene.canvas,handler:this.onFileDrop.bind(this)})}onFileDrop(e){console.log(Array.from(new Uint8Array(e)).map(function(e){return String.fromCharCode(e)}).join(""))}onWebCam(e){console.log(e)}}({scene:new class{constructor(e){this.canvas=e.canvas||document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight}}({canvas:document.getElementById("canvas")})})}]);