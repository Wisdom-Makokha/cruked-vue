<!-- template -->
<template>
    <div id="navigationbar">
        <navigation :msg="'Welcome to the lounge'"/>
    </div>
</template>

<!-- script -->
<script>
import navigation from '../Navigation/navigation.vue'

export default{
    components:{
        navigation
    }
}
</script>

<!-- style -->
<style>


</style>