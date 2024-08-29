import express from "express";

import cors from "cors";

const app = express();

app.use(cors({origin:process.env.CORS_ORIGIN}))

//** json for accept json data from client */
app.use(express.json({limit:"16kb"}))

//** urlencoded use for data from come params or url */
app.use(
    express.urlencoded({
        extended:true,
        limit:'16kb'
    })
)
app.use(express.static("public"))


export {app}

