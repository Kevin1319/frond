<template>
    <div class="boxRegister"> 

        <input type="text" v-model="nameRegister" placeholder="Nombre" name="nameRegister" class="boxRegisterItems"/>
        <input type="text" v-model="lastNameRegister" placeholder="Apellido" name="lastName" class="boxRegisterItems"/>

        <div class="fecha">
            <label  for="data">Fecha de Nacimiento </label>
            <input type="date" v-model="dataRegister" name="data" class="dataInput"/>
        </div>
        <input type="email" v-model="emailRegister" placeholder="Correo" name="emai" class="boxRegisterItems"/>
        <input type="email" v-model="emailValidateRegister" placeholder="Repita el correo" name="emaildValidate" class="boxRegisterItems"/>
        <input type="password" v-model="passwordRegister" placeholder="Contraseña" name="password" class="boxRegisterItems"/>
        <input type="password" v-model="passwordValidateRegister" placeholder="Repita la contraseña" name="passwordValidate" class="boxRegisterItems"/>
        

        <button @click="registrar" class="botonRegister" >Registrarse</button>
        <p v-if= "red === true">
            Gracias por registrarte!


        </p>

    </div>
    
</template>

<script>
import axios from "axios";

export default {
        name: 'register'
    ,

    data(){
        return{
            nameRegister:"",
            lastNameRegister:"",
            dataRegister:Date(),
            emailRegister:"",
            emailValidateRegister:"",
            passwordRegister:"",
            passwordValidateRegister:"",
            ll:{
                headers:{      
                    "Content-Type":"application/json"
                }
            },
            red :false
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
    @import '../assets/cssRegister.css';
    .dataInput{
        border: 0px solid
    }
</style>