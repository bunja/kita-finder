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
            console.log("id of a new inserted parent db.js", rows[0].id);
            return rows[0].id;
        });
};

exports.addKitas = function(kitaname, email, password) {
    return db
        .query(
            "INSERT INTO kitas (kitaname, email, password) VALUES($1, $2, $3) RETURNING id", // $1 for the safe
            [kitaname, email, password]
        )
        .then(({ rows }) => {
            console.log("id of a new inserted kita db.js", rows[0].id);
            return rows[0].id;
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

exports.returnParentInfo = function(id) {
    return db
        .query(`SELECT * FROM parents WHERE id = $1`, [id])
        .then(({ rows }) => {
            console.log(" PARENT info returned by id db.js", rows[0]);
            return rows[0];
        });
};

exports.returnKitaInfo = function(id) {
    return db
        .query(`SELECT * FROM kitas WHERE id = $1`, [id])
        .then(({ rows }) => {
            console.log(" Kita info returned by id db.js", rows[0]);
            return rows[0];
        });
};

exports.updateKitaInfo = function(id, info) {
    const kitaname = info.kitaname || "";
    const num_of_places = info.num_of_places || 0;
    const time_of_work = info.time_of_work || "";
    const age = info.age || "";
    const street_hous = info.street_hous || "";
    const zip_code = info.zip_code || "";
    const city = info.city || "";
    const email = info.email || "";
    const web_site = info.web_site || "";
    const phone_number = info.phone_number || "";
    const description = info.description || "";

    const query = `
        UPDATE kitas
        SET kitaname=$2, num_of_places=$3,time_of_work=$4,
        age=$5,street_hous=$6,zip_code=$7,city=$8,
        email=$9,web_site=$10,phone_number=$11,description=$12
        WHERE id=$1
    `;

    return db
        .query(query, [
            id,
            kitaname,
            num_of_places,
            time_of_work,
            age,
            street_hous,
            zip_code,
            city,
            email,
            web_site,
            phone_number,
            description
        ])
        .then(res => {
            console.log("smth was updated db.js", res);
        });
};

exports.getMatchingKitas = function(val) {
    console.log("val", val);
    return db
        .query(
            `SELECT id, kitaname,email,time_of_work,street_hous,
            zip_code,imageurl, num_of_places FROM kitas WHERE zip_code ILIKE $1`,
            [val + "%"]
        )
        .then(({ rows }) => {
            console.log("__________________________");
            console.log("rows whatever db.js", rows);
            console.log("__________________________");
            return rows;
        });
};
// берет инфо для заявления только из таблицы аппликейшн
// exports.getApplication = function(parent_id) {
//     return db
//         .query(`SELECT * FROM applications WHERE parent_id=$1`, [parent_id])
//         .then(({ rows }) => {
//             console.log("applications insides", rows[0]);
//             return rows[0];
//         });
// };
// getting the whole information
exports.getApplication = function(parent_id) {
    return db
        .query(
            `select applications.*,parents.first, parents.last, parents.email from applications left join parents on applications.parent_id=parents.id where parent_id=$1`,
            [parent_id]
        )
        .then(({ rows }) => {
            console.log("applications insides", rows[0]);
            return rows[0];
        });
};
