<template>
  <div class="col-md-4" v-for="user in users" :key="user.id">
    <UserCardViwe :user="user" />
  </div>
</template>

<script>
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
    const users = ref([]);
    const route = useRoute();

    console.log(route.params);
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
    // console.log(route)
    getUsers();
    return { users, axios, useRoute, route };
  },
};
</script>

<style>
</style>