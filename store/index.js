//                                       setup state
// import { defineStore } from "pinia";
// import { ref } from "vue";

// export const useCart = defineStore("cart", () => {
//   const cart = ref([]);

//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("cart")) {
//       cart.value = JSON.parse(localStorage.getItem("cart"));
//     }
//   }

//   const addToCart = (product) => {
//     let itemInCard = cart.value.find((item) => item.id === product.id);
//     if (itemInCard) {
//       itemInCard.kolvo += 1;
//     } else {
//       cart.value.push({ ...product, kolvo: 1 });
//     }
//     localStorage.setItem("cart", JSON.stringify(cart.value));
//   };

//   const delFromCart = (prodId) => {
//     let itemInCard = cart.value.find((item) => item.id === prodId);

//     if (itemInCard.kolvo > 1) {
//       itemInCard.kolvo -= 1;
//     } else {
//       cart.value = cart.value.filter((item) => item.id !== prodId);
//     }
//     localStorage.setItem("cart", JSON.stringify(cart.value));
//   };

//   const cleaerAllCart = () => {
//     cart.value = [];
//     localStorage.setItem("cart", JSON.stringify(cart.value));
//   };

//   return {
//     addToCart,
//     delFromCart,
//     cart,
//     cleaerAllCart,
//   };
// });

//                                        option state
import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(product) {
      let itemInCard = this.cart.find((item) => item.id === product.id);
      if (itemInCard) {
        itemInCard.kolvo += 1;
      } else {
        this.cart.push({ ...product, kolvo: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    delFromCart(prodId) {
      let itemInCard = this.cart.find((item) => item.id === prodId);

      if (itemInCard.kolvo > 1) {
        itemInCard.kolvo -= 1;
      } else {
        this.cart = this.cart.filter((item) => item.id !== prodId);
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    cleaerAllCart() {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    loadCart() {
      if (typeof window !== "undefined" && localStorage.getItem("cart")) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }
    },
  },

  getters: {
    // тут наверно надо было сделать подсчет общей суммы но он у меня считается на странице корзины
    // total(state) {
    //     return state.cart
    //       .reduce((total, item) => total + item.price * item.kolvo, 0)
    //       .toFixed(2);
    //   },
  },
});
