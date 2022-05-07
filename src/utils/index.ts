export const isInThePast = (date: string): boolean => {
  const now = new Date();
  const expiryDate = new Date(date);
  return expiryDate < now;
};

export const generateSlug = (): string => {
  let result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const logger = (context: string) => (log: string) => {
  console.log(`[${context}] - ${log}`);
};

export const apiLog = logger("API");
export const cronLog = logger("cron");
