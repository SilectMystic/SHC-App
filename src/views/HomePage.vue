<template class="max">
<br>
<img src="/SHC.png" id="logo" alt="">
<h1>Welcome to the SHC</h1>
<br>
<h3>The app made to show you the holidays of any day that you search!</h3>
<br>
<hr class="max">
<br>
<h3 id="exam">Here is an example of how it works!</h3>
<h5 id="link">You can press Submit if you wanna try it out!</h5>
<br>
<div>
  <label for="Day">Day</label>
  <input type="text" name="Day" value="5" class="input">
  <label for="Month">Month</label>
  <input type="text" name="Month" value="5" class="input">
  <label for="Year">Year</label>
  <input type="text" name="Year" value="2023" class="input">
  <br><br>
  <router-link to="/holidays" class="input" style="text-decoration: none;"> Submit</router-link>

  <h3 style="margin-top: 15px;">
    <br>
    <p>Cinco de Mayo, Kentucky Oaks,</p>
  </h3>
</div>
</template>

<style>
#logo {
    width: 150px;
    height: auto;
}
#exam {
    padding: 8px;
    background-color: #232946;
    margin: auto;
    max-width: fit-content;
    border-radius: 8px;
}
#link{
    padding: 8px;
    background-color: #1f1d30;
    margin: auto;
    max-width: fit-content;
    border-radius: 8px;
}
.max {
  max-width: 1080px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>