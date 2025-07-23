import { PayloadAction } from "@reduxjs/toolkit";
type WidgetBrowserState = {
    filters: any[];
};
export declare const DEFAULT_VARIANT = "default";
declare const widgetBrowserSelectors: {
    selectFilteredWidgets: ((state: {
        app: import("../app").AppState;
        widgetBrowser: WidgetBrowserState;
    }) => import("../../services/widget").Widget[]) & import("reselect").OutputSelectorFields<(args_0: import("../../services/widget").Widget[]) => import("../../services/widget").Widget[], {
        clearCache: () => void;
    }> & {
        clearCache: () => void;
    };
};
declare const widgetBrowserActions: import("@reduxjs/toolkit").CaseReducerActions<{
    applyFilters(state: import("immer/dist/internal").WritableDraft<WidgetBrowserState>, action: PayloadAction<any[]>): void;
}, "widgetBrowser">, widgetBrowserReducer: import("redux").Reducer<WidgetBrowserState>;
export { widgetBrowserActions, widgetBrowserReducer, widgetBrowserSelectors };
