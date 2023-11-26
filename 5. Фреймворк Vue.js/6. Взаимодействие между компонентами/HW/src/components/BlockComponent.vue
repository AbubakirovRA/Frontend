<template>
    <div class="block">
      <div v-if="pageTitle" class="page-title">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      pageTitle: String
    }
  };
  </script>

  <style scoped>
  .block {
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    /* Дополнительные стили для блока */
  }
  .page-title {
    padding: 20px;
    /* Стили для заголовка страницы */
  }
  .page-title h1 {
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: left;
  }
  .content {
    padding: 20px;
  }
  </style>
