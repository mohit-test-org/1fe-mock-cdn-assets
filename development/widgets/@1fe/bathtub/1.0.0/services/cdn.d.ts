type Environment = 'development' | 'integration' | 'stage' | 'demo' | 'production';
declare const getCdnBaseUrl: (environment: Environment) => "cdn.dev.net" | "cdn.net";
declare const getWidgetCdnUrl: (widgetId: string, widgetVersion: string, file: "1fe-bundle" | "1fe-contract" | "package", environment?: Environment) => string;
export { getCdnBaseUrl, getWidgetCdnUrl, type Environment };
