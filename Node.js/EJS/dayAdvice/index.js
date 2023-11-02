import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let day = new Date();
    let today = day.getDay();

   let type ="weekDay";
    let yourAdvice = " time to learn more!"

    if (today === 0 || today === 6) {
    type = "weekEnd";
    yourAdvice = " time to have fun!"
}
    res.render("index.ejs", {
        dayType: type,
        advice: yourAdvice,
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
