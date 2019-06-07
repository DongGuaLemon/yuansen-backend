var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'yuansen'
});

connection.connect();

module.exports = {
    addphone:(params,res)=>{
        return new Promise(function(resolve,reject){
          connection.query(`INSERT INTO phonenumber(Phonenumber)values('${params}')`,(err,rows)=>{
            if(err){
                console.log(err)
                reject(new Error(err))
            }
            console.log(rows)
            resolve(rows)
        })  
        })
    },
    selectphone:(params)=>{
        return new Promise(function(resolve,reject){
            connection.query(`select * from phonenumber where Phonenumber like ?`,params,(err,rows)=>{
            if(err){
                console.log(err)
                reject(new Error(err))
            }
            if(rows[0]==null){
                console.log(rows[0])
                resolve(null)
            }
            else {resolve(rows)}
        }) 
        })
    },
    updatephone:(params)=>{
        return new Promise(function(resolve,reject){
            connection.query(`update phonenumber set Phonenumber='${params}' where Phonenumber='${params}'`,(err,rows)=>{
                if(err){
                    console.log(err)
                    reject(new Error(err))
                }
                console.log(rows)
                resolve(rows)
            })
        })
    }
}