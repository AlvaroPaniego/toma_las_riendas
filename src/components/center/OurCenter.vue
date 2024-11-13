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
            <ImageCarousel />
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
import ImageCarousel from '../landing/ImageCarousel.vue';
import TextBlock from '../shared/TextBlock.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        PageDivider,
        ImageCarousel,
        TextBlock
    }
}
</script>
<style scoped>
img {
    width: 100%;
}
</style>
