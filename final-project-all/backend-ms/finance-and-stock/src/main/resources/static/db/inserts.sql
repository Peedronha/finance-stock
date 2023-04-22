INSERT INTO `customer` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Juliane', 'julianemaran@gmail.com', '998129488', '06069043952', '123456', 'admin');

INSERT INTO `customer` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Suzi', 'suzi@email.com', '998765415', '88384366306', '123456', 'user');

INSERT INTO `authorities` (`customer_id`, `username`)
VALUES (1, 'ROLE_USER');

INSERT INTO `authorities` (`customer_id`, `username`)
VALUES (1, 'ROLE_ADMIN');

INSERT INTO `authorities` (`customer_id`, `username`)
VALUES (2, 'ROLE_USER');