type TextProps = {
    margin?: string;
    padding?: string;
    overflow?: string;
    color?: string;
    ["data-qa"]?: string;
};
declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TextProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export { Text, type TextProps };
