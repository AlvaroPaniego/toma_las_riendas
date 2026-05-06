<template>
    <div id="carrusel" class="fondoCarrusel"> 
            <img class="imgCarrusel" src="../../assets/bracitos.jpg" alt="">
            <img class="imgCarrusel" src="../../assets/logo.png" alt="">
            <img class="imgCarrusel" src="../../assets/gafitas.jpg" alt="">
        </div>
</template>
<style>
.fondoCarrusel {
    width: fit-content;
    border: 4px solid #303943;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #303943;
    overflow: hidden;
}

.fondoCarrusel img {
    width: 32%;
}
</style>
<script>

function setImageHeight(){
    const images = document.getElementsByClassName('imgCarrusel');
    if(images != null){
        let minHeight = Math.min(...Array.from(images).map(img => img.height));
        document.getElementById('carrusel').style.height = minHeight + 'px';
    }
}

window.onload = setImageHeight
window.onresize = setImageHeight
</script>