/// <reference types="vite-plugin-svgr/client" />

import SliderChevronLeft from "./icons/arrows/slider-chevron-left.svg?react";
import SliderChevronRight from "./icons/arrows/slider-chevron-right.svg?react";
import MenuBag from "./icons/dir/menu/bag.svg?react";
import MenuFavorite from "./icons/dir/menu/favorite.svg?react";
import MenuPhone from "./icons/dir/menu/phone.svg?react";
import MenuUser from "./icons/dir/menu/user.svg?react";
import MenuLanguage from "./icons/dir/menu/english.svg?react";
import ProductRating from "./icons/dir/product/ProductRating";
import Menu from "./icons/dir/menu/menu.svg?react";
import Android from "./icons/dir/android.svg?react";
import Ios from "./icons/dir/ios.svg?react";

export const ICONS = {
  "slider-chevron-left": SliderChevronLeft,
  "slider-chevron-right": SliderChevronRight,

  // dir menu
  "menu-bag": MenuBag,
  "menu-favorite": MenuFavorite,
  "menu-phone": MenuPhone,
  "menu-user": MenuUser,
  "menu-language": MenuLanguage,
  "product-rating": ProductRating,
  "menu-bar": Menu,

  //home
  android: Android,
  ios: Ios,
};

export type IconName = keyof typeof ICONS;
