import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express()
app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import bookrequest from "./route/bookrequest.js"

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.use("/bookrequest", bookrequest)


export { app }