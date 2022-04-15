<template>
  <LeftSection />
  <RightSection />
</template>
<script>
import LeftSection from '../components/LeftSection.vue'
import RightSection from '../components/RightSection.vue'
export default {
  name: 'MainContent',
  components: {
    LeftSection,
    RightSection,
  },
}
</script>
