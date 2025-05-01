/**
 * A type-safe storage interface for browser storage (localStorage and sessionStorage)
 */
export interface Storage<T> {
  /**
   * Gets a value from storage by key
   * @param key Storage key
   * @param defaultValue Optional default value if item doesn't exist
   * @returns The stored value, or defaultValue if not found
   */
  get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K] | undefined;

  /**
   * Sets a value in storage
   * @param key Storage key
   * @param value Value to store
   */
  set<K extends keyof T>(key: K, value: T[K]): void;

  /**
   * Removes an item from storage
   * @param key Storage key
   */
  remove<K extends keyof T>(key: K): void;

  /**
   * Checks if a key exists in storage
   * @param key Storage key
   * @returns Whether the key exists
   */
  has<K extends keyof T>(key: K): boolean;

  /**
   * Clears all items from storage
   */
  clear(): void;
}

/**
 * Creates a type-safe storage wrapper around a web storage object
 * @param webStorage The storage object to wrap (localStorage or sessionStorage)
 * @returns A storage interface with type safety
 */
export function createStorage<T>(webStorage: globalThis.Storage): Storage<T> {
  return {
    get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K] | undefined {
      try {
        const item = webStorage.getItem(String(key));
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error(`Error getting storage item ${String(key)}:`, error);
        return defaultValue;
      }
    },

    set<K extends keyof T>(key: K, value: T[K]): void {
      try {
        webStorage.setItem(
          String(key),
          typeof value === "string" ? value : JSON.stringify(value)
        );
      } catch (error) {
        console.error(`Error setting storage item ${String(key)}:`, error);
      }
    },

    remove<K extends keyof T>(key: K): void {
      try {
        webStorage.removeItem(String(key));
      } catch (error) {
        console.error(`Error removing storage item ${String(key)}:`, error);
      }
    },

    has<K extends keyof T>(key: K): boolean {
      return webStorage.getItem(String(key)) !== null;
    },

    clear(): void {
      try {
        webStorage.clear();
      } catch (error) {
        console.error("Error clearing storage:", error);
      }
    },
  };
}
