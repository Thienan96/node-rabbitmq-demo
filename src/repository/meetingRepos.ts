import pool from "../config/db";
import { MeetingEntity } from "../entities/meeting";

export async function getAllMeetings(): Promise<MeetingEntity[]> {
  const [rows] = await pool.promise().query("SELECT * FROM record_vote_meeting");
  return <MeetingEntity[]>rows;
}
