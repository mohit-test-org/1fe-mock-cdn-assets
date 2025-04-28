import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PlatformPropsType } from '@devhub/1fe-shell';

declare type HostPropsContract = {};

declare function Root(props: WidgetProps): JSX_2.Element;
export default Root;

declare type WidgetProps = {
    host: HostPropsContract;
    platform: PlatformPropsType;
};

export { }
