<template>
    <div id="centersection">
        <div id="imagesection">
            
            <div v-if="cons === 7">
                <img src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <div v-else-if="cons === 9">
                <img src="https://images.pexels.com/photos/2323435/pexels-photo-2323435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <div v-else>
                <img src="https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <div id="consolebuttons">
                <button @click="playstationconsole">Playstation</button>
                <button @click="xboxconsole">Xbox</button>
                <button @click="cubeconsole" >Nintendo</button>
            </div>
        </div>
        <div id="textsection">
            
            <h1 :class="titlelook" @click="titlechange">{{ msg }}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</template>

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
                ],

                titlelook: "tlook1",
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
            cubeconsole()
            {
                this.cons = 1;
            },
            titlechange()
            {
                if(this.titlelook === "tlook1")
                    this.titlelook = "tlook2";
                else
                    this.titlelook = "tlook1";
            }
        }

    }
</script>

<style scoped>
    #centersection
    {
        margin-left: 10.625%;
        margin-right: 10.625%;
    }

    .gameslist
    {
        display:flex;
    }
    .game
    {
        margin-right: 30px;
    }

    #imagesection
    {
        display:grid;
        justify-items: center;
    }
    
    #imagesection img
    {
        height: 300px;
        width: 90%;
        border-radius: 10%
    }

    #imagesection button
    {
        margin-left: 20px;
        margin-right: 20px;

    }

    #textsection
    {
        text-align: center;
    }

    #textsection h1
    {
        font-family: 'Oswald', sans-serif;
    }
    .tlook1
    {
        color: rgb(187, 221, 244);
        font-weight: 150%;
    }

    .tlook2
    {
        color: rgb(241, 108, 241);
        font-weight: 120%;
    }
</style>