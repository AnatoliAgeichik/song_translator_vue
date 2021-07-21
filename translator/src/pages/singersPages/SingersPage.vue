<template>
    <div>
        <Search @getSearch="search($event)"/>
        <SingerList :singers="singers"/>
        <div className="d-flex justify-content-around pb-3">
            <button type="button" class="btn btn-secondary" v-on:click="prevPage">Prev</button>
            <button type="button" class="btn btn-secondary" v-on:click="nextPage">Next</button>
            
        </div>
    </div>
</template>

<script>
import Search from '../../components/Search.vue'
import SingerList from '../../components/SingerList.vue'
    export default{
        components: {
            SingerList,
            Search
        },

        data() {
            return{
                singers:[],
                hasNext: Boolean,
                hasPrev: Boolean,
                next: String,
                prev:String,
                current:String,
            }
        },

        methods: {
            fetchData (){
                fetch(`http://localhost:8080/singers?&page=${this.$route.query.page}&search=${this.$route.query.search}`)
                    .then(response=>response.json())
                    .then((data)=>(
                        this.singers=data.data,
                        this.hasNext=data.pagination.hasNext,
                        this.hasPrev=data.pagination.hasPrev,
                        this.next=data.pagination.next,
                        this.current=data.pagination.currentPage,
                        this.prev=data.pagination.prev));
            },
            prevPage:function(){
                if (this.hasPrev){
                    this.$router.push({path: this.prev})
                    this.fetchData()
                }
            },

            nextPage: function(){
                if (this.hasNext){
                    this.$router.push({path: this.next})
                    this.fetchData()
                }
            },

            search(search)
            {
                this.$router.push({name: "Singers", query:{page:1, search: search}})
                this.fetchData()
            }

        },
        mounted(){
            this.fetchData()
        },
    }
</script>
