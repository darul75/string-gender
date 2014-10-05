/*! 
* @license string-gender - v0.0.1
* (c) 2014 Julien VALERY https://github.com/darul75/string-gender
* License: MIT 
*/
function Indexer(){this.tfidf=new TfIdf,this.index={},this.docs={}}var TfIdf=require("./tfidf");module.exports=Indexer,Indexer.prototype.addDocument=function(a,b){this.docs[a]=b;for(var c in b)this.tfidf.addDocument(b[c],a+":"+c)};var splitRegex=/[\-_ ]+/g;Indexer.prototype.query=function(a){var b=this.tfidf,c={};b.tfidfs(a,function(a,b,d){d=d.split(":");{var e=d[0];d[1]}c[e]||(c[e]=0),c[e]+=b});var d=[];for(var e in c)c[e]>0&&d.push({key:e,measure:c[e],doc:this.docs[e]});return d.sort(function(a,b){return b.measure-a.measure})};