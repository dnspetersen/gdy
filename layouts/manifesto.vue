<script setup>
import shareimg from '@/assets/imgs/og-image-home.jpg';

//SEO
useSeoMeta({
    title: 'GDY tecnologias de alta qualidade: Saas, Aplicativos, Plataforas, ERP e automação',
    ogTitle: 'GDY tecnologias de alta qualidade: Saas, Aplicativos, Plataforas, ERP e Automação',
    description: 'Alta qualidade em tecnologias customizadas para todo tipo de empresa, atendimento completo e de ponta',
    ogDescription: 'Alta qualidade em tecnologias customizadas para todo tipo de empresa, atendimento completo e de ponta',
    ogImage: shareimg
});
</script>
<template>
    <main>
        <MoleculesToast />
        <div class="page">
            <slot />
        </div>
        <OrganismsPageFooter />
        <MoleculesMenu />
    </main>
</template>