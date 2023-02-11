\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES
('Fame', 'David Bowie', 'Young Americans', '4:12', true),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true),
('(Nothing But) Flowers', 'Talking Heads', 'Remain in Light', '6:28', false),
('Books about the UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true),
('Mr. strartup', 'wolf Parade', 'Thin Mind', '3:31', true),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false);



INSERT INTO artist (songs_id, artist, bio, is_following)
VALUES
('1', 'David Bowie', 'David Robert Jones, known professionally as David Bowie, was an English singer-songwriter and actor.', true),
('2', 'Talking Heads', 'Talking Heads were an American rock band that formed in 1975 in New York City.', true);


