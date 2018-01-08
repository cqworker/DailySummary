var exec = require('child_process').exec;
exec('test1.bat',function(error,stdout,stderr){
    
    if(error) {
        console.info('stderr : '+stderr);
    }else{
	    console.log("success"+stdout);
	}
});