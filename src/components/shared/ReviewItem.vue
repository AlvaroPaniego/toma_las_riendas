<template>
    <div class="stickyRight">
        <div class="headerReview">
            <div class="fotoPerfil"></div>
            <p>Lorem ipsum</p>
        </div>
        <PageDivider/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rem blanditiis laudantium porro,
            architecto dolores harum ex fugit deserunt nihil maxime impedit eligendi dolore quos quasi. Dicta alias
            architecto nesciunt.</p>
        <PageDivider/>
        <p>Nota: 5/5</p>
    </div>
</template>
<script>
import PageDivider from './PageDivider.vue';

export default {
    components: {
        PageDivider
    }
}
</script>
<style scoped>
.headerReview {
    display: flex;
    justify-content: start;
    margin: auto;
    padding: 1rem;
}

.headerReview p {
    margin-left: 1rem;
}

.fotoPerfil {
    width: 50px;
    height: 50px;
    background-color: darkorchid;
    border-radius: 25%;
}

.stickyRight {
    padding: 0.5rem;
    margin-top: 5px;
    margin-right: 5px;
    position: fixed;
    top: 0;
    right: 0;
    border: 2px solid black;
    border-radius: 5px;
    width: 15%;
    height: fit-content;
    z-index: 2;
}
</style>