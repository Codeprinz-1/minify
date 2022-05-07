export const isInThePast = (date: string): boolean => {
  const now = new Date();
  const expiryDate = new Date(date);
  return expiryDate < now;
};

export const logger = (context: string) => (log: string) => {
  console.log(`[${context}] - ${log}`);
};

export const apiLog = logger("API");
export const cronLog = logger("cron");
