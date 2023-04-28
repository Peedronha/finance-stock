CREATE DATABASE `financestockdb`;

USE `financestockdb`;
DROP TABLE `authorities`;
DROP TABLE `users`;

USE `financestockdb`;
CREATE TABLE `users`
(
    `user_id`           int          NOT NULL AUTO_INCREMENT,
    `name`              varchar(250) NOT NULL,
    `email`             varchar(100) NOT NULL,
    `mobile_number`     varchar(20)  NOT NULL,
    `document_number`   varchar(20)  NOT NULL,
    `password`          varchar(100)  NOT NULL,
    `role`              varchar(10)  NOT NULL,
    `registration_date` date DEFAULT NULL,
    PRIMARY KEY (`user_id`)
);

USE `financestockdb`;
CREATE TABLE `authorities`
(
    `id`      int         NOT NULL AUTO_INCREMENT,
    `user_id` int         NOT NULL,
    `name`    varchar(50) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);

CREATE TABLE `employee`
(
    `employee_id`          int         NOT NULL AUTO_INCREMENT,
    `customer_id`          int         NOT NULL,
    `document_number_ctps` varchar(20) NOT NULL,
    `address_id`           int         NOT NULL,
    `registration_date`    date DEFAULT NULL,
    PRIMARY KEY (`employee_id`),
    KEY `address_id` (`address_id`),
    CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
);

CREATE TABLE `address`
(
    `address_id`    int          NOT NULL AUTO_INCREMENT,
    `postal_code`   varchar(8)   NOT NULL,
    `street`        varchar(250) NOT NULL,
    `complement`    varchar(150) NOT NULL,
    `neighbordhood` varchar(150) NOT NULL,
    `country`       varchar(150) NOT NULL,
    `state`         varchar(2)   NOT NULL,
    PRIMARY KEY (`address_id`)
);

CREATE TABLE `sale`
(
    `sale_id`           int   NOT NULL AUTO_INCREMENT,
    `sale_code`         int   NOT NULL,
    `quantity`          int   NOT NULL,
    `invoice_number`    int   NOT NULL,
    `total`             float NOT NULL,
    `registration_date` date DEFAULT NULL,
    PRIMARY KEY (`sale_id`)
);

CREATE TABLE `product`
(
    `product_id`        int          NOT NULL AUTO_INCREMENT,
    `description`       varchar(250) NOT NULL,
    `number`            int          NOT NULL,
    `price`             float        NOT NULL,
    `quantity_in_stock` int          NOT NULL,
    `packing_volume`    varchar(50)  NOT NULL,
    `registration_date` date DEFAULT NULL,
    PRIMARY KEY (`product_id`)
);

CREATE TABLE `product_sale`
(
    `product_sale_id` int NOT NULL AUTO_INCREMENT,
    `sale_id`         int NOT NULL,
    `product_id`      int NOT NULL,
    PRIMARY KEY (`product_sale_id`),
    KEY `sale_id` (`sale_id`),
    CONSTRAINT `product_sale_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sale` (`sale_id`),
    KEY `product_id` (`product_id`),
    CONSTRAINT `product_sale_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
);

CREATE TABLE `stock`
(
    `stock_id`          int   NOT NULL AUTO_INCREMENT,
    `total_stock_area`  float NOT NULL,
    `stock_capacity`    int   NOT NULL,
    `registration_date` date DEFAULT NULL,
    PRIMARY KEY (`stock_id`)
);

CREATE TABLE `finance`
(
    `finance_id`         int   NOT NULL AUTO_INCREMENT,
    `total_product_sold` float NOT NULL,
    `sales_amout`        float NOT NULL,
    `registration_date`  date DEFAULT NULL,
    PRIMARY KEY (`finance_id`)
);
