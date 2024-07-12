import express from "express";
import {bookrequest} from "../controller/bookrequest.controller.js"

const router = express.Router();

router.post('/', bookrequest);

export default router;