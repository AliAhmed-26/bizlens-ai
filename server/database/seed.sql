
INSERT INTO businesses(name)
VALUES
('Rashid Menswearrrr');

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