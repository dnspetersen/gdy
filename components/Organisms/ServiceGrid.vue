<script setup>

import gear from '@/assets/imgs/gear-cursor-icon.svg';
import puzzle from '@/assets/imgs/puzzle-icon.svg';
import database from '@/assets/imgs/data-base-icon.svg';
import magnify from '@/assets/imgs/magnify-gear-icon.svg';
import gauge from '@/assets/imgs/gauge-icon.svg';
import brain from '@/assets/imgs/brain-circuit-icon.svg';

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
    <div>
        <h2>Inúmeras <span>habilidades</span></h2>
        <h5>Munidos de conhecimento e confiança, atuamos no território do desenvolvimento de tecnologia, criando soluções intuitivas 
            que se integram perfeitamente aos sistemas existentes, aumentando a produtividade e envolvendo os usuários.</h5>
        <div class="card-grid">
            <MoleculesCard v-for="item in cards" :key="item" :badgeImg="item.badgeImg" :title="item.title" >
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
                badgeImg: gear,
                title: 'Web-services',
                content: 'Desenvolvimento da comunicação e interação entre sistemas e aplicativos com metodologia REST, RUST ou webGL. Utilizados para fornecer funcionalidades específicas, como acesso a bancos de dados, processamento de pagamentos, envio de mensagens, entre outros.',
            },
            item2: {
                badgeImg: puzzle,
                title: 'Integrações',
                content: 'Combinamos diferentes sistemas, aplicativos ou componentes de software para que eles possam funcionar juntos de forma eficiente e compartilhar informações entre si, fundamental para garantir a interoperabilidade e a troca de informações entre os diferentes elementos de uma infraestrutura.',
            },
            item3: {
                badgeImg: database,
                title: 'Performance de Banco de Dados',
                content: 'Configuração de infraestruturas com grandes volumes de dados, realizar consultas e operações de forma rápida e eficiente. Monitoramento e otimização da performance de dados envolvem a identificação e resolução de gargalos, ajustes e implementação de técnicas que melhoram o desempenho do sistema.',
            },
            item4: {
                badgeImg: magnify,
                title: 'Gerenciamento de Dados',
                content: 'Atuamos na criação de bancos de dados, implementação de políticas de segurança, definição de estruturas de dados, realização de backups, recuperação de dados, entre outras. Auxílio na tomada de decisões informadas e no suporte às operações das organizações.'
            },
            item5: {
                badgeImg: gauge,
                title: 'Otimização de performance',
                content: 'Otimização de performance afim de melhorar o desempenho e a eficiência de sistemas, aplicativos ou processos. Ajustes de configuração, otimização de algoritmos e otimização para maximizar a velocidade, a eficiência e resposta dos sistemas. Reduzimos custos operacionais e melhoramos eficiência dos processos.'
            },
            item6: {
                badgeImg: brain,
                title: 'Automação de processos',
                content: 'Criação de fluxos de trabalho automatizados e de etapas de processos, seguindo regras e condições pré-definidas. Automação precisa que pode melhorar a eficiência, reduzir erros, agilizar operações e liberar recursos. Automatize tarefas repetitivas.'
            }
        }
    },
}
</script>