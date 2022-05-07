import CronManager from "node-cron";
import Link from "../models/link";
import { cronLog, isInThePast } from "../utils";

export const databaseJob = async () => {
  for await (const doc of Link.find()) {
    isInThePast(doc.expiryDate!) && doc.remove();
  }
};

export default CronManager.schedule("0 0 * * * *", async () => {
  cronLog("running databaseJob");
  await databaseJob();
  cronLog("finished running databaseJob");
});
