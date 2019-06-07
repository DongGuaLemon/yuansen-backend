var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'yuansen'
});

connection.connect();
module.exports = {
    selectquestion:(params,response)=>{
        connection.query(`select * from question where ID =?`,params,(err,rows)=>{
            if(err){
                console.log(err)
            }
            console.log(rows,2)
            response(rows);
        })
    }
}