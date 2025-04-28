import { z } from 'zod';
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
    secretKeyName?: string;
    clientAppId?: string;
    authenticationType?: string;
    scopes?: string[];
    generateAuthTxnId?: boolean;
    callbackUrl?: string;
    logoutUrl?: string;
    authCookiesToClear?: string[];
    useNativeAuth?: boolean;
    ramp1FEAuthPercent?: number;
}, {
    secretKeyName?: string;
    clientAppId?: string;
    authenticationType?: string;
    scopes?: string[];
    generateAuthTxnId?: boolean;
    callbackUrl?: string;
    logoutUrl?: string;
    authCookiesToClear?: string[];
    useNativeAuth?: boolean;
    ramp1FEAuthPercent?: number;
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
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        }, {
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        route?: string;
        auth?: {
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        };
        enabled?: boolean;
    }, {
        route?: string;
        auth?: {
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        };
        enabled?: boolean;
    }>>;
    version: z.ZodString;
    activePhasedDeployment: z.ZodBoolean;
    runtime: z.ZodObject<{
        preload: z.ZodOptional<z.ZodArray<z.ZodObject<{
            apiGet: z.ZodOptional<z.ZodString>;
            widget: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            widget?: string;
            apiGet?: string;
        }, {
            widget?: string;
            apiGet?: string;
        }>, "many">>;
        dependsOn: z.ZodOptional<z.ZodObject<{
            widgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                widgetId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                widgetId?: string;
            }, {
                widgetId?: string;
            }>, "many">>;
            pinnedWidgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                widgetId: z.ZodString;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                widgetId?: string;
                version?: string;
            }, {
                widgetId?: string;
                version?: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        }, {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        }>>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        headers?: Record<string, string>;
        preload?: {
            widget?: string;
            apiGet?: string;
        }[];
        dependsOn?: {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        };
    }, {
        headers?: Record<string, string>;
        preload?: {
            widget?: string;
            apiGet?: string;
        }[];
        dependsOn?: {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        };
    }>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    widgetId?: string;
    type?: string;
    plugin?: {
        route?: string;
        auth?: {
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        };
        enabled?: boolean;
    };
    version?: string;
    activePhasedDeployment?: boolean;
    runtime?: {
        headers?: Record<string, string>;
        preload?: {
            widget?: string;
            apiGet?: string;
        }[];
        dependsOn?: {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        };
    };
}, {
    widgetId?: string;
    type?: string;
    plugin?: {
        route?: string;
        auth?: {
            secretKeyName?: string;
            clientAppId?: string;
            authenticationType?: string;
            scopes?: string[];
            generateAuthTxnId?: boolean;
            callbackUrl?: string;
            logoutUrl?: string;
            authCookiesToClear?: string[];
            useNativeAuth?: boolean;
            ramp1FEAuthPercent?: number;
        };
        enabled?: boolean;
    };
    version?: string;
    activePhasedDeployment?: boolean;
    runtime?: {
        headers?: Record<string, string>;
        preload?: {
            widget?: string;
            apiGet?: string;
        }[];
        dependsOn?: {
            widgets?: {
                widgetId?: string;
            }[];
            pinnedWidgets?: {
                widgetId?: string;
                version?: string;
            }[];
        };
    };
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
            id?: string;
            name?: string;
            version?: string;
        }, {
            id?: string;
            name?: string;
            version?: string;
        }>, "many">;
        installed: z.ZodArray<z.ZodObject<Omit<{
            id: z.ZodString;
            version: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "name">, "strip", z.ZodTypeAny, {
            id?: string;
            version?: string;
        }, {
            id?: string;
            version?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        externals?: {
            id?: string;
            name?: string;
            version?: string;
        }[];
        installed?: {
            id?: string;
            version?: string;
        }[];
    }, {
        externals?: {
            id?: string;
            name?: string;
            version?: string;
        }[];
        installed?: {
            id?: string;
            version?: string;
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
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                }, {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            }, {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            }>>;
            version: z.ZodString;
            activePhasedDeployment: z.ZodBoolean;
            runtime: z.ZodObject<{
                preload: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    apiGet: z.ZodOptional<z.ZodString>;
                    widget: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    widget?: string;
                    apiGet?: string;
                }, {
                    widget?: string;
                    apiGet?: string;
                }>, "many">>;
                dependsOn: z.ZodOptional<z.ZodObject<{
                    widgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        widgetId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        widgetId?: string;
                    }, {
                        widgetId?: string;
                    }>, "many">>;
                    pinnedWidgets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        widgetId: z.ZodString;
                        version: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        widgetId?: string;
                        version?: string;
                    }, {
                        widgetId?: string;
                        version?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                }, {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                }>>;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            }, {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            }>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }, {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        widgetConfig?: {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }[];
    }, {
        widgetConfig?: {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    environment?: string;
    version?: string;
    nodeVersion?: string;
    buildNumber?: string;
    branch?: string;
    gitSha?: string;
    packages?: {
        externals?: {
            id?: string;
            name?: string;
            version?: string;
        }[];
        installed?: {
            id?: string;
            version?: string;
        }[];
    };
    configs?: {
        widgetConfig?: {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }[];
    };
}, {
    environment?: string;
    version?: string;
    nodeVersion?: string;
    buildNumber?: string;
    branch?: string;
    gitSha?: string;
    packages?: {
        externals?: {
            id?: string;
            name?: string;
            version?: string;
        }[];
        installed?: {
            id?: string;
            version?: string;
        }[];
    };
    configs?: {
        widgetConfig?: {
            widgetId?: string;
            type?: string;
            plugin?: {
                route?: string;
                auth?: {
                    secretKeyName?: string;
                    clientAppId?: string;
                    authenticationType?: string;
                    scopes?: string[];
                    generateAuthTxnId?: boolean;
                    callbackUrl?: string;
                    logoutUrl?: string;
                    authCookiesToClear?: string[];
                    useNativeAuth?: boolean;
                    ramp1FEAuthPercent?: number;
                };
                enabled?: boolean;
            };
            version?: string;
            activePhasedDeployment?: boolean;
            runtime?: {
                headers?: Record<string, string>;
                preload?: {
                    widget?: string;
                    apiGet?: string;
                }[];
                dependsOn?: {
                    widgets?: {
                        widgetId?: string;
                    }[];
                    pinnedWidgets?: {
                        widgetId?: string;
                        version?: string;
                    }[];
                };
            };
        }[];
    };
}>;
export type WidgetVersionData = z.infer<typeof WidgetVersionData>;
export declare const downloadWidgetVersions: () => Promise<WidgetVersionData>;
export {};
