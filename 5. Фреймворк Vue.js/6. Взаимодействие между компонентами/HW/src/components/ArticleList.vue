<template>
    <div class="articles">
      <ul>
        <li v-for="article in articles" :key="article.id">{{ article.title }}</li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    name: 'ArticleList',
    props: {
      articles: {
        type: Array,
        required: true,
      },
    },
  };
  </script>

  <style>
  /* Ваш стиль */
  </style>
