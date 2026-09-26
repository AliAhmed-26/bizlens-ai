DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS businesses;


CREATE TABLE businesses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	business_id INTEGER NOT NULL,
	name VARCHAR(100) NOT NULL,
	FOREIGN KEY(business_id) REFERENCES businesses(id)
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	business_id INTEGER NOT NULL,
	category_id INTEGER NOT NULL,
	name VARCHAR(100) NOT NULL,
	price FLOAT NOT NULL,
	stock INTEGER NOT NULL,
	FOREIGN KEY(business_id) REFERENCES businesses(id),
	FOREIGN KEY(category_id) REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	business_id INTEGER NOT NULL,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	FOREIGN KEY(business_id) REFERENCES businesses(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	business_id INTEGER NOT NULL,
	customer_id INTEGER NOT NULL,
	total_amount FLOAT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(business_id) REFERENCES businesses(id),
	FOREIGN KEY(customer_id) REFERENCES customers(id)
);


CREATE TABLE order_items (
	id SERIAL PRIMARY KEY,
	order_id INTEGER NOT NULL,
	product_id INTEGER NOT NULL,
	unit_price FLOAT NOT NULL,
    quantity INTEGER NOT NULL,
	FOREIGN KEY(order_id) REFERENCES orders(id),
	FOREIGN KEY(product_id) REFERENCES products(id)
);