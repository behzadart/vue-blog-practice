<template>
  <div class="col-md-6">
    <h2 class="mb-5">Create Post</h2>
  </div>
  <div class="mb-3">
    <form @submit.prevent="validate">
      <label class="form-label">Title</label>
      <input
        class="form-control"
        placeholder="input a title"
        type="text"
        v-model="form.title"
      />
      <p class="text-danger">{{ form.titleErrorText }}</p>
      <label class="form-label">Body</label>
      <textarea class="form-control" rows="3" v-model="form.body">
input body of post</textarea
      >
      <p class="text-danger">{{ form.bodyErroreText }}</p>
      <button type="submit" class="btn btn-dark mt-2" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      title: "",
      body: "",
      titleErrorText: "",
      bodyErroreText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "please enter title";
      } else {
        form.titleErrorText = "";
      }

      if (form.body === "") {
        form.bodyErroreText = "please enter body";
      } else {
        form.bodyErroreText = "";
      }

      if (form.title !== "" && form.body !== "") {
        console.log(form.title, " - ", form.body);
        loading.value = true;
        createPost();
      }
    }
    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function (response) {
          console.log(response.data);
          loading.value = false;
          Swal.fire({
            title: "Thanks!",
            text: "Post Created Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { form, validate, axios, loading };
  },
};
</script>

<style>
</style>