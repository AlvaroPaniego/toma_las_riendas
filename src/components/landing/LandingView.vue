<template>
    <!-- <AppNavBar/> -->
    <main>
        <!-- <ImageCarousel :slides="slides" /> -->
        <div style="position: relative; margin-bottom: 50px;">
            <img src="../../assets/background_main.png" alt="" width="100%">
            <div class="over-image">
                <h1 style="text-align: center; color: #1D2D35;">ESTRADA-FERNANDEZ PSICOLOGOS</h1>
                <div class="button">
                    <router-link to="/contacto" style="text-decoration: none; color: #1D2D35;">Ver más</router-link>
                </div>
            </div>
        </div>

        <div class="text-with-image">
            <div class="img-div">
                <img src="../../assets/como_trabajamos.png" alt="" class="shadow-img" width="100%" />
            </div>
            <div class="text-div">
                <h1 style="text-align: center;">¿Como trabajamos?</h1>
                <p style="color: #5d6c7e;">En Estrada- Fernández Psicólogos empleamos únicamente las técnicas más
                    avanzadas para la valoración
                    cognitiva</p>
                <p style="color: #d5a08a;">Cuestionarios psicométricos, software clínico y baterías cognitivas
                    estandarizadas</p>
                <div class="button">
                    <router-link to="/servicios" style="text-decoration: none; color: #1D2D35;">Ver más</router-link>
                </div>
            </div>
        </div>
        <PageDivider />
        <div class="text-with-image">
            <div class="text-div">
                <h1 style="text-align: center;">¿Como trabajamos?</h1>
                <p style="color: #5d6c7e;">Somos especialistas en evaluación y diagnóstico neuropsicológico de
                    trastornos neurocognitivos y neurodivegencias</p>
                <p style="color: #d5a08a;"> (TDAH, TEA, discapacidad intelectual, trastornos de aprendizaje,
                    demencias...)</p>
                <div class="button">
                    <router-link to="/contacto" style="text-decoration: none; color: #1D2D35;">Ver más</router-link>
                </div>
            </div>
            <div class="img-div">
                <img src="../../assets/logoTexto.png" alt="" width="100%">
                <h1 style="text-align: center;">Estrada-Fernández Psicólogos</h1>
            </div>
        </div>
        <AppFooter></AppFooter>
    </main>
</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
// import ImageCarousel from '../shared/ImageCarousel.vue';
import PageDivider from '../shared/PageDivider.vue';
export default {
    components: {
        // AppNavBar,
        // ImageCarousel,
        PageDivider,
        AppFooter
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
<style>
.over-image {
    position: absolute;
    width: 100%;
    top: 40%;
    text-align: center;
}

.button {
    background-color: #d5a08a;
    color: #1D2D35;
    padding: 10px;
    border-radius: 15px;
    box-shadow: -5px -5px #a47e64;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
}

.text-with-image {
    width: 1080px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.shadow-img {
    border-radius: 15px;
    box-shadow: -8px -8px #a47e64;
}

.text-div {
    padding: 40px;
    text-align: justify;
}

@media (max-width: 900px) {

    /*-.text-with-image {
        display: block;
    }
        */
    main {
        width: 100%;
    }

    .over-image {
        top: 5%;
    }

    .text-with-image {
        flex-direction: column;
        width: 100%;
        padding: 0px;
        margin-top: 0px;
    }

    .text-div {
        width: 55%;
        font-size: large;
    }

    .button {
        margin-top: 50px;
    }

    .img-div {
        width: 90%;
    }
}
</style>