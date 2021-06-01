<template>
    <div class="navHomeVisual">
        <div class="registroDispositivo"> 
            <h1> Bienvenido {{name2}}, Registra tu dispositivo! </h1>
            <h2> Ingrese el tipo de dispositivo {{name}}</h2>
            <div>
                <input type="radio" v-model="transporte2" value="1" checked>Casa
                <input type="radio" v-model="transporte2" value="2" >Edificio
                <input type="radio" v-model="transporte2" value="3">Empresa
            </div>


            <input type="text" v-model="nameDevice" placeholder="Nombre del dispositivo" name="namedevice" class="boxRegisterItems"/>
            <input type="text" v-model="adress" placeholder="Dirrección" name="adress" class="boxRegisterItems"/>

            <button @click="registrar" class="botonRegister" >Registrarse</button>
        </div>    
    </div>
    
    
</template>

<script>
import axios from "axios";

export default {
        name: 'registerDevices'
    ,
    data(){
        return{
            name2: sessionStorage.name,
            nameDevice:"",
            adress:"",
            transporte2:String,
            ll:{
                headers:{      
                    "Content-Type":"application/json",
                    "autorization": token2
                }
            }
            
        

        }
    },
    methods:{
        
        registrar(){
            const payload = {
   
                    nameDevice: this.nameDevice,
                    location: this.adress,
                    typeDevice: this.transporte2
            }
            console.log(payload)
            axios.post('http://localhost:3000/registerDevice',payload, {headers:{"Content-Type":"application/json", "authorization" : sessionStorage.token}}).then((response)=>{
                this.state = response.data;
                if(response.data.Mensaje == "OK"){
                    this.$router.push('/homePage')
                    console.log(this.state)
                }
            });           
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