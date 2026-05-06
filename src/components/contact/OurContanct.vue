<template>
    <!-- <AppNavBar/> -->
    <main>
        <div class="text-with-image">
            <div class="text-div">
                <h1 style="text-align: center;">¿Como trabajamos?</h1>
                <p style="color: #5d6c7e;">Somos especialistas en evaluación y diagnóstico neuropsicológico de
                    trastornos neurocognitivos y neurodivegencias</p>
                <p style="color: #d5a08a;"> (TDAH, TEA, discapacidad intelectual, trastornos de aprendizaje,
                    demencias...)</p>
                <ul>
                    <li style="color: #d5a08a;">
                        <p>Conocimiento del desarrollo</p>
                    </li>
                    <li style="color: #d5a08a;">
                        <p>Mantenimiento de los diferentes trastornos</p>
                    </li>
                </ul>
            </div>
            <div class="img-div">
                <img src="../../assets/logoTexto.png" alt="" width="100%">
                <h1 style="text-align: center;">Estrada-Fernández Psicólogos</h1>
            </div>
        </div>
        <PageDivider />
        <h1 style="text-align: center;">OBJETIVOS</h1>
        <div class="objectives">
            <div style="width: 1080px;">
                <h2>Acompañamiento Personalizado</h2>
                <p style="text-align: justify; color: #5d6c7e;">En Estrada-Fernández Psicólogos acompañamos a personas
                    de
                    todas las edades en el conocimiento y manejo de su funcionamiento cognitivo, emocional y conductual.
                </p>
                <h2>Abordaje Integral</h2>
                <p style="text-align: justify; color: #5d6c7e;">Trabajamos para mejorar la calidad de vida de quienes
                    presentan TDAH,
                    dificultades de aprendizaje, trastornos del neurodesarrollo, neurodivergencias o alteraciones
                    emocionales, mediante un abordaje integral que incluye evaluación e intervención.</p>
                <h2>Desarrollo y Bienestar</h2>
                <p style="text-align: justify; color: #5d6c7e;">Buscamos que cada persona comprenda sus fortalezas,
                    desarrolle
                    estrategias eficaces y gane confianza para afrontar su día a día con mayor equilibrio y bienestar.
                </p>
            </div>
        </div>
        <AppFooter />
    </main>
</template>
<script>
import AppFooter from '../shared/AppFooter.vue';
import PageDivider from '../shared/PageDivider.vue';
export default {
    components: {
        AppFooter,
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

/* .text-with-image {
    width: 1080px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 50px;
} */

.objectives {
    padding: 40px;
    display: flex;
    margin: auto;
    justify-content: center;
}

@media (max-width: 900px) {
    .fila {
        display: block;
        justify-content: center;
        margin: auto;
    }

    .img-div {
        width: 90%;
    }
}
</style>