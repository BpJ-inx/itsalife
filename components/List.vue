<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <img :src="product.thumbnail" />
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}$</p>
      <button>В карзину</button>
      <NuxtLink :to="`/products/${product.id}`">Детальная информация</NuxtLink>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const products = ref([]);

    const fetchProd = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      products.value = data.products;
    };
    fetchProd();
    return {
      products,
    };
  },
};
</script>
