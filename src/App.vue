<template>
  <TopHeader />
  <RouterView />
</template>
<script>
import TopHeader from './components/partials/TopHeader.vue'
export default {
  name: 'App',
  components: {
    TopHeader,
  },
}
</script>
<style>
@import '@/assets/base.css';
#app {
  font-weight: normal;
  background-color: #e5e5e5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: #000000;
  transition: 0.4s;
}

.header-profile {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

header {
  display: flex;
  place-items: center;
  padding: 25px 30px;
  justify-content: space-between;
}

.bell-icon {
  height: 30px;
  width: 30px;
  display: inline-block;
}

.profile-img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: 20px;
  margin-right: 13px;
}

.profile-name {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
