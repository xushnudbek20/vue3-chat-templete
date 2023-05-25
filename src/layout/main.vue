<template>
  <div id="main">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<style>

</style>