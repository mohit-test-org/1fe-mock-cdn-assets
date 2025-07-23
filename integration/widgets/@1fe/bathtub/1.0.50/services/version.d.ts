import { z } from "zod";
export declare const PluginAuth: z.ZodObject<{
    secretKeyName: z.ZodOptional<z.ZodString>;
    clientAppId: z.ZodString;
    authenticationType: z.ZodString;
    scopes: z.ZodArray<z.ZodString, "many">;
    generateAuthTxnId: z.ZodDefault<z.ZodBoolean>;
    callbackUrl: z.ZodOptional<z.ZodString>;
    logoutUrl: z.ZodOptional<z.ZodString>;
    authCookiesToClear: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    useNativeAuth: z.ZodOptional<z.ZodBoolean>;
    ramp1FEAuthPercent: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    clientAppId: string;
    authenticationType: string;
    scopes: string[];
    generateAuthTxnId: boolean;
    secretKeyName?: string | undefined;
    callbackUrl?: string | undefined;
    logoutUrl?: string | undefined;
    authCookiesToClear?: string[] | undefined;
    useNativeAuth?: boolean | undefined;
    ramp1FEAuthPercent?: number | undefined;
}, {
    clientAppId: string;
    authenticationType: string;
    scopes: string[];
    secretKeyName?: string | undefined;
    generateAuthTxnId?: boolean | undefined;
    callbackUrl?: string | undefined;
    logoutUrl?: string | undefined;
    authCookiesToClear?: string[] | undefined;
    useNativeAuth?: boolean | undefined;
    ramp1FEAuthPercent?: number | undefined;
}>;
export type PluginAuth = z.infer<typeof PluginAuth>;
export declare const WidgetConfig: z.ZodObject<{
    widgetId: z.ZodString;
    plugin: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        route: z.ZodOptional<z.ZodString>;
        auth: z.ZodOptional<z.ZodObject<{
            secretKeyName: z.ZodOptional<z.ZodString>;
            clientAppId: z.ZodString;
            authenticationType: z.ZodString;
            scopes: z.ZodArray<z.ZodString, "many">;
            generateAuthTxnId: z.ZodDefault<z.ZodBoolean>;
            callbackUrl: z.ZodOptional<z.ZodString>;
            logoutUrl: z.ZodOptional<z.ZodString>;
            authCookiesToClear: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            useNativeAuth: z.ZodOptional<z.ZodBoolean>;
            ramp1FEAuthPercent: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            generateAuthTxnId: boolean;
            secretKeyName?: string | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        }, {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            secretKeyName?: string | undefined;
            generateAuthTxnId?: boolean | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        route?: string | undefined;
        auth?: {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            generateAuthTxnId: boolean;
            secretKeyName?: string | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    }, {
        route?: string | undefined;
        auth?: {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            secretKeyName?: string | undefined;
            generateAuthTxnId?: boolean | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    }>>;
    version: z.ZodString;
    activePhasedDeployment: z.ZodBoolean;
    runtime: z.ZodObject<{
        preload: z.ZodOptional<z.ZodArray<z.ZodObject<{
            apiGet: z.ZodOptional<z.ZodString>;
            widget: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }, {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }>, "many">>;
        dependsOn: z.ZodOptional<z.ZodObject<{
            widgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                widgetId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                widgetId: string;
            }, {
                widgetId: string;
            }>, "many">>;
            pinnedWidgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                widgetId: z.ZodString;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                widgetId: string;
                version: string;
            }, {
                widgetId: string;
                version: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        }, {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        }>>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        headers?: Record<string, string> | undefined;
        preload?: {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }[] | undefined;
        dependsOn?: {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        } | undefined;
    }, {
        headers?: Record<string, string> | undefined;
        preload?: {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }[] | undefined;
        dependsOn?: {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        } | undefined;
    }>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    widgetId: string;
    version: string;
    activePhasedDeployment: boolean;
    runtime: {
        headers?: Record<string, string> | undefined;
        preload?: {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }[] | undefined;
        dependsOn?: {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        } | undefined;
    };
    type?: string | undefined;
    plugin?: {
        route?: string | undefined;
        auth?: {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            generateAuthTxnId: boolean;
            secretKeyName?: string | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    } | undefined;
}, {
    widgetId: string;
    version: string;
    activePhasedDeployment: boolean;
    runtime: {
        headers?: Record<string, string> | undefined;
        preload?: {
            widget?: string | undefined;
            apiGet?: string | undefined;
        }[] | undefined;
        dependsOn?: {
            widgets?: {
                widgetId: string;
            }[] | undefined;
            pinnedWidgets?: {
                widgetId: string;
                version: string;
            }[] | undefined;
        } | undefined;
    };
    type?: string | undefined;
    plugin?: {
        route?: string | undefined;
        auth?: {
            clientAppId: string;
            authenticationType: string;
            scopes: string[];
            secretKeyName?: string | undefined;
            generateAuthTxnId?: boolean | undefined;
            callbackUrl?: string | undefined;
            logoutUrl?: string | undefined;
            authCookiesToClear?: string[] | undefined;
            useNativeAuth?: boolean | undefined;
            ramp1FEAuthPercent?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    } | undefined;
}>;
export type WidgetConfig = z.infer<typeof WidgetConfig>;
declare const WidgetVersionData: z.ZodObject<{
    environment: z.ZodString;
    version: z.ZodString;
    nodeVersion: z.ZodString;
    buildNumber: z.ZodString;
    branch: z.ZodString;
    gitSha: z.ZodString;
    packages: z.ZodObject<{
        externals: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            version: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            version: string;
            name?: string | undefined;
        }, {
            id: string;
            version: string;
            name?: string | undefined;
        }>, "many">;
        installed: z.ZodArray<z.ZodObject<Omit<{
            id: z.ZodString;
            version: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "name">, "strip", z.ZodTypeAny, {
            id: string;
            version: string;
        }, {
            id: string;
            version: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        externals: {
            id: string;
            version: string;
            name?: string | undefined;
        }[];
        installed: {
            id: string;
            version: string;
        }[];
    }, {
        externals: {
            id: string;
            version: string;
            name?: string | undefined;
        }[];
        installed: {
            id: string;
            version: string;
        }[];
    }>;
    configs: z.ZodObject<{
        widgetConfig: z.ZodArray<z.ZodObject<{
            widgetId: z.ZodString;
            plugin: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                route: z.ZodOptional<z.ZodString>;
                auth: z.ZodOptional<z.ZodObject<{
                    secretKeyName: z.ZodOptional<z.ZodString>;
                    clientAppId: z.ZodString;
                    authenticationType: z.ZodString;
                    scopes: z.ZodArray<z.ZodString, "many">;
                    generateAuthTxnId: z.ZodDefault<z.ZodBoolean>;
                    callbackUrl: z.ZodOptional<z.ZodString>;
                    logoutUrl: z.ZodOptional<z.ZodString>;
                    authCookiesToClear: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    useNativeAuth: z.ZodOptional<z.ZodBoolean>;
                    ramp1FEAuthPercent: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    generateAuthTxnId: boolean;
                    secretKeyName?: string | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                }, {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    secretKeyName?: string | undefined;
                    generateAuthTxnId?: boolean | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    generateAuthTxnId: boolean;
                    secretKeyName?: string | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            }, {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    secretKeyName?: string | undefined;
                    generateAuthTxnId?: boolean | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            }>>;
            version: z.ZodString;
            activePhasedDeployment: z.ZodBoolean;
            runtime: z.ZodObject<{
                preload: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    apiGet: z.ZodOptional<z.ZodString>;
                    widget: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }, {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }>, "many">>;
                dependsOn: z.ZodOptional<z.ZodObject<{
                    widgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        widgetId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        widgetId: string;
                    }, {
                        widgetId: string;
                    }>, "many">>;
                    pinnedWidgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        widgetId: z.ZodString;
                        version: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        widgetId: string;
                        version: string;
                    }, {
                        widgetId: string;
                        version: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                }, {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                }>>;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            }, {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            }>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    generateAuthTxnId: boolean;
                    secretKeyName?: string | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }, {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    secretKeyName?: string | undefined;
                    generateAuthTxnId?: boolean | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        widgetConfig: {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    generateAuthTxnId: boolean;
                    secretKeyName?: string | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }[];
    }, {
        widgetConfig: {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    secretKeyName?: string | undefined;
                    generateAuthTxnId?: boolean | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    environment: string;
    version: string;
    nodeVersion: string;
    buildNumber: string;
    branch: string;
    gitSha: string;
    packages: {
        externals: {
            id: string;
            version: string;
            name?: string | undefined;
        }[];
        installed: {
            id: string;
            version: string;
        }[];
    };
    configs: {
        widgetConfig: {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    generateAuthTxnId: boolean;
                    secretKeyName?: string | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }[];
    };
}, {
    environment: string;
    version: string;
    nodeVersion: string;
    buildNumber: string;
    branch: string;
    gitSha: string;
    packages: {
        externals: {
            id: string;
            version: string;
            name?: string | undefined;
        }[];
        installed: {
            id: string;
            version: string;
        }[];
    };
    configs: {
        widgetConfig: {
            widgetId: string;
            version: string;
            activePhasedDeployment: boolean;
            runtime: {
                headers?: Record<string, string> | undefined;
                preload?: {
                    widget?: string | undefined;
                    apiGet?: string | undefined;
                }[] | undefined;
                dependsOn?: {
                    widgets?: {
                        widgetId: string;
                    }[] | undefined;
                    pinnedWidgets?: {
                        widgetId: string;
                        version: string;
                    }[] | undefined;
                } | undefined;
            };
            type?: string | undefined;
            plugin?: {
                route?: string | undefined;
                auth?: {
                    clientAppId: string;
                    authenticationType: string;
                    scopes: string[];
                    secretKeyName?: string | undefined;
                    generateAuthTxnId?: boolean | undefined;
                    callbackUrl?: string | undefined;
                    logoutUrl?: string | undefined;
                    authCookiesToClear?: string[] | undefined;
                    useNativeAuth?: boolean | undefined;
                    ramp1FEAuthPercent?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        }[];
    };
}>;
export type WidgetVersionData = z.infer<typeof WidgetVersionData>;
export declare const downloadWidgetVersions: () => Promise<WidgetVersionData>;
export {};
