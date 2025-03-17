import 'styled-components';
import { ColorTypes, TypographyType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorTypes;
        typography: TypographyType;
    }
}