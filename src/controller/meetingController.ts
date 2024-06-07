import { Request, Response } from "express";
import * as meetingRespos from "../repository/meetingRepos";
import * as producer from "../queue/sender/producer";
import { TestEvent } from "../queue/event/test";
export const getAllMeetings = async (req: Request, res: Response) => {
  try {
    const meetings = await meetingRespos.getAllMeetings();
    const event = new TestEvent("Hello");
    producer.sendTestMessage(event);
    res.status(200).send(meetings);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const testQueue = async (req: Request, res: Response) => {
  try {
    const event = new TestEvent("Hello222222");
    producer.sendTestMessage2(event);
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
