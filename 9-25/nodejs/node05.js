//引入模块
var Hello = require('./node0501');
//
myobject = new Hello();

var myname = "cq"
console.log( myname);
myobject.setName(myname);
myobject.sayName();