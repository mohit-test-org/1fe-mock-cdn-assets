type ParsedError = {
    type: string;
    message: string;
    file: string;
    widget: string;
    location: string;
    stack: string;
};
export declare const parseError: (error: unknown) => ParsedError;
export {};
