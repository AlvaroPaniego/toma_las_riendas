<template>
    <!-- <AppNavBar/> -->
    <main>
        <div class="infoLanding">
            <h1>
                Qué es el TDAH
            </h1>
            <img src="../../assets/ninioFrustrao.jpg">
            <p>
                El Trastorno por Déficit de Atención e Hiperactividad, también conocido por sus siglas como TDAH es un
                trastorno del desarrollo neurobiológico caracterizado por la dificultad para mantener la atención, la
                hiperactividad o exceso de movimiento y la impulsividad o déficit en el control de impulsos. Todas estas
                dificultades afectan significativamente en el día a día de los chicos/ as, ya que afectan a su
                rendimiento en casa, en el colegio, con sus amigos...
                Si bien existen distintas estimaciones en cuanto a su prevalencia en la infancia, las cifras más
                consensuadas la sitúa en torno a un 4-6% de la población infantil.


                En Toma las Riendas llevamos trabajando con chicos y chicas diagnosticados de TDAH y otros trastornos
                del desarrollo y de conducta desde hace más de 10 años. Nuestra filosofía de trabajo gira en torno a
                tres ejes prinicipales:
            </p>
            <li>
                La evaluación neuropsicológica
            </li>
            <p>
                Mediante esta evaluación establecemos un perfil cognitivo o “mapa” de puntos fuertes y débiles del
                niño/a para así entender el origen y las repercusiones de su trastorno. Para ello comparamos las
                puntuaciones obtenidas en las distintas pruebas (estandarizadas y aprobadas por la comunidad científica
                internacional) con las esperables según su nivel de edad. De esta forma conoceremos las desviaciones
                significativas (por encima y por debajo de la media) en el rendimiento del niño/a y tendremos un modelo
                explicativo del origen de sus dificultades.
            </p>
            <li>
                La intervención cognitivo- conductual
            </li>
            <p>
                Todas las dificultades encontradas en la evaluación se manifiestan en forma de conductas en el día a
                día: problemas para estudiar, para mantener hábitos y rutinas, falta de interés, falta de autonomía...
                asimismo vemos con frecuencia dificultades mayores de comportamiento tales como las mentiras, la
                agresividad, el oposicionismo, la baja tolerancia a la frustración, la falta de autoestima.. en Toma las
                Riendas trabajamos implementando pautas de conducta tanto para el chico /a como para su entorno
                familiar. De esta forma ayudamos a mejorar significativamente las relaciones familiares y la imagen que
                el chico/a tiene de si mismo/a, haciéndole ver su potencial y facilitando que él participe activamente
                en su mejoría.
            </p>
            <li>
                El trabajo en grupo
            </li>
            <p>
                Desde hace años venimos observando una gran carencia en la terapia psicológica tradicional: el trabajo
                profundo de las relaciones sociales. En Toma las Riendas consideramos que es fundamental conseguir que
                los chicos/as se sientan parte de un equipo, ayudándoles a ver que no están solos y que no son tan
                especiales o “raros” como creen, facilitando a que establezcan lazos saludables de igualdad entre ellos
                y que descubran otras habilidades y talentos a través de un hobby. Asimismo, nos da la oportunidad a los
                profesionales de recoger información valiosísima acerca de cómo se comporta en grupo de iguales el
                chico/ a. Por esta razón, en Toma las Riendas planteamos como parte de la terapia, trabajo en grupo y
                actividades de ocio saludable tanto para los que vienen a nuestro centro como a otros del barrio
                (talleres de maquetas, pintura de miniaturas, juegos de mesa...).
            </p>
            <p class="firma">Santiago Estrada, psicólogo especialista en neuropsicología. </p>
        </div>
        <PageDivider />
        <AppFooter />
    </main>
</template>
<script>
// import AppNavBar from '../shared/AppNavBar.vue';
import AppFooter from '../shared/AppFooter.vue';
import PageDivider from '../shared/PageDivider.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
        PageDivider
    }
}
</script>
<style scoped>
.infoLanding li {
    text-decoration: underline;
    font-weight: bolder
}

.firma {
    font-style: italic;
}
</style>