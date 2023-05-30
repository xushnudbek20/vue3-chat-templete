<template>
  <div class="list">
    <input type="text" class="searchInput" placeholder="Поиск" />
    <div v-for="(contact, index) in contactsList" :key="index" class="contactCard" @click="openChat(contact.id)">
      <div class="d-flex">
        <img :src="contact.img" alt="" class="avatar" />
        <div class="ml10 mt10">
          <span>{{ contact.name }}</span>
          <span class="text-muted fs12 f-right">{{ contact.last_seen }}</span>
          <br />
          <span class="text-muted fs12">
            {{ contact.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent, reactive, toRefs, } from 'vue'
import contacts from "@/assets/data/contacts"
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Contacts',
  setup: () => {
    const contactsList = contacts
    const router = useRouter()
    const state = reactive({
      openChat(id:number){
        router.push({name: 'Chat', params: {id} });
      }
    })

    return { contactsList, ...toRefs(state) }
  }
})
</script>
