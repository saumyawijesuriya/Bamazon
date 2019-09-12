DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL,

product_name VARCHAR(30),

department_name VARCHAR(30),

price decimal(6,2),

stock_quantity INT(100),

PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11,"shirts", "clothing", 25.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (22,"TV", "electronics", 699.99, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (33,"rugs", "home & kitchen", 55.20, 45);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (44,"shoes", "clothing", 65.75, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (55,"video games", "electronics", 15.00, 65);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (66,"dress", "clothing", 65.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (77,"shampoo", "personal care", 8.00, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (88,"sofa", "home & kitchen", 399.99, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (99,"toothbrush", "personal care", 4.00, 90);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12,"laptop", "electronics", 899.00, 10);
