USE test_database;

DROP TABLE IF EXISTS locations_have_medias;

DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS medias;
DROP TABLE IF EXISTS locations;

CREATE TABLE admins (
    admin_id int(10) NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (admin_id)
);
CREATE TABLE locations (
    location_id int(15) NOT NULL AUTO_INCREMENT,
    location_name varchar(255) NOT NULL,

    location_address varchar(255) DEFAULT NULL,
    location_city varchar(255) DEFAULT NULL,
    location_province varchar(255) DEFAULT NULL,
    location_postal_code varchar(255) DEFAULT NULL,

    longitude FLOAT DEFAULT NULL,
    latitude FLOAT DEFAULT NULL,
    
    PRIMARY KEY (location_id)
);
CREATE TABLE medias (
    media_id int(15) NOT NULL AUTO_INCREMENT,
    location int(15),
    
    name varchar(255) NOT NULL,
    type varchar(255) DEFAULT 'audio',
    description varchar(255) DEFAULT NULL,

    image varchar(255) DEFAULT NULL,
    link varchar(255) NOT NULL,  /*path of the file*/ 

    season varchar(10) DEFAULT NULL,
    year int(4) DEFAULT NULL,
    month int(2) DEFAULT NULL,
    day int(2) DEFAULT NULL,
    
    longitude FLOAT DEFAULT NULL,
    latitude FLOAT DEFAULT NULL,
    
    name_french varchar(255) NOT NULL,
    description_french varchar(255) DEFAULT NULL,

    FOREIGN KEY (location) REFERENCES locations(location_id),

    PRIMARY KEY (media_id)
);
