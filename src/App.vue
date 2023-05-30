<script setup>
</script>

<template>
<nav>
  <router-link to="/">Home</router-link>
  &nbsp;
  <router-link to="/months">Calendar</router-link>
  &nbsp;
  <router-link to="/days">Days</router-link>
</nav>
<router-view />
</template>

<style>
 body {
  background-color: #0f0e17;
  color: white;
  font-family: 'Nunito', sans-serif;
  text-align: center;
} 
</style>