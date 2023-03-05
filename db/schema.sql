DROP DATABASE IF EXISTS song_list;
CREATE DATABASE song_list; 

\c song_list;

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TIME,
    is_favorite BOOLEAN
);