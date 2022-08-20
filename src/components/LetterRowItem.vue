<template>
    <span class="letter"><slot></slot></span>
</template>

<style>
.letter{
    width: 50px;

    font-size: 3.3rem;
    border: 2px solid transparent;
    padding: 5px;
    margin-left: 20px;
    text-align: center;
    align-self: center;
    color: var(--nc-color-black);
}
</style>