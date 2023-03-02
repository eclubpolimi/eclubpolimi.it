/**
 * Formats a date into Month DD, YYYY
 */
export const formatDate = (date: string): string | null => {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
