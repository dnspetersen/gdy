<script setup>
    const props = defineProps ({
        Title: String,
        Content: String,
        isCircle: Boolean,
    })
</script>
<template>
    <div class="accordion-group">
        <div v-if="isCircle" class="col-3 circle-title">
           <h3> {{ Title }} </h3>
        </div>
        <div v-else class="col-2 square-content">
            <h3>{{ Title }}</h3>
            <p>{{ Content }}</p>
        </div>
        <div class="sec-2">
            <slot />
        </div>
    </div>
</template>