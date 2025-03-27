export declare const helloSlice: import("@reduxjs/toolkit").Slice<{
    greeting: string;
}, {
    changeGreeting: (state: import("immer/dist/internal").WritableDraft<{
        greeting: string;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "hello">;
export declare const changeGreeting: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "hello/changeGreeting">;
declare const _default: import("redux").Reducer<{
    greeting: string;
}>;
export default _default;
