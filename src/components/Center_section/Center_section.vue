<!-- template -->
<template>
    <div>
        <div id="imagesection">
            <img :src="thelounge">
        </div>
        <div id="text section">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<!-- script -->
<script>
    export default
    {
        props:['msg', 'submsg'],

        data()
        {
            return{
                thelounge:"https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }
        }
    }
</script>

<style>

</style>