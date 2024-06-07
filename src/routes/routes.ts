import { Router } from "express";
import meetingRouter from "../routes/meeting/meetingRoute";

const api = Router().use(meetingRouter);

export default Router().use("/api", api);
