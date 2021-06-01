<template>
    <div class="container"  > 
    <div class="optionsClass">
        <componentsOptions />
        
    </div>
    <div class="visualClass">
        <HCMenor/>
    </div>
        
    </div>
    
</template>

<script>
import componentsOptions from '@/components/optionsComponents';
import HCMenor from '@/components/HCMenor';



export default {
  name: 'homePage_HCMenor',
  components: {
    componentsOptions,
    HCMenor
  }
}
</script>


