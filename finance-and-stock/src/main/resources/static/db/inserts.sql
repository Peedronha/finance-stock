INSERT INTO `users` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Juliane Maran', 'julianemaran@gmail.com', '992199488', '06069043952', '123456', 'admin');

INSERT INTO `users` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Suzi', 'suzi@email.com', '998765415', '88384366306', '123456', 'user');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (1, 'ROLE_USER');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (1, 'ROLE_ADMIN');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (2, 'ROLE_USER');

INSERT INTO product (description, number, price, quantity_in_stock, packing_volume, registration_date)
VALUES
    ('Product 1', 123, 10.99, 50, '100ml', '2023-06-15'),
    ('Product 2', 456, 19.99, 100, '200ml', '2023-06-15'),
    ('Product 3', 789, 5.99, 25, '50ml', '2023-06-15');
