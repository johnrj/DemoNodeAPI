var app = require("../src/app");
var port = normalizePort(process.env.PORT || "3000");

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});