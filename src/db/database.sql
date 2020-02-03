CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users(name, email) VALUES('angel', 'angel@gmail.com');
INSERT INTO users(name, email) VALUES('jesus', 'jesus@gmail.com');