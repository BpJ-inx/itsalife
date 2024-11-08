<template>
  <div>
    <h1>Корзина</h1>

    <div v-if="cartStore.cart.length === 0">Корзина пуста</div>
    <div v-else>
      <button @click="clearAllCart()">Очистить корзину</button>
      <div v-for="item in cartStore.cart" :key="item.id">
        <img :src="item.thumbnail" alt="Product Image" />
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
        <p>{{ item.price }}$</p>
        <p>Количество {{ item.kolvo }}</p>
        <!-- <p>{{ item.price * item.kolvo }}$</p> -->
        <button @click="removeFromCart(item.id)">Удалить</button>
      </div>
      <p>ИТОГО : {{ total }}$</p>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "~/store/index";

const cartStore = useCart();

const removeFromCart = (productId) => {
  cartStore.delFromCart(productId);
};

const clearAllCart = () => {
  cartStore.cleaerAllCart();
};

const total = computed(() => {
  return cartStore.cart
    .reduce((total, item) => total + item.price * item.kolvo, 0)
    .toFixed(2);
});
</script>

<style lang="scss" scoped></style>
