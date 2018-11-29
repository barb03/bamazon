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

USE bamazon_db;
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Adjustable Shocks", "Racecar", 57.25, 16);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Stock Wheels", "Racecar", 125.55, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Engine", "Racecar", 3000, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Transaxle", "Racecar", 1525.36, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Helmet", "Driver", 325.88, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("GLoves", "Driver", 36.47, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Driver Suit", "Driver", 325.89, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Race Shoes", "Driver", 85.19, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Mech Rags", "Maintenance", 5.21, 355);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Engine Oil", "Maintenance", 12.84, 200);

SELECT * FROM products;
