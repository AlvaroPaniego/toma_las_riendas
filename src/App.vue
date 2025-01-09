<template>
    <div>
        <!-- <ReviewBlock></ReviewBlock> -->
        <nav class="centrado">
            <router-link class="enlaceImg" to="/">
                <img src="./assets/logoTexto.png" width="100">
            </router-link>
            <ul class="menu">
                <li><router-link to="/servicios" class="enlace">Servicios</router-link></li>
                <li><router-link to="/tdah" class="enlace">¿Que es el TDAH?</router-link></li>
                <li><router-link to="/nuesto_centro" class="enlace">Nuestro centro</router-link></li>
                <li><router-link to="/contacto" class="enlace">Nosotros/Contacto</router-link></li>
                <li><router-link to="/privacidad" class="enlace">Política de privacidad</router-link></li>
            </ul>
            <div class="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="ease-out">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<style>
p {
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1,
a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.centrado {
    background-color: #303943;
    padding: 1rem;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    margin: auto;
    border-radius: 15px;
}

.enlaceImg {
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

.menu {
    list-style-type: none;
}

.menu li {
    display: inline;
}

.menu-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 4px;
    background-color: white;
    border-radius: 2px;
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

@media (min-width: 901px) and (max-width: 1800px) {
    .enlace {
        margin: 0px;
        color: white;
        text-decoration: none;
        padding: 15px;
        background-color: transparent;
        border-bottom: 0px solid cadetblue;
        border-top: 0px solid #427296;
        border-left: 0px solid #427296;
        border-right: 0px solid #427296;
        max-height: 10%;
    }

    nav .enlace:hover,
    nav .enlace.router-link-exact-active {
        border: 0px solid cadetblue;
        border-left: 0px solid cadetblue;
        border-right: 0px solid cadetblue;
        background-color: transparent;
        color: darkgoldenrod;
    }
}

/* Media Query para pantallas menores a 900px */
@media (max-width: 900px) {
    .menu {
        display: none;
        position: absolute;
        top: 120px;
        left: 0;
        width: 100%;
        background-color: #333;
        flex-direction: column;
        align-items: center;
        z-index: 2;

    }

    .menu li {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .menu.active {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }

    main {
        position: absolute;
        top: 20%;
        will-change: transform, opacity;
    }

    p {
        font-size: medium;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: justify;
    }

    h1,
    a {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: justify;
    }

    nav .enlace {
        border: 0px solid transparent;
        border-left: 0px solid transparent;
        border-right: 0px solid transparent;
        background-color: transparent;
    }

    .router-link-active.router-link-exact-active.enlace {
        border: 0px solid transparent;
        border-left: 0px solid transparent;
        border-right: 0px solid transparent;
        background-color: cadetblue;
        padding: 1px;
        border-radius: 5%;

    }
}
</style>

<script>
// import ContactItem from './components/shared/ContactItem.vue';
// import ReviewBlock from './components/shared/ReviewItem.vue';
export default {
    components: {
        // ReviewBlock,
        // ContactItem
    },
    mounted() {
        var menuToggle = document.getElementById("menu-toggle")
        console.log(menuToggle);
        menuToggle.addEventListener("click", function () {
            document.querySelector(".menu").classList.toggle("active");
        });
    }
}
</script>