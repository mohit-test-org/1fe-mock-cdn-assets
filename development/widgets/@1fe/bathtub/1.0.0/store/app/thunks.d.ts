import { Widget } from '../../services/widget';
export declare const appThunks: {
    loadWidgets: import("@reduxjs/toolkit").AsyncThunk<(string | Widget[])[], void, {
        state?: unknown;
        dispatch?: import("redux").Dispatch;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
};
