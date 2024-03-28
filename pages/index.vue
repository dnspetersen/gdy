<script setup>
    import coverimg from '@/assets/imgs/home-cover.png';
    import especialistaImg from '@/assets/imgs/especialistas-cover.png';
    import ttApp from '@/assets/imgs/tecnico-torcedor-cover.png';
    import arrow from '@/assets/imgs/arrow-right.svg';
    import arrowWhite from '@/assets/imgs/arrow-right-white.svg';
    import whatsapp from '@/assets/imgs/whatsapp.svg';
    import shareimg from '@/assets/imgs/og-image-home.jpg';
    import { useMainStore } from '~/store';

    //SEO
    useSeoMeta({
        title: 'GDY tecnologias de alta qualidade: Saas, Aplicativos, Plataforas, ERP e automação',
        ogTitle: 'GDY tecnologias de alta qualidade: Saas, Aplicativos, Plataforas, ERP e Automação',
        description: 'Alta qualidade em tecnologias customizadas para todo tipo de empresa, atendimento completo e de ponta',
        ogDescription: 'Alta qualidade em tecnologias customizadas para todo tipo de empresa, atendimento completo e de ponta',
        ogImage: shareimg
    });
    //Store
    const main = useMainStore();
    main.setColor(true);

</script>
<template>
    <section class="default-page">

        <OrganismsMediaContent class="col-1 left motion" rightMedia="figure" :media="coverimg" mediaName="Exemplo de aplicativo sobe medida feito para a Infinity Energias">
            <h1 class="title"><span>Alta qualidade</span> em tecnologias customizadas</h1>
            <p class="text">Criamos aplicativos transformadores, soluções de software de ponta, plataformas poderosas e ferramentas de automação que revolucionam 
                a maneira de como as empresas operam. Tudo isso com o melhor <span>custo-benefício</span></p>
            <AtomsButton Type="solid left" leftIcon="img" :Icon="whatsapp" :Path="'https://wa.me/5511994307578'" target="_blank">Whatsapp</AtomsButton>
            <AtomsButton Type="outline right" rightIcon="img" :Icon="arrow" :Path="'/servicos'">Serviços</AtomsButton>
        </OrganismsMediaContent>

        <div class="col-1 accordion-grid">
            <MoleculesAccordionsGroup v-for="(topico, index) in servicos" :key="topico" :Title="index" isCircle>
                <AtomsAccordion v-for="item in topico" :key="item" :labelTxt="item.labelTxt">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                </AtomsAccordion>
            </MoleculesAccordionsGroup>
        </div>

        <OrganismsMediaContent class="col-1 blue right" leftMedia="figure" :media="especialistaImg" mediaName="Foto de mesa de escritório com um notebook apresentando o Banktools">
            <h2>Especialistas em projetos de <span>alta complexidade</span></h2>
            <p>Soluções abrangentes, plataformas versáteis que permitem às empresas gerenciarem suas operações a partir de uma única interface.</p>
            <p>Colaborando com processos, conectando departamentos, fornecedores e clientes, promovendo sinergia e eficiência.</p>
            <AtomsButton Type="outline right" rightIcon="img" :Icon="arrow" :Path="'/cases'">Cases</AtomsButton>
        </OrganismsMediaContent>

        <OrganismsServiceGrid class="col-1 service-gallery" rightIcon="img" side="right" :Icon="arrowWhite" hasButton Caption="Explore mais detalhes da nossa capacidade" Copy="Serviços" Path="/servicos" />

        <OrganismsMediaContent class="col-1 orange left" rightMedia="figure" :media="ttApp" mediaName="Telas do aplicativo técnico torcedor">
            <h2>Novas Startups, conheçam o <span>Técnico Torcedor</span></h2>
            <p>Criamos aplicativos transformadores, soluções de software de ponta, plataformas poderosas e ferramentas de automação que revolucionam 
                a maneira de como as empresas operam. Tudo isso com o melhor <span>custo-benefício</span></p>
            <AtomsButton Type="solid right red" rightIcon="img" :Icon="arrowWhite" Path="/cases">Cases</AtomsButton>
        </OrganismsMediaContent>
        
    </section>
</template>

<script>
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

export default {
    data() {
        return {
            servicos: Object,
        }
    },
    mounted() {
        const lenis = new Lenis({
            duration: 1.4,
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
         
        this.servicos = {
            "Aplicativos": {
                item1:  {
                    labelTxt: 'Logísticas',
                    title: "SCE",
                    content: "Monitora as entregas em tempo real através de um app para confirmar informações e gerenciar performance, gerenciando também as ocorrências do dia a dia."
                },
                item2: {
                    labelTxt: 'Trading',
                    title: "PowerIn App",
                    content: "Gestão sobre o consumo e contratação de energia com informações diárias essenciais para a eficiência energética das empresas ao longo do ano."
                },
                item3: {
                    labelTxt: 'Micromobilidade',
                    title: "Pathnet",
                    content: "Plataforma de micro mobilidade para gerenciar de forma completa a operação de bikes e patinetes via app permitindo o uso e gerenciamento. Projeto white label disponível para empresas de aluguel de veículos elétricos."
                }
            },
            "ERP's": {
                item1:  {
                    labelTxt: 'Logística, WMS e Operações',
                    title: "SGC ERP",
                    content: "Composto com toda a bagagem necessária para operações complexas, atuando com alta demanda e diversidade de funções, inclusive logística reversa, WMS e transportes"
                },
                item2: {
                    labelTxt: 'PMES de INDÚSTRIA e COMÉRCIO',
                    title: "Dexter MN",
                    content: "Dedicado a cercar os processos essenciais na gestão da empresa, desde a produção até o faturamento e vendas, auxiliando a otimização do tempo com tarefas administrativas, livrando tempo dos membros importante das empresas"
                },
                item3: {
                    labelTxt: 'REVENDAS E DISTRIBUIDORES',
                    title: "SGC ou Dexter",
                    content: "Empresas dessa área encontram em nossos ERP's as ferramentas mais importantes na operação fiscal, contábil e tributária de forma eficiente e otimizada"
                }
            },
            "Plataformas": {
                item1:  {
                    labelTxt: 'Pedidos B2B',
                    title: "e-Supri",
                    content: "Criado em 2002 atua na gestão de pedidos B2B, permitindo de forma otimizada o abastecimento do mercado de fast-food."
                },
                item2: {
                    labelTxt: 'Instituições Financeiras',
                    title: "Bank Tools",
                    content: "Automação para instituições financeiras atuando na gestão de empréstimos, consignação, cartões de crédito e averbação."
                },
                item3: {
                    labelTxt: 'Ressarcimento de impostos',
                    title: "SGC",
                    content: "Módulo especial do ERP SGC que auxilia as empresas do lucro presumido e lucro real a recuperar administrativamente impostos como ICMS, ST e CAT 42/18"
                }
            }
        };

        gsap.set(['.accordion-grid', '.btn.solid', '.btn.outline','.page-footer'], {autoAlpha: 0});
        gsap.set('.blue-geometry', {y: -100, autoAlpha: 0})
        gsap.set(['.logo','.title', '.text'], {x: -100, autoAlpha: 0});
        gsap.set(['.btn.solid', '.btn.outline'], { autoAlpha: 0});
        gsap.set('.cover', { autoAlpha: 0,x: 800, rotation: 180});

        gsap.to(['.btn.solid', '.btn.outline','.accordion-grid','.page-footer'], {
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.4,
            ease: 'expo.out'
        });
        gsap.to(['.logo','.title', '.text'], {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'expo.out'
        });
        gsap.to('.blue-geometry', {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'expo.out'
        });
        gsap.to('.cover', {
            x:0,
            duration: 1,
            autoAlpha: 1,
            rotation: 0,
            delay: 0.4,
            ease: 'expo.out'
        });

    },
    beforeRouteLeave(to, from, next) {
        gsap.to('.blue-geometry', {
            duration: 0.6,
            y: -100,
            autoAlpha:0,
            delay: 0.3,
            ease: 'expo.out'
        })
        gsap.to(['.logo','.default-page','.accordion-grid', '.page-footer'], {
            autoAlpha:0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'expo.out',
            onComplete: () => {
                next();
            }
        });
    }
}
</script>