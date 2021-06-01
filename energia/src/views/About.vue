<template>
  <div class="about">
    <h1>Escriba su correo para recuperar la contraseña</h1>
    <input type="email" placeholder="Email" v-model="email" name="email" class="boxRegisterItems"/>
    <button @click="recuperar" class="botonRegister" >Enviar</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'about',
  data() {
    return{
      email:NULL
    }
  },
  methods:{
      recuperar(){
        axios.get('http://localhost:3000/infosensores').then(response=>{
          console.log(response.data)
        })
      }
  }
  
}
</script>
