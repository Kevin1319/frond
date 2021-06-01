<template>
    <div class="container"  > 
    <div class="optionsClass">
        <componentsOptions />
        
    </div>
    <div class="visualClass">
        <visualOptions/>
    </div>
        
    </div>
    
</template>

<script>
import componentsOptions from '@/components/optionsComponents';
import visualOptions from '@/components/visualComponents';



export default {
  name: 'homePage',
  components: {
    componentsOptions,
    visualOptions
  }
}
</script>


