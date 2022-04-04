export const getDatDifference = (date1: string, date2: number): number => {
  const dateObject1 = new Date(date1) as unknown as number;
  const dateObject2 = new Date(date2) as unknown as number;
  const diffTime = Math.abs(dateObject1 - dateObject2);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
