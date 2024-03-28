<script setup>
import coverImg from '@/assets/imgs/servicos-cover.png';
import whatsapp from '@/assets/imgs/whatsapp.svg'
import shareimg from '@/assets/imgs/og-image-servicos.jpg';
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
    title: 'GDY tecnologias de alta qualidade, serviços esseciais a empresas que investem em tecnologia',
    ogTitle: 'GDY tecnologias de alta qualidade, serviços esseciais a empresas que investem em tecnologia',
    description: 'Criatividade e conhecimento são a base dos serviços de tecnologia que a GDY oferece a empresas em busca de inovar e ampliar sua produtividade e resultados',
    ogDescription: 'Criatividade e conhecimento são a base dos serviços de tecnologia que a GDY oferece a empresas em busca de inovar e ampliar sua produtividade e resultados',
    ogImage: shareimg
});
//Store
const main = useMainStore();
main.setColor(false);

</script>

<template>
    <section class="default-page">

        <OrganismsMediaContent class="col-1 left" rightMedia="figure" :media="coverImg" mediaName="Imagem de smartphone represetando os mesmos gráficos presentes no computador ao fundo">
            <h1 class="title">Serviços empresariais <span>multiplataforma</span></h1>
            <p class="text">Criamos soluções robustas que otimizam as operações, simplificam os fluxos de trabalho e fornecem 
                resultados por meio de análise de dados e otimização de processos.</p>
            <AtomsButton Type="solid left" leftIcon="img" :Icon="whatsapp" :Path="'https://wa.me/5511994307578'" target="_blank">Whatsapp</AtomsButton>
        </OrganismsMediaContent>

        <div class="col-1 accordion-content">
            <MoleculesAccordionsGroup v-for="opt in servicos" :key="opt" :Title="opt.label" :Content="opt.headline">
                <AtomsAccordion v-for="item in opt.subitem" :key="item" :labelTxt="item.labelTxt">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                </AtomsAccordion>
            </MoleculesAccordionsGroup>
        </div>

        <OrganismsServiceGrid class="col-1 service-content" rightIcon="img" side="right" services />

    </section>
</template>

<style lang="less" scoped>
    .default-page {
        position: relative;
        z-index: 2;
    }
</style>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            servicos: Object
        }
    },
    mounted() {
     const label1 = "Logística";
     const label2 = "PME's";
     const label3 = "Projetos Especiais";
     const label4 = "Startups";
     const headline1 = "Gerencie o processo com controle completo da sua empresa desde a captação até a distribuição com um ERP robusto que engloba para além do trivial, inclusive a gestão de transportes, com suporte de aplicativos, plataforma de pedidos e até de logística reversa.";
     const headline2 = "Soluções personalizadas para as mais variadas operações e negócios das pequenas e médias industrias e comércios, possibilitando além da administração o cuidado de empresa grande. Gerencie processos, controle de estoque, compras, operações e ferramentas tributárias completas.";
     const headline3 = "Projetos que saem do tradicional e englobam tecnologias inovadoras com objetivo de atender negócios de alta complexidade e atividades que exigem soluções pioneiras. Projetos de automação, machine learning, integração hardware software, entre outros";
     const headline4 = "Ajudamos grandes ideias a se tornarem realidade, providenciando soluções completas que vão além do aplicativo. São plataformas e integrações com objetivo de cercar os processos e eficiência que possibilitam Startups a progredirem no mercado e atrair investidores.";

        this.servicos = {
           opt1: {
                label: label1,
                headline: headline1,
                subitem: {
                    item1: {
                        labelTxt: 'SGC ERP',
                        title: 'Alta performance',
                        content: 'Sistema integrado projetado para ajudar organizações a gerenciar eficientemente uma ampla gama de processos e atividades comerciais, incluindo logística reversa, WMS e transportes. Projetado para facilitar a coleta, armazenamento, gerenciamento e interpretação de dados e informações relacionadas às operações da empresa. O principal objetivo do SGC é melhorar a eficiência, a comunicação e a tomada de decisões dentro de uma organização, consolidando informações de várias áreas funcionais em um único sistema centralizado.'
                    },
                    item2: {
                        labelTxt: 'SCE APP',
                        title: 'Aplicativo para apoio e rastreamento de entregas',
                        content: 'Os motoristas recebem em mãos um app que os apoia na ordem das entregas, otimizando o percurso, auxiliam na conferência do pedido da loja, evitando erros e permitem uma comunicação rápida com a central de atendimentos para tratativa de ocorrências, e o lojista assina confirmando o correto recebimento e informa quaisquer problemas com o pedido ou equipe de entrega.'
                    },
                    item3: {
                        labelTxt: 'Portal de Pedidos B2B',
                        title: 'e-Supri',
                        content: 'Um portal dedicado aos lojistas das redes de restaurantes com objetivo de automatizar o processo de solicitação de produtos para o abastecimento das lojas, hoje essencial no processo das principais logísticas do país, tornando o processo eficaz e completo'
                    },
                    item4: {
                        labelTxt: 'Logística Reversa',
                        title: 'Operação de devoluções e recolhas',
                        content: 'Um processo complexo e essencial para locadoras de maquinários, equipamentos de TI e telecomunicações, a empresa controla os dados principais para a operação de logística reversa com uma comunicação entre os fornecedores e empresas de entregas que aproveitam para fazer o processo reverso de buscar os produtos para evio a matriz ou armazéns disponibilizados.'
                    }
                },
            },
            opt2: {
                label: label2,
                headline: headline2,
                subitem: {
                    item1: {
                        labelTxt: 'ERP',
                        title: 'Dexter Manager (Mn)',
                        content: 'O objetivo do ERP Dexter é alinhar os recursos da organização com os objetivos estratégicos, permitindo que a empresa alcance maior eficiência operacional, vantagem competitiva e crescimento sustentável. Isso é alcançado por meio da análise cuidadosa das necessidades de recursos, alocação inteligente e ajustes contínuos à medida que as condições do mercado e os objetivos organizacionais evoluem. Dedicado a tratar os processos essenciais na gestão da empresa, desde a produção até o faturamento e vendas, auxiliando a otimização do tempo com tarefas administrativas, livrando tempo dos membros importante das empresas.'
                    },
                    item2: {
                        labelTxt: 'Tecnologias Empresariais',
                        title: 'Automação e plataformas customizadas',
                        content: 'Diversas empresas tem demandas específicas do seu ramo de atuação, necessitam de soluções que automatizam processos e permitem a execução de atividades que não podem ser gerenciadas por sistemas de mercado, para isso atuamos junto ao cliente para o desenvolvimento de tecnologias empresariais que suprem as lacunas de operação integrando aos sistemas principais com qualidade e eficiência'
                    },
                    item3: {
                        labelTxt: 'Recuperação ADM de impostos',
                        title: 'Recuperação e ressarcimento por vias administrativas',
                        content: 'Dentro das nossas tecnologias existem módulos especiais que auxiliam na análise, documentação e execução dos processos necessários para o ressarcimento de impostos pagos, pro vezes as empresas encontram auto valor disponível que podem salvar um orçamento ou capital de giro para continuidade do negócio'
                    }
                },
            },
            opt3: {
                label: label3,
                headline: headline3,
                subitem: {
                    item1: {
                        labelTxt:"Automação para Bancos",
                        title: 'BankTools',
                        content: 'Presente em grandes instituições financeiras como o BMG, Banco Pan, Daycoval, entre outras, é uma plataforma de alta capacidade para auxiliar as tarefas repetitivas de averbação de consignados, empréstimos, faturamento de cartões a serem executadas de forma automatizada'
                    },
                    item2: {
                        labelTxt: "Gestão de energia",
                        title: "Portal Infinity",
                        content: 'Criado para possibilitar a gestão de contratos de energia, analisando o consumo e aquisição de contratos, gerando relatórios completos que auxiliam no curto e longo prazo a eficiência energética dos clientes.',
                    },
                    item3: {
                        labelTxt: "Plataforma para clubes",
                        title: "Clube.app",
                        content: "Uma plataforma para administradores de clubes e associações, e que possibilitam aos associados de receberem e gereneciarem informações, solicitando reservas, ingressos, atualizando dados pessoais e de acesso, criando uma canal exclusivo de comunicação com o clube."
                    }
                }
            },
            opt4: {
                label: label4,
                headline: headline4,
                subitem: {
                    item1: {
                        labelTxt: "Empresas de micromobilidade",
                        title: "Pathnet white label",
                        content: "Sistema integrado para operação de aluguel de veículos de micromobilidade como bikes, triciclos, patinentes. Permitindo a empresa gerenciar a utilização de seus veículos e aos usuários a utilizarem os veículos através do aplicativo, acompanhando via internet a sua viagem e conta. Pode ser customizado com as métricas e comunicação da empresa.",
                    },
                    item2: {
                        labelTxt: "Social games",
                        title: "Técnico Torcedor white label",
                        content: "Com uma plataforma de gerenciamento e aplicativo, o Técnico torcedor é um game de advinhação dos eventos de uma partida de futebol, permitindo a criação de campeonato, narração de partidas, gestão dos times, tabelas, jogos e usuários."
                    },
                    item3: {
                        labelTxt: "Matchmaking de Negócios",
                        title: "Uanna white label",
                        content: "Através de dois aplicativos, um para empresa e outro para os clientes, o Uanna permite a divulgação de ofertas de produtos e serviços para os potenciais comprados existentes na região, permitindo que encontrem e reservem serviços e produtos nas proximidades, conforme a distância desejada."
                    }
                }
            }
        }
        gsap.set(['.btn.solid','.accordion-content','.page-footer'], {autoAlpha: 0});
        gsap.set(['.logo','.title', '.text'], {x: -100, autoAlpha: 0});
        gsap.set('.orange-geometry', {y: -120, x: 100, autoAlpha: 0});
        gsap.set('.cover', { autoAlpha: 0,x: 800, rotation: 180});

        gsap.to(['.btn.solid', '.accordion-content','.page-footer'], {
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
        gsap.to(['.logo','.default-page', '.accordion-grid','.page-footer'], {
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