import "styled-components";
import { ITheme } from "./theme.types.ts";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
