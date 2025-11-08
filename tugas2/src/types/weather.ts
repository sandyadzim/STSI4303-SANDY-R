export interface WeatherData {
  time: string[];
  temperature_2m: number[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: WeatherData;
}

export interface WeatherItem {
  time: string;
  temperature: number;
  formattedTime: string;
  formattedDate: string;
}
