<script setup>
import { useMainStore } from '~/store';

const main = useMainStore();

</script>

<template>
    <aside :class="main.$state.visibility" id="case">
        <div id="content">
            <slot />
        </div>
    </aside>
</template>

<script>
import Lenis from "@studio-freight/lenis";
export default {
    mounted() {
        const wrapper = document.getElementById('case');
        const content = document.getElementById('content');

        if (window.outerWidth > 960) {

            let isDown = false;
            let startY;
            let scrollTop;
            
            wrapper.addEventListener('mousedown', (e) => {
                isDown = true;
                startY = e.pageY - wrapper.offsetTop;
                scrollTop = wrapper.scrollTop;
            });
            wrapper.addEventListener('mouseleave', () => {
                isDown = false;
            });
            wrapper.addEventListener('mouseup', () => {
                isDown = false;
            });
            wrapper.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const y = e.pageY - wrapper.offsetTop;
                const walk = (y - startY) * 3;
                wrapper.scrollTop = scrollTop - walk;
            });
        }

        const lenis = new Lenis({
            wrapper: wrapper,
            content: content,
            wheelEventsTarget: wrapper,
            duration: 1.4,
        });
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        };
        requestAnimationFrame(raf);
    }
}
</script>