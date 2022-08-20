<template>
    <div class="nc-container">
        <div class="logo">
            <p class="firstLetters">NC</p>
            <p>Number Ciphers</p>
        </div>
        <button>
            <router-link to="/start">Nie klikniesz. Nie masz psychy.</router-link>
        </button>
    </div>
</template>

<style>
.nc-container{
    width: 98vw;
    height: 97vh;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nc-container .logo{
    width: 30vw;
    height: 40vh;
    margin-left: 10vw;
    margin-right: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: default;
}

.nc-container .logo .firstLetters{
    font-size: 9em;
    letter-spacing: 10px;
    padding: 2px;
}

.nc-container .logo p{
    margin: 20px 0;
    font-size: 3.6em;
    padding: 2px;
}

.nc-container .logo::after{
    content: '';
    width: 0.2vw;
    height: 60vh;
    background-color: var(--nc-color-black);
    position: absolute;
    left: 50vw;
}
    
button{
    font-size: 3em;
    background: transparent;
    border: none;
    letter-spacing: 3px;
    font-weight: 600;
    margin-right: 3vw;
    line-height: 170%;
}

button a{
    text-decoration: none;
    color: var(--nc-color-black);
}
</style>

<script>
</script>