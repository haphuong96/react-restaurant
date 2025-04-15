import { createStorage } from "./createStorage";

/**
 * Local Storage schema - define types for all local storage values here
 */
export interface LocalStorageSchema {
  userPreferences: {
    notifications: boolean;
    fontSize: number;
  };
}

/**
 * Type-safe wrapper for localStorage
 */
export const localStorageService =
  createStorage<LocalStorageSchema>(localStorage);
