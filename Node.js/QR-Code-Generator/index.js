import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Use the inquirer npm package to get user input.
inquirer
    .prompt([{
        message: "type in your URL: ",
        name: "URL",
    }, ])
    .then((answers) => {
        const url = answers.URL;

        var qr_maker = qr.image(url);
        qr_maker.pipe(fs.createWriteStream(`${url}.png`));

        fs.writeFile(`${url}.txt`, url, (err) => {
            if (err) throw err;
            console.log('The URL has been Added.');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {} else {
            // Something else went wrong
        }
    });

// 2. Use the qr - image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.*/