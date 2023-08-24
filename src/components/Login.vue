<template>
<div style="height: 100vh;background-image:url(../../public/RE4wqHk.jpg)">
  <el-row justify="center" align="middle" style="height: 100%">
    <el-col :xs="24" :sm="12" :md="10" :lg="8" :xl="6" style="background-color:white">
      <h1 style="text-align: center;">登录界面</h1>
      <el-row>
        <el-col :span="2" :offset="1"><el-tag size="large">用户名</el-tag></el-col>
        <el-col :span="18" :offset="2"><el-input v-model="username" placeholder="Please input username"></el-input></el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="2" :offset="1"><el-tag size="large">密码</el-tag></el-col>
        <el-col :span="18" :offset="2"><el-input type="password" placeholder="Please input password" v-model="password"></el-input></el-col>
      </el-row>
      <br>
      <el-row justify="center">
        <el-col :span="2"><el-button type="primary" @click="DengLu">登录</el-button></el-col>
        <el-col :offset="6" :span="2"><el-button type="primary">注册</el-button></el-col>
      </el-row>
      <br>
    </el-col>
  </el-row>   
</div>



</template>


<script setup>
import {ref} from 'vue'
import axios from 'axios';
const username=ref('');
const password=ref('');

function DengLu(){
  axios.get('/')
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}
</script>

<style scoped>


</style>