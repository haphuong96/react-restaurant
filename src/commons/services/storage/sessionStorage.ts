import { Locales } from "@/commons/i18n/i18n-types";
import { createStorage } from "./createStorage";

/**
 * Session Storage schema - define types for all session storage values here
 */
export interface SessionStorageSchema {
  lang: Locales;
  theme: "light" | "dark";
}

/**
 * Type-safe wrapper for sessionStorage
 */
export const sessionStorageService =
  createStorage<SessionStorageSchema>(sessionStorage);
