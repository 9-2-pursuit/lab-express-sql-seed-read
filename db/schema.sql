DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;
\c songs_dev;

CREATE TABLE songs (
 
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL, 
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN


);

DROP TABLE IF EXISTS artist;
CREATE TABLE artist (

    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    bio TEXT NOT NULL,
    is_following BOOLEAN,
    songs_id


)