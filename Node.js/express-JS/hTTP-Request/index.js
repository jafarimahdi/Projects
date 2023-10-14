import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<H1>Helloo NodeMon</H1>");
});

app.get("/contact", (req, res) => {
    res.send("<li>phone </li> ");
});

app.get("/about", (req, res) => {
    res.send("<H3>the page is about our team</H3>");
});




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});