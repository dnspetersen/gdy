<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/esupri-cover-page.jpg";
import screen01 from "@/assets/imgs/esupri-screen-01.jpg";
import screen02 from "@/assets/imgs/esupri-screen-02.jpg";
import screen03 from "@/assets/imgs/esupri-screen-03.jpg";
import arrow from '@/assets/imgs/arrow-right-white.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias | e-Supri plataforma de pedidos B2B',
    ogTitle: 'GDY tecnologias | e-Supri plataforma de pedidos B2B',
    description: 'Com uma vasta bagagem o e-Supri atende a empresa com excelência no processo logístico de entregas com uma plataforma B2B de alta performance',
    ogDescription: 'Com uma vasta bagagem o e-Supri atende a empresa com excelência no processo logístico de entregas com uma plataforma B2B de alta performance',
    ogImage: cover
});

const main = useMainStore();
main.changeVisibility('visible');

const slides = [screen01,screen02,screen03]

</script>

<template>
    <header class="case-header">
        <nuxt-link class="close" to="/cases">
            <img :src="close" />
        </nuxt-link>
        <caption>CASE</caption>
        <h1>{{ title }}</h1>
    </header>
    <img :src="cover" />
    <ul>
        <li>
            <p>Cliente</p>
            <h3>{{ nomeCliente }}</h3>
        </li>
        <li>
            <p>Produto</p>
            <h3>{{ nomeProduto }}</h3>
        </li>
        <li>
            <p>Tecnologias</p>
            <h3 v-for="item in tecnologias" :key="item">
                {{ item }}
            </h3>
        </li>
    </ul>
    <article>
        <Swiper :loop="true">
            <SwiperSlide v-for="slide in slides" :key="slide">
                <img :src="slide" />
            </SwiperSlide>
            <MoleculesSwiperControls />
        </Swiper>
        <p>Um dos primeiros projetos web criados pela GDY, lançado em 2002, se renova e performa cada vez mais, atendendo a Platlog a mais de 20 anos.</p>
        <p>O e-Supri é uma plataforma para a realização de pedidos via internet, conhecido como B2B, traz diversas outras funcionalidades que apoiam a solicitação de suprimentos
            por parte dos lojistas, por exemplo, a visão financeira da loja com a empresa, a consulta de pedidos realizados e histórico de produtos, a geração de ocorrências criando
            um canal de comunicação, relatórios diversos que possibilitam análises de sazonalidade, produtos chave, maiores demandas, shelf-life, lotes, etc.
        </p>
        <p>O sucesso da plataforma vêm da facilidade de operação, super intuitivo o usuário realiza facilmente longos pedidos com apenas 3 etapas, e outra importante caracterísitca é a visibilidade
            que a loja passa a ter sobre o ciclo de entregas, além de abrir ocorrências de forma imediata contando com o excelente atendimento da Platlog.
        </p>
        <p>A plataforma é muito robusta e multi-empresas, possibilita administradores de redes de loja, administradores de franquias e a empresa a terem uma visão holística da operação de entregas.</p>
        <div class="actions">
            <AtomsButton Type="solid" rightIcon="img" :Icon="arrow" Path="https://www.esupri.com.br/" target="_blank">Website</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/tecnicotorcedor">Case: TécnicoTorcedor</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/powerin">Case: PowerIn</AtomsButton>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: "e-Supri",
            nomeCliente: "Platlog",
            nomeProduto: "Plataforma de pedidos",
            tecnologias: { tecno1: "Web 3.0", tecno2: "MySQL", tecno3: "PHP", tecno4: "SGC ERP"},
        };
    },
    components: { AtomsButton }
}
</script>