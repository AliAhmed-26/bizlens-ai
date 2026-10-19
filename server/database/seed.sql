INSERT INTO businesses(name)
VALUES ('Rashid Menswear');

INSERT INTO categories(business_id, name)
VALUES
(1, 'Men Clothing'),
(1, 'Shirts'),
(1, 'Pants'),
(1, 'Accessories'),
(1, 'Traditional Wear'),
(1, 'Footwear');

INSERT INTO products (business_id, category_id, name, price, stock)
VALUES
(1, 1, 'Men Kurta', 2500, 20),
(1, 2, 'Casual Shirt', 1800, 35),
(1, 3, 'Formal Pants', 2200, 15),
(1, 4, 'Leather Belt', 1200, 25),
(1, 5, 'Embroidered Kurta', 3500, 12),
(1, 6, 'Leather Peshawari Chappal', 2800, 18),
(1, 2, 'Oxford Shirt', 2400, 30),
(1, 3, 'Slim Fit Trousers', 2600, 22);

INSERT INTO customers (business_id, name, email, country)
VALUES
(1, 'Ali Khan', 'ali@example.com', 'Pakistan'),
(1, 'Ahmed Raza', 'ahmed@example.com', 'United Arab Emirates'),
(1, 'Usman Malik', 'usman@example.com', 'Saudi Arabia'),
(1, 'Hamza Sheikh', 'hamza@example.com', 'United Kingdom'),
(1, 'Bilal Ahmed', 'bilal@example.com', 'Pakistan'),
(1, 'Omar Hassan', 'omar@example.com', 'United Arab Emirates'),
(1, 'Faisal Tariq', 'faisal@example.com', 'Saudi Arabia'),
(1, 'Zain Abbas', 'zain@example.com', 'Egypt'),
(1, 'Hassan Ali', 'hassan@example.com', 'United Kingdom'),
(1, 'Danish Iqbal', 'danish@example.com', 'Pakistan'),
(1, 'Yusuf Khan', 'yusuf@example.com', 'Egypt'),
(1, 'Imran Shah', 'imran@example.com', 'United Arab Emirates');

INSERT INTO orders (business_id, customer_id, total_amount, status, order_date)
VALUES
(1, 1, 6800, 'Delivered', '2026-09-20'),
(1, 2, 4000, 'Processing', '2026-09-22'),
(1, 3, 3700, 'Shipped', '2026-09-24'),
(1, 1, 5200, 'Cancelled', '2026-09-25'),
(1, 4, 5900, 'Delivered', '2026-09-27'),
(1, 5, 7500, 'Delivered', '2026-09-29'),
(1, 6, 6300, 'Delivered', '2026-10-01'),
(1, 7, 7200, 'Shipped', '2026-10-03'),
(1, 8, 4600, 'Processing', '2026-10-05'),
(1, 9, 8300, 'Delivered', '2026-10-07'),
(1, 10, 5400, 'Delivered', '2026-10-09'),
(1, 11, 6800, 'Delivered', '2026-10-11'),
(1, 12, 9100, 'Delivered', '2026-10-13'),
(1, 2, 4800, 'Delivered', '2026-10-15'),
(1, 3, 5600, 'Cancelled', '2026-10-17'),
(1, 4, 3900, 'Delivered', '2026-10-18'),
(1, 6, 7100, 'Shipped', '2026-10-19'),
(1, 5, 6200, 'Processing', '2026-10-20');

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
(4, 2, 1800, 1),

(5, 5, 3500, 1),
(5, 2, 2400, 1),

(6, 1, 2500, 1),
(6, 5, 3500, 1),
(6, 4, 1500, 1),

(7, 6, 2800, 1),
(7, 7, 2400, 1),
(7, 4, 1100, 1),

(8, 5, 3500, 1),
(8, 3, 2200, 1),
(8, 4, 1500, 1),

(9, 2, 1800, 1),
(9, 3, 2200, 1),
(9, 4, 600, 1),

(10, 6, 2800, 1),
(10, 7, 2400, 1),
(10, 8, 3100, 1),

(11, 1, 2500, 1),
(11, 2, 1800, 1),
(11, 4, 1100, 1),

(12, 5, 3500, 1),
(12, 6, 2800, 1),
(12, 4, 500, 1),

(13, 5, 3500, 1),
(13, 6, 2800, 1),
(13, 7, 2800, 1),

(14, 7, 2400, 1),
(14, 8, 2400, 1),

(15, 3, 2200, 1),
(15, 4, 1200, 1),
(15, 2, 2200, 1),

(16, 1, 2500, 1),
(16, 4, 1400, 1),

(17, 5, 3500, 1),
(17, 7, 2400, 1),
(17, 4, 1200, 1),

(18, 2, 1800, 1),
(18, 3, 2200, 1),
(18, 8, 2200, 1);