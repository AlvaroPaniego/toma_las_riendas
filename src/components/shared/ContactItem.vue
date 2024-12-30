<template>
    <div class="stickyLeft">
        <p>Contacta con nosotros:</p>
        <div class="contacto">
            <img src="../../assets/icon-telephone.png" alt="" width="50px">
            <p>+34 600 85 87 83</p>
        </div>
    </div>
</template>
<style scoped>
.contacto {
    display: flex;
    justify-content: center;
    margin: auto;
}

.contacto p {
    margin-left: 1rem;
}

.stickyLeft {
    padding: 0.5rem;
    margin-top: 5px;
    margin-left: 5px;
    position: fixed;
    top: 0;
    background-color: #427296;
    border: 4px solid #303943;
    width: 15%;
    height: fit-content;
    border-radius: 5px;
    z-index: 2;
}

@media (max-width: 900px) {
    .stickyLeft {
        padding: 0.5rem;
        margin: auto;
        top: 0;
        background-color: #427296;
        border: 4px solid #303943;
        width: 75%;
        height: fit-content;
        border-radius: 5px;
        z-index: 2;
        position: relative;
    }
}
</style>