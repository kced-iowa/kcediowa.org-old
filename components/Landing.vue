<template>
    <div class="landing-container">
        <div class="landing-text">
            <span class="top">&mdash; Welcome To &mdash;</span>
            <span class="bottom">Sigourney Area Development Corporation</span>
        </div>
        <div class="side">

        </div>
        <div class="button-container">
            <a href="#anchor">
                <span>Test</span>
            </a>
        </div>
    </div>
</template>

<script setup>

</script>


<style>

    .landing-container {
        height: 100vh;
        background-color: #000;
        /* background-image: url('~/img/city.jpg');
        background-size: cover; */
    }
    .landing-text {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0px 0px 80px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .top {
        font-size: 1.75vw;
    }
    .bottom {
        font-size: 2.75vw;
    }
    .side {
        position: absolute;
        right: 0;
        height: 100%;
        width: 30vw;
    }
    .button-container {
        position: absolute;
        bottom: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>