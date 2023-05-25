<template>
  <div class="chat">
    <div class="list">
      <input type="text" class="searchInput" placeholder="Поиск">
      <div v-for="(contact, index) in contacts" :key="index" class="contactCard">
        <div class="d-flex">
          <img :src="contact.img" alt="" class="avatar">
          <div class="ml10 mt10">
            <span>{{ contact.name }}</span> 
            <span class="text-muted fs12 f-right">{{ contact.last_seen }}</span>
            <br>
            <span class="text-muted fs12">
              {{ contact.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      
    </div>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  { id: 1, name:"Toshev G'aybullo", description:'Ipoteka krediti olmoqchi edim', last_seen:'15:30', img:'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'},
  { id: 2, name:'Munisa Ergasheva', description:'Добрый день! Подскажите, пожадуйста', last_seen:'12:30', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIyqWfILYR2-i9tXjJxSA_SrgclY9z5Y1GSsQe5BIlOmHTGyqUegnK-8OrmKUCB-CCI&usqp=CAU'}
]
</script>

<style>

</style>