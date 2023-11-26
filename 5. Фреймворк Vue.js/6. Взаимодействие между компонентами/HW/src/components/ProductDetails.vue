<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>Price: {{ formattedPrice }}</p>
      <p>Status: {{ product.available ? 'Available' : 'Out of stock' }}</p>
    </div>
  </template>

  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedPrice() {
        // Предполагается, что в объекте "product" есть свойство "price"
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(this.product.price);

        return formatted;
      }
    }
  };
  </script>
