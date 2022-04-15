<template>
  <header>
    <MainLogo />
    <HeaderRight />
  </header>
</template>
<script>
import MainLogo from '../header/MainLogo.vue'
import HeaderRight from '../header/HeaderRight.vue'

export default {
  name: 'TopHeader',
  components: {
    MainLogo,
    HeaderRight,
  },
}
</script>
