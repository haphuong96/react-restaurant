import type { BaseTranslation } from "../i18n-types";

const en = {
  // TODO: your translations go here
  navbar: {
    home: "Home",
    menu: "Menu",
    about: "About",
    promotion: "Promotion",
  },
  homepage: {
    jumbotron: {
      delicious_delights_shared_moments: "Delicious Delights, Shared Moments",
      order_now: "Order now",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    best_seller: "Best seller",
    our_menu: "Our menu",
    menu_category: {
      low_price: "Low price",
      high_price: "High price",
      average_price: "Average price",
      luxury_price: "Luxury price",
      explore: "Explore",
    },
    qr: {
      available_for: "LA PLANCHE IS AVAILABLE FOR ANDROID AND IOS",
      android: "Android",
      ios: "IOS",
    },
  },
  common: {
    add_to_cart: "Add to Cart",
  },
  footer: {
    categories: "CATEGORIES",
    information: "INFORMATION",
    address: "61 Montée Des Amandiers 26110 Saint-Maurice Sur EyguesFrance",
    company_name: "La Planche",
  },
} satisfies BaseTranslation;

export default en;
