var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'yuansen'
});
connection.connect();
module.exports = {
     displayQA:(response)=>{
        connection.query(`SELECT * FROM question`,(err,rows)=>{
            if(err){
                console.log(err)
            }
            //console.log(rows)
            response(rows);
        })
    },
    delQA:(params,response)=>{
        connection.query('DELETE FROM `question` WHERE `question`.`ID` = ?',params,(err,rows)=>{
            if(err){
                console.log(err)
            }
            console.log(rows)
            response(rows);
        })
    },
    addQA:(params,response)=>{
        connection.query(`insert into question (ID,question,A,B,C,D,Answer) values (NULL,'${params.question}','${params.A}','${params.B}','${params.C}','${params.D}','${params.Answer}')`,(err,rows)=>{
            if(err){
                console.log(err)
            }
            //console.log(rows)
            response(rows);
        })
    }
}