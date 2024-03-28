<script setup lang="ts">
    const props = defineProps ({
        labelTxt: String,
    })
</script>

<template>
    <div :class="{open: isOpen}" class="accordion">
        <button type="button" class="col-1" @click="expand">
            {{ labelTxt }}
            <img src="@/assets/imgs/chevron-down-red.svg" alt="abrir conteúdo" />
        </button>
        <div class="expand-area col-1">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Lenis from '@studio-freight/lenis';

export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        expand() {
            this.isOpen = !this.isOpen;
            const lenis = new Lenis({
                duration: 1.4,
            })
            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
        }
    }
}
</script>