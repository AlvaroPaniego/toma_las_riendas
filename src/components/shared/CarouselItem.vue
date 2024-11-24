<template>
    <Transition name="slide-in" mode="ease-in-out">
        <div class="carousel-item" v-show="currentSlide === index">
            <img :src= "slide"/>
        </div>
    </Transition>
</template>
<script>
export default {
    props: ["slide", "currentSlide", "index"]
}
</script>
<style scoped>
.carousel-item {
    position: absolute;
    display: flex;
    justify-content: center;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.slide-in-enter-from{
    transform: translateX(100%);
}
.slide-in-leave-to {
    transform: translateX(-100%);
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 1s ease-in-out;
}
</style>