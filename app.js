const express = require('express'),
    app = express(),
    PORT = 5000;

const Videoroute = require("./routes/Videoroute")
app.get('/server', (req, res) => {
    res.send('Server seems to be working')
});
app.use("/video", Videoroute);
app.listen(PORT, () => { console.log(`Server is running on ${PORT}`) })