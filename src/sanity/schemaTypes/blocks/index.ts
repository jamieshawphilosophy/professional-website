import { gridType } from "./grid";
import { layoutType } from "./layout";
import { menuType } from "./menu";
import { tabsType } from "./tabs";

export const defaultBlocks = [
  menuType,
  layoutType,
  gridType,
  tabsType,
] as const;
