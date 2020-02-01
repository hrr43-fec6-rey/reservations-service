DROP DATABASE IF EXISTS reservation;

CREATE DATABASE reservation;

USE reservation;

CREATE TABLE reservation (
  id int NOT NULL AUTO_INCREMENT,
  restaurantId int NOT NULL,
  dateTime date,
  PRIMARY KEY (ID)
);
