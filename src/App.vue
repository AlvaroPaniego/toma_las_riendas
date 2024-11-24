<template>
    <div>
        <!-- <div class="sticky">
            <p>Contacta con nosotros:</p>
            <div class="contacto">
                <img src="./assets/logoWhatsapp.jpg" alt="" width="50px">
                <p>+34 600 85 87 83</p>
            </div>
        </div> -->
        <nav class="centrado">
            <router-link class="enlaceImg" to="/">
                <img src="./assets/logoTexto.png" width="100">
            </router-link>
            <div>
                <router-link to="/servicios" class="enlace">Servicios</router-link>
                <router-link to="/tdah" class="enlace">¿Que es el TDAH?</router-link>
                <router-link to="/nuesto_centro" class="enlace">Nuestro centro</router-link>
                <router-link to="/contacto" class="enlace">Nosotros/Contacto</router-link>
                <router-link to="/privacidad" class="enlace">Política de privacidad</router-link>
            </div>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="ease-out">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script>
</script>
<style>
.contacto{
    display: flex;
    justify-content: center;
    margin: auto;
}
.sticky{
    margin-top: 5px;
    margin-left: 5px;
    position: sticky;
    top: 0;
    border: 2px solid #427296;
    width: 15%;
    height: fit-content;
}
.centrado {
    background-color: #303943;
    padding: 1rem;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    border-radius: 15px;
}
.enlaceImg{
    background-color: white;
    border-radius: 25%;
    padding: 1px;
}

.enlace {
    margin: 0px;
    color: white;
    text-decoration: none;
    padding: 15px;
    background-color: #427296;
    border-bottom: 5px solid cadetblue;
    border-top: 5px solid #427296;
    border-left: 0px solid #427296;
    border-right: 0px solid #427296;
    max-height: 10%;
}

nav .enlace:hover,
nav .enlace.router-link-exact-active {
    border: 5px solid cadetblue;
    border-left: 0px solid cadetblue;
    border-right: 0px solid cadetblue;
    background-color: cadetblue;
}
main {
    position: absolute;
    top: 15%;
    will-change: transform, opacity;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-active,
.slide-leave-active {
    transition: 0.5s ease-out;
}
</style>