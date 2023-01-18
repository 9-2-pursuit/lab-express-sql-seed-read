DROP DATABASE IF EXISTS tuner_db;
CREATE DATABASE tuner_db;

 \c tuner_db;

CREATE TABLE tuner(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
 );
