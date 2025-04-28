import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
export declare const determineEndpoint: (baseUrl?: string) => string;
export declare const baseApi: import("@reduxjs/toolkit/query/react").Api<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, {}, "widgetStarterKitApi", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
