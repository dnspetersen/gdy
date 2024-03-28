<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/Uanna-cover-page.jpg";
import screen01 from "@/assets/imgs/Uanna-screen-01.jpg"
import screen02 from "@/assets/imgs/Uanna-screen-02.jpg"
import arrow from '@/assets/imgs/arrow-right-white.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias e Uanna matchmaking',
    ogTitle: 'GDY tecnologias e Uanna matchmaking',
    description: 'Somos impulsionadores de Startups que buscam soluções tecnologicas de ponta para concretizar novos negócios',
    ogDescription: 'Somos impulsionadores de Startups que buscam soluções tecnologicas de ponta para concretizar novos negócios',
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
        <p>Idealizado para fortalecer o mercado de rua em comunidades locais o Uanna é o app mais inovador em que trabalhamos nos últimos anos.</p>
        <p>Apresentado como uma nova Startup na Expo Favela trouxe a atenção de empresários, que conectados a realidade das comunidades, buscam formas de impulsionar o mercado local
            em um mundo que se transforma rapidamente e direciona o comércio para o meio digital.
        </p>
        <p>O Uanna consiste em auxiliar negócios, sejam serviços ou comércio, através de dois aplicativos, o Uanna user e o Uanna Seller, a terem como encontrar interesses, pode ser a oferta de um produto,
            a realização de uma consulta, a prestação de um serviço ou curso, ou seja, criar um matchmaking, um encontro de interesses entre clientes e empresários.</p>
        <p>A meta do Uanna é ser o principal meio de reconectar o meio físico, reaproximar as pessoas de uma região ajudando a girar recursos em um mesmo meio, ampliando com o tempo a receita dessas regiões.</p>
        <p>Entre as funcionalidades disponibilizadas estão a seleção de ofertas, reserva de ofertas, perfil de divulgação do empresário, ofertas sercretas, que são ofertas que são reveladas apenas 
            quando o cliente vai até o local, troca de mensagens e envio de notificações, entre outras.</p>
        <div class="actions">
            <AtomsButton Type="outline-blue" Path="javascript:if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) { window.open('https://apps.apple.com/br/app/uanna/id1583277467','_blank')} else {window.open('https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=app.uanna&ddl=1&pcampaignid=web_ddl_1','_blank')}">Uanna</AtomsButton>
            <AtomsButton Type="outline-blue" Path="javascript:if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) { window.open('https://apps.apple.com/br/app/uanna-seller/id1584873735','_blank')} else {window.open('https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=app.uanna.seller','_blank')}" >Uanna Seller</AtomsButton>
            <AtomsButton Type="solid" rightIcon="img" :Icon="arrow" Path="https://uanna.com.br/" target="_blank">Website</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/banktools">Case: BankTools</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/pathnet">Case: Pathnet</AtomsButton>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: "Uanna",
            nomeCliente: "Umbure",
            nomeProduto: "Aplicativo user e seller",
            tecnologias: { tecno1: "Flutter", tecno2: "MySQL", tecno3: "PHP" },
        };
    },
    components: { AtomsButton }
}
</script>