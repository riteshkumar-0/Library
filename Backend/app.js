import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express()
app.use(express.json());
app.use(cors({
    origin: [ process.env.CORS_ORIGIN ],
    methods: [ "GET", "POST", "DELETE", "PUT" ],
    credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

//routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

app.use("/book", bookRoute);
app.use("/user", userRoute);

export { app }