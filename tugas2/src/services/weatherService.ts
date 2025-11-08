import axiosInstance from './axiosInstance';
import type { WeatherResponse, WeatherItem } from '@/types/weather';
import { transformWeatherData } from '@/utils/weatherTransformer';

class WeatherService {
  /**
   * Fetch weather forecast data for Jakarta
   */
  async getJakartaWeather(): Promise<WeatherItem[]> {
    try {
      const response = await axiosInstance.get<WeatherResponse>('/forecast', {
        params: {
          latitude: -6.2,
          longitude: 106.8,
          hourly: 'temperature_2m'
        }
      });

      return transformWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  }
}

export default new WeatherService();
