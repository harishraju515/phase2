function addData(){
  // profile data
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var email=document.querySelector("#email").value;
var role=document.querySelector("#role").value;
var mobile=document.querySelector("#mobile").value;

// graduation details
var college1=document.querySelector("#college1").value;
var degree1=document.querySelector("#degree1").value;
var branch1=document.querySelector("#branch1").value;
var percentage1=document.querySelector("#percentage1").value;

// inter details
var college2=document.querySelector("#college2").value;
var degree2=document.querySelector("#degree2").value;
var percentage2=document.querySelector("#percentage2").value;

// ssc details
var college3=document.querySelector("#college3").value;
var degree3=document.querySelector("#degree3").value;
var percentage3=document.querySelector("#percentage3").value;

// skills
var skills=document.querySelector("#skills").value;

// indexedDB creation
var idb= window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

var open=idb.open("StoreData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(event){
var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(event){
  console.log("object stored is not created",+error);
}
open.onsuccess=function(event){
var  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  storeDB.put({
    career:career,
    name:name,
    email:email,
    role:role,
    mobile:mobile,
    education:[
      {
        college:college1,
        degree:degree1,
        branch:branch1,
        percentage:percentage1
      },
      {
        college:college2,
        degree:degree2,
        percentage:percentage2
      },
      {
        college:college3,
        degree:degree3,
        percentage:percentage3
      }
    ],
    skills:skills
  });
window.open("index.html");
}
}
