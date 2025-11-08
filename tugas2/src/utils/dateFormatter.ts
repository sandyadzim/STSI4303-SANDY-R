/**
 * Format time to HH:MM
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

/**
 * Format date to readable format
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}
