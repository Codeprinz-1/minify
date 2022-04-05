import app from "./app";
import cronJob from "./cron/cron";
import { apiLog } from "./utils";

const port: number | string = process.env.PORT || 3003;

app.listen(port, () => {
  apiLog(`server running on port ${port}`);
});
