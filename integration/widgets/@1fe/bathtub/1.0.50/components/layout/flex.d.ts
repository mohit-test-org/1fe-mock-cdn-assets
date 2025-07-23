import { BoxProps } from "./box";
type Justify = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type Align = "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
declare const Flex: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BoxProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme;
} & {
    justify?: Justify;
    align?: Align;
    flex: string;
}, {}, {}>;
declare const Row: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BoxProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme;
} & {
    justify?: Justify;
    align?: Align;
    gap?: string;
    wrap?: string;
}, {}, {}> & {
    Flex: typeof Flex;
};
declare const Column: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BoxProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme;
} & {
    justify?: Justify;
    align?: Align;
    gap?: string;
}, {}, {}> & {
    Flex: typeof Flex;
};
export { Column, Row };
