<script setup>
    const props = defineProps({
        rightIcon: String,
        leftIcon: String,
        Icon: String,
        Type: String,
        Path: String,
    });
</script>
<template>
    <nuxt-link :class="`btn ${Type}`" :to="Path">
        <component :is="leftIcon" class="left-icon" :src="Icon" />
            <slot />
        <component :is="rightIcon" class="right-icon" :src="Icon" />
    </nuxt-link>
</template>