<template>
  <div>
    <tags @select-tag="updateSelectedTag"></tags>
    <article-list :articles="sortedArticles"></article-list>
  </div>
</template>

<script>
import Tags from './components/Tags.vue';
import ArticleList from './components/ArticleList.vue';

export default {
  components: {
    Tags,
    ArticleList
  },
  data() {
    return {
      articles: [
        { title: 'Article 1', content: 'Content 1', tags: ['Tag1'] },
        { title: 'Article 2', content: 'Content 2', tags: ['Tag2'] },
        { title: 'Article 3', content: 'Content 3', tags: ['Tag3'] }
      ],
      selectedTag: null
    };
  },
  methods: {
    updateSelectedTag(tag) {
      this.selectedTag = tag;
    }
  },
  computed: {
    sortedArticles() {
      if (this.selectedTag) {
        return this.articles.filter(article => article.tags.includes(this.selectedTag));
      } else {
        return this.articles;
      }
    }
  }
};
</script>
