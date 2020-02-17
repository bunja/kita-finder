DROP TABLE IF EXISTS applications;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES parents(id) NOT NULL UNIQUE,
    kidfirst VARCHAR NOT NULL CHECK (kidfirst != ''),
    kidlast VARCHAR NOT NULL CHECK (kidlast != ''),
    birthdate DATE NOT NULL CHECK (birthdate != ''),
    kitastart DATE NOT NULL CHECK (kitastart != ''),
    gutschein INT NOT NULL CHECK (gutchein != ''),
    valid_until DATE NOT NULL CHECK (valid_until != ''),
    street_hous VARCHAR NOT NULL CHECK (street_hous != ''),
    zip_code INT NOT NULL CHECK (zip_code != ''),
    city VARCHAR NOT NULL CHECK (city != ''),
    first VARCHAR NOT NULL CHECK (first != ''),
    last VARCHAR NOT NULL CHECK (last != ''),
    street_hous_parent VARCHAR NOT NULL CHECK (street_hous_parent != ''),
    zip_code_parent INT NOT NULL CHECK (zip_code_parent != ''),
    city_parent VARCHAR NOT NULL CHECK (city_parent != ''),
    email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
    phone_number VARCHAR NOT NULL CHECK (phone_number != ''),
    notes TEXT
);
