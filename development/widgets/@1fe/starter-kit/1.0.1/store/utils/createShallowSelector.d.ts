import { defaultMemoize } from 'reselect';
/**
 * Creates a selector that uses shallow equality instead of deep equality.
 * Useful when combining multiple selectors into a composite state.
 */
export declare const createShallowSelector: import("reselect").CreateSelectorFunction<(...args: unknown[]) => unknown, typeof defaultMemoize, [equalityCheckOrOptions?: import("reselect").EqualityFn | import("reselect").DefaultMemoizeOptions], {
    clearCache: () => void;
}>;
