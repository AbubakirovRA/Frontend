Vue.component('tags', {
  data() {
    return {
      selectedTag: null,
      tags: ['Tag1', 'Tag2', 'Tag3']
    };
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
      this.$emit('select-tag', tag);
    }
  },
  template: `
    <div>
      <h2>Tags</h2>
      <ul>
        <li v-for="tag in tags" :key="tag" @click="selectTag(tag)" :class="{ 'active': selectedTag === tag }">{{ tag }}</li>
      </ul>
    </div>
  `
});

Vue.component('article-list', {
  props: ['articles'],
  template: `
    <div>
      <h2>Articles</h2>
      <ul>
        <li v-for="article in articles" :key="article.title">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
        </li>
      </ul>
    </div>
  `
});

new Vue({
  el: '#app',
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
});
