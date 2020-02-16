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
            console.log("id of a new inserted user db.js", rows);
            return rows;
        });
};
