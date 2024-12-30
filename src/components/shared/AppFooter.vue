<template>
    <div class="footer">
        <div>
            <p>Avenida Derechos Humanos 2, Local 12</p>
            <p>Alcorcón</p>
            <p>Madrid</p>
            <p>ES-28924</p>
            <p>España</p>
        </div>
        <p class="tlf">Contacto: 600858783</p>
    </div>
</template>
<style scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    background-color: #303943;
}

p {
    color: white;
}

@media (max-width: 900px) {
    .footer {
        display: block;
        padding: 1rem;
    }
}
</style>