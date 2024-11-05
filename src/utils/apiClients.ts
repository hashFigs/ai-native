import axios, { AxiosRequestConfig } from 'axios';
import { getTokenFromLocalStorage } from './localStorage';

// Base URL for your backend API
//const API_BASE_URL = process.env.API_BASE_URL;
const API_BASE_URL = "http://localhost:3000";


// Generic function to make API requests
export const apiRequest = async (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data?: any, config?: AxiosRequestConfig) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const token = getTokenFromLocalStorage();
    const headers = {
      ...(config?.headers || {}),  
      ...(token ? { Authorization: `Bearer ${token}` } : {}), 
    };

    const response = await axios({
      url,
      method,
      data,       
      ...config,
      headers,  
    });

    return response.data;  
  } catch (error) {
    console.error(`Error during API request to ${endpoint}:`, error);
    throw error;  
  }
};