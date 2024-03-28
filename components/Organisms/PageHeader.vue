<script setup>
import { useMainStore } from '~/store';
import { storeToRefs } from 'pinia';
    
import blueGeometry from '@/assets/imgs/top-geometry.svg';
import orangeGeometry from '@/assets/imgs/top-orange-geometry.svg';

const main = useMainStore();
const { blue } = storeToRefs(main);

</script>
<template>
    <header>

        <img class="blue-geometry" v-if="blue !== false"  :src="blueGeometry" alt="Azul de fundo" />
        <img class="orange-geometry" v-else :src="orangeGeometry" alt="Laranja de fundo" />
        
        <NuxtLink class="logo" to="/">
            <img src="@/assets/imgs/logotipo-gdy.svg" alt="GDY" />
        </NuxtLink>
    </header>
</template>