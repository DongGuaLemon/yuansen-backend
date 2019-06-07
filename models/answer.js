var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'yuansen'
});

connection.connect();
module.exports = {
    selectanswer:(params,response)=>{
        connection.query(`select * from question where ID = ${params.id} and Answer like '${params.ans}'`,(err,rows)=>{
            if(err){
                console.log(err)
            }
            //console.log(rows)
            response(rows);
        })
    }
}