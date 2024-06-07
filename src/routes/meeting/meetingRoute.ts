import { Router } from "express";
import * as meetingController from "../../controller/meetingController";

const meetingRouter = Router();

meetingRouter.get("/all-meeting", meetingController.getAllMeetings);
meetingRouter.get("/test-queue-2", meetingController.testQueue);


export default meetingRouter;
