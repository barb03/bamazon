var mysql = require("mysql");
require('dotenv').config();


var connection = mysql.createConnection({
  host: process.env.DB_HOST,  
  port: 3306, 
  user: process.env.DB_USER,  
  password: process.env.DB_PASS,
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    console.log(res);
    for(var i = 0; i < res.length; i++){
      console.log(res[i].flavor);
    }
    connection.end();
  })

});

