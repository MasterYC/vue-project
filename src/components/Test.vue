<template>
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>
  <button @click="GoLogin">点我去登录</button>

</template>


<script setup>
import {ref,computed,reactive} from 'vue'
import { useRoute,useRouter } from 'vue-router';

const router=useRouter();
const route=useRoute();

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

function GoLogin(){
  router.push({
    path:'/Login'
  })
}
</script>