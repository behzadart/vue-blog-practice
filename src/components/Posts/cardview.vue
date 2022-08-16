<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">
      <router-link :to="{name : 'postId', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ post.body }}</li>
      <li class="list-group-item">post ID : {{ post.id }}</li>
 
    </ul>

  </div>
</template>

<script>
export default {
  name: "aB",
  props: {
    post: Object,
  },
};
</script>

<style>
</style>