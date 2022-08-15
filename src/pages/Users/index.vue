<template>
  <div class="container mt-5">
    <!-- {{axios}} -->
    <div class="row g-3">
      <div class="col-md-4">
        <!-- {{users}} -->
        <UserCardViwe v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require('axios').default;
import axios from "axios";
import { ref } from "vue";
import UserCardViwe from "../../components/users/cardview.vue";

export default {
  name: "AB",
  components: {
    UserCardViwe,
  },
  setup() {
    const users = ref([]);
    // Make a request for a user with a given ID
    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          // console.log(response.data);
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { users, axios };
  },
};
</script>

<style>
</style>