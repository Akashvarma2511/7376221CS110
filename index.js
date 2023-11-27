const express = require('express');
const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.send("Hello, world! 7376221CS110");
})

app.listen(Port, () => console.log(`listening on port ${Port}`));
