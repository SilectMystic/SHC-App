<script setup>
import {ref} from 'vue'
let data = ref()

async function fetchData() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=2023&month=6&day=5")
  console.log(result)
  data.value = result
}
</script>

<template>
<div id="outerPad">
  <nav>
    <router-link to="/" class="navB">Home</router-link>
    &nbsp;
    <router-link to="/months" class="navB">Months</router-link>
    &nbsp;
    <router-link to="/days" class="navB">Days</router-link>
    &nbsp;
    <button @click="fetchData()">Fetch</button>
  </nav>
</div>
<br>
{{ data }}
<router-view />
<br><br>
<hr>
<footer class="v-container">
  Copyright © Carlos Vasquez. All Rights Reserved
</footer>
</template>

<style>
 body {
  background-color: #0f0e17;
  color: white;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  }
  #outerPad {
    background-color: white;
    padding: 10px;
    border-radius: 8px;
  } 
  nav {
    background-color: orange;
    padding: 8px;
    border-radius: 8px;
    word-spacing: 30px;
    max-width: 1050px;
    margin: auto;
  }
  .navB {
    text-decoration: none;
  }
  .navB:hover {
    color: white;
  }
  #navLogo {
    height: 35px;
    width: auto;
    margin-top: auto;
    margin-bottom: auto;
    float: left;
  }
</style>