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
    return { route };
  },
};
</script>

<style lang="scss" scoped></style>
