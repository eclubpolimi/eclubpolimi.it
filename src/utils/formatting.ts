/**
 * Formats a date into Month DD, YYYY
 */
export const formatDate = (date: string): string | null => {
  if (!date) return null;

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Formats a datetime into "Month DD, YYYY at HH:MM"
 */
export const formatDateTime = (date: string): string | null => {
  if (!date) return null;

  return (
    formatDate(date) +
    ' at ' +
    new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  );
};

/**
 * Formats a date range into DD-DD MMM YYYY
 * The start date's month and year are used for the whole range
 */
export const formatDateRange = (
  startDate: string,
  endDate: string,
): string | null => {
  if (!startDate || !endDate) return null;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = start.toLocaleDateString('en-US', { month: 'short' });
  const year = start.getFullYear();

  return `${startDay}-${endDay} ${month} ${year}`;
};
