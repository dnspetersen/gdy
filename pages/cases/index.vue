<script setup>

import { useMainStore } from '~/store';
const main = useMainStore();
main.changeVisibility('hidden');

</script>
<template>
   <slot />
</template>