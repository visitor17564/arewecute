import express from "express";
import { reservationsRouter } from "./reservations.router.js";
import usersRouter from "./users.router.js";
import reviewsRouter from "./reviews.router.js";
import authRouter from "./auth.router.js";
import petSitterRouter from "./pet-sitters.router.js";
const router = express.Router();

router.use("/reservation", reservationsRouter);

router.use("/users/", usersRouter);//yw 2번

router.use("/auth", authRouter);//yw 2번

router.use("/reviews", reviewsRouter);
router.use("/petSitter", petSitterRouter);

export default router;
