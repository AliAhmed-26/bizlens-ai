INSERT INTO businesses(name) VALUES ('Rashid Menswearrrr');
INSERT INTO categories(business_id, name)
VALUES
(1, 'Men Clothing'),
(1, 'Shirts'),
(1, 'Pants'),
(1, 'Accessories');

INSERT INTO products (business_id, category_id, name, price, stock)
VALUES
(1, 1, 'Men Kurta', 2500, 20),
(1, 2, 'Casual Shirt', 1800, 35),
(1, 3, 'Formal Pants', 2200, 15),
(1, 4, 'Leather Belt', 1200, 25);

INSERT INTO customers (business_id, name, email)
VALUES
(1, 'Ali Khan', 'ali@example.com'),
(1, 'Ahmed Raza', 'ahmed@example.com'),
(1, 'Usman Malik', 'usman@example.com');

INSERT INTO orders (business_id, customer_id, total_amount,status, order_date)
VALUES
(1, 1, 6800, 'Delivered', '2026-09-20'),
(1, 2, 4000,'Processing', '2026-09-22'),
(1, 3, 3700,'Shipped', '2026-09-24'),
(1, 1, 5200,'Cancelled', '2026-09-25');

INSERT INTO order_items (order_id, product_id, unit_price, quantity)
VALUES
(1, 1, 2500, 2),
(1, 2, 1800, 1),

(2, 2, 1800, 1),
(2, 3, 2200, 1),

(3, 1, 2500, 1),
(3, 4, 1200, 1),

(4, 3, 2200, 1),
(4, 4, 1200, 1),
(4, 2, 1800, 1);
