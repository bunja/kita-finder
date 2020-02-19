DROP TABLE IF EXISTS kitaparent;

CREATE TABLE kitaparent(
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES parents(id) NOT NULL,
    kita_id INT REFERENCES kitas(id) NOT NULL );
