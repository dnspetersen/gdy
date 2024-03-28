<script setup>
import home from '@/assets/imgs/home.svg';
import gear from '@/assets/imgs/gear.svg';
import note from '@/assets/imgs/notebook.svg';
import flat from '@/assets/imgs/gdy-matte.svg';

definePageMeta({
    keepalive: true,
})

</script>

<template>
    <nav class="menu" id="main-menu">
        <figure id="drag-logo">
            <img src="@/assets/imgs/gdy-menu-logo.png" alt="GDY logo menu" />
        </figure>
        <NuxtLink to="/"><img :src="home"/>Home</NuxtLink>
        <NuxtLink to="/servicos"><img :src="gear"/>Serviços</NuxtLink>
        <NuxtLink to="/cases"><img :src="note"/>Cases</NuxtLink>
        <NuxtLink to="/sobre"><img :src="flat"/>A GDY</NuxtLink>
        <button type="button" @click="openWhatsapp">
            <img src="@/assets/imgs/whatsapp.svg" alt="Whatsapp" />
        </button>
    </nav>
</template>

<style lang="less">
@import '../../assets/mixin.less';

nav {
    z-index: 99;
    padding: var(--s-unit) var(--m-unit) var(--s-unit) var(--s-unit);
    display: flex;
    gap: var(--s-unit);
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: fixed;
    top: 88vh;
    left: 50%;
    height: 72px;
    width: 612px;
    border-radius: 12px;
    box-shadow: 0 6px var(--m-unit) -6px var(--secondary-500);
    transform: translateX(-50%);
    background: var(--primary-400);
    @media screen and (max-width: 720px) {
        gap: 0;
        height: 64px;
        width: 100vw;
        top: auto;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateX(0);
        border-radius: 0;
        padding: 0 var(--s-unit) 0 0;
        box-shadow: 0px 0px var(--s-unit) -4px var(--primary-700);
    }
    figure {
        cursor: grab;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background: #003585;
        position: relative;
        img {
            padding: 0 12px;
        }
        &:active {
            cursor: grabbing;
            &:after {
                content: "";
                position: absolute;
                left:50%;
                top:50%;
                transform: translate(-50%,-50%);
                width: 300px;
                height: 300px;
                display: block;
            }
        }
        @media screen and (max-width: 720px) {
            display: none;   
        }
    }
    a {
        color: var(--white);
        border-radius: 6px;
        padding: var(--m-unit);
        text-transform: uppercase;
        flex: 1;
        .transition;
        .fonte(400,1.2rem,@texto);
        @media screen and (max-width: 720px) {
            border-radius: 0;
            padding: var(--s-unit);
            display: flex;
            gap: 4px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 0.8rem;   
        }
        img {
            display: none;
            @media screen and (max-width: 720px) {
                display: inline-block;
            }
        }
        &.router-link-active, &:hover {
            .transition;
            background: var(--secondary-400);
        }
    }
    button {
        cursor: pointer;
        width: 48px;
        height: 48px;
        align-self: center;
        background: #6BEA08;
        border-radius: 50%;
    }
}
</style>

<script>
export default {
    methods: {
        openWhatsapp() {
            window.open('https://wa.me/5511994307578', 'blank_');
        }
    },
    mounted() {
        var object = document.getElementById('drag-logo'),
        menu = document.getElementById('main-menu'),
        initX, initY, firstX, firstY;

        if (window.outerWidth > 720) {
            object.addEventListener('mousedown', function(e) {

                e.preventDefault();
                initX = menu.offsetLeft;
                initY = menu.offsetTop;
                firstX = e.pageX;
                firstY = e.pageY;

                this.addEventListener('mousemove', dragIt, false);

                window.addEventListener('mouseup', function() {
                    object.removeEventListener('mousemove', dragIt, false);
                }, false);

            }, false);
            
            function dragIt(e) {
                menu.style.left = initX+e.pageX-firstX + 'px';
                menu.style.top = initY+e.pageY-firstY + 'px';
            }
        }
    },
}
</script>