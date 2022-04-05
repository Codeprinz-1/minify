import CronManager from "node-cron";
import Link from "../models/link";
import { getDatDifference } from "../utils";

export const databaseJob = async () => {
  for await (const doc of Link.find()) {
    if (doc.daysToLive < getDatDifference(doc.createDate, Date.now()))
      doc.remove();
  }
};
export default CronManager.schedule("0 0 * * * *", databaseJob);
