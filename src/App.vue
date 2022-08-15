<template>
  <!-- <div id="main"> -->
    <!-- <h1>GOD</h1>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div> -->

    <Header />
    <router-view></router-view>
  <!-- </div> -->
</template>

<script>
import myHeader from "./components/Sections/Header.vue";
export default {
  name: "App",
  components: {
    Header : myHeader,
  },
};
</script>

<style>
#main {
  margin: 20px;
  padding: 10px;
  background-color: rgb(236, 236, 236);
}
</style>