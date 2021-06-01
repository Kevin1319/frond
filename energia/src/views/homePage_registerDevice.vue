<template>
    <div class="container"  > 
    <div class="optionsClass">
        <componentsOptions />
        
    </div>
    <div class="visualClass">
        <registerdevicesComponent/>
    </div>
        
    </div>
    
</template>

<script>
import componentsOptions from '@/components/optionsComponents';
import registerdevicesComponent from '@/components/registerdevicesComponent';



export default {
  name: 'homePage_registerdevice',
  components: {
    componentsOptions,
    registerdevicesComponent
  }
}
</script>


