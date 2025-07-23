import { PlatformPropsType } from '@1fe/shell';

export declare type HostPropsContract = Record<string, unknown>;

export declare type WidgetProps = {
    host: HostPropsContract;
    platform: PlatformPropsType;
};

export { }
