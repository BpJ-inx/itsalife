<template>
  <div v-if="product">
    <img :src="product.thumbnail" alt="Product Image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}$</p>
    <button>В корзину</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const product = ref(null);

    const fetchProduct = async (id) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      product.value = data;
    };

    onMounted(() => {
      fetchProduct(props.id);
    });

    return {
      product,
    };
  },
  head() {
    const product = this.product;
    return {
      title: `${product.title} `,

      meta: [
        {
          hid: "description",
          name: "description",
          content: product.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${product.title} `,
        },
        { hid: "author", name: "author", content: "Ваше Имя" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
