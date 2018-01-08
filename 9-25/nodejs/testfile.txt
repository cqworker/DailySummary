//

function say(word){
	console.log(word);
}

function execute01(someFunction,value){
	someFunction(value);
}



execute01(say,"Hello");

//
function execute02(someFunction){
	someFunction();
}

execute02(function(word){console.log("Word")})