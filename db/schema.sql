DROP DATABASE IF EXISTS pikachoose;

CREATE DATABASE pikachoose;

USE pikachoose;

CREATE TABLE type (
id INT NOT NULL AUTO_INCREMENT,
type_name VARCHAR(255) NOT NULL,
primary key (id)
);

CREATE TABLE type_index (
id INT NOT NULL AUTO_INCREMENT,
pokemon_id INT(10) NOT NULL,
type_id INT(10) NOT NULL,
primary key (id)
);

CREATE TABLE pokemon (
id INT NOT NULL AUTO_INCREMENT,
pokemon_name VARCHAR(30) NOT NULL,
physical_attack VARCHAR(30) NOT NULL,
physical_defense VARCHAR(30) NOT NULL,
special_attack VARCHAR(30) NOT NULL,
special_defense VARCHAR(30) NOT NULL,
speed VARCHAR(30) NOT NULL,
hitpoints VARCHAR(30) NOT NULL,
type_id INT(10) NOT NULL,
primary key (id)
);

CREATE TABLE teambuilder (
id INT NOT NULL AUTO_INCREMENT,
team_name VARCHAR(255) NOT NULL,
team_description VARCHAR(255),
primary key (id) 
);

CREATE TABLE team_index (
id INT NOT NULL AUTO_INCREMENT,
pokemon_id INT(10) NOT NULL,
team_id INT(10) NOT NULL,
primary key (id)
);