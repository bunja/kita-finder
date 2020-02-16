const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./db");
const cookieSession = require("cookie-session");
const bcrypt = require("./bcrypt");

app.use(compression());
app.use(express.json());
app.use(express.static("./public"));

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
// redirecting logged in users
app.get("/welcome", function(req, res) {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/register/parent", function(req, res) {
    console.log("&&&& REGISTER PARENT route &&&&&");
    bcrypt
        .hash(req.body.password)
        .then(hashPass => {
            console.log("bcrypt worked");
            db.addParents(
                req.body.first,
                req.body.last,
                req.body.email,
                hashPass
            )
                .then(id => {
                    req.session.parentId = id;
                    res.json({ success: true });
                })
                .catch(error => {
                    console.log("err in db", error);
                    res.json({ success: false });
                });
        })
        .catch(err => console.log("err in bcrypt", err));
});

app.post("/register/kita", function(req, res) {
    console.log("+++++ REGISTER KITA route +++++");
    bcrypt
        .hash(req.body.password)
        .then(hashPass => {
            console.log("bcrypt worked");
            db.addKitas(req.body.kitaname, req.body.email, hashPass)
                .then(id => {
                    req.session.kitaId = id;
                    res.json({ success: true });
                })
                .catch(error => {
                    console.log("err in db", error);
                    res.json({ success: false });
                });
        })
        .catch(err => console.log("err in bcrypt", err));
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
