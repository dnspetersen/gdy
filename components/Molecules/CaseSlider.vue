<script setup>
    const props = defineProps({
        slides: Object,
    })
</script>
<template>
    <div class="slider">
        <div class="slides">
            <figure :slides="slides" v-for="item in slides" :key="item">
                <img :src="item.screen" />
            </figure>
        </div>
    </div>
</template>
<style scoped>
    figure {
        overflow: hidden;
        border: 1px solid var(--txt-black);
        border-radius: 4px;
        margin-bottom: var(--s-space);
    }
    img {
        width: 100%;
    }
</style>