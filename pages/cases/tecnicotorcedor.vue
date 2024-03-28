<script setup>
import close from "@/assets/imgs/close-btn.svg";
import cover from "@/assets/imgs/tecnico-torcedor-case.jpg";
import screen01 from "@/assets/imgs/tt-painel-01.jpg";
import screen02 from "@/assets/imgs/tt-painel-02.jpg";
import screen03 from "@/assets/imgs/tt-painel-03.jpg";
import screen04 from "@/assets/imgs/tt-painel-04.jpg";
import arrow from '@/assets/imgs/arrow-right-white.svg';
import right from '@/assets/imgs/arrow-right-blue.svg';
import left from '@/assets/imgs/arrow-left-blue.svg';
import { AtomsButton } from "#components"
import { useMainStore } from '~/store';

//SEO
useSeoMeta({
    title: 'GDY tecnologias e Técnico Torcedor',
    ogTitle: 'GDY tecnologias e Técnico Torcedor',
    description: 'Somos impulsionadores de Startups que buscam soluções tecnologicas para criar games interativos e conectados',
    ogDescription: 'Somos impulsionadores de Startups que buscam soluções tecnologicas para criar games interativos e conectados',
    ogImage: cover
});

const main = useMainStore();
main.changeVisibility('visible');

const slides = [screen01, screen02, screen03, screen04]

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
        <p>Criado em 2015 em parceria com o SPFC se tornou o App oficial do clube e permaneceu até meados de 2016 desvinculado após a mudança de diretoria, nesse período o aplicativo alcançou mais de 200 mil downloads e obteve pontuação 4,6 de 5 nas lojas.</p>
        <p>O Técnico Torcedor tem alta performance para suportar conexões simultâneas durante as partidas, já acompanhou 10 mil usuários em tempo real que interagiam com o game vendo resultados da partidas e a sua pontuação ao longo do jogo, foi utilizado também como canal de notícias com tabelas, data de partidas, novidades etc.</p>
        <p>Cada evento da partida gera pontos conforme os palpites dos jogadores, gerando um ranking e disparando eventos ao longo dos dois tempos da partida, nos intervalos eles escolhem as substituições e ao final a nota da partida, o melhor 
            e o pior jogador em campo, ainda deixa um comentário para ser publicado no site e redes sociais do Técnico Torcedor.</p>
        <p>Através do painel de jogo os administradores organizam todos os jogos, campeonatos, jogadores, times, estádios, juízes, usuários, rankings e dados das partidas.
            Todos os eventos da partida são controlados via painel como narração, gols, cartões, faltas, além de enviarem notificações ao longo do dia.</p>
        <p>Hoje o App tem parceria com o VIVA esportes que transmite via YouTube jogos de diversos times e campeonatos, está passando por atualizações que serão em breve inauguradas.</p>
        <div class="actions">
            <AtomsButton Type="outline-blue" Path="https://play.google.com/store/apps/details?id=br.com.tecnicotorcedor.v4" target="_blank" >Play Store</AtomsButton>
            <AtomsButton Type="outline-blue" Path="https://apps.apple.com/br/app/tecnico-torcedor/id1387881709" target="_blank" >Apple Store</AtomsButton>
            <AtomsButton Type="solid" rightIcon="img" :Icon="arrow" Path="https://tecnicotorcedor.com.br/" target="_blank">Website</AtomsButton>
        </div>
        <div class="actions" style="justify-content: space-between;">
            <AtomsButton Type="text nav" :Icon="left" leftIcon="img" Path="/cases/esupri">Case: e-Supri</AtomsButton>
            <AtomsButton Type="text nav" :Icon="right" rightIcon="img" Path="/cases/sce">Case: SCE</AtomsButton>
        </div>
    </article>
</template>

<script>
import Lenis from "@studio-freight/lenis";

export default {
    data() {
        return {
            title: "Técnico Torcedor",
            nomeCliente: "VIVA ESPORTES",
            nomeProduto: "Aplicativo",
            tecnologias: { tecno1: "Flutter", tecno2: "MySQL", tecno3: "PHP" },
        };
    },
    components: { AtomsButton },
    mounted() {
        const wrapper = document.getElementById('case');
        const content = document.getElementById('content');

        if (window.outerWidth > 960) {

            let isDown = false;
            let startY;
            let scrollTop;
            
            wrapper.addEventListener('mousedown', (e) => {
                isDown = true;
                startY = e.pageY - wrapper.offsetTop;
                scrollTop = wrapper.scrollTop;
            });
            wrapper.addEventListener('mouseleave', () => {
                isDown = false;
            });
            wrapper.addEventListener('mouseup', () => {
                isDown = false;
            });
            wrapper.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const y = e.pageY - wrapper.offsetTop;
                const walk = (y - startY) * 3;
                wrapper.scrollTop = scrollTop - walk;
            });
        }

        const lenis = new Lenis({
            wrapper: wrapper,
            content: content,
            wheelEventsTarget: wrapper,
            duration: 1.4,
        });
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        };
        requestAnimationFrame(raf);
    },
}
</script>