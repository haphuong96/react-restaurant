import { configs } from "@/directory/app/configs/configs";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export class BaseService {
  protected client: AxiosInstance;
  protected baseURL: string;

  constructor(baseURL: string = configs.apiUrl) {
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add request interceptor for auth tokens if needed
    this.client.interceptors.request.use(
      (config) => {
        // Get token from localStorage, sessionStorage, etc.
        const token = localStorage.getItem("authToken");
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  /**
   * Perform a GET request
   * @param url - The endpoint URL
   * @param params - URL parameters
   * @param config - Additional Axios config
   */
  public async get<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url, { params, ...config });
    return this.processResponse<T>(response);
  }

  /**
   * Perform a POST request
   * @param url - The endpoint URL
   * @param data - The data to send
   * @param config - Additional Axios config
   */
  public async post<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return this.processResponse<T>(response);
  }

  /**
   * Perform a PUT request
   * @param url - The endpoint URL
   * @param data - The data to send
   * @param config - Additional Axios config
   */
  public async put<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return this.processResponse<T>(response);
  }

  /**
   * Perform a PATCH request
   * @param url - The endpoint URL
   * @param data - The data to send
   * @param config - Additional Axios config
   */
  public async patch<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.patch<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return this.processResponse<T>(response);
  }

  /**
   * Perform a DELETE request
   * @param url - The endpoint URL
   * @param config - Additional Axios config
   */
  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<T>(url, config);
    return this.processResponse<T>(response);
  }

  /**
   * Process the API response
   * @param response - The Axios response
   * @returns Processed API response
   */
  private processResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  /**
   * Handle errors from API calls
   * @param error - The error object
   */
  private handleError(error: unknown): Promise<never> {
    if (!axios.isAxiosError(error)) return Promise.reject(error);

    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.error("API Error Response:", error.response.data);

      // Handle specific error statuses
      switch (error.response.status) {
        case 401:
          // Unauthorized - redirect to login or refresh token
          this.handleUnauthorized();
          break;
        case 403:
          // Forbidden - handle access denied
          break;
        case 404:
          // Not found
          break;
        case 500:
          // Server error
          break;
      }

      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        message: error.response.data.message || "An error occurred",
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error("API Request Error:", error.request);
      return Promise.reject({
        message: "No response from server. Please check your connection.",
      });
    } else {
      // Something happened in setting up the request
      console.error("API Configuration Error:", error.message);
      return Promise.reject({
        message: "Error setting up request: " + error.message,
      });
    }
  }

  /**
   * Handle unauthorized requests (401 errors)
   */
  private handleUnauthorized(): void {
    // Clear authentication data
    localStorage.removeItem("authToken");

    // Redirect to login page
    // If using React Router, you might use history.push instead
    // window.location.href = '/login';

    // Or dispatch an action if using Redux
    // store.dispatch({ type: 'LOGOUT' });
  }

  /**
   * Set authorization token for subsequent requests
   * @param token - The authentication token
   */
  public setAuthToken(token: string): void {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }

  /**
   * Clear authorization token
   */
  public clearAuthToken(): void {
    localStorage.removeItem("authToken");
  }
}
