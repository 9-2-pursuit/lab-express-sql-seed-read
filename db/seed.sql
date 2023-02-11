\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES
('Grilled Cheese', 'Cherry Glazer', 'Haxel Princess', '2:09', false),
('The Worst In Me', 'Kaytranada', 'BUBBA', '3:46', true),
('CLOUDS', 'Park Hye Jin, Nosaj Thing', 'single', '3:16', true);

INSERT INTO artist (songs_id, artist, bio, is_following)
VALUES
('1', 'David Bowie', 'David Robert Jones, known professionally as David Bowie, was an English singer-songwriter and actor.', true),
('2', 'Kaytranada', 'Louis Kevin Celestin (born August 25, 1992), known professionally as Kaytranada (stylized as KAYTRANADA, shortened as KAYTRA), is a Haitian-Canadian record producer, DJ, and songwriter.', true);

--SELECT * FROM hotels RIGHT JOIN rooms ON hotels.id = rooms.hotel_id;
--SELECT * FROM song_to_artist RIGHT JOIN songs ON song_to_artist.id = songs.id;
--songs_dev=# SELECT * FROM song_to_artist RIGHT JOIN songs ON song_to_artist.id = songs.id;
--SELECT COUNT(*) FROM songs;