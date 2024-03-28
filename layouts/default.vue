<template>
    <main>
        <MoleculesToast />
        <OrganismsPageHeader />
        <div class="page">
            <slot />
        </div>
        <OrganismsPageFooter />
        <KeepAlive>
            <MoleculesMenu />
        </KeepAlive>
    </main>
</template>