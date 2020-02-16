const spicedPg = require("spiced-pg");

// linking to the socialnetwork database
const db = spicedPg("postgres:user:user@localhost:5432/kitafinder");

// inserting a new user into users table

exports.addParents = function(first, last, email, password) {
    return db
        .query(
            "INSERT INTO parents (first, last, email, password) VALUES($1, $2, $3, $4) RETURNING id", // $1 for the safe
            [first, last, email, password]
        )
        .then(({ rows }) => {
            console.log("id of a new inserted parent db.js", rows);
            return rows;
        });
};

exports.addKitas = function(kitaname, email, password) {
    return db
        .query(
            "INSERT INTO kitas (kitaname, email, password) VALUES($1, $2, $3) RETURNING id", // $1 for the safe
            [kitaname, email, password]
        )
        .then(({ rows }) => {
            console.log("id of a new inserted kita db.js", rows);
            return rows;
        });
};

exports.returnHashedPassByEmailParent = function(email) {
    return db
        .query(`SELECT password,id FROM parents WHERE email = $1`, [
            email.trim()
        ])
        .then(pass => {
            console.log(
                "hashed pass PARENT returned by email db.js",
                pass.rows
            );
            return pass.rows[0];
        });
};

exports.returnHashedPassByEmailKita = function(email) {
    return db
        .query(`SELECT password,id FROM kitas WHERE email = $1`, [email.trim()])
        .then(pass => {
            console.log("hashed pass KITA returned by email db.js", pass.rows);
            return pass.rows[0];
        });
};
