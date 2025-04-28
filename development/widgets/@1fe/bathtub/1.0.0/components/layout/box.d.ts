type BoxProps = {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    overflow?: string;
    position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
    border?: string;
    ['data-qa']?: string;
};
declare const Box: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BoxProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Center: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BoxProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export { Box, Center, type BoxProps };
