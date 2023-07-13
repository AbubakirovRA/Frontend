<template>
    <div class="banner">
      <img :src="image" alt="Banner Image" />
    </div>
  </template>

  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      }
    }
  };
  </script>

  <style scoped>
  .banner {
    width: 100%;
    height: 122px;
    /* Дополнительные стили для баннера */
  }
  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
