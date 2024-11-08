import { defineStore } from "pinia";
import { ref } from "vue";

export const useCart = defineStore("cart", () => {
  const cart = ref([]);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart.value = JSON.parse(localStorage.getItem("cart"));
    }
  }

  const addToCart = (product) => {
    let itemInCard = cart.value.find((item) => item.id === product.id);
    if (itemInCard) {
      itemInCard.kolvo += 1;
    } else {
      cart.value.push({ ...product, kolvo: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const delFromCart = (prodId) => {
    let itemInCard = cart.value.find((item) => item.id === prodId);

    if (itemInCard.kolvo > 1) {
      itemInCard.kolvo -= 1;
    } else {
      cart.value = cart.value.filter((item) => item.id !== prodId);
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const cleaerAllCart = () => {
    cart.value = [];
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  return {
    addToCart,
    delFromCart,
    cart,
    cleaerAllCart,
  };
});
