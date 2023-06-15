<template>
    <div>
        <navigation />
        <div id="tournament">
            <div id="tournimage">
                <img :src=events[tournnumber].poster alt="tournament poster" @click="changetourn">
            </div>
            <div id="tourndetails">
                <p>
                    Name: {{ events[tournnumber].name }}<br>
                    Description: {{ events[tournnumber].description }}<br>
                    Tickets Available: {{ events[tournnumber].ticketsavailable }}
                </p>
                <button @click="increasetickets">Increase tickets<br>purchased</button>
                <button @click="decreasetickets">Decrease tickets<br>purchased</button>
                <p>You are buying {{ ticketsincart }} tickets</p>
                
            </div>
        </div>
    </div>

</template>

<!-- script -->
<script>
import { createCacheExpression } from '@vue/compiler-core';
    import navigation from '../Navigation/navigation.vue';
    export default
    {
        components:
        {
            navigation
        },
        data()
        {
            return{
                events:
                [
                    {
                        id: "CHKING123456",
                        name: "Chess",
                        poster: "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        description: "Do you love chess and want to challenge yourself against other players? Join the Chess Tournament and show your skills in this classic game of strategy and logic. You’ll play online with opponents from around the world, using the Chess.com or Lichess.org platforms. The tournament will have different categories based on your rating and time control. You’ll also have access to chess puzzles, lessons and analysis tools to improve your game. The winner will be the one who scores the most points in each category, while also demonstrating fair play and sportsmanship. Are you ready to play chess online for free? Sign up now and prove yourself as the ultimate chess master!",
                        ticketsavailable: 200
                    },
                    {
                        id: "PSKING123456",
                        name: "Hollow-Knight",
                        poster: "https://i.pinimg.com/564x/7d/09/e2/7d09e255bf88f54bcdf7bc0837582244.jpg",
                        description: "Do you have what it takes to explore the vast and mysterious kingdom of Hallownest? Join the Hollow Knight Tournament and test your skills in this challenging 2D action-adventure game. You’ll face over 130 enemies and 30 epic bosses, as well as discover new abilities, charms and secrets along the way. The tournament will consist of several rounds, each with a different objective and difficulty level. The winner will be the one who completes the most objectives in the shortest time, while also collecting the most essence, geo and relics. Are you ready to forge your own path in Hollow Knight? Sign up now and prove yourself as the ultimate knight!",
                        ticketsavailable: 50
                    },
                    {
                        id: "DCKING123456",
                        name: "Dead Cells",
                        poster: "https://i.pinimg.com/564x/87/8a/05/878a055d0240845ab7665dd4537b6c8e.jpg",
                        description: "Do you enjoy dead cells and want to compete with other players in a roguevania adventure? Join the Dead Cells Tournament and show your skills in this 2D side-scrolling action-platformer. You’ll play as the Prisoner, an amorphous creature that can possess human corpses and explore a sprawling, ever-changing castle. You’ll face deadly enemies and traps, collect weapons and abilities, and fight against challenging bosses. The tournament will have different modes based on your preference and difficulty level. You’ll also have access to online features such as leaderboards, achievements, and photo mode. The winner will be the one who completes the most runs in the shortest time, while also collecting the most cells, blueprints, and outfits. Are you ready to play dead cells online for free? Sign up now and prove yourself as the ultimate roguevania master!",
                        ticketsavailable: 50
                    }
                ],
                tournnumber: 1,
                ticketsincart: 0
            }
            
        },
        methods:
        {
            increasetickets()
            {
                if(this.ticketsincart < this.events[this.tournnumber].ticketsavailable)
                    this.ticketsincart++;
            },
            decreasetickets()
            {
                if(this.ticketsincart > 0)
                   this.ticketsincart--;
            },
            changetourn()
            {
                
            }
        }
    }
</script>

<style scoped>
    #tournament
    {
        margin-left: 10.625%;
        margin-right: 10.625%;
        display: flex;
        justify-content: space-around;
    }
    #tournimage > img
    {
        width: 100%;
        height: 500px
    }

    #tourndetails
    {
        width: 50%;
    }
</style>