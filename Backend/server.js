require("dotenv").config();
const ConnectDB = require("./src/DataBase/db");
const app = require("./src/app");

ConnectDB()


app.listen(process.env.PORT,() =>{
    console.log(`server is listening on port : ${process.env.PORT}`)
})