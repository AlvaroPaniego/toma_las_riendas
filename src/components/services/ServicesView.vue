<template>
    <!-- <AppNavBar/> -->
    <main>
        <h1 style="text-align: center; margin-top: 60px;">SERVICIOS</h1>
        <div style="width: 100%;">
            <div class="service-item">
                <div class="div-text">
                    <h1>TDAH</h1>
                    <p style="color: #5d6c7e;">En Estrada-Fernández Psicólogos realizamos una evaluación exhaustiva del
                        TDAH
                        en niños, adolescentes
                        y adultos</p>
                    <p style="color: #d5a08a;">Nuestro proceso incluye entrevistas clínicas, pruebas estandarizadas y
                        análisis del entorno familiar,
                        educativo/ laboral.</p>
                    <p style="color: #5d6c7e;">El objetivo es obtener un diagnóstico preciso que permita diseñar
                        estrategias
                        de intervención
                        ajustadas a las necesidades reales de cada persona, favoreciendo la atención, la organización y
                        el
                        control de la impulsividad</p>
                </div>
                <img class="service-img" src="../../assets/TDAH.jpg" alt="">
            </div>
            <img src="../../assets/SEPARADOR.png" alt="" class="img-center">
            <div class="service-item service-item-par">
                <img class="service-img" src="../../assets/ALTAS CAPACIDADES.png" alt="">
                <div class="div-text">
                    <h1>Altas capacidades</h1>
                    <p style="color: #5d6c7e;">Identificamos y acompañamos a personas con altas capacidades
                        intelectuales
                        mediante evaluaciones que miden tanto el potencial cognitivo como los aspectos emocionales y
                        sociales.</p>
                    <p style="color: #d5a08a;">Entendemos que el talento necesita orientación, por eso ofrecemos
                        informes
                        claros y programas de desarrollo que ayudan a canalizar las capacidades hacia un crecimiento
                        equilibrado, en el aula o en la vida cotidiana.</p>
                </div>
            </div>
            <img src="../../assets/SEPARADOR.png" alt="" class="img-center">
            <div class="service-item service-item-par">
                <img class="service-img" src="../../assets/SUPERVISIÓN.png" alt="">
                <div class="div-text">
                    <h1>Supervisión de casos clínicos/ mentoring piscológico</h1>
                    <p style="color: #5d6c7e;">Nuestra amplia experiencia ha ayudado a decenas de compañeros a la hora
                        de
                        sacar adelante retos terapéuticos, casos difíciles o cambios de paradigma.</p>
                    <p style="color: #d5a08a;">Nuestro conocimiento técnico, combinado con un abordaje pedagógico, ha
                        ayudado a los/ las psicólogos/ as que nos han contactado desde todas partes del mundo a disipar
                        sus
                        dudas y a ofrecerles orientación para reconducir a sus pacientes.</p>
                    <p style="color: #5d6c7e;">Ofrecemos nuestro servicio de supervisión y mentoring de forma online o
                        presencial en formato uno a uno o en grupos reducidos.</p>
                </div>
            </div>
            <img src="../../assets/SEPARADOR.png" alt="" class="img-center">
            <div class="service-item">
                <div class="div-text">
                    <h1>Evaluaciones periciales</h1>
                    <p style="color: #5d6c7e;">El gabinete ofrece evaluaciones periciales especializadas en discapacidad
                        intelectual, daño cerebral adquirido, demencias y otras condiciones que afectan al
                        funcionamiento
                        cognitivo o conductual.</p>
                    <p style="color: #d5a08a;">Nuestros informes se elaboran con rigurosidad metodológica,
                        procedimientos
                        estandarizados y lenguaje técnico, garantizando su validez en procedimientos legales o
                        administrativos.</p>
                    <p style="color: #5d6c7e;">La objetividad, la claridad y la solidez científica son los pilares de
                        nuestro trabajo pericial.</p>
                </div>
                <img class="service-img" src="../../assets/PERICIALES.jpg" alt="">
            </div>
        </div>
        <AppFooter />
    </main>
</template>
<script>
import AppFooter from '../shared/AppFooter.vue';
export default {
    components: {
        AppFooter,
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

.img-center {
    display: flex;
    margin: auto;
}

.divWidth img {
    width: 100%;
    object-fit: cover;
}

.service-item {
    width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 60px;
}

.service-img {
    margin: 20px;
    width: 50%;
    height: 50%;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: -5px -5px #a47e64;
}

@media (max-width: 900px) {
    .divWidth {
        align-items: center;
        align-items: first baseline;
        width: 50%;
        padding: 8px;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .service-item {
        flex-direction: column;
        width: 90%;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .service-item-par {
        flex-direction: column-reverse;
    }

    .div-text {
        width: 100%;
    }

    .img-center {
        width: 100%;
    }
}
</style>