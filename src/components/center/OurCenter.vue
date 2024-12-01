<template>
    <!-- <AppNavBar/> -->
    <main>
        <div class="divWidth">
            <div class="infoLanding">
                <h1>
                    Nuestos valores
                </h1>
                <div class="fila">
                    <div class="espacio">
                        <img src="/src/assets/seriedad.png" alt="">
                    </div>
                    <div class="texto">
                        <h1>SERIEDAD</h1>
                        <p>Este enfoque da lugar a una manera de trabajar, consensuada y
                            respetada entre todos los profesionales sanitarios (médicos de
                            cabecera, psiquiatras, neurólogos...). Gracias a este trabajo,
                            pormenorizado y objetivo, hemos conseguido a lo largo de los años
                            una red de colaboradores de gran valor en estos ámbitos y que pueden
                            intervenir en casos que así lo requieran.</p>
                    </div>
                </div>
                <div class="fila">
                    <div class="texto">
                        <h1>OBJETIVIDAD</h1>
                        <p>Estas técnicas nos permiten ser capaces de valorar, diagnosticar y
                            tratar de forma objetiva a todos nuestros pacientes. Nosotros no
                            opinamos; nosotros medimos , diagnosticamos y tratamos con
                            terapia basada en la evidencia científica.
                            Ser objetivo también ayuda a comprender tu complejidad y a que
                            también conozcas tus puntos fuertes y tus virtudes, pues muchas veces
                            están ahí, pero no se hacen visibles hasta que se evalúan.</p>
                    </div>
                    <div class="espacio">
                        <img src="/src/assets/diana.png" alt="">
                    </div>
                </div>
                <div class="fila">
                    <div class="espacio">
                        <img src="/src/assets/transparencia.png" alt="">
                    </div>
                    <div class="texto">
                        <h1>TRANSPARENCIA</h1>
                        <p>En Toma Las Riendas tenemos también un enfoque pedagógico.
                            Entendemos que en el ámbito de la psicología pueden surgirte
                            preguntas, confusión y creencias populares que pueden generar
                            dificultades para comprender la situación en la que te encuentras o los
                            objetivos de la terapia. No te preocupes, pues nosotros siempre
                            intentaremos resolver tus dudas. Una persona que comprende el
                            objeto y la finalidad del tratamiento mejorará antes y de forma más
                            estable.</p>
                    </div>
                </div>
                <div class="fila">
                    <div class="texto">
                        <h1>EMPATÍA</h1>
                        <p>Siempre intentamos echar una mano en cualquier duda que surja,
                            aclaración, comunicación con otros profesionales, redacción y entrega
                            de documentación... Somos conscientes gran paso que supone asistir o
                            traer a tus hijos a terapia psicológica y por eso nos volcamos al cien por
                            cien. Nos gusta conocer a la gente más allá de sus problemas y nos
                            encanta la gente educada, con valores, virtudes y ganas de
                            mejorar</p>
                    </div>
                    <div class="espacio">
                        <img src="/src/assets/empatia.png" alt="">
                    </div>
                </div>
            </div>
            <ImageCarousel style="margin-bottom: 5rem;" :slides="slides" />
        </div>
        <PageDivider />
        <AppFooter />
    </main>

</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
import PageDivider from '../shared/PageDivider.vue';
import ImageCarousel from '../shared/ImageCarousel.vue';
// import TextBlock from '../shared/TextBlock.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        PageDivider,
        ImageCarousel,
        // TextBlock
    },
    data: () => ({
        slides: [
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
.fila {
    display: flex;
    justify-content: center;
    margin: auto;
}

.fila div {
    padding: 1rem;
    width: 50%;
}
</style>
