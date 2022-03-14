const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const {connectDb} = require("./db/conn"); 
const hospitalRoutes = require("./routes/hospitalRoutes"); 

const app = express();
app.use(express.json()) ; 
app.use(cors()) ;
app.use(express.urlencoded(false)) ; 
dotenv.config();

connectDb() ;

//todo  ROUTES
app.use("/api/v1/",hospitalRoutes) ; 

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
