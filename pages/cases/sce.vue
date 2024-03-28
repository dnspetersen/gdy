<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/sce_cover_page.jpg";
import screen01 from "@/assets/imgs/sce-screen-01.jpg";
import screen02 from "@/assets/imgs/sce-screen-02.jpg";
import screen03 from "@/assets/imgs/sce-screen-03.jpg";
import whatsapp from '@/assets/imgs/whatsapp.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias, aplicativos e sistemas para logísticas',
    ogTitle: 'GDY tecnologias, aplicativos e sistemas para logísticas',
    description: 'Conheça o SCE, nosso aplicativo de apoio a logísticas na hora de realizar as entregas com a máxima confiabilidade e integração aos sistemas instalados',
    ogDescription: 'Conheça o SCE, nosso aplicativo de apoio a logísticas na hora de realizar as entregas com a máxima confiabilidade e integração aos sistemas instalados',
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
        <p>O SCE é uma ferramenta essencial para empresas de logísticas com grande número de entregas, organizando os pedidos e otimizando as rotas de envio, 
            possibilitando o acompanhamento em tempo real e auxiliando no tratamento de ocorrências eventuais do dia a dia, além disso ciram um canal de comunicação imediato com os clientes.</p>
        <p>São diversas funcionalidades em uma navegação guiada que facilitam a operação, seguindo a métrica "One button" que reduz o número de ações e privilegia a execução do processo de forma intuitiva
            sem recorrer ao uso excessivo de teclados e seleções de listas. No app é possível iniciar rotas e entregas dos pedidos, e também finalizá-las, permitem a verificação de informações importantes
            para cumprimento de todas ações necessárias, conforme a necessidade da empresa, certificando a qualidade de atendimento e eficiência da operação.</p>
        <p>Por trás da aplicação existe a integração com o ERP web MySGC, ele carrega as informações do SCE com as informações das entregras; endereços, produtos do pedido, notas vinculadas, 
            nome do lojista responsável, transportadora, motorista responsável, datas e horários previstos de entrega.</p>
        <p>Hoje o SCE é exclusivo da Platlog, auxiliando a realizar mais de 5 mil pedidos mensais e gera relatórios precisos dos resultados, também informa a qualidade dos serviços e ajuda a encontrar gaps e oportunidades.</p>
        <div class="actions">
            <AtomsButton Type="solid left" leftIcon="img" :Icon="whatsapp" Path="https://wa.me/5511994307578" target="_blank" >Mais informações</AtomsButton>
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
            title: "SCE",
            nomeCliente: "Platlog",
            nomeProduto: "Aplicativo",
            tecnologias: { tecno1: "Flutter", tecno2: "MySQL", tecno3: "PHP", tecno4: 'SGC ERP' },
        };
    },
    components: { AtomsButton }
}
</script>