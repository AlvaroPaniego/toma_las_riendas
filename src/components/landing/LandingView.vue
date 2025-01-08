<template>
    <!-- <AppNavBar/> -->
    <main>
        <ImageCarousel :slides="slides" />

        <TextBlock -header="Toma las riendas"
            -text="Toma las Riendas es un centro dirigido por Santiago Estrada, psicólogo especialista en neuropsicología. 
                Acumulamos más de 11 años de experiencia en ámbito de la psicología infanto-juvenil, trastornos del neurodesarrollo y dificultades de aprendizaje. 
                Nos diferenciamos de otros profesionales de este ámbito gracias a un , 
                utilizando las más punteras herramientas de evaluación cognitiva para dar un diagnóstico preciso y por nuestra forma de trabajar, cercana y comprometida."
            -footer="Te invitamos a ponerte en contacto con nosotros en info@tomalasriendas.net. Además puedes contactar vía WhatsApp o llamarnos al 600 85 87 83.  ¡Te esperamos, será un placer ayudarte!" />
        <ContactItem></ContactItem>
        <PageDivider />
        <AppFooter />
    </main>
</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
import TextBlock from '../shared/TextBlock.vue';
import ImageCarousel from '../shared/ImageCarousel.vue';
import PageDivider from '../shared/PageDivider.vue';
import ContactItem from '../shared/ContactItem.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        TextBlock,
        ImageCarousel,
        PageDivider,
        ContactItem
    },
    data: () => ({
        slides: [
            // "https://fastly.picsum.photos/id/152/900/400.jpg?hmac=EIfRFx_PAXt2cpHd-hBoiYzhRC5jiVwtdR1r3rRinD8",
            // "https://fastly.picsum.photos/id/649/900/400.jpg?hmac=WGgoLtBo77eHDBOaja95StTXm5A92r9THMdYeB8SsWI",
            // "https://fastly.picsum.photos/id/901/900/400.jpg?hmac=qkyi6SIz1DNx4pZGhPam9Vtqft_YzQ45QdHBEWtsYG8"
            "bracitos.jpg",
            "logo.png",
            "gafitas.jpg"
        ]
    })
}
</script>