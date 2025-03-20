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
        font-size: 24px;
        font-weight: 600;
        line-height: 24px;
    `,
    title2: css`
        font-size: 22px;
        font-weight: 600;
        line-height: 24px;
    `,
    title3: css`
        font-size: 18px;
        font-weight: 600;
        line-height: 18px;
    `,
    body1: css`
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
    `,
    body2: css`
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
    `,
    body2Bold: css`
        font-size: 14px;
        font-weight: bold;
        line-height: 14px;
    `,
    caption: css`
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
    `,
    small: css`
        font-size: 10px;
        font-weight: 500;
        line-height: 10px;
    `
};

export type ColorTypes = typeof colors;
export type TypographyType = typeof typography;

export const theme: DefaultTheme = {
    colors,
    typography,
};
