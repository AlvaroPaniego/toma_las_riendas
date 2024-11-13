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
            <div class="infoLanding">
                <h1>
                    Test Aula Nesplora de Realidad Virtual para detección de TDAH
                </h1>
                <img src="../../assets/aula.jpg">
                <p>
                    AULA es un test de atención avanzado que utiliza unas gafas de realidad virtual para simular una
                    clase escolar. Evalúa la tendencia a la distracción, al introducir distractores típicos de una clase
                    escolar. Mira cómo funciona en el vídeo que encontrarás al final de esta página.
                </p>
            </div>
        </div>
        <video class="divWidth" src="https://youtu.be/hoy7kHd9cy8"></video>
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
<style scoped>
.divWidth {
    display: flex;
    align-items: center;
    align-items: first baseline;
    width: 50%;
    padding: 8px;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: auto;
    margin-right: auto;
}

.divWidth img {
    width: 100%;
    object-fit: cover;
}
</style>