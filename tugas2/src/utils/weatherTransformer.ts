import type { WeatherResponse, WeatherItem } from '@/types/weather';
import { formatTime, formatDate } from './dateFormatter';

/**
 * Transform API response to a more usable format
 */
export function transformWeatherData(data: WeatherResponse): WeatherItem[] {
  const weatherItems: WeatherItem[] = [];

  for (let i = 0; i < data.hourly.time.length; i++) {
    const dateTime = new Date(data.hourly.time[i]);
    
    weatherItems.push({
      time: data.hourly.time[i],
      temperature: data.hourly.temperature_2m[i],
      formattedTime: formatTime(dateTime),
      formattedDate: formatDate(dateTime)
    });
  }

  return weatherItems;
}
