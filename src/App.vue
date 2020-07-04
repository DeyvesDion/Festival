<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Accueil</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <NavBar></NavBar>
        <router-view />
        <CookieLaw></CookieLaw>
        <Footer></Footer>
    </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar/NavBar.vue";
import CookieLaw from "@/components/CookieLaw/CookieLaw.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    components: {
        NavBar,
        CookieLaw,
        Footer,
    },
};
</script>

<style src="../src/components/NavBar/NavBar.css" scoped></style>
