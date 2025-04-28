import { TypedUseSelectorHook } from 'react-redux';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    app: import("immer/dist/internal").WritableDraft<import("./app").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    app: import("immer/dist/internal").WritableDraft<import("./app").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}, import("redux").AnyAction>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export { createShallowSelector } from './utils';
