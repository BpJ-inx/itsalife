<template>
  <List />
</template>

<script setup>
import { useCart } from "@/store/index";

const cartStore = useCart();
onBeforeMount(() => {
  cartStore.loadCart();
});

useHead({
  title: "Список продуктов",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Показ всех продуктов из API",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "товары, описание",
    },
    {
      hid: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
