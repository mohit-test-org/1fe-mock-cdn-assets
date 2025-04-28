import { PlatformPropsType } from '@devhub/1fe-shell';
export type HostPropsContract = {};
export interface WidgetProps {
    host: HostPropsContract;
    platform: PlatformPropsType;
}
