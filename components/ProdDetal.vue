<template>
  <div v-if="product">
    <img :src="product.thumbnail" alt="Product Image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}$</p>
    <button @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useCart } from "~/store";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const product = ref(null);
    const cartStore = useCart();

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    const fetchProduct = async (id) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      product.value = data;
    };

    onMounted(() => {
      fetchProduct(props.id);
    });

    useHead({
      title: `название продукта`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `описание`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `товар`,
        },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });

    return { product, addToCart };
  },
};
</script>

<style scoped></style>
