<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <router-view />
    </main>
    <FooterInfo />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterInfo from './components/FooterInfo.vue'
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
