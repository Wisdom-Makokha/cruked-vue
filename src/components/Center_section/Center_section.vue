<!-- template -->
<template>
    <div>
        <div id="imagesection">
            <div id="consolebuttons">
                <!-- these buttons are used to run some methods that change the value of cons when clicked
                    this changes the image that is displayed -->
                <button @click="playstationconsole">Playstation</button>
                <button @click="xboxconsole">Xbox</button>
                <button @click="nintendoconsole" >Nintendo</button>
            </div>
            <!-- using conditional rendering, one of three images is displayed based on the value of cons -->
            <div v-if="cons === 7">
                <img src="https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <div v-else-if="cons === 9">
                <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <div v-else>
                <img src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <!-- <img :src="thelounge"> -->
        </div>
        <div id="text section">
            <!-- msg is used to receive data from the home parent component -->
            <h1>{{ msg }}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <!-- a list is generated that displays objects in our games array -->
        <div class="gameslist">
            <!-- v-for loops through each game from the list of games
            id is the key that is used to identify each game in the list 
            game is an optional alias that can help in moving through the list
            any other alias will be just as effective -->
            <div class="game" v-for="(game, id) in games" :key="id">
                <div>{{ game.name }}</div>
                <div>{{ game.yearofrelease }}</div>
                <div>{{ game.rating }}</div>
                <div>{{ game.unitsold }}</div>
                <div>{{ game.genre }}</div>
                <!-- because v-for can be used in looping, it is possible to use INTEGER VALUES
                    to  loop through and print out many elements with one tag-->
                <div v-for="rating in game.rating" :key="rating">
                    <img src="./Assets/Images/grade_FILL0_wght300_GRAD200_opsz48.svg">
                </div>
            </div>
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
                cons:7,
                games:
                [
                    {
                        id: 'HK2017',
                        name: 'Hollow Knight',
                        yearofrelease: 2017,
                        rating: 6,
                        unitsold: '3 million',
                        genre: 'metroidvania'
                    },
                    {
                        id: 'DC2017',
                        name: 'Dead Cells',
                        yearofrelease: 2017,
                        rating: 3,
                        unitsold: '10 million',
                        genre: 'rougue-like'
                    },
                    {
                        id: 'GOW2018',
                        name: 'God of war',
                        yearofrelease: 2018,
                        rating: 10,
                        unitsold: '23 million',
                        genre: 'action adventure'
                    }
                ]
            }
        },
        methods:
        {
            playstationconsole()
            {
                this.cons = 9;
            },
            xboxconsole()
            {
                this.cons = 7;
            },
            nintendoconsole()
            {
                this.cons = 1;
            }
        }

    }
</script>

<style>
    .gameslist
    {
        display:flex;
    }
    .game
    {
        margin-right: 30px;
    }

    .game img
    {
        height: 20px;
        width: 20px;
    }
</style>