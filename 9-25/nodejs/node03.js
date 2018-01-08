//event loop 事件轮循机制

//非阻塞I/O是程序执行过程中，I/O操作不会阻塞程序的执行，也就是在I/O操作的同时，继续执行其他代码（这得益于Node的事件循环机制）。在I/O设备效率还远远低于CPU效率的时代，这种I/O模型（非阻塞I/O）为程序带来的性能上的提高是非常可观的。
//好，下面感受一下怎么用Node.js实现非阻塞I/O，继续读文件，看码：
var fs = require("fs");
fs.readFile("./testfile.txt", "utf8", function(error, file) {  
     if (error) throw error;  
     console.log("我读完文件了！");
});
console.log("我不会被阻塞！");
//复制上面代码保存为test.js，并在同一目录下新建一个名为testfile的文件，用node命令运行test.js,你将看到以下输出:
//我不会被阻塞！
//我读完文件了！
//这显然不符合传统的程序执行顺序，注意，这就是Node.js的非阻塞I/O了。
//首先解释下面程序，如果你熟悉JavaScript，请忽略。
//var fs = require("fs");
//以上代码：引入Node.js内置的File System文件系统模块fs。require()相当与Java的import，C++的include。
//fs.readFile("./testfile", "utf8", function(error, file) { 
//    if (error) throw error; 
//    console.log("我读完文件了！");
//});
//以上代码：进行I/O操作，给readFile绑定一个回调函数function(error,file){},并在读取testfile完成后执行回调函数。期间，后面的代码继续执行，不受I/O阻塞。
//这就是为什么先看到“我不会被阻塞！”而后看到“我读完文件了！”的缘故。
//Node.js事件轮询机制(event loop)