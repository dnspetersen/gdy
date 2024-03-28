<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/Pathnet-cover-page.jpg";
import screen01 from "@/assets/imgs/pathnet-screen-01.jpg";
import screen02 from "@/assets/imgs/pathnet-screen-02.jpg";
import screen03 from "@/assets/imgs/pathnet-screen-03.jpg";
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias | Pathnet gestão de micromobilidade',
    ogTitle: 'GDY tecnologias | Pathnet gestão de micromobilidade',
    description: 'Conheça uma poderosa ferramenta para gerenciar 360 graus a operação de transporte elétrico',
    ogDescription: 'Conheça uma poderosa ferramenta para gerenciar 360 graus a operação de transporte elétrico',
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
        <p>Com o ecossistema do Pathnet as empresas de micromobilidade tem a tecnologia necessária para uma operação completa do serviço de locação de veículos elétricos.</p>
        <p>O aplicativo disponibilizado aos usuários possibilita o desbloqueio de veículos, como bikes e patinetes, pagamento das tarifas e controle do tempo de uso, permitindo a fácil localização
            dos meios disponíveis no mapa e os pontos de locação e devolução dos mesmos, além dessas funcionalidades o usuário pode ver seu histórico de viagens e solicitar atendimento da central
        </p>
        <p>A plataforma permite ao operador a gestão dos veículos, o acompanhamento de viagens, intercorrências, e o gerenciamento e atendimento dos usuários. Tudo em tempo real.</p>
        <p>A programação dos IoTs, ou seja, os equipamentos que realizam a comunicação do veículo com a central e o usuário, foram também realizados pela GDY em parceria com a GRIDE</p>
        <p>Temos cases de sucesso que comprovam a qualidade do Pathnet, hoje presentes na estrutura da Bike City, Adventure e Ibirabike.</p>
        <div class="actions">
            <AtomsButton Type="outline-blue" Path="https://play.google.com/store/apps/details?id=app.pathnet" target="_blank" >Play Store</AtomsButton>
            <AtomsButton Type="outline-blue" Path="https://apps.apple.com/us/app/pathnet-tack/id1641409136" target="_blank" >Apple Store</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/uanna">Case: Uanna</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/esupri">Case: e-Supri</AtomsButton>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: "Pathnet",
            nomeCliente: "Bike City e Adventure",
            nomeProduto: "Aplicativo e Plataforma",
            tecnologias: { tecno1: "Flutter", tecno2: "Angular", tecno3: "MySQL"},
        };
    },
    components: { AtomsButton }
}
</script>