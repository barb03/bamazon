DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER (11) AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(30),
price INTEGER(10),
stock_quantity INTEGER(30),
PRIMARY KEY (item_id)  
);