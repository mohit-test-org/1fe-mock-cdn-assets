import { defaultMemoize } from "reselect";
export declare const createShallowSelector: import("reselect").CreateSelectorFunction<(...args: unknown[]) => unknown, typeof defaultMemoize, [equalityCheckOrOptions?: import("reselect").EqualityFn | import("reselect").DefaultMemoizeOptions | undefined], {
    clearCache: () => void;
}>;
/**
 * Validate the props string to be a valid JavaScript
 * @param {string} jsCode
 * @returns {boolean} true if the props are valid, false otherwise
 */
export declare const propsValidation: (jsCode: string) => boolean;
export declare function isNotNullable<T>(value: T | undefined | null): value is T;
