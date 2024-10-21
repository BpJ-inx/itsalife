<template>
  <ProdDetal :id="route.params.id" />
</template>

<script>
import { useRoute } from "vue-router";
import ProdDetal from "@/components/ProdDetal.vue";

export default {
  components: {
    ProdDetal,
  },
  setup() {
    const route = useRoute();

    useHead({
      title: "Продукт",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "описание продукта",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "товар, описание",
        },
        { hid: "author", name: "author", content: "Ваше Имя" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
    return { route };
  },
};
</script>

<style lang="scss" scoped></style>
