<template>
  <div>
    This is navbar
    <ul>
      <li @click="goTo('Home')">Home</li>
      <li @click="goTo('Chats')">Chat</li>
      <li @click="goTo('Setting')">Setting</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const $router = useRouter()
  const goTo =(name) =>{
    $router.push({ name: name})
  }
</script>

<style>

</style>