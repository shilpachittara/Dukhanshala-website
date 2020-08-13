var fs = require('fs');
module.exports = {

    devServer:{
        https: true,
        key: fs.readFileSync(""),
        cert: fs.readFileSync(""),
        ca: fs.readFileSync("")
    }
}