<template>
    <span class="calc"><slot></slot></span>
</template>

<style>
.calc{
    margin-top: 4px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.7rem;
    width: 50px;

    border: 2px solid transparent;
    padding: 5px;
    margin-left: 20px;
    text-align: center;
    align-self: center;
    color: var(--nc-color-black);
}
</style>