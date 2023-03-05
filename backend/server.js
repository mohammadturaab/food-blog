/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
const path = require('path');
require("dotenv").config({path: "../.env"})
/* ==== External Modules ==== */
const express = require('express');
const cors = require('cors');


/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code


/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
const routes = require("./routes");
// returns an object that is our server

	
/* ====== Middleware  ====== */ 
//(app.use)
app.use(express.static(path.join("build")))
app.use(express.json())
app.use(cors())

/* ====== System Variables  ====== */
const PORT = 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set


/* ====== Routes  ====== */
app.use("/api", routes);
	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)

app.listen(PORT, function (){
    console.log(`server started on port ${PORT}`)
});

