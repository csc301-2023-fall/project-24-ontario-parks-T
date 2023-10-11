DROP DATABASE IF EXISTS `test_database`;
CREATE DATABASE `test_database`;
USE `test_database`;

DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
    `admin_id` int(10) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (`admin_id`)
);

INSERT INTO `admins` VALUES (1,'yilz','123789');
INSERT INTO `admins` VALUES (2,'hao','123789');

DROP TABLE IF EXISTS `medias`;
CREATE TABLE `media` (
    `media_id` int(15) NOT NULL AUTO_INCREMENT,
    `media_name` varchar(255) NOT NULL,
    `media_type` varchar(255) DEFAULT 'audio',
    `media_description` varchar(255) DEFAULT NULL,
    `media_image` varchar(255) DEFAULT NULL,
    `media_link` varchar(255) NOT NULL,
    PRIMARY KEY (`media_id`)
);

DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
    `location_id` int(15) NOT NULL AUTO_INCREMENT,
    `location_name` varchar(255) NOT NULL,
    `location_address` varchar(255) NOT NULL,
    `location_city` varchar(255) NOT NULL,
    `location_province` varchar(255) NOT NULL,
    `location_postal_code` varchar(255) NOT NULL,
    PRIMARY KEY (`location_id`)
)

DROP TABLE IF EXISTS `locations_have_medias`;
CREATE TABLE `locations_have_medias` (
    `location_id` int(15) NOT NULL,
    `media_id` int(15) NOT NULL,
    PRIMARY KEY (`location_id`,`media_id`),
    CONSTRAINT `fk_locations` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_medias` FOREIGN KEY (`media_id`) REFERENCES `medias` (`media_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `locations` VALUES (1,'Vancouver Public Library','350 W Georgia St','Vancouver','BC','V6B 6B1');
INSERT INTO `locations` VALUES (2,'Vancouver Art Gallery','750 Hornby St','Vancouver','BC','V6Z 2H7');
INSERT INTO `locations` VALUES (3,'Science World','1455 Quebec St','Vancouver','BC','V6A 3Z7');
INSERT INTO `locations` VALUES (4,'Ontario Science Centre','770 Don Mills Rd','Toronto','ON','M3C 1T3');
INSERT INTO `locations` VALUES (5,'Royal Ontario Museum','100 Queens Park','Toronto','ON','M5S 2C6');

INSERT INTO `medias` VALUES (1,'Vancouver Public Library','audio','Vancouver Public Library','vancouver_public_library.jpg','https://www.youtube.com/watch?v=1Q3wJ0oWl7c');
INSERT INTO `medias` VALUES (2,'Vancouver Art Gallery','audio','Vancouver Art Gallery','vancouver_art_gallery.jpg','https://www.youtube.com/watch?v=1Q3wJ0oWl7c');
INSERT INTO `medias` VALUES (3,'Science World','audio','Science World','science_world.jpg','https://www.youtube.com/watch?v=1Q3wJ0oWl7c');
INSERT INTO `medias` VALUES (4,'Ontario Science Centre','audio','Ontario Science Centre','ontario_science_centre.jpg','https://www.youtube.com/watch?v=1Q3wJ0oWl7c');
INSERT INTO `medias` VALUES (5,'Royal Ontario Museum','audio','Royal Ontario Museum','royal_ontario_museum.jpg','https://www.youtube.com/watch?v=1Q3wJ0oWl7c');
