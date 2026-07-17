export const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN").format(price);
  
  export const capitalize = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);