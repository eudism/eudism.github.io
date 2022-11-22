const express = require('express');
const path = require('path');
const app = express();
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get("/", (req, res) => {
    const date = new Date();
    
    const style = date.getHours() > 6 && date.getHours< 18 ? 'day' : 'night';
    res.render("index",{
        time:date.toTimeString(),
        style:style,
    });
   

});


app.listen(3000);