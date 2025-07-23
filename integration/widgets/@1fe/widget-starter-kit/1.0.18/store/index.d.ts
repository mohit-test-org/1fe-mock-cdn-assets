/**
 * Creates a Redux store that's isolated to this widget
 */
export declare const createStore: () => import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    hello: {
        greeting: string;
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    hello: {
        greeting: string;
    };
}, import("redux").AnyAction>]>;
export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
