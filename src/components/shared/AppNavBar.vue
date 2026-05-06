<template>
    <div class="centrado">
        <router-link to="/servicios">
            <img src="../../assets/logoTexto.png" width="100">
        </router-link>
        <router-link to="/servicios" class="enlace">Servicios</router-link>
        <router-link to="/nuesto_centro" class="enlace">Sobre nosotros</router-link>
    </div>
</template>
<style>
.centrado {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.enlace {
    margin: 0px 5px;
    color: #1D2D35;
    text-decoration: none;
    padding: 15px;
}
</style>