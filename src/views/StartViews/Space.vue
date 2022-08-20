<script setup>
import SpaceContainer from '../../components/SpaceContainer.vue';
import LetterRow from '../../components/LetterRow.vue';
import LetterRowItem from '../../components/LetterRowItem.vue';
import LetterIterationAndCalculationContainer from '../../components/LetterIterationAndCalculationContainer.vue';
import CalculationRow from '../../components/CalculationRow.vue';
import CalculationRowItem from '../../components/CalculationRowItem.vue';
import SpaceHeader from '../../components/SpaceHeader.vue';
</script>
<template>
    <space-container>
        <space-header>Prawidłowe hasła 0 / 10</space-header>
        <letter-iteration-and-calculation-container>
            <letter-row>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>

                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
                <letter-row-item>d</letter-row-item>
            </letter-row>
            <calculation-row>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>

                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
                <calculation-row-item>1+1</calculation-row-item>
            </calculation-row>
        </letter-iteration-and-calculation-container>
    </space-container>
</template>