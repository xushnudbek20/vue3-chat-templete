<template>
  <div>
    <div class="text-center">
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="" class="navAvatar" />
      <p class="text-muted mt8">Анатолий Викторович</p>
    </div>

    <div class="menuItem" @click="goTo('Home')">
      <img src="@/assets/images/home.svg" width="26" alt="home" class="mr20">
      <span>Главный экран</span>
    </div>
    <div class="menuItem" @click="goTo('Chats')">
      <img src="@/assets/images/chat.svg" width="26" alt="chat" class="mr20">
      <span>Чат</span>
    </div>
    <div class="menuItem" @click="goTo('Setting')">
      <img src="@/assets/images/setting.svg" width="26" alt="setting" class="mr20">
      <span>Настройки</span>
    </div>
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