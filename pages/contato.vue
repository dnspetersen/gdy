<script setup>
import graph1 from '@/assets/imgs/top-red-geometry.svg';
import graph2 from '@/assets/imgs/top-red-right-geo.svg';
import graph3 from '@/assets/imgs/top-blue-geometry.svg';
import whatsapp from '@/assets/imgs/whatsapp.svg';
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
    duration: 1.4,
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

definePageMeta({
    layout: 'manifesto'
})

const cards = {
    item1: {
        title: 'Suporte GDY',
        content: '(11) 3888-3280',
        link: 'tel:1138883280'
    },
    item2: {
        title: 'Assinante atendimentos',
        content: 'atendimentos.gs.srv.br',
        link: 'https://atendimentos.gs.srv.br'
    },
    item3: {
        title: 'Chamados por e-mail',
        content: 'suporte@gdy.com.br',
        link: 'mailto:suporte@gdy.com.br'
    }
}

</script>
<template>
    <section class="manifesto-page">
        <img class="red-graph" :src="graph1" />
        <img class="red2-graph" :src="graph2" />
        <img class="blue-graph" :src="graph3" />
        <h1>
            Atendimento
        </h1>
        <h5>Intercorrências acontecem, mas estamos sempre a postos para resolver. <br/>
        Precisa de atendimento em alguma das nossas soluções?</h5>
        <div class="card-grid">
            <MoleculesCard v-for="item in cards" :key="item" :title="item.title" badgeImg=" " >
               <h4><a :href="item.link" target="_blank">{{ item.content }}</a></h4>
            </MoleculesCard>
        </div>
        <h5>Nosso atendimento é também sobre as métricas tributárias cotidianas e necessidades de informação sobre o processo, limitados as indicações de contadores e analistas fiscais.</h5>
        <h5>O contrato de horas é conforme a necessidade da empresa, podendo ser algumas horas mensais até suporte especial 24/7</h5>
        <h5 class="col-1">Entre em contato por whatsapp em caso de <span>urgência</span></h5>
        <AtomsButton Type="solid blue left" leftIcon="img" :Icon="whatsapp" Path="https://wa.me/5511976862872" target="_blank">
            Whatsapp
        </AtomsButton>
    </section>
</template>

<script>
import gsap from 'gsap';

export default {
    mounted() {
        const content = document.querySelector('.manifesto-page').children;

        gsap.set([...content,'.page-footer'], {autoAlpha: 0});
        gsap.set('.red-graph', { x:-80, y: -80, scale: 0.8});
        gsap.set('.red2-graph', { x:80, scale: 0.8});
        gsap.set('.blue-graph', { scale: 0.4});

        gsap.to('.red-graph', {
            x:0,y:0,
            scale: 1,
            duration: 0.4,
            autoAlpha: 1,
            ease: 'power3.out'
        });
        gsap.to('.red2-graph', {
            x:0,
            scale: 1,
            duration: 0.4,
            autoAlpha: 1,
            delay: 0.2,
            ease: 'power3.out'
        });
        gsap.to('.blue-graph', {
            scale: 1,
            duration: 0.4,
            delay: 0.4,
            autoAlpha: 1,
            ease: 'power3.out'
        });
        gsap.to([...content,'.page-footer'], {
            autoAlpha:1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out'
        })
    },
    beforeRouteLeave(to, from, next) {
        gsap.to(['.red-graph','.red2-graph','.blue-graph','.page-footer'], {
            autoAlpha:0,
            duration: 0.3,
            stagger: 0.2,
            ease: 'power3.out',
        });
        gsap.to('.manifesto-page', {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                next();
            }
        });
    }
}
</script>