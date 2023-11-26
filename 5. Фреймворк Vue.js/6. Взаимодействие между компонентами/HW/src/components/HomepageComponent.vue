<template>
  <div>
    <!-- Ваш контент компонента Homepage -->
    <button @click="goToProjectDetails">Go to Project Details</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjectDetails() {
      this.$router.push('/project-details');
    }
  }
};
</script>
