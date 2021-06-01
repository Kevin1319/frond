<template>
    <div class="container"  > 
    <div class="optionsClass">
        <componentsOptions />
        
    </div>
    <div class="visualClass">
        <MVoltaje/>
    </div>
        
    </div>
    
</template>

<script>
import componentsOptions from '@/components/optionsComponents';
import MVoltaje from '@/components/MVoltaje';



export default {
  name: 'homePage_MVoltaje',
  components: {
    componentsOptions,
    MVoltaje
  }
}
</script>


