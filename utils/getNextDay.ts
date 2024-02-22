export const getNextDays = (
  currentDate: Date = new Date(),
  daysToAdd: number = 1,
): Date => {
  const nextDate: Date = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + daysToAdd);
  nextDate.setUTCHours(0, 0, 0, 0);
  return nextDate;
};
