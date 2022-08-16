<template>
  <div class="col-md-4">
    <postCardViwe :post="post" />
    <div class="card-footer">
      <button class="btn btn-sm btn-dark me-4">Edit</button>
      <button class="btn btn-sm btn-danger">Delet</button>
    </div>
  </div>
</template>

<script>
// const axios = require('axios').default;
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
    const post = ref({});
    const route = useRoute();
    // console.log(route.params.id)
    // Make a request for a user with a given ID
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          // console.log(response.data);
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPost();
    return { post, axios /* useRoute */ };
  },
};
</script>

<style>
</style>