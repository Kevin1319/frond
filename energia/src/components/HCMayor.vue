<template>

    <div>
            <LineChart :chartdata="datacollection" :options="options"/>
    </div>
    
</template>

<script>
import LineChart from './LineChart.js'

export default {
        name: 'registerDevices'
    ,
    components: {
      LineChart
    },
    props: {
    },
    data(){
        return{
            token: sessionStorage.token,
            hola:"",

            datacollection:NULL,
            loaded: false,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }

        }
    },
    mounted(){
        this.fillData()
    },
    methods:{
        fillData(){
            this.datacollection= {
                labels:[0,1,2,3,4,5,6,7,8,9],
                datasets:[
                    {
                        label:'Ayudas',
                        backgroundColor:'red',
                        data: [0,1,2,3,4,5,6,7,8]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    @import '../assets/cssHomePage.css';
    .dataInput{
        border: 0px solid
    }
</style>