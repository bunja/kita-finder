DROP TABLE IF EXISTS applications;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES parents(id) NOT NULL UNIQUE,
    kidfirst VARCHAR NOT NULL CHECK (kidfirst != ''),
    kidlast VARCHAR NOT NULL CHECK (kidlast != ''),
    birthdate DATE NOT NULL CHECK (birthdate != null),
    gutschein VARCHAR NOT NULL CHECK (gutschein != ''),
    valid_until DATE NOT NULL CHECK (valid_until != null),
    street_hous VARCHAR NOT NULL CHECK (street_hous != ''),
    zip_code VARCHAR  NOT NULL CHECK (zip_code != ''),
    city VARCHAR NOT NULL CHECK (city != ''),
    phone_number VARCHAR NOT NULL CHECK (phone_number != ''),
    notes TEXT
);
kitastart DATE NOT NULL CHECK (kitastart != ''),
first VARCHAR NOT NULL CHECK (first != ''),
last VARCHAR NOT NULL CHECK (last != ''),
email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
street_hous_parent VARCHAR NOT NULL CHECK (street_hous_parent != ''),
zip_code_parent INT NOT NULL CHECK (zip_code_parent != ''),
city_parent VARCHAR NOT NULL CHECK (city_parent != ''),
