/**
 * IBuilder<T> — Builder pattern contract.
 * Each builder method returns `this` for method chaining.
 */
export interface IBuilder<T> {
  build(): T;
  reset(): this;
}
