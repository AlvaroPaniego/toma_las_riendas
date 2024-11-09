<template>
    <div class="centrado">
        <router-link to="/servicios">
             <img src="../../assets/logoTexto.png" width="100">
        </router-link>
        <router-link to="/servicios" class="enlace">Servicios</router-link>
        <router-link to="/tdah" class="enlace">¿Que es el TDAH?</router-link>
        <router-link to="/nuesto_centro" class="enlace">Nuestro centro</router-link>
        <router-link to="/contacto" class="enlace">Nosotros/Contacto</router-link>
        <router-link to="/privacidad" class="enlace">Política de privacidad</router-link>
    </div>
</template>
<style>
.centrado{
    display: flex;
    width:fit-content;
    justify-content: center;
    align-items: center;
    margin:auto;
}
.enlace{
    margin: 0px 5px;
    color: white;
    text-decoration: none;
    padding: 15px;
    background-color: #427296;
}
</style>