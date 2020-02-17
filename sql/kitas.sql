DROP TABLE IF EXISTS kitas;

CREATE TABLE kitas(
    id SERIAL PRIMARY KEY,
    kitaname VARCHAR NOT NULL CHECK (kitaname != ''),
    num_of_places INT NOT NULL CHECK (num_of_places !=null),
    time_of_work TIME,
    age VARCHAR NOT NULL CHECK (age != ''),
    password VARCHAR NOT NULL CHECK (password != ''),
    imageurl VARCHAR(300),
    street_hous VARCHAR NOT NULL CHECK (street_hous != ''),
    zip_code INT NOT NULL CHECK (zip_code != null),
    city VARCHAR NOT NULL CHECK (city != ''),
    email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
    web_site VARCHAR NOT NULL UNIQUE CHECK (web_site != ''),
    phone_number VARCHAR NOT NULL CHECK (phone_number != ''),
    fax_number VARCHAR,
    description TEXT
);

ALTER TABLE users ADD imageurl VARCHAR(300);
ALTER TABLE users ADD bio TEXT;




CREATE TABLE kitas(
    id SERIAL PRIMARY KEY,
    kitaname VARCHAR NOT NULL CHECK (kitaname != ''),
    num_of_places INT ,
    time_of_work TIME,
    age VARCHAR,
    password VARCHAR NOT NULL CHECK (password != ''),
    imageurl VARCHAR(300),
    street_hous VARCHAR(300),
    zip_code INT,
    city VARCHAR,
    email VARCHAR NOT NULL CHECK (email != ''),
    web_site VARCHAR,
    phone_number VARCHAR,
    fax_number VARCHAR,
    description TEXT
);
