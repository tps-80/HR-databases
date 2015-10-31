CREATE DATABASE chat1;

USE chat1;


CREATE TABLE users (
  user_id integer auto_increment primary key,
  name varchar(50)
);

CREATE TABLE rooms (
  rooms_id integer auto_increment primary key,
  room varchar(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer auto_increment primary key,
  msgText varchar(500),
  user integer,
  room integer,
  foreign key (user) references users (user_id),
  foreign key (room) references rooms (rooms_id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

