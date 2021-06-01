<template>
  <div class="loginFirst">
    <img class="imagen" alt="Vue logo" src="../assets/Imagen.jpg" >
    <caja mensaje ="Iniciar Sesion"/>
  </div>
</template>

<script>
// @ is an alias to /src

import caja from '@/components/loginComponents.vue';


export default {
  name: 'Login',
  components: {
    caja
  }
}
</script>
<style>
.imagen{
  border-radius: 50%;
  color: black;
}
</style>
