<template>
  <div class="chatContent">
    <div class="chatHeader">
      <span>{{chat.name}}</span> <br>
      <span class="text-muted fs12">{{chat.last_seen}}</span>
    </div>
    <div class="chatBody">
      <ul>
        <li v-for="message in chat.data" :key="message.id" :class="isSelf(message)?'outgoing':'incoming'">
            {{ message.message }}
        </li>
      </ul>
    </div>
    <div class="chatFooter">
      <input class="messageInput">
    </div>
  </div>
</template>

<script lang="ts">
import Chats from "@/assets/data/chats"
import {  reactive, defineComponent, computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Contacts',
  props: {
  },
  setup: () => {
    const chatInfo:Array = Chats
    const route = useRoute()
    const chat = computed(() => chatInfo.find(el => el.id == route.params.id))
    const state = reactive({
      isSelf(message){
        if (message.from_user_id == 2) {// Condition if currentUserId equal to message.from_user_id
          return true
        } else {
          return false
        }
      }
    })
    return { chat, ...toRefs(state) }
  }
})
</script>