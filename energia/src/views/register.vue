<template>
    <div class="boxfirstRegister" > 
        <img class="imagen" alt="Vue logo" src="../assets/Imagen.jpg" >
        <h1>Registrate!</h1>
        <componentsRegister/>
    </div>
</template>

<script>
import componentsRegister from '@/components/registerComponents';

export default {
  name: 'register',
  components: {
    componentsRegister
  }
}
</script>
