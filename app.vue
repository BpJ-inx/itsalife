<template>
  <div>
    <button><NuxtLink to="/cart">Корзина</NuxtLink></button>
    <NuxtPage to="/" />
  </div>
</template>
<script setup>
import { useCart } from "@/store/index";

const cartStore = useCart();
onBeforeMount(() => {
  cartStore.loadCart();
});
</script>
