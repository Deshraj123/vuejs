<template>
  <main>
    <MainContent />
  </main>
</template>
<script>
import MainContent from '../components/MainContent.vue'
export default {
  name: 'HomeView',
  components: {
    MainContent,
  },
}
</script>
<style>
main {
  display: grid;
  grid-template-columns: 160px 1fr;
}
</style>
