import type { Translation } from "../i18n-types";

const fr = {
  navbar: {
    home: "Accueil",
    menu: "Menu",
    about: "À propos",
    promotion: "Promotion",
  },
  homepage: {
    jumbotron: {
      delicious_delights_shared_moments: "Délices gourmands, moments partagés",
      order_now: "Commander maintenant",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    best_seller: "Meilleures ventes",
    our_menu: "Notre menu",
    menu_category: {
      low_price: "Prix bas",
      high_price: "Prix élevé",
      average_price: "Prix moyen",
      luxury_price: "Prix de luxe",
      explore: "Explorer",
    },
    qr: {
      available_for: "LA PLANCHE EST DISPONIBLE POUR ANDROID ET IOS",
      android: "Android",
      ios: "IOS",
    },
  },
  common: {
    add_to_cart: "Ajouter au panier",
  },
  footer: {
    categories: "CATÉGORIES",
    information: "INFORMATIONS",
    address: "61 Montée Des Amandiers 26110 Saint-Maurice Sur EyguesFrance",
    company_name: "La Planche",
  },
} satisfies Translation;

export default fr;
