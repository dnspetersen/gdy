<script setup lang="ts">
    import prev from '@/assets/imgs/chevron-left.svg';
    import next from '@/assets/imgs/chevron-right.svg';
    const swiper = useSwiper()
</script>

<template>
  <button class="btn-next" @click="swiper.slideNext()">
    <img :src="next" alt="Next" />
  </button>
  <button class="btn-prev" @click="swiper.slidePrev()">
    <img :src="prev" alt="Previous" />
  </button>
</template>