export const isInThePast = (date: Date): boolean => {
  const now = new Date();
  return date < now;
};

export const logger = (context: string) => (log: string) => {
  console.log(`[${context}] - ${log}`);
};

export const apiLog = logger("API");
export const cronLog = logger("cron");
