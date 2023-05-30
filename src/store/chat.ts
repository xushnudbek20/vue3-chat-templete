import { defineStore } from 'pinia'
import ChatsData from "@/assets/data/chats"
import Chats from "@/Interfaces/chat";

export const useChatStore = defineStore('storeId', {
  state: () => ({
    chats: []
  }),
  getters: {
    CHATS: (state): Array<Chats> => state.chats
  },
  actions: {
    addItem() {
      this.chats = ChatsData
    },
  }
})
