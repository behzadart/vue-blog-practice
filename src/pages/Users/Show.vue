<template>
  <div class="container mt-5">
    <!-- {{axios}} -->
    <div class="row g-3">
      <div class="col-md-4">
          <UserCardViwe :user="user" />
        <!-- {{users}} -->
        <!-- <UserCardViwe v-for="user in users" :key="user.id" :user="user" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require('axios').default;
import axios from "axios";
import { ref } from "vue";
import UserCardViwe from "../../components/users/cardview.vue";
import { useRoute } from "vue-router";

export default {
  name: "AB",
  components: {
    UserCardViwe,
  },
  setup() {
    const user = ref({});
    const route = useRoute();
    // console.log(route.params.id)
    // Make a request for a user with a given ID
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          // console.log(response.data);
          user.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUser();
    return { user, axios, useRoute };
  },
};
</script>

<style>
</style>