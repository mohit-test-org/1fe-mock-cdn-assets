/**
 * JSON stringify helper that prevents circular references
 * and outputs functions and symbols
 * @returns string value that represents the current key
 */
export declare const jsonReplacer: () => (_key: unknown, value: unknown) => unknown;
