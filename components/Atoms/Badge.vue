<script setup>
    const props = defineProps({
        badgeImg: String
    })
</script>
<template>
    <figure class="badge">
        <img :src="badgeImg" />
        <figcaption>
            <slot />
        </figcaption>
    </figure>
</template>