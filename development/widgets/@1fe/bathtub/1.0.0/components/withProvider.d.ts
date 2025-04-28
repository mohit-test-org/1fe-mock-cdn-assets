import React from 'react';
import { WidgetProps } from '../contract';
import '../public/assets/global.css';
/**
 * Wrap the application code in the various app level providers
 */
declare const withProvider: (Component: React.FC<WidgetProps>) => (props: WidgetProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export { withProvider };
