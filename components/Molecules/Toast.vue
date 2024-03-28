<script setup>
import  { ref, onMounted } from 'vue';
import { useMainStore } from '~/store';
import gsap from 'gsap';

const main = useMainStore();
const toast = ref('toast');
let ctx;
let tl;

onMounted(() => {
    toast.value.style.display = 'none';
    ctx = gsap.context((self) => {
        if (main.$state.gtagSettings == true) {
            toast.value.style.display = 'flex';
            tl = gsap.timeline().from(toast.value, { y: -300, autoAlpha: 0}).to(toast.value, {duration:0.6, y:0, autoAlpha: 1, ease: 'power4.out'})
        };
    });    
})

function acceptConsent() {
    gsap.to(toast.value, {y: -300, autoAlpha: 0, duration: 0.4, ease: "power4.out", onComplete: () => {toast.value.style.display = 'none'}})
    useGtagConsent(true)
    main.updateSettings(false)
}

function refuseConsent() {
    gsap.to(toast.value, {y: -300, autoAlpha: 0, duration: 0.4, ease: "power4.out", onComplete: () => {toast.value.style.display = 'none'}})
    useGtagConsent(false)
    main.updateSettings(true)
}

</script>
<template>
    <div ref="toast" id="toast-consent">
        <p>Ao aceitar você concorda com a análise de vistas do Google Analytics, nossa 
            <nuxt-link to="/politica">política de privacidade</nuxt-link> e <nuxt-link to="/termos">termos de uso</nuxt-link></p>
        <button id="btn-refuse" @click="refuseConsent">Hoje não</button>
        <button id="btn-consent" @click="acceptConsent">Aceito</button>
    </div>
</template>