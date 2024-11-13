<template>
    <!-- <AppNavBar/> -->
    <main>
        <ImageCarousel />

        <TextBlock -header="Contacta con nosotros"
            -text="Toma las Riendas es un centro dirigido por Santiago Estrada, psicólogo especialista en neuropsicología.

        Te invitamos a ponerte en contacto con nosotros vía WhatsApp o llamarnos al 600 85 87 83. ¡Te esperamos, será un placer ayudarte!" -footer="" />
        <p class="mapaP">Nuestra ubicación</p>
        <img class="mapa" src="../../assets/mapaPlaceholder.png" alt="">
        <PageDivider />
        <AppFooter />
    </main>
</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
import TextBlock from '../shared/TextBlock.vue';
import PageDivider from '../shared/PageDivider.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        TextBlock,
        PageDivider
    }
}
</script>
<style>
.mapa {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 8px;
    margin-bottom: 5%;
    margin-left: auto;
    margin-right: auto;
}

.mapaP {
    text-align: center;
}
</style>