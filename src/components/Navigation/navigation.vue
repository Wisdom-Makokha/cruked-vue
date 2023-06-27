<!-- template -->
<template>
    <div id="topnavigation">
        <router-link id="logo" to="/">CRUK3D</router-link>
        <div id="leftbar">
            <router-link to="/" class="navroutes" id="home">home
                <!-- <img src="./assets/Images/home_FILL0_wght400_GRAD0_opsz48.svg" alt="home"> -->
            </router-link>
            <router-link to="/tournaments" class="navroutes" id="tournaments">tournaments
                <!-- <img src="./assets/images/trophy_FILL0_wght200_GRAD200_opsz48.svg" alt="tournaments"> -->
            </router-link>
            <router-link to="/about" class="navroutes" id="about">about</router-link>
        </div>
    </div>
</template>

<!-- script -->
<script>
    //props is tasked with passing data from a parent component to a child component
    export default
    {
        props: ['msg', 'tilte', 'subtilte'],
        
        data()
        {
            return{
                first:"first",
                lounge:"https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                age: 0, 
                imageview:true
            }
        },
        methods:
        {
            altermsgfont()
            {
                if(this.first === "first")
                    this.first = "second";
                else
                    this.first = "first"
            }, 
            alterimage()
            {
                this.lounge = "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            increaseage()
            {
                this.age++;

                this.toggleimage();
            },
            decreaseage()
            {
                if(this.age === 0)
                    this.age = 0;
                else
                    this.age--;
                
                this.toggleimage();
            },
            toggleimage()
            {
                if(this.age >= 0 && this.age < 10)
                    this.lounge = "https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                if(this.age >= 10 && this.age <= 21)
                    this.lounge = "https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                else if(this.age > 21)
                    this.lounge = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
        }
    }
</script>

<!-- style -->
<style scoped>
    #topnavigation
    {
        display: flex;
        justify-content: space-between;
        background-color: rgb(84, 114, 148);
        margin-bottom: 20px;
    }

    .navroutes
    {
        margin-left: 15px;
        text-decoration: none;
        color: black;
        font-family: 'PT Serif', serif;
        font-size: 120%;
        transition: color 0.5s;
    }
    
    .navroutes:hover
    {
        color: rgb(219, 240, 254);
    }

    .navroutes > img
    {
        height: 35px;
        width: 40px;
        
    }

    #logo
    {
        text-decoration: none;
        font-family: 'Amarante', cursive;
        font-weight:200%;
        font-size: 180%;
        color: rgb(187, 221, 244);
        margin-top:48px;
        margin-left: 10.625%;
        transition: color 1s;
    }

    #logo:hover, #logo:focus
    {
        color: black;
    }

    
    #leftbar
    {
        margin-top: 55px;
        margin-right: 10.625%;
    }
</style>