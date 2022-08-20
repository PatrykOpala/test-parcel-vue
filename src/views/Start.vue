<template>
    <div class="start">
        <h2>Wybierz poziom trudności</h2>
        <div class="levelsBlocks">
            <div class="level">
                <router-link to="/start/space">Kosmiczny</router-link>
            </div>
            <div class="level">
                <router-link to="/start/medium">Średni</router-link>
            </div>
            <div class="level">
                <router-link to="/start/advanced">Zaawansowany</router-link>
            </div>
            <div class="level">
                <router-link to="/start/extreme">Ekstremalny</router-link>
            </div>
        </div>
    </div>
</template>

<style>
.start{
    width: 99vw;
    height: 98vh;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.start h2{
    margin-top: 8vh;
    margin-left: 10vw;
    margin-right: 18vw;
    font-size: 2.3em;
    letter-spacing: 4px;
}

.start .levelsBlocks{
    margin-top: 10vh;
    width: 40%;
    height: 50%;
    display: grid;
    /*38.7vh*/
    grid-template-columns: repeat(2, 35%);
    grid-template-rows: repeat(2, 33%);
    gap: 5px;
}

.start .levelsBlocks .level{
    width: 13vw;
    height: 15vh;
    color: #222;
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 1.6em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>