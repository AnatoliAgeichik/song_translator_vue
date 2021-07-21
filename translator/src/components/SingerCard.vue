<template>
  <div class="card text-center p-3 mt-3 m-auto" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <router-link :to="{name: 'Singer', params: {id: id, name: name}}" class="btn btn-primary">Go somewhere</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingerCard",
  props: {
    name: String,
    id: Number,
  },
};
</script>
