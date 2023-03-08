const path = require('path');
require("dotenv").config({path: "../.env"})

/* ==== External Modules ==== */
const express = require('express');
const cors = require('cors');

/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code


/* ====== Instanced Module  ====== */
const app = express();
const routes = require("./routes");

/* ==== Configuration ==== */
const config = require("@food-blog/config");
	
/* ====== Middleware  ====== */ 
//(app.use)
app.use(express.static(path.join("build")))
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

/* ====== System Variables  ====== */

/* ====== App Configuration  ====== */
// app.set


/* ====== Routes  ====== */
app.use("/api", routes);

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})
	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)

app.listen(config.PORT, function (){
    console.log(`server started on port ${PORT}`)
});

