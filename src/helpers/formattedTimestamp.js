export const formattedTimestamp = dataMessage => {
  if (!dataMessage) return '';

  const timestamp = dataMessage.toDate();
  return new Intl.DateTimeFormat('uk-UK', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp);
};
