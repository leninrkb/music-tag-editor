<template>
  <NavbarHeader></NavbarHeader>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import NavbarHeader from './components/NavbarHeader.vue'
export default {
  name: "App",
  components: {
    NavbarHeader
  }
};
</script>
