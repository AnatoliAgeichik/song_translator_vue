<template>
    <div class="card">
        <div class="card-header">
            {{title}}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
        </div>
    </div>
</template>

<script>

export default {
  name: "DetailSingers",
  props: {
    name: String,
    id: Number,
  },
};

</script>
