<script setup>
import {ref} from 'vue'
let data = ref()
let year = ref()
let month = ref()
let day = ref()


async function fetchData() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=" + year.value + "&month=" + month.value + "&day=" + day.value)
  console.log(result)
  data.value = await result.json()
}
function showData() {
  alert(data.value)
}
</script>

<template class="max">
<div id="outerPad">
  <nav>
    <div class="navIn">
      <router-link to="/" class="navB">Home</router-link>
      &nbsp;
      <router-link to="/holidays" class="navB">Holidays</router-link>
    </div>
  </nav>
</div>
{{ data }}
<router-view />
<br><br>
<hr class="max">
<footer class="v-container">
  Copyright © Carlos Vásquez. All Rights Reserved
</footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
 body {
  background-color: #0f0e17;
  color: white;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  }
  /* #outerPad {
    background-color: white;
    padding: 10px;
    border-radius: 8px;
  } */
  nav {
    padding: 10px;
    background-color: #1f1d30;
    border-radius: 8px;
  }
  .navIn {
    background-color: #403c63;
    padding: 8px;
    border-radius: 8px;
    word-spacing: 30px;
    max-width: 1050px;
    margin: auto;
  }
  .navB {
    text-decoration: none;
    color: black;
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
  hr {
    border: 1px solid #2b2655;
  }
  .max {
    max-width: 1080px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>