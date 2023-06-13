<!-- template -->
<template>
    <div id="navigationbar">
        <navigation />
        <Center_section :msg="'Welcome To The Lounge'"/>
    </div>
</template>

<!-- script -->
<script>
import navigation from '../Navigation/navigation.vue';
import Center_section from '../Center_section/Center_section.vue'

export default{
    components:{
        navigation,
        Center_section,
    }
}
</script>

<!-- style -->
<style>
    
</style>