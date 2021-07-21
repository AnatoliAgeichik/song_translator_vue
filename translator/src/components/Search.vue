<template>
    <form>
        <div class="form-group m-4">
            <label for="exampleInputEmail1">Search</label>
            <input type="text" class="form-control" ref="search_input">
            <button @click.prevent="getSearch()">Search</button>
        </div>
    </form>
</template>

<script>

export default{
    name:"Search",

    methods:{
        getSearch(){
            this.$emit('getSearch', this.$refs.search_input.value)
        }
    }
}
</script>
