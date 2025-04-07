/**
 * Class for implementing the Singleton pattern in service classes
 * @template T - The type of the service class that extends this class
 */
export class SingletonRegistry {
  private static _instance: SingletonRegistry;

  // Using private fields with a Map to maintain separate instances for each subclass
  private instances = new Map<unknown, unknown>();

  private constructor() {}

  public static getInstance(): SingletonRegistry {
    if (!SingletonRegistry._instance) {
      SingletonRegistry._instance = new SingletonRegistry();
    }

    return SingletonRegistry._instance;
  }

  /**
   * Get the singleton instance of the class
   * @returns The singleton instance of the class
   */
  public getClassInstance<T>(
    Cls: new (...args: unknown[]) => T,
    ...args: unknown[]
  ): T {
    if (!this.instances.has(Cls)) {
      this.instances.set(Cls, new Cls(...args));
    }

    return this.instances.get(Cls) as T;
  }
}
