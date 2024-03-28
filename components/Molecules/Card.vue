<script setup>
import arrow from '@/assets/imgs/arrow-right-blue.svg';
    const props = defineProps({
        title: String,
        btn: Boolean,
        path: String,
        action: {
            default: false
        },
        badgeImg: String,
    })
</script>
<template>
    <div class="card">
        <AtomsBadge :badgeImg="badgeImg">{{ title }}</AtomsBadge>
        <slot />
        <template v-if="action !== false">
            <AtomsButton Type="text" rightIcon="img" :Icon="arrow" :Path="path">Saiba mais</AtomsButton>
        </template>
    </div>
</template>
