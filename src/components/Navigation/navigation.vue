<!-- template -->
<template>
    <div id="topnavigation">
        <div id="logo" >CRUK3D</div>
        <div :class="first" id="parentmsg">Welcome to the lounge</div>
        <div id="routes">
            <a href="">home</a>
            <a href="">search</a>
            <a href="">games</a>
            <a href="">about</a>
        </div>
    </div>
        <button @click="altermsgfont">Message<br>change</button><br>
        <button @click="alterimage">Image<br>change</button><br>
        <!-- <img :src="lounge" alt="lounge welcome"> -->
        <button @click="increaseage">Increase age<br>Age is {{ age }}</button>
        <button @click="decreaseage">Decrease age<br>Age is {{ age }}</button><br>
        <img :src="lounge">
</template>

<!-- script -->
<script>
    //props is tasked with passing data from a parent component to a child component
    export default
    {
        props: ['msg'],
        
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
<style>
    img
    {
        height: 200px;
    }
    button
    {
        width: 100px;
        height: 55px;
        color: rgb(119, 193, 241);
        background-color: black;
        border-color: rgb(51, 112, 153);
        margin-left: 5px;
        margin-bottom: 5px;
        
        border-width: 4px;
        border-radius: 20px;
    }

    button:hover
    {
        background-color: rgb(119, 193, 241);
        color: black;
    }

    button:active{
        background-color: white;
    }
    #logo
    {
        font-family: 'Amarante', cursive;
        font-weight:200%;
        font-size: 180%;
        margin-top:48px;
    }

    .first
    {
        color: aqua;
        margin-top: 55px;
        font-size: 120%;
    }

    .second
    {
        color:black;
        margin-top: 55px;
        font-size: 120%;
    }

    
    #topnavigation
    {
        display: flex;
        justify-content: space-between;
        
    }

    #routes
    {
        margin-top: 55px;
    }
</style>