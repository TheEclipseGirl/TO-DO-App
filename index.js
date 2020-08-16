const express=require('express');
const port=8000;

const app=express();

// Setting Up ejs 
app.set('view engine', 'ejs');
app.set('views', './views');
// middleware for router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`OOPs!! Error in running server: ${err}`);
        return;
    }
    console.log(`Great!! Server is up and running at: ${port}`);
});