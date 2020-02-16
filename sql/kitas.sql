DROP TABLE IF EXISTS kitas;

CREATE TABLE kitas(
    id SERIAL PRIMARY KEY,
    kitaname VARCHAR NOT NULL CHECK (kitaname != ''),
    email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
    password VARCHAR NOT NULL CHECK (password != ''),
    imageurl VARCHAR(300),
    description TEXT
);

ALTER TABLE users ADD imageurl VARCHAR(300);
ALTER TABLE users ADD bio TEXT;
