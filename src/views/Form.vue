<script setup>
import {ref} from 'vue'
let data = ref("Enter your request above!")
let year = ref()
let month = ref()
let day = ref()

async function fetchData() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=" + year.value + "&month=" + month.value + "&day=" + day.value)
  let json = await result.json()

  // let str = ""
  // json.forEach((ob) => {
  //   str = str + ob.name + "\n"
  // })

  // console.log(str)

  data.value = json

};

function submit() {
  fetchData()
};

</script>

<template>
<h3>
  Input your request below to find holidays at any date that you input.
</h3>
<br><br>
<div>
  <label for="Day">Day</label>
  <input type="text" name="Day" v-model="day" placeholder="1" class="input">
  <label for="Month">Month</label>
  <input type="text" name="Month" v-model="month" placeholder="12" class="input">
  <label for="Year">Year</label>
  <input type="text" name="Year" v-model="year" placeholder="2012" class="input">
  <br><br>
  <button @click="submit()" class="input">Submit</button>

  <h3 style="margin-top: 15px;">
    {{ data }}
  </h3>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.input {
    background-color: #040318;
    color: #fffffe;
    font-family: 'Nunito', sans-serif;
    border: 3px;
    border-color: #2e375e;
    border-style: solid;
    border-radius: 9px;
    padding: 8px;
    margin-left: 5px;
    margin-right: 5px;;

}

input:focus {
    border: rgb(34, 32, 32) 5px solid;
    cursor: pointer;
}
</style>