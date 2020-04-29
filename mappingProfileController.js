({
callKeyUp : function(component, event, helper) {

var input, filter, ul, li, a, i, txtValue;
input = component.get("v.str");
console.log("sjndsd"+input);
filter = input.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent || a.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}
}



} ,
onGroup: function(component, evt) {


var selected = evt.getSource().get("v.text");


// component.find('chk').set("v.value",selected);
component.set("v.str" ,selected);


},



onGroup2: function(component, evt) {

var selected1 = evt.getSource().get("v.text");

// component.find('chk').set("v.value",selected);
component.set("v.str2" ,selected1);


var keys= component.get("v.str2");

console.log('mottu=======> '+keys);
var ab =component.get("c.Main");
ab.setParams({"Key":keys});
ab.setCallback(this,function(response){
console.log("invoke");
var state = response.getState();
console.log("staert : "+state);
if(state == "SUCCESS")
{
var res = response.getReturnValue();
console.log(res);
component.set("v.wrap2",res);

}
});
$A.enqueueAction(ab);


},
init: function (component, event, helper) {



console.log('distance ' + component.find("distance").get("v.value"));

},

mapping : function(component, evt){

var aa= component.find("distance").get("v.value");
if(aa==='1')
{

var xx= component.get("v.str");

//var selected = evt.getSource().get("v.text");
var aa=component.get("c.apexCall");

aa.setParams({"name":xx});
aa.setCallback(this,function(response){

var state = response.getState();
console.log("invoke fun"+ state);
if(state == "SUCCESS")
{
console.log("invoke success");
var res = response.getReturnValue();
console.log("res is why : "+res);
component.set("v.myvaluee",res);

}
});
$A.enqueueAction(aa);

var yy= component.get("v.str2");

//var selected = evt.getSource().get("v.text");
var bb=component.get("c.apexCall_2");

bb.setParams({"name":yy});
bb.setCallback(this,function(response){

var state = response.getState();
console.log("invoke fun"+ state);
if(state == "SUCCESS")
{
console.log("invoke success");
var res = response.getReturnValue();

component.set("v.myvaluee1",res);

}
});
$A.enqueueAction(bb);
}
if(aa==='2')
{

var keys= component.get("v.str");
if(keys != null)
{

var ab =component.get("c.Main");
ab.setParams({"name":keys});
ab.setCallback(this,function(response){
console.log("invoke");
var state = response.getState();
console.log("staert : "+state);
if(state == "SUCCESS")
{
var res = response.getReturnValue();
console.log('keys1 1'+res);
component.set("v.wrap1",res);

}
});
$A.enqueueAction(ab);
    
    
    
}
    var kk= component.get("v.str");
     console.log('kkkkkk'+kk);
      var zz =component.get("c.getDetailProfile"); 
        console.log('zzzzzz'+zz);
    zz.setParams({"prf":kk});
    zz.setCallback(this,function(response){
        console.log("invoke");
       var state = response.getState();
        console.log("staert : "+state);
       if(state == "SUCCESS")
       {
           var res = response.getReturnValue();
           console.log('myresllllllllllll'+res);
           component.set("v.custom1",res);
            //component.set("v.custom2",res);
           
       }
    });
    $A.enqueueAction(zz);
   
         var cc= component.get("v.str2");
     console.log('kkkkkk'+kk);
      var dd =component.get("c.getDetailProfile"); 
        
    dd.setParams({"prf":cc});
    dd.setCallback(this,function(response){
        console.log("invoke");
       var state = response.getState();
        console.log("staert : "+state);
       if(state == "SUCCESS")
       {
           var res = response.getReturnValue();
        
        
           component.set("v.custom2",res);
           
       }
    });
    $A.enqueueAction(dd);
    }
    
    
  
    
var keys2= component.get("v.str2");
if(keys2 != null)
{
console.log('log 2'+keys2);

console.log('mottu=======> '+keys2);
var ab =component.get("c.Main");
ab.setParams({"name":keys2});
ab.setCallback(this,function(response){
console.log("invoke");
var state = response.getState();
console.log("staert : "+state);
if(state == "SUCCESS")
{
var res = response.getReturnValue();
console.log('keys2 2'+res);
component.set("v.wrap2",res);

}
});
$A.enqueueAction(ab);
}

},






callKeyUp2 : function(component, event, helper) {

var input, filter, ul, li, a, i, txtValue;
input = component.get("v.str2");
console.log("sjndsd"+input);
filter = input.toUpperCase();
ul = document.getElementById("myUL2");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent || a.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}
}



} ,
doinit : function(component, event, helper) {
var cmpTarget = component.find('me');

$A.util.addClass(cmpTarget, 'addme');


$A.util.toggleClass(component.find("apex"), "slds-hide");

},
sectionOne : function(component, event, helper) {
var cmpTarget = component.find('me');
var id = event.currentTarget.dataset.id; //it will return thisDiv
var getTargetedButton = component.find(id);
console.log("ids are this : "+id);
$A.util.removeClass(cmpTarget, 'addme');
if(id == "sectionOne")
{
var acc = component.find("articleOne");
for(var cmp in acc) {
$A.util.toggleClass(acc[cmp], 'slds-show');
$A.util.toggleClass(acc[cmp], 'slds-hide');
}
console.log("invoke");
var action = component.get("c.profileCall");
action.setCallback(this,function(response){

var state = response.getState();
console.log("invoke fun"+ state);
if(state == "SUCCESS")
{
console.log("invoke success");
var res = response.getReturnValue();
console.log("res: "+res);
component.set("v.sourceProfile",res);

}
});
$A.enqueueAction(action);
}
if(id == "sectiontwo")
{
var acc = component.find("articletwo");
for(var cmp in acc) {
$A.util.toggleClass(acc[cmp], 'slds-show');
$A.util.toggleClass(acc[cmp], 'slds-hide');
}
console.log("invoke");
var action = component.get("c.profileCall");
action.setCallback(this,function(response){

var state = response.getState();
console.log("invoke fun"+ state);
if(state == "SUCCESS")
{
console.log("invoke success");
var res = response.getReturnValue();
console.log("res: "+res);
component.set("v.destnProfile",res);

}
});
$A.enqueueAction(action);
}



}


})