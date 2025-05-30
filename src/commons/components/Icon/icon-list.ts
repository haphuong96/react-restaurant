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
import Facebook from "./icons/dir/facebook.svg?react";
import Twitter from "./icons/dir/twitter.svg?react";
import Instagram from "./icons/dir/instagram.svg?react";
import MenuLine from "./icons/dir/menu/menu-line.svg?react";
import PasswordVisible from "./icons/dir/visibility.svg?react";

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
  "menu-line": MenuLine,

  //home
  android: Android,
  ios: Ios,

  "media-facebook": Facebook,
  "media-twitter": Twitter,
  "media-instagram": Instagram,

  // authen
  "password-visible": PasswordVisible,
};

export type IconName = keyof typeof ICONS;
