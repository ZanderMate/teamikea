DROP DATABASE IF EXISTS pikachoose;

CREATE DATABASE pikachoose;

USE pikachoose;

CREATE TABLE pokemon (
    id INT NOT NULL AUTO_INCREMENT,
    pokemon_name VARCHAR(255),
    physical_attack INT(10) NOT NULL,
    physical_defense INT(10) NOT NULL,
    special_attack INT(10) NOT NULL,
    special_defense INT(10) NOT NULL,
    speed INT(10) NOT NULL,
    hitpoints INT(10) NOT NULL,
    type1_id INT(10) NOT NULL,
    type2_id INT(10),
    PRIMARY KEY(id)
);

CREATE TABLE type1 (
    id INT NOT NULL AUTO_INCREMENT,
    type_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE type2 (
    id INT NOT NULL AUTO_INCREMENT,
    type_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);