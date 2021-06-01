<template>
    <div class="boxLogin">
        <h2>{{mensaje}}</h2>
        <div >
            <div> 
                <label class="etiquetas" for="Email">Email: </label>
                <input type="email" v-model="vEmail" name="Email"  placeholder="Email" class="login"/> 
            </div>   
            <div> 
                <label class="etiquetas" for="Correo">Password: </label>
                <input type="password" v-model="vPassword" name="Password"  placeholder="Password" class="login"/>           
            </div>
            <div class="ayudas">
                <router-link to="/about" class="red" style="color:black">Forgot your password</router-link>
                <router-link to="/register" class="red" style="color:black">SingUp</router-link>
            </div>
            <button @click="enviar" class="boton">Login</button>

        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'cajas', 
    props : {
        mensaje: String
    },
    data(){
        return{
            vEmail: "",
            vPassword: "",
            var :String,
            ll:{
                headers:{      
                    "Content-Type":"application/json"
                }
            },
            state:""   


        }
    },
    methods : {
        async enviar(){

            const payload = {
   
                    email: this.vEmail,
                    password: this.vPassword

            }
            await axios.post('http://localhost:3000/api/users/login',payload,this.ll).then((response)=>{
                this.state = response.data
                sessionStorage.setItem('token',this.state.token)
                sessionStorage.setItem('name',this.state.name)
                this.$router.push('/homePage')
            });
        }
    },
     mounted(){
         console.log("cargo la pagina")
     }
}
</script>

<style scoped>
    @import '../assets/cssLogin.css';

</style>
