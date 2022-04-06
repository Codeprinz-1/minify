import app from "./app";
import cronJob from "./cron/cron";
import { apiLog } from "./utils";

const port: string = process.env.PORT!;

app.listen(port, () => {
  apiLog(`server running on port ${port}`);
});
