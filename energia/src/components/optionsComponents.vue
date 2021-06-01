<template>
    <ul class="navHome">
        <img alt="Vue logo" src="../assets/Imagen.jpg" >
        <li><router-link to="/homePage/registerDevice">Nuevo Dispositivo </router-link></li>
        <li class="dropdown">
            <button class="dropbtn"> Dispositivos </button>
            <div class="dropdown-content">
                <router-link to="/homePage/HCMenos">Horas de consumo menor </router-link>
                <router-link to="/homePage/HCMenos">Horas de consumo menor </router-link>
                <router-link to="/homePage/HCMenos">Horas de consumo menor </router-link>
            </div>
        </li>
 
        <li><router-link to="/homePage/HCMenor">Horas de consumo menor </router-link></li>
        <li><router-link to="/homePage/HCMayor">Horas de consumo mayor </router-link></li>
        <li><router-link to="/homePage/MVoltaje">Monitoreo de voltaje</router-link></li>
        
    </ul>
    
</template>

<script>
import axios from "axios";


export default {
        name: 'Options'
    ,
    props: {
    },
    data(){
        return{
            token: sessionStorage.token,
            ll:{
                headers:{      
                    "Content-Type":"application/json",
                    "autorization": token
                }   
            }        

        }
    },  
    methods:{
        
        ejemplo(){
            const payload = {
   
                    _id: this.emailRegister,
                    name: this.nameRegister,
                    lastName: this.lastNameRegister,
                    dateOfBirth: this.dataRegister,
                    password: this.passwordRegister,
                    password2: this.passwordValidateRegister,
                    email: this.emailRegister,
                    email2: this.emailValidateRegister,
                    rol: 0


            }
            console.log(payload)
            axios.post('http://localhost:3000/api/users/register',payload,this.ll).then((response)=>{
                this.state = response.data;
                if(response.data.status == "OK"){
                    this.red=true;
                    this.$router.push('/')
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