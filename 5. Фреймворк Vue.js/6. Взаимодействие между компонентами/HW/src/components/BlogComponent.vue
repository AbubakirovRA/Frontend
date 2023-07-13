<template>
    <div>
      <Header />
      <Banner image="blog-banner.jpg" />
      <Block page-title="Articles & News">
        <h2>Blog Content</h2>
      </Block>
      <Footer />
    </div>
  </template>

  <script>
  import Header from './HeaderComponent.vue';
  import Footer from './FooterComponent.vue';
  import Banner from './BannerComponent.vue';
  import Block from './BlockComponent.vue';

  export default {
    components: {
      Header,
      Footer,
      Banner,
      Block
    }
  };
  </script>

  <style scoped>
  /* Стили специфичные для страницы Blog */
  </style>
