<template>
    <!-- <AppNavBar/> -->
    <main>
        <TextBlock -img-source="" -header="Servicios/ terapias"
            -text="En Toma las Riendas trabajamos para ofrecerte el mejor diagnóstico y tratamiento adaptado a las necesidades de cada paciente."
            -footer="" />
        <PageDivider />
        <div class="divWidth">
            <div class="infoLanding">
                <h1>
                    Evaluación y terapia neuropsicológica infantil y adultos
                </h1>
                <img src="../../assets/libretas.jpg">
                <p>
                    Ofrecemos terapia neuropsicológica infanto-juvenil y adultos: TDAH, dislexia, transtornos
                    emocionales y de aprendizaje, daño cerebral. Además realizamos evaluaciones completas adaptadas a
                    las necesidades de cada paciente.
                </p>
            </div>
            <ImageCarousel :slides="slides" />
        </div>
        <video class="divWidth" src="https://youtu.be/hoy7kHd9cy8"></video>
        <PageDivider />
        <AppFooter />
    </main>

</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
import PageDivider from '../shared/PageDivider.vue';
import ImageCarousel from '../shared/ImageCarousel.vue';
import TextBlock from '../shared/TextBlock.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        PageDivider,
        ImageCarousel,
        TextBlock
    },
    data: () => ({
        slides:[
            "https://fastly.picsum.photos/id/152/900/400.jpg?hmac=EIfRFx_PAXt2cpHd-hBoiYzhRC5jiVwtdR1r3rRinD8",
            "https://fastly.picsum.photos/id/649/900/400.jpg?hmac=WGgoLtBo77eHDBOaja95StTXm5A92r9THMdYeB8SsWI",
            "https://fastly.picsum.photos/id/901/900/400.jpg?hmac=qkyi6SIz1DNx4pZGhPam9Vtqft_YzQ45QdHBEWtsYG8"
            // "../../assets/bracitos.jpg",
            // "../../assets/logo.png",
            // "../../assets/gafitas.jpg"
        ]
    })
}
</script>
<style scoped>
img {
    width: 100%;
}
</style>
