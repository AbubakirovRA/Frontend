<!-- <template>
  <div id="app">
    <h1>Article Viewer</h1>
    <tag-list @tagSelected="onTagSelected"></tag-list>
    <article-list :articles="filteredArticles"></article-list>
  </div>
</template>

<script>
import TagList from './components/TagList.vue';
import ArticleList from './components/ArticleList.vue';

export default {
  components: {
    TagList,
    ArticleList,
  },
  data() {
    return {
      selectedTag: '',
      articles: [
        { id: 1, title: 'Article 1', tags: ['Tag 1', 'Tag 2'] },
        { id: 2, title: 'Article 2', tags: ['Tag 2', 'Tag 3'] },
        { id: 3, title: 'Article 3', tags: ['Tag 1', 'Tag 3'] },
        { id: 4, title: 'Article 4', tags: ['Tag 2'] },
        { id: 5, title: 'Article 5', tags: ['Tag 1'] },
      ],
    };
  },
  computed: {
    filteredArticles() {
      if (this.selectedTag) {
        return this.articles.filter(article => article.tags.includes(this.selectedTag));
      } else {
        return this.articles;
      }
    },
  },
  methods: {
    onTagSelected(tag) {
      this.selectedTag = tag;
    },
  },
};
</script>

<style>
/* Ваш стиль */
</style> -->


<!-- <template>
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
</script> -->

<!-- <template>
  <div id="app">
    <Header />
    /* Основное содержимое страницы */
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
</style> -->

<template>
  <div id="app">
    <Header />
    <router-view />
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
