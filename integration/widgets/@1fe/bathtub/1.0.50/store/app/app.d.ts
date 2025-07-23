import { PayloadAction } from "@reduxjs/toolkit";
import { Widget } from "../../services/widget";
import { AppState } from "./types";
declare const widgetsAdapter: import("@reduxjs/toolkit").EntityAdapter<Widget>;
export declare const appActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setActiveWidgetUrl: (state: import("immer/dist/internal").WritableDraft<AppState>, action: PayloadAction<string>) => void;
    setActiveWidgetProps: (state: import("immer/dist/internal").WritableDraft<AppState>, action: PayloadAction<string>) => void;
    clearPropsError: (state: import("immer/dist/internal").WritableDraft<AppState>) => void;
    setIsPropsEditorOpen: (state: import("immer/dist/internal").WritableDraft<AppState>, action: PayloadAction<boolean>) => void;
    setIsWidgetSwitcherOpen: (state: import("immer/dist/internal").WritableDraft<AppState>, action: PayloadAction<boolean>) => void;
    renderWidget: (state: import("immer/dist/internal").WritableDraft<AppState>) => void;
    reset: () => void;
}, "app">, appReducer: import("redux").Reducer<AppState>;
export { widgetsAdapter };
