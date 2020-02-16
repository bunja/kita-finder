DROP TABLE IF EXISTS parents;

CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    first VARCHAR NOT NULL CHECK (first != ''),
    last VARCHAR NOT NULL CHECK (last != ''),
    email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
    password VARCHAR NOT NULL CHECK (password != '')

);

ALTER TABLE users ADD imageurl VARCHAR(300);
ALTER TABLE users ADD bio TEXT;
