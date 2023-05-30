<template>
  <div id="main">
    <Header />
    <div class="d-flex">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
</script>

<style>

</style>