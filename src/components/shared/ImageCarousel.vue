<template>
    <!-- <div class="carousel">
        <div class="carousel-inner">
            <carousel-item 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :currentSlide = "currentSlide"
                :index = "index"
            ></carousel-item>
        </div>
    </div> -->
    <div id="carrusel" class="fondoCarrusel"> 
            <img class="imgCarrusel" src="../../assets/bracitos.jpg" alt="">
            <img class="imgCarrusel" src="../../assets/logo.png" alt="">
            <img class="imgCarrusel" src="../../assets/gafitas.jpg" alt="">
        </div>
</template>
<script>
//import CarouselItem from './CarouselItem.vue';

export default {
    props: ['slides'],
    //components: { CarouselItem },
    data: () => ({
        currentSlide: 0,
        slideInterval: null
    }),
    methods:{
        setCurrentSlide(index){
            console.log(index)
            this.currentSlide = index
        }
    },
    mounted() {
        this.slideInterval = setInterval(() =>{
            const index = this.currentSlide < this.slides.lenght - 1 ? this.currentSlide + 1 : 0
            this.setCurrentSlide(index)
        }, 3000)
    },
    beforeMount() {
        clearInterval(this.slideInterval)
    }
}


//javascript
// function setImageHeight(){
//     const images = document.getElementsByClassName('imgCarrusel');
//     if(images != null){
//         let minHeight = Math.min(...Array.from(images).map(img => img.height));
//         document.getElementById('carrusel').style.height = minHeight + 'px';
//     }
// }

// window.onload = setImageHeight
// window.onresize = setImageHeight
</script>
<style scoped>

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

/* .carousel{
    display: flex;
    justify-content: center;
}
.carousel-inner{
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
} */
</style>