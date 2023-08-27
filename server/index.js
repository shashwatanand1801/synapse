const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv')

//Load the env file
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())

const PORT = 8000;
const DATABASE_APP = process.env.DB_HOST


// Connecting to database
mongoose
    .connect(DATABASE_APP)
    .then(()=>
        console.log(
            "================== Successfully Connected to MongoDB Database =================="
        )
    ).catch((err)=>{
        console.log("Database not connected.")
    })



// Routes
const mappingRouter = require("./routes/mapping")
const assetRouter = require("./routes/asset")

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
})


app.use("/server/mapping", mappingRouter)
app.use("/server/asset", assetRouter)


// Running server

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
