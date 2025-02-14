<template>
    <!-- <AppNavBar/> -->
    <main>
        <div class="fila infoLanding">
            <img style="display: flex; margin: auto; width: 75%;padding: 1rem;" src="../../assets/portrait_1.jpg"
                alt="">

            <img style="display: flex; margin: auto; width: 75%; padding: 1rem;" src="../../assets/portrait_2.jpg"
                alt="">

        </div>
        <TextBlock
            -header="Santiago Estrada - Neuropsicólogo y Psicólogo General Sanitario (Nº M-22152) y Nuria Férnandez - Psicóloga colegiada (N.º M-41819)"
            -text="Somos especialistas en evaluación y diagnóstico neuropsicológico de trastornos neurocognitivos y del neurodesarrollo en niños, adolescentes y adultos (TDAH, TEA, discapacidad intelectual, trastornos de aprendizaje...). Desde la psicoterapia cognitivo-conductual abordarmos trastornos de conducta, trastornos de personalidad y patologías psiquiátricas como TOC, ansiedad, depresión y fobias."
            -footer="Nuestro enfoque combina rigor técnico con una clara vocación pedagógica, ayudando a pacientes y familiares a comprender sus dificultades sin etiquetas ni prejuicios. Nos caracterizamos por un trato cercano, resolutivo y claro, utilizando metáforas y explicaciones visuales para hacer más accesible la terapia. La transparencia y la comunicación abierta son pilares fundamentales en nuestro trabajo." />
        <TextBlock -header="Contacta con nosotros"
            -text="Toma las Riendas es un centro dirigido por Santiago Estrada, psicólogo especialista en neuropsicología. 
                Acumulamos más de 11 años de experiencia en ámbito de la psicología infanto-juvenil, trastornos del neurodesarrollo y dificultades de aprendizaje. 
                Nos diferenciamos de otros profesionales de este ámbito gracias a un , 
                utilizando las más punteras herramientas de evaluación cognitiva para dar un diagnóstico preciso y por nuestra forma de trabajar, cercana y comprometida."
            -footer="Te invitamos a ponerte en contacto con nosotros en info@tomalasriendas.net. Además puedes contactar vía WhatsApp o llamarnos al 600 85 87 83.  ¡Te esperamos, será un placer ayudarte!" />

        <p class="mapaP">Nuestra ubicación</p>
        <!-- <img class="mapa" src="../../assets/mapaPlaceholder.png" alt=""> -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.125804140509!2d-3.8191742234661357!3d40.35204135957317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41893412a74569%3A0xa56a8367bc73b743!2sSantiago%20Estrada%20Psic%C3%B3logos!5e0!3m2!1ses!2ses!4v1733077481001!5m2!1ses!2ses"
            class="mapa" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
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

.fila {
    display: flex;
    justify-content: center;
    margin: auto;
}

.fila div {
    padding: 1rem;
    width: 50%;
}

@media (max-width: 900px) {
    .fila {
        display: block;
        justify-content: center;
        margin: auto;
    }
}
</style>