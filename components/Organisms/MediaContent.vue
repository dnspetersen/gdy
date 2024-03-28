<script setup>
    const props = defineProps({
        leftMedia: String,
        rightMedia: String,
        media: String,
        mediaName: String,
    })

</script>
<template>
    <div class="media-content">
        <component :is="leftMedia" class="col-2" >
            <img :src="media" :alt="mediaName" />
        </component>
        <div class="col-2">
            <slot />
        </div>
        <component :is="rightMedia" class="col-2 cover" >
            <img :src="media" :alt="mediaName" />
        </component>
    </div>
</template>