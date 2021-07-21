<template>
    <div>
        <div class="d-flex flex-column" v-for="singer in singers" :key="singer.id">
            <SingerCard class="d-flex justify-content-center" :name="singer.name" :id="singer.id"/>
        </div>       
    </div>
</template>

<script>
import SingerCard from './SingerCard.vue'

export default {
    name: 'SingerList',
    props:{
        singers:{
            type:Array,
        },
    },
    components:{
        SingerCard
    }
}
</script>
