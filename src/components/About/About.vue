<template>
    <div>
        <navigation />
        <div id="about">
            <h1 id="abtitle">About</h1>
            <p id="abtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ac ut consequat semper viverra nam libero justo laoreet sit. Vulputate sapien nec sagittis aliquam. A cras semper auctor neque vitae tempus. Nunc scelerisque viverra mauris in aliquam sem. Vel pretium lectus quam id. Ut ornare lectus sit amet. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit.<br>
                Justo eget magna fermentum iaculis. Blandit massa enim nec dui nunc mattis enim ut. Neque convallis a cras semper auctor. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Ultricies tristique nulla aliquet enim tortor. Tincidunt ornare massa eget egestas. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Duis ultricies lacus sed turpis tincidunt. Orci dapibus ultrices in iaculis nunc sed augue.<br>
                Facilisis gravida neque convallis a cras semper auctor. Arcu non sodales neque sodales ut etiam sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus. Etiam erat velit scelerisque in dictum non. Convallis convallis tellus id interdum velit. Proin libero nunc consequat interdum varius sit amet. Ac tortor vitae purus faucibus ornare. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Enim nunc faucibus a pellentesque sit. Nunc scelerisque viverra mauris in aliquam sem. Suspendisse potenti nullam ac tortor vitae purus faucibus. Elementum integer enim neque volutpat ac tincidunt vitae semper. Netus et malesuada fames ac turpis. Eu non diam phasellus vestibulum lorem sed. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Consequat mauris nunc congue nisi vitae suscipit tellus. Sem et tortor consequat id porta nibh venenatis. Tincidunt tortor aliquam nulla facilisi cras fermentum. Justo laoreet sit amet cursus.<br>
            </p>
        </div>
    </div>
</template>

<script>
    import navigation from '../Navigation/navigation.vue'
    export default{
        components:
        {
            navigation
        },
    }
</script>

<style scoped>
    #about
    {
        margin-left: 10.625%;
        margin-right: 10.625%;
    }

    #abtitle
    {
        font-family: 'Oswald', sans-serif;
        text-align: center;
    }

    #abtext
    {
        text-align:center;
        font-size: 110%;
    }
</style>