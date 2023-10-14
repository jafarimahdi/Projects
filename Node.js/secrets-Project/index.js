//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // for direction

const app = express();
const port = 3000;

let authorization = false;

app.use(bodyParser.urlencoded({ extended: true }));

// create our own middleware function to check the password
function checkPassword(req, res, next) {
    const password = req.body["password"]; //check the input
    if (password === "ILikejs") {
        authorization = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // declare check in the Form "action=check"
    if (authorization) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});
