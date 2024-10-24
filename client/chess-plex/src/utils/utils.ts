export function getDateAndTime(dateString: string): [string, string] {
  const dateObject = new Date(dateString);

  const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: '2-digit'};
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: "2-digit"}

  const formattedDate = dateObject.toLocaleDateString('en-GB', dateOptions);

  const time = dateObject.toLocaleTimeString('en-GB', timeOptions); // Extracts the time

  return [formattedDate, time];
}