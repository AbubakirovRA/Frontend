<template>
  <div id="app">
    <Header />

    <!-- Основное содержимое страницы -->

    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Стили для всего приложения */
</style>
