<script setup>
import graph1 from '@/assets/imgs/top-red-geometry.svg';
import graph2 from '@/assets/imgs/top-red-right-geo.svg';
import graph3 from '@/assets/imgs/top-blue-geometry.svg';
import gdysymbol from '@/assets/imgs/gdy-symbol.svg';
import badge1 from '@/assets/imgs/30-anos-badge.png';
import badge2 from '@/assets/imgs/50-clientes-badge.png';
import badge3 from '@/assets/imgs/12-colaboradores-badge.png';
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
        badgeImg: badge1,
        title: 'Anos de existência'
    },
    item2: {
        badgeImg: badge2,
        title: 'Clientes ativos'
    },
    item3: {
        badgeImg: badge3,
        title: 'Colaboradores'
    }
}

</script>
<template>
    <section class="manifesto-page">
        <img class="red-graph" :src="graph1" />
        <img class="red2-graph" :src="graph2" />
        <img class="blue-graph" :src="graph3" />
        <h1>
            <img :src="gdysymbol" alt="GDY logo"/><br/>
            A GDY
        </h1>
        <h5>Nossa missão é criar aplicativos transformadores, soluções de software de ponta, plataformas poderosas
             e ferramentas de automação engenhosas que revolucionam a maneira como as empresas operam.</h5>
        <div class="card-grid">
            <MoleculesCard v-for="item in cards" :key="item" :badgeImg="item.badgeImg" :title="item.title" />
        </div>
        <h5>Programadores qualificados e ambiciosos que procuram fazer a diferença, adaptando-se à era digital para fornecer soluções que impulsionam clientes.
            <br/>Orientadores de especialistas da indústria, com vasto conhecimento e experiência. Abertos a sempre aprender novas habilidades com novas linguagens 
            de programação, tecnologias e design, focados no usuário e nos resultados.</h5>
        <h2>Um pouco da nossa <span>história</span></h2>
        <div class="manifesto-accordion">
            <AtomsAccordion v-for="item in servicos" :key="item" :labelTxt="item.labelTxt">
                <h4>{{ item.title }}</h4>
                <p>{{ item.content }}</p>
            </AtomsAccordion>
        </div>
        <h2>Próximos passos e <span>Investimentos</span></h2>
        <h5>Aprimorar os produtos atuais e a continuidade na excelência do atendimento são pontos primordiais na definição dos próximos passos da empresa.<br/>
            Com a chegada de novas áreas do desenvolvimento, principalmente com maior aplicação de inteligência artificial, estamos aperfeiçoando o conhecimento da 
            equipe e a capacidade dos sistemas da empresa.<br/>
            Investindo em nossas próprias iniciativas de Startups e projetos de automação, integrando a vasta experiência e as novas tendências no mercado de tecnologia 
            em busca de trazer uma mudança positiva as empresas e usuários.</h5>
        <h5 class="col-1"><span>Faça parte</span> dessa história</h5>
        <AtomsButton Type="solid blue left" leftIcon="img" :Icon="whatsapp" Path="https://wa.me/5511994307578" target="_blank">
            Whatsapp
        </AtomsButton>
    </section>
</template>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            servicos: Object,
        }
    },
    mounted() {
        this.servicos = {
            item1:  {
                labelTxt: '1991 - Fundação',
                title: "Nosso surgimento",
                content: "Uma junção de ideias entre consultores do Sebrae e Gestores em empresas de tecnologia, assim surgiu a GDY Safety, que mais tarde se tornaria a GS e hoje simplesmente GDY. Inicando uma longa jornada no desenvolvimento de ERP's para pequenas e médias empresas que, em sua maioria, são clientes até os dias de hoje."
            },
            item2: {
                labelTxt: '2005 - Expansão e novo escritório',
                title: "Tempos de Renovação",
                content: "Com o grande crescimento da internet banda larga e novas técnologias como Big Data, Cloud computing, Saas softwares, entre outros, veio a necessidade de aumentar a equipe mudando nossa sede para uma região importante do empresariado, de fácil acesso e com excelente infraestrutura disponível."
            },
            item3: {
                labelTxt: '2012 - Recuperação de impostos',
                title: "Novos mercados",
                content: "Com o surgimento de diversos programas de governo para desoneração e recuperação de impostos nós unimos o imenso conhecimento tributário adquirido com o desenvolvimento de ERP's para assessorar empresas para recuperação em vias administrativas de impostos, hoje com menos opções mas ainda muito importantes para os negócios da empresa."
            },
            item4:  {
                labelTxt: '2016 - Automação',
                title: "As mudanças no meio digital",
                content: "Entramos no ramo que é tendência para a próxima década, o surgimento de linguagens e tecnologias para automação como o machine learning, se tornam importantes no desenvolvimento de nossas soluções para o mercado."
            },
            item5: {
                labelTxt: '2019 - Revolução elétrica',
                title: "A internet das coisas",
                content: "Aproveitando o conhecimento interno com hardware e dispositivos de automação fizemos a parceria com a GRIDE, Bike City, Scoo e outros para desenvolvermos os meios de controle de veículos elétricos e seus dispositivos."
            },
            item6: {
                labelTxt: '2021 - Startups',
                title: "Tornando novas ideias negócios reais",
                content: "Um grande obstáculo para o surgimento de Startups é o meio tecnológico necessário para que o negócio aconteça, hoje ajudamos a tornar realidade, nas mais diversas áreas, produtos que tem grande potencial de impactarem o mercado."
            }
        };

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
        })
    }
}
</script>

