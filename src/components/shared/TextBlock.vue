<template>
    <div id="container" class="infoLanding">
            <h1>
                {{ Header }}
            </h1>
            <p>
                {{ Text }}             
            </p>
            <p>
                {{ Footer }}
            </p>
        </div>
</template>
<script>
export default{
    props:['Header', 'Text', "Footer", "ImgSource"]
}
</script>
<style>
.infoLanding{
    width: 50%;
    padding: 8px;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: auto;
    margin-right: auto;
}
.infoLanding p {
    margin-top: 20px;
    text-align: justify;
}
.infoLanding h1 {
    font-weight: 400;
    text-align: start;
    color: cadetblue;
}
.infoLanding span {
    font-weight: bold;
}
</style>