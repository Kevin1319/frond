<template>
    <ul class="navHomeVisual">
        <a href="#">Nuevo Dispositivo</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
    </ul>
    
</template>

<script>
import axios from "axios";

export default {
        name: 'Visual'
    ,
    props: {
    },
    data(){
        return{
            token: sessionStorage.token

        }
    },
    methods:{
        
        registrar(){
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