var mysql = require("mysql");
require('dotenv').config();
var chalk = require("chalk");
const inquirer = require("inquirer");
var Table = require('cli-table');

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
  makeTable();
});

var makeTable = function(){
  connection.query("SELECT * FROM products", function(err, res){
    var table = new Table({
      head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
    }); 
    console.log('\n'); 
    console.log(chalk.red(" Welcome to Kooky's Race Shop! Where all the racers come to shop!!"));
    console.log(chalk.red("             HERE ARE ALL THE ITEMS AVAILABLE FOR SALE: "));
    console.log("===================================================================");
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
    }  
    console.log(table.toString());
    promptCustomer(res);
  })
}

var promptCustomer = function(res){
  inquirer.prompt([
  {
    type: "input",
    name: 'choice',
    message: chalk.green("What item would you like to purchase (enter by product name)? Q to quit")
  }
  ]).then(function(answer){    
    var correct = false;
    if(answer.choice.toUpperCase() == "Q"){
      process.exit();
    }
    for(var i = 0; i < res.length; i++){
      if(res[i].product_name==answer.choice){
        correct = true;
        var product = answer.choice;
        var id = i;
        inquirer.prompt(
        {
          type: "input",
          name: 'quant',
          message: chalk.green("How many would you like to purchase?"),
          validate: function(value){
            if(isNaN(value)==false){
              return true;
            }
            else{
              return false;
            }
          }
        }).then (function(answer){           
          if((res[id].stock_quantity-answer.quant) > 0){
            connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity -
              answer.quant) + "' WHERE product_name = '" + product + "'", function(err, res2){
              console.log(chalk.green("Product Bought!"));
              makeTable();
            })                
          }
          else {
            console.log(chalk.red("There are not enough to purchase!  Please redo your purchase."));
            promptCustomer(res);
          }
        })
      }
    }
    if(i==res.length && correct == false){
      console.log(chalk.red("That is not a valid selection!"));
      promptCustomer(res);
    }
  })
}






