const express = require('express');
const app = express();
var serveStatic = require('serve-static');

const PORT = process.env.PORT || 3000;

app.use(serveStatic(__dirname + "/dist"));
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${PORT}`);
})