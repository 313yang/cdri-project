import { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const colors = {
    primary: '#4880EE',
    red: '#E84118',
    gray: '#DADADA',
    lightGray: "#F2F4F6",
    white: '#ffffff',
    black: "#222222",
    text: {
        primary: '#353C49',
        secondary: '#6D7582',
        subtitle: '#8D94A0'
    }
};

const typography = {
    title1: css`
        font-size: 32px;
        font-weight: bold;
    `,
    title2: css`
        font-size: 26px;
        font-weight: bold;
    `,
    title3: css`
        font-size: 18px;
        font-weight: 600;
    `,
    body1: css`
        font-size: 16px;
        font-weight: 400;
    `,
    body2: css`
        font-size: 16px;
        font-weight: 400;
    `,
    body2Bold: css`
        font-size: 16px;
        font-weight: bold;
    `,
    caption: css`
        font-size: 14px;
        font-weight: 400;
    `,
    small: css`
        font-size: 12px;
        font-weight: 400;
    `
};

export type ColorTypes = typeof colors;
export type TypographyType = typeof typography;

export const theme: DefaultTheme = {
    colors,
    typography,
};
