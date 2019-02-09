const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${PORT}`);
})