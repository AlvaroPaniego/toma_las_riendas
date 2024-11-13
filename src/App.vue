<template>
    <div>
        <nav class="centrado">
            <router-link to="/">
                <img src="./assets/logoTexto.png" width="100">
            </router-link>
            <router-link to="/servicios" class="enlace">Servicios</router-link>
            <router-link to="/tdah" class="enlace">¿Que es el TDAH?</router-link>
            <router-link to="/nuesto_centro" class="enlace">Nuestro centro</router-link>
            <router-link to="/contacto" class="enlace">Nosotros/Contacto</router-link>
            <router-link to="/privacidad" class="enlace">Política de privacidad</router-link>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script>
// import AppNavBar from './components/shared/AppNavBar.vue';
// export default{
//     AppNavBar
// }
</script>
<style>
body {
    margin: 0;
    padding-top: 8px;
}

.centrado {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: auto;
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

/* nav .enlace.router-link-exact-active{
    border: 5px solid gray;
    border-left: 0px solid gray;
    border-right: 0px solid gray;
    background-color: gray;
} */
main {
    top: 30px;
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
</style>