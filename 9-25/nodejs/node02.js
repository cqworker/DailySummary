
//操作数据库
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'comcq',
  port :4040
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
//查
var  sql = 'SELECT * FROM websites';
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
	   console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
})
connection.end();
//增
//var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
//var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
//connection.query(addSql,addSqlParams,function (err, result) {
//        if(err){
//         console.log('[INSERT ERROR] - ',err.message);
//         return;
//        } 
//		     console.log('--------------------------INSERT----------------------------');
//       //console.log('INSERT ID:',result.insertId);        
//       console.log('INSERT ID:',result);        
//       console.log('-----------------------------------------------------------------\n\n');
//})
//connection.end();