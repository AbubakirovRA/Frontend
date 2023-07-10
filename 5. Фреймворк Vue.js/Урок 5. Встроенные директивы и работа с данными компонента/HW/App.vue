<template>
  <div id="app">
    <ProductDetails :product="productData" />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

export default {
  name: 'App',
  components: {
    ProductDetails
  },
  data() {
    return {
      productData: {
        name: 'Example Product',
        price: 99.99,
        available: true
      }
    };
  }
};
</script>
