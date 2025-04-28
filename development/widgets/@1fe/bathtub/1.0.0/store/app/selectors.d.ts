import { Environment } from '../../services/cdn';
import { RootState } from '../../store/index';
declare const selectApp: (state: RootState) => import("immer/dist/internal").WritableDraft<import("./types").AppState>;
declare const selectActiveWidgetUrl: ((state: {
    app: import("immer/dist/internal").WritableDraft<import("./types").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}) => string) & import("reselect").OutputSelectorFields<(args_0: import("immer/dist/internal").WritableDraft<import("./types").AppState>) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const selectActiveWidgetProps: ((state: {
    app: import("immer/dist/internal").WritableDraft<import("./types").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}) => string) & import("reselect").OutputSelectorFields<(args_0: import("immer/dist/internal").WritableDraft<import("./types").AppState>) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const selectWidgetRefreshSignal: ((state: {
    app: import("immer/dist/internal").WritableDraft<import("./types").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("immer/dist/internal").WritableDraft<import("./types").AppState>) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const selectWidgetById: (state: import("@reduxjs/toolkit").EntityState<import("../../services/widget").Widget>, id: import("@reduxjs/toolkit").EntityId) => import("../../services/widget").Widget;
declare const selectAllWidgets: (state: RootState) => import("../../services/widget").Widget[];
declare const selectAllPlugins: ((state: {
    app: import("immer/dist/internal").WritableDraft<import("./types").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}) => import("../../services/widget").Widget[]) & import("reselect").OutputSelectorFields<(args_0: import("../../services/widget").Widget[]) => import("../../services/widget").Widget[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const selectWidget: (state: RootState) => import("../../services/widget").Widget;
declare const selectEnvironment: (state: RootState) => Environment;
declare const selectLoadingOrError: ((state: {
    app: import("immer/dist/internal").WritableDraft<import("./types").AppState>;
    widgetBrowser: {
        filters: any[];
    };
}) => {
    isLoading: boolean;
    error: string;
}) & import("reselect").OutputSelectorFields<(args_0: import("immer/dist/internal").WritableDraft<import("./types").AppState>) => {
    isLoading: boolean;
    error: string;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export { selectActiveWidgetProps, selectActiveWidgetUrl, selectAllPlugins, selectAllWidgets, selectApp, selectEnvironment, selectLoadingOrError, selectWidget, selectWidgetById, selectWidgetRefreshSignal, };
