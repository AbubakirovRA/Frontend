<template>
    <div>
      <Header />
      <div class="content">
        <h2>404 Page Not Found</h2>
      </div>
      <Footer />
    </div>
  </template>

  <script>
  import Header from './HeaderComponent.vue';
  import Footer from './FooterComponent.vue';

  export default {
    components: {
      Header,
      Footer
    }
  };
  </script>

  <style scoped>
  .content {
    /* Стили для основного содержимого страницы */
  }
  </style>
