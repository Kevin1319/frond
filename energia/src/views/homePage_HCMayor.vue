<template>
    <div class="container"  > 
    <div class="optionsClass">
        <componentsOptions />
        
    </div>
    <div class="visualClass">
        <HCMayor/>
    </div>
        
    </div>
    
</template>

<script>
import componentsOptions from '@/components/optionsComponents';
import HCMayor from '@/components/HCMayor';



export default {
  name: 'homePage_HCMayor',
  components: {
    componentsOptions,
    HCMayor
  }
}
</script>


