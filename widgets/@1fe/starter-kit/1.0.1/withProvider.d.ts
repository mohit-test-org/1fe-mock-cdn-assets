import React from 'react';
import { WidgetProps } from './contract';
/**
 * Wrap the application code in the various app level providers
 */
export declare const withProvider: (Component: React.FC<WidgetProps>) => (props: WidgetProps) => React.ReactElement;
