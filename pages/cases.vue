<script setup>
import coverImg from '@/assets/imgs/tecnico-torcedor-cover.png';
import arrow from '@/assets/imgs/arrow-right.svg';
import whatsapp from '@/assets/imgs/whatsapp.svg';
import shareimg from '@/assets/imgs/og-image-cases.jpg';
import { useMainStore } from '~/store';
import Lenis from "@studio-freight/lenis";

if (window.outerWidth > 900) {
    const lenis = new Lenis({
        duration: 1.4,
        autoResize: true
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}

//SEO
useSeoMeta({
    title: 'GDY tecnologias de alta qualidade, uma gama incrível de produtos de ponta',
    ogTitle: 'GDY tecnologias de alta qualidade, uma gama incrível de produtos de ponta',
    description: 'Realize ideias que ficaram no papel, solucione problemas que há tempos impedem sua empresa de evoluir, veja nossos cases e comprove nossa alta qualidade',
    ogDescription: 'Realize ideias que ficaram no papel, solucione problemas que há tempos impedem sua empresa de evoluir, veja nossos cases e comprove nossa alta qualidade',
    ogImage: shareimg
});
//Store
const main = useMainStore();
main.setColor(false);

</script>

<template>
    <section class="default-page">

        <OrganismsMediaContent rightMedia="figure" :media="coverImg" mediaName="Imagem de smartphone represetando os mesmos gráficos presentes no computador ao fundo">
            <h1>Cases: Aplicativo <span>TécnicoTorcedor</span></h1>
            <p>Um projeto de reality game em que fans de futebol jogam em tempo real, participando através do App, adivinhando os acontecimentos da partida.</p>
            <AtomsButton Type="outline right" rightIcon="img" :Icon="arrow" Path="/cases/tecnicotorcedor">Saiba Mais</AtomsButton>
        </OrganismsMediaContent>

        <OrganismsCasesGrid  
            class="cases-gallery"
            services
            leftIcon="img"
            side="left"
            :Icon="whatsapp"
            hasButton
            Copy="Whatsapp"
            Path="https://wa.me/5511994307578"
            Caption="Tem um projeto inovador? Fale com a gente"
        />

        <NuxtLayout name="case">
            <NuxtPage />
        </NuxtLayout>

    </section>
</template>

<script>
import gsap from 'gsap';

export default {
    mounted() {
        gsap.set(['.btn.outline','.accordion-content'], {autoAlpha: 0});
        gsap.set(['.logo','.title', '.text'], {x: -100, autoAlpha: 0});
        gsap.set('.orange-geometry', {y: -120, x: 100, autoAlpha: 0});
        gsap.set('.cover', { autoAlpha: 0,x: 800, rotation: 180});

        gsap.to(['.btn.outline', '.accordion-content','.page-footer'], {
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.4,
            ease: 'power3.out'
        });
        gsap.to(['.logo','.title', '.text'], {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power3.out'
        });
        gsap.to('.orange-geometry', {
            y: 0,
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power3.out'
        });
        gsap.to('.cover', {
            x:0,
            duration: 1,
            autoAlpha: 1,
            rotation: 0,
            ease: 'power3.out'
        })
    },
    beforeRouteLeave(to, from, next) {
        gsap.to('.orange-geometry', {
            duration: 0.6,
            y: -100,
            autoAlpha:0,
            ease: 'power3.out'
        })
        gsap.to(['.logo','.default-page', '.accordion-grid'], {
            autoAlpha:0,
            duration: 0.6,
            ease: 'power3.out',
            onComplete: () => {
                next();
            }
        });
    }
}
</script>