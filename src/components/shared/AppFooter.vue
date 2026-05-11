<template>
    <div class="footer">
        <div style="height: 50px;"></div>
        <div class="mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4689.121994540358!2d-3.8165854340020067!3d40.35301226962136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd41893412a74569%3A0xa56a8367bc73b743!2sAv.%20de%20los%20Derechos%20Humanos%2C%202%2C%2028924%20Alcorc%C3%B3n%2C%20Madrid!3m2!1d40.3520373!2d-3.8165993!5e0!3m2!1ses!2ses!4v1761415854449!5m2!1ses!2ses"
                style="border:0; height: 100%; width: 100%" allowfullscreen="false" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="footer-content">
            <div class="footer-links">
                <h2>Enlaces útiles</h2>
                <p><router-link to="/">Inicio</router-link></p>
                <p><router-link to="/servicios">Servicios</router-link></p>
                <p><router-link to="/contacto">Sobre nosotros</router-link></p>
            </div>
            <div class="footer-links">
                <h2>Acuerdos legales</h2>
                <p><router-link to="/privacidad">Protección de datos</router-link></p>
            </div>
            <div class="footer-links">
                <h2>Contacto</h2>
                <div class="contact">
                    <img src="../../assets/icon-telephone.png" alt="" width="40px">
                    <p>600 858 783</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
    background-color: #1D2D35;
}

.contact {
    display: flex;
    margin: auto;
    justify-content: space-around;
}

.footer-content {
    width: 1080px;
    display: flex;
    justify-content: space-between;
    margin: auto;
}

a {
    text-decoration: none;
    color: #e8e8e2;
}

p {
    color: #e8e8e2;
}

h2 {
    color: #e8e8e2;
}

.mapa {
    display: flex;
    margin: auto;
    padding: 50px;
    width: 1080px;
    height: 250px;
}

@media (max-width: 900px) {
    .footer-content {
        display: block;
        margin: auto;
        text-align: center;
        width: 100%;
    }

    .mapa {
        padding-top: 150px;
        width: 90%;
        padding: 0px;
    }

    .footer-links {
        text-align: center;
        margin-top: 50px;
    }

    .contact {
        justify-content: center;
        gap: 10px;
    }
}
</style>