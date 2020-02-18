const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./db");
const cookieSession = require("cookie-session");
const bcrypt = require("./bcrypt");
const csurf = require("csurf");
const ses = require("./ses");
app.use(compression());
app.use(express.json());
app.use(express.static("./public"));

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});
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

app.post("/api/register/parent", function(req, res) {
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

app.post("/api/register/kita", function(req, res) {
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

app.post("/api/login/parent", (req, res) => {
    db.returnHashedPassByEmailParent(req.body.email)
        .then(hashPass => {
            if (bcrypt.compare(req.body.password, hashPass.password)) {
                console.log("password is correct");
                req.session.parentId = hashPass.id;
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch(error => {
            console.log(error);
            res.json({ success: false });
        });
});

app.post("/api/login/kita", (req, res) => {
    db.returnHashedPassByEmailKita(req.body.email)
        .then(hashPass => {
            if (bcrypt.compare(req.body.password, hashPass.password)) {
                console.log("password is correct");
                req.session.kitaId = hashPass.id;
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch(error => {
            console.log(error);
            res.json({ success: false });
        });
});

app.get("/api/parent", function(req, res) {
    console.log("parent id", req.session.parentId);
    db.returnParentInfo(req.session.parentId).then(parent => {
        console.log("Parent info index.js", parent);
        res.json({ data: parent });
    });
});

app.get("/api/kita", function(req, res) {
    console.log("kita id", req.session.kitaId);
    db.returnKitaInfo(req.session.kitaId).then(kita => {
        console.log("kita info index.js", kita);
        res.json({ data: kita });
    });
});

app.post("/api/update/kita", (req, res) => {
    console.log("/api/update/kita", req.body);

    const kitaId = req.session.kitaId;
    const kitaInfo = req.body;

    db.updateKitaInfo(kitaId, kitaInfo)
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => {
            console.error("/api/update/kita", err);
            res.json({
                success: false
            });
        });
});

app.post("/api/find/kita", function(req, res) {
    db.getMatchingKitas(req.body.val)
        .then(rows => {
            console.log("rows====> /search", rows);
            res.json({ rows: rows });
        })
        .catch(err => {
            console.error("/api/find/kita", err);
            res.json({
                success: false
            });
        });
});

app.get("/api/application/:id", function(req, res) {
    console.log("parent id", req.session.parentId);
    console.log("kita id req.params", req.params.id);
    db.getApplication(req.session.parentId).then(application => {
        console.log("application index.js", application);
        if (!application) {
            application = {};
        }
        db.returnKitaInfo(req.params.id).then(kitaContactInfo => {
            res.json({ data: application, contact: kitaContactInfo });
        });
    });
});

app.post("/api/application/:id", (req, res) => {
    console.log("/api/application hwy no ", req.body);

    const parentId = req.session.parentId;
    const applicationInfo = req.body;

    db.upsertApplication(parentId, applicationInfo)
        .then(() => {
            db.returnKitaInfo(req.params.id).then(kitaContactInfo => {
                // send email
                const email = kitaContactInfo.email;
                const message = JSON.stringify(applicationInfo);
                ses.sendEmail(email, message, "Application");
                res.json({ success: true });
            });
        })
        .catch(err => {
            console.error("/api/update/application", err);
            res.json({
                success: false
            });
        });
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/welcome");
    res.json({ success: true });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
