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
            Termos de Uso
        </h1>
        <h5>Esta seção tem como objetivo explicar as regras de uso e obrigações legais adotadas pela empresa.</h5>
        <h5>Não oferecemos serviços através da nossa página, somente formas de entrar em contato com nosso time, portanto ao concordar 
            com os termos, o visitante aceita que teremos visão de suas informações apenas após realizar uma ação referente a solicitar contato dentro do site como, por exemplo, preencher formulários, 
            acessar nosso whatsapp ou clicar em links para e-mail de atendimento ou suporte.</h5>
        <h5>Os produtos que apresentamos são de propriedade intelectual da GDY, por esse motivo nos garantimos o direito de divulgá-los respeitando sua propriedade pelos clientes que as adquirem, 
            não faremos divulgações destes clientes em conformidade com seus direitos de privacidade, a citação dos mesmos não compromentem essa relação, sendo somente informativas da veracidade do 
            uso de nossos produtos e serviços.
        </h5>
        <h5>Não permitimos o uso das imagens utilizadas nesse website sem consentimento, bem como a marca e logotipo proprietárias da GDY, aos quais nos permitimos tomar as medidas legais por eventuais violações.</h5>
        <h5>Não é permitido o uso das marcas registradas de nossos produtos sem nosso prévio consentimento, ou seja, as marcas, Dexter Mn, SGC, MySGC, Uanna, BankTools, Pathnet, 
            Técnico Torcedor, SCE e eSupri, pertencem a nós ou a um de nossos clientes, e são propriedade intelectual da GDY, nos cabe também acionar os terceiros envolvidos nessa propriedade em caso de uso ilegal.</h5>
        <h5>Nos reservamos o direito sob este documento a ser atualizado ao longo do tempo, ao que informaremos os visitantes sobre novos termos ou alterações.</h5>
        <h5 class="col-1">Caso queira reinvidicar alguma propriedade que lhe pertença, ou pertença a sua empresa, e esteja irregular nesse website <span>entre em contato</span></h5>
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