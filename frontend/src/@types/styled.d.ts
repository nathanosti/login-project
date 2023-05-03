// ** Styled Components Imports
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string
      primary: {
        default: string,
        light: string
      };
      border: {
        default: string
      }
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string
      };
      background: {
        default: string
      }
    };
  }
}
