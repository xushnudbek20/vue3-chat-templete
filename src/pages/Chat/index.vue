<template>
  <div class="chat">
    <Contacts />
    <Chat v-if="route.params.id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Chat from './chat.vue'
import Contacts from './contacts.vue'
const route = useRoute()
</script>
