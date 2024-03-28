<script setup>

import sce from '@/assets/imgs/sce-ico.png';
import powerIn from '@/assets/imgs/infinity-ico.png';
import banktools from '@/assets/imgs/banktools-ico.png';
import uanna from '@/assets/imgs/uanna-ico.png';
import pathNet from '@/assets/imgs/pathnet-ico.png';
import eSupri from '@/assets/imgs/e-supri-ico.png';

const prop = defineProps ({
    services: Boolean,
    Copy: String,
    Caption: String,
    rightIcon: String,
    leftIcon: String,
    Icon: String,
    side: String,
    Path: String,
    hasButton: Boolean
})

</script>
<template>
    <div class="col-1">
        <h2>Seleção especial de projetos <span>realizados</span></h2>
        <div class="card-grid">
            <MoleculesCard v-for="item in cards" :key="item" :badgeImg="item.badgeImg" :title="item.title" :path="item.url" action >
                <p v-if="services !== false"> {{ item.content }} </p>
            </MoleculesCard>
        </div>
        <p class="col-1">{{ Caption }}</p>
        <AtomsButton v-if="hasButton !== false" Type="solid blue" :class="side" :leftIcon="leftIcon" :rightIcon="rightIcon" :Icon="Icon" :Path="Path">
            {{ Copy }}
        </AtomsButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: Object,
        }
    },
    mounted() {
        
        this.cards = {
            item1: {
                badgeImg: sce,
                title: 'SCE',
                content: 'Monitora as entregas em tempo real através de um app para confirmar informações e gerenciar performance, gerenciar as ocorrências do dia a dia.',
                url: '/cases/sce'
            },
            item2: {
                badgeImg: powerIn,
                title: 'PowerIn',
                content: 'Gestão sobre o consumo e contratação de energia com informações diárias essenciais para a eficiência energética das empresas ao longo do ano.',
                url: '/cases/powerin'
            },
            item3: {
                badgeImg: banktools,
                title: 'BankTools',
                content: 'Automação para instituições financeiras atuando na gestão de empréstimos, consignação, cartões de crédito e averbação.',
                url: '/cases/banktools'
            },
            item4: {
                badgeImg: uanna,
                title: 'Uanna',
                content: 'Startup com foco no comércio offline, aproximando lojas e clientes com colaboração de comunidades locais, criando um novo networking digital.',
                url: '/cases/uanna'
            },
            item5: {
                badgeImg: pathNet,
                title: 'Path.net',
                content: 'Plataforma de micro mobilidade para gerenciar de forma completa a operação de bikes e patinetes via app permitindo o uso e gerenciamento.',
                url: '/cases/pathnet'
            },
            item6: {
                badgeImg: eSupri,
                title: 'e-Supri',
                content: 'Criado em 2002 atua na gestão de pedidos B2B, permitindo de forma otimizada o abastecimento do mercado de fast-food.',
                url: '/cases/esupri'
            }
        }
    },
}
</script>