<template>
  <div class="col-md-4" v-for="post in posts" :key="post.id">
    <postCardViwe :post="post" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import PostCardViwe from "../../components/Posts/cardview.vue";
import { useRoute } from "vue-router";

export default {
  name: "AB",
  components: {
    PostCardViwe,
  },
  setup() {
    const posts = ref([]);
    const route = useRoute();

    console.log(route.params);
    // Make a request for a user with a given ID
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          // console.log(response.data);
          posts.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    // console.log(route)
    getPosts();
    return { posts, axios, useRoute, route };
  },
};
</script>

<style>
</style>