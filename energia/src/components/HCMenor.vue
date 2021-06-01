<template>
    <div class="navHomeVisual">
        <div class="registroDispositivo"> 
            <h1> Bienvenido {{name2}}, Tu balance de menor consumo </h1>
        </div>    

        <div> 
            <div class="small"> 
                aqui va la grafica 
                     
            </div>
            <div> 
                B
            </div>
         
        </div>
    </div>
    
    
</template>

<script>
import axios from "axios";


export default {
        name: 'registerDevices',
    components: {
    }
    ,
    props: {
    },
    data(){
        return{
            name2: sessionStorage.name,
            loaded: false,
            chartdata: {},
            corriente:[],
            bateria:[],
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods:{
    },
    async mounted(){
        await axios.get('http://localhost:3000/infosensores').then(response=>{
                for(const i in response.data){
                    console.log(response.data[i].corriente)
                    this.corriente.push(response.data[i].corriente)
                    this.bateria.push( response.data[i].bateria)
                }
        })

        console.log(this.corriente)
    }
}
</script>

<style scoped>
    @import '../assets/cssHomePage.css';
    .dataInput{
        border: 0px solid
    }
      .small {
    max-width: 600px;
    margin: 50px auto
  }
</style>