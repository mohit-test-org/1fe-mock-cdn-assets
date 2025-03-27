/**
 * Wrap the application code in the various app level providers
 */
declare const withProvider: (Component: any) => () => import("@emotion/react/jsx-runtime").JSX.Element;
export default withProvider;
