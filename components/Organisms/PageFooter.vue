<template>
    <footer class="page-footer">
        <div class="foot-info">
            <figure class="col-2">
                <img src="@/assets/imgs/foot-logo-gdy.svg" alt="GDY logo" />
                <figcaption>
                    <p>Av. Brigadeiro Luís Antônio, cj 71 - 7º andar<br/>Jd Paulista, São Paulo</p>
                    <p>Contato: (11) 3888.3280</p>
                    <p>E-mail: <a href="mailto:contato@gdy.com.br">contato@gdy.com.br</a></p>
                </figcaption>
            </figure>
            <ul class="foot-menu col-2">
                <li>
                    <NuxtLink to="/contato">Suporte</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/termos">Termos de Uso</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/politica">Política de Privacidade</NuxtLink>
                </li>
            </ul>
        </div>
        <p>GDY © 2023 - Todos os direitos reservados</p>
        <img class="bg" src="@/assets/imgs/bottom-geometry.svg" />
    </footer>
</template>