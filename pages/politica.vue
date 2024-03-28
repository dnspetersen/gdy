<script setup>
import graph1 from '@/assets/imgs/top-red-geometry.svg';
import graph2 from '@/assets/imgs/top-red-right-geo.svg';
import graph3 from '@/assets/imgs/top-blue-geometry.svg';
import whatsapp from '@/assets/imgs/whatsapp.svg';
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
            Política de<br/> Privacidade
        </h1>
        <h5>Nós resepeitamos a privacidade dos nossos visitantes, não coletamos quaisquer informações para além do que o Google Analytics providência para entender os resultados do site.</h5>
        <h5>Assim as únicas métricas que adotamos é saber a região, as tecnologias de acesso e as páginas visitadas, ou seja, não coletamos dados pessoais como email, contato, nome ou redes sociais.</h5>
        <h5>Ao aceitar nosso consentimento de dados vocês está habilitando o Analytics a coletar as informações citadas.</h5>
        <h5>Nos reservamos o direito de atualizar essa política de privacidade a qualquer momento, iremos informar através do site caso isso ocorra, para que os visitantes reafirmem o consetimento de compartilhamento de dados.</h5>
        <h5>Estamos em acordo com a lei geral de proteção de dados (LGPD), adequando nossas práticas ao território nacional, público ao qual se destina nosso site.</h5>
        <h5 class="col-1">Se quiser modificar sua escolha <span>entre em contato</span></h5>
        <AtomsButton Type="solid blue left" leftIcon="img" :Icon="whatsapp" Path="https://wa.me/5511994307578" target="_blank">
            Whatsapp
        </AtomsButton>
    </section>
</template>

<style scoped lang="less">
 h5 {
    text-align: left;
    &:last-of-type {
        text-align: center;
    }
 }
</style>

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