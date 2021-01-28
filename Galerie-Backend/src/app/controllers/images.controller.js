const fs = require('fs');
const imagesPath = '../assets/images.json';

exports.getImages = (_, res) => {
    fs.readFile(imagesPath, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        console.log('File data:', jsonString);
        res.json(jsonString);
    })
}