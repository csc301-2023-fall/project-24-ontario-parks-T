DROP DATABASE IF EXISTS test_database;
CREATE DATABASE test_database;
USE test_database;

DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
    admin_id int(10) NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (admin_id)
);

DROP TABLE IF EXISTS medias;
CREATE TABLE medias (
    media_id int(15) NOT NULL AUTO_INCREMENT,
    
    name varchar(255) NOT NULL,
    type varchar(255) DEFAULT 'audio',
    description varchar(255) DEFAULT NULL,

    image varchar(255) DEFAULT NULL,
    link varchar(255) NOT NULL,  /*path of the file*/ 

    season varchar(10) DEFAULT NULL,
    year int(4) DEFAULT NULL,
    month int(2) DEFAULT NULL,
    day int(2) DEFAULT NULL,
    
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,

    PRIMARY KEY (media_id)
);

DROP TABLE IF EXISTS locations;
CREATE TABLE locations (
    location_id int(15) NOT NULL AUTO_INCREMENT,
    location_name varchar(255) NOT NULL,

    location_address varchar(255) NOT NULL,
    location_city varchar(255) NOT NULL,
    location_province varchar(255) NOT NULL,
    location_postal_code varchar(255) NOT NULL,

    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    
    PRIMARY KEY (location_id)
);

DROP TABLE IF EXISTS locations_have_medias;
CREATE TABLE locations_have_medias (
	pair_id int(15) NOT NULL AUTO_INCREMENT,
    location_id int(15) NOT NULL,
    media_id int(15) NOT NULL,

    PRIMARY KEY (pair_id),
    UNIQUE (location_id,media_id)
);

DROP TRIGGER IF EXISTS delete_locaiton_cascade;

delimiter |
CREATE TRIGGER delete_locaiton_cascade BEFORE DELETE ON locations
FOR EACH ROW 
BEGIN
	DELETE FROM locations_have_medias WHERE location_id = OLD.location_id;
END;
CREATE TRIGGER delete_media_cascade BEFORE DELETE ON medias
FOR EACH ROW 
BEGIN
	DELETE FROM locations_have_medias WHERE media_id = OLD.media_id;
END;
|

delimiter ;
