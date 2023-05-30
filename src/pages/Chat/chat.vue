<template>
  <div v-if="chat" class="chatContent">
    <div class="chatHeader">
      <span>{{chat.name}}</span> <br>
      <span class="text-muted fs12">{{chat.last_seen}}</span>
    </div>
    <div class="chat-body">
      <div class="chat-messages">
        <div v-for="message in chat.data" :key="message.id" class="chat-message"  :class="isSelf(message)?'my-chat-message':''">
          {{ message.message }}
        </div>
      </div>
    </div>
    <div class="chatFooter">
      <input class="messageInput" v-model="message" placeholder="Сообщение">
      <button @click="sendMessage" class="sendBtn"><img src="@/assets/images/send.svg" alt=""></button>
    </div>
  </div>
</template>

<script lang="ts">
import {  ref, reactive, defineComponent, computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useChatStore } from '@/store/chat'

export default defineComponent({
  name: 'Contacts',
  setup: () => {
    const storeChat = useChatStore()
    storeChat.addItem()
    const chatInfo = ref(storeChat.chats)
    const route = useRoute()
    const message = ref('')
    const chat = computed(() => {
      const id = +route.params.id;
      return chatInfo.value.find((el) => el.id === id);
    })
    const state = reactive({
      isSelf(message){
        if (message.from_user_id == 1) {// Condition if currentUserId equal to message.from_user_id
          return true
        } else {
          return false
        }
      },
      sendMessage(){
        chat.value.data.push({
          id: chatInfo.value.length+1,
          chat_id: chat.value?.id||1,
          from_user_id: 1,
          message: message.value,
          is_showed: false,
          showed_at: "",
          created_at: "2023-05-04 18:42:43",
          updated_at: "2023-05-04 18:42:46" 
        })
        message.value = ''
      }
    })
    return { storeChat, chat, chatInfo, message, ...toRefs(state) }
  }
})
</script>
