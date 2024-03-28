<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/BT-cover-page.jpg";
import screen01 from "@/assets/imgs/BT-screen-01.jpg";
import screen02 from "@/assets/imgs/BT-screen-02.jpg";
import screen03 from "@/assets/imgs/BT-screen-03.jpg";
import arrow from '@/assets/imgs/arrow-right-white.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias | Banktools automação para insituições financeiras',
    ogTitle: 'GDY tecnologias | Banktools automação para insituições financeiras',
    description: 'A GDY desenvolveu uma plataforma de automação fora da caixa para instituições financeira que elimina as tarefas repetitivas',
    ogDescription: 'A GDY desenvolveu uma plataforma de automação fora da caixa para instituições financeira que elimina as tarefas repetitivas',
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
        <p>Um dos mais desafiadores projetos da GDY o Banktools é uma poderosa ferramenta de automação para instituições financeiras.</p>
        <p>A plataforme surgiu devido a alta demanda nas mãos de analistas que perdiam o dia em tarefas repetitivas do mercado financeiro e deixavam de aproveitar seu tempo com tarefas 
            mais produtivas, com esse ponto de partida criamos uma ferramenta capaz de entender os mais diversos sistemas e realizar tarefas que antes demandavam muito tempo e passaram a 
            serem efetuadas mais rapidamente e sem ocupar o tempo de colaboradores.</p>
        <p>Com a necessidade de segurança da informação e confiabilidade das informações o Banktools se tornou uma plataforma segura, em acordo com as regras LGPD e a prova de erros 
            que occoriam eventuamente quando feito por pessoas.</p>
        <p>O Banktools realiza averbações de consignados, correções de taxas, baixa e inclusão de empréstimos e outras funções junto a diversos bancos e instituições financeiras, e tem em sua carteira clientes
            conhecidos do mercado como por exemplo o Banco Pan, BMG, Daycoval, prefeituras de diversas cidades e outros.</p>
        <div class="actions">
            <AtomsButton Type="solid" rightIcon="img" :Icon="arrow" Path="https://banktools.com.br/" target="_blank">Website</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/powerin">Case: PowerIn</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/uanna">Case: Uanna</AtomsButton>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: "BankTools",
            nomeCliente: "BankTools",
            nomeProduto: "Plataforma de averbação",
            tecnologias: { tecno1: "Automação", tecno2: "PHP", tecno3: "Web 3.0" },
        };
    },
    components: { AtomsButton },
}
</script>