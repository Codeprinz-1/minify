export const getDatDifference = (date1: number, date2: number): number => {
  const dateObject1 = new Date(date1) as unknown as number;
  const dateObject2 = new Date(date2) as unknown as number;
  const diffTime = Math.abs(dateObject1 - dateObject2);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const logger = (context: string) => (log: string) => {
  console.log(`[${context}] - ${log}`);
};

export const apiLog = logger("API");
export const cronLog = logger("cron");
