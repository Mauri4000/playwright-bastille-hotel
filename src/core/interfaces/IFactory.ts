/**
 * IFactory<T> — generic factory contract.
 * Ensures every factory exposes a consistent create() entry point.
 */
export interface IFactory<T> {
  /** Create a new instance with optional partial overrides */
  create(overrides?: Partial<T>): T;
}
