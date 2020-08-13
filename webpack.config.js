var fs = require('fs');
module.exports = {

    devServer:{
        https: true,
        key: fs.readFileSync("/etc/ssl/nopass.key"),
        cert: fs.readFileSync("/etc/ssl/certificate.crt"),
        ca: fs.readFileSync("/etc/ssl/ca_bundle.crt")
    }
}