import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Create axios instance with default configuration
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor
 * Add any custom logic before request is sent
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can add auth tokens here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handle responses and errors globally
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      console.error('Response error:', error.response.status);
      
      switch (error.response.status) {
        case 400:
          console.error('Bad Request');
          break;
        case 401:
          console.error('Unauthorized');
          break;
        case 404:
          console.error('Not Found');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        default:
          console.error('Unknown Error');
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network error - no response received');
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
