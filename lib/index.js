/*! 
* @license string-gender - v0.0.2
* (c) 2014 Julien VALERY https://github.com/darul75/string-gender
* License: MIT 
*/
/*!
 * string-gender
 * https://github.com/darul75/string-gender
 *
 * Copyright 2014-2015 Julien Valery
 * Released under the MIT license
 */
function StringGender(){this.ready=!1,this.settings={unknown:null},this.dicosIdx=new Indexer,this.dicos={}}var lineReader=require("line-reader"),constants=require("./constants"),Indexer=require("./indexer");StringGender.prototype.getGender=function(){return sg.ready?void 0:[]},StringGender.prototype.getGenderByIndex=function(){StringGender.prototype.getGender.apply(sg,arguments)};var f=function(a,b){var c=!1;if(sg.ready&&a.string){c=a.email;var d=a.string.toLowerCase();if(c){var e,f=a.email_pattern||/^([^\._@]+)[_.]([^@]*)/,g=a.string.match(f);g&&3===g.length&&(d=g[1],e=g[2])}var h={},i=constants.COUNTRIES.indexOf(a.country)||constants.ISO_3166_MAPPING.indexOf(a.country),j=this.dicosIdx.query(d);!c||j&&0!==j.length||(j=this.dicosIdx.query(e)),i>=0&&j.forEach(function(a){{var b=a.doc.countries;b.charAt(i+1)}h=a.doc},h),b(j)}};StringGender.prototype.nameExists=function(a){return this.dicosIdx.query(a).length>0};var _findMax=function(a){a.forEach(function(a){{var b=a.doc;b.countries}})},_readDico=function(a){lineReader.eachLine(__dirname+constants.DIC_FILE,function(){_digestLine.apply(sg,arguments)}).then(function(){sg.ready=!0,a(null)})},_digestLine=function(a){if(!a.startsWith("#")){var b=a.split(" ").filter("".isNotEmpty),c=b[1].toLowerCase().replace("+"," "),d=b[0]+" "+c,e={name:c.match("([^#]+)")[0],id:c,gender:b[0],countries:a.slice(30,a.length)};this.dicosIdx.addDocument(d,e);var f=this.dicos[c];f?_isArray(f)?f.push(e):this.dicos[c]=[f,e]:this.dicos[c]=e}},_onlyOnce=function(a){var b=!1;return function(){if(b)throw new Error("Function was already called.");b=!0,a.apply(root,arguments)}},_isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)};"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(a){return 0==this.indexOf(a)}),"function"!=typeof String.prototype.isNotEmpty&&(String.prototype.isNotEmpty=function(a){return""!=a.trim()});var sg=new StringGender;_readDico(function(){StringGender.prototype.getGender=f}),module.exports=sg;