<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">{{ user.name }}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID : {{ user.id }}</li>
      <li class="list-group-item">USER NAME : {{ user.username }}</li>
      <li class="list-group-item">EMAIL : {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "aB",
  props: {
    user: Object,
  },
};
</script>

<style>
</style>