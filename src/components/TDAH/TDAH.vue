<template>
    <main>
        <h1 style="text-align: center; margin-top: 60px;">Evaluación de TDAH y funcionamiento cognitivo</h1>
        <div class="text-with-image">
            <div class="img-div">
                <img src="../../assets/trabajando_con_psicóloga_en_evaluación.png" alt="" class="shadow-img" width="100%" />
            </div>
            <div class="text-div">
                <h1 style="text-align: center;">Entiende qué está pasando y qué hacer con ello
                    ¿Notas que algo no encaja?</h1>
                    <p style="color: #d5a08a;">Dificultad para concentrarse o mantener la atención
                        Problemas en el rendimiento académico o laboral
                        Desorganización, impulsividad o olvidos constantes
                        Sensación de “rendir por debajo” de lo esperado</p>
                    <p style="color: #5d6c7e;">La evaluación neuropsicológica permite salir de la duda y obtener respuestas claras y objetivas.</p>
            </div>
        </div>
        <div class="text-with-image">
            <div class="img-div">
                <img src="../../assets/evaluacion_adultos.png" alt="" class="shadow-img" width="100%" />
            </div>
            <div class="text-div">
                <h1 style="text-align: center;">¿Qué hacemos exactamente?</h1>
                <p style="color: #d5a08a;">Realizamos un análisis completo del funcionamiento cognitivo mediante pruebas estandarizadas y clínicamente validadas, comparando el rendimiento con lo esperado para su edad.</p>
                <p style="color: #5d6c7e;">Evaluamos:</p>
                <ul>
                    <li><p>Atención y concentración</p></li>
                    <li><p>Funciones ejecutivas (organización, control, planificación)</p></li>
                    <li><p>Memoria</p></li>
                    <li><p>Lenguaje</p></li>
                    <li><p>Inteligencia (CI)</p></li>
                </ul>
                <p style="color: #5d6c7e;">No solo vemos si hay dificultad, sino cómo y por qué ocurre. Un diagnóstico claro, no suposiciones</p>
                <p style="color: #5d6c7e;">A diferencia de una simple valoración orientativa, aquí obtienes:</p>
                <ul>
                    <li><p>Un perfil cognitivo completo</p></li>
                    <li><p>Identificación de puntos fuertes y débiles</p></li>
                    <li><p>Datos objetivos para confirmar o descartar TDAH</p></li>
                    <li><p>Explicación clínica comprensible</p></li>
                </ul>
                <p style="color: #d5a08a;">Esto permite entender si el problema es realmente TDAH u otra dificultad.</p>
                <h1 style="text-align: center;">¿Cómo es el proceso?</h1>
                <ul>
                    <li>
                        <p>Entrevista clínica + cuestionario</p>
                        <p>Analizamos el caso en profundidad (en niños, también con información de los padres).</p>
                    </li>
                    <li>
                        <p>Evaluación con pruebas específicas></p>
                        <p>Aplicamos test estandarizados y herramientas clínicas avanzadas.</p>
                    </li>
                    <li>
                        <p>Informe y explicación</p>
                        <p>Recibes un informe completo con conclusiones claras y recomendaciones concretas.</p>
                    </li>
                </ul>
                <h1 style="text-align: center;">¿Para quién es?</h1>
                <ul>
                    <li><p>Niños con dificultades escolares, atención o conducta.</p></li>
                    <li><p>Adultos con sospecha de TDAH.</p></li>
                    <li><p>Personas que quieren entender su rendimiento cognitivo.</p></li>
                    <li><p>Lenguaje.</p></li>
                    <li><p>Casos en los que se necesita un informe para colegio o especialistas.</p></li>
                </ul>
                <p style="color: #5d6c7e;">No se trata solo de poner una etiqueta. Se trata de entender qué está pasando y tener un plan claro para mejorar</p>
            </div>
        </div>

        <AppFooter />
    </main>
</template>
<script>
import AppFooter from '../shared/AppFooter.vue';
export default {
    components: {
        // AppNavBar,
        AppFooter,
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
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
    width: 50%;
}

.text-div {
    padding: 40px;
    text-align: justify;
}
</style>