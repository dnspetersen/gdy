<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/PowerIn-cover-page.jpg";
import screen01 from "@/assets/imgs/PowerIn-screen-01.jpg";
import screen02 from "@/assets/imgs/PowerIn-screen-02.jpg";
import arrow from '@/assets/imgs/arrow-right-white.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias, aplicativos e sistemas para empresas do setor de energias e outras commodities',
    ogTitle: 'GDY tecnologias, aplicativos e sistemas para empresas do setor de energias e outras commodities',
    description: 'Resolva a eficiência e a disponibilidade de informações para sua empresa com aplicativos dedicados e customizados especialmente ao seu negócio',
    ogDescription: 'Resolva a eficiência e a disponibilidade de informações para sua empresa com aplicativos dedicados e customizados especialmente ao seu negócio',
    ogImage: cover
});

const main = useMainStore();
main.changeVisibility('visible');

const slides = [screen01,screen02]

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
        <p>No powerIn os clientes obtém uma forma fácil de conferir as informações de seus contratos de energia com a Infinity Energias.
            Nele são disponibilizadas informações de consumo diário, metas mensais de consumo, comparativos e históricos conforme os indicativos de mercado,
            além disso é possível ver notícias atualizadas, avaliação de preços para aquisição de novos contratos e obter um canal de comunicação direto com a empresa
        </p>
        <p>A concepção do App surgiu da percepção da empresa com a dinâmica dos clientes que, sem tempo para acompanharem essas informações, passaram a ter em mãos a qualquer
            instante as informações essenciais para uma gestão mais próxima de seus contratos.
        </p>
        <p>O app já traz resultados no atendimento ao cliente, e a Infinity Energias consegue atuar de modo mais eficiente em seus processos, através de um painel administrativo em
            que os analistas atualizam informações, se comunicam com clientes e geram relatórios importantes para análise do negócio
        </p>
        <div class="actions">
            <AtomsButton Type="outline-blue" Path="https://play.google.com/store/apps/details?id=br.com.infinityenergias.powerin" target="_blank" >Play Store</AtomsButton>
            <AtomsButton Type="outline-blue" Path="https://apps.apple.com/us/app/powerin/id1611088636" target="_blank" >Apple Store</AtomsButton>
            <AtomsButton Type="solid" rightIcon="img" :Icon="arrow" Path="https://www.infinityenergias.com.br/" target="_blank">Website</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/sce">Case: SCE</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/banktools">Case: BankTools</AtomsButton>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: "PowerIn",
            nomeCliente: "Infinity Energias",
            nomeProduto: "Aplicativo",
            tecnologias: { tecno1: "Flutter", tecno2: "MySQL", tecno3: "PHP" },
        };
    },
    components: { AtomsButton }
}
</script>